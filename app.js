const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const menuDivision = document.querySelector("#menu-division");
const ice = document.querySelector("#Ice")

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  menuDivision.classList.remove(HIDDEN_CLASSNAME);
}

function count(type)  {
    const resultElement = document.getElementById('result');
    
    let number = resultElement.innerText;
    
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
        if(number == 0){
            number = 1;
        }
        number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }

loginForm.addEventListener("submit", onLoginSubmit);