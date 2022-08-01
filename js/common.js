function getParams(name) {
    var query = window.location.search.substring(1);
    if(!query) {
        return false;
    }
    var strArr = query.split("&");
    for (var i=0;i<strArr.length;i++) {
        var pair = strArr[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}

let formatDate = (date, split) => {
    window.console.log(date)
    const d = new Date(date)
    const y = d.getFullYear() // 年份
    const m = (d.getMonth() + 1).toString().padStart(2, '0') // 月份
    const r = d.getDate().toString().padStart(2, '0') // 日子
    const hh = d.getHours().toString().padStart(2, '0') // 小时
    const mm = d.getMinutes().toString().padStart(2, '0') // 分钟
    const ss = d.getSeconds().toString().padStart(2, '0') // 秒
    if (split) {
        return `${y}${split}${m}${split}${r} ${hh}:${mm}:${ss}`
    }
    return `${y}-${m}-${r} ${hh}:${mm}:${ss}`// es6 字符串模板
}
