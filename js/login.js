var gin = document.getElementsByClassName('h_span')[1]
var clo = document.getElementsByClassName('closs')[0]
var div_  = document.getElementById('login')
clo.onclick = function(){
    div_.className = ''
}
gin.onclick = function(){
    div_.className = 'login'
}
