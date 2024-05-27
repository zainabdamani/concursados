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
    } else {
    let updatedKanbanData = kanbanData.map((kanban)=>{
    
        if (kanban.column===columnName){
            kanban.cards.push(text)
        } 
        return kanban
    })
    kanbanData=updatedKanbanData;}
    localStorage.setItem("kanban", JSON.stringify(kanbanData))
}

function updateTask(columnName, task) {
        const kanbanExists = kanbanData.some((kanban)=>{
            return kanban.column===columnName
        })
        if (kanbanExists) {
            let updatedKanbanData = kanbanData.map((kanban)=>{

                const kanbanItem = kanban.cards.indexOf(task);
                let extractedItem ;
                if (kanbanItem===-1){
                    return kanban;
                } 
                    extractedItem = kanban.cards.pop(kanbanItem) 
                
                    console.log(kanban.column)
                if (kanban.column===columnName){
                    kanban.cards.push(extractedItem)
                } 

                return kanban
            
            } ) 
            console.log(updatedKanbanData)
        }
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
    dragItem = this;
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
      this.className = 'item'
      dragItem = null;
    //   console.log(this)
}

function dragDrop() {
    if (dragItem===null){
        return;
    }
    console.log(this)
    updateTask(this.id, dragItem.textContent)
    this.append(dragItem);
    console.log(dragItem.textContent)
}

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

function dragEnter() {
}
function dragLeave() {
}

function dragOver(e) {
    e.preventDefault()
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