// change the color scheme of locations when mouse over and 
// back to original when mouse leaves.

let locationBox = document.querySelectorAll('.location');

for (box of locationBox){
	box.onmouseover = changeBox;
	box.onmouseleave = revertBox;
}

function changeBox () {
	event.currentTarget.style.backgroundColor = 'seashell';
	event.currentTarget.style.color = 'black';
}

function revertBox () {
	event.currentTarget.style.backgroundColor = 'black';
	event.currentTarget.style.color = 'seashell';

}


// increase the size of images when mouse over and back when mouse leaves.

let teaOTM = document.querySelectorAll('.tea img');

for (tea of teaOTM) {
	tea.onmouseover = mouseOver;
	tea.onmouseleave = mouseLeave;
	tea.style.opacity = .33;
}

function mouseOver () {
	fadeInImg();
	increaseImgSize();
}

function fadeInImg () {
	event.currentTarget.style.opacity = 1;
}

function increaseImgSize () {
	event.currentTarget.style.width = '330px';
	event.currentTarget.style.height = '220px';
}

function mouseLeave () {
	fadeOutImg();
	revertImgSize();
}

function fadeOutImg () {
	event.currentTarget.style.opacity = .33;
}

function revertImgSize () {
	event.currentTarget.style.width = '300px';
	event.currentTarget.style.height = '200px';
}


