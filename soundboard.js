var part1 = document.getElementById('part1')
var BB = document.getElementById('BB')

part1.addEventListener('click',function(){
    BB.play()
    Bomb.pause()
    CB.pause()
})

BB.addEventListener('ended',function(){
    part1.innerHTML='play'
})

var part2 = document.getElementById('part1')
var Bomb  = document.getElementById('Bomb')

part2.addEventListener('click',function(){
    Bomb.play()
    BB.pause()
    CB.pause()
})

Bomb.addEventListener('ended',function(){
    part2.innerHTML='play'
})

var part3 = document.getElementById('part3')
var CB = document.getElementById('CB')

part3.addEventListener('click', function(){
    CB.play()
    Bomb.pause()
    BB.pause()
})

CB.addEventListener('ended',function(){
    part3.innerHTML='play'
})