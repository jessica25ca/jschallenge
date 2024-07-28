


function AgeInDays(){
    var age = prompt('Ton année de naissance :');
    var result = (2024-age)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("Tu as " + result + " jours");
    h1.setAttribute('id','result');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
    console.log(result);
  
}

function reset(){

   document.getElementById('result').remove();
}


function generatecat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-box-2')
    image.src = "/home/aroldcode/Bureau/Tp_Javascript_22_05_2023/img/chat.jpg"
    div.appendChild(image)
}

function rpsGame(choix){
    console.log(choix);
    var humanchoice , computer ;
    humanchoice = choix.id;
    computer = numberToChoice(randomNumbr());
    result = decideWinner(humanchoice,computer);
    console.log(result);
    message = finalMessage(result)
    console.log(message)
    rpsFrontEnd(choix.id, computer, message)

}

function randomNumbr(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
  return ['pierre','papier','ciseau'][number]
}

function decideWinner(choix,bothChoice){
    var database = {
        'pierre': {'ciseau':1, 'pierre':0.5, 'papier':0},
        'papier': {'pierre':1, 'papier':0.5, 'ciseau':0},
        'ciseau': {'papier':1, 'ciseau':0.5, 'pierre':0}

    }
var tonScore = database[choix][bothChoice];
var computerscore = database[bothChoice][choix];
return [tonScore,computerscore]

}

function finalMessage([yourScore , computerscore]){
    if(yourScore === 0){
        return {'message' : 'Tu as perdu!' ,  'color':'red'};
    } else if(yourScore === 0.5) {
        return  {'message' : 'Tu auras essayé!' ,  'color':'yellow'};
    }else{
        return  {'message' : 'Tu auras gagné!' ,  'color':'green'}; 
    }
}

function rpsFrontEnd(humanImagechoice , bothImageChoice, finalMessage){
    var imagesDb = {
        'pierre' : document.getElementById('pierre').src,
        'papier' : document.getElementById('papier').src,
        'ciseau' : document.getElementById('ciseau').src

    }

   document.getElementById('pierre').remove()
   document.getElementById('papier').remove()
   document.getElementById('ciseau').remove()

   var humanDiv = document.createElement('div')
   var botDiv= document.createElement('div')
   var messageDiv= document.createElement('div')

   humanDiv.innerHTML = "<img src='" +imagesDb[humanImagechoice] + "'style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>"
   messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 30px; padding:10px; '>" + finalMessage['message'] + "</h1>"
   botDiv.innerHTML = "<img src='" +imagesDb[bothImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"
   document.getElementById('flex-box-3').appendChild(humanDiv)
   document.getElementById('flex-box-3').appendChild(messageDiv)
   document.getElementById('flex-box-3').appendChild(botDiv)   
}


var all_button = document.getElementsByTagName('button')
console.log(all_button)

var copybtn = []
for(let i=0; i<all_button.length; i++){
    copybtn.push(all_button[i].classList[1])
}


function buttonColorChange(buttonThigky){
 if(buttonThigky.value === 'red'){
    buttonRed()
 }else if(buttonThigky.value === 'yellow'){
    buttonYellow()
 }
 else if(buttonThigky.value == 'reset'){
    buttonReset()
 }
 else if(buttonThigky.value == 'random'){
    buttonRandom()
 }
}

function buttonRed(){
    for(let i = 0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add('btn-secondary')

    }
}

function buttonYellow(){
    for(let i = 0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add('btn-warning')

    }
}

function buttonReset(){
    for(let i = 0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(copybtn[i])

    }
}


function buttonRandom(){
    var choices =['btn-warning','btn-primary','btn-secondary']
    
    for(let i = 0; i< all_button.length; i++){
        var n = Math.floor(Math.random()*3)
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(choices[n])

    }
}

