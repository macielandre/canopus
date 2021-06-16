from flask import current_app, request, jsonify
from app.domain.Carrossel import Carrossel

def get():
    id_carrossel=request.args.get['id']
    query=Carrossel().filter(id_carrossel==id).first()
    return jsonify('')

def post():
    aberto=request.args.get['aberto']
    imagem=request.args.get['imagem']
    id_carrossel=request.args.get['nome']
    localizacao=request.args.get['localizacao']
    ultima_manutencao=request.args.get['ultima_manutencao']
    query=Carrossel(nome, localizacao, aberto, ultima_manutencao, imagem)
    db.session.add(query)
    db.session.commit()
    return jsonify('')

def put():
    id_carrossel=request.args.get['id']
    query=db.session.query(Carrossel).filter(id_carrossel==id).first()
    query.nome=nome
    return jsonify('')

def delete():
    id_carrossel=request.args.get['id']
    query=Carrossel.query.filter(id_carrossel==id).delete()
    return jsonify('')