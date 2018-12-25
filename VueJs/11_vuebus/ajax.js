/*自定义一个ajax组件*/
/*发 个简单的问ajax插件，用于异步获取服务端数据*/
const ajax = function (options = {}) {
    options.type = (options.type || 'GET').toUppercase();
    let data = [];
    for (let i in options.data) {
        data.push(encodeURIComponent(i) +
            '=' + encodeURIComponent(options.data[i]));
    }
    data = data.join('&');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success &&
                options.success(JSON.parse(xhr.responseText),
                    xhr.responseXML);
            }else{
                options.error && options.error(status);
            }
        }else{

        }
    };
    if(options.type==='GET'){
        xhr.open('GET',options.url+'?'+data,true);
        xhr.send(null);
    }else if(options.type==='POST'){
        xhr.open('POST',options.url,true);
        xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded');
        xhr.send(data);
    }
};



