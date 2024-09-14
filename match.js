let scoreText = document.getElementById("score")
const cards = document.querySelector('.card');
var card1 = null
var card2= null
var score = 0
var matches = []



function matchFunction(card){
    if (score == 8){
        window.location.reload(true);
    }
    
    if (card1 == null){
        card.innerHTML = card.id
        card1 = card
        
    }else if (card2 == null){
        card.innerHTML = card.id
        card2 = card
        setTimeout(checkCards,1000)
    }
}
    
        

function checkCards(){
    if (card1.id == card2.id && !(matches.includes(card1.id))){
            card1.style.backgroundColor= "green"
            card2.style.backgroundColor= "green"
            matches.push(card1.id)
            score +=1;
            scoreText.innerHTML = score
            card1 = null
            card2 = null
    }else{
            card1.innerHTML = null
            card2.innerHTML = null
            card1 = null
            card2 = null
        }
    }
function reset(){
     window.location.reload(true);
    
}


    

