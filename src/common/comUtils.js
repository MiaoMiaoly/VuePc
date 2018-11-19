/**
 * 扩展字符串对象
 */
(function strPadStart() {
  // 保证只执行一次
  if (window.EXTENDSTRINGONCE) {
    return;
  }
  window.EXTENDSTRINGONCE = true;
  String.prototype.strPadStart = function (len, prix) {
    let result = this;
    if (this.length < len) {
      let lastLen = len - this.length;
      for (let i = 0; i < lastLen; i++) {
        result = prix + result;
      }
    }
    return result;
  }

  /**
   * 页面禁用拖拽上传时 浏览器默认打开图片
   */
  // T12085 图片拖拽上传时，屏蔽浏览器展开图片
  document.addEventListener('drop', function (e) {
    e.preventDefault()
  }, false)
  document.addEventListener('dragover', function (e) {
    e.preventDefault()
  }, false)
}())

/**
 * 特殊字符
 */
export const REG = RegExp(/[(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)()()(\_)(\+)(\=)()()(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\>)(\?)(\)]+/, 'g');

/**
 * 工具方法
 */
export const Utils = (function () {
  const dataType = (obj) => {
    let result;
    switch (Object.prototype.toString.call(obj)) {
      case '[object Object]':
        result = 'object';
        break;
      case '[object Array]':
        result = 'array';
        break;
      case '[object Function]':
        result = 'function';
        break;
      case '[object String]':
        result = 'string';
        break;
      case '[object Null]':
        result = 'null';
        break;
      case '[object Undefined]':
        result = 'undefined';
        break;
      case '[object Number]':
        result = 'number';
        break;
      case '[object Boolean]':
        result = 'boolean';
        break;
    }
    return result;
  }
  return {
    dataType,
    isObject(obj) {
      return dataType(obj) === 'object';
    },
    isArray(obj) {
      return dataType(obj) === 'array';
    },
    isFunction(obj) {
      return dataType(obj) === 'function';
    },
    isString(obj) {
      return dataType(obj) === 'string';
    },
    isNull(obj) {
      return dataType(obj) === 'null';
    },
    isUndefined(obj) {
      return dataType(obj) === 'undefined';
    },
    isNumber(obj) {
      return dataType(obj) === 'number';
    },
    isBoolean(obj) {
      return dataType(obj) === 'boolean';
    },
    isNotEmptyArray (obj) {
      /**
       * 判断是否是非空数组
       *  > 当前数据类型是数组
       *  > 当前数组的长度大于零
       */
      return dataType(obj) === 'array' && obj.length > 0
    },
    isNotEmptyObj (obj) {
      return dataType(obj) === 'object' && JSON.stringify(obj) !== '{}'
    },
    isNotEmptyString (obj) {
      return dataType(obj) === 'string' && obj.length > 0
    }
  }
}());


/**
 * 存储数据，抽离的目的是为了后续的扩展，现阶段采用的是 浏览器的本地存储功能，
 * 方便后续的加密等扩展功能
 * @param {宿主对象，可以为空，默认为 window} glob
 * @param {存储方法，可以为空} type
 * @param {存储的键名，可以为空} key
 * @param {存储的值，可以为空} val
 * @param {采用对象的形式进行存储，可以为空} datas
 */

// 处理数据类型
function queryData(data) {
  if (typeof data === 'object' && data !== null) {
    return JSON.stringify(data);
  } else if (typeof data === 'string') {
    return data;
  }
}

export function saveData({ type = 'sessionStorage', key, val, datas = null, glob = window }) {
  if (glob === window) {
    if (type === 'sessionStorage' || type === 'localStorage') {
      if (key) {
        let value = queryData(val);
        glob[type].setItem(key, value);
      }
      if (datas && typeof datas === 'object') {
        Object.keys(datas).forEach(item => {
          let value = queryData(datas[item]);
          glob[type].setItem(item, value);
        })
      }
    }
  }
}


/**
 * 获取离线存储数据
 */

export function getData({ type = 'sessionStorage', key, glob = window }) {
  if (glob === window) {
    if (type === 'sessionStorage' || type === 'localStorage') {
      if (Array.isArray(key)) {
        let obj = {};
        key.forEach(item => {
          let value = glob[type].getItem(item);
          obj[item] = value;
        })
        return obj;
      } else {
        let value = glob[type].getItem(key);
        return value;
      }
    }
  }
}

/**
 * 删除数据
 */

export function delData({ type = 'sessionStorage', key, glob = window }) {
  if (glob === window) {
    if (type === 'sessionStorage' || type === 'localStorage') {
      if (Array.isArray(key)) {
        key.forEach(item => {
          glob[type].removeItem(item);
        })
      } else {
        glob[type].removeItem(key);
      }
    }
  }
}


/**
 * 链接跳转，用于模块间的跳转
 * 默认采用window.location.href 赋值的方式
 */
export function nextStep({ glob = window, url }) {
  if (!url) return;
  if (glob === window) {
    glob.location.href = url;
  }
}


/**
 * unicode 编码，用于通过 url 传递参数
 */

export function setUnicode(params) {
  return encodeURI(params);
}


/**
 * unicode 解码
 * 为了可以解码多次编码的结果，此处需要使用递归的方式进行解码
 */

export function getUnicode(params) {
  if (!params.includes('%')) {
    return params;
  }
  return getUnicode(decodeURI(params));
}


/**
 * 格式化时间
 * @param {String} originDate 原始时间
 * @param {String} formatStyle 格式化样式
 */

// 处理formatStyle
function queryFormatStyle(style) {
  let reg = /(y+)([^y^m^d])?(m+)([^y^m^d])?(d+)([^y^m^d])?/gi;
  let yearLen, yearUnit, monthLen, monthUnit, dateLen, dateUnit;
  style.replace(reg, (s0, s1, s2, s3, s4, s5, s6) => {
    yearLen = s1 ? s1.length : 0;
    yearUnit = s2 || '';
    monthLen = s3 ? s3.length : 0;
    monthUnit = s4 || '';
    dateLen = s5 ? s5.length : 0;
    dateUnit = s6 || '';
  })
  return { yearLen, yearUnit, monthLen, monthUnit, dateLen, dateUnit };
}
function queryDateLength(y, m, d, styleObj) {
  y = y.length >= styleObj.yearLen ? y.substring(4 - styleObj.yearLen) : y.strPadStart(styleObj.yearLen, 0)
  m = m.length >= styleObj.monthLen ? m.substring(2 - styleObj.monthLen) : m.strPadStart(styleObj.monthLen, 0)
  d = d.length >= styleObj.dateLen ? d.substring(2 - styleObj.dateLen) : d.strPadStart(styleObj.dateLen, 0)
  return y + styleObj.yearUnit + m + styleObj.monthUnit + d + styleObj.dateUnit;
}
export function formatDate(originDate, formatStyle = 'yyyy/mm/dd') {
  if (!originDate) return;
  let date = new Date(originDate);
  let isNativeDate = !isNaN(date.getDate());
  let reg = /^\d{4}\D?\d{2}\D?\d{2}\D?$/gi;
  if (!originDate || (!isNativeDate && !reg.test(originDate))) {
    console.error(originDate + '不能被正确格式化，请输入正确的时间');
    return originDate;
  }
  let y, m, d;
  if (isNativeDate) {  // 是原生时间格式
    y = date.getFullYear().toString();
    m = (date.getMonth() + 1).toString();
    d = date.getDate().toString();
  } else {  // 非原生时间格式
    // 只处理 yyyy(.?)mm(.?)dd(.?)这种格式
    let reg = /^(\d{4})(\D?)(\d{2})(\D?)(\d{2})(.?)$/gi;
    originDate.replace(reg, (s0, s1, s2, s3, s4, s5) => {
      y = s1;
      m = s3;
      d = s5;
    })
  }
  return queryDateLength(y, m, d, queryFormatStyle(formatStyle))
}


/**
 * 两个对象之间的同一字段进行赋值
 * @param {Object} targetObj 目标对象，被赋值的对象
 * @param {Object} originObj 源对象，数据来源
 * @param {String、Array} fieldNames 字段名称
 */
export function sameFieldWithObj(targetObj, originObj, fieldNames) {
  if (Utils.isString(fieldNames)) {
    targetObj[fieldNames] = originObj[fieldNames];
  } else if (Utils.isArray(fieldNames)) {
    fieldNames.forEach(item => {
      targetObj[item] = originObj[item];
    })
  } else {
    console.error('输入的参数错误');
  }
}

/**
 * 金额格式化方法
 * @param {String[,Number]} target 目标字段
 * @param {Number} floatB 保留的小数位
 */
export function formatAmount(target, floatB = 2) {
  if (!target && target !== 0) return;
  if (typeof target !== 'string' && typeof target !== 'number') {
    console.error('被格式化的数据类型应该是Number或String类型');
    return;
  }
  // 保留指定位数的小数
  target = parseFloat(target).toFixed(floatB);
  // 千分位分割
  let rex = /\d{1,3}(?=(\d{3})+$)/g;
  target = target.replace(/^(-?)(\d+)((\.\d+)?)$/, function (s, s1, s2, s3) {
    return s1 + s2.replace(rex, "$&,") + s3;
  });
  return target;
}


/**
 * 数据合并方法
 * @param {Object} target 目标对象
 * @param {Object} origin 源对象
 */
export function mergeData(target, origin) {
  if (Utils.dataType(target) !== Utils.dataType(origin)) {
    console.error('目标对象与源对象的数据类型不同，无法实现合并');
    return;
  }
  if (Utils.isArray(target)) {
    target.length = 0;
    target.push(...origin);
  }
  if (Utils.isObject(target)) {
    for (let attr in target) {
      if (target.hasOwnProperty(attr)) {
        let defaultVal;
        switch (Utils.dataType(target[attr])) {
          case 'object':
            defaultVal = target[attr] || {};
            break;
          case 'array':
            defaultVal = target[attr] || [];
            break;
          case 'string':
            defaultVal = target[attr] || '';
            break;
          case 'number':
            defaultVal = target[attr] || 0;
            break;
          case 'boolean':
            defaultVal = target[attr] || false;
            break;
        }
        target[attr] = (origin[attr] || defaultVal);
      }
    }
  }
}

/**
 * 数据合并方法
 * @param {Object} target 目标对象
 * @param {Object} origin 源对象
 * @param {String} stand 合并标准，默认为左树标准
 * @returns {void} 无返回值
 */
export function mergeDataAdv(target, origin, stand = 'left') {
  if (!target || !origin) {
    return
  }
  if (Utils.dataType(target) !== Utils.dataType(origin)) {
    console.error('目标对象与源对象的数据类型不同，无法实现合并')
    return
  }

  let flag = stand === 'left'
  let forEachEle = flag ? target : origin
  for (let prop in forEachEle) {
    if (Utils.dataType(target[prop]) === 'object') {
      // target[prop] = (target[prop].constructor === Array) ? [] : {}// 三元运算，将s[prop]初始化为数组或者对象
      mergeData(target[prop], origin[prop])
    } else if (Utils.dataType(target[prop]) === 'array') {
      // 兼容处理
      if (!origin[prop]) {
        origin[prop] = []
      }
      if (origin[prop].length > 0) {
        // 该条件是为了剔除重复的数据
        target[prop].length = 0
      }
      target[prop].push(...origin[prop])
    } else {
      let defaultVal
      switch (Utils.dataType(target[prop])) {
        case 'object':
          defaultVal = flag ? (target[prop] || {}) : (origin[prop] || {})
          break
        case 'array':
          // defaultVal = target[prop] || []
          defaultVal = flag ? (target[prop] || []) : (origin[prop] || [])
          break
        case 'string':
          // defaultVal = target[prop] || ''
          defaultVal = flag ? (target[prop] || '') : (origin[prop] || '')
          break
        case 'number':
          // defaultVal = target[prop] || 0
          defaultVal = flag ? (target[prop] || 0) : (origin[prop] || 0)
          break
        case 'boolean':
          // defaultVal = target[prop] || false
          defaultVal = flag ? (target[prop] || false) : (origin[prop] || false)
          break
      }
      target[prop] = (origin[prop] || defaultVal)
    }
  };
}

export class Drag {
  constructor(el) {
    this.el = el;
    this.sty = this.el.currentStyle || window.getComputedStyle(this.el, null);
    const _this = this
    this.el.onmousedown = function(){
      _this.mousedown();
    }
    // document.onmouseup = function(){
    //   _this.mouseup();
    // }
  }
  mousedown(e) {
    var e = e || window.event;
    // 鼠标按下，计算当前元素距离可视区的距离
    let disX = e.clientX;
    let disY = e.clientY;

    // 获取到的值带px 正则匹配替换
    let styL, styT;

    // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
    if (this.sty.left.includes('%')) {
      styL = +document.body.clientWidth * (+this.sty.left.replace(/\%/g, '') / 100);
      styT = +document.body.clientHeight * (+this.sty.top.replace(/\%/g, '') / 100);
    } else {
      styL = +this.sty.left.replace(/\px/g, '');
      styT = +this.sty.top.replace(/\px/g, '');
    };

    const this1 = this;

    document.onmousemove = function (e) {
      e.preventDefault();
      // 通过事件委托，计算移动的距离
      const l = e.clientX - disX;
      const t = e.clientY - disY;

      // 移动当前元素  
      this1.el.style.left = `${l + styL}px`;
      this1.el.style.top = `${t + styT}px`;
    };

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
  
}

/**
 * 多数据表单数据模型统一处理
 */
export const QueryModel = {
  // 用于页面循环展示的数据，viewData 是一个Array
  viewDataFn (origin) {
    return Object.keys(origin).filter(item => {
      return origin[item].view
    }).map(item => {
      return {
        value: origin[item].val,
        label: origin[item].label,
        type: origin[item].type,
        options: origin[item].options || {},
        renderFn: origin[item].renderFn,
        prop: item,
        unit: origin[item].unit || '',
        classNames: origin[item].classNames,
        defaultProp: origin[item].defaultProp,
        items: origin[item].items,
        format: origin[item].format,
        slot: origin[item].slot
      }
    })
  },

  // 用于页面绑定的数据，modelData 是一个object
  modelDataFn (origin) {
    const serverdata = {}
    Object.keys(origin).forEach(item => {
      if (origin[item].model) {
        serverdata[item] = origin[item].value
      }
    })
    return serverdata
  },

  // 需要提交到后台的字段，serverData 是一个object
  serverDataFn (origin) {
    const serverdata = {}
    Object.keys(origin).forEach(item => {
      if (origin[item].server) {
        serverdata[item] = origin[item].value
      }
    })
    return serverdata
  },

  // 表单校验规则
  rulesFn (_this, origin) {
    let ruls = {}
    Object.keys(origin).forEach(item => {
      ruls[item] = Utils.isFunction(origin[item].rules) && origin[item].rules.call(_this)
    })
    return ruls
  }
}

/**
 * 对象拷贝
 */
export function deepClone (initalObj, finalObj) {
  let obj = finalObj || {}
  for (let i in initalObj) {
    let prop = initalObj[i]

    // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue
    }

    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : {}
      deepClone(prop, obj[i])
    } else {
      obj[i] = prop
    }
  }
  return obj
}

/**
 * 对象拷贝
 */
export function deepCloneV2(initalObj, finalObj) {
  let obj = null
  if (Utils.isObject(initalObj)) {
    obj = {}
    for (let attr in initalObj) {
      obj[attr] = deepCloneV2(initalObj[attr], obj[attr])
    }
  } else if (Utils.isArray(initalObj)) {
    obj = []
    initalObj.forEach((item, index) => {
      obj[index] = deepCloneV2(item, obj[index])
    })
  } else {
    obj = initalObj
  }
  // let obj = finalObj || {}
  // for (let i in initalObj) {
  //   let prop = initalObj[i]

  //   // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
  //   if (prop === obj) {
  //     continue
  //   }

  //   if (typeof prop === 'object') {
  //     obj[i] = (prop.constructor === Array) ? [] : {}
  //     deepClone(prop, obj[i])
  //   } else {
  //     obj[i] = prop
  //   }
  // }
  return obj
}
