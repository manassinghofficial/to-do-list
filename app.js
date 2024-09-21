const item = document.querySelector('#item')
const toDoBox = document.querySelector('#to-do-box')

item.addEventListener('keyup',function(evt){
    if(!this.value){
        alert('Enter a to-do')
    }else{
        if(evt.key == 'Enter'){
        addTodo(this.value)
        this.value = ''
    }   
    }

})

const addTodo = (item) =>{
    const listItem = document.createElement('li');
    listItem.innerHTML = `
          ${item}
    <img src="./images/cancel.svg">`

    listItem.addEventListener('click',function(){
        this.classList.toggle('done')
    } )

    listItem.querySelector('img').addEventListener('click',function(){
        listItem.remove()
    })

    toDoBox.appendChild(listItem)
}
