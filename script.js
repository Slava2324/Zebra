let road = document.querySelector(".road");

let whiteList = document.querySelectorAll(".white");
let blackList = document.querySelectorAll(".black");

let buttonUp = document.querySelector(".up")
let buttonDown = document.querySelector(".down")


let buttonUpFunc = function() {
	let white = document.querySelectorAll('.white');

	for(let i = 0; i < white.length; i++){

	    white[i].innerHTML = '';

	    let image = document.createElement('IMG');
	    image.src = 'images/arrow_up.svg';

	    white[i].append(image);

	    image.style.width = "25px";
	    image.style.height = "auto";
	    image.style.rotate = "0deg"
    }
}


let buttonDownFunc = function() {
	let white = document.querySelectorAll('.white');

	for(let i = 0; i < white.length; i++){

	    white[i].innerHTML = '';

	    let image = document.createElement('IMG');
	    image.src = 'images/arrow_up.svg';

	    white[i].append(image);

	    image.style.width = "25px";
	    image.style.height = "auto";
	    image.style.rotate = "180deg"
    }
}


buttonUp.addEventListener("click", buttonUpFunc)
buttonDown.addEventListener("click", buttonDownFunc)

road.style.border = "1px solid black";

blackList.forEach((black) => black.style.backgroundColor = "black")
