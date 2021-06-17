from flask import current_app, request, jsonify
from app.domain.Carrossel import Carrossel

def get():
    id_carrossel=int(request.args['id'])
    query=Carrossel.query.filter(id_carrossel==id).first()
    return jsonify(query)

def post():
    nome=request.args['nome']
    aberto=request.args['aberto']
    imagem=request.args['imagem']
    localizacao=request.args['localizacao']
    query=Carrossel(nome, localizacao, aberto, imagem)
    db.session.add(query)
    db.session.commit()
    return jsonify(query)

def put():
    id_carrossel=int(request.args['id'])
    query=db.session.query(Carrossel).filter(id_carrossel==id).first()
    query.nome=nome
    return jsonify(query)

def delete():
    id_carrossel=int(request.args['id'])
    query=Carrossel.query.filter(id_carrossel==id).delete()
    return jsonify(query)