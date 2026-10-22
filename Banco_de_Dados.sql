create database academia;
use academia;

create table usuarios(
	id_usuario int auto_increment primary key,
    nome varchar(45) not null,
    email varchar(45) not null unique,
    senha varchar(45) not null
);

create table alunos(
	id_aluno int auto_increment primary key,
    nome varchar(45) not null,
    Cpf varchar(45) not null unique,
    Telefone varchar(45) not null
);

create table plano_treinos(
	id_plano int auto_increment primary key,
    id_aluno int,
    foreign key (id_aluno)
    references alunos(id_aluno),
    descricao varchar(45) not null,
    objetivo varchar(45) not null,
    data_criacao date not null
);

create table Agendamentos(
	id_agendamento int auto_increment primary key,
    id_plano int,
    id_aluno int,
    foreign key (id_plano)
    references plano_treinos(id_plano),
    foreign key (id_aluno)
    references alunos(id_aluno),
    data_hora datetime,
    nome_personal varchar(45),
    status varchar(20) default 'Agendado'
);
INSERT INTO usuarios (nome, email, senha) VALUES
('Ana Silva', 'ana@academia.com', '123456'),
('Carlos Souza', 'carlos@academia.com', '142536'),
('Marina Lima', 'marina@academia.com', '253678');

INSERT INTO alunos (nome, Cpf, Telefone) VALUES
('Pedro Santos', 'CIFRADO_EXEMPLO_1', '11999990001'),
('Julia Costa', 'CIFRADO_EXEMPLO_2', '11999990002'),
('Lucas Alves', 'CIFRADO_EXEMPLO_3', '11999990003');

INSERT INTO plano_treinos(id_aluno, descricao, objetivo, data_criacao) VALUES
(1, 'Treino A - Musculação', 'Condicionamento físico', '2026-10-01'),
(2, 'Treino B - Resistência', 'Resistência muscular', '2026-10-02'),
(3, 'Treino C - Funcional', 'Condicionamento físico', '2026-10-03');

INSERT INTO Agendamentos
(id_plano, id_aluno, data_hora, nome_personal, status) VALUES
(1, 1, '2026-10-25 09:00:00','Roberto Mendes', 'Agendado'),
(2, 2, '2026-10-25 10:00:00', 'Fernanda Rocha','Agendado'),
(3, 3, '2026-10-26 14:00:00', 'Marcos Oliveira', 'Agendado');

select * from usuarios;
select * from alunos;
select * from plano_treinos;
select * from Agendamentos;