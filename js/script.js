let firstscreen = document.getElementById("firstscreen")
let nameinputone = document.getElementById("nameinputone")
let startbtn = document.getElementById("startbtn")
let nameerrorone = document.getElementById("nameerrorone")

// ===================================

let playeronescreen = document.getElementById("playeronescreen")
let playernameone = document.getElementById("playernameone")
let numberoneinput = document.getElementById("numberoneinput")
let numberonebtn = document.getElementById("numberonebtn")
let numoneerror = document.getElementById("numoneerror")
// =============================

let secretnum;
let playertwochances = 3;
let playerthreechances = 3;
let playerthreejoined = false;


startbtn.addEventListener("click", () => {
    if (nameinputone.value == "") {
        nameerrorone.removeAttribute("hidden")
    }
    else{
        nameerrorone.setAttribute("hidden", true)

        firstscreen.style.display = "none";
        playeronescreen.style.display = "block";
        playernameone.innerText = nameinputone.value;

    };
});

numberonebtn.addEventListener("click", () =>{
    if (numberoneinput.value == "") {
        numoneerror.removeAttribute("hidden")
        
    }
    else{

        numoneerror.setAttribute("hidden", true)

        secretnum = numberoneinput.value;

        playeronescreen.style.display = "none"
        secondscreen.style.display = "block"
    };
});

// ========================================

let secondscreen = document.getElementById("secondscreen")
let nameinputtwo = document.getElementById("nameinputtwo")
let screentwobtn = document.getElementById("screentwobtn")
let nametwoerror = document.getElementById("nametwoerror")

// =============================================

let playertwoscreen = document.getElementById("playertwoscreen")
let playernametwo = document.getElementById("playernametwo")
let numbertwoinput = document.getElementById("numbertwoinput")
let numtwobtn = document.getElementById("numtwobtn")
let numtwoerror = document.getElementById("numtwoerror")



screentwobtn.addEventListener("click",() => {
   if(nameinputtwo.value == ""){
    nametwoerror.removeAttribute("hidden")
   }
   else{
       nametwoerror.setAttribute("hidden", true)   

        secondscreen.style.display = "none"
        playertwoscreen.style.display ="block"
        playernametwo.innerText = nameinputtwo.value;

   }
});

numtwobtn.addEventListener("click", () => {

    if(numbertwoinput.value == ""){
        numtwoerror.removeAttribute("hidden");
    }
    else if(numbertwoinput.value == secretnum){

        playertwoscreen.style.display = "none";
        endscreen.style.display = "block";

        wintext.innerText =
        `Congratulations!! ${playernametwo.innerText} won`;
    } else {
        playertwochances--;

        numtwoerror.setAttribute("hidden", true);
        numbertwoinput.value = "";

        playertwoscreen.style.display = "none";

        if(playerthreejoined){
            playerthreescreen.style.display = "block";
        }else{
            thirdscreen.style.display = "block";
        }

    }

});
// ==============================================

let thirdscreen = document.getElementById("thirdscreen")
let nameinputthree = document.getElementById("nameinputthree")
let screenthreebtn = document.getElementById("screenthreebtn")
let namethreeerror = document.getElementById("namethreeerror")

// ========================================

let playerthreescreen = document.getElementById("playerthreescreen")
let playernamethree = document.getElementById("playernamethree")
let numberthreeinput = document.getElementById("numberthreeinput")
let numthreebtn = document.getElementById("numthreebtn")
let numthreeerror = document.getElementById("numthreeerror")

// =========================================

let endscreen = document.getElementById("endscreen")
let wintext = document.getElementById("wintext")
let gameovertext = document.getElementById("gameovertext")

screenthreebtn.addEventListener("click", ()=>{
    if (nameinputthree.value == "") {
        namethreeerror.removeAttribute("hidden")
        
    }
    else{
        namethreeerror.setAttribute("hidden", true)
          

        thirdscreen.style.display = "none"
        playerthreescreen.style.display = "block"
        playernamethree.innerText = nameinputthree.value;

        playerthreejoined = true;
    }
});

numthreebtn.addEventListener("click", () => {
    if(numberthreeinput.value == ""){
        numthreeerror.removeAttribute("hidden");
    }
    else if(numberthreeinput.value == secretnum){

        playerthreescreen.style.display = "none";
        endscreen.style.display = "block";

        wintext.innerText =
        `Congratulations!! ${playernamethree.innerText} won`;
    }
    else {
        playerthreechances--;

        if (playerthreechances == 0) {

            playerthreescreen.style.display = "none";
            endscreen.style.display = "block";

            wintext.innerText =
            `Congratulations!! ${playernameone.innerText} won`;

        }else {
            numthreeerror.setAttribute("hidden", true);

            numberthreeinput.value = "";

            playerthreescreen.style.display = "none";
            playertwoscreen.style.display = "block";
        }
    }
});

// =================
