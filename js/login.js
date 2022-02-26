var gin = document.getElementsByClassName('h_span')[1]
var clo = document.getElementsByClassName('closs')[0]
var box_ = document.getElementsByClassName('login-box')[0]
clo.onclick = function(){
    box_.style.display='none'
}
gin.onclick = function(){
    box_.style.display='block'
}
<<<<<<< HEAD

count1.onblur=function(){
    var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/;
    if(reg.test(count1.value)){
        tishi1.innerHtml='输入正确';
        tishi1.style.color='green';
    }else{
        tishi1.innerHtml='输入错误';
        tishi1.style.color='red';
    }
}
sec1.onblur=function(){
    var reg=/^\w{6,10}$/;
    if(reg.test(sec1.value)){
        tishi2.innerHtml='输入正确';
        tishi2.style.color='green';
    }else{
        tishi2.innerHtml='输入错误';
        tishi2.style.color='red';
    }
}
=======
>>>>>>> a99bae11f90278bb7e232adbc557b227297ab032
