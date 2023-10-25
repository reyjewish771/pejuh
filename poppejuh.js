(function prepareKeywords(onComplete) {
  var title = null,
  setTitle = function () {
    var headNode,
    titleNode;
    try {
      headNode = window.top.document.getElementsByTagName('head') [0];
    } catch (e) {
      headNode = document.getElementsByTagName('head') [0];
    }
    if (headNode) {
      titleNode = headNode.getElementsByTagName('title') [0];
      if (titleNode) title = 'textContent' in titleNode ? titleNode.textContent : ('innerText' in titleNode ? titleNode.innerText : '');
    }
  },
  runCallback = function () {
    var keywords = [
    ],
    ref = null;
    if (title !== null) keywords = title.toLowerCase().replace(/[^a-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF+-]+/g, ' ').split(' ').filter(function (keyword) {
      return keyword;
    });
    try {
      ref = window.top.location.href;
    } catch (e) {
      ref = location.href;
    }
    onComplete('&kw=' + encodeURIComponent(JSON.stringify(keywords)) + (ref !== null ? '&refer=' + encodeURIComponent(ref)  : ''));
  };
  setTitle();
  if (title === null) {
    setTimeout(function () {
      setTitle();
      runCallback();
    }, 20);
  } else {
    runCallback();
  }
}) (function (kwString) {
  var options = {
    'dimensions': {
      'height': 760,
      'width': 1000
    },
    'hardcore': 0,
    'mobiletab': false,
    'timing': {
      'delay': 30,
      'init_delay': 0,
      'max': 3,
      'period': 1 * 60 * 60
    },
    'url': '//custodycraveretard.com/watch?key=46213c38e1572eb4531991ced22cd887' + kwString + '&scrWidth=' + screen.width + '&scrHeight=' + screen.height + '&tz=' + ((new Date).getTimezoneOffset() / - 60),
    'key': '46213c38e1572eb4531991ced22cd887'
  };
  var system = {
    'clicked_url': null,
    '_handle': null,
    'options': 'toolbar=no,directories=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + options.dimensions.width + ',height=' + options.dimensions.height + ',left=' + Math.round((screen.width - options.dimensions.width) / 2) + ',top=' + Math.round((screen.height - options.dimensions.height) / 2),
    'shown': 0,
    'window': false,
    'self': false,
    'mself': false,
    'pdf': 'https://cdn15.acloudimages.com/36/template/pu1473410272.pdf',
    'fs': true,
    'wp': false,
    'include': [
    ],
    'exclude': [
    ],
    'ftg': true,
    'swipe': true,
    'ovl': false
  };
  var newOpts = system.options.replace(new RegExp('(height=[\\d]{1,})', 'g'), 'height=' + window.screen.availHeight).replace(new RegExp('(width=[\\d]{1,})', 'g'), 'width=' + window.screen.availWidth).replace(new RegExp('(top=[\\d]{1,})', 'g'), 'top=0').replace(new RegExp('(left=[\\d]{1,})', 'g'), 'left=0');
  var _parent = self;
  try {
    _parent = (top != self && typeof (top.document.location.toString()) === 'string') ? top : self;
  } catch (e) {
  }
  var brs = function () {
    var n = navigator.userAgent.toLowerCase(),
    b = {
      webkit: /webkit/.test(n),
      mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
      chrome: /chrome/.test(n) || /crios/.test(n),
      msie: (/msie/.test(n)) && (!/opera/.test(n)),
      edge: /edge/.test(n),
      ie11: /mozilla/.test(n) && /trident/.test(n) && /rv:11/.test(n),
      firefox: /firefox/.test(n),
      safari: (/safari/.test(n) && !((/chrome/.test(n)) || (/crios/.test(n)))),
      opera: /opera/.test(n),
      opr: /opr/.test(n),
      ya: /yabrowser/.test(n),
      fb: /fbav/.test(n),
      ucbrowser: /ubrowser/.test(n) || /ucbrowser/.test(n),
      android: /android/i.test(n),
      puf: /puffin/i.test(n),
      ios: /iphone|ipad|ipod/i.test(n),
      ios9: (/os 9/.test(n) || /os 10/.test(n)) && /like mac os x/.test(n),
      blackberry: /blackberry|bb/i.test(n),
      winphone: /windows\sphone/i.test(n),
      new_webview: /Mobile/i.test(n),
      isMobile: /Android|BlackBerry|iPhone|iPad|iPod|Opera\sMini|IEMobile/i.test(n)
    };
    b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [
    ]) [1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [
    ]) [1];
    b.ucversion = parseInt((n.match(/.+(?:ubrowser|ucbrowser)[\/: ]([\d.]+)/) || [
    ]) [1]);
    b.wversion = parseInt((n.match(/.+(?:windows nt)[\/: ]([\d.]+)/) || [
    ]) [1]);
    b.mac = /mac os/.test(n) && !b.ios && parseInt(b.version) >= 48;
    b.screen = {
      GetWindowHeight: function () {
        var a = 0;
        if (typeof (_parent.window.innerHeight) == 'number') {
          a = _parent.window.innerHeight
        } else {
          if (_parent.document.documentElement && _parent.document.documentElement.clientHeight) {
            a = _parent.document.documentElement.clientHeight
          } else {
            if (_parent.document.body && _parent.document.body.clientHeight) {
              a = _parent.document.body.clientHeight
            }
          }
        }
        return a
      },
      GetWindowWidth: function () {
        var a = 0;
        if (typeof (_parent.window.innerWidth) == 'number') {
          a = _parent.window.innerWidth
        } else {
          if (_parent.document.documentElement && _parent.document.documentElement.clientWidth) {
            a = _parent.document.documentElement.clientWidth
          } else {
            if (_parent.document.body && _parent.document.body.clientWidth) {
              a = _parent.document.body.clientWidth
            }
          }
        }
        return a
      },
      GetWindowTop: function () {
        return (_parent.window.screenTop !== undefined) ? _parent.window.screenTop : _parent.window.screenY
      },
      GetWindowLeft: function () {
        return (_parent.window.screenLeft !== undefined) ? _parent.window.screenLeft : _parent.window.screenX
      }
    };
    return b;
  }();
  var ver = '16.9.117.6';
  var ppu_main = 'ppu_main_' + options.key,
  ppu_sub = 'ppu_sub_' + options.key,
  ppu_delay = 'ppu_delay_' + options.key,
  ppu_idelay = 'ppu_idelay_' + options.key;
  var swipeEvent = 0;
  var cName = 'pt' + Math.random().toString(36).substr(10);
  var pvarr = [
  ],
  pearr = [
  ];
  var interval,
  f;
  var postWindowPopCalled = false;
  if (!Array.isArray) Array.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (find, i) {
      if (i === undefined) i = 0;
      if (i < 0) i += this.length;
      if (i < 0) i = 0;
      for (var n = this.length; i < n; i++) if (i in this && this[i] === find) return i;
      return - 1;
    };
  }
  if (!options.timing.period) {
    pSC(ppu_sub, 0, - 1);
  }
  var opn = isNative(window.open);
  function isNative(fn) {
    return (/\{\s*\[native code\]\s*\}/).test('' + fn);
  }
  function getPv() {
    pvarr = getArr(system.include);
    pearr = getArr(system.exclude);
  }
  function findUpTag(element, tag) {
    while (element.parentNode) {
      element = element.parentNode;
      if (element.tagName === tag) return element;
    }
    return null;
  }
  function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  function getQ(query) {
    return Array.prototype.slice.call(document.querySelectorAll(query));
  }
  function getArr(arr) {
    var res = [
    ];
    if (!!arr.length) {
      for (var i = 0; i < arr.length; i++) {
        var h = getQ(arr[i]);
        res = !!h.length ? res.concat(h)  : res;
      }
    }
    return res;
  }
  function inXP(trg) {
    getPv();
    var desci = 0,
    desce = 0;
    if (!!pvarr.length) {
      for (var i = 0; i < pvarr.length; i++) {
        if (isDescendant(pvarr[i], trg)) desci++;
      }
    }
    if (!!pearr.length) {
      for (var i = 0; i < pearr.length; i++) {
        if (isDescendant(pearr[i], trg)) desce++;
      }
    }
    if (trg.className.indexOf('dtnoppu') == - 1 && (system.include.length == 0 || !!pvarr.length && (pvarr.indexOf(trg) >= 0 || desci > 0)) && (pearr.length == 0 || !!pearr.length && pearr.indexOf(trg) < 0 && desce == 0)) {
      return true;
    }
    return false;
  }
  function pSC(name, value, interval) {
    if (window != window.top) {
      sS(name, value + (interval ? '; expires=' + (new Date((new Date()).getTime() + interval)).toUTCString()  : ''));
    } else {
      document.cookie = name + '=' + value + ';' + (interval ? ' expires=' + (new Date((new Date()).getTime() + interval)).toUTCString() + ';' : '') + ' path=/';
    }
  }
  function pSLC(name, value, interval) {
    if (window != window.top) {
      sS(name, value + (interval ? '; expires=' + (new Date((new Date()).getTime() + interval)).toUTCString()  : ''));
    } else {
      document.cookie = name + '=' + value + ';' + (interval ? ' expires=' + (new Date((new Date()).getTime() + interval)).toUTCString() + ';' : '') + ' path=' + ((brs.msie || brs.ie) ? '/' : location.pathname);
    }
  }
  function pGC(name) {
    if (window != window.top) {
      var cookies = lS(name).toString().split('; ');
      for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].split('=') [0] == 'expires') {
          if (Date.parse(cookies[i].split('=') [1]) < Date.now()) {
            sD(name);
            return false;
          } else {
            return cookies[0];
          }
        }
      }
    } else {
      var cookies = document.cookie.toString().split('; ');
      for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].split('=') [0] == name) {
          return cookies[i].split('=') [1];
        }
      }
    }
    return false;
  }
  function sS(itemName, itemValue) {
    if (sLS()) {
      if (window.localStorage) {
        window.localStorage.setItem(itemName, itemValue);
        return true;
      } else {
        try {
          var storage = document.body;
          storage.addBehavior('#default#userData');
          storage.setAttribute(itemName, itemValue);
          storage.save('auth');
          return true;
        } catch (e) {
          return false;
        }
      }
    }
  }
  function lS(itemName) {
    if (window.localStorage) {
      var itemValue = window.localStorage.getItem(itemName);
      if (itemValue) {
        return itemValue;
      } else {
        return false;
      }
    } else {
      var storage = document.body;
      try {
        storage.addBehavior('#default#userData');
        storage.load('auth');
        var itemValue = storage.getAttribute(itemName);
        if (itemValue) {
          return itemValue;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  }
  function sD(itemName) {
    if (window.localStorage) {
      if (window.localStorage.removeItem(itemName)) {
        return true;
      }
    }
    var storage = document.body;
    try {
      storage.addBehavior('#default#userData');
      storage.load('auth');
      storage.removeAttribute(itemName);
      return true;
    } catch (e) {
      return false;
    }
  }
  function sLS() {
    try {
      localStorage.setItem('storageSupport', 1);
      localStorage.removeItem('storageSupport');
      return 'localStorage' in window && window.localStorage !== null
    } catch (a) {
      if (a.code === DOMException.QUOTA_EXCEEDED_ERR && localStorage.length === 0) {
      }
      return false;
    }
  }
  function focusEL(f) {
    if (!brs.mac) {
      clearInterval(interval);
    }
    focusAchieved(f);
  }
  function focusAchieved(a) {
    if (!postWindowPopCalled) {
      postWindowPopCalled = true;
      postWindowPop(a);
      _parent.window.removeEventListener('focus', focusEL);
    }
  }
  function postWindowPop(d) {
    system._handle.setAttribute('data', 'data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=');
    setTimeout(function () {
      system._handle.parentNode.parentNode.removeChild(system._handle.parentNode);
    }, 20);
    system._handle.focus();
    var g = (brs.screen.GetWindowLeft() + (brs.screen.GetWindowWidth() / 2) - (1024 / 2));
    var p = (brs.screen.GetWindowTop() + (brs.screen.GetWindowHeight() / 2) - (768 / 2));
    try {
      system.window.moveTo(g, p);
      system.window.resizeTo((!system.fs ? options.dimensions.width : screen.width), (!system.fs ? options.dimensions.height : screen.height));
      system.window.location = options.url;
    } catch (b) {
    };
    las();
    system.clicked_url = null;
  }
  function pI(evt) {
    if (!pGC(ppu_main)) {
      pSC(ppu_main, 1, options.timing.period * 1000);
      pSC(ppu_idelay, 1, options.timing.init_delay * 1000);
      pSC(ppu_sub, 0, - 1);
      pSC(ppu_delay, 0, - 1);
      system.shown = 0;
    }
    if (!options.timing.period && system.shown < options.timing.max) {
      pSC(ppu_sub, 0, - 1);
      pSC(ppu_delay, 0, - 1);
    }
    if (!options.timing.init_delay) {
      pSC(ppu_idelay, 0, - 1);
    }
    var sub = (pGC(ppu_sub) - 0) + 1;
    if (((sub <= options.timing.max && system.shown < options.timing.max) || !options.timing.max) && !(pGC(ppu_delay) - 0) && !(pGC(ppu_idelay) - 0)) {
      if (system.clicked_url) evt.preventDefault ? evt.preventDefault()  : (evt.returnValue = false);
      system.shown++;
      pSC(ppu_sub, sub, options.timing.period * 1000);
      pSC(ppu_delay, 1, (!options.timing.delay ? - 1 : options.timing.delay * 1000));
      if ((brs.chrome && !(brs.ios || brs.android || brs.blackberry || brs.winphone || brs.ucbrowser)) || (options.mobiletab && (brs.android || brs.blackberry || brs.winphone))) {
        function mp() {
          return !system.self && !system.wp && brs.chrome && !brs.ya && !brs.edge && brs.version && brs.version.split('.') [0] && parseInt(brs.version.split('.') [0]) >= 41 && !!navigator.mimeTypes['application/pdf']
        }
        if (mp()) {
          postWindowPopCalled = false;
          executePop(evt);
          var w = '';
          function d(g) {
            var p = document.createElement('div');
            p.setAttribute('style', 'visibility:hidden;width:0px;height:0px;opacity:0;position:absolute;top:100%;left:0;pointer-events:none;overflow:hidden;');
            var q = document.createElement('object');
            q.setAttribute('data', system.pdf);
            p.appendChild(q);
            window.document.body && window.document.body.appendChild(p);
            return q;
          };
          function executePop(evt) {
            f = evt.target || evt.srcElement;
            var o = Math.floor((Math.random() * 1000) + 1).toString();
            try {
              system.window = _parent.window.open('about:blank', o, 'directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999');
              system.window.document.write('<html><head><script>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open(\'\', \'_self\');</script></head><body></body></html>');
              !brs.mac && won();
            } catch (c) {
            };
            interval = null;
            system._handle = d(w);
            if (!brs.mac) {
              interval = setInterval(function () {
                if (_parent.window.document.hasFocus()) {
                  clearInterval(interval);
                  focusAchieved(f);
                  return
                }
              }, 20)
            };
            _parent.window.addEventListener('focus', focusEL);
            setTimeout(function () {
              if (!brs.mac) {
                clearInterval(interval);
              }
              focusAchieved(f);
            }, 3000);
          }
        } else {
          opn ? opz(evt)  : opa(evt);
          won();
          las();
          system.clicked_url = null;
        }
        return true;
      } else if (brs.android || brs.blackberry || brs.winphone) {
        if (system.mself || !system.ftg) evt.preventDefault ? evt.preventDefault()  : (evt.returnValue = false);
        stpp(evt);
        if (brs.fb) {
          system.window = window.open(options.url);
          won();
        } else if (brs.winphone) {
          location.assign(options['url']);
        } else {
          try {
            opn ? opzm(evt)  : opa(evt);
          } catch (err) {
          }
          gcklck(evt);
          won();
          lams();
        }
      } else if (brs.ios) {
        if (system.mself || !system.ftg) evt.preventDefault ? evt.preventDefault()  : (evt.returnValue = false);
        stpp(evt);
        if (brs.ucbrowser) {
          if (typeof evt !== 'undefined') evt.preventDefault ? evt.preventDefault()  : (evt.returnValue = false);
          safeopn((brs.ucversion >= 10 ? (system.mself ? _parent.window.location['href'] : options.url)  : options.url), '', '', window.document);
        } else {
          if (brs.fb) {
            system.window = window.open(options.url);
            won();
          } else {
            safeopn(system.mself ? _parent.window.location['href'] : options.url, '', '', window.document);
            system.window = false;
            lams();
          }
          gcklck(evt);
        }
      } else {
        if (system.self || !system.ftg) evt.preventDefault ? evt.preventDefault()  : (evt.returnValue = false);
        if (!system.ftg) evt.stopPropagation ? evt.stopPropagation()  : (evt.cancelBubble = true);
        opn ? (brs.opr || brs.ucbrowser) ? opz(evt)  : opo(evt)  : opa(evt);
        las();
        if (system.window) {
          if (!system.self) pB();
          won();
        }
        system.window = false;
      }
      system.clicked_url = null;
    } else return true;
  }
  function pB() {
    try {
      system.window.blur();
      if (window != window.top) {
        window.top.focus()
      } else {
        system.window.opener.window.focus()
      }
      if (!brs.msie) {
        window.self.window.blur();
      }
      window.focus();
      if (brs.safari) {
        if (brs.mac) {
          var J = window.open('about:blank');
          J.focus();
          J.close();
        } else setTimeout('window.focus();', 500);
      }
      if (brs.firefox) {
        pOCW();
      }
    } catch (e) {
    }
  }
  function pOCW() {
    system.window.open('about:blank').close();
  }
  function opa(e, u) {
    var clickEvent = document.createEvent('MouseEvents');
    var j = document.createElement('a');
    j.href = u ? u : (system.self ? _parent.window.location['href'] : options.url);
    j.target = '_blank';
    clickEvent.initMouseEvent('click', true, true, window, brs.firefox ? 0 : !0, 0, 0, 0, 0, false, false, false, false, 0, null);
    j.dispatchEvent(clickEvent);
    if (system.ftg && !brs.chrome) e && e.target && e.target.click ? e.target.click()  : clkfg(e);
  }
  function safeopn(a, b, c, d) {
    if ('' === b || null == b) b = 'new_popup_window_' + (new Date).getTime();
    e = window.document.createElement('iframe');
    e.style.display = 'none';
    d.body.appendChild(e);
    var k = e.contentWindow.document,
    n = 'newWin_' + (new Date).getTime(),
    m = k.createElement('script');
    m.type = 'text/javascript';
    m.text = [
      'window.top = null; window.frameElement = null;',
      'var newWin = window.open(\'' + a.replace(/\'/g, '\\\'') + '\', \'' + b + '\', \'' + c + '\');',
      'window.parent.' + n + ' = newWin;',
      'window.parent = null;newWin.opener = null;'
    ].join('');
    k.body.appendChild(m);
    d.body.removeChild(e);
  }
  function opc(o) {
    system.window = window.window.open(system.self ? _parent.window.location['href'] : options.url, 'window_' + Math.ceil(Math.random() * 100000), system.self || o ? '' : system.fs ? newOpts : system.options);
    won();
  }
  function opz(evt) {
    system.window = window.open(system.self ? _parent.window.location['href'] : options.url, (brs.opr && brs.wversion >= 10 ? '' : 'window_' + Math.ceil(Math.random() * 100000)));
    if (evt && system.ftg && !brs.chrome) evt.target.click();
  }
  function opzm(evt) {
    system.window = window.open(system.mself ? _parent.window.location['href'] : options.url, 'window_' + Math.ceil(Math.random() * 100000));
  }
  function opo(evt) {
    system.window = _parent.window.open(system.self ? _parent.window.location['href'] : options.url, 'window_' + Math.ceil(Math.random() * 100000), (brs.chrome && system.wp || system.self ? '' : system.fs ? newOpts : system.options));
    if (!brs.firefox && !brs.safari) gcklck(evt);
  }
  function won() {
    if (system.window) {
      try {
        system.window.opener = null;
      } catch (e) {
      }
    }
  }
  function lams() {
    if (system.mself) _parent.window.location.assign(options['url']);
     else if (system.clicked_url) _parent.window.location.assign(system.clicked_url);
  }
  function las() {
    if (system.self) _parent.window.location.assign(options.url);
     else if (system.clicked_url) _parent.window.location.assign(system.clicked_url);
  }
  function gcklck(e) {
    if (system.ftg && !brs.chrome && !(brs.android && brs.safari && !brs.chrome && !brs.new_webview) && !il(e.target)) {
      e.target.click && !brs.isMobile ? e.target.click()  : clkfg(e);
    }
  }
  function clkfg(e) {
    var cl;
    if (e.touches && !(brs.ios && brs.safari)) {
      cl = brs.android && brs.firefox ? 'touchend' : brs.android && brs.safari ? 'touchstart' : brs.android && brs.chrome ? 'click' : 'touchend';
    } else {
      cl = 'click';
    }
    var z = e.target;
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(cl, !0, !0);
    z.dispatchEvent(clickEvent);
  }
  function stpp(evt) {
    if (!system.ftg) {
      evt.stopPropagation ? evt.stopPropagation()  : (evt.cancelBubble = true);
      evt.stopImmediatePropagation();
    }
  }
  function il(trg) {
    var parentA = findUpTag(trg, 'A');
    return ((trg.tagName.toLowerCase() === 'a' && trg.href.toString().indexOf('#') == - 1 && trg.href.indexOf('javascript:') == - 1) || (parentA && parentA.href.toString().indexOf('#') == - 1 && parentA.href.indexOf('javascript:') == - 1)) ? (trg.href ? trg.href : parentA.href)  : null;
  }
  var fun1 = function (e) {
    if (inXP(e.target) && !swipeEvent) {
      var sub = (pGC(ppu_sub) - 0) + 1;
      if (e.target.tagName.toLowerCase() === 'a' && !system.ftg && ((sub <= options.timing.max && system.shown < options.timing.max) || !options.timing.max) && !(pGC(ppu_delay) - 0) && !(pGC(ppu_idelay) - 0)) {
        system.clicked_url = null;
        if (brs.android && !system.ftg) {
          stpp(e);
        }
      } else {
        system.clicked_url = il(e.target);
      }
      pI(e);
    }
  };
  var fun2 = function (e) {
    if (inXP(e.target) && e.target.tagName.toLowerCase() === 'a' && !swipeEvent) {
      var sub = (pGC(ppu_sub) - 0) + 1;
      if (((sub <= options.timing.max && system.shown < options.timing.max) || !options.timing.max) && !(pGC(ppu_delay) - 0) && !(pGC(ppu_idelay) - 0)) {
        e.preventDefault ? e.preventDefault()  : (e.returnValue = false);
        stpp(e);
      }
    }
  };
  var fun3 = function (e) {
    if (inXP(e.target) && !swipeEvent) {
      pI(e);
    }
  };
  var funSwipe = function (eventHandler, event1, event2, useCapt) {
    if (system.swipe === true) {
      document.addEventListener(event1, eventHandler, useCapt);
    } else {
      document.addEventListener('touchstart', function (e) {
        swipeEvent = 0;
      });
      document.addEventListener('touchmove', function (e) {
        swipeEvent = 1;
      });
      document.addEventListener(event2, eventHandler, useCapt);
    }
  };
  if (document.addEventListener) {
    if (brs.ios || brs.android || brs.blackberry || brs.winphone) {
      if ((brs.android && brs.firefox || brs.ios9) || (brs.android && brs.safari && !brs.chrome)) {
        funSwipe(fun1, 'touchend', 'touchend');
      } else if (brs.android && brs.chrome) {
        funSwipe(fun1, 'touchstart', 'touchend');
      } else {
        if ('ontouchstart' in document.documentElement) {
          funSwipe(fun1, 'touchstart', 'touchend');
        } else {
          document.addEventListener('click', fun1);
        }
      }
      if (brs.ios) {
        funSwipe(fun2, 'touchstart', 'touchend');
      }
      if (!brs.chrome && !brs.ios9) {
        if (brs.ios || brs.android && brs.firefox) {
          funSwipe(fun3, 'mousemove', 'mousemove', !1);
        } else {
          funSwipe(fun3, 'touchmove', 'touchmove', !1);
        }
      }
    } else {
      document.addEventListener('click', function (e) {
        system.clicked_url = null;
        if (inXP(e.target)) {
          system.clicked_url = il(e.target);
          pI(e);
        }
      }, !0);
    }
  } else if (document.attachEvent) {
    document.attachEvent('onclick', function (e) {
      system.clicked_url = null;
      var trg = brs.msie ? e.srcElement : e.target ? e.target : '';
      if (inXP(trg)) {
        system.clicked_url = il(e.target);
        pI(e);
      }
    });
  } else {
    var bodyReady = setInterval(function () {
      if (typeof (document.body) != 'undefined' && document.body) {
        document.body.onclick = function (e) {
          system.clicked_url = null;
          var trg = brs.msie ? e.srcElement : e.target ? e.target : '';
          if (inXP(trg)) {
            system.clicked_url = il(e.target);
            pI(e);
          }
        };
        clearInterval(bodyReady);
      }
    }, 10);
  };
  setInterval(function () {
    if (!pGC(ppu_main)) {
      pSC(ppu_main, 1, options.timing.period * 1000);
      pSC(ppu_idelay, 1, options.timing.init_delay * 1000);
      pSC(ppu_sub, 0, - 1);
      pSC(ppu_delay, 0, - 1);
      system.shown = 0;
    }
    if (!options.timing.period && system.shown < options.timing.max) {
      pSC(ppu_sub, 0, - 1);
      pSC(ppu_delay, 0, - 1);
    }
    if (!options.timing.init_delay) {
      pSC(ppu_idelay, 0, - 1);
    }
    if (system.ovl) {
      var sub = (pGC(ppu_sub) - 0) + 1;
      var b = (!document.getElementsByClassName(cName).length) ? document.createElement('div')  : document.getElementsByClassName(cName) [0];
      if (((sub <= options.timing.max && system.shown < options.timing.max) || !options.timing.max) && !(pGC(ppu_delay) - 0) && !(pGC(ppu_idelay) - 0)) {
        b.className = cName;
        b.style.height = '100%';
        b.style.width = '100%';
        b.style.position = 'fixed';
        b.style.top = '0';
        b.style.left = '0';
        b.style.zIndex = '3000';
        b.style.backgroundImage = 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)';
        if (!document.getElementsByClassName(cName).length) document.body.appendChild(b);
      } else {
        if (document.getElementsByClassName(cName).length > 0) {
          b.parentNode.removeChild(b);
        }
      }
    }
  }, 500);
  if (options.hardcore) {
    window.onbeforeunload = function () {
      if (!system.shown) {
        system.shown++;
        setTimeout(function () {
          window.location.href = options.url;
        }, 10);
        return '';
      }
    };
  }
});