let counter = 0;
function btn_click(value){
    const button =  document.getElementById('btn'+value);
    if (counter != 0){
        const prev_rating = document.getElementById('btn'+counter);
        prev_rating.classList.remove('clicked');
        button.classList.add('clicked');
        counter = value;
    }
    else{
        button.classList.add('clicked');
        counter = value;
    }
}

function submit_event(){
    if (counter != 0){
        document.querySelector('.state_rating').classList.add('hide');
        document.querySelector('.state_thankyou').classList.remove('hide');
        document.querySelector('.rating_score').innerHTML= 'You selected '+counter+' out of 5';
    }else{
        alert('Please select rating before clicking submit');
    }
}

document.querySelector('.submit').onclick = submit_event;

