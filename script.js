const notify = document.getElementById("notify");
const errorText = document.getElementById('error');
const input = document.getElementById("input");

notify.addEventListener("click", ()=>{
   if(!input.checkValidity()){
    input.classList.add('error')
    errorText.style.display = 'block'
    }
    else if(input.checkValidity()){
    input.classList.remove('error')
    errorText.style.display = 'none'
        
    }
})