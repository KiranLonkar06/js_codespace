const form = document.querySelector('form');
// these usecase will give you an empty value
// const height = parsInt(document.querySelector('#height').value);
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = Number(document.querySelector('#height').value);

    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(isNaN(height) || height <=0){
        results.innerHTML =`please give a valid height`;
    }else if(isNaN(weight) || weight <= 0){
        results.innerHTML =`please give a valid weight`;
    }else{
        const bmi =  (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
})