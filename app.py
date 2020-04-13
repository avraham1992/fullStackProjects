from flask import Flask
import requests
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/weather/<city>')
def weather(city):
    secret = '98113ec2cc394e3daf68246b4fd8886b'
    url = 'http://api.openweathermap.org/data/2.5/weather'
    params = {'q': city, 'units': 'metric', 'appid': secret}
    response = requests.get(url = url, params = params)
    temp: int = (response.json()['main']['temp'])
    secret2 = 'dsd27vXTuI329QSesS2t81Tos2O8bpZP'
    url2 = 'https://api.giphy.com/v1/gifs/translate'
    if temp < 5 :
        params2 = { 'api_key' : secret2 , 's' : 'iceberg'}
        response = requests.get(url=url2, params=params2)
    elif temp < 18 :
         params2 = { 'api_key': secret2 , 's': 'chilly'}
         response = requests.get(url=url2, params=params2)
    elif temp < 100 :
        params2 = { 'api_key': secret2 , 's': 'hot'}
        response = requests.get(url=url2, params=params2)

    return "The Temperature in " + city +" is " + str(temp) + "<img src=" + str(response.json()['data']['images']['downsized']['url']) +">"

if __name__ == "__main__":
    app.run()