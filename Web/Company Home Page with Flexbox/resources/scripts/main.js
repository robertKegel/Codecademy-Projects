
/*
	Script to change the background color of 
	the contact boxes when the mouse pointer 
	goes over the box.  Reverts back to original
	when mouse pointer leaves.
*/
let boxes = document.querySelectorAll(".box");

for (box of boxes) {
	box.onmouseover = contactBoxMouseOver;
	box.onmouseleave = contactBoxMouseOut;
}

function contactBoxMouseOver() {
	changeColorContactBox();
}

function contactBoxMouseOut() {
	revertColorContactBox();
}

function changeColorContactBox() {
	event.target.style.backgroundColor = 'lavenderblush';
    event.target.style.opacity = 1.0;
	let children = event.target.children;
	for (child of children) {
		child.style.backgroundColor = 'lavenderblush';
	}
}

function revertColorContactBox() {
	event.target.style.backgroundColor = '';
    event.target.style.opacity = '';
	let children = event.target.children;
	for (child of children) {
		child.style.backgroundColor = '';
	}
}

function moveBoxUp() {
    
}