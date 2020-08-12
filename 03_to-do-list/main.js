window.addEventListener('DOMContentLoaded',function(){ 
  let ul = document.querySelector('ul')
  const addBtn = document.getElementById('addBtn')


  ul.addEventListener('click',function(e) {
    const lists = document.querySelectorAll('ul>li')  
    console.log(e)
    if(e.target.className.indexOf('checked')!=-1){
       e.target.classList.remove('checked')
        }else{
        e.target.classList.add('checked')
      }
      if(e.target.className.indexOf("close")!=-1){
        e.target.parentNode.remove()
      }

      
  function start(e) {
    // console.log(start)
    e.target.className = 'tar'
    // console.log(e.target)

    let position = e.pageY-e.offsetY
    e.dataTransfer.setData('listP', position)
    e.dataTransfer.setData('list',e.target.className)
  }


  function drop(e) {
    cancelDefault(e)
    let newPosition = e.pageY-e.offsetY
    let oldIndex = e.dataTransfer.getData('listP')
    let target = e.target
    let newIndex = newPosition
    let oldClassName = e.dataTransfer.getData('list')
    let oldtarget = document.querySelector('.'+oldClassName)
    console.log(oldtarget)
    
    
    if(newIndex < oldIndex){
      target.insertAdjacentElement('beforebegin',oldtarget)
      oldtarget.classList.remove('tar')
    }else{
      target.insertAdjacentElement('afterend',oldtarget)
      oldtarget.classList.remove('tar')
    }
  }
  // function enter(e) {
  //   // console.log(enter)
  //   // console.log(e)
  //   e.preventDefault()
  //   e.stopPropagation()
  // }
  
  function over(e) {
    // console.log(over)
  }
  function cancelDefault(e) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }



    lists.forEach((list)=>{
      list.setAttribute('draggable', true)
      list.addEventListener('dragstart',start)
      // list.addEventListener('drag',drag)
      list.addEventListener('dragenter',cancelDefault)
      list.addEventListener('dragover',cancelDefault)
      list.addEventListener('drop',drop)
    })

  })

  // function checkHandler(e){
  //   if(e.target.classList.value === 'checked'){
  //     e.target.classList.remove('checked')
  //   }else{
  //     e.target.classList.add('checked')
  //   }
  // }  
  // function removeHandler(e){
  //   e.target.parentNode.remove()
  // }

  function addHandler(){
    let listArea = document.querySelector('ul')
    let list = document.createElement('li')
    let span = document.createElement('span')
    let input = document.getElementById('input')
    list.textContent = input.value
    span.className = 'close'
    span.textContent = 'x'
    list.appendChild(span)
    listArea.appendChild(list)  
  }
  
  
  
  
  // console.log(listItem)
  // listItem.forEach((item)=>{item.addEventListener('click',checkHandler)})
  // closes.forEach((close)=>{close.addEventListener('click',removeHandler)})
  addBtn.addEventListener('click',addHandler)
  

})
