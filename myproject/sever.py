from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os
from main import predict
from main2 import predict2
 
'''

INSTRUCTIONS
-run the file
 - below the warning, the url will be shown (ex: "Running on https://127.0.0.0.:500000)
 - click on the url and go to follow link
 -access our website!
'''
app = Flask(__name__)
 
upload_folder = os.path.join('static', 'uploads')
 
app.config['UPLOAD'] = 'static'
 
@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['img']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD'], filename))
        img = os.path.join(app.config['UPLOAD'], filename)
        emotion = predict(img)
        
        
        
        return render_template('index.html', img=img,emotion=emotion)
    return render_template('index.html')
@app.route("/help", methods=['GET', 'POST'])
def help():
    if request.method == "POST":
       # getting input with name = fname in HTML form
       text = request.form.get("fname")
       emotion = predict2(text)
       return render_template('index2.html',emotion = emotion)
    return render_template('index2.html')

 
 
if __name__ == '__main__':
    app.run(debug=True)