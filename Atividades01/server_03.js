// 
import express from 'express'
// 
const app = express()

// Exemplo prático de uma coleção em memória:

const alunos = [

{rm:123, nome:"Augusto", turma:"2A"},
{rm: 124, nome:"Beatriz", turma:"2A"},
{rm: 125, nome:"Camila", turma:"2B"},
{rm: 126,nome:"Danilo",turma:"2B"}

];

function listarAlunos() {
return alunos;
};


function BuscarAlunoPorRm(req, res) {
    const rm = parseInt(req.params.rm);

    const aluno = alunos.find(m => m.rm === rm);

    if (!aluno) {
        res.status(404).json({ erro: "Mensagem não encontrada" });
        return;
    }

    res.json(aluno);
}
function BuscarTurmaPorAluno(req, res) {
    const turma = req.params.turma;

    const turminha = alunos.filter(m => m.turma === turma);

    if (turminha === 0) {
        res.status(404).json({ erro: "Mensagem não encontrada" });
        return;
    }

    res.json(turminha);
}
app.get('/' , (req, res) =>{
    res.send("Servidor rodando com express")
})

app.get('/alunos' , (req, res) => {
    res.json(listarAlunos());
})

app.get("/alunos/:rm", (req, res) => {
    BuscarAlunoPorRm(req, res);
});



app.get("/turmas/:turma", (req, res) => {
    BuscarTurmaPorAluno(req, res);
});

const PORT = 3000;

app.listen(PORT,() => {
   console.log(`Servidor rodando em 
    http://localhost:${PORT}`);
})