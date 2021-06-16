create table carrossel(
	id_carrossel serial not null, 
	nome varchar(150) not null,
	localizacao varchar(150) not null,
	aberto boolean not null,
	ultima_manutencao date not null,
	imagem text,
	constraint carrossel_pkey PRIMARY KEY (id_carrossel)
);

