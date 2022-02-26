var myajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    myajax.open('get', 'http://192.168.31.110:3000/useing/public', true);
    myajax.send();
    myajax.onreadystatechange = function () {
        if (myajax.readyState == 4) {
            if (myajax.status == 200) {
                var data = JSON.parse(myajax.responseText)
                console.log(data);

                // 数据渲染模板中
                var html_ = template('myfirst', {
                    value: data,
                    a: data
                })
                // 把返回的html模板字符串通过innerHTML添加到页面

                myDiv.innerHTML = html_;

            }
        }
    }