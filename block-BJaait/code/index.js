const icons = document.querySelectorAll('.icon');
const boxes = document.querySelectorAll('.box');

let draggedIcon = null;

icons.forEach(icon => {
  icon.addEventListener('dragstart', dragStart);
  icon.addEventListener('dragend', dragEnd);
});

boxes.forEach(box => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});

function dragStart() {
  draggedIcon = this;
  setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
  this.classList.remove('invisible');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop() {
  this.classList.remove('hovered');
  this.appendChild(draggedIcon);
}



