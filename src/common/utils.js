//Json 数据年月日 返回 直接传入参数 如/Date(1379433600000)/
export function GetDateByDate(dateTime) {
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}

//防抖函数
export function debounce(func,time){
    let timer=null;
    return function(){
        //判断是否触发
        if(timer){
            clearTimeout(timer);
        }
        //延迟事件发生的时间
        timer=setTimeout(func,time);
    }
}