import {aleatorio, nome} from './aleatorio.js';
caixaPerguntas.textContent = `Em 2049, ${nome}`;
function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();
