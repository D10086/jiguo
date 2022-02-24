function aj(a){
    if(window.XMLHttpRequest){
        var oajax = new XMLHttpRequest()
    }else{
        var oajax = new ActiveXObject('Microsoft.XMLHTTP')
    }
    oajax.open('get',a,true)
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
}
aj('http://192.168.31.110:3000/useing/master')


var line_ = document.getElementById('line-p')
var reb = document.getElementById('report-box')
function line(){
    reb.style.height = '2050px'
    line_.innerHTML = '没有更多'
}


var div_bo = document.getElementsByClassName('mbo')
var div_ = document.getElementsByClassName('mful')
function madd1(){
    for(var i = 0;i<div_bo.length;i++){
        div_bo[i].id = ''
    }
    div_bo[0].id = 'red'
    for(var i = 0;i<div_.length;i++){
        div_[i].id = ''
    }
    div_[0].id = 'add'
    aj('http://192.168.31.110:3000/useing/master')
    
}
function madd2(){
    for(var i = 0;i<div_bo.length;i++){
        div_bo[i].id = ''
    }
    div_bo[1].id = 'red'
    for(var i = 0;i<div_.length;i++){
        div_[i].id = ''
    }
    div_[0].id = 'add'
    aj('http://192.168.31.110:3000/useing/public')
}


function add1(){
    for(var i = 0;i<div_.length;i++){
        div_[i].id = ''
    }
    div_[0].id = 'add'
    aj('http://192.168.31.110:3000/useing/master')
}
function add2(){
    for(var i = 0;i<div_.length;i++){
        div_[i].id = ''
    }
    div_[1].id = 'add'
    aj('http://192.168.31.110:3000/useing/public')
}
function add3(){
    for(var i = 0;i<div_.length;i++){
        div_[i].id = ''
    }
    div_[2].id = 'add'
    aj('http://192.168.31.110:3000/useing/master')
}
function add4(){
    for(var i = 0;i<div_.length;i++){
        div_[i].id = ''
    }
    div_[3].id = 'add'
    aj('http://192.168.31.110:3000/useing/public')
}

