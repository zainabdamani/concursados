const addBtns = document.querySelectorAll(".add-task");

function task(text) {

return `
<div class="item" draggable="true">${text}</div>
`
}

addBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const text = prompt("Escolha o nome do card");
        const card = task(text);
        const container = e.target.parentElement.parentElement;
        container.insertAdjacentHTML("beforeend", card);
        saveTask(container.id, text);
        console.log(kanbanData)
        drags();
        
    })
})

function saveTask(columnName, text){
    const kanbanExists = kanbanData.some((kanban)=>{
        return kanban.column===columnName
    })
    if (!kanbanExists){
     kanbanData.push({
        column: columnName,
        cards: [
             text
        ]
    })
    return ;
    }
    let updatedKanbanData = kanbanData.map((kanban)=>{
    
        if (kanban.column===columnName){
            kanban.cards.push(text)
        } 
        return kanban
    })
    kanbanData=updatedKanbanData;
    localStorage.setItem("kanban", JSON.stringify(kanbanData))
}


function drags(){
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
    console.log('drag acabo');
      this.className = 'item'
      dragItem = null;
}

function dragDrop() {
    console.log('drag dropped');
    if (dragItem===null){
        return;
    }
    this.append(dragItem);
}

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

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
}

document.addEventListener("DOMContentLoaded", ()=>{
    renderKanban();
    drags();
})
function renderKanban () {
    kanbanData.forEach((kanban)=>{
        const column = document.querySelector(`.column#${kanban.column}`)
        console.log(column)
        
        const cardlist = kanban.cards.map((item)=>{
            return task(item)
        }).join("")
        console.log(cardlist)
        column.insertAdjacentHTML("beforeend",cardlist)
    })
}

let kanbanData = JSON.parse(localStorage.getItem("kanban")) ?? [];