var mesphotos = ['chat.jpg','chien.jpg','sanglier.jpg','lapin.jpg'];
var image_en_cours = 0;
myimage = document.getElementById('ecran');

function suivante () {
    image_en_cours=image_en_cours+1;
    if(image_en_cours == mesphotos.length){
        image_en_cours =0; 
    }
    myimage.src='../img/'+mesphotos[image_en_cours];

}
function precedente () {
    image_en_cours=image_en_cours-1;
    if(image_en_cours <0){
        image_en_cours = mesphotos.length-1;
    }
   myimage.src='../img/'+mesphotos[image_en_cours];

 
}

let ScrollCOntain = document.querySelector(mesphotos);
let backBtn = getElementById("backButton");
let nextBtn = getElementById("nextButton");
