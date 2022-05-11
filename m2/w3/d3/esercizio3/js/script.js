let t = 0

if(sessionStorage.getItem("tempo")){
    t = sessionStorage.getItem("tempo")
}
setInterval(function(){
    t++
    sessionStorage.setItem("tempo", t)
    document.getElementById("tempo").innerHTML= t
}, 1000)