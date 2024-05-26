const items = document.querySelectorAll('.item')
const columns = document.querySelectorAll('.column')
let dragItem = null;

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});

function dragStart() {
    console.log('drag começou');
    dragItem = this;
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    console.log('drag ended');
      this.className = 'item'
      dragItem = null;
}

function dragDrop() {
    console.log('drag dropped');
    this.append(dragItem);
}

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

function dragOver() {
    console.log('drag over');
}
function dragEnter() {
    console.log('drag entered');
}
function dragLeave() {
    console.log('drag left');
}
function dragOver(e) {
    e.preventDefault()
    console.log('drag over');
  }