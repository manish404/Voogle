const btn = document.querySelector('#talkBtn');
const Vcommand = document.querySelector('#Vcommand');
const reply = document.querySelector('#botMsg');
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

Tcommand = document.querySelector('#Tcommand');
Tcommand.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        var tComm = document.getElementById('Tcommand').value;
        if (tComm!=""){
            message = tComm;
            readOut(message);
        }
    }
});

const respo = ['I am Fine and hope you too...', 'I am good...and Maybe you too'];
const greetings = ['Hello, How can I help you?', 'May I help you?'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition  = new SpeechRecognition();

recognition.onstart = function(){
    // speech.text = "Voogle has been started...";
    console.log('Voogle has been started...');
};

recognition.onresult = function(event){
    const  current = event.resultIndex;
    const  transcript = event.results[current][0].transcript;
    
    readOut(transcript);
};

btn.addEventListener('click', ()=>{
    recognition.start();
});

const speech = new SpeechSynthesisUtterance();
function readOut(message){
    speech.text = 'Sorry, I didnot understand';
    
    if (message.match('how are you')) {
        const textl = respo[Math.floor(Math.random()* respo.length)];
        speech.text = textl;
    }
    else if (message.match('hi') || message.match('hey') || message.match('hay')) {
        const text = 'hi, how can i help you';
        speech.text = text;
    }
    else if (message.match('hello')) {
        const text = 'hello, how can i help you';
        speech.text = text;
    }
    else if (message.match('introduce yourself') || message.match('who are you')|| message.match('tell me about yourself') || message.match('your name')) {
        const text = 'I am voogle, created by Mister Mawneesh Sharmaa';
        speech.text = text;
    }
    else if (message.match('I love you') || message.match('do you love me')) {
        const text = 'Sorry, I already have a girlfriend';
        speech.text = text;
    }
    else if (message.match('how old are you')|| message.match('what is your age')|| message.match('when is your birthday')) {
        const text = 'I never become old... i think you are too old and your teeth are nomore';
        speech.text = text;
    }
    else if(message.match('date')){
        d = new Date(); 
        var y = d.getFullYear();
        var m = months[d.getMonth()];
        var d = days[d.getDay()];
        text = d+"..."+y+m;
        speech.text = text;
    }
    else if(message.match('Manish') || message.match('manish') || message.match('manish sharma') || message.match('monish sharma') || message.match('monish') || message.match('your boss')){
        const text = 'Mawneesh is my boss';
        speech.text = text; 
    }
    // else if (message.match('search about')|| message.match('find about')|| message.match('tell me about')) {
    //     const text = ...
    //     speech.text = text;
    // }
    else if (message.match('your favourite song')|| message.match('your best song')) {
        const text = 'I am musicaholic...I repeat all songs from my playlist';
        speech.text = text;
    }
    // else if(message.match('play music')){
    //     const comm = 
    // }
    // else if(message.match('')){

    // }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    reply.textContent = speech.text;
    Vcommand.textContent = message;
}