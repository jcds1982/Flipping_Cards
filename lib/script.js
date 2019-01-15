// toast message library

// Show message alert
function ShowMessage(message) {

    var OnOrOff = document.getElementById('MainContainer').dataset.toast;

    if (OnOrOff === 'On'){
        document.getElementById('MainContainer').dataset.toast = 'Off';
        document.getElementById('MainContainer').classList.remove('toast_container');
    }else{
        document.getElementById('MainContainer').dataset.toast = 'On';
        document.getElementById('MainContainer').classList.add('toast_container');
    }
}


// Flip Card
function FlipCard(cardId){
    document.getElementById(cardId).classList.toggle('Container__card_flipped');

}
