//Html Elements
const nameInput = document.querySelector("#nameInput");
const kmInput = document.querySelector("#kmInput");
const ageSel = document.querySelector("#ageSelect");

const confirmBtn = document.querySelector("#generateBtn");


//Time Var
let date = new Date();
let today = `La data odierna: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;



let disc, price, discPrice;

confirmBtn.addEventListener("click",
    function(){
        const nameValue = nameInput.value;
        const kmValue = parseInt(kmInput.value);
        const ageValue = ageSel.value;



        if (ageValue == "Minorenne"){
            disc = 0.8;
        }else if(ageValue == "Over65"){
            disc = 0.6;
        }
        else{
            disc = 1;
        }


        price = kmValue * 0.21;
        discPrice = price * disc;
        console.log(price, discPrice);
    }
);



