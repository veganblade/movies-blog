let inp = document.querySelector('.inp');
let inpPass = document.querySelector('.inpPass');
let btn = document.querySelector('.button-container');

inpPass.setAttribute('disabled', true);
btn.setAttribute('disabled', true);

inp.oninput = function () {
  let phone = document.querySelector('.inp').value;
   
    if (!checkInputs(phone)) {
        inpPass.setAttribute('disabled', true);
    } else {
        inpPass.removeAttribute('disabled');
    }
    function checkInputs() {
        var regex = /^[a-z]{1,11}$/;
    return regex.test(phone);
}
}
inpPass.oninput = function () {
    
    let phonePass = document.querySelector('.inpPass').value;
    if (!checkPass(phonePass)) {
       btn.setAttribute('disabled', true);
    } else {
        btn.removeAttribute('disabled');
    }
    function checkPass() {
        var regex = /^12345$/;
        return regex.test(phonePass);
    }
}

/* /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/*/