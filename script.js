let road = document.querySelector(".road");

let buttonUp = document.querySelector(".up")
let buttonDown = document.querySelector(".down")


let addButtonImageUp = function() {
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


let addButtonImageDown = function() {
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


buttonUp.addEventListener("click", addButtonImageUp)
buttonDown.addEventListener("click", addButtonImageDown)

road.style.border = "1px solid black";

blackList.forEach((black) => black.style.backgroundColor = "black")
