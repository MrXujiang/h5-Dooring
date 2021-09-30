import { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import { RGBColor } from 'react-color';

// 生成uuid
function uuid(len: number, radix: number) {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

// 将rgba字符串对象转化为rgba对象
function rgba2Obj(rgba = '') {
  let reg = /rgba\((\d+),(\d+),(\d+),(\d+)\)/g;
  let rgbaObj: RGBColor = { r: 0, g: 0, b: 0, a: 0 };

  rgba.replace(reg, (_m, r, g, b, a) => {
    rgbaObj = { r, g, b, a };
    return rgba;
  });
  return rgbaObj;
}

export { uuid, rgba2Obj };

export const isDev = process.env.NODE_ENV === 'development';

export function useGetRect() {
  const [rect, setRect] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setRect({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  return rect;
}

export function useGetScrollBarWidth(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (ref.current) {
      const diff = ref.current.offsetWidth - ref.current.clientWidth;
      setWidth(diff);
    }
  }, [ref]);
  return width;
}

export function useAnimation(state: boolean, delay: number) {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    let timer: number;
    if (state && display === true) {
      setDisplay(false);
    } else if (!state && display === false) {
      timer = window.setTimeout(() => {
        setDisplay(true);
      }, delay);
    }
    return () => {
      window.clearTimeout(timer);
    };
  }, [delay, display, state]);
  return [display, setDisplay];
}

export function unParams(params = '?a=1&b=2&c=3') {
  let obj: any = {};
  params &&
    // eslint-disable-next-line no-useless-escape
    params.replace(/((\w*)=([\.a-z0-9A-Z]*)?)?/g, (m, a, b, c): any => {
      if (b || c) obj[b] = c;
    });
  return obj;
}

export function throttle(fn: Function, delay: number) {
  let flag = true;
  return (...args: any) => {
    if (flag) {
      flag = false;
      fn(...args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

export function formatTime(fmt: string, dateObj: any) {
  const date = dateObj || new Date();
  const o: any = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      );
    }
  }
  return fmt;
}

// note (@livs-ops): 检测当前浏览器模式
export function detectMobileBrowser(browserNavigatorMetaInfo: string): boolean {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      browserNavigatorMetaInfo,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      browserNavigatorMetaInfo.substr(0, 4),
    )
  );
}

// note (@livs-ops): 获取浏览器元信息
export function getBrowserNavigatorMetaInfo(): string {
  return window.navigator.userAgent || window.navigator.vendor || window.opera;
}

export const serverUrl = isDev ? 'http://192.16x.x.x:3000' : '你的服务器地址';

// 宽度适配器
export const _gaw = (w: number) => {
  const vw = window.innerWidth > 800 ? 375 : window.innerWidth;
  return (vw / 375) * w;
};

// 代码运行环境判断
export function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
