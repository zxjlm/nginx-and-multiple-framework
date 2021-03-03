from flask import Flask
import requests

app = Flask(__name__)

@app.route('/api1/bac1')
def bac1():
    return {'msg':'hello from flask'}

@app.route('/api1/get_bac2/<kk>')
def get_bac2(kk):
    res = requests.get('http://api2/api2/item/'+kk)
    return {'msg':'get data from fastapi','result':res.json()}


@app.route('/api1/get_bac3/')
def get_bac3():
    res = requests.get('http://api3:80/api3/bac3',allow_redirects=False)
    return {'msg':'get data from node','result':res.json()}

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80)