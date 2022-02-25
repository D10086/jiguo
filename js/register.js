var reg_get = document.getElementsByClassName('reg-get')[0]
var index = 10
var timer = null
reg_get.onclick = function(){
    reg_get.innerHTML = '10'
    timer = setInterval(() => {
        index--
        reg_get.innerHTML = index
        if(index<0) {
            clearInterval(timer)
            reg_get.innerHTML = '再次发送验证码'
            index = 10
            reg_get.disabled = false
        }
    }, 1000);
    
    if(timer){
        reg_get.disabled = true
    }
}


