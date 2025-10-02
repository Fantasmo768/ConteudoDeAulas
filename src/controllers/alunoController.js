const express = require('express');
const alunoModel = require('../models/alunoModel');

const buscarTodosAlunos = async(req, res) => {
    try { 
        const resultado = await alunoModel.selecionaTodosAlunos();
        console.log('Rota funcionando');
        return res.status(200).json({message: "Rota funcionando corretamente", dados: resultado});
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: `Ocorreu um erro no servidor`,
            errorMessage: error.message
        });
    }
}

module.exports = { buscarTodosAlunos };