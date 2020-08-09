document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('button').addEventListener('click', function(){
    let circle = document.querySelector('#t-circle')
    var clone = document.importNode(circle.content, true);

    document.querySelector('.box').appendChild(clone)
  })
})

// https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments
