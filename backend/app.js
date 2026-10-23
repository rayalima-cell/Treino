const express = require('express');
const connection = require('./db');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

server.get('/usuarios', (req, res) =>{
    const sql = 'SELECT * FROM usuarios';
    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json(resultados);
    })
})

server.get('/alunos', (req, res) =>{
    const sql = 'SELECT * FROM alunos';
    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json(resultados);
    });
});

server.get('/plano_treinos', (req, res) =>{
    const sql = 'SELECT * FROM plano_treinos';
    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json(resultados);
    });
});

server.get('/agendamentos', (req, res) =>{
    const sql = 'SELECT * FROM Agendamentos';
    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json(resultados);
    });
});

server.get('/usuarios/:id', (req, res) =>{
    
    const id = req.params.id;

    const sql = 'SELECT * FROM usuarios WHERE id_usuario = ?';

    connection.query(sql, [id], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado'
            });
        }

        return res.json(resultados[0]);
    })
})

server.get('/alunos/:id', (req, res) =>{
    
    const id = req.params.id;

    const sql = 'SELECT * FROM usuarios WHERE id_aluno = ?';

    connection.query(sql, [id], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: 'Aluno não encontrado'
            });
        }

        return res.json(resultados[0]);
    })
})

server.get('/plano_treinos/:id', (req, res) =>{
    
    const id = req.params.id;

    const sql = 'SELECT * FROM usuarios WHERE id_plano = ?';

    connection.query(sql, [id], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: 'Treinamento não encontrado'
            });
        }

        return res.json(resultados[0]);
    })
})

server.get('/agendamentos/:id', (req, res) =>{
    
    const id = req.params.id;

    const sql = 'SELECT * FROM usuarios WHERE id_agendamento = ?';

    connection.query(sql, [id], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: 'Agendamento não encontrado'
            });
        }

        return res.json(resultados[0]);
    })
})

server.post('/usuarios', (req, res) =>{

    const {nome, email, senha} = req.body

    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

     connection.query(sql , [nome, email, senha] , (erro , resultados) => {
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        return res.json({
            mensagem: 'Usuario cadastrado com sucesso',
            id: resultados.insertId,
            nome: nome,
            email: email,
            senha: senha
        });
     
    });

});

server.post('/alunos', (req, res) =>{

    const {nome, Cpf, Telefone} = req.body

    const sql = 'INSERT INTO alunos (nome, Cpf, Telefone) VALUES (?, ?, ?)';

     connection.query(sql , [nome, Cpf, Telefone] , (erro , resultados) => {
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        return res.json({
            mensagem: 'Aluno cadastrado com sucesso',
            id: resultados.insertId,
            nome: nome,
            Cpf: Cpf,
            Telefone: Telefone
        });
     
    });

});

server.post('/plano_treinos', (req, res) =>{

    const {id_aluno, descricao, objetivo, data_criacao} = req.body

    const sql = 'INSERT INTO usuarios (id_aluno, descricao, objetivo, data_criacao) VALUES (?, ?, ?, ?)';

     connection.query(sql , [id_aluno, descricao, objetivo, data_criacao] , (erro , resultados) => {
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        return res.json({
            mensagem: 'Treino cadastrado com sucesso',
            id: resultados.insertId,
            id_aluno: id_aluno,
            descricao: descricao,
            objetivo: objetivo,
            data_criacao: data_criacao
        });
     
    });

});

server.post('/agendamentos', (req, res) =>{

    const {id_plano, id_aluno, data_hora, nome_personal, status} = req.body

    const sql = 'INSERT INTO usuarios (id_plano, id_aluno, data_hora, nome_personal, status) VALUES (?, ?, ?, ?, ?)';

     connection.query(sql , [id_plano, id_aluno, data_hora, nome_personal, status] , (erro , resultados) => {
        if(erro){
            return res.status(500).json({erro: erro.message})
        }
        return res.json({
            mensagem: 'Usuario cadastrado com sucesso',
            id: resultados.insertId,
            id_plano: id_plano,
            id_aluno: id_aluno,
            data_hora: data_hora,
            nome_personal: nome_personal,
            status:status
        });
     
    });

});

server.put('/usuarios/:id', (req, res) =>{

    const id_usuario = req.params.id;
    const {nome, email, senha} = req.body;
    const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?';

    connection.query(sql, [nome, email, senha, id_usuario], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json({
            mensagem: 'Usuario atualizado com sucesso',
            id_usuario: id_usuario,
            nome: nome,
            email: email,
            senha: senha
        });
    });
});

server.put('/alunos/:id', (req, res) =>{
    const id_aluno = req.params.id;
    const {nome, Cpf, Telefone} = req.body;
    const sql = 'UPDATE alunos SET nome = ?, Cpf = ?, Telefone = ? WHERE id_aluno = ?';

    connection.query(sql, [nome, Cpf, Telefone, id_aluno], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json({
            mensagem: 'Aluno atualizado com sucesso',
            id_aluno: id_aluno,
            nome: nome,
            Cpf: Cpf,
            Telefone: Telefone
        });
    });
});

server.put('/plano_treinos/:id', (req, res) =>{
    const id_plano = req.params.id;
    const {id_aluno, descricao, objetivo, data_criacao} = req.body;
    const sql = 'UPDATE plano_treinos SET id_aluno = ?, descricao = ?, objetivo = ?, data_criacao = ? WHERE id_plano = ?';

    connection.query(sql, [id_aluno, descricao, objetivo, data_criacao, id_plano], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json({
            mensagem: 'Plano de treino atualizado com sucesso',
            id_plano: id_plano,
            id_aluno: id_aluno,
            descricao: descricao,
            objetivo: objetivo,
            data_criacao: data_criacao
        });
    });
});

server.put('/agendamentos/:id', (req, res) =>{
    const id_agendamento = req.params.id;
    const {id_plano, id_aluno, data_hora, nome_personal, status} = req.body;
    const sql = 'UPDATE agendamentos SET id_plano = ?, id_aluno = ?, data_hora = ?, nome_personal = ?, status = ? WHERE id_agendamento = ?';    

    connection.query(sql, [id_plano, id_aluno, data_hora, nome_personal, status, id_agendamento], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json({
            mensagem: 'Agendamento atualizado com sucesso',
            id_agendamento: id_agendamento,
            id_plano: id_plano,
            id_aluno: id_aluno,
            data_hora: data_hora,
            nome_personal: nome_personal,
            status: status
        });
    });
});

server.delete('/usuarios/:id', (req, res) =>{
    const id_usuario = req.params.id;
    const sql = 'DELETE FROM usuarios WHERE id_usuario = ?';

    connection.query(sql, [id_usuario], (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message});
        }
        return res.json({
            mensagem: 'Usuario deletado com sucesso',
            id_usuario: id_usuario
        });
    }); 
})

server.listen(3023, () =>{
    console.log("Servidor rodando na porta 3023");
});