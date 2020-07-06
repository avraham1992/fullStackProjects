from flask import Flask, request, abort, make_response
import mysql.connector as mysql
from flask_cors import CORS
import json
import bcrypt
import uuid

db = mysql.connect(
	host = "localhost",
	user = "root",
	passwd = "fullstack",
	database = "blog")

app = Flask(__name__)
CORS(app)

@app.route('/getPostById/<id>', methods=['GET'])
def getPostById(id):
    query = "select id, title, content, author, published, image from posts where id = %s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    headers = ['id', 'title', 'content', 'author', 'published', 'image']
    cursor.close()
    return json.dumps(dict(zip(headers, record)))


@app.route('/posts/', methods=['GET', 'POST'])
def manage_posts():
	if request.method == 'GET':
		return get_all_posts()
	elif request.method == 'POST':
		return add_post()
	else:
	    return "{msg: something went wrong with the /posts/ route}"

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    password = data['password']
    cursor = db.cursor()
    queryOne = "select id from users where username=%s"
    valuesOne = (username,)
    cursor.execute(queryOne, valuesOne)
    record = cursor.fetchone()
    if record:
        cursor.close()
        abort(401)
    else:
        queryTwo = 'insert into users (username, password) values (%s, %s)'
        hashPassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        valuesTwo = (username, hashPassword)
        cursor.execute(queryTwo, valuesTwo)
        db.commit()
        cursor.close()
        session_id = str(uuid.uuid4())
        response = make_response()
        response.set_cookie("session_id", session_id)
        return response

@app.route('/id', methods=['POST'])
def id():
    data = request.get_json()
    print(data)
    query = "select id from users where username=%s"
    values = (data['username'], )
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    if not record:
        cursor.close()
        abort(401)

    header = ['id']
    jsonData = []
    jsonData.append(dict(zip(header, record)))
    return json.dumps(jsonData)




@app.route('/logout', methods=['POST'])
def logout():
    data = request.get_json()
    query = "delete from sessions where user_id = %s"
    values = (data['id'],)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    return "Success!"

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    query = "select id, username, password from users where username = %s"
    inputUsername = data['username']
    values = (inputUsername, )
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    if not record:
        cursor.close()
        abort(401)

    inputPassword = data['password']
    passDB = record[2].encode('utf-8')
    if (bcrypt.hashpw(inputPassword.encode('utf-8'), passDB)) != passDB:
        cursor.close()
        abort(403)

    session_id = str(uuid.uuid4())
    user_id = record[0]
    sessionQuery = "insert into sessions (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
    sessionValues = (user_id, session_id, session_id)
    cursor.execute(sessionQuery, sessionValues)
    db.commit()
    response = make_response()
    response.set_cookie("session_id", session_id)
    cursor.close()
    return response

def add_post():
	data = request.get_json()
	query = "insert into posts (title, content, published, author, image) values (%s, %s, %s, %s, %s)"
	print(data)
	values = (data['title'], data['content'], data['published'], data['author'], data['image'])

	cursor = db.cursor()
	cursor.execute(query, values)
	db.commit()
	new_post_id = cursor.lastrowid
	print("new_post_id = " + str(new_post_id))
	cursor.close()
	return get_post(new_post_id)

def get_post(id):
	query = "select id, title, content from posts where id = %s"
	values = (id, )
	cursor = db.cursor()
	cursor.execute(query, values)
	record = cursor.fetchone()
	header = ['id', 'title', 'content']
	return json.dumps(dict(zip(header, record)))

def get_all_posts():
	query = "select id, title, content, author, published, image from posts"
	cursor = db.cursor()
	cursor.execute(query)
	records = cursor.fetchall()
	cursor.close()
	header = ['id', 'title', 'content', 'author', 'published', 'image']
	data = []
	for r in records:
		data.append(dict(zip(header, r)))
	return json.dumps(data)

if __name__ == "__main__":
	app.run()