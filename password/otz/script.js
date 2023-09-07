
const themeMap = {
    dark: "light",
    light: "dark"
};

const theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeB').onclick = toggleTheme();






// Initial Ratings
const ratings = {
    Forsage: 4.2,
    Ischez: 4.1,
    t365: 4.5,
    Greenland: 3.5,
    ostrFant: 5.3,
    d2Serd: 3.6,
    aferaVeka: 4.7,
    bumerang: 2.8

}

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');
//Остановились
// Init product
let product;

// Product select change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

// Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 5) {
        alert('Please rate 1 - 5');
        return;
    }

    // Change rating
    ratings[product] = rating;

    getRatings();
});

// Get ratings
function getRatings() {
    for (let rating in ratings) {
        // Get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        // Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}
function Myfunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
}
function functionFilter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
	for(i=0;i<a.length;i++)
	{
		txtЗначение = a[i].textСодержание || a[i].innerText;
		if(txtЗначение.toUpperCase().indexOf(filter)>-1){
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

document.querySelector("#hide").addEventListener("click", () => {
    document.querySelector("#userInput").value = "";
});
function CreateOtz(uname, text,star,fname) { 
    let nameText = document.createElement("h1"),
    filmText = document.createElement("h1")
    starsText = document.createElement("h2")
    note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("i");
    note.className = "note";
    details.className = "details";
    nameText.textContent = uname;
    starsText.textContent = star;
    filmText.textContent = fname;
    noteText.textContent = text;
    details.appendChild(nameText);
    details.appendChild(filmText);
    details.appendChild(starsText);
    details.appendChild(noteText);
    note.appendChild(details);
    document.querySelector("#allOtz").appendChild(note);
    note.setAttribute("style", `border:1px solid red`);
};  
var ratingss = document.querySelector('.starsOtz'),
    ratingItem = document.querySelectorAll('.rating-item'); 
ratingss.onclick = function (e) {
    var target = e.target;
    if (target.classList.contains('.rating-item')) {
        target.classList.add('active', 'current-active');
    }
}
const countRate = 0;
var perem;
const a = document.querySelector('#one');
const b = document.querySelector('#two');
const c = document.querySelector('#three');
const d = document.querySelector('#four');
const e = document.querySelector('#five');
if (a.onmouseover = function(){
    perem = 1;

})
if (b.onmouseover = function () {
        perem = 2;

    })
if (c.onmouseover = function () {
      perem = 3;

})
if (d.onmouseover = function () {
    perem = 4;

})
if (e.onmouseover = function () {
    perem = 5;

})
ratingss.onmouseover = function (e) {
    var target = e.target;
    console.log(target.getAttribute('data-rate'));
    if (target.classList.contains('rating-item')) {
        removeClass(ratingItem, 'active', 'current-active');
        target.classList.add('active', 'current-active');
        MouseOverActive(ratingItem);
        mouseOutActiveClass(ratingItem);
       

    }
}
ratingss.onmouseout = function () {
    addClass(ratingItem,'active')
       mouseOutActiveClass(ratingItem);
       
   }
function removeClass(arr) {
    for (var i = 0, ilen = arr.length; i < ilen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.remove(arguments[j]);
       ;}
    }
}
function addClass(arr) {
    for (var i = 0, ilen = arr.length; i < ilen; i++) {
        for (var j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.add(arguments[j]);
        }
    }
}
function MouseOverActive(arr) {
    for (var i = 0, ilen = arr.length; i < ilen; i++) {
        if (arr[i].classList.contains('active')) {
            break;

        }
        else {
            arr[i].classList.add('active');
           
        }
    }
}
function mouseOutActiveClass(arr) {
    for (var i = arr.length - 1; i >= 1;i-- ) {
        if (arr[i].classList.contains('current-active')) {
            break;

        } else {
            arr[i].classList.remove('active');
        }
    }
}

window.onload = document.querySelector("#userInput").select();
document.querySelector("#addOtz").addEventListener("click", () => {
    
    document.querySelector(".modelOtz").style.display = "block";
    const uname = document.querySelector("#UserName")
    const text = document.querySelector("#userInput");
    var stars = countRate + perem;
    var asd = document.querySelector("#product-select");
    CreateOtz(uname.value, text.value, stars,asd.value);
console.log(asd.value);
    //отправка отзыва на стр
    uname.value = '';

    text.value = '';
});