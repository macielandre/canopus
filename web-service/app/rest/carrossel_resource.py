import flask
import app.service.carrossel as cr

from . import bp

@bp.route('/api/post')
def inserir():
    return cr.post()

@bp.route('/api/get')
def listar():
    return cr.get()

@bp.route('/api/put')
def editar():
    return cr.put()

@bp.route('/api/delete')
def deletar():
    return cr.delete()