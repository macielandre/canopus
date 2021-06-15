from sqlalchemy import inspect
from app import db

class Carrossel(db.Model):
    id_carrossel=db.Column('id_carrossel', db.Integer, primary_key=True, autoincrement=True)
    nome=db.Column(db.String(150))
    localizacao=db.Column(db.String(150))
    aberto=db.Column(db.Boolean())
    ultima_manutencao=db.Column(db.DateTime())
    data_inauguracao=db.Column(db.DateTime())
    
    def to_dict(self):
        return {
            'id_carrossel': self.id,
            'nome': self.nome,
            'localizacao': self.localizacao,
            'aberto': self.aberto,
            'ultima_manutencao': self.ultima_manutencao,
            'data_inauguracao': self.data_inauguracao
        }