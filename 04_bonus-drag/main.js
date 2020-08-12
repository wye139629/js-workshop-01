document.addEventListener("DOMContentLoaded", function(){
  let circle = document.querySelector('#circle')
  let target = document.querySelector('#target')

  //source
  // circle.addEventListener('drag', function(){
  //   console.log('drag')
  // })

  circle.addEventListener('dragstart', function(e){
    console.log('dragstart')
    e.dataTransfer.setData('circle',e.target.id)
    // console.log(e.target.id)
  })

  // circle.addEventListener('dragend', function(){
  //   console.log('dragend')
  // })

  // //target
  target.addEventListener('dragenter', function(e){
    console.log('dragenter target')
    e.preventDefault()
    e.stopPropagation()
    return false
  })

  target.addEventListener('dragover', function(e){
    console.log('dragover target')
    e.preventDefault()
    e.stopPropagation()
    return false
  })

  // target.addEventListener('dragleave', function(){
  //   console.log('dragleave target')
  // })

  target.addEventListener('drop', function(e){
    console.log('drop')
    let id = e.dataTransfer.getData('circle')
    e.target.appendChild(document.querySelector('#'+id))
  })
})
