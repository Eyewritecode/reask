import random
from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")


@app.route("/")
def index():
  return render_template("index.html")

@app.route("/hello")
def hello():
  return do_something() 

def do_something():
  salute = ["Ohayo", "Konnichiwa", "Konbawa"]
  return random.choice(salute)
  
if __name__ == "__main__":
  app.run()
