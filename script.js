let newTask=$('#newTask')
let ulTasks=$('#ulTasks')
let addBtn= $('#addBtn')
let deleteBtn= $('#deleteBtn')

function addItem()
{
    let listItem=($('<li>',{
        class:'list-group-item',
        text: newTask.val()
    }))
    listItem.click((event)=>{
        listItem.toggleClass('done')
    })
ulTasks.append(listItem)
newTask.val('')
}
 
newTask.keypress((e)=>{
    if(e.which==13)
    addItem()
    
})
 
addBtn.click(addItem)

  

