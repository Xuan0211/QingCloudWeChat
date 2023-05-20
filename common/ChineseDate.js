function convertChineseDate(dateStr) {
    let date = new Date(dateStr);
    let chinese = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    let y = date.getFullYear().toString();
    let m = (date.getMonth() + 1).toString();
    let d = date.getDate().toString();
    let result = '';
    //月
    if (m.length == 2) {
        let temp = '十';
        if (m.charAt(1) != '0') {
            temp += chinese[m.charAt(1)];
        }
        result += temp;
    } else {
        result += (chinese[m]);
    }
    result += '月';
    //日
    if (d.length == 2) {
        let temp = '';
        if (d.charAt(0) != '1') {
            temp += chinese[d.charAt(0)];
        }
        temp += '十';
        if (d.charAt(1) != '0') {
            temp += chinese[d.charAt(1)];
        }
        result += temp;
    } else {
        result += (chinese[d]);
    }
    result += '日';
    return result;
}
module.exports = {
    convertChineseDate: convertChineseDate,
}