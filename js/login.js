var gin = document.getElementsByClassName('h_span')[1]
var clo = document.getElementsByClassName('closs')[0]
var box_ = document.getElementsByClassName('login-box')[0]
clo.onclick = function(){
    box_.style.display='none'
}
gin.onclick = function(){
    box_.style.display='block'
}

function login(){
    var data = 'username='+count1.value+'&password='+sec1.value
    var myajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
    myajax.open('post','http://192.168.31.110:3000/users/login',true)
    myajax.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    myajax.send(data)
    myajax.onreadystatechange = function(){
        if(myajax.readyState ==4){
            if(myajax.status==200){
                console.log(myajax.responseText);
                obj = JSON.parse(myajax.responseText)
                if(obj.msg == '登录成功'){
                    alert('登录成功')
                }
            }
        }
    }
}