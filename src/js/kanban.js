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

class LocalStorage {
    static save(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }

    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

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

        kanbanData=updatedKanbanData;
    }

    LocalStorage.save("kanban", kanbanData)

    // localStorage.setItem("kanban", JSON.stringify(kanbanData))
}

function updateTask(columnName, task) {
    const kanbanExists = kanbanData.some((kanban)=>{
        return kanban.column===columnName
    })

    if (kanbanExists) {
        let extractedItem;

        let updatedKanbanData = kanbanData.map((kanban)=>{
            const kanbanItem = kanban.cards.indexOf(task);
            
            if (kanbanItem !== -1) {
                if (!extractedItem) {
                    extractedItem = kanban.cards.pop(kanbanItem);
                }
            } 

            if (kanban.column === columnName) {
                extractedItem && kanban.cards.push(extractedItem);
            }
            
            return kanban
        })
        
        kanbanData = updatedKanbanData
        LocalStorage.save("kanban", kanbanData)
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

    

    updateTask(this.parentElement.id, dragItem.textContent)
    dragItem = null;
    //   console.log(this)
}

function dragDrop() {
    if (dragItem===null){
        return;
    }
   
    
    
    this.append(dragItem);
    //updateTask(this.id, dragItem.textContent)

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
    console.log(kanbanData)
    kanbanData.forEach((kanban)=>{
        const column = document.querySelector(`.column#${kanban.column}`)
        
        
        const cardlist = kanban.cards.map((item)=>{
            return task(item)
        }).join("")
        
        column.insertAdjacentHTML("beforeend",cardlist)
    })
}

let kanbanData = JSON.parse(localStorage.getItem("kanban")) ?? [];