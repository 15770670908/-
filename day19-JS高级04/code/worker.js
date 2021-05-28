console.log("fenxiancheng");
//onmessage事件 是监听其他线程传输数据 如果一旦有传递则事件触发
//this代表当前的线程
this.onmessage = function (e) {
    //event事件对象中有一个data属性 保存的时候触发事件的数据
    console.log(e);
    var sum = 0;
    for (var i = 0; i < e.data; i++) {
        sum += Math.sqrt(i);
    }

    //当结果执行完成，可能需要给主线程发送消息 直接使用postMessage即可
    postMessage(sum);

    //在分线程关闭自身使用close方法
    close();
}