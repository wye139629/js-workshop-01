document.addEventListener('DOMContentLoaded',function(){
  let outer = document.querySelector('.outer')
  let inner = document.querySelector('.inner')
  let link = document.querySelector('a')

  // event bubbling
  outer.addEventListener('click', function(){
    console.log('outer')
  })

  inner.addEventListener('click', function(){
    console.log('inner')
  })

  // // event capturing
  // outer.addEventListener('click', function(){
  //   console.log('outer')
  // }, true)

  // inner.addEventListener('click', function(){
  //   console.log('inner')
  // }, true)


  // // stopPropagation
  // outer.addEventListener('click', function(){
  //   console.log('outer')
  // })

  // inner.addEventListener('click', function(e){
  //   e.stopPropagation();
  //   console.log('inner')
  // })

  // // preventDefault
  // link.addEventListener('click', function(e){
  //   e.preventDefault();
  //   console.log('link');
  // })
})
