
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
	increaseContactBox();
}

function contactBoxMouseOut() {
	revertContactBox();
}

function increaseContactBox() {
	event.target.style.backgroundColor = 'lightpink';
	let children = event.target.children;
	for (child of children) {
		child.style.backgroundColor = 'lightpink';
	}
}

function revertContactBox() {
	event.target.style.backgroundColor = 'lightblue';
	let children = event.target.children;
	for (child of children) {
		child.style.backgroundColor = 'lightblue';
	}
}