export default {
    /**
     * Date 转换 xxxx-xx-xx 字符串
     * @param {Date} myDate 要转换的日期
     * @return {string} 日期字符串 2018-05-08
     */
    dateToFormat: myDate => {
        let yyyy = myDate.getFullYear();

        let mm = myDate.getMonth() + 1;
        let mmstring = mm < 10 ? '0' + mm : mm;

        let dd = myDate.getDate();
        let ddstring = dd < 10 ? '0' + dd : dd;

        return `${yyyy}-${mmstring}-${ddstring}`;
    },

    /**
     * Date 转换 20180102 字符串
     * @param {Date} myDate 要转换的日期
     * @return {string} 日期字符串 20180102
     */
    dateToYYYYmmNumber: myDate => {
        let yyyy = myDate.getFullYear();

        let mm = myDate.getMonth() + 1;
        let mmstring = mm < 10 ? '0' + mm : mm;

        let dd = myDate.getDate();
        let ddstring = dd < 10 ? '0' + dd : dd;

        return `${yyyy}${mmstring}${ddstring}`;
    },

    /**
     * Date 转换 xxxx-xx-xx xx:00 字符串
     * @param {Date} myDate 要转换的日期
     * @return {string} 日期字符串 2018-05-08 09:00
     */
    dateToYYYYmmDDhhMM00: myDate => {
        let yyyy = myDate.getFullYear();

        let mm = myDate.getMonth() + 1;
        let mmstring = mm < 10 ? '0' + mm : mm;

        let dd = myDate.getDate();
        let ddstring = dd < 10 ? '0' + dd : dd;

        let hh = myDate.getHours();
        let hhstring = hh < 10 ? '0' + hh : hh;

        return `${yyyy}-${mmstring}-${ddstring} ${hhstring}:00`;
    },

    /**
     * Date 转换 xxxx-xx-xx xx:xx 字符串
     * @param {Date} myDate 要转换的日期
     * @return {string} 日期字符串 2018-05-08 09:15
     */
    dateToYYYYmmDDhhMM: myDate => {
        let yyyy = myDate.getFullYear();

        let mm = myDate.getMonth() + 1;
        let mmstring = mm < 10 ? '0' + mm : mm;

        let dd = myDate.getDate();
        let ddstring = dd < 10 ? '0' + dd : dd;

        let hh = myDate.getHours();
        let hhstring = hh < 10 ? '0' + hh : hh;

        let Min = myDate.getMinutes();
        let Minstring = Min < 10 ? '0' + Min : Min;

        return `${yyyy}-${mmstring}-${ddstring} ${hhstring}:${Minstring}`;
    },

    /**
     * Date 转换 xxxx-xx-xx xx:xx:xx 字符串
     * @param {Date} myDate 要转换的日期
     * @return {string} 日期字符串 2018-05-08 09:15:30
     */
    dateToYYYYmmDDhhMMss: myDate => {
        let yyyy = myDate.getFullYear();

        let mm = myDate.getMonth() + 1;
        let mmstring = mm < 10 ? '0' + mm : mm;

        let dd = myDate.getDate();
        let ddstring = dd < 10 ? '0' + dd : dd;

        let hh = myDate.getHours();
        let hhstring = hh < 10 ? '0' + hh : hh;

        let Min = myDate.getMinutes();
        let Minstring = Min < 10 ? '0' + Min : Min;

        let ss = myDate.getSeconds();
        let ssstring = ss < 10 ? '0' + ss : ss;

        return `${yyyy}-${mmstring}-${ddstring} ${hhstring}:${Minstring}:${ssstring}`;
    },

    /**
     * xxxx-xx-xx xx:xx:xx 字符串 转换 为时间戳
     * @param {string} YYYYmmDDhhMMss xxxx-xx-xx xx:xx:xx 字符串
     * @return {number} 为时间戳 1539051630549
     */
    YYYYmmDDhhMMssToTimestamp: YYYYmmDDhhMMss => {
        let YDArray = YYYYmmDDhhMMss.split(' ');
        let YYYYmmDDarray = YDArray[0].split('-');
        let hhMMssArray = YDArray[1].split(':');
        return new Date(YYYYmmDDarray[0], (YYYYmmDDarray[1] - 1), YYYYmmDDarray[2], hhMMssArray[0], hhMMssArray[1], hhMMssArray[2]).getTime();
    },

    /**
     * xxxx-xx-xx字符串 转换 为时间戳
     * @param {string} YYYYmmDD xxxx-xx-xx xx:xx:xx 字符串
     * @return {number} 为时间戳 1539051630549
     */
    YYYYmmDDToTimestamp: YYYYmmDD => {
        let YDArray = YYYYmmDD.split(' ');
        let YYYYmmDDarray = YDArray[0].split('-');
        
        return new Date(YYYYmmDDarray[0], (YYYYmmDDarray[1] - 1), YYYYmmDDarray[2]).getTime();
    },

    /**
     * xx:xx 转换 时间戳
     * @param {Date} HoursMinutes 要转换的日期
     * @return {Number} 时间戳 1231
     */
    dateToYYYYmmDDhhMMssTimestamp: HoursMinutes => {
        let splitHoursMinutes = HoursMinutes.split(':');

        let HourStamp = parseInt(splitHoursMinutes[0]) * 1000 * 60 * 60;
        let MinuteStamp = parseInt(splitHoursMinutes[1]) * 1000 * 60;

        return HourStamp + MinuteStamp;
    },

    /**
     * 获取当前 小时与分钟 的时间戳
     * @return {Number} 时间戳 1231
     */
    getHoursMinuteStamp: () => {
        let nowDate = new Date();

        let HourStamp = nowDate.getHours() * 1000 * 60 * 60;
        let MinuteStamp = nowDate.getMinutes() * 1000 * 60;
        
        return HourStamp + MinuteStamp;
    },
}
