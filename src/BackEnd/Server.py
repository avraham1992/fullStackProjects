from flask import Flask, request
import mysql.connector as mysql
from flask_cors import CORS
import json

db = mysql.connect(
	host = "localhost",
	user = "root",
	passwd = "fullstack",
	database = "blog")

app = Flask(__name__)
CORS(app)

@app.route('/posts/', methods=['GET', 'POST'])
def manage_posts():
	if request.method == 'GET':
		return get_all_posts()
	elif request.method == 'POST':
		return add_post()
	else:
	    return "{msg: something went wrong with the /posts/ route}"

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