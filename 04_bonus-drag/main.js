document.addEventListener("DOMContentLoaded", function(){
  let circle = document.querySelector('#circle')
  let target = document.querySelector('#target')

  //source
  circle.addEventListener('drag', function(){
    console.log('drag')
  })

  circle.addEventListener('dragstart', function(){
    console.log('dragstart')
  })

  circle.addEventListener('dragend', function(){
    console.log('dragend')
  })

  // //target
  // target.addEventListener('dragenter', function(){
  //   console.log('dragenter target')
  // })

  // target.addEventListener('dragover', function(){
  //   console.log('dragover target')
  // })

  // target.addEventListener('dragleave', function(){
  //   console.log('dragleave target')
  // })

  // target.addEventListener('drop', function(){
  //   console.log('drop')
  // })
})
