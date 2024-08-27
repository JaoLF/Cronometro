//Variaveis globais para armazenar horas, minutos e segundos 
let hours = 0; //let delcara uma variavel local no escopo do bloco atual, opcionalmente iniciandos-a com um valor 
let minutes = 0; 
let seconds = 0; 

//Variavel para armazenar o ID do intervalo, usado para parar o cronometro 
let interval; 

//Funcao para iniciar o cronometro 
function start(){ //Function eh um bloco de codigo designado a fazer uma tarefa particular. Uma funcao JS eh executada quando "algo" a invoca(chama ela). 
    //Define o intervalo que chama a funcao 'counting' a cada 1000 milisegundos(1s)
    interval = setInterval(counting, 1000); //Set sao colecoes de valores. Um valor no conjunto pode ocorrer apenas uma vez; ele eh unico na colecao do conjunto
}

//Funcao para parar o cronometro 
function pause(){
    //Limpa o intervalo, parando a execucao da funcao 'counting'
    clearInterval(interval); 
}

//Funcao para parar e resetar o cronometro 
function stop(){
    //Limpa o intervalo, parando a execucao da funcao 'counting'
    clearInterval(interval);

    //Reseta as variaveis de horas, minutos e segundos para 0 
    hours = 0; 
    minutes = 0; 
    seconds = 0; 

    //Atualiza o elemento com o ID 'counter' para mostrar 00:00:00
    document.getElementById('counter').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
    //Retorna a referencia do elemento atraves do seu ID
}

//Funcao que eh chamada a cada segundo para atualizar o cronometro 
function counting(){
    //Incrementa os segundos 
    seconds ++; 

    //Se os segundos chegarem a 60, resetam para 0 e incrementam os minutos 
    if (seconds === 60){
        seconds = 0; 
        minutes++; 

        //Se os minutos chegarem a 60, resetam para 0 e incrementam as horas 
        if (minutes === 60){
            minutes = 0; 
            hours ++; 
        } 
    }

    //Atualiza o elemento com ID 'counter' para mostrar o tempo formatado 
    document.getElementById('counter').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`
}

//Funcao auxiliar para formatar numeros com dois digitos 
function twoDigits(digit) {
    //Se o numero for menor que 10, adiciona um zero a esquerda 
    if(digit < 10){
        return ('0' + digit); 
    } else {
        //Caso contrario, retorna o numero como esta 
        return(digit);
    }
}
