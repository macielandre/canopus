from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:sudopostgres@localhost/postgres'
db=SQLAlchemy(app)

from app.rest import bp
app.register_blueprint(bp)
