// 生成uuid
function uuid(len, radix) {  
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');  
  let uuid = [], i;  
  radix = radix || chars.length;  
 
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];  
  } else {  
    let r;   
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';  
    uuid[14] = '4';  

    for (i = 0; i < 36; i++) {  
      if (!uuid[i]) {  
        r = 0 | Math.random()*16;  
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];  
      }  
    }  
  }  
 
  return uuid.join('');  
}

// 将rgba字符串对象转化为rgba对象
function rgba2Obj(rgba = '') {
  let reg = /rgba\((\d+),(\d+),(\d+),(\d+)\)/g
  let rgbaObj = {}
  rgba.replace(reg, (m, r, g, b, a) => {
    rgbaObj = {r, g, b, a}
  })
  return rgbaObj
}

export {
  uuid,
  rgba2Obj
}