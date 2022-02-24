if(window.XMLHttpRequest){
    var oajax = new XMLHttpRequest()
}else{
    var oajax = new ActiveXObject('Microsoft.XMLHTTP')
}
oajax.open('get','http://192.168.31.110:3000/useing/master',true)
oajax.send()
oajax.onreadystatechange = function(){
    if(oajax.readyState==4){
        if(oajax.status==200){
            var data = JSON.parse(oajax.responseText)  
            var html_ = template('myfirst',{
                value:data,
            })
            wrapBlo.innerHTML = html_
        }
    }
}