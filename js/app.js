const form = document.querySelector(".card__submit");
const ratingOptions = document.querySelectorAll('input[name="rating"]');
const cardThank = document.querySelector(".card__thankYou");
const scoreSpan = document.querySelector(".score");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let select = null;

    ratingOptions.forEach((input)=>{
        if(input.checked === true){
            select = input.value;
        } 
    });
    if(select) {
        form.style.display = "none"

        // cardThank.classList.add("show");
        cardThank.style.display = "flex"
        scoreSpan.textContent = select;
    }else{
        alert("elige por favor");
    }

});   