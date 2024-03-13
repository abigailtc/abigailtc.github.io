

////////////----LOGIN----//////////////////
const btnSingIn = document.getElementById("iniciarS"),
    btnSingUP = document.getElementById("registroN"),
    formRegister = document.querySelector(".allregistro"),
    formLogin = document.querySelector(".allinicio");

    btnSingIn.addEventListener("click", e => {
        formRegister.classList.add("hide");
        formLogin.classList.remove("hide")
    })
    btnSingUP.addEventListener("click", e => {
        formLogin.classList.add("hide");
        formRegister.classList.remove("hide")
    })