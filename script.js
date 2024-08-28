import {aleatorio, nome} from './aleatorio.js';
import {aleatorio, nome} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraResultado() {
caixaPerguntas.textContent = "Em 2049, ...";  
textoResultado.textContent = historiaFinal; 
caixaAlternativas.textContent = ""; 
caixaResultado.classList.add("mostrar");
botaoJogarNovamente.addEventistener("click", jogarNovamente);
