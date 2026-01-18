let newTask = $('#newTask')
let ulTasks = $('#ulTasks')
let addBtn = $('#addBtn')
let resetBtn = $('#resetBtn')
let cleanupBtn = $('#cleanupBtn')
let sortBtn = $('#sortBtn')

function addItem() {
    let listItem = ($('<li>', {
        class: 'list-group-item',
        text: newTask.val()
    }))
    listItem.click((event) => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    newTask.val('')
    toggleInputBtns()
}
function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputBtns()
}
function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
    
}

function toggleInputBtns() {
    
        resetBtn.prop('disabled', newTask.val()== '')
        addBtn.prop('disabled', newTask.val() == '')
    
        sortBtn.prop('disabled', ulTasks.children().length<1)
        cleanupBtn.prop('disabled',ulTasks.children().length<1)
    

}

newTask.keypress((e) => {
    if (e.which == 13)
        addItem()

})

newTask.on('input',toggleInputBtns)

addBtn.click(addItem)
resetBtn.click(() => {
    newTask.val('')
    toggleInputBtns()
})
cleanupBtn.click(clearDone)
sortBtn.click(sortTasks)



