let array = ['Qaychi', "Qog'oz", 'Tosh'];
let ism = prompt("Ismingizni kiriting: ");
const playerName = document.createElement('h2')
const cardBody = document.querySelector('.card-body')
playerName.innerHTML = ism;
cardBody.prepend(playerName)

myForm.addEventListener('submit', event => {
    const score = document.querySelector('#score')
    const machine = Math.ceil(Math.random() * 3);
    event.preventDefault();
    console.log(array[xod.value - 1], array[machine - 1]);
    if (xod.value == 1 && machine == 2 || xod.value == 2 && machine == 3 || xod.value == 3 && machine == 1) {
        console.log('Yuttiz');
        score.textContent = score.textContent - 0 + 1;
        myRes.innerHTML = `Qadrli ${ism} siz yuttiz!`;
        machiine.textContent = array[machine-1]
    
    } else if (xod.value == machine) {
    
        myRes.innerHTML = `Durrang!`;
        machiine.textContent = array[machine-1]
    
    }else{
        myRes.innerHTML = `${ism} siz yutqazdingiz!`;
        scoreMachine.textContent = scoreMachine.textContent- 0+1;
        machiine.textContent = array[machine-1]
    
    }

})