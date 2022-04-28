let cube = document.querySelector(".image-cube")
let btnNext = document.getElementById("next")
let btnPrev = document.getElementById("prev")
let btnPlay = document.getElementById("play")

let pos = 0

btnNext.addEventListener("click", () =>{

    pos -= 90
    cube.style.transform = `rotateY(${pos}deg)`
})

btnPrev.addEventListener("click", () =>{

    pos += 90
    cube.style.transform = `rotateY(${pos}deg)`
})

btnPlay.addEventListener("click", () =>{

    pos -=360
    cube.style.transform = `rotateY(${pos}deg)` 
})