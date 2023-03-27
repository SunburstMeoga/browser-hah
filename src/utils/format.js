export function timeFormat(obj) {
    if (obj == null) {
        return null
    }
    let date = new Date(obj * 1000);
    let y = 1900 + date.getYear();
    let m = "0" + (date.getMonth() + 1);
    let d = "0" + date.getDate();
    let h = "0" + date.getHours();
    let mm = "0" + date.getMinutes();
    let s = date.getSeconds();
    return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length) + " " + h.substring(h.length - 2, h.length) + ":" + mm.substring(mm.length - 2, mm.length) + ":" + s;
}

export function addressFormat(str) {
    let arr = []
    arr = str.split('')
    let arrTarget = []
    arr.map((item, index) => {
        if (index <= 1 || index > 25) {
            arrTarget.push(item)
        }
    })
    return arrTarget.join('')
}

export function addressFilter(value) {
    if (value === undefined) return
    let arr = value.split('')
    let targetStr
    let targetArr = []
    arr.map((item, index) => {
        if (index <= 6 || index >= arr.length - 7) {
            targetArr.push(item)
        }
    })
    targetArr.splice(7, 0, '...')
    targetStr = targetArr.join('')
    return targetStr
}

export function amountFormat(str) {
    let target = Math.pow(10, 18)
    let num = Number(str);// string => number
    let result = (num / target).toFixed(4);// number => string.toFixed(4)
    return result
}