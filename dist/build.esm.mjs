/** 
 * girrback assignment
 * Copyright 2021 - 2022 | Author: Ahmed Elghandour
 * Licensed under MIT
 */

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/validator/lib/util/assertString.js
var require_assertString = __commonJS({
  "node_modules/validator/lib/util/assertString.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = assertString;
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function assertString(input) {
      var isString = typeof input === "string" || input instanceof String;
      if (!isString) {
        var invalidType = _typeof(input);
        if (input === null)
          invalidType = "null";
        else if (invalidType === "object")
          invalidType = input.constructor.name;
        throw new TypeError("Expected a string but received a ".concat(invalidType));
      }
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/toDate.js
var require_toDate = __commonJS({
  "node_modules/validator/lib/toDate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toDate;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toDate(date) {
      (0, _assertString.default)(date);
      date = Date.parse(date);
      return !isNaN(date) ? new Date(date) : null;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/alpha.js
var require_alpha = __commonJS({
  "node_modules/validator/lib/alpha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.commaDecimal = exports.dotDecimal = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
    var alpha = {
      "en-US": /^[A-Z]+$/i,
      "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[А-Я]+$/i,
      "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[A-ZÆØÅ]+$/i,
      "de-DE": /^[A-ZÄÖÜß]+$/i,
      "el-GR": /^[Α-ώ]+$/i,
      "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
      "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
      "fi-FI": /^[A-ZÅÄÖ]+$/i,
      "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "nb-NO": /^[A-ZÆØÅ]+$/i,
      "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[A-ZÆØÅ]+$/i,
      "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[А-ЯЁ]+$/i,
      "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๐\s]+$/i,
      "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
      "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[א-ת]+$/,
      fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
      "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i
    };
    exports.alpha = alpha;
    var alphanumeric = {
      "en-US": /^[0-9A-Z]+$/i,
      "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
      "bg-BG": /^[0-9А-Я]+$/i,
      "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
      "da-DK": /^[0-9A-ZÆØÅ]+$/i,
      "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
      "el-GR": /^[0-9Α-ω]+$/i,
      "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
      "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
      "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
      "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
      "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
      "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
      "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
      "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
      "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
      "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
      "ru-RU": /^[0-9А-ЯЁ]+$/i,
      "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
      "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
      "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
      "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
      "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
      "th-TH": /^[ก-๙\s]+$/i,
      "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
      "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
      "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
      "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
      ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
      he: /^[0-9א-ת]+$/,
      fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
      "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i
    };
    exports.alphanumeric = alphanumeric;
    var decimal = {
      "en-US": ".",
      ar: "\u066B"
    };
    exports.decimal = decimal;
    var englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
    exports.englishLocales = englishLocales;
    for (i = 0; i < englishLocales.length; i++) {
      locale = "en-".concat(englishLocales[i]);
      alpha[locale] = alpha["en-US"];
      alphanumeric[locale] = alphanumeric["en-US"];
      decimal[locale] = decimal["en-US"];
    }
    var locale;
    var i;
    var arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
    exports.arabicLocales = arabicLocales;
    for (_i = 0; _i < arabicLocales.length; _i++) {
      _locale = "ar-".concat(arabicLocales[_i]);
      alpha[_locale] = alpha.ar;
      alphanumeric[_locale] = alphanumeric.ar;
      decimal[_locale] = decimal.ar;
    }
    var _locale;
    var _i;
    var farsiLocales = ["IR", "AF"];
    exports.farsiLocales = farsiLocales;
    for (_i2 = 0; _i2 < farsiLocales.length; _i2++) {
      _locale2 = "fa-".concat(farsiLocales[_i2]);
      alphanumeric[_locale2] = alphanumeric.fa;
      decimal[_locale2] = decimal.ar;
    }
    var _locale2;
    var _i2;
    var dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
    exports.dotDecimal = dotDecimal;
    var commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
    exports.commaDecimal = commaDecimal;
    for (_i3 = 0; _i3 < dotDecimal.length; _i3++) {
      decimal[dotDecimal[_i3]] = decimal["en-US"];
    }
    var _i3;
    for (_i4 = 0; _i4 < commaDecimal.length; _i4++) {
      decimal[commaDecimal[_i4]] = ",";
    }
    var _i4;
    alpha["fr-CA"] = alpha["fr-FR"];
    alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
    alpha["pt-BR"] = alpha["pt-PT"];
    alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
    decimal["pt-BR"] = decimal["pt-PT"];
    alpha["pl-Pl"] = alpha["pl-PL"];
    alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
    decimal["pl-Pl"] = decimal["pl-PL"];
    alpha["fa-AF"] = alpha.fa;
  }
});

// node_modules/validator/lib/isFloat.js
var require_isFloat = __commonJS({
  "node_modules/validator/lib/isFloat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFloat;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isFloat(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
      if (str === "" || str === "." || str === "-" || str === "+") {
        return false;
      }
      var value = parseFloat(str.replace(",", "."));
      return float.test(str) && (!options.hasOwnProperty("min") || value >= options.min) && (!options.hasOwnProperty("max") || value <= options.max) && (!options.hasOwnProperty("lt") || value < options.lt) && (!options.hasOwnProperty("gt") || value > options.gt);
    }
    var locales = Object.keys(_alpha.decimal);
    exports.locales = locales;
  }
});

// node_modules/validator/lib/toFloat.js
var require_toFloat = __commonJS({
  "node_modules/validator/lib/toFloat.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toFloat;
    var _isFloat = _interopRequireDefault(require_isFloat());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toFloat(str) {
      if (!(0, _isFloat.default)(str))
        return NaN;
      return parseFloat(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/toInt.js
var require_toInt = __commonJS({
  "node_modules/validator/lib/toInt.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toInt;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toInt(str, radix) {
      (0, _assertString.default)(str);
      return parseInt(str, radix || 10);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/toBoolean.js
var require_toBoolean = __commonJS({
  "node_modules/validator/lib/toBoolean.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toBoolean;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toBoolean(str, strict) {
      (0, _assertString.default)(str);
      if (strict) {
        return str === "1" || /^true$/i.test(str);
      }
      return str !== "0" && !/^false$/i.test(str) && str !== "";
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/equals.js
var require_equals = __commonJS({
  "node_modules/validator/lib/equals.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = equals;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function equals(str, comparison) {
      (0, _assertString.default)(str);
      return str === comparison;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/toString.js
var require_toString = __commonJS({
  "node_modules/validator/lib/util/toString.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toString2;
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function toString2(input) {
      if (_typeof(input) === "object" && input !== null) {
        if (typeof input.toString === "function") {
          input = input.toString();
        } else {
          input = "[object Object]";
        }
      } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) {
        input = "";
      }
      return String(input);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/merge.js
var require_merge = __commonJS({
  "node_modules/validator/lib/util/merge.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = merge;
    function merge() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var defaults = arguments.length > 1 ? arguments[1] : void 0;
      for (var key in defaults) {
        if (typeof obj[key] === "undefined") {
          obj[key] = defaults[key];
        }
      }
      return obj;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/contains.js
var require_contains = __commonJS({
  "node_modules/validator/lib/contains.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = contains;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toString = _interopRequireDefault(require_toString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var defaulContainsOptions = {
      ignoreCase: false,
      minOccurrences: 1
    };
    function contains(str, elem, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaulContainsOptions);
      if (options.ignoreCase) {
        return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
      }
      return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/matches.js
var require_matches = __commonJS({
  "node_modules/validator/lib/matches.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = matches;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function matches(str, pattern, modifiers) {
      (0, _assertString.default)(str);
      if (Object.prototype.toString.call(pattern) !== "[object RegExp]") {
        pattern = new RegExp(pattern, modifiers);
      }
      return pattern.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isByteLength.js
var require_isByteLength = __commonJS({
  "node_modules/validator/lib/isByteLength.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isByteLength;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function isByteLength(str, options) {
      (0, _assertString.default)(str);
      var min;
      var max;
      if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
      } else {
        min = arguments[1];
        max = arguments[2];
      }
      var len = encodeURI(str).split(/%..|./).length - 1;
      return len >= min && (typeof max === "undefined" || len <= max);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isFQDN.js
var require_isFQDN = __commonJS({
  "node_modules/validator/lib/isFQDN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFQDN;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var default_fqdn_options = {
      require_tld: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_numeric_tld: false,
      allow_wildcard: false
    };
    function isFQDN(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_fqdn_options);
      if (options.allow_trailing_dot && str[str.length - 1] === ".") {
        str = str.substring(0, str.length - 1);
      }
      if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
        str = str.substring(2);
      }
      var parts = str.split(".");
      var tld = parts[parts.length - 1];
      if (options.require_tld) {
        if (parts.length < 2) {
          return false;
        }
        if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
          return false;
        }
        if (/\s/.test(tld)) {
          return false;
        }
      }
      if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
        return false;
      }
      return parts.every(function(part) {
        if (part.length > 63) {
          return false;
        }
        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (/[\uff01-\uff5e]/.test(part)) {
          return false;
        }
        if (/^-|-$/.test(part)) {
          return false;
        }
        if (!options.allow_underscores && /_/.test(part)) {
          return false;
        }
        return true;
      });
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIP.js
var require_isIP = __commonJS({
  "node_modules/validator/lib/isIP.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIP;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
    var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
    var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
    var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
    var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
    function isIP(str) {
      var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, _assertString.default)(str);
      version = String(version);
      if (!version) {
        return isIP(str, 4) || isIP(str, 6);
      }
      if (version === "4") {
        if (!IPv4AddressRegExp.test(str)) {
          return false;
        }
        var parts = str.split(".").sort(function(a, b) {
          return a - b;
        });
        return parts[3] <= 255;
      }
      if (version === "6") {
        return !!IPv6AddressRegExp.test(str);
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isEmail.js
var require_isEmail = __commonJS({
  "node_modules/validator/lib/isEmail.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmail;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    var _isByteLength = _interopRequireDefault(require_isByteLength());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isIP = _interopRequireDefault(require_isIP());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var default_email_options = {
      allow_display_name: false,
      require_display_name: false,
      allow_utf8_local_part: true,
      require_tld: true,
      blacklisted_chars: "",
      ignore_max_length: false,
      host_blacklist: []
    };
    var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var gmailUserPart = /^[a-z\d]+$/;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    var defaultMaxEmailLength = 254;
    function validateDisplayName(display_name) {
      var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
      if (!display_name_without_quotes.trim()) {
        return false;
      }
      var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
      if (contains_illegal) {
        if (display_name_without_quotes === display_name) {
          return false;
        }
        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) {
          return false;
        }
      }
      return true;
    }
    function isEmail(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_email_options);
      if (options.require_display_name || options.allow_display_name) {
        var display_email = str.match(splitNameAddress);
        if (display_email) {
          var display_name = display_email[1];
          str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
          if (display_name.endsWith(" ")) {
            display_name = display_name.substr(0, display_name.length - 1);
          }
          if (!validateDisplayName(display_name)) {
            return false;
          }
        } else if (options.require_display_name) {
          return false;
        }
      }
      if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
        return false;
      }
      var parts = str.split("@");
      var domain = parts.pop();
      var lower_domain = domain.toLowerCase();
      if (options.host_blacklist.includes(lower_domain)) {
        return false;
      }
      var user = parts.join("@");
      if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
        user = user.toLowerCase();
        var username = user.split("+")[0];
        if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
          min: 6,
          max: 30
        })) {
          return false;
        }
        var _user_parts = username.split(".");
        for (var i = 0; i < _user_parts.length; i++) {
          if (!gmailUserPart.test(_user_parts[i])) {
            return false;
          }
        }
      }
      if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
      }) || !(0, _isByteLength.default)(domain, {
        max: 254
      }))) {
        return false;
      }
      if (!(0, _isFQDN.default)(domain, {
        require_tld: options.require_tld
      })) {
        if (!options.allow_ip_domain) {
          return false;
        }
        if (!(0, _isIP.default)(domain)) {
          if (!domain.startsWith("[") || !domain.endsWith("]")) {
            return false;
          }
          var noBracketdomain = domain.substr(1, domain.length - 2);
          if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
            return false;
          }
        }
      }
      if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
      }
      var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
      var user_parts = user.split(".");
      for (var _i = 0; _i < user_parts.length; _i++) {
        if (!pattern.test(user_parts[_i])) {
          return false;
        }
      }
      if (options.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1)
          return false;
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isURL.js
var require_isURL = __commonJS({
  "node_modules/validator/lib/isURL.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isURL;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isIP = _interopRequireDefault(require_isIP());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var default_url_options = {
      protocols: ["http", "https", "ftp"],
      require_tld: true,
      require_protocol: false,
      require_host: true,
      require_port: false,
      require_valid_protocol: true,
      allow_underscores: false,
      allow_trailing_dot: false,
      allow_protocol_relative_urls: false,
      allow_fragments: true,
      allow_query_components: true,
      validate_length: true
    };
    var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    }
    function checkHost(host, matches) {
      for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        if (host === match || isRegExp(match) && match.test(host)) {
          return true;
        }
      }
      return false;
    }
    function isURL(url, options) {
      (0, _assertString.default)(url);
      if (!url || /[\s<>]/.test(url)) {
        return false;
      }
      if (url.indexOf("mailto:") === 0) {
        return false;
      }
      options = (0, _merge.default)(options, default_url_options);
      if (options.validate_length && url.length >= 2083) {
        return false;
      }
      if (!options.allow_fragments && url.includes("#")) {
        return false;
      }
      if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) {
        return false;
      }
      var protocol, auth, host, hostname, port, port_str, split, ipv6;
      split = url.split("#");
      url = split.shift();
      split = url.split("?");
      url = split.shift();
      split = url.split("://");
      if (split.length > 1) {
        protocol = split.shift().toLowerCase();
        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
          return false;
        }
      } else if (options.require_protocol) {
        return false;
      } else if (url.substr(0, 2) === "//") {
        if (!options.allow_protocol_relative_urls) {
          return false;
        }
        split[0] = url.substr(2);
      }
      url = split.join("://");
      if (url === "") {
        return false;
      }
      split = url.split("/");
      url = split.shift();
      if (url === "" && !options.require_host) {
        return true;
      }
      split = url.split("@");
      if (split.length > 1) {
        if (options.disallow_auth) {
          return false;
        }
        if (split[0] === "") {
          return false;
        }
        auth = split.shift();
        if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
          return false;
        }
        var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
        if (user === "" && password === "") {
          return false;
        }
      }
      hostname = split.join("@");
      port_str = null;
      ipv6 = null;
      var ipv6_match = hostname.match(wrapped_ipv6);
      if (ipv6_match) {
        host = "";
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
      } else {
        split = hostname.split(":");
        host = split.shift();
        if (split.length) {
          port_str = split.join(":");
        }
      }
      if (port_str !== null && port_str.length > 0) {
        port = parseInt(port_str, 10);
        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
          return false;
        }
      } else if (options.require_port) {
        return false;
      }
      if (options.host_whitelist) {
        return checkHost(host, options.host_whitelist);
      }
      if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
        return false;
      }
      host = host || ipv6;
      if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
        return false;
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMACAddress.js
var require_isMACAddress = __commonJS({
  "node_modules/validator/lib/isMACAddress.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMACAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var macAddress = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
    var macAddressNoSeparators = /^([0-9a-fA-F]){12}$/;
    var macAddressWithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
    function isMACAddress(str, options) {
      (0, _assertString.default)(str);
      if (options && (options.no_colons || options.no_separators)) {
        return macAddressNoSeparators.test(str);
      }
      return macAddress.test(str) || macAddressWithDots.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIPRange.js
var require_isIPRange = __commonJS({
  "node_modules/validator/lib/isIPRange.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIPRange;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isIP = _interopRequireDefault(require_isIP());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var subnetMaybe = /^\d{1,3}$/;
    var v4Subnet = 32;
    var v6Subnet = 128;
    function isIPRange(str) {
      var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, _assertString.default)(str);
      var parts = str.split("/");
      if (parts.length !== 2) {
        return false;
      }
      if (!subnetMaybe.test(parts[1])) {
        return false;
      }
      if (parts[1].length > 1 && parts[1].startsWith("0")) {
        return false;
      }
      var isValidIP = (0, _isIP.default)(parts[0], version);
      if (!isValidIP) {
        return false;
      }
      var expectedSubnet = null;
      switch (String(version)) {
        case "4":
          expectedSubnet = v4Subnet;
          break;
        case "6":
          expectedSubnet = v6Subnet;
          break;
        default:
          expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
      }
      return parts[1] <= expectedSubnet && parts[1] >= 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDate.js
var require_isDate = __commonJS({
  "node_modules/validator/lib/isDate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDate;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it;
      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = o[Symbol.iterator]();
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var default_date_options = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: false
    };
    function isValidFormat(format) {
      return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
    }
    function zip(date, format) {
      var zippedArr = [], len = Math.min(date.length, format.length);
      for (var i = 0; i < len; i++) {
        zippedArr.push([date[i], format[i]]);
      }
      return zippedArr;
    }
    function isDate(input, options) {
      if (typeof options === "string") {
        options = (0, _merge.default)({
          format: options
        }, default_date_options);
      } else {
        options = (0, _merge.default)(options, default_date_options);
      }
      if (typeof input === "string" && isValidFormat(options.format)) {
        var formatDelimiter = options.delimiters.find(function(delimiter) {
          return options.format.indexOf(delimiter) !== -1;
        });
        var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
          return input.indexOf(delimiter) !== -1;
        });
        var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
        var dateObj = {};
        var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
            if (dateWord.length !== formatWord.length) {
              return false;
            }
            dateObj[formatWord.charAt(0)] = dateWord;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
      }
      if (!options.strictMode) {
        return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBoolean.js
var require_isBoolean = __commonJS({
  "node_modules/validator/lib/isBoolean.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBoolean;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var defaultOptions = {
      loose: false
    };
    var strictBooleans = ["true", "false", "1", "0"];
    var looseBooleans = [].concat(strictBooleans, ["yes", "no"]);
    function isBoolean(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOptions;
      (0, _assertString.default)(str);
      if (options.loose) {
        return looseBooleans.includes(str.toLowerCase());
      }
      return strictBooleans.includes(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLocale.js
var require_isLocale = __commonJS({
  "node_modules/validator/lib/isLocale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLocale;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var localeReg = /^[A-Za-z]{2,4}([_-]([A-Za-z]{4}|[\d]{3}))?([_-]([A-Za-z]{2}|[\d]{3}))?$/;
    function isLocale(str) {
      (0, _assertString.default)(str);
      if (str === "en_US_POSIX" || str === "ca_ES_VALENCIA") {
        return true;
      }
      return localeReg.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAlpha.js
var require_isAlpha = __commonJS({
  "node_modules/validator/lib/isAlpha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlpha;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isAlpha(_str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (0, _assertString.default)(_str);
      var str = _str;
      var ignore = options.ignore;
      if (ignore) {
        if (ignore instanceof RegExp) {
          str = str.replace(ignore, "");
        } else if (typeof ignore === "string") {
          str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
        } else {
          throw new Error("ignore should be instance of a String or RegExp");
        }
      }
      if (locale in _alpha.alpha) {
        return _alpha.alpha[locale].test(str);
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    var locales = Object.keys(_alpha.alpha);
    exports.locales = locales;
  }
});

// node_modules/validator/lib/isAlphanumeric.js
var require_isAlphanumeric = __commonJS({
  "node_modules/validator/lib/isAlphanumeric.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAlphanumeric;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isAlphanumeric(_str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (0, _assertString.default)(_str);
      var str = _str;
      var ignore = options.ignore;
      if (ignore) {
        if (ignore instanceof RegExp) {
          str = str.replace(ignore, "");
        } else if (typeof ignore === "string") {
          str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
        } else {
          throw new Error("ignore should be instance of a String or RegExp");
        }
      }
      if (locale in _alpha.alphanumeric) {
        return _alpha.alphanumeric[locale].test(str);
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    var locales = Object.keys(_alpha.alphanumeric);
    exports.locales = locales;
  }
});

// node_modules/validator/lib/isNumeric.js
var require_isNumeric = __commonJS({
  "node_modules/validator/lib/isNumeric.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isNumeric;
    var _assertString = _interopRequireDefault(require_assertString());
    var _alpha = require_alpha();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var numericNoSymbols = /^[0-9]+$/;
    function isNumeric(str, options) {
      (0, _assertString.default)(str);
      if (options && options.no_symbols) {
        return numericNoSymbols.test(str);
      }
      return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isPassportNumber.js
var require_isPassportNumber = __commonJS({
  "node_modules/validator/lib/isPassportNumber.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPassportNumber;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var passportRegexByCountryCode = {
      AM: /^[A-Z]{2}\d{7}$/,
      AR: /^[A-Z]{3}\d{6}$/,
      AT: /^[A-Z]\d{7}$/,
      AU: /^[A-Z]\d{7}$/,
      BE: /^[A-Z]{2}\d{6}$/,
      BG: /^\d{9}$/,
      BR: /^[A-Z]{2}\d{6}$/,
      BY: /^[A-Z]{2}\d{7}$/,
      CA: /^[A-Z]{2}\d{6}$/,
      CH: /^[A-Z]\d{7}$/,
      CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
      CY: /^[A-Z](\d{6}|\d{8})$/,
      CZ: /^\d{8}$/,
      DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
      DK: /^\d{9}$/,
      DZ: /^\d{9}$/,
      EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
      ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
      FI: /^[A-Z]{2}\d{7}$/,
      FR: /^\d{2}[A-Z]{2}\d{5}$/,
      GB: /^\d{9}$/,
      GR: /^[A-Z]{2}\d{7}$/,
      HR: /^\d{9}$/,
      HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
      IE: /^[A-Z0-9]{2}\d{7}$/,
      IN: /^[A-Z]{1}-?\d{7}$/,
      ID: /^[A-C]\d{7}$/,
      IR: /^[A-Z]\d{8}$/,
      IS: /^(A)\d{7}$/,
      IT: /^[A-Z0-9]{2}\d{7}$/,
      JP: /^[A-Z]{2}\d{7}$/,
      KR: /^[MS]\d{8}$/,
      LT: /^[A-Z0-9]{8}$/,
      LU: /^[A-Z0-9]{8}$/,
      LV: /^[A-Z0-9]{2}\d{7}$/,
      LY: /^[A-Z0-9]{8}$/,
      MT: /^\d{7}$/,
      MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
      MY: /^[AHK]\d{8}$/,
      NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
      PL: /^[A-Z]{2}\d{7}$/,
      PT: /^[A-Z]\d{6}$/,
      RO: /^\d{8,9}$/,
      RU: /^\d{9}$/,
      SE: /^\d{8}$/,
      SL: /^(P)[A-Z]\d{7}$/,
      SK: /^[0-9A-Z]\d{7}$/,
      TR: /^[A-Z]\d{8}$/,
      UA: /^[A-Z]{2}\d{6}$/,
      US: /^\d{9}$/
    };
    function isPassportNumber(str, countryCode) {
      (0, _assertString.default)(str);
      var normalizedStr = str.replace(/\s/g, "").toUpperCase();
      return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isInt.js
var require_isInt = __commonJS({
  "node_modules/validator/lib/isInt.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isInt;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
    var intLeadingZeroes = /^[-+]?[0-9]+$/;
    function isInt(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var regex = options.hasOwnProperty("allow_leading_zeroes") && !options.allow_leading_zeroes ? int : intLeadingZeroes;
      var minCheckPassed = !options.hasOwnProperty("min") || str >= options.min;
      var maxCheckPassed = !options.hasOwnProperty("max") || str <= options.max;
      var ltCheckPassed = !options.hasOwnProperty("lt") || str < options.lt;
      var gtCheckPassed = !options.hasOwnProperty("gt") || str > options.gt;
      return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isPort.js
var require_isPort = __commonJS({
  "node_modules/validator/lib/isPort.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPort;
    var _isInt = _interopRequireDefault(require_isInt());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isPort(str) {
      return (0, _isInt.default)(str, {
        min: 0,
        max: 65535
      });
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLowercase.js
var require_isLowercase = __commonJS({
  "node_modules/validator/lib/isLowercase.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLowercase;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isLowercase(str) {
      (0, _assertString.default)(str);
      return str === str.toLowerCase();
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isUppercase.js
var require_isUppercase = __commonJS({
  "node_modules/validator/lib/isUppercase.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isUppercase;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isUppercase(str) {
      (0, _assertString.default)(str);
      return str === str.toUpperCase();
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIMEI.js
var require_isIMEI = __commonJS({
  "node_modules/validator/lib/isIMEI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIMEI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var imeiRegexWithoutHypens = /^[0-9]{15}$/;
    var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
    function isIMEI(str, options) {
      (0, _assertString.default)(str);
      options = options || {};
      var imeiRegex = imeiRegexWithoutHypens;
      if (options.allow_hyphens) {
        imeiRegex = imeiRegexWithHypens;
      }
      if (!imeiRegex.test(str)) {
        return false;
      }
      str = str.replace(/-/g, "");
      var sum = 0, mul = 2, l = 14;
      for (var i = 0; i < l; i++) {
        var digit = str.substring(l - i - 1, l - i);
        var tp = parseInt(digit, 10) * mul;
        if (tp >= 10) {
          sum += tp % 10 + 1;
        } else {
          sum += tp;
        }
        if (mul === 1) {
          mul += 1;
        } else {
          mul -= 1;
        }
      }
      var chk = (10 - sum % 10) % 10;
      if (chk !== parseInt(str.substring(14, 15), 10)) {
        return false;
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAscii.js
var require_isAscii = __commonJS({
  "node_modules/validator/lib/isAscii.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAscii;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ascii = /^[\x00-\x7F]+$/;
    function isAscii(str) {
      (0, _assertString.default)(str);
      return ascii.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isFullWidth.js
var require_isFullWidth = __commonJS({
  "node_modules/validator/lib/isFullWidth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isFullWidth;
    exports.fullWidth = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    exports.fullWidth = fullWidth;
    function isFullWidth(str) {
      (0, _assertString.default)(str);
      return fullWidth.test(str);
    }
  }
});

// node_modules/validator/lib/isHalfWidth.js
var require_isHalfWidth = __commonJS({
  "node_modules/validator/lib/isHalfWidth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHalfWidth;
    exports.halfWidth = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    exports.halfWidth = halfWidth;
    function isHalfWidth(str) {
      (0, _assertString.default)(str);
      return halfWidth.test(str);
    }
  }
});

// node_modules/validator/lib/isVariableWidth.js
var require_isVariableWidth = __commonJS({
  "node_modules/validator/lib/isVariableWidth.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVariableWidth;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isFullWidth = require_isFullWidth();
    var _isHalfWidth = require_isHalfWidth();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isVariableWidth(str) {
      (0, _assertString.default)(str);
      return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMultibyte.js
var require_isMultibyte = __commonJS({
  "node_modules/validator/lib/isMultibyte.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMultibyte;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var multibyte = /[^\x00-\x7F]/;
    function isMultibyte(str) {
      (0, _assertString.default)(str);
      return multibyte.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/multilineRegex.js
var require_multilineRegex = __commonJS({
  "node_modules/validator/lib/util/multilineRegex.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = multilineRegexp;
    function multilineRegexp(parts, flags) {
      var regexpAsStringLiteral = parts.join("");
      return new RegExp(regexpAsStringLiteral, flags);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isSemVer.js
var require_isSemVer = __commonJS({
  "node_modules/validator/lib/isSemVer.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSemVer;
    var _assertString = _interopRequireDefault(require_assertString());
    var _multilineRegex = _interopRequireDefault(require_multilineRegex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var semanticVersioningRegex = (0, _multilineRegex.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
    function isSemVer(str) {
      (0, _assertString.default)(str);
      return semanticVersioningRegex.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isSurrogatePair.js
var require_isSurrogatePair = __commonJS({
  "node_modules/validator/lib/isSurrogatePair.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSurrogatePair;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    function isSurrogatePair(str) {
      (0, _assertString.default)(str);
      return surrogatePair.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/includes.js
var require_includes = __commonJS({
  "node_modules/validator/lib/util/includes.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var includes = function includes2(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    };
    var _default = includes;
    exports.default = _default;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDecimal.js
var require_isDecimal = __commonJS({
  "node_modules/validator/lib/isDecimal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDecimal;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    var _includes = _interopRequireDefault(require_includes());
    var _alpha = require_alpha();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function decimalRegExp(options) {
      var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
      return regExp;
    }
    var default_decimal_options = {
      force_decimal: false,
      decimal_digits: "1,",
      locale: "en-US"
    };
    var blacklist = ["", "-", "+"];
    function isDecimal(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_decimal_options);
      if (options.locale in _alpha.decimal) {
        return !(0, _includes.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
      }
      throw new Error("Invalid locale '".concat(options.locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHexadecimal.js
var require_isHexadecimal = __commonJS({
  "node_modules/validator/lib/isHexadecimal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHexadecimal;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
    function isHexadecimal(str) {
      (0, _assertString.default)(str);
      return hexadecimal.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isOctal.js
var require_isOctal = __commonJS({
  "node_modules/validator/lib/isOctal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isOctal;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var octal = /^(0o)?[0-7]+$/i;
    function isOctal(str) {
      (0, _assertString.default)(str);
      return octal.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDivisibleBy.js
var require_isDivisibleBy = __commonJS({
  "node_modules/validator/lib/isDivisibleBy.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDivisibleBy;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toFloat = _interopRequireDefault(require_toFloat());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isDivisibleBy(str, num) {
      (0, _assertString.default)(str);
      return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHexColor.js
var require_isHexColor = __commonJS({
  "node_modules/validator/lib/isHexColor.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHexColor;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
    function isHexColor(str) {
      (0, _assertString.default)(str);
      return hexcolor.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isRgbColor.js
var require_isRgbColor = __commonJS({
  "node_modules/validator/lib/isRgbColor.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isRgbColor;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
    var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
    var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
    var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;
    function isRgbColor(str) {
      var includePercentValues = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      (0, _assertString.default)(str);
      if (!includePercentValues) {
        return rgbColor.test(str) || rgbaColor.test(str);
      }
      return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHSL.js
var require_isHSL = __commonJS({
  "node_modules/validator/lib/isHSL.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHSL;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
    var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
    function isHSL(str) {
      (0, _assertString.default)(str);
      var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
      if (strippedStr.indexOf(",") !== -1) {
        return hslComma.test(strippedStr);
      }
      return hslSpace.test(strippedStr);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISRC.js
var require_isISRC = __commonJS({
  "node_modules/validator/lib/isISRC.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISRC;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    function isISRC(str) {
      (0, _assertString.default)(str);
      return isrc.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIBAN.js
var require_isIBAN = __commonJS({
  "node_modules/validator/lib/isIBAN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIBAN;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ibanRegexThroughCountryCode = {
      AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
      AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
      AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
      AT: /^(AT[0-9]{2})\d{16}$/,
      AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      BA: /^(BA[0-9]{2})\d{16}$/,
      BE: /^(BE[0-9]{2})\d{12}$/,
      BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
      BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
      BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
      BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
      CR: /^(CR[0-9]{2})\d{18}$/,
      CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
      CZ: /^(CZ[0-9]{2})\d{20}$/,
      DE: /^(DE[0-9]{2})\d{18}$/,
      DK: /^(DK[0-9]{2})\d{14}$/,
      DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
      EE: /^(EE[0-9]{2})\d{16}$/,
      EG: /^(EG[0-9]{2})\d{25}$/,
      ES: /^(ES[0-9]{2})\d{20}$/,
      FI: /^(FI[0-9]{2})\d{14}$/,
      FO: /^(FO[0-9]{2})\d{14}$/,
      FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
      GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
      GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
      GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
      GL: /^(GL[0-9]{2})\d{14}$/,
      GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
      GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
      HR: /^(HR[0-9]{2})\d{17}$/,
      HU: /^(HU[0-9]{2})\d{24}$/,
      IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
      IL: /^(IL[0-9]{2})\d{19}$/,
      IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
      IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
      IS: /^(IS[0-9]{2})\d{22}$/,
      IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
      JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
      KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
      KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
      LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
      LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
      LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
      LT: /^(LT[0-9]{2})\d{16}$/,
      LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
      LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
      MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
      MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
      ME: /^(ME[0-9]{2})\d{18}$/,
      MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
      MR: /^(MR[0-9]{2})\d{23}$/,
      MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
      MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
      MZ: /^(MZ[0-9]{2})\d{21}$/,
      NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
      NO: /^(NO[0-9]{2})\d{11}$/,
      PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
      PL: /^(PL[0-9]{2})\d{24}$/,
      PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
      PT: /^(PT[0-9]{2})\d{21}$/,
      QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
      RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
      RS: /^(RS[0-9]{2})\d{18}$/,
      SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
      SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
      SE: /^(SE[0-9]{2})\d{20}$/,
      SI: /^(SI[0-9]{2})\d{15}$/,
      SK: /^(SK[0-9]{2})\d{20}$/,
      SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
      SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
      TL: /^(TL[0-9]{2})\d{19}$/,
      TN: /^(TN[0-9]{2})\d{20}$/,
      TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
      UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
      VA: /^(VA[0-9]{2})\d{18}$/,
      VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
      XK: /^(XK[0-9]{2})\d{16}$/
    };
    function hasValidIbanFormat(str) {
      var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
      var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
      return isoCountryCode in ibanRegexThroughCountryCode && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
    }
    function hasValidIbanChecksum(str) {
      var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
      var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
      var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
        return char.charCodeAt(0) - 55;
      });
      var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
        return Number(acc + value) % 97;
      }, "");
      return remainder === 1;
    }
    function isIBAN(str) {
      (0, _assertString.default)(str);
      return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
    }
    var locales = Object.keys(ibanRegexThroughCountryCode);
    exports.locales = locales;
  }
});

// node_modules/validator/lib/isISO31661Alpha2.js
var require_isISO31661Alpha2 = __commonJS({
  "node_modules/validator/lib/isISO31661Alpha2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO31661Alpha2;
    exports.CountryCodes = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var validISO31661Alpha2CountriesCodes = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
    function isISO31661Alpha2(str) {
      (0, _assertString.default)(str);
      return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
    }
    var CountryCodes = validISO31661Alpha2CountriesCodes;
    exports.CountryCodes = CountryCodes;
  }
});

// node_modules/validator/lib/isBIC.js
var require_isBIC = __commonJS({
  "node_modules/validator/lib/isBIC.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBIC;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isISO31661Alpha = require_isISO31661Alpha2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
    function isBIC(str) {
      (0, _assertString.default)(str);
      if (!_isISO31661Alpha.CountryCodes.has(str.slice(4, 6).toUpperCase())) {
        return false;
      }
      return isBICReg.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMD5.js
var require_isMD5 = __commonJS({
  "node_modules/validator/lib/isMD5.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMD5;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var md5 = /^[a-f0-9]{32}$/;
    function isMD5(str) {
      (0, _assertString.default)(str);
      return md5.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isHash.js
var require_isHash = __commonJS({
  "node_modules/validator/lib/isHash.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isHash;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var lengths = {
      md5: 32,
      md4: 32,
      sha1: 40,
      sha256: 64,
      sha384: 96,
      sha512: 128,
      ripemd128: 32,
      ripemd160: 40,
      tiger128: 32,
      tiger160: 40,
      tiger192: 48,
      crc32: 8,
      crc32b: 8
    };
    function isHash(str, algorithm) {
      (0, _assertString.default)(str);
      var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
      return hash.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBase64.js
var require_isBase64 = __commonJS({
  "node_modules/validator/lib/isBase64.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase64;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var notBase64 = /[^A-Z0-9+\/=]/i;
    var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
    var defaultBase64Options = {
      urlSafe: false
    };
    function isBase64(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaultBase64Options);
      var len = str.length;
      if (options.urlSafe) {
        return urlSafeBase64.test(str);
      }
      if (len % 4 !== 0 || notBase64.test(str)) {
        return false;
      }
      var firstPaddingChar = str.indexOf("=");
      return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isJWT.js
var require_isJWT = __commonJS({
  "node_modules/validator/lib/isJWT.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isJWT;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isBase = _interopRequireDefault(require_isBase64());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isJWT(str) {
      (0, _assertString.default)(str);
      var dotSplit = str.split(".");
      var len = dotSplit.length;
      if (len > 3 || len < 2) {
        return false;
      }
      return dotSplit.reduce(function(acc, currElem) {
        return acc && (0, _isBase.default)(currElem, {
          urlSafe: true
        });
      }, true);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isJSON.js
var require_isJSON = __commonJS({
  "node_modules/validator/lib/isJSON.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isJSON;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var default_json_options = {
      allow_primitives: false
    };
    function isJSON(str, options) {
      (0, _assertString.default)(str);
      try {
        options = (0, _merge.default)(options, default_json_options);
        var primitives = [];
        if (options.allow_primitives) {
          primitives = [null, false, true];
        }
        var obj = JSON.parse(str);
        return primitives.includes(obj) || !!obj && _typeof(obj) === "object";
      } catch (e) {
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/validator/lib/isEmpty.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEmpty;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var default_is_empty_options = {
      ignore_whitespace: false
    };
    function isEmpty(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_is_empty_options);
      return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLength.js
var require_isLength = __commonJS({
  "node_modules/validator/lib/isLength.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLength;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function isLength(str, options) {
      (0, _assertString.default)(str);
      var min;
      var max;
      if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
      } else {
        min = arguments[1] || 0;
        max = arguments[2];
      }
      var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
      var len = str.length - surrogatePairs.length;
      return len >= min && (typeof max === "undefined" || len <= max);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isUUID.js
var require_isUUID = __commonJS({
  "node_modules/validator/lib/isUUID.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isUUID;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var uuid = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    function isUUID(str, version) {
      (0, _assertString.default)(str);
      var pattern = uuid[![void 0, null].includes(version) ? version : "all"];
      return !!pattern && pattern.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMongoId.js
var require_isMongoId = __commonJS({
  "node_modules/validator/lib/isMongoId.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMongoId;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isMongoId(str) {
      (0, _assertString.default)(str);
      return (0, _isHexadecimal.default)(str) && str.length === 24;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isAfter.js
var require_isAfter = __commonJS({
  "node_modules/validator/lib/isAfter.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAfter;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toDate = _interopRequireDefault(require_toDate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isAfter(str) {
      var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(new Date());
      (0, _assertString.default)(str);
      var comparison = (0, _toDate.default)(date);
      var original = (0, _toDate.default)(str);
      return !!(original && comparison && original > comparison);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBefore.js
var require_isBefore = __commonJS({
  "node_modules/validator/lib/isBefore.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBefore;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toDate = _interopRequireDefault(require_toDate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isBefore(str) {
      var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(new Date());
      (0, _assertString.default)(str);
      var comparison = (0, _toDate.default)(date);
      var original = (0, _toDate.default)(str);
      return !!(original && comparison && original < comparison);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIn.js
var require_isIn = __commonJS({
  "node_modules/validator/lib/isIn.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIn;
    var _assertString = _interopRequireDefault(require_assertString());
    var _toString = _interopRequireDefault(require_toString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function isIn(str, options) {
      (0, _assertString.default)(str);
      var i;
      if (Object.prototype.toString.call(options) === "[object Array]") {
        var array = [];
        for (i in options) {
          if ({}.hasOwnProperty.call(options, i)) {
            array[i] = (0, _toString.default)(options[i]);
          }
        }
        return array.indexOf(str) >= 0;
      } else if (_typeof(options) === "object") {
        return options.hasOwnProperty(str);
      } else if (options && typeof options.indexOf === "function") {
        return options.indexOf(str) >= 0;
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isCreditCard.js
var require_isCreditCard = __commonJS({
  "node_modules/validator/lib/isCreditCard.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCreditCard;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
    function isCreditCard(str) {
      (0, _assertString.default)(str);
      var sanitized = str.replace(/[- ]+/g, "");
      if (!creditCard.test(sanitized)) {
        return false;
      }
      var sum = 0;
      var digit;
      var tmpNum;
      var shouldDouble;
      for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
          tmpNum *= 2;
          if (tmpNum >= 10) {
            sum += tmpNum % 10 + 1;
          } else {
            sum += tmpNum;
          }
        } else {
          sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
      }
      return !!(sum % 10 === 0 ? sanitized : false);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isIdentityCard.js
var require_isIdentityCard = __commonJS({
  "node_modules/validator/lib/isIdentityCard.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isIdentityCard;
    var _assertString = _interopRequireDefault(require_assertString());
    var _isInt = _interopRequireDefault(require_isInt());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var validators = {
      PL: function PL(str) {
        (0, _assertString.default)(str);
        var weightOfDigits = {
          1: 1,
          2: 3,
          3: 7,
          4: 9,
          5: 1,
          6: 3,
          7: 7,
          8: 9,
          9: 1,
          10: 3,
          11: 0
        };
        if (str != null && str.length === 11 && (0, _isInt.default)(str, {
          allow_leading_zeroes: true
        })) {
          var digits = str.split("").slice(0, -1);
          var sum = digits.reduce(function(acc, digit, index) {
            return acc + Number(digit) * weightOfDigits[index + 1];
          }, 0);
          var modulo = sum % 10;
          var lastDigit = Number(str.charAt(str.length - 1));
          if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
            return true;
          }
        }
        return false;
      },
      ES: function ES(str) {
        (0, _assertString.default)(str);
        var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        var charsValue = {
          X: 0,
          Y: 1,
          Z: 2
        };
        var controlDigits = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        var sanitized = str.trim().toUpperCase();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
          return charsValue[char];
        });
        return sanitized.endsWith(controlDigits[number % 23]);
      },
      FI: function FI(str) {
        (0, _assertString.default)(str);
        if (str.length !== 11) {
          return false;
        }
        if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
          return false;
        }
        var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        var idAsNumber = parseInt(str.slice(0, 6), 10) * 1e3 + parseInt(str.slice(7, 10), 10);
        var remainder = idAsNumber % 31;
        var checkDigit = checkDigits[remainder];
        return checkDigit === str.slice(10, 11);
      },
      IN: function IN(str) {
        var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
        var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
        var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var c = 0;
        var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
        invertedArray.forEach(function(val, i) {
          c = d[c][p[i % 8][val]];
        });
        return c === 0;
      },
      IR: function IR(str) {
        if (!str.match(/^\d{10}$/))
          return false;
        str = "0000".concat(str).substr(str.length - 6);
        if (parseInt(str.substr(3, 6), 10) === 0)
          return false;
        var lastNumber = parseInt(str.substr(9, 1), 10);
        var sum = 0;
        for (var i = 0; i < 9; i++) {
          sum += parseInt(str.substr(i, 1), 10) * (10 - i);
        }
        sum %= 11;
        return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
      },
      IT: function IT(str) {
        if (str.length !== 9)
          return false;
        if (str === "CA00000AA")
          return false;
        return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
      },
      NO: function NO(str) {
        var sanitized = str.trim();
        if (isNaN(Number(sanitized)))
          return false;
        if (sanitized.length !== 11)
          return false;
        if (sanitized === "00000000000")
          return false;
        var f = sanitized.split("").map(Number);
        var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
        var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
        if (k1 !== f[9] || k2 !== f[10])
          return false;
        return true;
      },
      TH: function TH(str) {
        if (!str.match(/^[1-8]\d{12}$/))
          return false;
        var sum = 0;
        for (var i = 0; i < 12; i++) {
          sum += parseInt(str[i], 10) * (13 - i);
        }
        return str[12] === ((11 - sum % 11) % 10).toString();
      },
      LK: function LK(str) {
        var old_nic = /^[1-9]\d{8}[vx]$/i;
        var new_nic = /^[1-9]\d{11}$/i;
        if (str.length === 10 && old_nic.test(str))
          return true;
        else if (str.length === 12 && new_nic.test(str))
          return true;
        return false;
      },
      "he-IL": function heIL(str) {
        var DNI = /^\d{9}$/;
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        var id = sanitized;
        var sum = 0, incNum;
        for (var i = 0; i < id.length; i++) {
          incNum = Number(id[i]) * (i % 2 + 1);
          sum += incNum > 9 ? incNum - 9 : incNum;
        }
        return sum % 10 === 0;
      },
      "ar-LY": function arLY(str) {
        var NIN = /^(1|2)\d{11}$/;
        var sanitized = str.trim();
        if (!NIN.test(sanitized)) {
          return false;
        }
        return true;
      },
      "ar-TN": function arTN(str) {
        var DNI = /^\d{8}$/;
        var sanitized = str.trim();
        if (!DNI.test(sanitized)) {
          return false;
        }
        return true;
      },
      "zh-CN": function zhCN(str) {
        var provincesAndCities = [
          "11",
          "12",
          "13",
          "14",
          "15",
          "21",
          "22",
          "23",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "50",
          "51",
          "52",
          "53",
          "54",
          "61",
          "62",
          "63",
          "64",
          "65",
          "71",
          "81",
          "82",
          "91"
        ];
        var powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
        var parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        var checkAddressCode = function checkAddressCode2(addressCode) {
          return provincesAndCities.includes(addressCode);
        };
        var checkBirthDayCode = function checkBirthDayCode2(birDayCode) {
          var yyyy = parseInt(birDayCode.substring(0, 4), 10);
          var mm = parseInt(birDayCode.substring(4, 6), 10);
          var dd = parseInt(birDayCode.substring(6), 10);
          var xdata = new Date(yyyy, mm - 1, dd);
          if (xdata > new Date()) {
            return false;
          } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
            return true;
          }
          return false;
        };
        var getParityBit = function getParityBit2(idCardNo) {
          var id17 = idCardNo.substring(0, 17);
          var power = 0;
          for (var i = 0; i < 17; i++) {
            power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
          }
          var mod = power % 11;
          return parityBit[mod];
        };
        var checkParityBit = function checkParityBit2(idCardNo) {
          return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
        };
        var check15IdCardNo = function check15IdCardNo2(idCardNo) {
          var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
          if (!check)
            return false;
          var addressCode = idCardNo.substring(0, 2);
          check = checkAddressCode(addressCode);
          if (!check)
            return false;
          var birDayCode = "19".concat(idCardNo.substring(6, 12));
          check = checkBirthDayCode(birDayCode);
          if (!check)
            return false;
          return true;
        };
        var check18IdCardNo = function check18IdCardNo2(idCardNo) {
          var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
          if (!check)
            return false;
          var addressCode = idCardNo.substring(0, 2);
          check = checkAddressCode(addressCode);
          if (!check)
            return false;
          var birDayCode = idCardNo.substring(6, 14);
          check = checkBirthDayCode(birDayCode);
          if (!check)
            return false;
          return checkParityBit(idCardNo);
        };
        var checkIdCardNo = function checkIdCardNo2(idCardNo) {
          var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
          if (!check)
            return false;
          if (idCardNo.length === 15) {
            return check15IdCardNo(idCardNo);
          }
          return check18IdCardNo(idCardNo);
        };
        return checkIdCardNo(str);
      },
      "zh-TW": function zhTW(str) {
        var ALPHABET_CODES = {
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          G: 16,
          H: 17,
          I: 34,
          J: 18,
          K: 19,
          L: 20,
          M: 21,
          N: 22,
          O: 35,
          P: 23,
          Q: 24,
          R: 25,
          S: 26,
          T: 27,
          U: 28,
          V: 29,
          W: 32,
          X: 30,
          Y: 31,
          Z: 33
        };
        var sanitized = str.trim().toUpperCase();
        if (!/^[A-Z][0-9]{9}$/.test(sanitized))
          return false;
        return Array.from(sanitized).reduce(function(sum, number, index) {
          if (index === 0) {
            var code = ALPHABET_CODES[number];
            return code % 10 * 9 + Math.floor(code / 10);
          }
          if (index === 9) {
            return (10 - sum % 10 - Number(number)) % 10 === 0;
          }
          return sum + Number(number) * (9 - index);
        }, 0);
      }
    };
    function isIdentityCard(str, locale) {
      (0, _assertString.default)(str);
      if (locale in validators) {
        return validators[locale](str);
      } else if (locale === "any") {
        for (var key in validators) {
          if (validators.hasOwnProperty(key)) {
            var validator2 = validators[key];
            if (validator2(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isEAN.js
var require_isEAN = __commonJS({
  "node_modules/validator/lib/isEAN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEAN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var LENGTH_EAN_8 = 8;
    var LENGTH_EAN_14 = 14;
    var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
    function getPositionWeightThroughLengthAndIndex(length, index) {
      if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
        return index % 2 === 0 ? 3 : 1;
      }
      return index % 2 === 0 ? 1 : 3;
    }
    function calculateCheckDigit(ean) {
      var checksum = ean.slice(0, -1).split("").map(function(char, index) {
        return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
      }).reduce(function(acc, partialSum) {
        return acc + partialSum;
      }, 0);
      var remainder = 10 - checksum % 10;
      return remainder < 10 ? remainder : 0;
    }
    function isEAN(str) {
      (0, _assertString.default)(str);
      var actualCheckDigit = Number(str.slice(-1));
      return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISIN.js
var require_isISIN = __commonJS({
  "node_modules/validator/lib/isISIN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISIN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
    function isISIN(str) {
      (0, _assertString.default)(str);
      if (!isin.test(str)) {
        return false;
      }
      var double = true;
      var sum = 0;
      for (var i = str.length - 2; i >= 0; i--) {
        if (str[i] >= "A" && str[i] <= "Z") {
          var value = str[i].charCodeAt(0) - 55;
          var lo = value % 10;
          var hi = Math.trunc(value / 10);
          for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
            var digit = _arr[_i];
            if (double) {
              if (digit >= 5) {
                sum += 1 + (digit - 5) * 2;
              } else {
                sum += digit * 2;
              }
            } else {
              sum += digit;
            }
            double = !double;
          }
        } else {
          var _digit = str[i].charCodeAt(0) - "0".charCodeAt(0);
          if (double) {
            if (_digit >= 5) {
              sum += 1 + (_digit - 5) * 2;
            } else {
              sum += _digit * 2;
            }
          } else {
            sum += _digit;
          }
          double = !double;
        }
      }
      var check = Math.trunc((sum + 9) / 10) * 10 - sum;
      return +str[str.length - 1] === check;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISBN.js
var require_isISBN = __commonJS({
  "node_modules/validator/lib/isISBN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISBN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
    var isbn13Maybe = /^(?:[0-9]{13})$/;
    var factor = [1, 3];
    function isISBN(str) {
      var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, _assertString.default)(str);
      version = String(version);
      if (!version) {
        return isISBN(str, 10) || isISBN(str, 13);
      }
      var sanitized = str.replace(/[\s-]+/g, "");
      var checksum = 0;
      var i;
      if (version === "10") {
        if (!isbn10Maybe.test(sanitized)) {
          return false;
        }
        for (i = 0; i < 9; i++) {
          checksum += (i + 1) * sanitized.charAt(i);
        }
        if (sanitized.charAt(9) === "X") {
          checksum += 10 * 10;
        } else {
          checksum += 10 * sanitized.charAt(9);
        }
        if (checksum % 11 === 0) {
          return !!sanitized;
        }
      } else if (version === "13") {
        if (!isbn13Maybe.test(sanitized)) {
          return false;
        }
        for (i = 0; i < 12; i++) {
          checksum += factor[i % 2] * sanitized.charAt(i);
        }
        if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
          return !!sanitized;
        }
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISSN.js
var require_isISSN = __commonJS({
  "node_modules/validator/lib/isISSN.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISSN;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var issn = "^\\d{4}-?\\d{3}[\\dX]$";
    function isISSN(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      var testIssn = issn;
      testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
      testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
      if (!testIssn.test(str)) {
        return false;
      }
      var digits = str.replace("-", "").toUpperCase();
      var checksum = 0;
      for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        checksum += (digit === "X" ? 10 : +digit) * (8 - i);
      }
      return checksum % 11 === 0;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/util/algorithms.js
var require_algorithms = __commonJS({
  "node_modules/validator/lib/util/algorithms.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.iso7064Check = iso7064Check;
    exports.luhnCheck = luhnCheck;
    exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
    exports.verhoeffCheck = verhoeffCheck;
    function iso7064Check(str) {
      var checkvalue = 10;
      for (var i = 0; i < str.length - 1; i++) {
        checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
      }
      checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
      return checkvalue === parseInt(str[10], 10);
    }
    function luhnCheck(str) {
      var checksum = 0;
      var second = false;
      for (var i = str.length - 1; i >= 0; i--) {
        if (second) {
          var product = parseInt(str[i], 10) * 2;
          if (product > 9) {
            checksum += product.toString().split("").map(function(a) {
              return parseInt(a, 10);
            }).reduce(function(a, b) {
              return a + b;
            }, 0);
          } else {
            checksum += product;
          }
        } else {
          checksum += parseInt(str[i], 10);
        }
        second = !second;
      }
      return checksum % 10 === 0;
    }
    function reverseMultiplyAndSum(digits, base) {
      var total = 0;
      for (var i = 0; i < digits.length; i++) {
        total += digits[i] * (base - i);
      }
      return total;
    }
    function verhoeffCheck(str) {
      var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
      var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
      var str_copy = str.split("").reverse().join("");
      var checksum = 0;
      for (var i = 0; i < str_copy.length; i++) {
        checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
      }
      return checksum === 0;
    }
  }
});

// node_modules/validator/lib/isTaxID.js
var require_isTaxID = __commonJS({
  "node_modules/validator/lib/isTaxID.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isTaxID;
    var _assertString = _interopRequireDefault(require_assertString());
    var algorithms = _interopRequireWildcard(require_algorithms());
    var _isDate = _interopRequireDefault(require_isDate());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function bgBgCheck(tin) {
      var century_year = tin.slice(0, 2);
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 40) {
        month -= 40;
        century_year = "20".concat(century_year);
      } else if (month > 20) {
        month -= 20;
        century_year = "18".concat(century_year);
      } else {
        century_year = "19".concat(century_year);
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      var checksum = 0;
      for (var i = 0; i < multip_lookup.length; i++) {
        checksum += digits[i] * multip_lookup[i];
      }
      checksum = checksum % 11 === 10 ? 0 : checksum % 11;
      return checksum === digits[9];
    }
    function csCzCheck(tin) {
      tin = tin.replace(/\W/, "");
      var full_year = parseInt(tin.slice(0, 2), 10);
      if (tin.length === 10) {
        if (full_year < 54) {
          full_year = "20".concat(full_year);
        } else {
          full_year = "19".concat(full_year);
        }
      } else {
        if (tin.slice(6) === "000") {
          return false;
        }
        if (full_year < 54) {
          full_year = "19".concat(full_year);
        } else {
          return false;
        }
      }
      if (full_year.length === 3) {
        full_year = [full_year.slice(0, 2), "0", full_year.slice(2)].join("");
      }
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 50) {
        month -= 50;
      }
      if (month > 20) {
        if (parseInt(full_year, 10) < 2004) {
          return false;
        }
        month -= 20;
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      if (tin.length === 10) {
        if (parseInt(tin, 10) % 11 !== 0) {
          var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
          if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
            if (parseInt(tin.slice(9), 10) !== 0) {
              return false;
            }
          } else {
            return false;
          }
        }
      }
      return true;
    }
    function deAtCheck(tin) {
      return algorithms.luhnCheck(tin);
    }
    function deDeCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var occurences = [];
      for (var i = 0; i < digits.length - 1; i++) {
        occurences.push("");
        for (var j = 0; j < digits.length - 1; j++) {
          if (digits[i] === digits[j]) {
            occurences[i] += j;
          }
        }
      }
      occurences = occurences.filter(function(a) {
        return a.length > 1;
      });
      if (occurences.length !== 2 && occurences.length !== 3) {
        return false;
      }
      if (occurences[0].length === 3) {
        var trip_locations = occurences[0].split("").map(function(a) {
          return parseInt(a, 10);
        });
        var recurrent = 0;
        for (var _i = 0; _i < trip_locations.length - 1; _i++) {
          if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
            recurrent += 1;
          }
        }
        if (recurrent === 2) {
          return false;
        }
      }
      return algorithms.iso7064Check(tin);
    }
    function dkDkCheck(tin) {
      tin = tin.replace(/\W/, "");
      var year = parseInt(tin.slice(4, 6), 10);
      var century_digit = tin.slice(6, 7);
      switch (century_digit) {
        case "0":
        case "1":
        case "2":
        case "3":
          year = "19".concat(year);
          break;
        case "4":
        case "9":
          if (year < 37) {
            year = "20".concat(year);
          } else {
            year = "19".concat(year);
          }
          break;
        default:
          if (year < 37) {
            year = "20".concat(year);
          } else if (year > 58) {
            year = "18".concat(year);
          } else {
            return false;
          }
          break;
      }
      if (year.length === 3) {
        year = [year.slice(0, 2), "0", year.slice(2)].join("");
      }
      var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      var weight = 4;
      for (var i = 0; i < 9; i++) {
        checksum += digits[i] * weight;
        weight -= 1;
        if (weight === 1) {
          weight = 7;
        }
      }
      checksum %= 11;
      if (checksum === 1) {
        return false;
      }
      return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
    }
    function elCyCheck(tin) {
      var digits = tin.slice(0, 8).split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      for (var i = 1; i < digits.length; i += 2) {
        checksum += digits[i];
      }
      for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
        if (digits[_i2] < 2) {
          checksum += 1 - digits[_i2];
        } else {
          checksum += 2 * (digits[_i2] - 2) + 5;
          if (digits[_i2] > 4) {
            checksum += 2;
          }
        }
      }
      return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
    }
    function elGrCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      for (var i = 0; i < 8; i++) {
        checksum += digits[i] * Math.pow(2, 8 - i);
      }
      return checksum % 11 % 10 === digits[8];
    }
    function enIeCheck(tin) {
      var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
      }), 8);
      if (tin.length === 9 && tin[8] !== "W") {
        checksum += (tin[8].charCodeAt(0) - 64) * 9;
      }
      checksum %= 23;
      if (checksum === 0) {
        return tin[7].toUpperCase() === "W";
      }
      return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
    }
    var enUsCampusPrefix = {
      andover: ["10", "12"],
      atlanta: ["60", "67"],
      austin: ["50", "53"],
      brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
      cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
      fresno: ["15", "24"],
      internet: ["20", "26", "27", "45", "46", "47"],
      kansas: ["40", "44"],
      memphis: ["94", "95"],
      ogden: ["80", "90"],
      philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
      sba: ["31"]
    };
    function enUsGetPrefixes() {
      var prefixes = [];
      for (var location in enUsCampusPrefix) {
        if (enUsCampusPrefix.hasOwnProperty(location)) {
          prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
        }
      }
      return prefixes;
    }
    function enUsCheck(tin) {
      return enUsGetPrefixes().indexOf(tin.substr(0, 2)) !== -1;
    }
    function esEsCheck(tin) {
      var chars = tin.toUpperCase().split("");
      if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
        var lead_replace = 0;
        switch (chars[0]) {
          case "Y":
            lead_replace = 1;
            break;
          case "Z":
            lead_replace = 2;
            break;
          default:
        }
        chars.splice(0, 1, lead_replace);
      } else {
        while (chars.length < 9) {
          chars.unshift(0);
        }
      }
      var lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      chars = chars.join("");
      var checksum = parseInt(chars.slice(0, 8), 10) % 23;
      return chars[8] === lookup[checksum];
    }
    function etEeCheck(tin) {
      var full_year = tin.slice(1, 3);
      var century_digit = tin.slice(0, 1);
      switch (century_digit) {
        case "1":
        case "2":
          full_year = "18".concat(full_year);
          break;
        case "3":
        case "4":
          full_year = "19".concat(full_year);
          break;
        default:
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 0;
      var weight = 1;
      for (var i = 0; i < 10; i++) {
        checksum += digits[i] * weight;
        weight += 1;
        if (weight === 10) {
          weight = 1;
        }
      }
      if (checksum % 11 === 10) {
        checksum = 0;
        weight = 3;
        for (var _i3 = 0; _i3 < 10; _i3++) {
          checksum += digits[_i3] * weight;
          weight += 1;
          if (weight === 10) {
            weight = 1;
          }
        }
        if (checksum % 11 === 10) {
          return digits[10] === 0;
        }
      }
      return checksum % 11 === digits[10];
    }
    function fiFiCheck(tin) {
      var full_year = tin.slice(4, 6);
      var century_symbol = tin.slice(6, 7);
      switch (century_symbol) {
        case "+":
          full_year = "18".concat(full_year);
          break;
        case "-":
          full_year = "19".concat(full_year);
          break;
        default:
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
      if (checksum < 10) {
        return checksum === parseInt(tin.slice(10), 10);
      }
      checksum -= 10;
      var letters_lookup = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
      return letters_lookup[checksum] === tin.slice(10);
    }
    function frBeCheck(tin) {
      if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
        var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      }
      var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
      var checkdigits = parseInt(tin.slice(9, 11), 10);
      if (checksum !== checkdigits) {
        checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
        if (checksum !== checkdigits) {
          return false;
        }
      }
      return true;
    }
    function frFrCheck(tin) {
      tin = tin.replace(/\s/g, "");
      var checksum = parseInt(tin.slice(0, 10), 10) % 511;
      var checkdigits = parseInt(tin.slice(10, 13), 10);
      return checksum === checkdigits;
    }
    function frLuCheck(tin) {
      var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      if (!algorithms.luhnCheck(tin.slice(0, 12))) {
        return false;
      }
      return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
    }
    function hrHrCheck(tin) {
      return algorithms.iso7064Check(tin);
    }
    function huHuCheck(tin) {
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var checksum = 8;
      for (var i = 1; i < 9; i++) {
        checksum += digits[i] * (i + 1);
      }
      return checksum % 11 === digits[9];
    }
    function itItNameCheck(name) {
      var vowelflag = false;
      var xflag = false;
      for (var i = 0; i < 3; i++) {
        if (!vowelflag && /[AEIOU]/.test(name[i])) {
          vowelflag = true;
        } else if (!xflag && vowelflag && name[i] === "X") {
          xflag = true;
        } else if (i > 0) {
          if (vowelflag && !xflag) {
            if (!/[AEIOU]/.test(name[i])) {
              return false;
            }
          }
          if (xflag) {
            if (!/X/.test(name[i])) {
              return false;
            }
          }
        }
      }
      return true;
    }
    function itItCheck(tin) {
      var chars = tin.toUpperCase().split("");
      if (!itItNameCheck(chars.slice(0, 3))) {
        return false;
      }
      if (!itItNameCheck(chars.slice(3, 6))) {
        return false;
      }
      var number_locations = [6, 7, 9, 10, 12, 13, 14];
      var number_replace = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
      };
      for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
        var i = _number_locations[_i4];
        if (chars[i] in number_replace) {
          chars.splice(i, 1, number_replace[chars[i]]);
        }
      }
      var month_replace = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
      };
      var month = month_replace[chars[8]];
      var day = parseInt(chars[9] + chars[10], 10);
      if (day > 40) {
        day -= 40;
      }
      if (day < 10) {
        day = "0".concat(day);
      }
      var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
      if (!(0, _isDate.default)(date, "YY/MM/DD")) {
        return false;
      }
      var checksum = 0;
      for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
        var char_to_int = parseInt(chars[_i5], 10);
        if (isNaN(char_to_int)) {
          char_to_int = chars[_i5].charCodeAt(0) - 65;
        }
        checksum += char_to_int;
      }
      var odd_convert = {
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
      };
      for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
        var _char_to_int = 0;
        if (chars[_i6] in odd_convert) {
          _char_to_int = odd_convert[chars[_i6]];
        } else {
          var multiplier = parseInt(chars[_i6], 10);
          _char_to_int = 2 * multiplier + 1;
          if (multiplier > 4) {
            _char_to_int += 2;
          }
        }
        checksum += _char_to_int;
      }
      if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
        return false;
      }
      return true;
    }
    function lvLvCheck(tin) {
      tin = tin.replace(/\W/, "");
      var day = tin.slice(0, 2);
      if (day !== "32") {
        var month = tin.slice(2, 4);
        if (month !== "00") {
          var full_year = tin.slice(4, 6);
          switch (tin[6]) {
            case "0":
              full_year = "18".concat(full_year);
              break;
            case "1":
              full_year = "19".concat(full_year);
              break;
            default:
              full_year = "20".concat(full_year);
              break;
          }
          var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
          if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
        }
        var checksum = 1101;
        var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        for (var i = 0; i < tin.length - 1; i++) {
          checksum -= parseInt(tin[i], 10) * multip_lookup[i];
        }
        return parseInt(tin[10], 10) === checksum % 11;
      }
      return true;
    }
    function mtMtCheck(tin) {
      if (tin.length !== 9) {
        var chars = tin.toUpperCase().split("");
        while (chars.length < 8) {
          chars.unshift(0);
        }
        switch (tin[7]) {
          case "A":
          case "P":
            if (parseInt(chars[6], 10) === 0) {
              return false;
            }
            break;
          default: {
            var first_part = parseInt(chars.join("").slice(0, 5), 10);
            if (first_part > 32e3) {
              return false;
            }
            var second_part = parseInt(chars.join("").slice(5, 7), 10);
            if (first_part === second_part) {
              return false;
            }
          }
        }
      }
      return true;
    }
    function nlNlCheck(tin) {
      return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11 === parseInt(tin[8], 10);
    }
    function plPlCheck(tin) {
      if (tin.length === 10) {
        var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        var _checksum = 0;
        for (var i = 0; i < lookup.length; i++) {
          _checksum += parseInt(tin[i], 10) * lookup[i];
        }
        _checksum %= 11;
        if (_checksum === 10) {
          return false;
        }
        return _checksum === parseInt(tin[9], 10);
      }
      var full_year = tin.slice(0, 2);
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 80) {
        full_year = "18".concat(full_year);
        month -= 80;
      } else if (month > 60) {
        full_year = "22".concat(full_year);
        month -= 60;
      } else if (month > 40) {
        full_year = "21".concat(full_year);
        month -= 40;
      } else if (month > 20) {
        full_year = "20".concat(full_year);
        month -= 20;
      } else {
        full_year = "19".concat(full_year);
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var checksum = 0;
      var multiplier = 1;
      for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
        checksum += parseInt(tin[_i7], 10) * multiplier % 10;
        multiplier += 2;
        if (multiplier > 10) {
          multiplier = 1;
        } else if (multiplier === 5) {
          multiplier += 2;
        }
      }
      checksum = 10 - checksum % 10;
      return checksum === parseInt(tin[10], 10);
    }
    function ptBrCheck(tin) {
      if (tin.length === 11) {
        var _sum;
        var remainder;
        _sum = 0;
        if (tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000")
          return false;
        for (var i = 1; i <= 9; i++) {
          _sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
        }
        remainder = _sum * 10 % 11;
        if (remainder === 10)
          remainder = 0;
        if (remainder !== parseInt(tin.substring(9, 10), 10))
          return false;
        _sum = 0;
        for (var _i8 = 1; _i8 <= 10; _i8++) {
          _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
        }
        remainder = _sum * 10 % 11;
        if (remainder === 10)
          remainder = 0;
        if (remainder !== parseInt(tin.substring(10, 11), 10))
          return false;
        return true;
      }
      if (tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999") {
        return false;
      }
      var length = tin.length - 2;
      var identifiers = tin.substring(0, length);
      var verificators = tin.substring(length);
      var sum = 0;
      var pos = length - 7;
      for (var _i9 = length; _i9 >= 1; _i9--) {
        sum += identifiers.charAt(length - _i9) * pos;
        pos -= 1;
        if (pos < 2) {
          pos = 9;
        }
      }
      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(verificators.charAt(0), 10)) {
        return false;
      }
      length += 1;
      identifiers = tin.substring(0, length);
      sum = 0;
      pos = length - 7;
      for (var _i10 = length; _i10 >= 1; _i10--) {
        sum += identifiers.charAt(length - _i10) * pos;
        pos -= 1;
        if (pos < 2) {
          pos = 9;
        }
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(verificators.charAt(1), 10)) {
        return false;
      }
      return true;
    }
    function ptPtCheck(tin) {
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
      }), 9) % 11;
      if (checksum > 9) {
        return parseInt(tin[8], 10) === 0;
      }
      return checksum === parseInt(tin[8], 10);
    }
    function roRoCheck(tin) {
      if (tin.slice(0, 4) !== "9000") {
        var full_year = tin.slice(1, 3);
        switch (tin[0]) {
          case "1":
          case "2":
            full_year = "19".concat(full_year);
            break;
          case "3":
          case "4":
            full_year = "18".concat(full_year);
            break;
          case "5":
          case "6":
            full_year = "20".concat(full_year);
            break;
          default:
        }
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (date.length === 8) {
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
        var checksum = 0;
        for (var i = 0; i < multipliers.length; i++) {
          checksum += digits[i] * multipliers[i];
        }
        if (checksum % 11 === 10) {
          return digits[12] === 1;
        }
        return digits[12] === checksum % 11;
      }
      return true;
    }
    function skSkCheck(tin) {
      if (tin.length === 9) {
        tin = tin.replace(/\W/, "");
        if (tin.slice(6) === "000") {
          return false;
        }
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (full_year > 53) {
          return false;
        }
        if (full_year < 10) {
          full_year = "190".concat(full_year);
        } else {
          full_year = "19".concat(full_year);
        }
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) {
          month -= 50;
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
      }
      return true;
    }
    function slSiCheck(tin) {
      var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
      }), 8) % 11;
      if (checksum === 10) {
        return parseInt(tin[7], 10) === 0;
      }
      return checksum === parseInt(tin[7], 10);
    }
    function svSeCheck(tin) {
      var tin_copy = tin.slice(0);
      if (tin.length > 11) {
        tin_copy = tin_copy.slice(2);
      }
      var full_year = "";
      var month = tin_copy.slice(2, 4);
      var day = parseInt(tin_copy.slice(4, 6), 10);
      if (tin.length > 11) {
        full_year = tin.slice(0, 4);
      } else {
        full_year = tin.slice(0, 2);
        if (tin.length === 11 && day < 60) {
          var current_year = new Date().getFullYear().toString();
          var current_century = parseInt(current_year.slice(0, 2), 10);
          current_year = parseInt(current_year, 10);
          if (tin[6] === "-") {
            if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
              full_year = "".concat(current_century - 1).concat(full_year);
            } else {
              full_year = "".concat(current_century).concat(full_year);
            }
          } else {
            full_year = "".concat(current_century - 1).concat(full_year);
            if (current_year - parseInt(full_year, 10) < 100) {
              return false;
            }
          }
        }
      }
      if (day > 60) {
        day -= 60;
      }
      if (day < 10) {
        day = "0".concat(day);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(day);
      if (date.length === 8) {
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      return algorithms.luhnCheck(tin.replace(/\W/, ""));
    }
    var taxIdFormat = {
      "bg-BG": /^\d{10}$/,
      "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
      "de-AT": /^\d{9}$/,
      "de-DE": /^[1-9]\d{10}$/,
      "dk-DK": /^\d{6}-{0,1}\d{4}$/,
      "el-CY": /^[09]\d{7}[A-Z]$/,
      "el-GR": /^([0-4]|[7-9])\d{8}$/,
      "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
      "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
      "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
      "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
      "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
      "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
      "fr-BE": /^\d{11}$/,
      "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
      "fr-LU": /^\d{13}$/,
      "hr-HR": /^\d{11}$/,
      "hu-HU": /^8\d{9}$/,
      "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
      "lv-LV": /^\d{6}-{0,1}\d{5}$/,
      "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
      "nl-NL": /^\d{9}$/,
      "pl-PL": /^\d{10,11}$/,
      "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
      "pt-PT": /^\d{9}$/,
      "ro-RO": /^\d{13}$/,
      "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
      "sl-SI": /^[1-9]\d{7}$/,
      "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
    };
    taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
    taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
    taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
    var taxIdCheck = {
      "bg-BG": bgBgCheck,
      "cs-CZ": csCzCheck,
      "de-AT": deAtCheck,
      "de-DE": deDeCheck,
      "dk-DK": dkDkCheck,
      "el-CY": elCyCheck,
      "el-GR": elGrCheck,
      "en-IE": enIeCheck,
      "en-US": enUsCheck,
      "es-ES": esEsCheck,
      "et-EE": etEeCheck,
      "fi-FI": fiFiCheck,
      "fr-BE": frBeCheck,
      "fr-FR": frFrCheck,
      "fr-LU": frLuCheck,
      "hr-HR": hrHrCheck,
      "hu-HU": huHuCheck,
      "it-IT": itItCheck,
      "lv-LV": lvLvCheck,
      "mt-MT": mtMtCheck,
      "nl-NL": nlNlCheck,
      "pl-PL": plPlCheck,
      "pt-BR": ptBrCheck,
      "pt-PT": ptPtCheck,
      "ro-RO": roRoCheck,
      "sk-SK": skSkCheck,
      "sl-SI": slSiCheck,
      "sv-SE": svSeCheck
    };
    taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
    taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
    taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
    var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
    var sanitizeRegexes = {
      "de-AT": allsymbols,
      "de-DE": /[\/\\]/g,
      "fr-BE": allsymbols
    };
    sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
    function isTaxID(str) {
      var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      (0, _assertString.default)(str);
      var strcopy = str.slice(0);
      if (locale in taxIdFormat) {
        if (locale in sanitizeRegexes) {
          strcopy = strcopy.replace(sanitizeRegexes[locale], "");
        }
        if (!taxIdFormat[locale].test(strcopy)) {
          return false;
        }
        if (locale in taxIdCheck) {
          return taxIdCheck[locale](strcopy);
        }
        return true;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMobilePhone.js
var require_isMobilePhone = __commonJS({
  "node_modules/validator/lib/isMobilePhone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMobilePhone;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var phones = {
      "am-AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
      "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
      "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
      "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
      "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
      "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
      "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
      "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
      "ar-KW": /^(\+?965)[569]\d{7}$/,
      "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
      "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
      "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
      "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
      "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
      "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
      "ar-TN": /^(\+?216)?[2459]\d{7}$/,
      "az-AZ": /^(\+994|0)(5[015]|7[07]|99)\d{7}$/,
      "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
      "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
      "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
      "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
      "ca-AD": /^(\+376)?[346]\d{5}$/,
      "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "de-DE": /^((\+49|0)[1|3])([0|5][0-45-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
      "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
      "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
      "de-LU": /^(\+352)?((6\d1)\d{6})$/,
      "dv-MV": /^(\+?960)?(7[2-9]|91|9[3-9])\d{7}$/,
      "el-GR": /^(\+?30|0)?(69\d{8})$/,
      "en-AU": /^(\+?61|0)4\d{8}$/,
      "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}))/,
      "en-GB": /^(\+?44|0)7\d{9}$/,
      "en-GG": /^(\+?44|0)1481\d{6}$/,
      "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
      "en-GY": /^(\+592|0)6\d{6}$/,
      "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
      "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
      "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
      "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
      "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
      "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
      "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
      "en-MU": /^(\+?230|0)?\d{8}$/,
      "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
      "en-NG": /^(\+?234|0)?[789]\d{9}$/,
      "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
      "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
      "en-PH": /^(09|\+639)\d{9}$/,
      "en-RW": /^(\+?250|0)?[7]\d{8}$/,
      "en-SG": /^(\+65)?[3689]\d{7}$/,
      "en-SL": /^(\+?232|0)\d{8}$/,
      "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
      "en-UG": /^(\+?256|0)?[7]\d{8}$/,
      "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
      "en-ZA": /^(\+?27|0)\d{9}$/,
      "en-ZM": /^(\+?26)?09[567]\d{7}$/,
      "en-ZW": /^(\+263)[0-9]{9}$/,
      "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
      "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
      "es-BO": /^(\+?591)?(6|7)\d{7}$/,
      "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
      "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
      "es-CR": /^(\+506)?[2-8]\d{7}$/,
      "es-CU": /^(\+53|0053)?5\d{7}/,
      "es-DO": /^(\+?1)?8[024]9\d{7}$/,
      "es-HN": /^(\+?504)?[9|8]\d{7}$/,
      "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
      "es-ES": /^(\+?34)?[6|7]\d{8}$/,
      "es-PE": /^(\+?51)?9\d{8}$/,
      "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
      "es-PA": /^(\+?507)\d{7,8}$/,
      "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
      "es-SV": /^(\+?503)?[67]\d{7}$/,
      "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
      "es-VE": /^(\+?58)?(2|4)\d{9}$/,
      "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
      "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
      "fi-FI": /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
      "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
      "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "fr-BF": /^(\+226|0)[67]\d{7}$/,
      "fr-CM": /^(\+?237)6[0-9]{8}$/,
      "fr-FR": /^(\+?33|0)[67]\d{8}$/,
      "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
      "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
      "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
      "fr-PF": /^(\+?689)?8[789]\d{6}$/,
      "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
      "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
      "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
      "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
      "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
      "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
      "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
      "ka-GE": /^(\+?995)?(5|79)\d{7}$/,
      "kk-KZ": /^(\+?7|8)?7\d{9}$/,
      "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
      "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
      "lt-LT": /^(\+370|8)\d{8}$/,
      "lv-LV": /^(\+?371)2\d{7}$/,
      "ms-MY": /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
      "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
      "nb-NO": /^(\+?47)?[49]\d{7}$/,
      "ne-NP": /^(\+?977)?9[78]\d{8}$/,
      "nl-BE": /^(\+?32|0)4\d{8}$/,
      "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
      "nn-NO": /^(\+?47)?[49]\d{7}$/,
      "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
      "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[2-9]{1}\d{3}\-?\d{4}))$/,
      "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
      "pt-AO": /^(\+244)\d{9}$/,
      "ro-RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
      "ru-RU": /^(\+?7|8)?9\d{9}$/,
      "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
      "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
      "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
      "sq-AL": /^(\+355|0)6[789]\d{6}$/,
      "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
      "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
      "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
      "th-TH": /^(\+66|66|0)\d{9}$/,
      "tr-TR": /^(\+?90|0)?5\d{9}$/,
      "tk-TM": /^(\+993|993|8)\d{8}$/,
      "uk-UA": /^(\+?38|8)?0\d{9}$/,
      "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
      "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
      "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
      "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
      "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/
    };
    phones["en-CA"] = phones["en-US"];
    phones["fr-CA"] = phones["en-CA"];
    phones["fr-BE"] = phones["nl-BE"];
    phones["zh-HK"] = phones["en-HK"];
    phones["zh-MO"] = phones["en-MO"];
    phones["ga-IE"] = phones["en-IE"];
    phones["fr-CH"] = phones["de-CH"];
    phones["it-CH"] = phones["fr-CH"];
    function isMobilePhone(str, locale, options) {
      (0, _assertString.default)(str);
      if (options && options.strictMode && !str.startsWith("+")) {
        return false;
      }
      if (Array.isArray(locale)) {
        return locale.some(function(key2) {
          if (phones.hasOwnProperty(key2)) {
            var phone2 = phones[key2];
            if (phone2.test(str)) {
              return true;
            }
          }
          return false;
        });
      } else if (locale in phones) {
        return phones[locale].test(str);
      } else if (!locale || locale === "any") {
        for (var key in phones) {
          if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    var locales = Object.keys(phones);
    exports.locales = locales;
  }
});

// node_modules/validator/lib/isEthereumAddress.js
var require_isEthereumAddress = __commonJS({
  "node_modules/validator/lib/isEthereumAddress.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isEthereumAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var eth = /^(0x)[0-9a-f]{40}$/i;
    function isEthereumAddress(str) {
      (0, _assertString.default)(str);
      return eth.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isCurrency.js
var require_isCurrency = __commonJS({
  "node_modules/validator/lib/isCurrency.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isCurrency;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function currencyRegex(options) {
      var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
      options.digits_after_decimal.forEach(function(digit, index) {
        if (index !== 0)
          decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
      });
      var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
        return "\\".concat(m);
      }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = ["0", whole_dollar_amount_without_sep, whole_dollar_amount_with_sep], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
      var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : "");
      if (options.allow_negatives && !options.parens_for_negatives) {
        if (options.negative_sign_after_digits) {
          pattern += negative;
        } else if (options.negative_sign_before_digits) {
          pattern = negative + pattern;
        }
      }
      if (options.allow_negative_sign_placeholder) {
        pattern = "( (?!\\-))?".concat(pattern);
      } else if (options.allow_space_after_symbol) {
        pattern = " ?".concat(pattern);
      } else if (options.allow_space_after_digits) {
        pattern += "( (?!$))?";
      }
      if (options.symbol_after_digits) {
        pattern += symbol;
      } else {
        pattern = symbol + pattern;
      }
      if (options.allow_negatives) {
        if (options.parens_for_negatives) {
          pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
        } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
          pattern = negative + pattern;
        }
      }
      return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
    }
    var default_currency_options = {
      symbol: "$",
      require_symbol: false,
      allow_space_after_symbol: false,
      symbol_after_digits: false,
      allow_negatives: true,
      parens_for_negatives: false,
      negative_sign_before_digits: false,
      negative_sign_after_digits: false,
      allow_negative_sign_placeholder: false,
      thousands_separator: ",",
      decimal_separator: ".",
      allow_decimal: true,
      require_decimal: false,
      digits_after_decimal: [2],
      allow_space_after_digits: false
    };
    function isCurrency(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, default_currency_options);
      return currencyRegex(options).test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBtcAddress.js
var require_isBtcAddress = __commonJS({
  "node_modules/validator/lib/isBtcAddress.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBtcAddress;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
    var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
    function isBtcAddress(str) {
      (0, _assertString.default)(str);
      if (str.startsWith("bc1")) {
        return bech32.test(str);
      }
      return base58.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO8601.js
var require_isISO8601 = __commonJS({
  "node_modules/validator/lib/isISO8601.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO8601;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    var isValidDate = function isValidDate2(str) {
      var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
      if (ordinalMatch) {
        var oYear = Number(ordinalMatch[1]);
        var oDay = Number(ordinalMatch[2]);
        if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0)
          return oDay <= 366;
        return oDay <= 365;
      }
      var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
      var year = match[1];
      var month = match[2];
      var day = match[3];
      var monthString = month ? "0".concat(month).slice(-2) : month;
      var dayString = day ? "0".concat(day).slice(-2) : day;
      var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
      if (month && day) {
        return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
      }
      return true;
    };
    function isISO8601(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, _assertString.default)(str);
      var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
      if (check && options.strict)
        return isValidDate(str);
      return check;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isRFC3339.js
var require_isRFC3339 = __commonJS({
  "node_modules/validator/lib/isRFC3339.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isRFC3339;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var dateFullYear = /[0-9]{4}/;
    var dateMonth = /(0[1-9]|1[0-2])/;
    var dateMDay = /([12]\d|0[1-9]|3[01])/;
    var timeHour = /([01][0-9]|2[0-3])/;
    var timeMinute = /[0-5][0-9]/;
    var timeSecond = /([0-5][0-9]|60)/;
    var timeSecFrac = /(\.[0-9]+)?/;
    var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
    var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
    var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
    var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
    var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
    var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
    function isRFC3339(str) {
      (0, _assertString.default)(str);
      return rfc3339.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO31661Alpha3.js
var require_isISO31661Alpha3 = __commonJS({
  "node_modules/validator/lib/isISO31661Alpha3.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO31661Alpha3;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var validISO31661Alpha3CountriesCodes = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
    function isISO31661Alpha3(str) {
      (0, _assertString.default)(str);
      return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isISO4217.js
var require_isISO4217 = __commonJS({
  "node_modules/validator/lib/isISO4217.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isISO4217;
    exports.CurrencyCodes = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var validISO4217CurrencyCodes = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
    function isISO4217(str) {
      (0, _assertString.default)(str);
      return validISO4217CurrencyCodes.has(str.toUpperCase());
    }
    var CurrencyCodes = validISO4217CurrencyCodes;
    exports.CurrencyCodes = CurrencyCodes;
  }
});

// node_modules/validator/lib/isBase32.js
var require_isBase32 = __commonJS({
  "node_modules/validator/lib/isBase32.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase32;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var base32 = /^[A-Z2-7]+=*$/;
    function isBase32(str) {
      (0, _assertString.default)(str);
      var len = str.length;
      if (len % 8 === 0 && base32.test(str)) {
        return true;
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isBase58.js
var require_isBase58 = __commonJS({
  "node_modules/validator/lib/isBase58.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isBase58;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
    function isBase58(str) {
      (0, _assertString.default)(str);
      if (base58Reg.test(str)) {
        return true;
      }
      return false;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isDataURI.js
var require_isDataURI = __commonJS({
  "node_modules/validator/lib/isDataURI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDataURI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
    var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
    var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
    function isDataURI(str) {
      (0, _assertString.default)(str);
      var data = str.split(",");
      if (data.length < 2) {
        return false;
      }
      var attributes = data.shift().trim().split(";");
      var schemeAndMediaType = attributes.shift();
      if (schemeAndMediaType.substr(0, 5) !== "data:") {
        return false;
      }
      var mediaType = schemeAndMediaType.substr(5);
      if (mediaType !== "" && !validMediaType.test(mediaType)) {
        return false;
      }
      for (var i = 0; i < attributes.length; i++) {
        if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === "base64") && !validAttribute.test(attributes[i])) {
          return false;
        }
      }
      for (var _i = 0; _i < data.length; _i++) {
        if (!validData.test(data[_i])) {
          return false;
        }
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMagnetURI.js
var require_isMagnetURI = __commonJS({
  "node_modules/validator/lib/isMagnetURI.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMagnetURI;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var magnetURI = /^magnet:\?xt(?:\.1)?=urn:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?($|&)/i;
    function isMagnetURI(url) {
      (0, _assertString.default)(url);
      return magnetURI.test(url.trim());
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isMimeType.js
var require_isMimeType = __commonJS({
  "node_modules/validator/lib/isMimeType.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isMimeType;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i;
    var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
    var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
    function isMimeType(str) {
      (0, _assertString.default)(str);
      return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLatLong.js
var require_isLatLong = __commonJS({
  "node_modules/validator/lib/isLatLong.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLatLong;
    var _assertString = _interopRequireDefault(require_assertString());
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
    var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
    var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
    var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
    var defaultLatLongOptions = {
      checkDMS: false
    };
    function isLatLong(str, options) {
      (0, _assertString.default)(str);
      options = (0, _merge.default)(options, defaultLatLongOptions);
      if (!str.includes(","))
        return false;
      var pair = str.split(",");
      if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("("))
        return false;
      if (options.checkDMS) {
        return latDMS.test(pair[0]) && longDMS.test(pair[1]);
      }
      return lat.test(pair[0]) && long.test(pair[1]);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isPostalCode.js
var require_isPostalCode = __commonJS({
  "node_modules/validator/lib/isPostalCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPostalCode;
    exports.locales = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var threeDigit = /^\d{3}$/;
    var fourDigit = /^\d{4}$/;
    var fiveDigit = /^\d{5}$/;
    var sixDigit = /^\d{6}$/;
    var patterns = {
      AD: /^AD\d{3}$/,
      AT: fourDigit,
      AU: fourDigit,
      AZ: /^AZ\d{4}$/,
      BE: fourDigit,
      BG: fourDigit,
      BR: /^\d{5}-\d{3}$/,
      BY: /2[1-4]{1}\d{4}$/,
      CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
      CH: fourDigit,
      CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
      CZ: /^\d{3}\s?\d{2}$/,
      DE: fiveDigit,
      DK: fourDigit,
      DO: fiveDigit,
      DZ: fiveDigit,
      EE: fiveDigit,
      ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
      FI: fiveDigit,
      FR: /^\d{2}\s?\d{3}$/,
      GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
      GR: /^\d{3}\s?\d{2}$/,
      HR: /^([1-5]\d{4}$)/,
      HT: /^HT\d{4}$/,
      HU: fourDigit,
      ID: fiveDigit,
      IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
      IL: /^(\d{5}|\d{7})$/,
      IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
      IR: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
      IS: threeDigit,
      IT: fiveDigit,
      JP: /^\d{3}\-\d{4}$/,
      KE: fiveDigit,
      KR: /^(\d{5}|\d{6})$/,
      LI: /^(948[5-9]|949[0-7])$/,
      LT: /^LT\-\d{5}$/,
      LU: fourDigit,
      LV: /^LV\-\d{4}$/,
      LK: fiveDigit,
      MX: fiveDigit,
      MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
      MY: fiveDigit,
      NL: /^\d{4}\s?[a-z]{2}$/i,
      NO: fourDigit,
      NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
      NZ: fourDigit,
      PL: /^\d{2}\-\d{3}$/,
      PR: /^00[679]\d{2}([ -]\d{4})?$/,
      PT: /^\d{4}\-\d{3}?$/,
      RO: sixDigit,
      RU: sixDigit,
      SA: fiveDigit,
      SE: /^[1-9]\d{2}\s?\d{2}$/,
      SG: sixDigit,
      SI: fourDigit,
      SK: /^\d{3}\s?\d{2}$/,
      TH: fiveDigit,
      TN: fourDigit,
      TW: /^\d{3}(\d{2})?$/,
      UA: fiveDigit,
      US: /^\d{5}(-\d{4})?$/,
      ZA: fourDigit,
      ZM: fiveDigit
    };
    var locales = Object.keys(patterns);
    exports.locales = locales;
    function isPostalCode(str, locale) {
      (0, _assertString.default)(str);
      if (locale in patterns) {
        return patterns[locale].test(str);
      } else if (locale === "any") {
        for (var key in patterns) {
          if (patterns.hasOwnProperty(key)) {
            var pattern = patterns[key];
            if (pattern.test(str)) {
              return true;
            }
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
  }
});

// node_modules/validator/lib/ltrim.js
var require_ltrim = __commonJS({
  "node_modules/validator/lib/ltrim.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ltrim;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ltrim(str, chars) {
      (0, _assertString.default)(str);
      var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
      return str.replace(pattern, "");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/rtrim.js
var require_rtrim = __commonJS({
  "node_modules/validator/lib/rtrim.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rtrim;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function rtrim(str, chars) {
      (0, _assertString.default)(str);
      if (chars) {
        var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return str.replace(pattern, "");
      }
      var strIndex = str.length - 1;
      while (/\s/.test(str.charAt(strIndex))) {
        strIndex -= 1;
      }
      return str.slice(0, strIndex + 1);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/trim.js
var require_trim = __commonJS({
  "node_modules/validator/lib/trim.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = trim;
    var _rtrim = _interopRequireDefault(require_rtrim());
    var _ltrim = _interopRequireDefault(require_ltrim());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function trim(str, chars) {
      return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/escape.js
var require_escape = __commonJS({
  "node_modules/validator/lib/escape.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escape;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function escape(str) {
      (0, _assertString.default)(str);
      return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/unescape.js
var require_unescape = __commonJS({
  "node_modules/validator/lib/unescape.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = unescape;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function unescape(str) {
      (0, _assertString.default)(str);
      return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/blacklist.js
var require_blacklist = __commonJS({
  "node_modules/validator/lib/blacklist.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = blacklist;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function blacklist(str, chars) {
      (0, _assertString.default)(str);
      return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/stripLow.js
var require_stripLow = __commonJS({
  "node_modules/validator/lib/stripLow.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = stripLow;
    var _assertString = _interopRequireDefault(require_assertString());
    var _blacklist = _interopRequireDefault(require_blacklist());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stripLow(str, keep_new_lines) {
      (0, _assertString.default)(str);
      var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
      return (0, _blacklist.default)(str, chars);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/whitelist.js
var require_whitelist = __commonJS({
  "node_modules/validator/lib/whitelist.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = whitelist;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function whitelist(str, chars) {
      (0, _assertString.default)(str);
      return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isWhitelisted.js
var require_isWhitelisted = __commonJS({
  "node_modules/validator/lib/isWhitelisted.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isWhitelisted;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isWhitelisted(str, chars) {
      (0, _assertString.default)(str);
      for (var i = str.length - 1; i >= 0; i--) {
        if (chars.indexOf(str[i]) === -1) {
          return false;
        }
      }
      return true;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/normalizeEmail.js
var require_normalizeEmail = __commonJS({
  "node_modules/validator/lib/normalizeEmail.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = normalizeEmail;
    var _merge = _interopRequireDefault(require_merge());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var default_normalize_email_options = {
      all_lowercase: true,
      gmail_lowercase: true,
      gmail_remove_dots: true,
      gmail_remove_subaddress: true,
      gmail_convert_googlemaildotcom: true,
      outlookdotcom_lowercase: true,
      outlookdotcom_remove_subaddress: true,
      yahoo_lowercase: true,
      yahoo_remove_subaddress: true,
      yandex_lowercase: true,
      icloud_lowercase: true,
      icloud_remove_subaddress: true
    };
    var icloud_domains = ["icloud.com", "me.com"];
    var outlookdotcom_domains = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"];
    var yahoo_domains = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
    var yandex_domains = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
    function dotsReplacer(match) {
      if (match.length > 1) {
        return match;
      }
      return "";
    }
    function normalizeEmail(email2, options) {
      options = (0, _merge.default)(options, default_normalize_email_options);
      var raw_parts = email2.split("@");
      var domain = raw_parts.pop();
      var user = raw_parts.join("@");
      var parts = [user, domain];
      parts[1] = parts[1].toLowerCase();
      if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
        if (options.gmail_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (options.gmail_remove_dots) {
          parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.gmail_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
      } else if (icloud_domains.indexOf(parts[1]) >= 0) {
        if (options.icloud_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.icloud_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
        if (options.outlookdotcom_remove_subaddress) {
          parts[0] = parts[0].split("+")[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.outlookdotcom_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
        if (options.yahoo_remove_subaddress) {
          var components = parts[0].split("-");
          parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
        }
        if (!parts[0].length) {
          return false;
        }
        if (options.all_lowercase || options.yahoo_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
      } else if (yandex_domains.indexOf(parts[1]) >= 0) {
        if (options.all_lowercase || options.yandex_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        parts[1] = "yandex.ru";
      } else if (options.all_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
      return parts.join("@");
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isSlug.js
var require_isSlug = __commonJS({
  "node_modules/validator/lib/isSlug.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isSlug;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function isSlug(str) {
      (0, _assertString.default)(str);
      return charsetRegex.test(str);
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isLicensePlate.js
var require_isLicensePlate = __commonJS({
  "node_modules/validator/lib/isLicensePlate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isLicensePlate;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var validators = {
      "cs-CZ": function csCZ(str) {
        return /^(([ABCDEFHKIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
      },
      "de-DE": function deDE(str) {
        return /^((AW|UL|AK|GA|AÖ|LF|AZ|AM|AS|ZE|AN|AB|A|KG|KH|BA|EW|BZ|HY|KM|BT|HP|B|BC|BI|BO|FN|TT|ÜB|BN|AH|BS|FR|HB|ZZ|BB|BK|BÖ|OC|OK|CW|CE|C|CO|LH|CB|KW|LC|LN|DA|DI|DE|DH|SY|NÖ|DO|DD|DU|DN|D|EI|EA|EE|FI|EM|EL|EN|PF|ED|EF|ER|AU|ZP|E|ES|NT|EU|FL|FO|FT|FF|F|FS|FD|FÜ|GE|G|GI|GF|GS|ZR|GG|GP|GR|NY|ZI|GÖ|GZ|GT|HA|HH|HM|HU|WL|HZ|WR|RN|HK|HD|HN|HS|GK|HE|HF|RZ|HI|HG|HO|HX|IK|IL|IN|J|JL|KL|KA|KS|KF|KE|KI|KT|KO|KN|KR|KC|KU|K|LD|LL|LA|L|OP|LM|LI|LB|LU|LÖ|HL|LG|MD|GN|MZ|MA|ML|MR|MY|AT|DM|MC|NZ|RM|RG|MM|ME|MB|MI|FG|DL|HC|MW|RL|MK|MG|MÜ|WS|MH|M|MS|NU|NB|ND|NM|NK|NW|NR|NI|NF|DZ|EB|OZ|TG|TO|N|OA|GM|OB|CA|EH|FW|OF|OL|OE|OG|BH|LR|OS|AA|GD|OH|KY|NP|WK|PB|PA|PE|PI|PS|P|PM|PR|RA|RV|RE|R|H|SB|WN|RS|RD|RT|BM|NE|GV|RP|SU|GL|RO|GÜ|RH|EG|RW|PN|SK|MQ|RU|SZ|RI|SL|SM|SC|HR|FZ|VS|SW|SN|CR|SE|SI|SO|LP|SG|NH|SP|IZ|ST|BF|TE|HV|OD|SR|S|AC|DW|ZW|TF|TS|TR|TÜ|UM|PZ|TP|UE|UN|UH|MN|KK|VB|V|AE|PL|RC|VG|GW|PW|VR|VK|KB|WA|WT|BE|WM|WE|AP|MO|WW|FB|WZ|WI|WB|JE|WF|WO|W|WÜ|BL|Z|GC)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(AIC|FDB|ABG|SLN|SAW|KLZ|BUL|ESB|NAB|SUL|WST|ABI|AZE|BTF|KÖT|DKB|FEU|ROT|ALZ|SMÜ|WER|AUR|NOR|DÜW|BRK|HAB|TÖL|WOR|BAD|BAR|BER|BIW|EBS|KEM|MÜB|PEG|BGL|BGD|REI|WIL|BKS|BIR|WAT|BOR|BOH|BOT|BRB|BLK|HHM|NEB|NMB|WSF|LEO|HDL|WMS|WZL|BÜS|CHA|KÖZ|ROD|WÜM|CLP|NEC|COC|ZEL|COE|CUX|DAH|LDS|DEG|DEL|RSL|DLG|DGF|LAN|HEI|MED|DON|KIB|ROK|JÜL|MON|SLE|EBE|EIC|HIG|WBS|BIT|PRÜ|LIB|EMD|WIT|ERH|HÖS|ERZ|ANA|ASZ|MAB|MEK|STL|SZB|FDS|HCH|HOR|WOL|FRG|GRA|WOS|FRI|FFB|GAP|GER|BRL|CLZ|GTH|NOH|HGW|GRZ|LÖB|NOL|WSW|DUD|HMÜ|OHA|KRU|HAL|HAM|HBS|QLB|HVL|NAU|HAS|EBN|GEO|HOH|HDH|ERK|HER|WAN|HEF|ROF|HBN|ALF|HSK|USI|NAI|REH|SAN|KÜN|ÖHR|HOL|WAR|ARN|BRG|GNT|HOG|WOH|KEH|MAI|PAR|RID|ROL|KLE|GEL|KUS|KYF|ART|SDH|LDK|DIL|MAL|VIB|LER|BNA|GHA|GRM|MTL|WUR|LEV|LIF|STE|WEL|LIP|VAI|LUP|HGN|LBZ|LWL|PCH|STB|DAN|MKK|SLÜ|MSP|TBB|MGH|MTK|BIN|MSH|EIL|HET|SGH|BID|MYK|MSE|MST|MÜR|WRN|MEI|GRH|RIE|MZG|MIL|OBB|BED|FLÖ|MOL|FRW|SEE|SRB|AIB|MOS|BCH|ILL|SOB|NMS|NEA|SEF|UFF|NEW|VOH|NDH|TDO|NWM|GDB|GVM|WIS|NOM|EIN|GAN|LAU|HEB|OHV|OSL|SFB|ERB|LOS|BSK|KEL|BSB|MEL|WTL|OAL|FÜS|MOD|OHZ|OPR|BÜR|PAF|PLÖ|CAS|GLA|REG|VIT|ECK|SIM|GOA|EMS|DIZ|GOH|RÜD|SWA|NES|KÖN|MET|LRO|BÜZ|DBR|ROS|TET|HRO|ROW|BRV|HIP|PAN|GRI|SHK|EIS|SRO|SOK|LBS|SCZ|MER|QFT|SLF|SLS|HOM|SLK|ASL|BBG|SBK|SFT|SHG|MGN|MEG|ZIG|SAD|NEN|OVI|SHA|BLB|SIG|SON|SPN|FOR|GUB|SPB|IGB|WND|STD|STA|SDL|OBG|HST|BOG|SHL|PIR|FTL|SEB|SÖM|SÜW|TIR|SAB|TUT|ANG|SDT|LÜN|LSZ|MHL|VEC|VER|VIE|OVL|ANK|OVP|SBG|UEM|UER|WLG|GMN|NVP|RDG|RÜG|DAU|FKB|WAF|WAK|SLZ|WEN|SOG|APD|WUG|GUN|ESW|WIZ|WES|DIN|BRA|BÜD|WHV|HWI|GHC|WTM|WOB|WUN|MAK|SEL|OCH|HOT|WDA)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
      },
      "de-LI": function deLI(str) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
      },
      "fi-FI": function fiFI(str) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
      },
      "pt-PT": function ptPT(str) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
      },
      "sq-AL": function sqAL(str) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
      },
      "pt-BR": function ptBR(str) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
      }
    };
    function isLicensePlate(str, locale) {
      (0, _assertString.default)(str);
      if (locale in validators) {
        return validators[locale](str);
      } else if (locale === "any") {
        for (var key in validators) {
          var validator2 = validators[key];
          if (validator2(str)) {
            return true;
          }
        }
        return false;
      }
      throw new Error("Invalid locale '".concat(locale, "'"));
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isStrongPassword.js
var require_isStrongPassword = __commonJS({
  "node_modules/validator/lib/isStrongPassword.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isStrongPassword;
    var _merge = _interopRequireDefault(require_merge());
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var upperCaseRegex = /^[A-Z]$/;
    var lowerCaseRegex = /^[a-z]$/;
    var numberRegex = /^[0-9]$/;
    var symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
    var defaultOptions = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    };
    function countChars(str) {
      var result = {};
      Array.from(str).forEach(function(char) {
        var curVal = result[char];
        if (curVal) {
          result[char] += 1;
        } else {
          result[char] = 1;
        }
      });
      return result;
    }
    function analyzePassword(password) {
      var charMap = countChars(password);
      var analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
      };
      Object.keys(charMap).forEach(function(char) {
        if (upperCaseRegex.test(char)) {
          analysis.uppercaseCount += charMap[char];
        } else if (lowerCaseRegex.test(char)) {
          analysis.lowercaseCount += charMap[char];
        } else if (numberRegex.test(char)) {
          analysis.numberCount += charMap[char];
        } else if (symbolRegex.test(char)) {
          analysis.symbolCount += charMap[char];
        }
      });
      return analysis;
    }
    function scorePassword(analysis, scoringOptions) {
      var points = 0;
      points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
      points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
      if (analysis.lowercaseCount > 0) {
        points += scoringOptions.pointsForContainingLower;
      }
      if (analysis.uppercaseCount > 0) {
        points += scoringOptions.pointsForContainingUpper;
      }
      if (analysis.numberCount > 0) {
        points += scoringOptions.pointsForContainingNumber;
      }
      if (analysis.symbolCount > 0) {
        points += scoringOptions.pointsForContainingSymbol;
      }
      return points;
    }
    function isStrongPassword(str) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      (0, _assertString.default)(str);
      var analysis = analyzePassword(str);
      options = (0, _merge.default)(options || {}, defaultOptions);
      if (options.returnScore) {
        return scorePassword(analysis, options);
      }
      return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
    }
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// node_modules/validator/lib/isVAT.js
var require_isVAT = __commonJS({
  "node_modules/validator/lib/isVAT.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isVAT;
    exports.vatMatchers = void 0;
    var _assertString = _interopRequireDefault(require_assertString());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var vatMatchers = {
      GB: /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/,
      IT: /^(IT)?[0-9]{11}$/,
      NL: /^(NL)?[0-9]{9}B[0-9]{2}$/
    };
    exports.vatMatchers = vatMatchers;
    function isVAT(str, countryCode) {
      (0, _assertString.default)(str);
      (0, _assertString.default)(countryCode);
      if (countryCode in vatMatchers) {
        return vatMatchers[countryCode].test(str);
      }
      throw new Error("Invalid country code: '".concat(countryCode, "'"));
    }
  }
});

// node_modules/validator/index.js
var require_validator = __commonJS({
  "node_modules/validator/index.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _toDate = _interopRequireDefault(require_toDate());
    var _toFloat = _interopRequireDefault(require_toFloat());
    var _toInt = _interopRequireDefault(require_toInt());
    var _toBoolean = _interopRequireDefault(require_toBoolean());
    var _equals = _interopRequireDefault(require_equals());
    var _contains = _interopRequireDefault(require_contains());
    var _matches = _interopRequireDefault(require_matches());
    var _isEmail = _interopRequireDefault(require_isEmail());
    var _isURL = _interopRequireDefault(require_isURL());
    var _isMACAddress = _interopRequireDefault(require_isMACAddress());
    var _isIP = _interopRequireDefault(require_isIP());
    var _isIPRange = _interopRequireDefault(require_isIPRange());
    var _isFQDN = _interopRequireDefault(require_isFQDN());
    var _isDate = _interopRequireDefault(require_isDate());
    var _isBoolean = _interopRequireDefault(require_isBoolean());
    var _isLocale = _interopRequireDefault(require_isLocale());
    var _isAlpha = _interopRequireWildcard(require_isAlpha());
    var _isAlphanumeric = _interopRequireWildcard(require_isAlphanumeric());
    var _isNumeric = _interopRequireDefault(require_isNumeric());
    var _isPassportNumber = _interopRequireDefault(require_isPassportNumber());
    var _isPort = _interopRequireDefault(require_isPort());
    var _isLowercase = _interopRequireDefault(require_isLowercase());
    var _isUppercase = _interopRequireDefault(require_isUppercase());
    var _isIMEI = _interopRequireDefault(require_isIMEI());
    var _isAscii = _interopRequireDefault(require_isAscii());
    var _isFullWidth = _interopRequireDefault(require_isFullWidth());
    var _isHalfWidth = _interopRequireDefault(require_isHalfWidth());
    var _isVariableWidth = _interopRequireDefault(require_isVariableWidth());
    var _isMultibyte = _interopRequireDefault(require_isMultibyte());
    var _isSemVer = _interopRequireDefault(require_isSemVer());
    var _isSurrogatePair = _interopRequireDefault(require_isSurrogatePair());
    var _isInt = _interopRequireDefault(require_isInt());
    var _isFloat = _interopRequireWildcard(require_isFloat());
    var _isDecimal = _interopRequireDefault(require_isDecimal());
    var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
    var _isOctal = _interopRequireDefault(require_isOctal());
    var _isDivisibleBy = _interopRequireDefault(require_isDivisibleBy());
    var _isHexColor = _interopRequireDefault(require_isHexColor());
    var _isRgbColor = _interopRequireDefault(require_isRgbColor());
    var _isHSL = _interopRequireDefault(require_isHSL());
    var _isISRC = _interopRequireDefault(require_isISRC());
    var _isIBAN = _interopRequireWildcard(require_isIBAN());
    var _isBIC = _interopRequireDefault(require_isBIC());
    var _isMD = _interopRequireDefault(require_isMD5());
    var _isHash = _interopRequireDefault(require_isHash());
    var _isJWT = _interopRequireDefault(require_isJWT());
    var _isJSON = _interopRequireDefault(require_isJSON());
    var _isEmpty = _interopRequireDefault(require_isEmpty());
    var _isLength = _interopRequireDefault(require_isLength());
    var _isByteLength = _interopRequireDefault(require_isByteLength());
    var _isUUID = _interopRequireDefault(require_isUUID());
    var _isMongoId = _interopRequireDefault(require_isMongoId());
    var _isAfter = _interopRequireDefault(require_isAfter());
    var _isBefore = _interopRequireDefault(require_isBefore());
    var _isIn = _interopRequireDefault(require_isIn());
    var _isCreditCard = _interopRequireDefault(require_isCreditCard());
    var _isIdentityCard = _interopRequireDefault(require_isIdentityCard());
    var _isEAN = _interopRequireDefault(require_isEAN());
    var _isISIN = _interopRequireDefault(require_isISIN());
    var _isISBN = _interopRequireDefault(require_isISBN());
    var _isISSN = _interopRequireDefault(require_isISSN());
    var _isTaxID = _interopRequireDefault(require_isTaxID());
    var _isMobilePhone = _interopRequireWildcard(require_isMobilePhone());
    var _isEthereumAddress = _interopRequireDefault(require_isEthereumAddress());
    var _isCurrency = _interopRequireDefault(require_isCurrency());
    var _isBtcAddress = _interopRequireDefault(require_isBtcAddress());
    var _isISO = _interopRequireDefault(require_isISO8601());
    var _isRFC = _interopRequireDefault(require_isRFC3339());
    var _isISO31661Alpha = _interopRequireDefault(require_isISO31661Alpha2());
    var _isISO31661Alpha2 = _interopRequireDefault(require_isISO31661Alpha3());
    var _isISO2 = _interopRequireDefault(require_isISO4217());
    var _isBase = _interopRequireDefault(require_isBase32());
    var _isBase2 = _interopRequireDefault(require_isBase58());
    var _isBase3 = _interopRequireDefault(require_isBase64());
    var _isDataURI = _interopRequireDefault(require_isDataURI());
    var _isMagnetURI = _interopRequireDefault(require_isMagnetURI());
    var _isMimeType = _interopRequireDefault(require_isMimeType());
    var _isLatLong = _interopRequireDefault(require_isLatLong());
    var _isPostalCode = _interopRequireWildcard(require_isPostalCode());
    var _ltrim = _interopRequireDefault(require_ltrim());
    var _rtrim = _interopRequireDefault(require_rtrim());
    var _trim = _interopRequireDefault(require_trim());
    var _escape = _interopRequireDefault(require_escape());
    var _unescape = _interopRequireDefault(require_unescape());
    var _stripLow = _interopRequireDefault(require_stripLow());
    var _whitelist = _interopRequireDefault(require_whitelist());
    var _blacklist = _interopRequireDefault(require_blacklist());
    var _isWhitelisted = _interopRequireDefault(require_isWhitelisted());
    var _normalizeEmail = _interopRequireDefault(require_normalizeEmail());
    var _isSlug = _interopRequireDefault(require_isSlug());
    var _isLicensePlate = _interopRequireDefault(require_isLicensePlate());
    var _isStrongPassword = _interopRequireDefault(require_isStrongPassword());
    var _isVAT = _interopRequireDefault(require_isVAT());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var version = "13.7.0";
    var validator2 = {
      version,
      toDate: _toDate.default,
      toFloat: _toFloat.default,
      toInt: _toInt.default,
      toBoolean: _toBoolean.default,
      equals: _equals.default,
      contains: _contains.default,
      matches: _matches.default,
      isEmail: _isEmail.default,
      isURL: _isURL.default,
      isMACAddress: _isMACAddress.default,
      isIP: _isIP.default,
      isIPRange: _isIPRange.default,
      isFQDN: _isFQDN.default,
      isBoolean: _isBoolean.default,
      isIBAN: _isIBAN.default,
      isBIC: _isBIC.default,
      isAlpha: _isAlpha.default,
      isAlphaLocales: _isAlpha.locales,
      isAlphanumeric: _isAlphanumeric.default,
      isAlphanumericLocales: _isAlphanumeric.locales,
      isNumeric: _isNumeric.default,
      isPassportNumber: _isPassportNumber.default,
      isPort: _isPort.default,
      isLowercase: _isLowercase.default,
      isUppercase: _isUppercase.default,
      isAscii: _isAscii.default,
      isFullWidth: _isFullWidth.default,
      isHalfWidth: _isHalfWidth.default,
      isVariableWidth: _isVariableWidth.default,
      isMultibyte: _isMultibyte.default,
      isSemVer: _isSemVer.default,
      isSurrogatePair: _isSurrogatePair.default,
      isInt: _isInt.default,
      isIMEI: _isIMEI.default,
      isFloat: _isFloat.default,
      isFloatLocales: _isFloat.locales,
      isDecimal: _isDecimal.default,
      isHexadecimal: _isHexadecimal.default,
      isOctal: _isOctal.default,
      isDivisibleBy: _isDivisibleBy.default,
      isHexColor: _isHexColor.default,
      isRgbColor: _isRgbColor.default,
      isHSL: _isHSL.default,
      isISRC: _isISRC.default,
      isMD5: _isMD.default,
      isHash: _isHash.default,
      isJWT: _isJWT.default,
      isJSON: _isJSON.default,
      isEmpty: _isEmpty.default,
      isLength: _isLength.default,
      isLocale: _isLocale.default,
      isByteLength: _isByteLength.default,
      isUUID: _isUUID.default,
      isMongoId: _isMongoId.default,
      isAfter: _isAfter.default,
      isBefore: _isBefore.default,
      isIn: _isIn.default,
      isCreditCard: _isCreditCard.default,
      isIdentityCard: _isIdentityCard.default,
      isEAN: _isEAN.default,
      isISIN: _isISIN.default,
      isISBN: _isISBN.default,
      isISSN: _isISSN.default,
      isMobilePhone: _isMobilePhone.default,
      isMobilePhoneLocales: _isMobilePhone.locales,
      isPostalCode: _isPostalCode.default,
      isPostalCodeLocales: _isPostalCode.locales,
      isEthereumAddress: _isEthereumAddress.default,
      isCurrency: _isCurrency.default,
      isBtcAddress: _isBtcAddress.default,
      isISO8601: _isISO.default,
      isRFC3339: _isRFC.default,
      isISO31661Alpha2: _isISO31661Alpha.default,
      isISO31661Alpha3: _isISO31661Alpha2.default,
      isISO4217: _isISO2.default,
      isBase32: _isBase.default,
      isBase58: _isBase2.default,
      isBase64: _isBase3.default,
      isDataURI: _isDataURI.default,
      isMagnetURI: _isMagnetURI.default,
      isMimeType: _isMimeType.default,
      isLatLong: _isLatLong.default,
      ltrim: _ltrim.default,
      rtrim: _rtrim.default,
      trim: _trim.default,
      escape: _escape.default,
      unescape: _unescape.default,
      stripLow: _stripLow.default,
      whitelist: _whitelist.default,
      blacklist: _blacklist.default,
      isWhitelisted: _isWhitelisted.default,
      normalizeEmail: _normalizeEmail.default,
      toString,
      isSlug: _isSlug.default,
      isStrongPassword: _isStrongPassword.default,
      isTaxID: _isTaxID.default,
      isDate: _isDate.default,
      isLicensePlate: _isLicensePlate.default,
      isVAT: _isVAT.default,
      ibanLocales: _isIBAN.locales
    };
    var _default = validator2;
    exports.default = _default;
    module.exports = exports.default;
    module.exports.default = exports.default;
  }
});

// src/render.ts
var messages = {
  required: "this field is required",
  email: "invalid email format",
  minLength: "8+ characters",
  hasLowerCase: "lowercase letter",
  hasUpperCase: "uppercase letter",
  hasNumber: "number",
  hasSpecialChar: "special character"
};
var createElement = (message, options) => {
  const DIV = document.createElement("div");
  const dispaly = options.permanent || !options.valid ? "flex" : "none";
  DIV.innerHTML = `
    <div style="
    display: ${dispaly}; 
    align-items: center;
    line-height: var(--line-height)">
        <span style="
        color: ${options?.valid ? "#009E2D" : "#9E0000"};
        margin-right: 4px">${options.valid ? "\u2714\uFE0E" : "\u2718"} </span>
        <span>${message}</span>
    </div>
    `;
  return DIV;
};
var renderValidators = (validationParams, input, options) => {
  if (!input.id) {
    throw "input id is required for validation";
  }
  if (!validationParams.validators)
    return;
  const items = [];
  for (const validator2 in validationParams.validators) {
    if (validator2 in messages) {
      const perm = options?.permanent?.includes(validator2);
      const touched = validationParams.touched;
      if (!perm && !touched)
        continue;
      items.push(
        createElement(messages[validator2], {
          permanent: perm,
          valid: validationParams.validators[validator2]
        })
      );
    }
  }
  const id = `${input.id}_validator`;
  const rendered = document.getElementById(id);
  rendered && rendered.remove();
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "calc(var(--app-spacing) - 3px)";
  wrapper.id = id;
  items.forEach((item) => {
    wrapper.appendChild(item);
  });
  input.insertAdjacentElement("afterend", wrapper);
};

// src/validation.ts
var import_validator = __toESM(require_validator(), 1);
var required = (val) => {
  if (val === void 0 || val === null || val === "")
    return false;
  return true;
};
var email = (val) => import_validator.default.isEmail(val);
var minLength = (length) => (val) => val.length >= length;
var hasUpperCase = (val) => val.toLowerCase() !== val;
var hasLowerCase = (val) => val.toUpperCase() !== val;
var hasNumber = (val) => !!val.match(/\d+/g);
var hasSpecialChar = (val) => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val);
var handleValidators = (val, validators) => {
  if (!import_validator.default)
    return;
  let result = {};
  for (const k in validators) {
    result[k] = validators[k](val);
  }
  return result;
};
function Validation(element, validators, callback) {
  if (element === void 0 || element === null) {
    throw Error("Element can't be undifiend");
  }
  let val, validationBase = {
    value: void 0,
    touched: false,
    get valid() {
      return !Object.values(this.validators).includes(false);
    },
    dirty: false
  };
  val = element.value;
  validationBase.value = element.value;
  validationBase.validators = handleValidators(val, validators);
  callback && callback(validationBase);
  element.addEventListener("blur", () => {
    validationBase.touched = true;
    validationBase.value = element.value;
    callback && callback(validationBase);
  });
  element.addEventListener("input", (e) => {
    const val2 = e.target.value;
    validationBase.dirty = true;
    validationBase.value = element.value;
    validationBase.validators = handleValidators(val2, validators);
    callback && callback(validationBase);
  });
  const makeDirty = () => {
    validationBase.dirty = true;
    validationBase.touched = true;
    callback && callback(validationBase);
  };
  return makeDirty;
}

// src/app.ts
var registerForm = document.querySelector("#register_form");
var emailInput = document.querySelector("#register_email");
var passwordInput = document.querySelector("#register_password");
var formValidation = {
  email: null,
  password: null
};
var makeEmailDirty = Validation(
  emailInput,
  {
    email,
    required
  },
  (validationParams) => {
    formValidation.email = validationParams;
    renderValidators(validationParams, emailInput);
  }
);
var makePasswordDirty = Validation(
  passwordInput,
  {
    required,
    minLength: minLength(8),
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
    hasLowerCase
  },
  (validationParams) => {
    formValidation.password = validationParams;
    renderValidators(validationParams, passwordInput, {
      permanent: ["minLength", "hasLowerCase", "hasUpperCase", "hasNumber", "hasSpecialChar"]
    });
  }
);
var onSubmit = (e) => {
  e.preventDefault();
  if (!formValidation.email.valid || !formValidation.password.valid) {
    makeEmailDirty();
    makePasswordDirty();
    alert("invalid inputs!");
    return;
  }
  alert(
    `success: email: ${formValidation.email.value} | password: ${formValidation.password.value}`
  );
};
registerForm.addEventListener("submit", onSubmit);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9hc3NlcnRTdHJpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9EYXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2FscGhhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRmxvYXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9GbG9hdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi90b0ludC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi90b0Jvb2xlYW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvZXF1YWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3V0aWwvdG9TdHJpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9tZXJnZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9jb250YWlucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9tYXRjaGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQnl0ZUxlbmd0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0ZRRE4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJUC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0VtYWlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzVVJMLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTUFDQWRkcmVzcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lQUmFuZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEYXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQm9vbGVhbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0xvY2FsZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FscGhhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQWxwaGFudW1lcmljLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTnVtZXJpYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1Bhc3Nwb3J0TnVtYmVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzUG9ydC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0xvd2VyY2FzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1VwcGVyY2FzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lNRUkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBc2NpaS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Z1bGxXaWR0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hhbGZXaWR0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1ZhcmlhYmxlV2lkdGguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNdWx0aWJ5dGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9tdWx0aWxpbmVSZWdleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1NlbVZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1N1cnJvZ2F0ZVBhaXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9pbmNsdWRlcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0RlY2ltYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNIZXhhZGVjaW1hbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc09jdGFsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRGl2aXNpYmxlQnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNIZXhDb2xvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1JnYkNvbG9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSFNMLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNSQy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lCQU4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU08zMTY2MUFscGhhMi5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0JJQy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01ENS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hhc2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNCYXNlNjQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNKV1QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNKU09OLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRW1wdHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMZW5ndGguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNVVUlELmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTW9uZ29JZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FmdGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmVmb3JlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNDcmVkaXRDYXJkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSWRlbnRpdHlDYXJkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRUFOLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNJTi5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lTQk4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU1NOLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3V0aWwvYWxnb3JpdGhtcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1RheElELmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTW9iaWxlUGhvbmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNFdGhlcmV1bUFkZHJlc3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNDdXJyZW5jeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0J0Y0FkZHJlc3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJU084NjAxLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzUkZDMzMzOS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0lTTzMxNjYxQWxwaGEzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNPNDIxNy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jhc2UzMi5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jhc2U1OC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0RhdGFVUkkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNYWduZXRVUkkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNNaW1lVHlwZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0xhdExvbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNQb3N0YWxDb2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2x0cmltLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3J0cmltLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3RyaW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvZXNjYXBlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3VuZXNjYXBlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2JsYWNrbGlzdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9zdHJpcExvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi93aGl0ZWxpc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNXaGl0ZWxpc3RlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9ub3JtYWxpemVFbWFpbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1NsdWcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMaWNlbnNlUGxhdGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNTdHJvbmdQYXNzd29yZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1ZBVC5qcyIsICIuLi9ub2RlX21vZHVsZXMvdmFsaWRhdG9yL2luZGV4LmpzIiwgIi4uL3NyYy9yZW5kZXIudHMiLCAiLi4vc3JjL3ZhbGlkYXRpb24udHMiLCAiLi4vc3JjL2FwcC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnRTdHJpbmc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKGlucHV0KSB7XG4gIHZhciBpc1N0cmluZyA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG5cbiAgaWYgKCFpc1N0cmluZykge1xuICAgIHZhciBpbnZhbGlkVHlwZSA9IF90eXBlb2YoaW5wdXQpO1xuXG4gICAgaWYgKGlucHV0ID09PSBudWxsKSBpbnZhbGlkVHlwZSA9ICdudWxsJztlbHNlIGlmIChpbnZhbGlkVHlwZSA9PT0gJ29iamVjdCcpIGludmFsaWRUeXBlID0gaW5wdXQuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmcgYnV0IHJlY2VpdmVkIGEgXCIuY29uY2F0KGludmFsaWRUeXBlKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvRGF0ZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9EYXRlKGRhdGUpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoZGF0ZSk7XG4gIGRhdGUgPSBEYXRlLnBhcnNlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpID8gbmV3IERhdGUoZGF0ZSkgOiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb21tYURlY2ltYWwgPSBleHBvcnRzLmRvdERlY2ltYWwgPSBleHBvcnRzLmZhcnNpTG9jYWxlcyA9IGV4cG9ydHMuYXJhYmljTG9jYWxlcyA9IGV4cG9ydHMuZW5nbGlzaExvY2FsZXMgPSBleHBvcnRzLmRlY2ltYWwgPSBleHBvcnRzLmFscGhhbnVtZXJpYyA9IGV4cG9ydHMuYWxwaGEgPSB2b2lkIDA7XG52YXIgYWxwaGEgPSB7XG4gICdlbi1VUyc6IC9eW0EtWl0rJC9pLFxuICAnYXotQVonOiAvXltBLVZYWVpcdTAwQzdcdTAxOEZcdTAxMUVcdTAxMzBcdTAxMzFcdTAwRDZcdTAxNUVcdTAwRENdKyQvaSxcbiAgJ2JnLUJHJzogL15bXHUwNDEwLVx1MDQyRl0rJC9pLFxuICAnY3MtQ1onOiAvXltBLVpcdTAwQzFcdTAxMENcdTAxMEVcdTAwQzlcdTAxMUFcdTAwQ0RcdTAxNDdcdTAwRDNcdTAxNThcdTAxNjBcdTAxNjRcdTAwREFcdTAxNkVcdTAwRERcdTAxN0RdKyQvaSxcbiAgJ2RhLURLJzogL15bQS1aXHUwMEM2XHUwMEQ4XHUwMEM1XSskL2ksXG4gICdkZS1ERSc6IC9eW0EtWlx1MDBDNFx1MDBENlx1MDBEQ1x1MDBERl0rJC9pLFxuICAnZWwtR1InOiAvXltcdTAzOTEtXHUwM0NFXSskL2ksXG4gICdlcy1FUyc6IC9eW0EtWlx1MDBDMVx1MDBDOVx1MDBDRFx1MDBEMVx1MDBEM1x1MDBEQVx1MDBEQ10rJC9pLFxuICAnZmEtSVInOiAvXltcdTA2MjdcdTA2MjhcdTA2N0VcdTA2MkFcdTA2MkJcdTA2MkNcdTA2ODZcdTA2MkRcdTA2MkVcdTA2MkZcdTA2MzBcdTA2MzFcdTA2MzJcdTA2OThcdTA2MzNcdTA2MzRcdTA2MzVcdTA2MzZcdTA2MzdcdTA2MzhcdTA2MzlcdTA2M0FcdTA2NDFcdTA2NDJcdTA2QTlcdTA2QUZcdTA2NDRcdTA2NDVcdTA2NDZcdTA2NDhcdTA2NDdcdTA2Q0NdKyQvaSxcbiAgJ2ZpLUZJJzogL15bQS1aXHUwMEM1XHUwMEM0XHUwMEQ2XSskL2ksXG4gICdmci1GUic6IC9eW0EtWlx1MDBDMFx1MDBDMlx1MDBDNlx1MDBDN1x1MDBDOVx1MDBDOFx1MDBDQVx1MDBDQlx1MDBDRlx1MDBDRVx1MDBENFx1MDE1Mlx1MDBEOVx1MDBEQlx1MDBEQ1x1MDE3OF0rJC9pLFxuICAnaXQtSVQnOiAvXltBLVpcdTAwQzBcdTAwQzlcdTAwQzhcdTAwQ0NcdTAwQ0VcdTAwRDNcdTAwRDJcdTAwRDldKyQvaSxcbiAgJ25iLU5PJzogL15bQS1aXHUwMEM2XHUwMEQ4XHUwMEM1XSskL2ksXG4gICdubC1OTCc6IC9eW0EtWlx1MDBDMVx1MDBDOVx1MDBDQlx1MDBDRlx1MDBEM1x1MDBENlx1MDBEQ1x1MDBEQV0rJC9pLFxuICAnbm4tTk8nOiAvXltBLVpcdTAwQzZcdTAwRDhcdTAwQzVdKyQvaSxcbiAgJ2h1LUhVJzogL15bQS1aXHUwMEMxXHUwMEM5XHUwMENEXHUwMEQzXHUwMEQ2XHUwMTUwXHUwMERBXHUwMERDXHUwMTcwXSskL2ksXG4gICdwbC1QTCc6IC9eW0EtWlx1MDEwNFx1MDEwNlx1MDExOFx1MDE1QVx1MDE0MVx1MDE0M1x1MDBEM1x1MDE3Qlx1MDE3OV0rJC9pLFxuICAncHQtUFQnOiAvXltBLVpcdTAwQzNcdTAwQzFcdTAwQzBcdTAwQzJcdTAwQzRcdTAwQzdcdTAwQzlcdTAwQ0FcdTAwQ0JcdTAwQ0RcdTAwQ0ZcdTAwRDVcdTAwRDNcdTAwRDRcdTAwRDZcdTAwREFcdTAwRENdKyQvaSxcbiAgJ3J1LVJVJzogL15bXHUwNDEwLVx1MDQyRlx1MDQwMV0rJC9pLFxuICAnc2wtU0knOiAvXltBLVpcdTAxMENcdTAxMDZcdTAxMTBcdTAxNjBcdTAxN0RdKyQvaSxcbiAgJ3NrLVNLJzogL15bQS1aXHUwMEMxXHUwMTBDXHUwMTBFXHUwMEM5XHUwMENEXHUwMTQ3XHUwMEQzXHUwMTYwXHUwMTY0XHUwMERBXHUwMEREXHUwMTdEXHUwMTM5XHUwMTU0XHUwMTNEXHUwMEM0XHUwMEQ0XSskL2ksXG4gICdzci1SU0BsYXRpbic6IC9eW0EtWlx1MDEwQ1x1MDEwNlx1MDE3RFx1MDE2MFx1MDExMF0rJC9pLFxuICAnc3ItUlMnOiAvXltcdTA0MTAtXHUwNDJGXHUwNDAyXHUwNDA4XHUwNDA5XHUwNDBBXHUwNDBCXHUwNDBGXSskL2ksXG4gICdzdi1TRSc6IC9eW0EtWlx1MDBDNVx1MDBDNFx1MDBENl0rJC9pLFxuICAndGgtVEgnOiAvXltcdTBFMDEtXHUwRTUwXFxzXSskL2ksXG4gICd0ci1UUic6IC9eW0EtWlx1MDBDN1x1MDExRVx1MDEzMFx1MDEzMVx1MDBENlx1MDE1RVx1MDBEQ10rJC9pLFxuICAndWstVUEnOiAvXltcdTA0MTAtXHUwNDI5XHUwNDJDXHUwNDJFXHUwNDJGXHUwNDA0SVx1MDQwN1x1MDQ5MFx1MDQ1Nl0rJC9pLFxuICAndmktVk4nOiAvXltBLVpcdTAwQzBcdTAwQzFcdTFFQTBcdTFFQTJcdTAwQzNcdTAwQzJcdTFFQTZcdTFFQTRcdTFFQUNcdTFFQThcdTFFQUFcdTAxMDJcdTFFQjBcdTFFQUVcdTFFQjZcdTFFQjJcdTFFQjRcdTAxMTBcdTAwQzhcdTAwQzlcdTFFQjhcdTFFQkFcdTFFQkNcdTAwQ0FcdTFFQzBcdTFFQkVcdTFFQzZcdTFFQzJcdTFFQzRcdTAwQ0NcdTAwQ0RcdTFFQ0FcdTFFQzhcdTAxMjhcdTAwRDJcdTAwRDNcdTFFQ0NcdTFFQ0VcdTAwRDVcdTAwRDRcdTFFRDJcdTFFRDBcdTFFRDhcdTFFRDRcdTFFRDZcdTAxQTBcdTFFRENcdTFFREFcdTFFRTJcdTFFREVcdTFFRTBcdTAwRDlcdTAwREFcdTFFRTRcdTFFRTZcdTAxNjhcdTAxQUZcdTFFRUFcdTFFRThcdTFFRjBcdTFFRUNcdTFFRUVcdTFFRjJcdTAwRERcdTFFRjRcdTFFRjZcdTFFRjhdKyQvaSxcbiAgJ2t1LUlRJzogL15bXHUwNjI2XHUwNjI3XHUwNjI4XHUwNjdFXHUwNjJBXHUwNjJDXHUwNjg2XHUwNjJEXHUwNjJFXHUwNjJGXHUwNjMxXHUwNjk1XHUwNjMyXHUwNjk4XHUwNjMzXHUwNjM0XHUwNjM5XHUwNjNBXHUwNjQxXHUwNkE0XHUwNjQyXHUwNkE5XHUwNkFGXHUwNjQ0XHUwNkI1XHUwNjQ1XHUwNjQ2XHUwNjQ4XHUwNkM2XHUwNkJFXHUwNkQ1XHUwNkNDXHUwNkNFXHUwNjRBXHUwNjM3XHUwNjI0XHUwNjJCXHUwNjIyXHUwNjI1XHUwNjIzXHUwNjQzXHUwNjM2XHUwNjM1XHUwNjI5XHUwNjM4XHUwNjMwXSskL2ksXG4gIGFyOiAvXltcdTA2MjFcdTA2MjJcdTA2MjNcdTA2MjRcdTA2MjVcdTA2MjZcdTA2MjdcdTA2MjhcdTA2MjlcdTA2MkFcdTA2MkJcdTA2MkNcdTA2MkRcdTA2MkVcdTA2MkZcdTA2MzBcdTA2MzFcdTA2MzJcdTA2MzNcdTA2MzRcdTA2MzVcdTA2MzZcdTA2MzdcdTA2MzhcdTA2MzlcdTA2M0FcdTA2NDFcdTA2NDJcdTA2NDNcdTA2NDRcdTA2NDVcdTA2NDZcdTA2NDdcdTA2NDhcdTA2NDlcdTA2NEFcdTA2NEJcdTA2NENcdTA2NERcdTA2NEVcdTA2NEZcdTA2NTBcdTA2NTFcdTA2NTJcdTA2NzBdKyQvLFxuICBoZTogL15bXHUwNUQwLVx1MDVFQV0rJC8sXG4gIGZhOiAvXlsnXHUwNjIyXHUwNjI3XHUwNjIxXHUwNjIzXHUwNjI0XHUwNjI2XHUwNjI4XHUwNjdFXHUwNjJBXHUwNjJCXHUwNjJDXHUwNjg2XHUwNjJEXHUwNjJFXHUwNjJGXHUwNjMwXHUwNjMxXHUwNjMyXHUwNjk4XHUwNjMzXHUwNjM0XHUwNjM1XHUwNjM2XHUwNjM3XHUwNjM4XHUwNjM5XHUwNjNBXHUwNjQxXHUwNjQyXHUwNkE5XHUwNkFGXHUwNjQ0XHUwNjQ1XHUwNjQ2XHUwNjQ4XHUwNjQ3XHUwNjI5XHUwNkNDJ10rJC9pLFxuICAnaGktSU4nOiAvXltcXHUwOTAwLVxcdTA5NjFdK1tcXHUwOTcyLVxcdTA5N0ZdKiQvaVxufTtcbmV4cG9ydHMuYWxwaGEgPSBhbHBoYTtcbnZhciBhbHBoYW51bWVyaWMgPSB7XG4gICdlbi1VUyc6IC9eWzAtOUEtWl0rJC9pLFxuICAnYXotQVonOiAvXlswLTlBLVZYWVpcdTAwQzdcdTAxOEZcdTAxMUVcdTAxMzBcdTAxMzFcdTAwRDZcdTAxNUVcdTAwRENdKyQvaSxcbiAgJ2JnLUJHJzogL15bMC05XHUwNDEwLVx1MDQyRl0rJC9pLFxuICAnY3MtQ1onOiAvXlswLTlBLVpcdTAwQzFcdTAxMENcdTAxMEVcdTAwQzlcdTAxMUFcdTAwQ0RcdTAxNDdcdTAwRDNcdTAxNThcdTAxNjBcdTAxNjRcdTAwREFcdTAxNkVcdTAwRERcdTAxN0RdKyQvaSxcbiAgJ2RhLURLJzogL15bMC05QS1aXHUwMEM2XHUwMEQ4XHUwMEM1XSskL2ksXG4gICdkZS1ERSc6IC9eWzAtOUEtWlx1MDBDNFx1MDBENlx1MDBEQ1x1MDBERl0rJC9pLFxuICAnZWwtR1InOiAvXlswLTlcdTAzOTEtXHUwM0M5XSskL2ksXG4gICdlcy1FUyc6IC9eWzAtOUEtWlx1MDBDMVx1MDBDOVx1MDBDRFx1MDBEMVx1MDBEM1x1MDBEQVx1MDBEQ10rJC9pLFxuICAnZmktRkknOiAvXlswLTlBLVpcdTAwQzVcdTAwQzRcdTAwRDZdKyQvaSxcbiAgJ2ZyLUZSJzogL15bMC05QS1aXHUwMEMwXHUwMEMyXHUwMEM2XHUwMEM3XHUwMEM5XHUwMEM4XHUwMENBXHUwMENCXHUwMENGXHUwMENFXHUwMEQ0XHUwMTUyXHUwMEQ5XHUwMERCXHUwMERDXHUwMTc4XSskL2ksXG4gICdpdC1JVCc6IC9eWzAtOUEtWlx1MDBDMFx1MDBDOVx1MDBDOFx1MDBDQ1x1MDBDRVx1MDBEM1x1MDBEMlx1MDBEOV0rJC9pLFxuICAnaHUtSFUnOiAvXlswLTlBLVpcdTAwQzFcdTAwQzlcdTAwQ0RcdTAwRDNcdTAwRDZcdTAxNTBcdTAwREFcdTAwRENcdTAxNzBdKyQvaSxcbiAgJ25iLU5PJzogL15bMC05QS1aXHUwMEM2XHUwMEQ4XHUwMEM1XSskL2ksXG4gICdubC1OTCc6IC9eWzAtOUEtWlx1MDBDMVx1MDBDOVx1MDBDQlx1MDBDRlx1MDBEM1x1MDBENlx1MDBEQ1x1MDBEQV0rJC9pLFxuICAnbm4tTk8nOiAvXlswLTlBLVpcdTAwQzZcdTAwRDhcdTAwQzVdKyQvaSxcbiAgJ3BsLVBMJzogL15bMC05QS1aXHUwMTA0XHUwMTA2XHUwMTE4XHUwMTVBXHUwMTQxXHUwMTQzXHUwMEQzXHUwMTdCXHUwMTc5XSskL2ksXG4gICdwdC1QVCc6IC9eWzAtOUEtWlx1MDBDM1x1MDBDMVx1MDBDMFx1MDBDMlx1MDBDNFx1MDBDN1x1MDBDOVx1MDBDQVx1MDBDQlx1MDBDRFx1MDBDRlx1MDBENVx1MDBEM1x1MDBENFx1MDBENlx1MDBEQVx1MDBEQ10rJC9pLFxuICAncnUtUlUnOiAvXlswLTlcdTA0MTAtXHUwNDJGXHUwNDAxXSskL2ksXG4gICdzbC1TSSc6IC9eWzAtOUEtWlx1MDEwQ1x1MDEwNlx1MDExMFx1MDE2MFx1MDE3RF0rJC9pLFxuICAnc2stU0snOiAvXlswLTlBLVpcdTAwQzFcdTAxMENcdTAxMEVcdTAwQzlcdTAwQ0RcdTAxNDdcdTAwRDNcdTAxNjBcdTAxNjRcdTAwREFcdTAwRERcdTAxN0RcdTAxMzlcdTAxNTRcdTAxM0RcdTAwQzRcdTAwRDRdKyQvaSxcbiAgJ3NyLVJTQGxhdGluJzogL15bMC05QS1aXHUwMTBDXHUwMTA2XHUwMTdEXHUwMTYwXHUwMTEwXSskL2ksXG4gICdzci1SUyc6IC9eWzAtOVx1MDQxMC1cdTA0MkZcdTA0MDJcdTA0MDhcdTA0MDlcdTA0MEFcdTA0MEJcdTA0MEZdKyQvaSxcbiAgJ3N2LVNFJzogL15bMC05QS1aXHUwMEM1XHUwMEM0XHUwMEQ2XSskL2ksXG4gICd0aC1USCc6IC9eW1x1MEUwMS1cdTBFNTlcXHNdKyQvaSxcbiAgJ3RyLVRSJzogL15bMC05QS1aXHUwMEM3XHUwMTFFXHUwMTMwXHUwMTMxXHUwMEQ2XHUwMTVFXHUwMERDXSskL2ksXG4gICd1ay1VQSc6IC9eWzAtOVx1MDQxMC1cdTA0MjlcdTA0MkNcdTA0MkVcdTA0MkZcdTA0MDRJXHUwNDA3XHUwNDkwXHUwNDU2XSskL2ksXG4gICdrdS1JUSc6IC9eW1x1MDY2MFx1MDY2MVx1MDY2Mlx1MDY2M1x1MDY2NFx1MDY2NVx1MDY2Nlx1MDY2N1x1MDY2OFx1MDY2OTAtOVx1MDYyNlx1MDYyN1x1MDYyOFx1MDY3RVx1MDYyQVx1MDYyQ1x1MDY4Nlx1MDYyRFx1MDYyRVx1MDYyRlx1MDYzMVx1MDY5NVx1MDYzMlx1MDY5OFx1MDYzM1x1MDYzNFx1MDYzOVx1MDYzQVx1MDY0MVx1MDZBNFx1MDY0Mlx1MDZBOVx1MDZBRlx1MDY0NFx1MDZCNVx1MDY0NVx1MDY0Nlx1MDY0OFx1MDZDNlx1MDZCRVx1MDZENVx1MDZDQ1x1MDZDRVx1MDY0QVx1MDYzN1x1MDYyNFx1MDYyQlx1MDYyMlx1MDYyNVx1MDYyM1x1MDY0M1x1MDYzNlx1MDYzNVx1MDYyOVx1MDYzOFx1MDYzMF0rJC9pLFxuICAndmktVk4nOiAvXlswLTlBLVpcdTAwQzBcdTAwQzFcdTFFQTBcdTFFQTJcdTAwQzNcdTAwQzJcdTFFQTZcdTFFQTRcdTFFQUNcdTFFQThcdTFFQUFcdTAxMDJcdTFFQjBcdTFFQUVcdTFFQjZcdTFFQjJcdTFFQjRcdTAxMTBcdTAwQzhcdTAwQzlcdTFFQjhcdTFFQkFcdTFFQkNcdTAwQ0FcdTFFQzBcdTFFQkVcdTFFQzZcdTFFQzJcdTFFQzRcdTAwQ0NcdTAwQ0RcdTFFQ0FcdTFFQzhcdTAxMjhcdTAwRDJcdTAwRDNcdTFFQ0NcdTFFQ0VcdTAwRDVcdTAwRDRcdTFFRDJcdTFFRDBcdTFFRDhcdTFFRDRcdTFFRDZcdTAxQTBcdTFFRENcdTFFREFcdTFFRTJcdTFFREVcdTFFRTBcdTAwRDlcdTAwREFcdTFFRTRcdTFFRTZcdTAxNjhcdTAxQUZcdTFFRUFcdTFFRThcdTFFRjBcdTFFRUNcdTFFRUVcdTFFRjJcdTAwRERcdTFFRjRcdTFFRjZcdTFFRjhdKyQvaSxcbiAgYXI6IC9eW1x1MDY2MFx1MDY2MVx1MDY2Mlx1MDY2M1x1MDY2NFx1MDY2NVx1MDY2Nlx1MDY2N1x1MDY2OFx1MDY2OTAtOVx1MDYyMVx1MDYyMlx1MDYyM1x1MDYyNFx1MDYyNVx1MDYyNlx1MDYyN1x1MDYyOFx1MDYyOVx1MDYyQVx1MDYyQlx1MDYyQ1x1MDYyRFx1MDYyRVx1MDYyRlx1MDYzMFx1MDYzMVx1MDYzMlx1MDYzM1x1MDYzNFx1MDYzNVx1MDYzNlx1MDYzN1x1MDYzOFx1MDYzOVx1MDYzQVx1MDY0MVx1MDY0Mlx1MDY0M1x1MDY0NFx1MDY0NVx1MDY0Nlx1MDY0N1x1MDY0OFx1MDY0OVx1MDY0QVx1MDY0Qlx1MDY0Q1x1MDY0RFx1MDY0RVx1MDY0Rlx1MDY1MFx1MDY1MVx1MDY1Mlx1MDY3MF0rJC8sXG4gIGhlOiAvXlswLTlcdTA1RDAtXHUwNUVBXSskLyxcbiAgZmE6IC9eWycwLTlcdTA2MjJcdTA2MjdcdTA2MjFcdTA2MjNcdTA2MjRcdTA2MjZcdTA2MjhcdTA2N0VcdTA2MkFcdTA2MkJcdTA2MkNcdTA2ODZcdTA2MkRcdTA2MkVcdTA2MkZcdTA2MzBcdTA2MzFcdTA2MzJcdTA2OThcdTA2MzNcdTA2MzRcdTA2MzVcdTA2MzZcdTA2MzdcdTA2MzhcdTA2MzlcdTA2M0FcdTA2NDFcdTA2NDJcdTA2QTlcdTA2QUZcdTA2NDRcdTA2NDVcdTA2NDZcdTA2NDhcdTA2NDdcdTA2MjlcdTA2Q0NcdTA2RjFcdTA2RjJcdTA2RjNcdTA2RjRcdTA2RjVcdTA2RjZcdTA2RjdcdTA2RjhcdTA2RjlcdTA2RjAnXSskL2ksXG4gICdoaS1JTic6IC9eW1xcdTA5MDAtXFx1MDk2M10rW1xcdTA5NjYtXFx1MDk3Rl0qJC9pXG59O1xuZXhwb3J0cy5hbHBoYW51bWVyaWMgPSBhbHBoYW51bWVyaWM7XG52YXIgZGVjaW1hbCA9IHtcbiAgJ2VuLVVTJzogJy4nLFxuICBhcjogJ1x1MDY2Qidcbn07XG5leHBvcnRzLmRlY2ltYWwgPSBkZWNpbWFsO1xudmFyIGVuZ2xpc2hMb2NhbGVzID0gWydBVScsICdHQicsICdISycsICdJTicsICdOWicsICdaQScsICdaTSddO1xuZXhwb3J0cy5lbmdsaXNoTG9jYWxlcyA9IGVuZ2xpc2hMb2NhbGVzO1xuXG5mb3IgKHZhciBsb2NhbGUsIGkgPSAwOyBpIDwgZW5nbGlzaExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgbG9jYWxlID0gXCJlbi1cIi5jb25jYXQoZW5nbGlzaExvY2FsZXNbaV0pO1xuICBhbHBoYVtsb2NhbGVdID0gYWxwaGFbJ2VuLVVTJ107XG4gIGFscGhhbnVtZXJpY1tsb2NhbGVdID0gYWxwaGFudW1lcmljWydlbi1VUyddO1xuICBkZWNpbWFsW2xvY2FsZV0gPSBkZWNpbWFsWydlbi1VUyddO1xufSAvLyBTb3VyY2U6IGh0dHA6Ly93d3cubG9jYWxlcGxhbmV0LmNvbS9qYXZhL1xuXG5cbnZhciBhcmFiaWNMb2NhbGVzID0gWydBRScsICdCSCcsICdEWicsICdFRycsICdJUScsICdKTycsICdLVycsICdMQicsICdMWScsICdNQScsICdRTScsICdRQScsICdTQScsICdTRCcsICdTWScsICdUTicsICdZRSddO1xuZXhwb3J0cy5hcmFiaWNMb2NhbGVzID0gYXJhYmljTG9jYWxlcztcblxuZm9yICh2YXIgX2xvY2FsZSwgX2kgPSAwOyBfaSA8IGFyYWJpY0xvY2FsZXMubGVuZ3RoOyBfaSsrKSB7XG4gIF9sb2NhbGUgPSBcImFyLVwiLmNvbmNhdChhcmFiaWNMb2NhbGVzW19pXSk7XG4gIGFscGhhW19sb2NhbGVdID0gYWxwaGEuYXI7XG4gIGFscGhhbnVtZXJpY1tfbG9jYWxlXSA9IGFscGhhbnVtZXJpYy5hcjtcbiAgZGVjaW1hbFtfbG9jYWxlXSA9IGRlY2ltYWwuYXI7XG59XG5cbnZhciBmYXJzaUxvY2FsZXMgPSBbJ0lSJywgJ0FGJ107XG5leHBvcnRzLmZhcnNpTG9jYWxlcyA9IGZhcnNpTG9jYWxlcztcblxuZm9yICh2YXIgX2xvY2FsZTIsIF9pMiA9IDA7IF9pMiA8IGZhcnNpTG9jYWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gIF9sb2NhbGUyID0gXCJmYS1cIi5jb25jYXQoZmFyc2lMb2NhbGVzW19pMl0pO1xuICBhbHBoYW51bWVyaWNbX2xvY2FsZTJdID0gYWxwaGFudW1lcmljLmZhO1xuICBkZWNpbWFsW19sb2NhbGUyXSA9IGRlY2ltYWwuYXI7XG59IC8vIFNvdXJjZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVjaW1hbF9tYXJrXG5cblxudmFyIGRvdERlY2ltYWwgPSBbJ2FyLUVHJywgJ2FyLUxCJywgJ2FyLUxZJ107XG5leHBvcnRzLmRvdERlY2ltYWwgPSBkb3REZWNpbWFsO1xudmFyIGNvbW1hRGVjaW1hbCA9IFsnYmctQkcnLCAnY3MtQ1onLCAnZGEtREsnLCAnZGUtREUnLCAnZWwtR1InLCAnZW4tWk0nLCAnZXMtRVMnLCAnZnItQ0EnLCAnZnItRlInLCAnaWQtSUQnLCAnaXQtSVQnLCAna3UtSVEnLCAnaGktSU4nLCAnaHUtSFUnLCAnbmItTk8nLCAnbm4tTk8nLCAnbmwtTkwnLCAncGwtUEwnLCAncHQtUFQnLCAncnUtUlUnLCAnc2wtU0knLCAnc3ItUlNAbGF0aW4nLCAnc3ItUlMnLCAnc3YtU0UnLCAndHItVFInLCAndWstVUEnLCAndmktVk4nXTtcbmV4cG9ydHMuY29tbWFEZWNpbWFsID0gY29tbWFEZWNpbWFsO1xuXG5mb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBkb3REZWNpbWFsLmxlbmd0aDsgX2kzKyspIHtcbiAgZGVjaW1hbFtkb3REZWNpbWFsW19pM11dID0gZGVjaW1hbFsnZW4tVVMnXTtcbn1cblxuZm9yICh2YXIgX2k0ID0gMDsgX2k0IDwgY29tbWFEZWNpbWFsLmxlbmd0aDsgX2k0KyspIHtcbiAgZGVjaW1hbFtjb21tYURlY2ltYWxbX2k0XV0gPSAnLCc7XG59XG5cbmFscGhhWydmci1DQSddID0gYWxwaGFbJ2ZyLUZSJ107XG5hbHBoYW51bWVyaWNbJ2ZyLUNBJ10gPSBhbHBoYW51bWVyaWNbJ2ZyLUZSJ107XG5hbHBoYVsncHQtQlInXSA9IGFscGhhWydwdC1QVCddO1xuYWxwaGFudW1lcmljWydwdC1CUiddID0gYWxwaGFudW1lcmljWydwdC1QVCddO1xuZGVjaW1hbFsncHQtQlInXSA9IGRlY2ltYWxbJ3B0LVBUJ107IC8vIHNlZSAjODYyXG5cbmFscGhhWydwbC1QbCddID0gYWxwaGFbJ3BsLVBMJ107XG5hbHBoYW51bWVyaWNbJ3BsLVBsJ10gPSBhbHBoYW51bWVyaWNbJ3BsLVBMJ107XG5kZWNpbWFsWydwbC1QbCddID0gZGVjaW1hbFsncGwtUEwnXTsgLy8gc2VlICMxNDU1XG5cbmFscGhhWydmYS1BRiddID0gYWxwaGEuZmE7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGbG9hdDtcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0Zsb2F0KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGZsb2F0ID0gbmV3IFJlZ0V4cChcIl4oPzpbLStdKT8oPzpbMC05XSspPyg/OlxcXFxcIi5jb25jYXQob3B0aW9ucy5sb2NhbGUgPyBfYWxwaGEuZGVjaW1hbFtvcHRpb25zLmxvY2FsZV0gOiAnLicsIFwiWzAtOV0qKT8oPzpbZUVdW1xcXFwrXFxcXC1dPyg/OlswLTldKykpPyRcIikpO1xuXG4gIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gJy4nIHx8IHN0ciA9PT0gJy0nIHx8IHN0ciA9PT0gJysnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChzdHIucmVwbGFjZSgnLCcsICcuJykpO1xuICByZXR1cm4gZmxvYXQudGVzdChzdHIpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWluJykgfHwgdmFsdWUgPj0gb3B0aW9ucy5taW4pICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWF4JykgfHwgdmFsdWUgPD0gb3B0aW9ucy5tYXgpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbHQnKSB8fCB2YWx1ZSA8IG9wdGlvbnMubHQpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnZ3QnKSB8fCB2YWx1ZSA+IG9wdGlvbnMuZ3QpO1xufVxuXG52YXIgbG9jYWxlcyA9IE9iamVjdC5rZXlzKF9hbHBoYS5kZWNpbWFsKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9GbG9hdDtcblxudmFyIF9pc0Zsb2F0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0Zsb2F0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9GbG9hdChzdHIpIHtcbiAgaWYgKCEoMCwgX2lzRmxvYXQuZGVmYXVsdCkoc3RyKSkgcmV0dXJuIE5hTjtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvSW50O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0ludChzdHIsIHJhZGl4KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBwYXJzZUludChzdHIsIHJhZGl4IHx8IDEwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQm9vbGVhbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9Cb29sZWFuKHN0ciwgc3RyaWN0KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKHN0cmljdCkge1xuICAgIHJldHVybiBzdHIgPT09ICcxJyB8fCAvXnRydWUkL2kudGVzdChzdHIpO1xuICB9XG5cbiAgcmV0dXJuIHN0ciAhPT0gJzAnICYmICEvXmZhbHNlJC9pLnRlc3Qoc3RyKSAmJiBzdHIgIT09ICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXF1YWxzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlcXVhbHMoc3RyLCBjb21wYXJpc29uKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIgPT09IGNvbXBhcmlzb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b1N0cmluZztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiB0b1N0cmluZyhpbnB1dCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgPT09ICdvYmplY3QnICYmIGlucHV0ICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dC50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dCA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbnB1dCA9PT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnIHx8IGlzTmFOKGlucHV0KSAmJiAhaW5wdXQubGVuZ3RoKSB7XG4gICAgaW5wdXQgPSAnJztcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcoaW5wdXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRlZmF1bHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9ialtrZXldID0gZGVmYXVsdHNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY29udGFpbnM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfdG9TdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvdG9TdHJpbmdcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bENvbnRhaW5zT3B0aW9ucyA9IHtcbiAgaWdub3JlQ2FzZTogZmFsc2UsXG4gIG1pbk9jY3VycmVuY2VzOiAxXG59O1xuXG5mdW5jdGlvbiBjb250YWlucyhzdHIsIGVsZW0sIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsQ29udGFpbnNPcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnNwbGl0KCgwLCBfdG9TdHJpbmcuZGVmYXVsdCkoZWxlbSkudG9Mb3dlckNhc2UoKSkubGVuZ3RoID4gb3B0aW9ucy5taW5PY2N1cnJlbmNlcztcbiAgfVxuXG4gIHJldHVybiBzdHIuc3BsaXQoKDAsIF90b1N0cmluZy5kZWZhdWx0KShlbGVtKSkubGVuZ3RoID4gb3B0aW9ucy5taW5PY2N1cnJlbmNlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoZXM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG1hdGNoZXMoc3RyLCBwYXR0ZXJuLCBtb2RpZmllcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhdHRlcm4pICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4sIG1vZGlmaWVycyk7XG4gIH1cblxuICByZXR1cm4gcGF0dGVybi50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0J5dGVMZW5ndGg7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5mdW5jdGlvbiBpc0J5dGVMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW47XG4gIHZhciBtYXg7XG5cbiAgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNCeXRlTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdO1xuICAgIG1heCA9IGFyZ3VtZW50c1syXTtcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmNvZGVVUkkoc3RyKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ZRRE47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9mcWRuX29wdGlvbnMgPSB7XG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X251bWVyaWNfdGxkOiBmYWxzZSxcbiAgYWxsb3dfd2lsZGNhcmQ6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0ZRRE4oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZnFkbl9vcHRpb25zKTtcbiAgLyogUmVtb3ZlIHRoZSBvcHRpb25hbCB0cmFpbGluZyBkb3QgYmVmb3JlIGNoZWNraW5nIHZhbGlkaXR5ICovXG5cbiAgaWYgKG9wdGlvbnMuYWxsb3dfdHJhaWxpbmdfZG90ICYmIHN0cltzdHIubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICB9XG4gIC8qIFJlbW92ZSB0aGUgb3B0aW9uYWwgd2lsZGNhcmQgYmVmb3JlIGNoZWNraW5nIHZhbGlkaXR5ICovXG5cblxuICBpZiAob3B0aW9ucy5hbGxvd193aWxkY2FyZCA9PT0gdHJ1ZSAmJiBzdHIuaW5kZXhPZignKi4nKSA9PT0gMCkge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMik7XG4gIH1cblxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKTtcbiAgdmFyIHRsZCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuXG4gIGlmIChvcHRpb25zLnJlcXVpcmVfdGxkKSB7XG4gICAgLy8gZGlzYWxsb3cgZnFkbnMgd2l0aG91dCB0bGRcbiAgICBpZiAocGFydHMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghL14oW2EtelxcdTAwQTEtXFx1MDBBOFxcdTAwQUEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl17Mix9fHhuW2EtejAtOS1dezIsfSkkL2kudGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBkaXNhbGxvdyBzcGFjZXNcblxuXG4gICAgaWYgKC9cXHMvLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSAvLyByZWplY3QgbnVtZXJpYyBUTERzXG5cblxuICBpZiAoIW9wdGlvbnMuYWxsb3dfbnVtZXJpY190bGQgJiYgL15cXGQrJC8udGVzdCh0bGQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmV2ZXJ5KGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgaWYgKHBhcnQubGVuZ3RoID4gNjMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIS9eW2Etel9cXHUwMGExLVxcdWZmZmYwLTktXSskL2kudGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuXG5cbiAgICBpZiAoL1tcXHVmZjAxLVxcdWZmNWVdLy50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBkaXNhbGxvdyBwYXJ0cyBzdGFydGluZyBvciBlbmRpbmcgd2l0aCBoeXBoZW5cblxuXG4gICAgaWYgKC9eLXwtJC8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5hbGxvd191bmRlcnNjb3JlcyAmJiAvXy8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuMTEuMy4gIEV4YW1wbGVzXG5cbiAgIFRoZSBmb2xsb3dpbmcgYWRkcmVzc2VzXG5cbiAgICAgICAgICAgICBmZTgwOjoxMjM0IChvbiB0aGUgMXN0IGxpbmsgb2YgdGhlIG5vZGUpXG4gICAgICAgICAgICAgZmYwMjo6NTY3OCAob24gdGhlIDV0aCBsaW5rIG9mIHRoZSBub2RlKVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMgKG9uIHRoZSAxMHRoIG9yZ2FuaXphdGlvbiBvZiB0aGUgbm9kZSlcblxuICAgd291bGQgYmUgcmVwcmVzZW50ZWQgYXMgZm9sbG93czpcblxuICAgICAgICAgICAgIGZlODA6OjEyMzQlMVxuICAgICAgICAgICAgIGZmMDI6OjU2NzglNVxuICAgICAgICAgICAgIGZmMDg6OjlhYmMlMTBcblxuICAgKEhlcmUgd2UgYXNzdW1lIGEgbmF0dXJhbCB0cmFuc2xhdGlvbiBmcm9tIGEgem9uZSBpbmRleCB0byB0aGVcbiAgIDx6b25lX2lkPiBwYXJ0LCB3aGVyZSB0aGUgTnRoIHpvbmUgb2YgYW55IHNjb3BlIGlzIHRyYW5zbGF0ZWQgaW50b1xuICAgXCJOXCIuKVxuXG4gICBJZiB3ZSB1c2UgaW50ZXJmYWNlIG5hbWVzIGFzIDx6b25lX2lkPiwgdGhvc2UgYWRkcmVzc2VzIGNvdWxkIGFsc28gYmVcbiAgIHJlcHJlc2VudGVkIGFzIGZvbGxvd3M6XG5cbiAgICAgICAgICAgIGZlODA6OjEyMzQlbmUwXG4gICAgICAgICAgICBmZjAyOjo1Njc4JXB2YzEuM1xuICAgICAgICAgICAgZmYwODo6OWFiYyVpbnRlcmZhY2UxMFxuXG4gICB3aGVyZSB0aGUgaW50ZXJmYWNlIFwibmUwXCIgYmVsb25ncyB0byB0aGUgMXN0IGxpbmssIFwicHZjMS4zXCIgYmVsb25nc1xuICAgdG8gdGhlIDV0aCBsaW5rLCBhbmQgXCJpbnRlcmZhY2UxMFwiIGJlbG9uZ3MgdG8gdGhlIDEwdGggb3JnYW5pemF0aW9uLlxuICogKiAqL1xudmFyIElQdjRTZWdtZW50Rm9ybWF0ID0gJyg/OlswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSknO1xudmFyIElQdjRBZGRyZXNzRm9ybWF0ID0gXCIoXCIuY29uY2F0KElQdjRTZWdtZW50Rm9ybWF0LCBcIlsuXSl7M31cIikuY29uY2F0KElQdjRTZWdtZW50Rm9ybWF0KTtcbnZhciBJUHY0QWRkcmVzc1JlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KElQdjRBZGRyZXNzRm9ybWF0LCBcIiRcIikpO1xudmFyIElQdjZTZWdtZW50Rm9ybWF0ID0gJyg/OlswLTlhLWZBLUZdezEsNH0pJztcbnZhciBJUHY2QWRkcmVzc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oJyArIFwiKD86XCIuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIjopezd9KD86XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCJ8Oil8XCIpICsgXCIoPzpcIi5jb25jYXQoSVB2NlNlZ21lbnRGb3JtYXQsIFwiOil7Nn0oPzpcIikuY29uY2F0KElQdjRBZGRyZXNzRm9ybWF0LCBcInw6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCJ8Oil8XCIpICsgXCIoPzpcIi5jb25jYXQoSVB2NlNlZ21lbnRGb3JtYXQsIFwiOil7NX0oPzo6XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSwyfXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXs0fSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsMX06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSwzfXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXszfSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsMn06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSw0fXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXsyfSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsM306XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSw1fXw6KXxcIikgKyBcIig/OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCI6KXsxfSg/Oig6XCIpLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsNH06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KDpcIikuY29uY2F0KElQdjZTZWdtZW50Rm9ybWF0LCBcIil7MSw2fXw6KXxcIikgKyBcIig/OjooKD86OlwiLmNvbmNhdChJUHY2U2VnbWVudEZvcm1hdCwgXCIpezAsNX06XCIpLmNvbmNhdChJUHY0QWRkcmVzc0Zvcm1hdCwgXCJ8KD86OlwiKS5jb25jYXQoSVB2NlNlZ21lbnRGb3JtYXQsIFwiKXsxLDd9fDopKVwiKSArICcpKCVbMC05YS16QS1aLS46XXsxLH0pPyQnKTtcblxuZnVuY3Rpb24gaXNJUChzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pO1xuXG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lQKHN0ciwgNCkgfHwgaXNJUChzdHIsIDYpO1xuICB9XG5cbiAgaWYgKHZlcnNpb24gPT09ICc0Jykge1xuICAgIGlmICghSVB2NEFkZHJlc3NSZWdFeHAudGVzdChzdHIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0c1szXSA8PSAyNTU7XG4gIH1cblxuICBpZiAodmVyc2lvbiA9PT0gJzYnKSB7XG4gICAgcmV0dXJuICEhSVB2NkFkZHJlc3NSZWdFeHAudGVzdChzdHIpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbWFpbDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbnZhciBfaXNCeXRlTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0J5dGVMZW5ndGhcIikpO1xuXG52YXIgX2lzRlFETiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNGUUROXCIpKTtcblxudmFyIF9pc0lQID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0lQXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfZW1haWxfb3B0aW9ucyA9IHtcbiAgYWxsb3dfZGlzcGxheV9uYW1lOiBmYWxzZSxcbiAgcmVxdWlyZV9kaXNwbGF5X25hbWU6IGZhbHNlLFxuICBhbGxvd191dGY4X2xvY2FsX3BhcnQ6IHRydWUsXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBibGFja2xpc3RlZF9jaGFyczogJycsXG4gIGlnbm9yZV9tYXhfbGVuZ3RoOiBmYWxzZSxcbiAgaG9zdF9ibGFja2xpc3Q6IFtdXG59O1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbnZhciBzcGxpdE5hbWVBZGRyZXNzID0gL14oW15cXHgwMC1cXHgxRlxceDdGLVxceDlGXFxjWF0rKTwvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBnbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkXSskLztcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbnZhciBkZWZhdWx0TWF4RW1haWxMZW5ndGggPSAyNTQ7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbi8qKlxuICogVmFsaWRhdGUgZGlzcGxheSBuYW1lIGFjY29yZGluZyB0byB0aGUgUkZDMjgyMjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjYXBwZW5kaXgtQS4xLjJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkaXNwbGF5X25hbWVcbiAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZURpc3BsYXlOYW1lKGRpc3BsYXlfbmFtZSkge1xuICB2YXIgZGlzcGxheV9uYW1lX3dpdGhvdXRfcXVvdGVzID0gZGlzcGxheV9uYW1lLnJlcGxhY2UoL15cIiguKylcIiQvLCAnJDEnKTsgLy8gZGlzcGxheSBuYW1lIHdpdGggb25seSBzcGFjZXMgaXMgbm90IHZhbGlkXG5cbiAgaWYgKCFkaXNwbGF5X25hbWVfd2l0aG91dF9xdW90ZXMudHJpbSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIGNoZWNrIHdoZXRoZXIgZGlzcGxheSBuYW1lIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVyXG5cblxuICB2YXIgY29udGFpbnNfaWxsZWdhbCA9IC9bXFwuXCI7PD5dLy50ZXN0KGRpc3BsYXlfbmFtZV93aXRob3V0X3F1b3Rlcyk7XG5cbiAgaWYgKGNvbnRhaW5zX2lsbGVnYWwpIHtcbiAgICAvLyBpZiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMsXG4gICAgLy8gbXVzdCB0byBiZSBlbmNsb3NlZCBpbiBkb3VibGUtcXVvdGVzLCBvdGhlcndpc2UgaXQncyBub3QgYSB2YWxpZCBkaXNwbGF5IG5hbWVcbiAgICBpZiAoZGlzcGxheV9uYW1lX3dpdGhvdXRfcXVvdGVzID09PSBkaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIHRoZSBxdW90ZXMgaW4gZGlzcGxheSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBjaGFyYWN0ZXIgc3ltYm9sIFxcXG5cblxuICAgIHZhciBhbGxfc3RhcnRfd2l0aF9iYWNrX3NsYXNoID0gZGlzcGxheV9uYW1lX3dpdGhvdXRfcXVvdGVzLnNwbGl0KCdcIicpLmxlbmd0aCA9PT0gZGlzcGxheV9uYW1lX3dpdGhvdXRfcXVvdGVzLnNwbGl0KCdcXFxcXCInKS5sZW5ndGg7XG5cbiAgICBpZiAoIWFsbF9zdGFydF93aXRoX2JhY2tfc2xhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNFbWFpbChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9lbWFpbF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSB8fCBvcHRpb25zLmFsbG93X2Rpc3BsYXlfbmFtZSkge1xuICAgIHZhciBkaXNwbGF5X2VtYWlsID0gc3RyLm1hdGNoKHNwbGl0TmFtZUFkZHJlc3MpO1xuXG4gICAgaWYgKGRpc3BsYXlfZW1haWwpIHtcbiAgICAgIHZhciBkaXNwbGF5X25hbWUgPSBkaXNwbGF5X2VtYWlsWzFdOyAvLyBSZW1vdmUgZGlzcGxheSBuYW1lIGFuZCBhbmdsZSBicmFja2V0cyB0byBnZXQgZW1haWwgYWRkcmVzc1xuICAgICAgLy8gQ2FuIGJlIGRvbmUgaW4gdGhlIHJlZ2V4IGJ1dCB3aWxsIGludHJvZHVjZSBhIFJlRE9TIChTZWUgICMxNTk3IGZvciBtb3JlIGluZm8pXG5cbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGRpc3BsYXlfbmFtZSwgJycpLnJlcGxhY2UoLyhePHw+JCkvZywgJycpOyAvLyBzb21ldGltZXMgbmVlZCB0byB0cmltIHRoZSBsYXN0IHNwYWNlIHRvIGdldCB0aGUgZGlzcGxheSBuYW1lXG4gICAgICAvLyBiZWNhdXNlIHRoZXJlIG1heSBiZSBhIHNwYWNlIGJldHdlZW4gZGlzcGxheSBuYW1lIGFuZCBlbWFpbCBhZGRyZXNzXG4gICAgICAvLyBlZy4gbXluYW1lIDxhZGRyZXNzQGdtYWlsLmNvbT5cbiAgICAgIC8vIHRoZSBkaXNwbGF5IG5hbWUgaXMgYG15bmFtZWAgaW5zdGVhZCBvZiBgbXluYW1lIGAsIHNvIG5lZWQgdG8gdHJpbSB0aGUgbGFzdCBzcGFjZVxuXG4gICAgICBpZiAoZGlzcGxheV9uYW1lLmVuZHNXaXRoKCcgJykpIHtcbiAgICAgICAgZGlzcGxheV9uYW1lID0gZGlzcGxheV9uYW1lLnN1YnN0cigwLCBkaXNwbGF5X25hbWUubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWRhdGVEaXNwbGF5TmFtZShkaXNwbGF5X25hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW9wdGlvbnMuaWdub3JlX21heF9sZW5ndGggJiYgc3RyLmxlbmd0aCA+IGRlZmF1bHRNYXhFbWFpbExlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnQCcpO1xuICB2YXIgZG9tYWluID0gcGFydHMucG9wKCk7XG4gIHZhciBsb3dlcl9kb21haW4gPSBkb21haW4udG9Mb3dlckNhc2UoKTtcblxuICBpZiAob3B0aW9ucy5ob3N0X2JsYWNrbGlzdC5pbmNsdWRlcyhsb3dlcl9kb21haW4pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHVzZXIgPSBwYXJ0cy5qb2luKCdAJyk7XG5cbiAgaWYgKG9wdGlvbnMuZG9tYWluX3NwZWNpZmljX3ZhbGlkYXRpb24gJiYgKGxvd2VyX2RvbWFpbiA9PT0gJ2dtYWlsLmNvbScgfHwgbG93ZXJfZG9tYWluID09PSAnZ29vZ2xlbWFpbC5jb20nKSkge1xuICAgIC8qXG4gICAgICBQcmV2aW91c2x5IHdlIHJlbW92ZWQgZG90cyBmb3IgZ21haWwgYWRkcmVzc2VzIGJlZm9yZSB2YWxpZGF0aW5nLlxuICAgICAgVGhpcyB3YXMgcmVtb3ZlZCBiZWNhdXNlIGl0IGFsbG93cyBgbXVsdGlwbGUuLmRvdHNAZ21haWwuY29tYFxuICAgICAgdG8gYmUgcmVwb3J0ZWQgYXMgdmFsaWQsIGJ1dCBpdCBpcyBub3QuXG4gICAgICBHbWFpbCBvbmx5IG5vcm1hbGl6ZXMgc2luZ2xlIGRvdHMsIHJlbW92aW5nIHRoZW0gZnJvbSBoZXJlIGlzIHBvaW50bGVzcyxcbiAgICAgIHNob3VsZCBiZSBkb25lIGluIG5vcm1hbGl6ZUVtYWlsXG4gICAgKi9cbiAgICB1c2VyID0gdXNlci50b0xvd2VyQ2FzZSgpOyAvLyBSZW1vdmluZyBzdWItYWRkcmVzcyBmcm9tIHVzZXJuYW1lIGJlZm9yZSBnbWFpbCB2YWxpZGF0aW9uXG5cbiAgICB2YXIgdXNlcm5hbWUgPSB1c2VyLnNwbGl0KCcrJylbMF07IC8vIERvdHMgYXJlIG5vdCBpbmNsdWRlZCBpbiBnbWFpbCBsZW5ndGggcmVzdHJpY3Rpb25cblxuICAgIGlmICghKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkodXNlcm5hbWUucmVwbGFjZSgvXFwuL2csICcnKSwge1xuICAgICAgbWluOiA2LFxuICAgICAgbWF4OiAzMFxuICAgIH0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF91c2VyX3BhcnRzID0gdXNlcm5hbWUuc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3VzZXJfcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZ21haWxVc2VyUGFydC50ZXN0KF91c2VyX3BhcnRzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMuaWdub3JlX21heF9sZW5ndGggPT09IGZhbHNlICYmICghKDAsIF9pc0J5dGVMZW5ndGguZGVmYXVsdCkodXNlciwge1xuICAgIG1heDogNjRcbiAgfSkgfHwgISgwLCBfaXNCeXRlTGVuZ3RoLmRlZmF1bHQpKGRvbWFpbiwge1xuICAgIG1heDogMjU0XG4gIH0pKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0ZRRE4uZGVmYXVsdCkoZG9tYWluLCB7XG4gICAgcmVxdWlyZV90bGQ6IG9wdGlvbnMucmVxdWlyZV90bGRcbiAgfSkpIHtcbiAgICBpZiAoIW9wdGlvbnMuYWxsb3dfaXBfZG9tYWluKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCEoMCwgX2lzSVAuZGVmYXVsdCkoZG9tYWluKSkge1xuICAgICAgaWYgKCFkb21haW4uc3RhcnRzV2l0aCgnWycpIHx8ICFkb21haW4uZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBub0JyYWNrZXRkb21haW4gPSBkb21haW4uc3Vic3RyKDEsIGRvbWFpbi5sZW5ndGggLSAyKTtcblxuICAgICAgaWYgKG5vQnJhY2tldGRvbWFpbi5sZW5ndGggPT09IDAgfHwgISgwLCBfaXNJUC5kZWZhdWx0KShub0JyYWNrZXRkb21haW4pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodXNlclswXSA9PT0gJ1wiJykge1xuICAgIHVzZXIgPSB1c2VyLnNsaWNlKDEsIHVzZXIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gcXVvdGVkRW1haWxVc2VyVXRmOC50ZXN0KHVzZXIpIDogcXVvdGVkRW1haWxVc2VyLnRlc3QodXNlcik7XG4gIH1cblxuICB2YXIgcGF0dGVybiA9IG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gZW1haWxVc2VyVXRmOFBhcnQgOiBlbWFpbFVzZXJQYXJ0O1xuICB2YXIgdXNlcl9wYXJ0cyA9IHVzZXIuc3BsaXQoJy4nKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdXNlcl9wYXJ0cy5sZW5ndGg7IF9pKyspIHtcbiAgICBpZiAoIXBhdHRlcm4udGVzdCh1c2VyX3BhcnRzW19pXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucy5ibGFja2xpc3RlZF9jaGFycykge1xuICAgIGlmICh1c2VyLnNlYXJjaChuZXcgUmVnRXhwKFwiW1wiLmNvbmNhdChvcHRpb25zLmJsYWNrbGlzdGVkX2NoYXJzLCBcIl0rXCIpLCAnZycpKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVUkw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfaXNGUUROID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0ZRRE5cIikpO1xuXG52YXIgX2lzSVAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzSVBcIikpO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuLypcbm9wdGlvbnMgZm9yIGlzVVJMIG1ldGhvZFxuXG5yZXF1aXJlX3Byb3RvY29sIC0gaWYgc2V0IGFzIHRydWUgaXNVUkwgd2lsbCByZXR1cm4gZmFsc2UgaWYgcHJvdG9jb2wgaXMgbm90IHByZXNlbnQgaW4gdGhlIFVSTFxucmVxdWlyZV92YWxpZF9wcm90b2NvbCAtIGlzVVJMIHdpbGwgY2hlY2sgaWYgdGhlIFVSTCdzIHByb3RvY29sIGlzIHByZXNlbnQgaW4gdGhlIHByb3RvY29scyBvcHRpb25cbnByb3RvY29scyAtIHZhbGlkIHByb3RvY29scyBjYW4gYmUgbW9kaWZpZWQgd2l0aCB0aGlzIG9wdGlvblxucmVxdWlyZV9ob3N0IC0gaWYgc2V0IGFzIGZhbHNlIGlzVVJMIHdpbGwgbm90IGNoZWNrIGlmIGhvc3QgaXMgcHJlc2VudCBpbiB0aGUgVVJMXG5yZXF1aXJlX3BvcnQgLSBpZiBzZXQgYXMgdHJ1ZSBpc1VSTCB3aWxsIGNoZWNrIGlmIHBvcnQgaXMgcHJlc2VudCBpbiB0aGUgVVJMXG5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzIC0gaWYgc2V0IGFzIHRydWUgcHJvdG9jb2wgcmVsYXRpdmUgVVJMcyB3aWxsIGJlIGFsbG93ZWRcbnZhbGlkYXRlX2xlbmd0aCAtIGlmIHNldCBhcyBmYWxzZSBpc1VSTCB3aWxsIHNraXAgc3RyaW5nIGxlbmd0aCB2YWxpZGF0aW9uIChJRSBtYXhpbXVtIGlzIDIwODMpXG5cbiovXG52YXIgZGVmYXVsdF91cmxfb3B0aW9ucyA9IHtcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJ10sXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICByZXF1aXJlX3Byb3RvY29sOiBmYWxzZSxcbiAgcmVxdWlyZV9ob3N0OiB0cnVlLFxuICByZXF1aXJlX3BvcnQ6IGZhbHNlLFxuICByZXF1aXJlX3ZhbGlkX3Byb3RvY29sOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHM6IGZhbHNlLFxuICBhbGxvd19mcmFnbWVudHM6IHRydWUsXG4gIGFsbG93X3F1ZXJ5X2NvbXBvbmVudHM6IHRydWUsXG4gIHZhbGlkYXRlX2xlbmd0aDogdHJ1ZVxufTtcbnZhciB3cmFwcGVkX2lwdjYgPSAvXlxcWyhbXlxcXV0rKVxcXSg/OjooWzAtOV0rKSk/JC87XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBjaGVja0hvc3QoaG9zdCwgbWF0Y2hlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuXG4gICAgaWYgKGhvc3QgPT09IG1hdGNoIHx8IGlzUmVnRXhwKG1hdGNoKSAmJiBtYXRjaC50ZXN0KGhvc3QpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVVJMKHVybCwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KSh1cmwpO1xuXG4gIGlmICghdXJsIHx8IC9bXFxzPD5dLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodXJsLmluZGV4T2YoJ21haWx0bzonKSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfdXJsX29wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLnZhbGlkYXRlX2xlbmd0aCAmJiB1cmwubGVuZ3RoID49IDIwODMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMuYWxsb3dfZnJhZ21lbnRzICYmIHVybC5pbmNsdWRlcygnIycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zLmFsbG93X3F1ZXJ5X2NvbXBvbmVudHMgJiYgKHVybC5pbmNsdWRlcygnPycpIHx8IHVybC5pbmNsdWRlcygnJicpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b2NvbCwgYXV0aCwgaG9zdCwgaG9zdG5hbWUsIHBvcnQsIHBvcnRfc3RyLCBzcGxpdCwgaXB2NjtcbiAgc3BsaXQgPSB1cmwuc3BsaXQoJyMnKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcbiAgc3BsaXQgPSB1cmwuc3BsaXQoJz8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcbiAgc3BsaXQgPSB1cmwuc3BsaXQoJzovLycpO1xuXG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgcHJvdG9jb2wgPSBzcGxpdC5zaGlmdCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlX3ZhbGlkX3Byb3RvY29sICYmIG9wdGlvbnMucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAodXJsLnN1YnN0cigwLCAyKSA9PT0gJy8vJykge1xuICAgIGlmICghb3B0aW9ucy5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3BsaXRbMF0gPSB1cmwuc3Vic3RyKDIpO1xuICB9XG5cbiAgdXJsID0gc3BsaXQuam9pbignOi8vJyk7XG5cbiAgaWYgKHVybCA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnLycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIGlmICh1cmwgPT09ICcnICYmICFvcHRpb25zLnJlcXVpcmVfaG9zdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJ0AnKTtcblxuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIGlmIChvcHRpb25zLmRpc2FsbG93X2F1dGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3BsaXRbMF0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYXV0aCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgICBpZiAoYXV0aC5pbmRleE9mKCc6JykgPj0gMCAmJiBhdXRoLnNwbGl0KCc6JykubGVuZ3RoID4gMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfYXV0aCRzcGxpdCA9IGF1dGguc3BsaXQoJzonKSxcbiAgICAgICAgX2F1dGgkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2F1dGgkc3BsaXQsIDIpLFxuICAgICAgICB1c2VyID0gX2F1dGgkc3BsaXQyWzBdLFxuICAgICAgICBwYXNzd29yZCA9IF9hdXRoJHNwbGl0MlsxXTtcblxuICAgIGlmICh1c2VyID09PSAnJyAmJiBwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBob3N0bmFtZSA9IHNwbGl0LmpvaW4oJ0AnKTtcbiAgcG9ydF9zdHIgPSBudWxsO1xuICBpcHY2ID0gbnVsbDtcbiAgdmFyIGlwdjZfbWF0Y2ggPSBob3N0bmFtZS5tYXRjaCh3cmFwcGVkX2lwdjYpO1xuXG4gIGlmIChpcHY2X21hdGNoKSB7XG4gICAgaG9zdCA9ICcnO1xuICAgIGlwdjYgPSBpcHY2X21hdGNoWzFdO1xuICAgIHBvcnRfc3RyID0gaXB2Nl9tYXRjaFsyXSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIHNwbGl0ID0gaG9zdG5hbWUuc3BsaXQoJzonKTtcbiAgICBob3N0ID0gc3BsaXQuc2hpZnQoKTtcblxuICAgIGlmIChzcGxpdC5sZW5ndGgpIHtcbiAgICAgIHBvcnRfc3RyID0gc3BsaXQuam9pbignOicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3J0X3N0ciAhPT0gbnVsbCAmJiBwb3J0X3N0ci5sZW5ndGggPiAwKSB7XG4gICAgcG9ydCA9IHBhcnNlSW50KHBvcnRfc3RyLCAxMCk7XG5cbiAgICBpZiAoIS9eWzAtOV0rJC8udGVzdChwb3J0X3N0cikgfHwgcG9ydCA8PSAwIHx8IHBvcnQgPiA2NTUzNSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfcG9ydCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSB7XG4gICAgcmV0dXJuIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0lQLmRlZmF1bHQpKGhvc3QpICYmICEoMCwgX2lzRlFETi5kZWZhdWx0KShob3N0LCBvcHRpb25zKSAmJiAoIWlwdjYgfHwgISgwLCBfaXNJUC5kZWZhdWx0KShpcHY2LCA2KSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBob3N0ID0gaG9zdCB8fCBpcHY2O1xuXG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNQUNBZGRyZXNzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWFjQWRkcmVzcyA9IC9eKD86WzAtOWEtZkEtRl17Mn0oWy06XFxzXSkpKFswLTlhLWZBLUZdezJ9XFwxKXs0fShbMC05YS1mQS1GXXsyfSkkLztcbnZhciBtYWNBZGRyZXNzTm9TZXBhcmF0b3JzID0gL14oWzAtOWEtZkEtRl0pezEyfSQvO1xudmFyIG1hY0FkZHJlc3NXaXRoRG90cyA9IC9eKFswLTlhLWZBLUZdezR9XFwuKXsyfShbMC05YS1mQS1GXXs0fSkkLztcblxuZnVuY3Rpb24gaXNNQUNBZGRyZXNzKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgYG5vX2NvbG9uc2AgVE9ETzogcmVtb3ZlIGl0IGluIHRoZSBuZXh0IG1ham9yXG4gICovXG5cbiAgaWYgKG9wdGlvbnMgJiYgKG9wdGlvbnMubm9fY29sb25zIHx8IG9wdGlvbnMubm9fc2VwYXJhdG9ycykpIHtcbiAgICByZXR1cm4gbWFjQWRkcmVzc05vU2VwYXJhdG9ycy50ZXN0KHN0cik7XG4gIH1cblxuICByZXR1cm4gbWFjQWRkcmVzcy50ZXN0KHN0cikgfHwgbWFjQWRkcmVzc1dpdGhEb3RzLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVBSYW5nZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pc0lQID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0lQXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN1Ym5ldE1heWJlID0gL15cXGR7MSwzfSQvO1xudmFyIHY0U3VibmV0ID0gMzI7XG52YXIgdjZTdWJuZXQgPSAxMjg7XG5cbmZ1bmN0aW9uIGlzSVBSYW5nZShzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy8nKTsgLy8gcGFydHNbMF0gLT4gaXAsIHBhcnRzWzFdIC0+IHN1Ym5ldFxuXG4gIGlmIChwYXJ0cy5sZW5ndGggIT09IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXN1Ym5ldE1heWJlLnRlc3QocGFydHNbMV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIERpc2FsbG93IHByZWNlZGluZyAwIGkuZS4gMDEsIDAyLCAuLi5cblxuXG4gIGlmIChwYXJ0c1sxXS5sZW5ndGggPiAxICYmIHBhcnRzWzFdLnN0YXJ0c1dpdGgoJzAnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc1ZhbGlkSVAgPSAoMCwgX2lzSVAuZGVmYXVsdCkocGFydHNbMF0sIHZlcnNpb24pO1xuXG4gIGlmICghaXNWYWxpZElQKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIERlZmluZSB2YWxpZCBzdWJuZXQgYWNjb3JkaW5nIHRvIElQJ3MgdmVyc2lvblxuXG5cbiAgdmFyIGV4cGVjdGVkU3VibmV0ID0gbnVsbDtcblxuICBzd2l0Y2ggKFN0cmluZyh2ZXJzaW9uKSkge1xuICAgIGNhc2UgJzQnOlxuICAgICAgZXhwZWN0ZWRTdWJuZXQgPSB2NFN1Ym5ldDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnNic6XG4gICAgICBleHBlY3RlZFN1Ym5ldCA9IHY2U3VibmV0O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgZXhwZWN0ZWRTdWJuZXQgPSAoMCwgX2lzSVAuZGVmYXVsdCkocGFydHNbMF0sICc2JykgPyB2NlN1Ym5ldCA6IHY0U3VibmV0O1xuICB9XG5cbiAgcmV0dXJuIHBhcnRzWzFdIDw9IGV4cGVjdGVkU3VibmV0ICYmIHBhcnRzWzFdID49IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RhdGU7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyB0aHJvdyBfZTI7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UzKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMzsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBkZWZhdWx0X2RhdGVfb3B0aW9ucyA9IHtcbiAgZm9ybWF0OiAnWVlZWS9NTS9ERCcsXG4gIGRlbGltaXRlcnM6IFsnLycsICctJ10sXG4gIHN0cmljdE1vZGU6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRm9ybWF0KGZvcm1hdCkge1xuICByZXR1cm4gLyheKHl7NH18eXsyfSlbLlxcLy1dKG17MSwyfSlbLlxcLy1dKGR7MSwyfSkkKXwoXihtezEsMn0pWy5cXC8tXShkezEsMn0pWy5cXC8tXSgoeXs0fXx5ezJ9KSQpKXwoXihkezEsMn0pWy5cXC8tXShtezEsMn0pWy5cXC8tXSgoeXs0fXx5ezJ9KSQpKS9naS50ZXN0KGZvcm1hdCk7XG59XG5cbmZ1bmN0aW9uIHppcChkYXRlLCBmb3JtYXQpIHtcbiAgdmFyIHppcHBlZEFyciA9IFtdLFxuICAgICAgbGVuID0gTWF0aC5taW4oZGF0ZS5sZW5ndGgsIGZvcm1hdC5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB6aXBwZWRBcnIucHVzaChbZGF0ZVtpXSwgZm9ybWF0W2ldXSk7XG4gIH1cblxuICByZXR1cm4gemlwcGVkQXJyO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIC8vIEFsbG93IGJhY2t3YXJkIGNvbXBhdGJpbGl0eSBmb3Igb2xkIGZvcm1hdCBpc0RhdGUoaW5wdXQgWywgZm9ybWF0XSlcbiAgICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KSh7XG4gICAgICBmb3JtYXQ6IG9wdGlvbnNcbiAgICB9LCBkZWZhdWx0X2RhdGVfb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9kYXRlX29wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgJiYgaXNWYWxpZEZvcm1hdChvcHRpb25zLmZvcm1hdCkpIHtcbiAgICB2YXIgZm9ybWF0RGVsaW1pdGVyID0gb3B0aW9ucy5kZWxpbWl0ZXJzLmZpbmQoZnVuY3Rpb24gKGRlbGltaXRlcikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm9ybWF0LmluZGV4T2YoZGVsaW1pdGVyKSAhPT0gLTE7XG4gICAgfSk7XG4gICAgdmFyIGRhdGVEZWxpbWl0ZXIgPSBvcHRpb25zLnN0cmljdE1vZGUgPyBmb3JtYXREZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcnMuZmluZChmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gICAgICByZXR1cm4gaW5wdXQuaW5kZXhPZihkZWxpbWl0ZXIpICE9PSAtMTtcbiAgICB9KTtcbiAgICB2YXIgZGF0ZUFuZEZvcm1hdCA9IHppcChpbnB1dC5zcGxpdChkYXRlRGVsaW1pdGVyKSwgb3B0aW9ucy5mb3JtYXQudG9Mb3dlckNhc2UoKS5zcGxpdChmb3JtYXREZWxpbWl0ZXIpKTtcbiAgICB2YXIgZGF0ZU9iaiA9IHt9O1xuXG4gICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRhdGVBbmRGb3JtYXQpLFxuICAgICAgICBfc3RlcDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc2xpY2VkVG9BcnJheShfc3RlcC52YWx1ZSwgMiksXG4gICAgICAgICAgICBkYXRlV29yZCA9IF9zdGVwJHZhbHVlWzBdLFxuICAgICAgICAgICAgZm9ybWF0V29yZCA9IF9zdGVwJHZhbHVlWzFdO1xuXG4gICAgICAgIGlmIChkYXRlV29yZC5sZW5ndGggIT09IGZvcm1hdFdvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZU9ialtmb3JtYXRXb3JkLmNoYXJBdCgwKV0gPSBkYXRlV29yZDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKFwiXCIuY29uY2F0KGRhdGVPYmoubSwgXCIvXCIpLmNvbmNhdChkYXRlT2JqLmQsIFwiL1wiKS5jb25jYXQoZGF0ZU9iai55KSkuZ2V0RGF0ZSgpID09PSArZGF0ZU9iai5kO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zLnN0cmljdE1vZGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRGF0ZV0nICYmIGlzRmluaXRlKGlucHV0KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQm9vbGVhbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBsb29zZTogZmFsc2Vcbn07XG52YXIgc3RyaWN0Qm9vbGVhbnMgPSBbJ3RydWUnLCAnZmFsc2UnLCAnMScsICcwJ107XG52YXIgbG9vc2VCb29sZWFucyA9IFtdLmNvbmNhdChzdHJpY3RCb29sZWFucywgWyd5ZXMnLCAnbm8nXSk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihzdHIpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPcHRpb25zO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChvcHRpb25zLmxvb3NlKSB7XG4gICAgcmV0dXJuIGxvb3NlQm9vbGVhbnMuaW5jbHVkZXMoc3RyLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmljdEJvb2xlYW5zLmluY2x1ZGVzKHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0xvY2FsZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGxvY2FsZVJlZyA9IC9eW0EtWmEtel17Miw0fShbXy1dKFtBLVphLXpdezR9fFtcXGRdezN9KSk/KFtfLV0oW0EtWmEtel17Mn18W1xcZF17M30pKT8kLztcblxuZnVuY3Rpb24gaXNMb2NhbGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKHN0ciA9PT0gJ2VuX1VTX1BPU0lYJyB8fCBzdHIgPT09ICdjYV9FU19WQUxFTkNJQScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGVSZWcudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNBbHBoYTtcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhKF9zdHIpIHtcbiAgdmFyIGxvY2FsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2VuLVVTJztcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShfc3RyKTtcbiAgdmFyIHN0ciA9IF9zdHI7XG4gIHZhciBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZTtcblxuICBpZiAoaWdub3JlKSB7XG4gICAgaWYgKGlnbm9yZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoaWdub3JlLCAnJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaWdub3JlID09PSAnc3RyaW5nJykge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChcIltcIi5jb25jYXQoaWdub3JlLnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxcXHNdL2csICdcXFxcJCYnKSwgXCJdXCIpLCAnZycpLCAnJyk7IC8vIGVzY2FwZSByZWdleCBmb3IgaWdub3JlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaWdub3JlIHNob3VsZCBiZSBpbnN0YW5jZSBvZiBhIFN0cmluZyBvciBSZWdFeHAnKTtcbiAgICB9XG4gIH1cblxuICBpZiAobG9jYWxlIGluIF9hbHBoYS5hbHBoYSkge1xuICAgIHJldHVybiBfYWxwaGEuYWxwaGFbbG9jYWxlXS50ZXN0KHN0cik7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KGxvY2FsZSwgXCInXCIpKTtcbn1cblxudmFyIGxvY2FsZXMgPSBPYmplY3Qua2V5cyhfYWxwaGEuYWxwaGEpO1xuZXhwb3J0cy5sb2NhbGVzID0gbG9jYWxlczsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FscGhhbnVtZXJpYztcbmV4cG9ydHMubG9jYWxlcyA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoXCIuL2FscGhhXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhbnVtZXJpYyhfc3RyKSB7XG4gIHZhciBsb2NhbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdlbi1VUyc7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoX3N0cik7XG4gIHZhciBzdHIgPSBfc3RyO1xuICB2YXIgaWdub3JlID0gb3B0aW9ucy5pZ25vcmU7XG5cbiAgaWYgKGlnbm9yZSkge1xuICAgIGlmIChpZ25vcmUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKGlnbm9yZSwgJycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlnbm9yZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KGlnbm9yZS5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcXFxzXS9nLCAnXFxcXCQmJyksIFwiXVwiKSwgJ2cnKSwgJycpOyAvLyBlc2NhcGUgcmVnZXggZm9yIGlnbm9yZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lnbm9yZSBzaG91bGQgYmUgaW5zdGFuY2Ugb2YgYSBTdHJpbmcgb3IgUmVnRXhwJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvY2FsZSBpbiBfYWxwaGEuYWxwaGFudW1lcmljKSB7XG4gICAgcmV0dXJuIF9hbHBoYS5hbHBoYW51bWVyaWNbbG9jYWxlXS50ZXN0KHN0cik7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KGxvY2FsZSwgXCInXCIpKTtcbn1cblxudmFyIGxvY2FsZXMgPSBPYmplY3Qua2V5cyhfYWxwaGEuYWxwaGFudW1lcmljKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNOdW1lcmljO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZShcIi4vYWxwaGFcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBudW1lcmljTm9TeW1ib2xzID0gL15bMC05XSskLztcblxuZnVuY3Rpb24gaXNOdW1lcmljKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMubm9fc3ltYm9scykge1xuICAgIHJldHVybiBudW1lcmljTm9TeW1ib2xzLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXlsrLV0/KFswLTldKltcIi5jb25jYXQoKG9wdGlvbnMgfHwge30pLmxvY2FsZSA/IF9hbHBoYS5kZWNpbWFsW29wdGlvbnMubG9jYWxlXSA6ICcuJywgXCJdKT9bMC05XSskXCIpKS50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1Bhc3Nwb3J0TnVtYmVyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJlZmVyZW5jZTpcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy8gLS0gV2lraXBlZGlhXG4gKiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtMzY1L2NvbXBsaWFuY2UvZXUtcGFzc3BvcnQtbnVtYmVyIC0tIEVVIFBhc3Nwb3J0IE51bWJlclxuICogaHR0cHM6Ly9jb3VudHJ5Y29kZS5vcmcvIC0tIENvdW50cnkgQ29kZXNcbiAqL1xudmFyIHBhc3Nwb3J0UmVnZXhCeUNvdW50cnlDb2RlID0ge1xuICBBTTogL15bQS1aXXsyfVxcZHs3fSQvLFxuICAvLyBBUk1FTklBXG4gIEFSOiAvXltBLVpdezN9XFxkezZ9JC8sXG4gIC8vIEFSR0VOVElOQVxuICBBVDogL15bQS1aXVxcZHs3fSQvLFxuICAvLyBBVVNUUklBXG4gIEFVOiAvXltBLVpdXFxkezd9JC8sXG4gIC8vIEFVU1RSQUxJQVxuICBCRTogL15bQS1aXXsyfVxcZHs2fSQvLFxuICAvLyBCRUxHSVVNXG4gIEJHOiAvXlxcZHs5fSQvLFxuICAvLyBCVUxHQVJJQVxuICBCUjogL15bQS1aXXsyfVxcZHs2fSQvLFxuICAvLyBCUkFaSUxcbiAgQlk6IC9eW0EtWl17Mn1cXGR7N30kLyxcbiAgLy8gQkVMQVJVU1xuICBDQTogL15bQS1aXXsyfVxcZHs2fSQvLFxuICAvLyBDQU5BREFcbiAgQ0g6IC9eW0EtWl1cXGR7N30kLyxcbiAgLy8gU1dJVFpFUkxBTkRcbiAgQ046IC9eR1xcZHs4fSR8XkUoPyFbSU9dKVtBLVowLTldXFxkezd9JC8sXG4gIC8vIENISU5BIFtHPU9yZGluYXJ5LCBFPUVsZWN0cm9uaWNdIGZvbGxvd2VkIGJ5IDgtZGlnaXRzLCBvciBFIGZvbGxvd2VkIGJ5IGFueSBVUFBFUkNBU0UgbGV0dGVyIChleGNlcHQgSSBhbmQgTykgZm9sbG93ZWQgYnkgNyBkaWdpdHNcbiAgQ1k6IC9eW0EtWl0oXFxkezZ9fFxcZHs4fSkkLyxcbiAgLy8gQ1lQUlVTXG4gIENaOiAvXlxcZHs4fSQvLFxuICAvLyBDWkVDSCBSRVBVQkxJQ1xuICBERTogL15bQ0ZHSEpLTE1OUFJUVldYWVowLTldezl9JC8sXG4gIC8vIEdFUk1BTllcbiAgREs6IC9eXFxkezl9JC8sXG4gIC8vIERFTk1BUktcbiAgRFo6IC9eXFxkezl9JC8sXG4gIC8vIEFMR0VSSUFcbiAgRUU6IC9eKFtBLVpdXFxkezd9fFtBLVpdezJ9XFxkezd9KSQvLFxuICAvLyBFU1RPTklBIChLIGZvbGxvd2VkIGJ5IDctZGlnaXRzKSwgZS1wYXNzcG9ydHMgaGF2ZSAyIFVQUEVSQ0FTRSBmb2xsb3dlZCBieSA3IGRpZ2l0c1xuICBFUzogL15bQS1aMC05XXsyfShbQS1aMC05XT8pXFxkezZ9JC8sXG4gIC8vIFNQQUlOXG4gIEZJOiAvXltBLVpdezJ9XFxkezd9JC8sXG4gIC8vIEZJTkxBTkRcbiAgRlI6IC9eXFxkezJ9W0EtWl17Mn1cXGR7NX0kLyxcbiAgLy8gRlJBTkNFXG4gIEdCOiAvXlxcZHs5fSQvLFxuICAvLyBVTklURUQgS0lOR0RPTVxuICBHUjogL15bQS1aXXsyfVxcZHs3fSQvLFxuICAvLyBHUkVFQ0VcbiAgSFI6IC9eXFxkezl9JC8sXG4gIC8vIENST0FUSUFcbiAgSFU6IC9eW0EtWl17Mn0oXFxkezZ9fFxcZHs3fSkkLyxcbiAgLy8gSFVOR0FSWVxuICBJRTogL15bQS1aMC05XXsyfVxcZHs3fSQvLFxuICAvLyBJUkVMQU5EXG4gIElOOiAvXltBLVpdezF9LT9cXGR7N30kLyxcbiAgLy8gSU5ESUFcbiAgSUQ6IC9eW0EtQ11cXGR7N30kLyxcbiAgLy8gSU5ET05FU0lBXG4gIElSOiAvXltBLVpdXFxkezh9JC8sXG4gIC8vIElSQU5cbiAgSVM6IC9eKEEpXFxkezd9JC8sXG4gIC8vIElDRUxBTkRcbiAgSVQ6IC9eW0EtWjAtOV17Mn1cXGR7N30kLyxcbiAgLy8gSVRBTFlcbiAgSlA6IC9eW0EtWl17Mn1cXGR7N30kLyxcbiAgLy8gSkFQQU5cbiAgS1I6IC9eW01TXVxcZHs4fSQvLFxuICAvLyBTT1VUSCBLT1JFQSwgUkVQVUJMSUMgT0YgS09SRUEsIFtTPVBTIFBhc3Nwb3J0cywgTT1QTSBQYXNzcG9ydHNdXG4gIExUOiAvXltBLVowLTldezh9JC8sXG4gIC8vIExJVEhVQU5JQVxuICBMVTogL15bQS1aMC05XXs4fSQvLFxuICAvLyBMVVhFTUJVUkdcbiAgTFY6IC9eW0EtWjAtOV17Mn1cXGR7N30kLyxcbiAgLy8gTEFUVklBXG4gIExZOiAvXltBLVowLTldezh9JC8sXG4gIC8vIExJQllBXG4gIE1UOiAvXlxcZHs3fSQvLFxuICAvLyBNQUxUQVxuICBNWjogL14oW0EtWl17Mn1cXGR7N30pfChcXGR7Mn1bQS1aXXsyfVxcZHs1fSkkLyxcbiAgLy8gTU9aQU1CSVFVRVxuICBNWTogL15bQUhLXVxcZHs4fSQvLFxuICAvLyBNQUxBWVNJQVxuICBOTDogL15bQS1aXXsyfVtBLVowLTldezZ9XFxkJC8sXG4gIC8vIE5FVEhFUkxBTkRTXG4gIFBMOiAvXltBLVpdezJ9XFxkezd9JC8sXG4gIC8vIFBPTEFORFxuICBQVDogL15bQS1aXVxcZHs2fSQvLFxuICAvLyBQT1JUVUdBTFxuICBSTzogL15cXGR7OCw5fSQvLFxuICAvLyBST01BTklBXG4gIFJVOiAvXlxcZHs5fSQvLFxuICAvLyBSVVNTSUFOIEZFREVSQVRJT05cbiAgU0U6IC9eXFxkezh9JC8sXG4gIC8vIFNXRURFTlxuICBTTDogL14oUClbQS1aXVxcZHs3fSQvLFxuICAvLyBTTE9WQU5JQVxuICBTSzogL15bMC05QS1aXVxcZHs3fSQvLFxuICAvLyBTTE9WQUtJQVxuICBUUjogL15bQS1aXVxcZHs4fSQvLFxuICAvLyBUVVJLRVlcbiAgVUE6IC9eW0EtWl17Mn1cXGR7Nn0kLyxcbiAgLy8gVUtSQUlORVxuICBVUzogL15cXGR7OX0kLyAvLyBVTklURUQgU1RBVEVTXG5cbn07XG4vKipcbiAqIENoZWNrIGlmIHN0ciBpcyBhIHZhbGlkIHBhc3Nwb3J0IG51bWJlclxuICogcmVsYXRpdmUgdG8gcHJvdmlkZWQgSVNPIENvdW50cnkgQ29kZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge3N0cmluZ30gY291bnRyeUNvZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNQYXNzcG9ydE51bWJlcihzdHIsIGNvdW50cnlDb2RlKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIC8qKiBSZW1vdmUgQWxsIFdoaXRlc3BhY2VzLCBDb252ZXJ0IHRvIFVQUEVSQ0FTRSAqL1xuXG4gIHZhciBub3JtYWxpemVkU3RyID0gc3RyLnJlcGxhY2UoL1xccy9nLCAnJykudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIGNvdW50cnlDb2RlLnRvVXBwZXJDYXNlKCkgaW4gcGFzc3BvcnRSZWdleEJ5Q291bnRyeUNvZGUgJiYgcGFzc3BvcnRSZWdleEJ5Q291bnRyeUNvZGVbY291bnRyeUNvZGVdLnRlc3Qobm9ybWFsaXplZFN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ludDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGludCA9IC9eKD86Wy0rXT8oPzowfFsxLTldWzAtOV0qKSkkLztcbnZhciBpbnRMZWFkaW5nWmVyb2VzID0gL15bLStdP1swLTldKyQvO1xuXG5mdW5jdGlvbiBpc0ludChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEdldCB0aGUgcmVnZXggdG8gdXNlIGZvciB0ZXN0aW5nLCBiYXNlZCBvbiB3aGV0aGVyXG4gIC8vIGxlYWRpbmcgemVyb2VzIGFyZSBhbGxvd2VkIG9yIG5vdC5cblxuICB2YXIgcmVnZXggPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdhbGxvd19sZWFkaW5nX3plcm9lcycpICYmICFvcHRpb25zLmFsbG93X2xlYWRpbmdfemVyb2VzID8gaW50IDogaW50TGVhZGluZ1plcm9lczsgLy8gQ2hlY2sgbWluL21heC9sdC9ndFxuXG4gIHZhciBtaW5DaGVja1Bhc3NlZCA9ICFvcHRpb25zLmhhc093blByb3BlcnR5KCdtaW4nKSB8fCBzdHIgPj0gb3B0aW9ucy5taW47XG4gIHZhciBtYXhDaGVja1Bhc3NlZCA9ICFvcHRpb25zLmhhc093blByb3BlcnR5KCdtYXgnKSB8fCBzdHIgPD0gb3B0aW9ucy5tYXg7XG4gIHZhciBsdENoZWNrUGFzc2VkID0gIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2x0JykgfHwgc3RyIDwgb3B0aW9ucy5sdDtcbiAgdmFyIGd0Q2hlY2tQYXNzZWQgPSAhb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnZ3QnKSB8fCBzdHIgPiBvcHRpb25zLmd0O1xuICByZXR1cm4gcmVnZXgudGVzdChzdHIpICYmIG1pbkNoZWNrUGFzc2VkICYmIG1heENoZWNrUGFzc2VkICYmIGx0Q2hlY2tQYXNzZWQgJiYgZ3RDaGVja1Bhc3NlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUG9ydDtcblxudmFyIF9pc0ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNJbnRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1BvcnQoc3RyKSB7XG4gIHJldHVybiAoMCwgX2lzSW50LmRlZmF1bHQpKHN0ciwge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDY1NTM1XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNMb3dlcmNhc2U7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzTG93ZXJjYXNlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBzdHIudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVXBwZXJjYXNlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1VwcGVyY2FzZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ciA9PT0gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lNRUk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpbWVpUmVnZXhXaXRob3V0SHlwZW5zID0gL15bMC05XXsxNX0kLztcbnZhciBpbWVpUmVnZXhXaXRoSHlwZW5zID0gL15cXGR7Mn0tXFxkezZ9LVxcZHs2fS1cXGR7MX0kLztcblxuZnVuY3Rpb24gaXNJTUVJKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gZGVmYXVsdCByZWdleCBmb3IgY2hlY2tpbmcgaW1laSBpcyB0aGUgb25lIHdpdGhvdXQgaHlwaGVuc1xuXG4gIHZhciBpbWVpUmVnZXggPSBpbWVpUmVnZXhXaXRob3V0SHlwZW5zO1xuXG4gIGlmIChvcHRpb25zLmFsbG93X2h5cGhlbnMpIHtcbiAgICBpbWVpUmVnZXggPSBpbWVpUmVnZXhXaXRoSHlwZW5zO1xuICB9XG5cbiAgaWYgKCFpbWVpUmVnZXgudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJycpO1xuICB2YXIgc3VtID0gMCxcbiAgICAgIG11bCA9IDIsXG4gICAgICBsID0gMTQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgZGlnaXQgPSBzdHIuc3Vic3RyaW5nKGwgLSBpIC0gMSwgbCAtIGkpO1xuICAgIHZhciB0cCA9IHBhcnNlSW50KGRpZ2l0LCAxMCkgKiBtdWw7XG5cbiAgICBpZiAodHAgPj0gMTApIHtcbiAgICAgIHN1bSArPSB0cCAlIDEwICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VtICs9IHRwO1xuICAgIH1cblxuICAgIGlmIChtdWwgPT09IDEpIHtcbiAgICAgIG11bCArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBtdWwgLT0gMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hrID0gKDEwIC0gc3VtICUgMTApICUgMTA7XG5cbiAgaWYgKGNoayAhPT0gcGFyc2VJbnQoc3RyLnN1YnN0cmluZygxNCwgMTUpLCAxMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQXNjaWk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBhc2NpaSA9IC9eW1xceDAwLVxceDdGXSskLztcbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG5mdW5jdGlvbiBpc0FzY2lpKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gYXNjaWkudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGdWxsV2lkdGg7XG5leHBvcnRzLmZ1bGxXaWR0aCA9IHZvaWQgMDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGZ1bGxXaWR0aCA9IC9bXlxcdTAwMjAtXFx1MDA3RVxcdUZGNjEtXFx1RkY5RlxcdUZGQTAtXFx1RkZEQ1xcdUZGRTgtXFx1RkZFRTAtOWEtekEtWl0vO1xuZXhwb3J0cy5mdWxsV2lkdGggPSBmdWxsV2lkdGg7XG5cbmZ1bmN0aW9uIGlzRnVsbFdpZHRoKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gZnVsbFdpZHRoLnRlc3Qoc3RyKTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hhbGZXaWR0aDtcbmV4cG9ydHMuaGFsZldpZHRoID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGFsZldpZHRoID0gL1tcXHUwMDIwLVxcdTAwN0VcXHVGRjYxLVxcdUZGOUZcXHVGRkEwLVxcdUZGRENcXHVGRkU4LVxcdUZGRUUwLTlhLXpBLVpdLztcbmV4cG9ydHMuaGFsZldpZHRoID0gaGFsZldpZHRoO1xuXG5mdW5jdGlvbiBpc0hhbGZXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGhhbGZXaWR0aC50ZXN0KHN0cik7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWYXJpYWJsZVdpZHRoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX2lzRnVsbFdpZHRoID0gcmVxdWlyZShcIi4vaXNGdWxsV2lkdGhcIik7XG5cbnZhciBfaXNIYWxmV2lkdGggPSByZXF1aXJlKFwiLi9pc0hhbGZXaWR0aFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZVdpZHRoKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gX2lzRnVsbFdpZHRoLmZ1bGxXaWR0aC50ZXN0KHN0cikgJiYgX2lzSGFsZldpZHRoLmhhbGZXaWR0aC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc011bHRpYnl0ZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xudmFyIG11bHRpYnl0ZSA9IC9bXlxceDAwLVxceDdGXS87XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuZnVuY3Rpb24gaXNNdWx0aWJ5dGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtdWx0aWJ5dGUudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbXVsdGlsaW5lUmVnZXhwO1xuXG4vKipcbiAqIEJ1aWxkIFJlZ0V4cCBvYmplY3QgZnJvbSBhbiBhcnJheVxuICogb2YgbXVsdGlwbGUvbXVsdGktbGluZSByZWdleHAgcGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJ0c1xuICogQHBhcmFtIHtzdHJpbmd9IGZsYWdzXG4gKiBAcmV0dXJuIHtvYmplY3R9IC0gUmVnRXhwIG9iamVjdFxuICovXG5mdW5jdGlvbiBtdWx0aWxpbmVSZWdleHAocGFydHMsIGZsYWdzKSB7XG4gIHZhciByZWdleHBBc1N0cmluZ0xpdGVyYWwgPSBwYXJ0cy5qb2luKCcnKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwQXNTdHJpbmdMaXRlcmFsLCBmbGFncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1NlbVZlcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tdWx0aWxpbmVSZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tdWx0aWxpbmVSZWdleFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmVndWxhciBFeHByZXNzaW9uIHRvIG1hdGNoXG4gKiBzZW1hbnRpYyB2ZXJzaW9uaW5nIChTZW1WZXIpXG4gKiBidWlsdCBmcm9tIG11bHRpLWxpbmUsIG11bHRpLXBhcnRzIHJlZ2V4cFxuICogUmVmZXJlbmNlOiBodHRwczovL3NlbXZlci5vcmcvXG4gKi9cbnZhciBzZW1hbnRpY1ZlcnNpb25pbmdSZWdleCA9ICgwLCBfbXVsdGlsaW5lUmVnZXguZGVmYXVsdCkoWydeKDB8WzEtOV1cXFxcZCopXFxcXC4oMHxbMS05XVxcXFxkKilcXFxcLigwfFsxLTldXFxcXGQqKScsICcoPzotKCg/OjB8WzEtOV1cXFxcZCp8XFxcXGQqW2Etei1dWzAtOWEtei1dKikoPzpcXFxcLig/OjB8WzEtOV1cXFxcZCp8XFxcXGQqW2Etei1dWzAtOWEtei1dKikpKikpJywgJz8oPzpcXFxcKyhbMC05YS16LV0rKD86XFxcXC5bMC05YS16LV0rKSopKT8kJ10sICdpJyk7XG5cbmZ1bmN0aW9uIGlzU2VtVmVyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc2VtYW50aWNWZXJzaW9uaW5nUmVnZXgudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTdXJyb2dhdGVQYWlyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdLztcblxuZnVuY3Rpb24gaXNTdXJyb2dhdGVQYWlyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3Vycm9nYXRlUGFpci50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKGFyciwgdmFsKSB7XG4gIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoYXJyVmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PT0gYXJyVmFsO1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGluY2x1ZGVzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNEZWNpbWFsO1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pbmNsdWRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9pbmNsdWRlc1wiKSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKFwiLi9hbHBoYVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZGVjaW1hbFJlZ0V4cChvcHRpb25zKSB7XG4gIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlstK10/KFswLTldKyk/KFxcXFxcIi5jb25jYXQoX2FscGhhLmRlY2ltYWxbb3B0aW9ucy5sb2NhbGVdLCBcIlswLTlde1wiKS5jb25jYXQob3B0aW9ucy5kZWNpbWFsX2RpZ2l0cywgXCJ9KVwiKS5jb25jYXQob3B0aW9ucy5mb3JjZV9kZWNpbWFsID8gJycgOiAnPycsIFwiJFwiKSk7XG4gIHJldHVybiByZWdFeHA7XG59XG5cbnZhciBkZWZhdWx0X2RlY2ltYWxfb3B0aW9ucyA9IHtcbiAgZm9yY2VfZGVjaW1hbDogZmFsc2UsXG4gIGRlY2ltYWxfZGlnaXRzOiAnMSwnLFxuICBsb2NhbGU6ICdlbi1VUydcbn07XG52YXIgYmxhY2tsaXN0ID0gWycnLCAnLScsICcrJ107XG5cbmZ1bmN0aW9uIGlzRGVjaW1hbChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9kZWNpbWFsX29wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLmxvY2FsZSBpbiBfYWxwaGEuZGVjaW1hbCkge1xuICAgIHJldHVybiAhKDAsIF9pbmNsdWRlcy5kZWZhdWx0KShibGFja2xpc3QsIHN0ci5yZXBsYWNlKC8gL2csICcnKSkgJiYgZGVjaW1hbFJlZ0V4cChvcHRpb25zKS50ZXN0KHN0cik7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KG9wdGlvbnMubG9jYWxlLCBcIidcIikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIZXhhZGVjaW1hbDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleGFkZWNpbWFsID0gL14oMHh8MGgpP1swLTlBLUZdKyQvaTtcblxuZnVuY3Rpb24gaXNIZXhhZGVjaW1hbChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGhleGFkZWNpbWFsLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzT2N0YWw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBvY3RhbCA9IC9eKDBvKT9bMC03XSskL2k7XG5cbmZ1bmN0aW9uIGlzT2N0YWwoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBvY3RhbC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RpdmlzaWJsZUJ5O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX3RvRmxvYXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RvRmxvYXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0RpdmlzaWJsZUJ5KHN0ciwgbnVtKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAoMCwgX3RvRmxvYXQuZGVmYXVsdCkoc3RyKSAlIHBhcnNlSW50KG51bSwgMTApID09PSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIZXhDb2xvcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleGNvbG9yID0gL14jPyhbMC05QS1GXXszfXxbMC05QS1GXXs0fXxbMC05QS1GXXs2fXxbMC05QS1GXXs4fSkkL2k7XG5cbmZ1bmN0aW9uIGlzSGV4Q29sb3Ioc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhjb2xvci50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1JnYkNvbG9yO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcmdiQ29sb3IgPSAvXnJnYlxcKCgoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKSwpezJ9KFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXCkkLztcbnZhciByZ2JhQ29sb3IgPSAvXnJnYmFcXCgoKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSksKXszfSgwP1xcLlxcZHwxKFxcLjApP3wwKFxcLjApPylcXCkkLztcbnZhciByZ2JDb2xvclBlcmNlbnQgPSAvXnJnYlxcKCgoWzAtOV0lfFsxLTldWzAtOV0lfDEwMCUpLCl7Mn0oWzAtOV0lfFsxLTldWzAtOV0lfDEwMCUpXFwpLztcbnZhciByZ2JhQ29sb3JQZXJjZW50ID0gL15yZ2JhXFwoKChbMC05XSV8WzEtOV1bMC05XSV8MTAwJSksKXszfSgwP1xcLlxcZHwxKFxcLjApP3wwKFxcLjApPylcXCkvO1xuXG5mdW5jdGlvbiBpc1JnYkNvbG9yKHN0cikge1xuICB2YXIgaW5jbHVkZVBlcmNlbnRWYWx1ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKCFpbmNsdWRlUGVyY2VudFZhbHVlcykge1xuICAgIHJldHVybiByZ2JDb2xvci50ZXN0KHN0cikgfHwgcmdiYUNvbG9yLnRlc3Qoc3RyKTtcbiAgfVxuXG4gIHJldHVybiByZ2JDb2xvci50ZXN0KHN0cikgfHwgcmdiYUNvbG9yLnRlc3Qoc3RyKSB8fCByZ2JDb2xvclBlcmNlbnQudGVzdChzdHIpIHx8IHJnYmFDb2xvclBlcmNlbnQudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIU0w7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoc2xDb21tYSA9IC9eaHNsYT9cXCgoKFxcK3xcXC0pPyhbMC05XSsoXFwuWzAtOV0rKT8oZShcXCt8XFwtKT9bMC05XSspP3xcXC5bMC05XSsoZShcXCt8XFwtKT9bMC05XSspPykpKGRlZ3xncmFkfHJhZHx0dXJuKT8oLChcXCt8XFwtKT8oWzAtOV0rKFxcLlswLTldKyk/KGUoXFwrfFxcLSk/WzAtOV0rKT98XFwuWzAtOV0rKGUoXFwrfFxcLSk/WzAtOV0rKT8pJSl7Mn0oLCgoXFwrfFxcLSk/KFswLTldKyhcXC5bMC05XSspPyhlKFxcK3xcXC0pP1swLTldKyk/fFxcLlswLTldKyhlKFxcK3xcXC0pP1swLTldKyk/KSU/KSk/XFwpJC9pO1xudmFyIGhzbFNwYWNlID0gL15oc2xhP1xcKCgoXFwrfFxcLSk/KFswLTldKyhcXC5bMC05XSspPyhlKFxcK3xcXC0pP1swLTldKyk/fFxcLlswLTldKyhlKFxcK3xcXC0pP1swLTldKyk/KSkoZGVnfGdyYWR8cmFkfHR1cm4pPyhcXHMoXFwrfFxcLSk/KFswLTldKyhcXC5bMC05XSspPyhlKFxcK3xcXC0pP1swLTldKyk/fFxcLlswLTldKyhlKFxcK3xcXC0pP1swLTldKyk/KSUpezJ9XFxzPyhcXC9cXHMoKFxcK3xcXC0pPyhbMC05XSsoXFwuWzAtOV0rKT8oZShcXCt8XFwtKT9bMC05XSspP3xcXC5bMC05XSsoZShcXCt8XFwtKT9bMC05XSspPyklPylcXHM/KT9cXCkkL2k7XG5cbmZ1bmN0aW9uIGlzSFNMKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBTdHJpcCBkdXBsaWNhdGUgc3BhY2VzIGJlZm9yZSBjYWxsaW5nIHRoZSB2YWxpZGF0aW9uIHJlZ2V4IChTZWUgICMxNTk4IGZvciBtb3JlIGluZm8pXG5cbiAgdmFyIHN0cmlwcGVkU3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9cXHM/KGhzbGE/XFwofFxcKXwsKVxccz8vaWcsICckMScpO1xuXG4gIGlmIChzdHJpcHBlZFN0ci5pbmRleE9mKCcsJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGhzbENvbW1hLnRlc3Qoc3RyaXBwZWRTdHIpO1xuICB9XG5cbiAgcmV0dXJuIGhzbFNwYWNlLnRlc3Qoc3RyaXBwZWRTdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJU1JDO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBzZWUgaHR0cDovL2lzcmMuaWZwaS5vcmcvZW4vaXNyYy1zdGFuZGFyZC9jb2RlLXN5bnRheFxudmFyIGlzcmMgPSAvXltBLVpdezJ9WzAtOUEtWl17M31cXGR7Mn1cXGR7NX0kLztcblxuZnVuY3Rpb24gaXNJU1JDKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaXNyYy50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lCQU47XG5leHBvcnRzLmxvY2FsZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogTGlzdCBvZiBjb3VudHJ5IGNvZGVzIHdpdGhcbiAqIGNvcnJlc3BvbmRpbmcgSUJBTiByZWd1bGFyIGV4cHJlc3Npb25cbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9CYW5rX0FjY291bnRfTnVtYmVyXG4gKi9cbnZhciBpYmFuUmVnZXhUaHJvdWdoQ291bnRyeUNvZGUgPSB7XG4gIEFEOiAvXihBRFswLTldezJ9KVxcZHs4fVtBLVowLTldezEyfSQvLFxuICBBRTogL14oQUVbMC05XXsyfSlcXGR7M31cXGR7MTZ9JC8sXG4gIEFMOiAvXihBTFswLTldezJ9KVxcZHs4fVtBLVowLTldezE2fSQvLFxuICBBVDogL14oQVRbMC05XXsyfSlcXGR7MTZ9JC8sXG4gIEFaOiAvXihBWlswLTldezJ9KVtBLVowLTldezR9XFxkezIwfSQvLFxuICBCQTogL14oQkFbMC05XXsyfSlcXGR7MTZ9JC8sXG4gIEJFOiAvXihCRVswLTldezJ9KVxcZHsxMn0kLyxcbiAgQkc6IC9eKEJHWzAtOV17Mn0pW0EtWl17NH1cXGR7Nn1bQS1aMC05XXs4fSQvLFxuICBCSDogL14oQkhbMC05XXsyfSlbQS1aXXs0fVtBLVowLTldezE0fSQvLFxuICBCUjogL14oQlJbMC05XXsyfSlcXGR7MjN9W0EtWl17MX1bQS1aMC05XXsxfSQvLFxuICBCWTogL14oQllbMC05XXsyfSlbQS1aMC05XXs0fVxcZHsyMH0kLyxcbiAgQ0g6IC9eKENIWzAtOV17Mn0pXFxkezV9W0EtWjAtOV17MTJ9JC8sXG4gIENSOiAvXihDUlswLTldezJ9KVxcZHsxOH0kLyxcbiAgQ1k6IC9eKENZWzAtOV17Mn0pXFxkezh9W0EtWjAtOV17MTZ9JC8sXG4gIENaOiAvXihDWlswLTldezJ9KVxcZHsyMH0kLyxcbiAgREU6IC9eKERFWzAtOV17Mn0pXFxkezE4fSQvLFxuICBESzogL14oREtbMC05XXsyfSlcXGR7MTR9JC8sXG4gIERPOiAvXihET1swLTldezJ9KVtBLVpdezR9XFxkezIwfSQvLFxuICBFRTogL14oRUVbMC05XXsyfSlcXGR7MTZ9JC8sXG4gIEVHOiAvXihFR1swLTldezJ9KVxcZHsyNX0kLyxcbiAgRVM6IC9eKEVTWzAtOV17Mn0pXFxkezIwfSQvLFxuICBGSTogL14oRklbMC05XXsyfSlcXGR7MTR9JC8sXG4gIEZPOiAvXihGT1swLTldezJ9KVxcZHsxNH0kLyxcbiAgRlI6IC9eKEZSWzAtOV17Mn0pXFxkezEwfVtBLVowLTldezExfVxcZHsyfSQvLFxuICBHQjogL14oR0JbMC05XXsyfSlbQS1aXXs0fVxcZHsxNH0kLyxcbiAgR0U6IC9eKEdFWzAtOV17Mn0pW0EtWjAtOV17Mn1cXGR7MTZ9JC8sXG4gIEdJOiAvXihHSVswLTldezJ9KVtBLVpdezR9W0EtWjAtOV17MTV9JC8sXG4gIEdMOiAvXihHTFswLTldezJ9KVxcZHsxNH0kLyxcbiAgR1I6IC9eKEdSWzAtOV17Mn0pXFxkezd9W0EtWjAtOV17MTZ9JC8sXG4gIEdUOiAvXihHVFswLTldezJ9KVtBLVowLTldezR9W0EtWjAtOV17MjB9JC8sXG4gIEhSOiAvXihIUlswLTldezJ9KVxcZHsxN30kLyxcbiAgSFU6IC9eKEhVWzAtOV17Mn0pXFxkezI0fSQvLFxuICBJRTogL14oSUVbMC05XXsyfSlbQS1aMC05XXs0fVxcZHsxNH0kLyxcbiAgSUw6IC9eKElMWzAtOV17Mn0pXFxkezE5fSQvLFxuICBJUTogL14oSVFbMC05XXsyfSlbQS1aXXs0fVxcZHsxNX0kLyxcbiAgSVI6IC9eKElSWzAtOV17Mn0pMFxcZHsyfTBcXGR7MTh9JC8sXG4gIElTOiAvXihJU1swLTldezJ9KVxcZHsyMn0kLyxcbiAgSVQ6IC9eKElUWzAtOV17Mn0pW0EtWl17MX1cXGR7MTB9W0EtWjAtOV17MTJ9JC8sXG4gIEpPOiAvXihKT1swLTldezJ9KVtBLVpdezR9XFxkezIyfSQvLFxuICBLVzogL14oS1dbMC05XXsyfSlbQS1aXXs0fVtBLVowLTldezIyfSQvLFxuICBLWjogL14oS1pbMC05XXsyfSlcXGR7M31bQS1aMC05XXsxM30kLyxcbiAgTEI6IC9eKExCWzAtOV17Mn0pXFxkezR9W0EtWjAtOV17MjB9JC8sXG4gIExDOiAvXihMQ1swLTldezJ9KVtBLVpdezR9W0EtWjAtOV17MjR9JC8sXG4gIExJOiAvXihMSVswLTldezJ9KVxcZHs1fVtBLVowLTldezEyfSQvLFxuICBMVDogL14oTFRbMC05XXsyfSlcXGR7MTZ9JC8sXG4gIExVOiAvXihMVVswLTldezJ9KVxcZHszfVtBLVowLTldezEzfSQvLFxuICBMVjogL14oTFZbMC05XXsyfSlbQS1aXXs0fVtBLVowLTldezEzfSQvLFxuICBNQzogL14oTUNbMC05XXsyfSlcXGR7MTB9W0EtWjAtOV17MTF9XFxkezJ9JC8sXG4gIE1EOiAvXihNRFswLTldezJ9KVtBLVowLTldezIwfSQvLFxuICBNRTogL14oTUVbMC05XXsyfSlcXGR7MTh9JC8sXG4gIE1LOiAvXihNS1swLTldezJ9KVxcZHszfVtBLVowLTldezEwfVxcZHsyfSQvLFxuICBNUjogL14oTVJbMC05XXsyfSlcXGR7MjN9JC8sXG4gIE1UOiAvXihNVFswLTldezJ9KVtBLVpdezR9XFxkezV9W0EtWjAtOV17MTh9JC8sXG4gIE1VOiAvXihNVVswLTldezJ9KVtBLVpdezR9XFxkezE5fVtBLVpdezN9JC8sXG4gIE1aOiAvXihNWlswLTldezJ9KVxcZHsyMX0kLyxcbiAgTkw6IC9eKE5MWzAtOV17Mn0pW0EtWl17NH1cXGR7MTB9JC8sXG4gIE5POiAvXihOT1swLTldezJ9KVxcZHsxMX0kLyxcbiAgUEs6IC9eKFBLWzAtOV17Mn0pW0EtWjAtOV17NH1cXGR7MTZ9JC8sXG4gIFBMOiAvXihQTFswLTldezJ9KVxcZHsyNH0kLyxcbiAgUFM6IC9eKFBTWzAtOV17Mn0pW0EtWjAtOV17NH1cXGR7MjF9JC8sXG4gIFBUOiAvXihQVFswLTldezJ9KVxcZHsyMX0kLyxcbiAgUUE6IC9eKFFBWzAtOV17Mn0pW0EtWl17NH1bQS1aMC05XXsyMX0kLyxcbiAgUk86IC9eKFJPWzAtOV17Mn0pW0EtWl17NH1bQS1aMC05XXsxNn0kLyxcbiAgUlM6IC9eKFJTWzAtOV17Mn0pXFxkezE4fSQvLFxuICBTQTogL14oU0FbMC05XXsyfSlcXGR7Mn1bQS1aMC05XXsxOH0kLyxcbiAgU0M6IC9eKFNDWzAtOV17Mn0pW0EtWl17NH1cXGR7MjB9W0EtWl17M30kLyxcbiAgU0U6IC9eKFNFWzAtOV17Mn0pXFxkezIwfSQvLFxuICBTSTogL14oU0lbMC05XXsyfSlcXGR7MTV9JC8sXG4gIFNLOiAvXihTS1swLTldezJ9KVxcZHsyMH0kLyxcbiAgU006IC9eKFNNWzAtOV17Mn0pW0EtWl17MX1cXGR7MTB9W0EtWjAtOV17MTJ9JC8sXG4gIFNWOiAvXihTVlswLTldezJ9KVtBLVowLTldezR9XFxkezIwfSQvLFxuICBUTDogL14oVExbMC05XXsyfSlcXGR7MTl9JC8sXG4gIFROOiAvXihUTlswLTldezJ9KVxcZHsyMH0kLyxcbiAgVFI6IC9eKFRSWzAtOV17Mn0pXFxkezV9W0EtWjAtOV17MTd9JC8sXG4gIFVBOiAvXihVQVswLTldezJ9KVxcZHs2fVtBLVowLTldezE5fSQvLFxuICBWQTogL14oVkFbMC05XXsyfSlcXGR7MTh9JC8sXG4gIFZHOiAvXihWR1swLTldezJ9KVtBLVowLTldezR9XFxkezE2fSQvLFxuICBYSzogL14oWEtbMC05XXsyfSlcXGR7MTZ9JC9cbn07XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgc3RyaW5nIGhhcyBjb3JyZWN0IHVuaXZlcnNhbCBJQkFOIGZvcm1hdFxuICogVGhlIElCQU4gY29uc2lzdHMgb2YgdXAgdG8gMzQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIGFzIGZvbGxvd3M6XG4gKiBDb3VudHJ5IENvZGUgdXNpbmcgSVNPIDMxNjYtMSBhbHBoYS0yLCB0d28gbGV0dGVyc1xuICogY2hlY2sgZGlnaXRzLCB0d28gZGlnaXRzIGFuZFxuICogQmFzaWMgQmFuayBBY2NvdW50IE51bWJlciAoQkJBTiksIHVwIHRvIDMwIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLlxuICogTk9URTogUGVybWl0dGVkIElCQU4gY2hhcmFjdGVycyBhcmU6IGRpZ2l0cyBbMC05XSBhbmQgdGhlIDI2IGxhdGluIGFscGhhYmV0aWMgW0EtWl1cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIHVuZGVyIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaGFzVmFsaWRJYmFuRm9ybWF0KHN0cikge1xuICAvLyBTdHJpcCB3aGl0ZSBzcGFjZXMgYW5kIGh5cGhlbnNcbiAgdmFyIHN0cmlwcGVkU3RyID0gc3RyLnJlcGxhY2UoL1tcXHNcXC1dKy9naSwgJycpLnRvVXBwZXJDYXNlKCk7XG4gIHZhciBpc29Db3VudHJ5Q29kZSA9IHN0cmlwcGVkU3RyLnNsaWNlKDAsIDIpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBpc29Db3VudHJ5Q29kZSBpbiBpYmFuUmVnZXhUaHJvdWdoQ291bnRyeUNvZGUgJiYgaWJhblJlZ2V4VGhyb3VnaENvdW50cnlDb2RlW2lzb0NvdW50cnlDb2RlXS50ZXN0KHN0cmlwcGVkU3RyKTtcbn1cbi8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHN0cmluZyBoYXMgdmFsaWQgSUJBTiBDaGVja3N1bVxuICAgKiBieSBwZXJmb3JtaW5nIGJhc2ljIG1vZC05NyBvcGVyYXRpb24gYW5kXG4gICAqIHRoZSByZW1haW5kZXIgc2hvdWxkIGVxdWFsIDFcbiAgICogLS0gU3RhcnQgYnkgcmVhcnJhbmdpbmcgdGhlIElCQU4gYnkgbW92aW5nIHRoZSBmb3VyIGluaXRpYWwgY2hhcmFjdGVycyB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmdcbiAgICogLS0gUmVwbGFjZSBlYWNoIGxldHRlciBpbiB0aGUgc3RyaW5nIHdpdGggdHdvIGRpZ2l0cywgQSAtPiAxMCwgQiA9IDExLCBaID0gMzVcbiAgICogLS0gSW50ZXJwcmV0IHRoZSBzdHJpbmcgYXMgYSBkZWNpbWFsIGludGVnZXIgYW5kXG4gICAqIC0tIGNvbXB1dGUgdGhlIHJlbWFpbmRlciBvbiBkaXZpc2lvbiBieSA5NyAobW9kIDk3KVxuICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ludGVybmF0aW9uYWxfQmFua19BY2NvdW50X051bWJlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbmZ1bmN0aW9uIGhhc1ZhbGlkSWJhbkNoZWNrc3VtKHN0cikge1xuICB2YXIgc3RyaXBwZWRTdHIgPSBzdHIucmVwbGFjZSgvW15BLVowLTldKy9naSwgJycpLnRvVXBwZXJDYXNlKCk7IC8vIEtlZXAgb25seSBkaWdpdHMgYW5kIEEtWiBsYXRpbiBhbHBoYWJldGljXG5cbiAgdmFyIHJlYXJyYW5nZWQgPSBzdHJpcHBlZFN0ci5zbGljZSg0KSArIHN0cmlwcGVkU3RyLnNsaWNlKDAsIDQpO1xuICB2YXIgYWxwaGFDYXBzUmVwbGFjZWRXaXRoRGlnaXRzID0gcmVhcnJhbmdlZC5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoY2hhcikge1xuICAgIHJldHVybiBjaGFyLmNoYXJDb2RlQXQoMCkgLSA1NTtcbiAgfSk7XG4gIHZhciByZW1haW5kZXIgPSBhbHBoYUNhcHNSZXBsYWNlZFdpdGhEaWdpdHMubWF0Y2goL1xcZHsxLDd9L2cpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIoYWNjICsgdmFsdWUpICUgOTc7XG4gIH0sICcnKTtcbiAgcmV0dXJuIHJlbWFpbmRlciA9PT0gMTtcbn1cblxuZnVuY3Rpb24gaXNJQkFOKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaGFzVmFsaWRJYmFuRm9ybWF0KHN0cikgJiYgaGFzVmFsaWRJYmFuQ2hlY2tzdW0oc3RyKTtcbn1cblxudmFyIGxvY2FsZXMgPSBPYmplY3Qua2V5cyhpYmFuUmVnZXhUaHJvdWdoQ291bnRyeUNvZGUpO1xuZXhwb3J0cy5sb2NhbGVzID0gbG9jYWxlczsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTTzMxNjYxQWxwaGEyO1xuZXhwb3J0cy5Db3VudHJ5Q29kZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGZyb20gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzMxNjYtMV9hbHBoYS0yXG52YXIgdmFsaWRJU08zMTY2MUFscGhhMkNvdW50cmllc0NvZGVzID0gbmV3IFNldChbJ0FEJywgJ0FFJywgJ0FGJywgJ0FHJywgJ0FJJywgJ0FMJywgJ0FNJywgJ0FPJywgJ0FRJywgJ0FSJywgJ0FTJywgJ0FUJywgJ0FVJywgJ0FXJywgJ0FYJywgJ0FaJywgJ0JBJywgJ0JCJywgJ0JEJywgJ0JFJywgJ0JGJywgJ0JHJywgJ0JIJywgJ0JJJywgJ0JKJywgJ0JMJywgJ0JNJywgJ0JOJywgJ0JPJywgJ0JRJywgJ0JSJywgJ0JTJywgJ0JUJywgJ0JWJywgJ0JXJywgJ0JZJywgJ0JaJywgJ0NBJywgJ0NDJywgJ0NEJywgJ0NGJywgJ0NHJywgJ0NIJywgJ0NJJywgJ0NLJywgJ0NMJywgJ0NNJywgJ0NOJywgJ0NPJywgJ0NSJywgJ0NVJywgJ0NWJywgJ0NXJywgJ0NYJywgJ0NZJywgJ0NaJywgJ0RFJywgJ0RKJywgJ0RLJywgJ0RNJywgJ0RPJywgJ0RaJywgJ0VDJywgJ0VFJywgJ0VHJywgJ0VIJywgJ0VSJywgJ0VTJywgJ0VUJywgJ0ZJJywgJ0ZKJywgJ0ZLJywgJ0ZNJywgJ0ZPJywgJ0ZSJywgJ0dBJywgJ0dCJywgJ0dEJywgJ0dFJywgJ0dGJywgJ0dHJywgJ0dIJywgJ0dJJywgJ0dMJywgJ0dNJywgJ0dOJywgJ0dQJywgJ0dRJywgJ0dSJywgJ0dTJywgJ0dUJywgJ0dVJywgJ0dXJywgJ0dZJywgJ0hLJywgJ0hNJywgJ0hOJywgJ0hSJywgJ0hUJywgJ0hVJywgJ0lEJywgJ0lFJywgJ0lMJywgJ0lNJywgJ0lOJywgJ0lPJywgJ0lRJywgJ0lSJywgJ0lTJywgJ0lUJywgJ0pFJywgJ0pNJywgJ0pPJywgJ0pQJywgJ0tFJywgJ0tHJywgJ0tIJywgJ0tJJywgJ0tNJywgJ0tOJywgJ0tQJywgJ0tSJywgJ0tXJywgJ0tZJywgJ0taJywgJ0xBJywgJ0xCJywgJ0xDJywgJ0xJJywgJ0xLJywgJ0xSJywgJ0xTJywgJ0xUJywgJ0xVJywgJ0xWJywgJ0xZJywgJ01BJywgJ01DJywgJ01EJywgJ01FJywgJ01GJywgJ01HJywgJ01IJywgJ01LJywgJ01MJywgJ01NJywgJ01OJywgJ01PJywgJ01QJywgJ01RJywgJ01SJywgJ01TJywgJ01UJywgJ01VJywgJ01WJywgJ01XJywgJ01YJywgJ01ZJywgJ01aJywgJ05BJywgJ05DJywgJ05FJywgJ05GJywgJ05HJywgJ05JJywgJ05MJywgJ05PJywgJ05QJywgJ05SJywgJ05VJywgJ05aJywgJ09NJywgJ1BBJywgJ1BFJywgJ1BGJywgJ1BHJywgJ1BIJywgJ1BLJywgJ1BMJywgJ1BNJywgJ1BOJywgJ1BSJywgJ1BTJywgJ1BUJywgJ1BXJywgJ1BZJywgJ1FBJywgJ1JFJywgJ1JPJywgJ1JTJywgJ1JVJywgJ1JXJywgJ1NBJywgJ1NCJywgJ1NDJywgJ1NEJywgJ1NFJywgJ1NHJywgJ1NIJywgJ1NJJywgJ1NKJywgJ1NLJywgJ1NMJywgJ1NNJywgJ1NOJywgJ1NPJywgJ1NSJywgJ1NTJywgJ1NUJywgJ1NWJywgJ1NYJywgJ1NZJywgJ1NaJywgJ1RDJywgJ1REJywgJ1RGJywgJ1RHJywgJ1RIJywgJ1RKJywgJ1RLJywgJ1RMJywgJ1RNJywgJ1ROJywgJ1RPJywgJ1RSJywgJ1RUJywgJ1RWJywgJ1RXJywgJ1RaJywgJ1VBJywgJ1VHJywgJ1VNJywgJ1VTJywgJ1VZJywgJ1VaJywgJ1ZBJywgJ1ZDJywgJ1ZFJywgJ1ZHJywgJ1ZJJywgJ1ZOJywgJ1ZVJywgJ1dGJywgJ1dTJywgJ1lFJywgJ1lUJywgJ1pBJywgJ1pNJywgJ1pXJ10pO1xuXG5mdW5jdGlvbiBpc0lTTzMxNjYxQWxwaGEyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gdmFsaWRJU08zMTY2MUFscGhhMkNvdW50cmllc0NvZGVzLmhhcyhzdHIudG9VcHBlckNhc2UoKSk7XG59XG5cbnZhciBDb3VudHJ5Q29kZXMgPSB2YWxpZElTTzMxNjYxQWxwaGEyQ291bnRyaWVzQ29kZXM7XG5leHBvcnRzLkNvdW50cnlDb2RlcyA9IENvdW50cnlDb2RlczsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0JJQztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pc0lTTzMxNjYxQWxwaGEgPSByZXF1aXJlKFwiLi9pc0lTTzMxNjYxQWxwaGEyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fOTM2MlxudmFyIGlzQklDUmVnID0gL15bQS1aYS16XXs2fVtBLVphLXowLTldezJ9KFtBLVphLXowLTldezN9KT8kLztcblxuZnVuY3Rpb24gaXNCSUMoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7IC8vIHRvVXBwZXJDYXNlKCkgc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBhIG5ldyBtYWpvciB2ZXJzaW9uIGdvZXMgb3V0IHRoYXQgY2hhbmdlc1xuICAvLyB0aGUgcmVnZXggdG8gW0EtWl0gKHBlciB0aGUgc3BlYykuXG5cbiAgaWYgKCFfaXNJU08zMTY2MUFscGhhLkNvdW50cnlDb2Rlcy5oYXMoc3RyLnNsaWNlKDQsIDYpLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzQklDUmVnLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTUQ1O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWQ1ID0gL15bYS1mMC05XXszMn0kLztcblxuZnVuY3Rpb24gaXNNRDUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtZDUudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIYXNoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbGVuZ3RocyA9IHtcbiAgbWQ1OiAzMixcbiAgbWQ0OiAzMixcbiAgc2hhMTogNDAsXG4gIHNoYTI1NjogNjQsXG4gIHNoYTM4NDogOTYsXG4gIHNoYTUxMjogMTI4LFxuICByaXBlbWQxMjg6IDMyLFxuICByaXBlbWQxNjA6IDQwLFxuICB0aWdlcjEyODogMzIsXG4gIHRpZ2VyMTYwOiA0MCxcbiAgdGlnZXIxOTI6IDQ4LFxuICBjcmMzMjogOCxcbiAgY3JjMzJiOiA4XG59O1xuXG5mdW5jdGlvbiBpc0hhc2goc3RyLCBhbGdvcml0aG0pIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGhhc2ggPSBuZXcgUmVnRXhwKFwiXlthLWZBLUYwLTlde1wiLmNvbmNhdChsZW5ndGhzW2FsZ29yaXRobV0sIFwifSRcIikpO1xuICByZXR1cm4gaGFzaC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jhc2U2NDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBub3RCYXNlNjQgPSAvW15BLVowLTkrXFwvPV0vaTtcbnZhciB1cmxTYWZlQmFzZTY0ID0gL15bQS1aMC05X1xcLV0qJC9pO1xudmFyIGRlZmF1bHRCYXNlNjRPcHRpb25zID0ge1xuICB1cmxTYWZlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNCYXNlNjQoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRCYXNlNjRPcHRpb25zKTtcbiAgdmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgaWYgKG9wdGlvbnMudXJsU2FmZSkge1xuICAgIHJldHVybiB1cmxTYWZlQmFzZTY0LnRlc3Qoc3RyKTtcbiAgfVxuXG4gIGlmIChsZW4gJSA0ICE9PSAwIHx8IG5vdEJhc2U2NC50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZmlyc3RQYWRkaW5nQ2hhciA9IHN0ci5pbmRleE9mKCc9Jyk7XG4gIHJldHVybiBmaXJzdFBhZGRpbmdDaGFyID09PSAtMSB8fCBmaXJzdFBhZGRpbmdDaGFyID09PSBsZW4gLSAxIHx8IGZpcnN0UGFkZGluZ0NoYXIgPT09IGxlbiAtIDIgJiYgc3RyW2xlbiAtIDFdID09PSAnPSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0pXVDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pc0Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzQmFzZTY0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNKV1Qoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBkb3RTcGxpdCA9IHN0ci5zcGxpdCgnLicpO1xuICB2YXIgbGVuID0gZG90U3BsaXQubGVuZ3RoO1xuXG4gIGlmIChsZW4gPiAzIHx8IGxlbiA8IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZG90U3BsaXQucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnJFbGVtKSB7XG4gICAgcmV0dXJuIGFjYyAmJiAoMCwgX2lzQmFzZS5kZWZhdWx0KShjdXJyRWxlbSwge1xuICAgICAgdXJsU2FmZTogdHJ1ZVxuICAgIH0pO1xuICB9LCB0cnVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSlNPTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIGRlZmF1bHRfanNvbl9vcHRpb25zID0ge1xuICBhbGxvd19wcmltaXRpdmVzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNKU09OKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIHRyeSB7XG4gICAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9qc29uX29wdGlvbnMpO1xuICAgIHZhciBwcmltaXRpdmVzID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5hbGxvd19wcmltaXRpdmVzKSB7XG4gICAgICBwcmltaXRpdmVzID0gW251bGwsIGZhbHNlLCB0cnVlXTtcbiAgICB9XG5cbiAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIHJldHVybiBwcmltaXRpdmVzLmluY2x1ZGVzKG9iaikgfHwgISFvYmogJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0JztcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qIGlnbm9yZSAqL1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbXB0eTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2lzX2VtcHR5X29wdGlvbnMgPSB7XG4gIGlnbm9yZV93aGl0ZXNwYWNlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNFbXB0eShzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9pc19lbXB0eV9vcHRpb25zKTtcbiAgcmV0dXJuIChvcHRpb25zLmlnbm9yZV93aGl0ZXNwYWNlID8gc3RyLnRyaW0oKS5sZW5ndGggOiBzdHIubGVuZ3RoKSA9PT0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTGVuZ3RoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuZnVuY3Rpb24gaXNMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW47XG4gIHZhciBtYXg7XG5cbiAgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV0gfHwgMDtcbiAgICBtYXggPSBhcmd1bWVudHNbMl07XG4gIH1cblxuICB2YXIgc3Vycm9nYXRlUGFpcnMgPSBzdHIubWF0Y2goL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZykgfHwgW107XG4gIHZhciBsZW4gPSBzdHIubGVuZ3RoIC0gc3Vycm9nYXRlUGFpcnMubGVuZ3RoO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VVSUQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB1dWlkID0ge1xuICAxOiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LTFbMC05QS1GXXszfS1bMC05QS1GXXs0fS1bMC05QS1GXXsxMn0kL2ksXG4gIDI6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tMlswLTlBLUZdezN9LVswLTlBLUZdezR9LVswLTlBLUZdezEyfSQvaSxcbiAgMzogL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS0zWzAtOUEtRl17M30tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9JC9pLFxuICA0OiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LTRbMC05QS1GXXszfS1bODlBQl1bMC05QS1GXXszfS1bMC05QS1GXXsxMn0kL2ksXG4gIDU6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tNVswLTlBLUZdezN9LVs4OUFCXVswLTlBLUZdezN9LVswLTlBLUZdezEyfSQvaSxcbiAgYWxsOiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LVswLTlBLUZdezR9LVswLTlBLUZdezR9LVswLTlBLUZdezEyfSQvaVxufTtcblxuZnVuY3Rpb24gaXNVVUlEKHN0ciwgdmVyc2lvbikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgcGF0dGVybiA9IHV1aWRbIVt1bmRlZmluZWQsIG51bGxdLmluY2x1ZGVzKHZlcnNpb24pID8gdmVyc2lvbiA6ICdhbGwnXTtcbiAgcmV0dXJuICEhcGF0dGVybiAmJiBwYXR0ZXJuLnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9uZ29JZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pc0hleGFkZWNpbWFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc0hleGFkZWNpbWFsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNNb25nb0lkKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gKDAsIF9pc0hleGFkZWNpbWFsLmRlZmF1bHQpKHN0cikgJiYgc3RyLmxlbmd0aCA9PT0gMjQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FmdGVyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX3RvRGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdG9EYXRlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNBZnRlcihzdHIpIHtcbiAgdmFyIGRhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGNvbXBhcmlzb24gPSAoMCwgX3RvRGF0ZS5kZWZhdWx0KShkYXRlKTtcbiAgdmFyIG9yaWdpbmFsID0gKDAsIF90b0RhdGUuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICEhKG9yaWdpbmFsICYmIGNvbXBhcmlzb24gJiYgb3JpZ2luYWwgPiBjb21wYXJpc29uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQmVmb3JlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX3RvRGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdG9EYXRlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNCZWZvcmUoc3RyKSB7XG4gIHZhciBkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBTdHJpbmcobmV3IERhdGUoKSk7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBjb21wYXJpc29uID0gKDAsIF90b0RhdGUuZGVmYXVsdCkoZGF0ZSk7XG4gIHZhciBvcmlnaW5hbCA9ICgwLCBfdG9EYXRlLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAhIShvcmlnaW5hbCAmJiBjb21wYXJpc29uICYmIG9yaWdpbmFsIDwgY29tcGFyaXNvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0luO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG52YXIgX3RvU3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL3RvU3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBpc0luKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgaTtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9wdGlvbnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG5cbiAgICBmb3IgKGkgaW4gb3B0aW9ucykge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBpKSkge1xuICAgICAgICBhcnJheVtpXSA9ICgwLCBfdG9TdHJpbmcuZGVmYXVsdCkob3B0aW9uc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2Yoc3RyKSA+PSAwO1xuICB9IGVsc2UgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5pbmRleE9mKHN0cikgPj0gMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3JlZGl0Q2FyZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIGNyZWRpdENhcmQgPSAvXig/OjRbMC05XXsxMn0oPzpbMC05XXszLDZ9KT98NVsxLTVdWzAtOV17MTR9fCgyMjJbMS05XXwyMlszLTldWzAtOV18MlszLTZdWzAtOV17Mn18MjdbMDFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMiwxNX18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9fDZbMjddWzAtOV17MTR9fF4oODFbMC05XXsxNCwxN30pKSQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGlzQ3JlZGl0Q2FyZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG5cbiAgaWYgKCFjcmVkaXRDYXJkLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQ7XG4gIHZhciB0bXBOdW07XG4gIHZhciBzaG91bGREb3VibGU7XG5cbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcblxuICAgIGlmIChzaG91bGREb3VibGUpIHtcbiAgICAgIHRtcE51bSAqPSAyO1xuXG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gJSAxMCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cblxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cblxuICByZXR1cm4gISEoc3VtICUgMTAgPT09IDAgPyBzYW5pdGl6ZWQgOiBmYWxzZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lkZW50aXR5Q2FyZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxudmFyIF9pc0ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNJbnRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsaWRhdG9ycyA9IHtcbiAgUEw6IGZ1bmN0aW9uIFBMKHN0cikge1xuICAgICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gICAgdmFyIHdlaWdodE9mRGlnaXRzID0ge1xuICAgICAgMTogMSxcbiAgICAgIDI6IDMsXG4gICAgICAzOiA3LFxuICAgICAgNDogOSxcbiAgICAgIDU6IDEsXG4gICAgICA2OiAzLFxuICAgICAgNzogNyxcbiAgICAgIDg6IDksXG4gICAgICA5OiAxLFxuICAgICAgMTA6IDMsXG4gICAgICAxMTogMFxuICAgIH07XG5cbiAgICBpZiAoc3RyICE9IG51bGwgJiYgc3RyLmxlbmd0aCA9PT0gMTEgJiYgKDAsIF9pc0ludC5kZWZhdWx0KShzdHIsIHtcbiAgICAgIGFsbG93X2xlYWRpbmdfemVyb2VzOiB0cnVlXG4gICAgfSkpIHtcbiAgICAgIHZhciBkaWdpdHMgPSBzdHIuc3BsaXQoJycpLnNsaWNlKDAsIC0xKTtcbiAgICAgIHZhciBzdW0gPSBkaWdpdHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGRpZ2l0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYWNjICsgTnVtYmVyKGRpZ2l0KSAqIHdlaWdodE9mRGlnaXRzW2luZGV4ICsgMV07XG4gICAgICB9LCAwKTtcbiAgICAgIHZhciBtb2R1bG8gPSBzdW0gJSAxMDtcbiAgICAgIHZhciBsYXN0RGlnaXQgPSBOdW1iZXIoc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkpO1xuXG4gICAgICBpZiAobW9kdWxvID09PSAwICYmIGxhc3REaWdpdCA9PT0gMCB8fCBsYXN0RGlnaXQgPT09IDEwIC0gbW9kdWxvKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgRVM6IGZ1bmN0aW9uIEVTKHN0cikge1xuICAgICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gICAgdmFyIEROSSA9IC9eWzAtOVgtWl1bMC05XXs3fVtUUldBR01ZRlBEWEJOSlpTUVZITENLRV0kLztcbiAgICB2YXIgY2hhcnNWYWx1ZSA9IHtcbiAgICAgIFg6IDAsXG4gICAgICBZOiAxLFxuICAgICAgWjogMlxuICAgIH07XG4gICAgdmFyIGNvbnRyb2xEaWdpdHMgPSBbJ1QnLCAnUicsICdXJywgJ0EnLCAnRycsICdNJywgJ1knLCAnRicsICdQJywgJ0QnLCAnWCcsICdCJywgJ04nLCAnSicsICdaJywgJ1MnLCAnUScsICdWJywgJ0gnLCAnTCcsICdDJywgJ0snLCAnRSddOyAvLyBzYW5pdGl6ZSB1c2VyIGlucHV0XG5cbiAgICB2YXIgc2FuaXRpemVkID0gc3RyLnRyaW0oKS50b1VwcGVyQ2FzZSgpOyAvLyB2YWxpZGF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmVcblxuICAgIGlmICghRE5JLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gdmFsaWRhdGUgdGhlIGNvbnRyb2wgZGlnaXRcblxuXG4gICAgdmFyIG51bWJlciA9IHNhbml0aXplZC5zbGljZSgwLCAtMSkucmVwbGFjZSgvW1gsWSxaXS9nLCBmdW5jdGlvbiAoY2hhcikge1xuICAgICAgcmV0dXJuIGNoYXJzVmFsdWVbY2hhcl07XG4gICAgfSk7XG4gICAgcmV0dXJuIHNhbml0aXplZC5lbmRzV2l0aChjb250cm9sRGlnaXRzW251bWJlciAlIDIzXSk7XG4gIH0sXG4gIEZJOiBmdW5jdGlvbiBGSShzdHIpIHtcbiAgICAvLyBodHRwczovL2R2di5maS9lbi9wZXJzb25hbC1pZGVudGl0eS1jb2RlIzp+OnRleHQ9Y29udHJvbCUyMGNoYXJhY3RlciUyMGZvciUyMGEtLHBlcnNvbmFsLC1pZGVudGl0eSUyMGNvZGUlMjBjYWxjdWxhdGVkXG4gICAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICAgIGlmIChzdHIubGVuZ3RoICE9PSAxMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RyLm1hdGNoKC9eXFxkezZ9W1xcLUFcXCtdXFxkezN9WzAtOUFCQ0RFRkhKS0xNTlBSU1RVVldYWV17MX0kLykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hlY2tEaWdpdHMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkhKS0xNTlBSU1RVVldYWSc7XG4gICAgdmFyIGlkQXNOdW1iZXIgPSBwYXJzZUludChzdHIuc2xpY2UoMCwgNiksIDEwKSAqIDEwMDAgKyBwYXJzZUludChzdHIuc2xpY2UoNywgMTApLCAxMCk7XG4gICAgdmFyIHJlbWFpbmRlciA9IGlkQXNOdW1iZXIgJSAzMTtcbiAgICB2YXIgY2hlY2tEaWdpdCA9IGNoZWNrRGlnaXRzW3JlbWFpbmRlcl07XG4gICAgcmV0dXJuIGNoZWNrRGlnaXQgPT09IHN0ci5zbGljZSgxMCwgMTEpO1xuICB9LFxuICBJTjogZnVuY3Rpb24gSU4oc3RyKSB7XG4gICAgdmFyIEROSSA9IC9eWzEtOV1cXGR7M31cXHM/XFxkezR9XFxzP1xcZHs0fSQvOyAvLyBtdWx0aXBsaWNhdGlvbiB0YWJsZVxuXG4gICAgdmFyIGQgPSBbWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLCBbMSwgMiwgMywgNCwgMCwgNiwgNywgOCwgOSwgNV0sIFsyLCAzLCA0LCAwLCAxLCA3LCA4LCA5LCA1LCA2XSwgWzMsIDQsIDAsIDEsIDIsIDgsIDksIDUsIDYsIDddLCBbNCwgMCwgMSwgMiwgMywgOSwgNSwgNiwgNywgOF0sIFs1LCA5LCA4LCA3LCA2LCAwLCA0LCAzLCAyLCAxXSwgWzYsIDUsIDksIDgsIDcsIDEsIDAsIDQsIDMsIDJdLCBbNywgNiwgNSwgOSwgOCwgMiwgMSwgMCwgNCwgM10sIFs4LCA3LCA2LCA1LCA5LCAzLCAyLCAxLCAwLCA0XSwgWzksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDEsIDBdXTsgLy8gcGVybXV0YXRpb24gdGFibGVcblxuICAgIHZhciBwID0gW1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSwgWzEsIDUsIDcsIDYsIDIsIDgsIDMsIDAsIDksIDRdLCBbNSwgOCwgMCwgMywgNywgOSwgNiwgMSwgNCwgMl0sIFs4LCA5LCAxLCA2LCAwLCA0LCAzLCA1LCAyLCA3XSwgWzksIDQsIDUsIDMsIDEsIDIsIDYsIDgsIDcsIDBdLCBbNCwgMiwgOCwgNiwgNSwgNywgMywgOSwgMCwgMV0sIFsyLCA3LCA5LCAzLCA4LCAwLCA2LCA0LCAxLCA1XSwgWzcsIDAsIDQsIDYsIDksIDEsIDMsIDIsIDUsIDhdXTsgLy8gc2FuaXRpemUgdXNlciBpbnB1dFxuXG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCk7IC8vIHZhbGlkYXRlIHRoZSBkYXRhIHN0cnVjdHVyZVxuXG4gICAgaWYgKCFETkkudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGMgPSAwO1xuICAgIHZhciBpbnZlcnRlZEFycmF5ID0gc2FuaXRpemVkLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJycpLm1hcChOdW1iZXIpLnJldmVyc2UoKTtcbiAgICBpbnZlcnRlZEFycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgYyA9IGRbY11bcFtpICUgOF1bdmFsXV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGMgPT09IDA7XG4gIH0sXG4gIElSOiBmdW5jdGlvbiBJUihzdHIpIHtcbiAgICBpZiAoIXN0ci5tYXRjaCgvXlxcZHsxMH0kLykpIHJldHVybiBmYWxzZTtcbiAgICBzdHIgPSBcIjAwMDBcIi5jb25jYXQoc3RyKS5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgIGlmIChwYXJzZUludChzdHIuc3Vic3RyKDMsIDYpLCAxMCkgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbGFzdE51bWJlciA9IHBhcnNlSW50KHN0ci5zdWJzdHIoOSwgMSksIDEwKTtcbiAgICB2YXIgc3VtID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBzdW0gKz0gcGFyc2VJbnQoc3RyLnN1YnN0cihpLCAxKSwgMTApICogKDEwIC0gaSk7XG4gICAgfVxuXG4gICAgc3VtICU9IDExO1xuICAgIHJldHVybiBzdW0gPCAyICYmIGxhc3ROdW1iZXIgPT09IHN1bSB8fCBzdW0gPj0gMiAmJiBsYXN0TnVtYmVyID09PSAxMSAtIHN1bTtcbiAgfSxcbiAgSVQ6IGZ1bmN0aW9uIElUKHN0cikge1xuICAgIGlmIChzdHIubGVuZ3RoICE9PSA5KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHN0ciA9PT0gJ0NBMDAwMDBBQScpIHJldHVybiBmYWxzZTsgLy8gaHR0cHM6Ly9pdC53aWtpcGVkaWEub3JnL3dpa2kvQ2FydGFfZCUyN2lkZW50aXQlQzMlQTBfZWxldHRyb25pY2FfaXRhbGlhbmFcblxuICAgIHJldHVybiBzdHIuc2VhcmNoKC9DW0EtWl1bMC05XXs1fVtBLVpdezJ9L2kpID4gLTE7XG4gIH0sXG4gIE5POiBmdW5jdGlvbiBOTyhzdHIpIHtcbiAgICB2YXIgc2FuaXRpemVkID0gc3RyLnRyaW0oKTtcbiAgICBpZiAoaXNOYU4oTnVtYmVyKHNhbml0aXplZCkpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNhbml0aXplZC5sZW5ndGggIT09IDExKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNhbml0aXplZCA9PT0gJzAwMDAwMDAwMDAwJykgcmV0dXJuIGZhbHNlOyAvLyBodHRwczovL25vLndpa2lwZWRpYS5vcmcvd2lraS9GJUMzJUI4ZHNlbHNudW1tZXJcblxuICAgIHZhciBmID0gc2FuaXRpemVkLnNwbGl0KCcnKS5tYXAoTnVtYmVyKTtcbiAgICB2YXIgazEgPSAoMTEgLSAoMyAqIGZbMF0gKyA3ICogZlsxXSArIDYgKiBmWzJdICsgMSAqIGZbM10gKyA4ICogZls0XSArIDkgKiBmWzVdICsgNCAqIGZbNl0gKyA1ICogZls3XSArIDIgKiBmWzhdKSAlIDExKSAlIDExO1xuICAgIHZhciBrMiA9ICgxMSAtICg1ICogZlswXSArIDQgKiBmWzFdICsgMyAqIGZbMl0gKyAyICogZlszXSArIDcgKiBmWzRdICsgNiAqIGZbNV0gKyA1ICogZls2XSArIDQgKiBmWzddICsgMyAqIGZbOF0gKyAyICogazEpICUgMTEpICUgMTE7XG4gICAgaWYgKGsxICE9PSBmWzldIHx8IGsyICE9PSBmWzEwXSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBUSDogZnVuY3Rpb24gVEgoc3RyKSB7XG4gICAgaWYgKCFzdHIubWF0Y2goL15bMS04XVxcZHsxMn0kLykpIHJldHVybiBmYWxzZTsgLy8gdmFsaWRhdGUgY2hlY2sgZGlnaXRcblxuICAgIHZhciBzdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBzdW0gKz0gcGFyc2VJbnQoc3RyW2ldLCAxMCkgKiAoMTMgLSBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyWzEyXSA9PT0gKCgxMSAtIHN1bSAlIDExKSAlIDEwKS50b1N0cmluZygpO1xuICB9LFxuICBMSzogZnVuY3Rpb24gTEsoc3RyKSB7XG4gICAgdmFyIG9sZF9uaWMgPSAvXlsxLTldXFxkezh9W3Z4XSQvaTtcbiAgICB2YXIgbmV3X25pYyA9IC9eWzEtOV1cXGR7MTF9JC9pO1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAxMCAmJiBvbGRfbmljLnRlc3Qoc3RyKSkgcmV0dXJuIHRydWU7ZWxzZSBpZiAoc3RyLmxlbmd0aCA9PT0gMTIgJiYgbmV3X25pYy50ZXN0KHN0cikpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgJ2hlLUlMJzogZnVuY3Rpb24gaGVJTChzdHIpIHtcbiAgICB2YXIgRE5JID0gL15cXGR7OX0kLzsgLy8gc2FuaXRpemUgdXNlciBpbnB1dFxuXG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCk7IC8vIHZhbGlkYXRlIHRoZSBkYXRhIHN0cnVjdHVyZVxuXG4gICAgaWYgKCFETkkudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gc2FuaXRpemVkO1xuICAgIHZhciBzdW0gPSAwLFxuICAgICAgICBpbmNOdW07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbmNOdW0gPSBOdW1iZXIoaWRbaV0pICogKGkgJSAyICsgMSk7IC8vIE11bHRpcGx5IG51bWJlciBieSAxIG9yIDJcblxuICAgICAgc3VtICs9IGluY051bSA+IDkgPyBpbmNOdW0gLSA5IDogaW5jTnVtOyAvLyBTdW0gdGhlIGRpZ2l0cyB1cCBhbmQgYWRkIHRvIHRvdGFsXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bSAlIDEwID09PSAwO1xuICB9LFxuICAnYXItTFknOiBmdW5jdGlvbiBhckxZKHN0cikge1xuICAgIC8vIExpYnlhIE5hdGlvbmFsIElkZW50aXR5IE51bWJlciBOSU4gaXMgMTIgZGlnaXRzLCB0aGUgZmlyc3QgZGlnaXQgaXMgZWl0aGVyIDEgb3IgMlxuICAgIHZhciBOSU4gPSAvXigxfDIpXFxkezExfSQvOyAvLyBzYW5pdGl6ZSB1c2VyIGlucHV0XG5cbiAgICB2YXIgc2FuaXRpemVkID0gc3RyLnRyaW0oKTsgLy8gdmFsaWRhdGUgdGhlIGRhdGEgc3RydWN0dXJlXG5cbiAgICBpZiAoIU5JTi50ZXN0KHNhbml0aXplZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgJ2FyLVROJzogZnVuY3Rpb24gYXJUTihzdHIpIHtcbiAgICB2YXIgRE5JID0gL15cXGR7OH0kLzsgLy8gc2FuaXRpemUgdXNlciBpbnB1dFxuXG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCk7IC8vIHZhbGlkYXRlIHRoZSBkYXRhIHN0cnVjdHVyZVxuXG4gICAgaWYgKCFETkkudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gICd6aC1DTic6IGZ1bmN0aW9uIHpoQ04oc3RyKSB7XG4gICAgdmFyIHByb3ZpbmNlc0FuZENpdGllcyA9IFsnMTEnLCAvLyBcdTUzMTdcdTRFQUNcbiAgICAnMTInLCAvLyBcdTU5MjlcdTZEMjVcbiAgICAnMTMnLCAvLyBcdTZDQjNcdTUzMTdcbiAgICAnMTQnLCAvLyBcdTVDNzFcdTg5N0ZcbiAgICAnMTUnLCAvLyBcdTUxODVcdTg0OTlcdTUzRTRcbiAgICAnMjEnLCAvLyBcdThGQkRcdTVCODFcbiAgICAnMjInLCAvLyBcdTU0MDlcdTY3OTdcbiAgICAnMjMnLCAvLyBcdTlFRDFcdTlGOTlcdTZDNUZcbiAgICAnMzEnLCAvLyBcdTRFMEFcdTZENzdcbiAgICAnMzInLCAvLyBcdTZDNUZcdTgyQ0ZcbiAgICAnMzMnLCAvLyBcdTZENTlcdTZDNUZcbiAgICAnMzQnLCAvLyBcdTVCODlcdTVGQkRcbiAgICAnMzUnLCAvLyBcdTc5OEZcdTVFRkFcbiAgICAnMzYnLCAvLyBcdTZDNUZcdTg5N0ZcbiAgICAnMzcnLCAvLyBcdTVDNzFcdTRFMUNcbiAgICAnNDEnLCAvLyBcdTZDQjNcdTUzNTdcbiAgICAnNDInLCAvLyBcdTZFNTZcdTUzMTdcbiAgICAnNDMnLCAvLyBcdTZFNTZcdTUzNTdcbiAgICAnNDQnLCAvLyBcdTVFN0ZcdTRFMUNcbiAgICAnNDUnLCAvLyBcdTVFN0ZcdTg5N0ZcbiAgICAnNDYnLCAvLyBcdTZENzdcdTUzNTdcbiAgICAnNTAnLCAvLyBcdTkxQ0RcdTVFODZcbiAgICAnNTEnLCAvLyBcdTU2REJcdTVERERcbiAgICAnNTInLCAvLyBcdThEMzVcdTVEREVcbiAgICAnNTMnLCAvLyBcdTRFOTFcdTUzNTdcbiAgICAnNTQnLCAvLyBcdTg5N0ZcdTg1Q0ZcbiAgICAnNjEnLCAvLyBcdTk2NTVcdTg5N0ZcbiAgICAnNjInLCAvLyBcdTc1MThcdTgwODNcbiAgICAnNjMnLCAvLyBcdTk3NTJcdTZENzdcbiAgICAnNjQnLCAvLyBcdTVCODFcdTU5MEZcbiAgICAnNjUnLCAvLyBcdTY1QjBcdTc1ODZcbiAgICAnNzEnLCAvLyBcdTUzRjBcdTZFN0VcbiAgICAnODEnLCAvLyBcdTk5OTlcdTZFMkZcbiAgICAnODInLCAvLyBcdTZGQjNcdTk1RThcbiAgICAnOTEnIC8vIFx1NTZGRFx1NTkxNlxuICAgIF07XG4gICAgdmFyIHBvd2VycyA9IFsnNycsICc5JywgJzEwJywgJzUnLCAnOCcsICc0JywgJzInLCAnMScsICc2JywgJzMnLCAnNycsICc5JywgJzEwJywgJzUnLCAnOCcsICc0JywgJzInXTtcbiAgICB2YXIgcGFyaXR5Qml0ID0gWycxJywgJzAnLCAnWCcsICc5JywgJzgnLCAnNycsICc2JywgJzUnLCAnNCcsICczJywgJzInXTtcblxuICAgIHZhciBjaGVja0FkZHJlc3NDb2RlID0gZnVuY3Rpb24gY2hlY2tBZGRyZXNzQ29kZShhZGRyZXNzQ29kZSkge1xuICAgICAgcmV0dXJuIHByb3ZpbmNlc0FuZENpdGllcy5pbmNsdWRlcyhhZGRyZXNzQ29kZSk7XG4gICAgfTtcblxuICAgIHZhciBjaGVja0JpcnRoRGF5Q29kZSA9IGZ1bmN0aW9uIGNoZWNrQmlydGhEYXlDb2RlKGJpckRheUNvZGUpIHtcbiAgICAgIHZhciB5eXl5ID0gcGFyc2VJbnQoYmlyRGF5Q29kZS5zdWJzdHJpbmcoMCwgNCksIDEwKTtcbiAgICAgIHZhciBtbSA9IHBhcnNlSW50KGJpckRheUNvZGUuc3Vic3RyaW5nKDQsIDYpLCAxMCk7XG4gICAgICB2YXIgZGQgPSBwYXJzZUludChiaXJEYXlDb2RlLnN1YnN0cmluZyg2KSwgMTApO1xuICAgICAgdmFyIHhkYXRhID0gbmV3IERhdGUoeXl5eSwgbW0gLSAxLCBkZCk7XG5cbiAgICAgIGlmICh4ZGF0YSA+IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgfSBlbHNlIGlmICh4ZGF0YS5nZXRGdWxsWWVhcigpID09PSB5eXl5ICYmIHhkYXRhLmdldE1vbnRoKCkgPT09IG1tIC0gMSAmJiB4ZGF0YS5nZXREYXRlKCkgPT09IGRkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRQYXJpdHlCaXQgPSBmdW5jdGlvbiBnZXRQYXJpdHlCaXQoaWRDYXJkTm8pIHtcbiAgICAgIHZhciBpZDE3ID0gaWRDYXJkTm8uc3Vic3RyaW5nKDAsIDE3KTtcbiAgICAgIHZhciBwb3dlciA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTc7IGkrKykge1xuICAgICAgICBwb3dlciArPSBwYXJzZUludChpZDE3LmNoYXJBdChpKSwgMTApICogcGFyc2VJbnQocG93ZXJzW2ldLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2QgPSBwb3dlciAlIDExO1xuICAgICAgcmV0dXJuIHBhcml0eUJpdFttb2RdO1xuICAgIH07XG5cbiAgICB2YXIgY2hlY2tQYXJpdHlCaXQgPSBmdW5jdGlvbiBjaGVja1Bhcml0eUJpdChpZENhcmRObykge1xuICAgICAgcmV0dXJuIGdldFBhcml0eUJpdChpZENhcmRObykgPT09IGlkQ2FyZE5vLmNoYXJBdCgxNykudG9VcHBlckNhc2UoKTtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrMTVJZENhcmRObyA9IGZ1bmN0aW9uIGNoZWNrMTVJZENhcmRObyhpZENhcmRObykge1xuICAgICAgdmFyIGNoZWNrID0gL15bMS05XVxcZHs3fSgoMFsxLTldKXwoMVswLTJdKSkoKDBbMS05XSl8KFsxLTJdWzAtOV0pfCgzWzAtMV0pKVxcZHszfSQvLnRlc3QoaWRDYXJkTm8pO1xuICAgICAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIGFkZHJlc3NDb2RlID0gaWRDYXJkTm8uc3Vic3RyaW5nKDAsIDIpO1xuICAgICAgY2hlY2sgPSBjaGVja0FkZHJlc3NDb2RlKGFkZHJlc3NDb2RlKTtcbiAgICAgIGlmICghY2hlY2spIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBiaXJEYXlDb2RlID0gXCIxOVwiLmNvbmNhdChpZENhcmROby5zdWJzdHJpbmcoNiwgMTIpKTtcbiAgICAgIGNoZWNrID0gY2hlY2tCaXJ0aERheUNvZGUoYmlyRGF5Q29kZSk7XG4gICAgICBpZiAoIWNoZWNrKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrMThJZENhcmRObyA9IGZ1bmN0aW9uIGNoZWNrMThJZENhcmRObyhpZENhcmRObykge1xuICAgICAgdmFyIGNoZWNrID0gL15bMS05XVxcZHs1fVsxLTldXFxkezN9KCgwWzEtOV0pfCgxWzAtMl0pKSgoMFsxLTldKXwoWzEtMl1bMC05XSl8KDNbMC0xXSkpXFxkezN9KFxcZHx4fFgpJC8udGVzdChpZENhcmRObyk7XG4gICAgICBpZiAoIWNoZWNrKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgYWRkcmVzc0NvZGUgPSBpZENhcmROby5zdWJzdHJpbmcoMCwgMik7XG4gICAgICBjaGVjayA9IGNoZWNrQWRkcmVzc0NvZGUoYWRkcmVzc0NvZGUpO1xuICAgICAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIGJpckRheUNvZGUgPSBpZENhcmROby5zdWJzdHJpbmcoNiwgMTQpO1xuICAgICAgY2hlY2sgPSBjaGVja0JpcnRoRGF5Q29kZShiaXJEYXlDb2RlKTtcbiAgICAgIGlmICghY2hlY2spIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBjaGVja1Bhcml0eUJpdChpZENhcmRObyk7XG4gICAgfTtcblxuICAgIHZhciBjaGVja0lkQ2FyZE5vID0gZnVuY3Rpb24gY2hlY2tJZENhcmRObyhpZENhcmRObykge1xuICAgICAgdmFyIGNoZWNrID0gL15cXGR7MTV9fChcXGR7MTd9KFxcZHx4fFgpKSQvLnRlc3QoaWRDYXJkTm8pO1xuICAgICAgaWYgKCFjaGVjaykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBpZiAoaWRDYXJkTm8ubGVuZ3RoID09PSAxNSkge1xuICAgICAgICByZXR1cm4gY2hlY2sxNUlkQ2FyZE5vKGlkQ2FyZE5vKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoZWNrMThJZENhcmRObyhpZENhcmRObyk7XG4gICAgfTtcblxuICAgIHJldHVybiBjaGVja0lkQ2FyZE5vKHN0cik7XG4gIH0sXG4gICd6aC1UVyc6IGZ1bmN0aW9uIHpoVFcoc3RyKSB7XG4gICAgdmFyIEFMUEhBQkVUX0NPREVTID0ge1xuICAgICAgQTogMTAsXG4gICAgICBCOiAxMSxcbiAgICAgIEM6IDEyLFxuICAgICAgRDogMTMsXG4gICAgICBFOiAxNCxcbiAgICAgIEY6IDE1LFxuICAgICAgRzogMTYsXG4gICAgICBIOiAxNyxcbiAgICAgIEk6IDM0LFxuICAgICAgSjogMTgsXG4gICAgICBLOiAxOSxcbiAgICAgIEw6IDIwLFxuICAgICAgTTogMjEsXG4gICAgICBOOiAyMixcbiAgICAgIE86IDM1LFxuICAgICAgUDogMjMsXG4gICAgICBROiAyNCxcbiAgICAgIFI6IDI1LFxuICAgICAgUzogMjYsXG4gICAgICBUOiAyNyxcbiAgICAgIFU6IDI4LFxuICAgICAgVjogMjksXG4gICAgICBXOiAzMixcbiAgICAgIFg6IDMwLFxuICAgICAgWTogMzEsXG4gICAgICBaOiAzM1xuICAgIH07XG4gICAgdmFyIHNhbml0aXplZCA9IHN0ci50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIS9eW0EtWl1bMC05XXs5fSQvLnRlc3Qoc2FuaXRpemVkKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHNhbml0aXplZCkucmVkdWNlKGZ1bmN0aW9uIChzdW0sIG51bWJlciwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgY29kZSA9IEFMUEhBQkVUX0NPREVTW251bWJlcl07XG4gICAgICAgIHJldHVybiBjb2RlICUgMTAgKiA5ICsgTWF0aC5mbG9vcihjb2RlIC8gMTApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDkpIHtcbiAgICAgICAgcmV0dXJuICgxMCAtIHN1bSAlIDEwIC0gTnVtYmVyKG51bWJlcikpICUgMTAgPT09IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdW0gKyBOdW1iZXIobnVtYmVyKSAqICg5IC0gaW5kZXgpO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpc0lkZW50aXR5Q2FyZChzdHIsIGxvY2FsZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChsb2NhbGUgaW4gdmFsaWRhdG9ycykge1xuICAgIHJldHVybiB2YWxpZGF0b3JzW2xvY2FsZV0oc3RyKTtcbiAgfSBlbHNlIGlmIChsb2NhbGUgPT09ICdhbnknKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbGlkYXRvcnMpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3R3YXJsb3N0L2lzdGFuYnVsL2Jsb2IvbWFzdGVyL2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLm1kI2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLXB1cnBvc2VzXG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKHZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0gdmFsaWRhdG9yc1trZXldO1xuXG4gICAgICAgIGlmICh2YWxpZGF0b3Ioc3RyKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2NhbGUgJ1wiLmNvbmNhdChsb2NhbGUsIFwiJ1wiKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VBTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBUaGUgbW9zdCBjb21tb25seSB1c2VkIEVBTiBzdGFuZGFyZCBpc1xuICogdGhlIHRoaXJ0ZWVuLWRpZ2l0IEVBTi0xMywgd2hpbGUgdGhlXG4gKiBsZXNzIGNvbW1vbmx5IHVzZWQgOC1kaWdpdCBFQU4tOCBiYXJjb2RlIHdhc1xuICogaW50cm9kdWNlZCBmb3IgdXNlIG9uIHNtYWxsIHBhY2thZ2VzLlxuICogQWxzbyBFQU4vVUNDLTE0IGlzIHVzZWQgZm9yIEdyb3VwaW5nIG9mIGluZGl2aWR1YWxcbiAqIHRyYWRlIGl0ZW1zIGFib3ZlIHVuaXQgbGV2ZWwoSW50ZXJtZWRpYXRlLCBDYXJ0b24gb3IgUGFsbGV0KS5cbiAqIEZvciBtb3JlIGluZm8gYWJvdXQgRUFOLTE0IGNoZWNrb3V0OiBodHRwczovL3d3dy5ndGluLmluZm8vaXRmLTE0LWJhcmNvZGVzL1xuICogRUFOIGNvbnNpc3RzIG9mOlxuICogR1MxIHByZWZpeCwgbWFudWZhY3R1cmVyIGNvZGUsIHByb2R1Y3QgY29kZSBhbmQgY2hlY2sgZGlnaXRcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSW50ZXJuYXRpb25hbF9BcnRpY2xlX051bWJlclxuICogUmVmZXJlbmNlOiBodHRwczovL3d3dy5ndGluLmluZm8vXG4gKi9cblxuLyoqXG4gKiBEZWZpbmUgRUFOIExlbmdodHM7IDggZm9yIEVBTi04OyAxMyBmb3IgRUFOLTEzOyAxNCBmb3IgRUFOLTE0XG4gKiBhbmQgUmVndWxhciBFeHByZXNzaW9uIGZvciB2YWxpZCBFQU5zIChFQU4tOCwgRUFOLTEzLCBFQU4tMTQpLFxuICogd2l0aCBleGFjdCBudW1iZXJpYyBtYXRjaGluZyBvZiA4IG9yIDEzIG9yIDE0IGRpZ2l0cyBbMC05XVxuICovXG52YXIgTEVOR1RIX0VBTl84ID0gODtcbnZhciBMRU5HVEhfRUFOXzE0ID0gMTQ7XG52YXIgdmFsaWRFYW5SZWdleCA9IC9eKFxcZHs4fXxcXGR7MTN9fFxcZHsxNH0pJC87XG4vKipcbiAqIEdldCBwb3NpdGlvbiB3ZWlnaHQgZ2l2ZW46XG4gKiBFQU4gbGVuZ3RoIGFuZCBkaWdpdCBpbmRleC9wb3NpdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIGdldFBvc2l0aW9uV2VpZ2h0VGhyb3VnaExlbmd0aEFuZEluZGV4KGxlbmd0aCwgaW5kZXgpIHtcbiAgaWYgKGxlbmd0aCA9PT0gTEVOR1RIX0VBTl84IHx8IGxlbmd0aCA9PT0gTEVOR1RIX0VBTl8xNCkge1xuICAgIHJldHVybiBpbmRleCAlIDIgPT09IDAgPyAzIDogMTtcbiAgfVxuXG4gIHJldHVybiBpbmRleCAlIDIgPT09IDAgPyAxIDogMztcbn1cbi8qKlxuICogQ2FsY3VsYXRlIEVBTiBDaGVjayBEaWdpdFxuICogUmVmZXJlbmNlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbnRlcm5hdGlvbmFsX0FydGljbGVfTnVtYmVyI0NhbGN1bGF0aW9uX29mX2NoZWNrc3VtX2RpZ2l0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVhblxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ2hlY2tEaWdpdChlYW4pIHtcbiAgdmFyIGNoZWNrc3VtID0gZWFuLnNsaWNlKDAsIC0xKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyLCBpbmRleCkge1xuICAgIHJldHVybiBOdW1iZXIoY2hhcikgKiBnZXRQb3NpdGlvbldlaWdodFRocm91Z2hMZW5ndGhBbmRJbmRleChlYW4ubGVuZ3RoLCBpbmRleCk7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwYXJ0aWFsU3VtKSB7XG4gICAgcmV0dXJuIGFjYyArIHBhcnRpYWxTdW07XG4gIH0sIDApO1xuICB2YXIgcmVtYWluZGVyID0gMTAgLSBjaGVja3N1bSAlIDEwO1xuICByZXR1cm4gcmVtYWluZGVyIDwgMTAgPyByZW1haW5kZXIgOiAwO1xufVxuLyoqXG4gKiBDaGVjayBpZiBzdHJpbmcgaXMgdmFsaWQgRUFOOlxuICogTWF0Y2hlcyBFQU4tOC9FQU4tMTMvRUFOLTE0IHJlZ2V4XG4gKiBIYXMgdmFsaWQgY2hlY2sgZGlnaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRUFOKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgYWN0dWFsQ2hlY2tEaWdpdCA9IE51bWJlcihzdHIuc2xpY2UoLTEpKTtcbiAgcmV0dXJuIHZhbGlkRWFuUmVnZXgudGVzdChzdHIpICYmIGFjdHVhbENoZWNrRGlnaXQgPT09IGNhbGN1bGF0ZUNoZWNrRGlnaXQoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNJTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzaW4gPSAvXltBLVpdezJ9WzAtOUEtWl17OX1bMC05XSQvOyAvLyB0aGlzIGxpbmsgZGV0YWlscyBob3cgdGhlIGNoZWNrIGRpZ2l0IGlzIGNhbGN1bGF0ZWQ6XG4vLyBodHRwczovL3d3dy5pc2luLm9yZy9pc2luLWZvcm1hdC8uIGl0IGlzIGEgbGl0dGxlIGJpdFxuLy8gb2RkIGluIHRoYXQgaXQgd29ya3Mgd2l0aCBkaWdpdHMsIG5vdCBudW1iZXJzLiBpbiBvcmRlclxuLy8gdG8gbWFrZSBvbmx5IG9uZSBwYXNzIHRocm91Z2ggdGhlIElTSU4gY2hhcmFjdGVycywgdGhlXG4vLyBlYWNoIGFscGhhIGNoYXJhY3RlciBpcyBoYW5kbGVkIGFzIDIgY2hhcmFjdGVycyB3aXRoaW5cbi8vIHRoZSBsb29wLlxuXG5mdW5jdGlvbiBpc0lTSU4oc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKCFpc2luLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb3VibGUgPSB0cnVlO1xuICB2YXIgc3VtID0gMDsgLy8gY29udmVydCB2YWx1ZXNcblxuICBmb3IgKHZhciBpID0gc3RyLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHN0cltpXSA+PSAnQScgJiYgc3RyW2ldIDw9ICdaJykge1xuICAgICAgdmFyIHZhbHVlID0gc3RyW2ldLmNoYXJDb2RlQXQoMCkgLSA1NTtcbiAgICAgIHZhciBsbyA9IHZhbHVlICUgMTA7XG4gICAgICB2YXIgaGkgPSBNYXRoLnRydW5jKHZhbHVlIC8gMTApOyAvLyBsZXR0ZXJzIGhhdmUgdHdvIGRpZ2l0cywgc28gaGFuZGxlIHRoZSBsb3cgb3JkZXJcbiAgICAgIC8vIGFuZCBoaWdoIG9yZGVyIGRpZ2l0cyBzZXBhcmF0ZWx5LlxuXG4gICAgICBmb3IgKHZhciBfaSA9IDAsIF9hcnIgPSBbbG8sIGhpXTsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZGlnaXQgPSBfYXJyW19pXTtcblxuICAgICAgICBpZiAoZG91YmxlKSB7XG4gICAgICAgICAgaWYgKGRpZ2l0ID49IDUpIHtcbiAgICAgICAgICAgIHN1bSArPSAxICsgKGRpZ2l0IC0gNSkgKiAyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdW0gKz0gZGlnaXQgKiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdW0gKz0gZGlnaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBkb3VibGUgPSAhZG91YmxlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RpZ2l0ID0gc3RyW2ldLmNoYXJDb2RlQXQoMCkgLSAnMCcuY2hhckNvZGVBdCgwKTtcblxuICAgICAgaWYgKGRvdWJsZSkge1xuICAgICAgICBpZiAoX2RpZ2l0ID49IDUpIHtcbiAgICAgICAgICBzdW0gKz0gMSArIChfZGlnaXQgLSA1KSAqIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VtICs9IF9kaWdpdCAqIDI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSBfZGlnaXQ7XG4gICAgICB9XG5cbiAgICAgIGRvdWJsZSA9ICFkb3VibGU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrID0gTWF0aC50cnVuYygoc3VtICsgOSkgLyAxMCkgKiAxMCAtIHN1bTtcbiAgcmV0dXJuICtzdHJbc3RyLmxlbmd0aCAtIDFdID09PSBjaGVjaztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNCTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzYm4xME1heWJlID0gL14oPzpbMC05XXs5fVh8WzAtOV17MTB9KSQvO1xudmFyIGlzYm4xM01heWJlID0gL14oPzpbMC05XXsxM30pJC87XG52YXIgZmFjdG9yID0gWzEsIDNdO1xuXG5mdW5jdGlvbiBpc0lTQk4oc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKTtcblxuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJU0JOKHN0ciwgMTApIHx8IGlzSVNCTihzdHIsIDEzKTtcbiAgfVxuXG4gIHZhciBzYW5pdGl6ZWQgPSBzdHIucmVwbGFjZSgvW1xccy1dKy9nLCAnJyk7XG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIHZhciBpO1xuXG4gIGlmICh2ZXJzaW9uID09PSAnMTAnKSB7XG4gICAgaWYgKCFpc2JuMTBNYXliZS50ZXN0KHNhbml0aXplZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBjaGVja3N1bSArPSAoaSArIDEpICogc2FuaXRpemVkLmNoYXJBdChpKTtcbiAgICB9XG5cbiAgICBpZiAoc2FuaXRpemVkLmNoYXJBdCg5KSA9PT0gJ1gnKSB7XG4gICAgICBjaGVja3N1bSArPSAxMCAqIDEwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja3N1bSArPSAxMCAqIHNhbml0aXplZC5jaGFyQXQoOSk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrc3VtICUgMTEgPT09IDApIHtcbiAgICAgIHJldHVybiAhIXNhbml0aXplZDtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzEzJykge1xuICAgIGlmICghaXNibjEzTWF5YmUudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNoZWNrc3VtICs9IGZhY3RvcltpICUgMl0gKiBzYW5pdGl6ZWQuY2hhckF0KGkpO1xuICAgIH1cblxuICAgIGlmIChzYW5pdGl6ZWQuY2hhckF0KDEyKSAtICgxMCAtIGNoZWNrc3VtICUgMTApICUgMTAgPT09IDApIHtcbiAgICAgIHJldHVybiAhIXNhbml0aXplZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTU047XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc3NuID0gJ15cXFxcZHs0fS0/XFxcXGR7M31bXFxcXGRYXSQnO1xuXG5mdW5jdGlvbiBpc0lTU04oc3RyKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHRlc3RJc3NuID0gaXNzbjtcbiAgdGVzdElzc24gPSBvcHRpb25zLnJlcXVpcmVfaHlwaGVuID8gdGVzdElzc24ucmVwbGFjZSgnPycsICcnKSA6IHRlc3RJc3NuO1xuICB0ZXN0SXNzbiA9IG9wdGlvbnMuY2FzZV9zZW5zaXRpdmUgPyBuZXcgUmVnRXhwKHRlc3RJc3NuKSA6IG5ldyBSZWdFeHAodGVzdElzc24sICdpJyk7XG5cbiAgaWYgKCF0ZXN0SXNzbi50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGlnaXRzID0gc3RyLnJlcGxhY2UoJy0nLCAnJykudG9VcHBlckNhc2UoKTtcbiAgdmFyIGNoZWNrc3VtID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkaWdpdCA9IGRpZ2l0c1tpXTtcbiAgICBjaGVja3N1bSArPSAoZGlnaXQgPT09ICdYJyA/IDEwIDogK2RpZ2l0KSAqICg4IC0gaSk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW0gJSAxMSA9PT0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNvNzA2NENoZWNrID0gaXNvNzA2NENoZWNrO1xuZXhwb3J0cy5sdWhuQ2hlY2sgPSBsdWhuQ2hlY2s7XG5leHBvcnRzLnJldmVyc2VNdWx0aXBseUFuZFN1bSA9IHJldmVyc2VNdWx0aXBseUFuZFN1bTtcbmV4cG9ydHMudmVyaG9lZmZDaGVjayA9IHZlcmhvZWZmQ2hlY2s7XG5cbi8qKlxuICogQWxnb3JpdGhtaWMgdmFsaWRhdGlvbiBmdW5jdGlvbnNcbiAqIE1heSBiZSB1c2VkIGFzIGlzIG9yIGltcGxlbWVudGVkIGluIHRoZSB3b3JrZmxvdyBvZiBvdGhlciB2YWxpZGF0b3JzLlxuICovXG5cbi8qXG4gKiBJU08gNzA2NCB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiBDYWxsZWQgd2l0aCBhIHN0cmluZyBvZiBudW1iZXJzIChpbmNsLiBjaGVjayBkaWdpdClcbiAqIHRvIHZhbGlkYXRlIGFjY29yZGluZyB0byBJU08gNzA2NCAoTU9EIDExLCAxMCkuXG4gKi9cbmZ1bmN0aW9uIGlzbzcwNjRDaGVjayhzdHIpIHtcbiAgdmFyIGNoZWNrdmFsdWUgPSAxMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjaGVja3ZhbHVlID0gKHBhcnNlSW50KHN0cltpXSwgMTApICsgY2hlY2t2YWx1ZSkgJSAxMCA9PT0gMCA/IDEwICogMiAlIDExIDogKHBhcnNlSW50KHN0cltpXSwgMTApICsgY2hlY2t2YWx1ZSkgJSAxMCAqIDIgJSAxMTtcbiAgfVxuXG4gIGNoZWNrdmFsdWUgPSBjaGVja3ZhbHVlID09PSAxID8gMCA6IDExIC0gY2hlY2t2YWx1ZTtcbiAgcmV0dXJuIGNoZWNrdmFsdWUgPT09IHBhcnNlSW50KHN0clsxMF0sIDEwKTtcbn1cbi8qXG4gKiBMdWhuIChtb2QgMTApIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIENhbGxlZCB3aXRoIGEgc3RyaW5nIG9mIG51bWJlcnMgKGluY2wuIGNoZWNrIGRpZ2l0KVxuICogdG8gdmFsaWRhdGUgYWNjb3JkaW5nIHRvIHRoZSBMdWhuIGFsZ29yaXRobS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGx1aG5DaGVjayhzdHIpIHtcbiAgdmFyIGNoZWNrc3VtID0gMDtcbiAgdmFyIHNlY29uZCA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoc2Vjb25kKSB7XG4gICAgICB2YXIgcHJvZHVjdCA9IHBhcnNlSW50KHN0cltpXSwgMTApICogMjtcblxuICAgICAgaWYgKHByb2R1Y3QgPiA5KSB7XG4gICAgICAgIC8vIHN1bSBkaWdpdHMgb2YgcHJvZHVjdCBhbmQgYWRkIHRvIGNoZWNrc3VtXG4gICAgICAgIGNoZWNrc3VtICs9IHByb2R1Y3QudG9TdHJpbmcoKS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrc3VtICs9IHByb2R1Y3Q7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrc3VtICs9IHBhcnNlSW50KHN0cltpXSwgMTApO1xuICAgIH1cblxuICAgIHNlY29uZCA9ICFzZWNvbmQ7XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW0gJSAxMCA9PT0gMDtcbn1cbi8qXG4gKiBSZXZlcnNlIFRJTiBtdWx0aXBsaWNhdGlvbiBhbmQgc3VtbWF0aW9uIGhlbHBlciBmdW5jdGlvblxuICogQ2FsbGVkIHdpdGggYW4gYXJyYXkgb2Ygc2luZ2xlLWRpZ2l0IGludGVnZXJzIGFuZCBhIGJhc2UgbXVsdGlwbGllclxuICogdG8gY2FsY3VsYXRlIHRoZSBzdW0gb2YgdGhlIGRpZ2l0cyBtdWx0aXBsaWVkIGluIHJldmVyc2UuXG4gKiBOb3JtYWxseSB1c2VkIGluIHZhcmlhdGlvbnMgb2YgTU9EIDExIGFsZ29yaXRobWljIGNoZWNrcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJldmVyc2VNdWx0aXBseUFuZFN1bShkaWdpdHMsIGJhc2UpIHtcbiAgdmFyIHRvdGFsID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xuICAgIHRvdGFsICs9IGRpZ2l0c1tpXSAqIChiYXNlIC0gaSk7XG4gIH1cblxuICByZXR1cm4gdG90YWw7XG59XG4vKlxuICogVmVyaG9lZmYgdmFsaWRhdGlvbiBoZWxwZXIgZnVuY3Rpb25cbiAqIENhbGxlZCB3aXRoIGEgc3RyaW5nIG9mIG51bWJlcnNcbiAqIHRvIHZhbGlkYXRlIGFjY29yZGluZyB0byB0aGUgVmVyaG9lZmYgYWxnb3JpdGhtLlxuICovXG5cblxuZnVuY3Rpb24gdmVyaG9lZmZDaGVjayhzdHIpIHtcbiAgdmFyIGRfdGFibGUgPSBbWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLCBbMSwgMiwgMywgNCwgMCwgNiwgNywgOCwgOSwgNV0sIFsyLCAzLCA0LCAwLCAxLCA3LCA4LCA5LCA1LCA2XSwgWzMsIDQsIDAsIDEsIDIsIDgsIDksIDUsIDYsIDddLCBbNCwgMCwgMSwgMiwgMywgOSwgNSwgNiwgNywgOF0sIFs1LCA5LCA4LCA3LCA2LCAwLCA0LCAzLCAyLCAxXSwgWzYsIDUsIDksIDgsIDcsIDEsIDAsIDQsIDMsIDJdLCBbNywgNiwgNSwgOSwgOCwgMiwgMSwgMCwgNCwgM10sIFs4LCA3LCA2LCA1LCA5LCAzLCAyLCAxLCAwLCA0XSwgWzksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDEsIDBdXTtcbiAgdmFyIHBfdGFibGUgPSBbWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLCBbMSwgNSwgNywgNiwgMiwgOCwgMywgMCwgOSwgNF0sIFs1LCA4LCAwLCAzLCA3LCA5LCA2LCAxLCA0LCAyXSwgWzgsIDksIDEsIDYsIDAsIDQsIDMsIDUsIDIsIDddLCBbOSwgNCwgNSwgMywgMSwgMiwgNiwgOCwgNywgMF0sIFs0LCAyLCA4LCA2LCA1LCA3LCAzLCA5LCAwLCAxXSwgWzIsIDcsIDksIDMsIDgsIDAsIDYsIDQsIDEsIDVdLCBbNywgMCwgNCwgNiwgOSwgMSwgMywgMiwgNSwgOF1dOyAvLyBDb3B5ICh0byBwcmV2ZW50IHJlcGxhY2VtZW50KSBhbmQgcmV2ZXJzZVxuXG4gIHZhciBzdHJfY29weSA9IHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyX2NvcHkubGVuZ3RoOyBpKyspIHtcbiAgICBjaGVja3N1bSA9IGRfdGFibGVbY2hlY2tzdW1dW3BfdGFibGVbaSAlIDhdW3BhcnNlSW50KHN0cl9jb3B5W2ldLCAxMCldXTtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSA9PT0gMDtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVGF4SUQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBhbGdvcml0aG1zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXRpbC9hbGdvcml0aG1zXCIpKTtcblxudmFyIF9pc0RhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzRGF0ZVwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXG4gKiBUSU4gVmFsaWRhdGlvblxuICogVmFsaWRhdGVzIFRheCBJZGVudGlmaWNhdGlvbiBOdW1iZXJzIChUSU5zKSBmcm9tIHRoZSBVUywgRVUgbWVtYmVyIHN0YXRlcyBhbmQgdGhlIFVuaXRlZCBLaW5nZG9tLlxuICpcbiAqIEVVLVVLOlxuICogTmF0aW9uYWwgVElOIHZhbGlkaXR5IGlzIGNhbGN1bGF0ZWQgdXNpbmcgcHVibGljIGFsZ29yaXRobXMgYXMgbWFkZSBhdmFpbGFibGUgYnkgREcgVEFYVUQuXG4gKlxuICogU2VlIGBodHRwczovL2VjLmV1cm9wYS5ldS90YXhhdGlvbl9jdXN0b21zL3Rpbi9zcGVjcy9GUy1USU4lMjBBbGdvcml0aG1zLVB1YmxpYy5kb2N4YCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBVUzpcbiAqIEFuIEVtcGxveWVyIElkZW50aWZpY2F0aW9uIE51bWJlciAoRUlOKSwgYWxzbyBrbm93biBhcyBhIEZlZGVyYWwgVGF4IElkZW50aWZpY2F0aW9uIE51bWJlcixcbiAqICBpcyB1c2VkIHRvIGlkZW50aWZ5IGEgYnVzaW5lc3MgZW50aXR5LlxuICpcbiAqIE5PVEVTOlxuICogIC0gUHJlZml4IDQ3IGlzIGJlaW5nIHJlc2VydmVkIGZvciBmdXR1cmUgdXNlXG4gKiAgLSBQcmVmaXhlcyAyNiwgMjcsIDQ1LCA0NiBhbmQgNDcgd2VyZSBwcmV2aW91c2x5IGFzc2lnbmVkIGJ5IHRoZSBQaGlsYWRlbHBoaWEgY2FtcHVzLlxuICpcbiAqIFNlZSBgaHR0cDovL3d3dy5pcnMuZ292L0J1c2luZXNzZXMvU21hbGwtQnVzaW5lc3Nlcy0mLVNlbGYtRW1wbG95ZWQvSG93LUVJTnMtYXJlLUFzc2lnbmVkLWFuZC1WYWxpZC1FSU4tUHJlZml4ZXNgXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuLy8gTG9jYWxlIGZ1bmN0aW9uc1xuXG4vKlxuICogYmctQkcgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKEVkaW5lbiBncmFcdTAxN0VkYW5za2kgbm9tZXIgKEVHTi9cdTA0MTVcdTA0MTNcdTA0MUQpLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgaWYgYmlydGggZGF0ZSAoZmlyc3Qgc2l4IGRpZ2l0cykgaXMgdmFsaWQgYW5kIGNhbGN1bGF0ZXMgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cbmZ1bmN0aW9uIGJnQmdDaGVjayh0aW4pIHtcbiAgLy8gRXh0cmFjdCBmdWxsIHllYXIsIG5vcm1hbGl6ZSBtb250aCBhbmQgY2hlY2sgYmlydGggZGF0ZSB2YWxpZGl0eVxuICB2YXIgY2VudHVyeV95ZWFyID0gdGluLnNsaWNlKDAsIDIpO1xuICB2YXIgbW9udGggPSBwYXJzZUludCh0aW4uc2xpY2UoMiwgNCksIDEwKTtcblxuICBpZiAobW9udGggPiA0MCkge1xuICAgIG1vbnRoIC09IDQwO1xuICAgIGNlbnR1cnlfeWVhciA9IFwiMjBcIi5jb25jYXQoY2VudHVyeV95ZWFyKTtcbiAgfSBlbHNlIGlmIChtb250aCA+IDIwKSB7XG4gICAgbW9udGggLT0gMjA7XG4gICAgY2VudHVyeV95ZWFyID0gXCIxOFwiLmNvbmNhdChjZW50dXJ5X3llYXIpO1xuICB9IGVsc2Uge1xuICAgIGNlbnR1cnlfeWVhciA9IFwiMTlcIi5jb25jYXQoY2VudHVyeV95ZWFyKTtcbiAgfVxuXG4gIGlmIChtb250aCA8IDEwKSB7XG4gICAgbW9udGggPSBcIjBcIi5jb25jYXQobW9udGgpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChjZW50dXJ5X3llYXIsIFwiL1wiKS5jb25jYXQobW9udGgsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDQsIDYpKTtcblxuICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWVlZL01NL0REJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gc3BsaXQgZGlnaXRzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuXG5cbiAgdmFyIGRpZ2l0cyA9IHRpbi5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSk7IC8vIENhbGN1bGF0ZSBjaGVja3N1bSBieSBtdWx0aXBseWluZyBkaWdpdHMgd2l0aCBmaXhlZCB2YWx1ZXNcblxuICB2YXIgbXVsdGlwX2xvb2t1cCA9IFsyLCA0LCA4LCA1LCAxMCwgOSwgNywgMywgNl07XG4gIHZhciBjaGVja3N1bSA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aXBfbG9va3VwLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hlY2tzdW0gKz0gZGlnaXRzW2ldICogbXVsdGlwX2xvb2t1cFtpXTtcbiAgfVxuXG4gIGNoZWNrc3VtID0gY2hlY2tzdW0gJSAxMSA9PT0gMTAgPyAwIDogY2hlY2tzdW0gJSAxMTtcbiAgcmV0dXJuIGNoZWNrc3VtID09PSBkaWdpdHNbOV07XG59XG4vKlxuICogY3MtQ1ogdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKFJvZG5cdTAwRTkgXHUwMTBEXHUwMEVEc2xvIChSXHUwMTBDKSwgcGVyc29ucyBvbmx5KVxuICogQ2hlY2tzIGlmIGJpcnRoIGRhdGUgKGZpcnN0IHNpeCBkaWdpdHMpIGlzIHZhbGlkIGFuZCBkaXZpc2liaWxpdHkgYnkgMTFcbiAqIE1hdGVyaWFsIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudCBzb3VyY2VkIGZyb206XG4gKiAtYGh0dHBzOi8vbG9yZW5jLmluZm8vM01BMzgxL292ZXJlbmktc3ByYXZub3N0aS1yb2RuZWhvLWNpc2xhLmh0bWBcbiAqIC1gaHR0cHM6Ly93d3cubXZjci5jei9jbGFuZWsvcmFkeS1hLXNsdXpieS1kb2t1bWVudHktcm9kbmUtY2lzbG8uYXNweGBcbiAqL1xuXG5cbmZ1bmN0aW9uIGNzQ3pDaGVjayh0aW4pIHtcbiAgdGluID0gdGluLnJlcGxhY2UoL1xcVy8sICcnKTsgLy8gRXh0cmFjdCBmdWxsIHllYXIgZnJvbSBUSU4gbGVuZ3RoXG5cbiAgdmFyIGZ1bGxfeWVhciA9IHBhcnNlSW50KHRpbi5zbGljZSgwLCAyKSwgMTApO1xuXG4gIGlmICh0aW4ubGVuZ3RoID09PSAxMCkge1xuICAgIGlmIChmdWxsX3llYXIgPCA1NCkge1xuICAgICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxsX3llYXIgPSBcIjE5XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0aW4uc2xpY2UoNikgPT09ICcwMDAnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBUaHJlZS16ZXJvIHNlcmlhbCBub3QgYXNzaWduZWQgYmVmb3JlIDE5NTRcblxuXG4gICAgaWYgKGZ1bGxfeWVhciA8IDU0KSB7XG4gICAgICBmdWxsX3llYXIgPSBcIjE5XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gMThYWCB5ZWFycyBzZWVuIGluIGFueSBvZiB0aGUgcmVzb3VyY2VzXG4gICAgfVxuICB9IC8vIEFkZCBtaXNzaW5nIHplcm8gaWYgbmVlZGVkXG5cblxuICBpZiAoZnVsbF95ZWFyLmxlbmd0aCA9PT0gMykge1xuICAgIGZ1bGxfeWVhciA9IFtmdWxsX3llYXIuc2xpY2UoMCwgMiksICcwJywgZnVsbF95ZWFyLnNsaWNlKDIpXS5qb2luKCcnKTtcbiAgfSAvLyBFeHRyYWN0IG1vbnRoIGZyb20gVElOIGFuZCBub3JtYWxpemVcblxuXG4gIHZhciBtb250aCA9IHBhcnNlSW50KHRpbi5zbGljZSgyLCA0KSwgMTApO1xuXG4gIGlmIChtb250aCA+IDUwKSB7XG4gICAgbW9udGggLT0gNTA7XG4gIH1cblxuICBpZiAobW9udGggPiAyMCkge1xuICAgIC8vIE1vbnRoLXBsdXMtdHdlbnR5IHdhcyBvbmx5IGludHJvZHVjZWQgaW4gMjAwNFxuICAgIGlmIChwYXJzZUludChmdWxsX3llYXIsIDEwKSA8IDIwMDQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb250aCAtPSAyMDtcbiAgfVxuXG4gIGlmIChtb250aCA8IDEwKSB7XG4gICAgbW9udGggPSBcIjBcIi5jb25jYXQobW9udGgpO1xuICB9IC8vIENoZWNrIGRhdGUgdmFsaWRpdHlcblxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KG1vbnRoLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg0LCA2KSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFZlcmlmeSBkaXZpc2liaWxpdHkgYnkgMTFcblxuXG4gIGlmICh0aW4ubGVuZ3RoID09PSAxMCkge1xuICAgIGlmIChwYXJzZUludCh0aW4sIDEwKSAlIDExICE9PSAwKSB7XG4gICAgICAvLyBTb21lIG51bWJlcnMgdXAgdG8gYW5kIGluY2x1ZGluZyAxOTg1IGFyZSBzdGlsbCB2YWxpZCBpZlxuICAgICAgLy8gY2hlY2sgKGxhc3QpIGRpZ2l0IGVxdWFscyAwIGFuZCBtb2R1bG8gb2YgZmlyc3QgOSBkaWdpdHMgZXF1YWxzIDEwXG4gICAgICB2YXIgY2hlY2tkaWdpdCA9IHBhcnNlSW50KHRpbi5zbGljZSgwLCA5KSwgMTApICUgMTE7XG5cbiAgICAgIGlmIChwYXJzZUludChmdWxsX3llYXIsIDEwKSA8IDE5ODYgJiYgY2hlY2tkaWdpdCA9PT0gMTApIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRpbi5zbGljZSg5KSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogZGUtQVQgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKEFiZ2FiZW5rb250b251bW1lciwgcGVyc29ucy9lbnRpdGllcylcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsbGluZyBsdWhuQ2hlY2soKVxuICovXG5cblxuZnVuY3Rpb24gZGVBdENoZWNrKHRpbikge1xuICByZXR1cm4gYWxnb3JpdGhtcy5sdWhuQ2hlY2sodGluKTtcbn1cbi8qXG4gKiBkZS1ERSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoU3RldWVyaWRlbnRpZmlrYXRpb25zbnVtbWVyIChTdGV1ZXItSWROci4pLCBwZXJzb25zIG9ubHkpXG4gKiBUZXN0cyBmb3Igc2luZ2xlIGR1cGxpY2F0ZS90cmlwbGljYXRlIHZhbHVlLCB0aGVuIGNhbGN1bGF0ZXMgSVNPIDcwNjQgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKiBQYXJ0aWFsIGltcGxlbWVudGF0aW9uIG9mIHNwZWMgKHNhbWUgcmVzdWx0IHdpdGggYm90aCBhbGdvcml0aG1zIGFsd2F5cylcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlRGVDaGVjayh0aW4pIHtcbiAgLy8gU3BsaXQgZGlnaXRzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KTsgLy8gRmlsbCBhcnJheSB3aXRoIHN0cmluZ3Mgb2YgbnVtYmVyIHBvc2l0aW9uc1xuXG4gIHZhciBvY2N1cmVuY2VzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgb2NjdXJlbmNlcy5wdXNoKCcnKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGlnaXRzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgaWYgKGRpZ2l0c1tpXSA9PT0gZGlnaXRzW2pdKSB7XG4gICAgICAgIG9jY3VyZW5jZXNbaV0gKz0gajtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGRpZ2l0cyB3aXRoIG9uZSBvY2N1cmVuY2UgYW5kIHRlc3QgZm9yIG9ubHkgb25lIGR1cGxpY2F0ZS90cmlwbGljYXRlXG5cblxuICBvY2N1cmVuY2VzID0gb2NjdXJlbmNlcy5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5sZW5ndGggPiAxO1xuICB9KTtcblxuICBpZiAob2NjdXJlbmNlcy5sZW5ndGggIT09IDIgJiYgb2NjdXJlbmNlcy5sZW5ndGggIT09IDMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSW4gY2FzZSBvZiB0cmlwbGljYXRlIHZhbHVlIG9ubHkgdHdvIGRpZ2l0cyBhcmUgYWxsb3dlZCBuZXh0IHRvIGVhY2ggb3RoZXJcblxuXG4gIGlmIChvY2N1cmVuY2VzWzBdLmxlbmd0aCA9PT0gMykge1xuICAgIHZhciB0cmlwX2xvY2F0aW9ucyA9IG9jY3VyZW5jZXNbMF0uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgICB9KTtcbiAgICB2YXIgcmVjdXJyZW50ID0gMDsgLy8gQW1vdW50IG9mIG5laWdoYm91ciBvY2N1cmVuY2VzXG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdHJpcF9sb2NhdGlvbnMubGVuZ3RoIC0gMTsgX2krKykge1xuICAgICAgaWYgKHRyaXBfbG9jYXRpb25zW19pXSArIDEgPT09IHRyaXBfbG9jYXRpb25zW19pICsgMV0pIHtcbiAgICAgICAgcmVjdXJyZW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlY3VycmVudCA9PT0gMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGdvcml0aG1zLmlzbzcwNjRDaGVjayh0aW4pO1xufVxuLypcbiAqIGRrLURLIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChDUFItbnVtbWVyIChwZXJzb25udW1tZXIpLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgaWYgYmlydGggZGF0ZSAoZmlyc3Qgc2l4IGRpZ2l0cykgaXMgdmFsaWQgYW5kIGFzc2lnbmVkIHRvIGNlbnR1cnkgKHNldmVudGgpIGRpZ2l0LFxuICogYW5kIGNhbGN1bGF0ZXMgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBka0RrQ2hlY2sodGluKSB7XG4gIHRpbiA9IHRpbi5yZXBsYWNlKC9cXFcvLCAnJyk7IC8vIEV4dHJhY3QgeWVhciwgY2hlY2sgaWYgdmFsaWQgZm9yIGdpdmVuIGNlbnR1cnkgZGlnaXQgYW5kIGFkZCBjZW50dXJ5XG5cbiAgdmFyIHllYXIgPSBwYXJzZUludCh0aW4uc2xpY2UoNCwgNiksIDEwKTtcbiAgdmFyIGNlbnR1cnlfZGlnaXQgPSB0aW4uc2xpY2UoNiwgNyk7XG5cbiAgc3dpdGNoIChjZW50dXJ5X2RpZ2l0KSB7XG4gICAgY2FzZSAnMCc6XG4gICAgY2FzZSAnMSc6XG4gICAgY2FzZSAnMic6XG4gICAgY2FzZSAnMyc6XG4gICAgICB5ZWFyID0gXCIxOVwiLmNvbmNhdCh5ZWFyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnNCc6XG4gICAgY2FzZSAnOSc6XG4gICAgICBpZiAoeWVhciA8IDM3KSB7XG4gICAgICAgIHllYXIgPSBcIjIwXCIuY29uY2F0KHllYXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeWVhciA9IFwiMTlcIi5jb25jYXQoeWVhcik7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICh5ZWFyIDwgMzcpIHtcbiAgICAgICAgeWVhciA9IFwiMjBcIi5jb25jYXQoeWVhcik7XG4gICAgICB9IGVsc2UgaWYgKHllYXIgPiA1OCkge1xuICAgICAgICB5ZWFyID0gXCIxOFwiLmNvbmNhdCh5ZWFyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gQWRkIG1pc3NpbmcgemVybyBpZiBuZWVkZWRcblxuXG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gMykge1xuICAgIHllYXIgPSBbeWVhci5zbGljZSgwLCAyKSwgJzAnLCB5ZWFyLnNsaWNlKDIpXS5qb2luKCcnKTtcbiAgfSAvLyBDaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICB2YXIgZGF0ZSA9IFwiXCIuY29uY2F0KHllYXIsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDIsIDQpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgwLCAyKSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcblxuXG4gIHZhciBkaWdpdHMgPSB0aW4uc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gIH0pO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuICB2YXIgd2VpZ2h0ID0gNDsgLy8gTXVsdGlwbHkgYnkgd2VpZ2h0IGFuZCBhZGQgdG8gY2hlY2tzdW1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXSAqIHdlaWdodDtcbiAgICB3ZWlnaHQgLT0gMTtcblxuICAgIGlmICh3ZWlnaHQgPT09IDEpIHtcbiAgICAgIHdlaWdodCA9IDc7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tzdW0gJT0gMTE7XG5cbiAgaWYgKGNoZWNrc3VtID09PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtID09PSAwID8gZGlnaXRzWzldID09PSAwIDogZGlnaXRzWzldID09PSAxMSAtIGNoZWNrc3VtO1xufVxuLypcbiAqIGVsLUNZIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChBcml0aG1vcyBGb3JvbG9naWtvdSBNaXRyb291IChBRk0vXHUwMzkxXHUwM0E2XHUwMzlDKSwgcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBBU0NJSSB2YWx1ZSBvZiBjaGVjayAobGFzdCkgY2hhcmFjdGVyXG4gKi9cblxuXG5mdW5jdGlvbiBlbEN5Q2hlY2sodGluKSB7XG4gIC8vIHNwbGl0IGRpZ2l0cyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcbiAgdmFyIGRpZ2l0cyA9IHRpbi5zbGljZSgwLCA4KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSk7XG4gIHZhciBjaGVja3N1bSA9IDA7IC8vIGFkZCBkaWdpdHMgaW4gZXZlbiBwbGFjZXNcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXTtcbiAgfSAvLyBhZGQgZGlnaXRzIGluIG9kZCBwbGFjZXNcblxuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGRpZ2l0cy5sZW5ndGg7IF9pMiArPSAyKSB7XG4gICAgaWYgKGRpZ2l0c1tfaTJdIDwgMikge1xuICAgICAgY2hlY2tzdW0gKz0gMSAtIGRpZ2l0c1tfaTJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja3N1bSArPSAyICogKGRpZ2l0c1tfaTJdIC0gMikgKyA1O1xuXG4gICAgICBpZiAoZGlnaXRzW19pMl0gPiA0KSB7XG4gICAgICAgIGNoZWNrc3VtICs9IDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hlY2tzdW0gJSAyNiArIDY1KSA9PT0gdGluLmNoYXJBdCg4KTtcbn1cbi8qXG4gKiBlbC1HUiB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoQXJpdGhtb3MgRm9yb2xvZ2lrb3UgTWl0cm9vdSAoQUZNL1x1MDM5MVx1MDNBNlx1MDM5QyksIHBlcnNvbnMvZW50aXRpZXMpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChsYXN0KSBkaWdpdFxuICogQWxnb3JpdGhtIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudC0gc291cmNlZCBmcm9tOlxuICogLSBgaHR0cDovL2VwaXhlaXJpc2kuZ3IvJUNFJTlBJUNFJUExJUNFJTk5JUNFJUEzJUNFJTk5JUNFJTlDJUNFJTkxLSVDRSU5OCVDRSU5NSVDRSU5QyVDRSU5MSVDRSVBNCVDRSU5MS0lQ0UlQTYlQ0UlOUYlQ0UlQTElQ0UlOUYlQ0UlOUIlQ0UlOUYlQ0UlOTMlQ0UlOTklQ0UlOTElQ0UlQTMtJUNFJTlBJUNFJTkxJUNFJTk5LSVDRSU5QiVDRSU5RiVDRSU5MyVDRSU5OSVDRSVBMyVDRSVBNCVDRSU5OSVDRSU5QSVDRSU5NyVDRSVBMy8yMzc5MS8lQ0UlOTElQ0YlODElQ0UlQjklQ0UlQjglQ0UlQkMlQ0YlOEMlQ0YlODItJUNFJUE2JUNFJUJGJUNGJTgxJUNFJUJGJUNFJUJCJUNFJUJGJUNFJUIzJUNFJUI5JUNFJUJBJUNFJUJGJUNGJThELSVDRSU5QyVDRSVCNyVDRiU4NCVDRiU4MSVDRiU4RSVDRSVCRiVDRiU4NWBcbiAqL1xuXG5cbmZ1bmN0aW9uIGVsR3JDaGVjayh0aW4pIHtcbiAgLy8gc3BsaXQgZGlnaXRzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KTtcbiAgdmFyIGNoZWNrc3VtID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXSAqIE1hdGgucG93KDIsIDggLSBpKTtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSAlIDExICUgMTAgPT09IGRpZ2l0c1s4XTtcbn1cbi8qXG4gKiBlbi1HQiB2YWxpZGF0aW9uIGZ1bmN0aW9uIChzaG91bGQgZ28gaGVyZSBpZiBuZWVkZWQpXG4gKiAoTmF0aW9uYWwgSW5zdXJhbmNlIE51bWJlciAoTklOTykgb3IgVW5pcXVlIFRheHBheWVyIFJlZmVyZW5jZSAoVVRSKSxcbiAqIHBlcnNvbnMvZW50aXRpZXMgcmVzcGVjdGl2ZWx5KVxuICovXG5cbi8qXG4gKiBlbi1JRSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoUGVyc29uYWwgUHVibGljIFNlcnZpY2UgTnVtYmVyIChQUFMgTm8pLCBwZXJzb25zIG9ubHkpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChzZWNvbmQgdG8gbGFzdCkgY2hhcmFjdGVyXG4gKi9cblxuXG5mdW5jdGlvbiBlbkllQ2hlY2sodGluKSB7XG4gIHZhciBjaGVja3N1bSA9IGFsZ29yaXRobXMucmV2ZXJzZU11bHRpcGx5QW5kU3VtKHRpbi5zcGxpdCgnJykuc2xpY2UoMCwgNykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSksIDgpO1xuXG4gIGlmICh0aW4ubGVuZ3RoID09PSA5ICYmIHRpbls4XSAhPT0gJ1cnKSB7XG4gICAgY2hlY2tzdW0gKz0gKHRpbls4XS5jaGFyQ29kZUF0KDApIC0gNjQpICogOTtcbiAgfVxuXG4gIGNoZWNrc3VtICU9IDIzO1xuXG4gIGlmIChjaGVja3N1bSA9PT0gMCkge1xuICAgIHJldHVybiB0aW5bN10udG9VcHBlckNhc2UoKSA9PT0gJ1cnO1xuICB9XG5cbiAgcmV0dXJuIHRpbls3XS50b1VwcGVyQ2FzZSgpID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY0ICsgY2hlY2tzdW0pO1xufSAvLyBWYWxpZCBVUyBJUlMgY2FtcHVzIHByZWZpeGVzXG5cblxudmFyIGVuVXNDYW1wdXNQcmVmaXggPSB7XG4gIGFuZG92ZXI6IFsnMTAnLCAnMTInXSxcbiAgYXRsYW50YTogWyc2MCcsICc2NyddLFxuICBhdXN0aW46IFsnNTAnLCAnNTMnXSxcbiAgYnJvb2toYXZlbjogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcxMScsICcxMycsICcxNCcsICcxNicsICcyMScsICcyMicsICcyMycsICcyNScsICczNCcsICc1MScsICc1MicsICc1NCcsICc1NScsICc1NicsICc1NycsICc1OCcsICc1OScsICc2NSddLFxuICBjaW5jaW5uYXRpOiBbJzMwJywgJzMyJywgJzM1JywgJzM2JywgJzM3JywgJzM4JywgJzYxJ10sXG4gIGZyZXNubzogWycxNScsICcyNCddLFxuICBpbnRlcm5ldDogWycyMCcsICcyNicsICcyNycsICc0NScsICc0NicsICc0NyddLFxuICBrYW5zYXM6IFsnNDAnLCAnNDQnXSxcbiAgbWVtcGhpczogWyc5NCcsICc5NSddLFxuICBvZ2RlbjogWyc4MCcsICc5MCddLFxuICBwaGlsYWRlbHBoaWE6IFsnMzMnLCAnMzknLCAnNDEnLCAnNDInLCAnNDMnLCAnNDYnLCAnNDgnLCAnNjInLCAnNjMnLCAnNjQnLCAnNjYnLCAnNjgnLCAnNzEnLCAnNzInLCAnNzMnLCAnNzQnLCAnNzUnLCAnNzYnLCAnNzcnLCAnODEnLCAnODInLCAnODMnLCAnODQnLCAnODUnLCAnODYnLCAnODcnLCAnODgnLCAnOTEnLCAnOTInLCAnOTMnLCAnOTgnLCAnOTknXSxcbiAgc2JhOiBbJzMxJ11cbn07IC8vIFJldHVybiBhbiBhcnJheSBvZiBhbGwgVVMgSVJTIGNhbXB1cyBwcmVmaXhlc1xuXG5mdW5jdGlvbiBlblVzR2V0UHJlZml4ZXMoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFtdO1xuXG4gIGZvciAodmFyIGxvY2F0aW9uIGluIGVuVXNDYW1wdXNQcmVmaXgpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ290d2FybG9zdC9pc3RhbmJ1bC9ibG9iL21hc3Rlci9pZ25vcmluZy1jb2RlLWZvci1jb3ZlcmFnZS5tZCNpZ25vcmluZy1jb2RlLWZvci1jb3ZlcmFnZS1wdXJwb3Nlc1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgaWYgKGVuVXNDYW1wdXNQcmVmaXguaGFzT3duUHJvcGVydHkobG9jYXRpb24pKSB7XG4gICAgICBwcmVmaXhlcy5wdXNoLmFwcGx5KHByZWZpeGVzLCBfdG9Db25zdW1hYmxlQXJyYXkoZW5Vc0NhbXB1c1ByZWZpeFtsb2NhdGlvbl0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlZml4ZXM7XG59XG4vKlxuICogZW4tVVMgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogVmVyaWZ5IHRoYXQgdGhlIFRJTiBzdGFydHMgd2l0aCBhIHZhbGlkIElSUyBjYW1wdXMgcHJlZml4XG4gKi9cblxuXG5mdW5jdGlvbiBlblVzQ2hlY2sodGluKSB7XG4gIHJldHVybiBlblVzR2V0UHJlZml4ZXMoKS5pbmRleE9mKHRpbi5zdWJzdHIoMCwgMikpICE9PSAtMTtcbn1cbi8qXG4gKiBlcy1FUyB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoRG9jdW1lbnRvIE5hY2lvbmFsIGRlIElkZW50aWRhZCAoRE5JKVxuICogb3IgTlx1MDBGQW1lcm8gZGUgSWRlbnRpZmljYWNpXHUwMEYzbiBkZSBFeHRyYW5qZXJvIChOSUUpLCBwZXJzb25zIG9ubHkpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChsYXN0KSBjaGFyYWN0ZXJcbiAqL1xuXG5cbmZ1bmN0aW9uIGVzRXNDaGVjayh0aW4pIHtcbiAgLy8gU3BsaXQgY2hhcmFjdGVycyBpbnRvIGFuIGFycmF5IGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcbiAgdmFyIGNoYXJzID0gdGluLnRvVXBwZXJDYXNlKCkuc3BsaXQoJycpOyAvLyBSZXBsYWNlIGluaXRpYWwgbGV0dGVyIGlmIG5lZWRlZFxuXG4gIGlmIChpc05hTihwYXJzZUludChjaGFyc1swXSwgMTApKSAmJiBjaGFycy5sZW5ndGggPiAxKSB7XG4gICAgdmFyIGxlYWRfcmVwbGFjZSA9IDA7XG5cbiAgICBzd2l0Y2ggKGNoYXJzWzBdKSB7XG4gICAgICBjYXNlICdZJzpcbiAgICAgICAgbGVhZF9yZXBsYWNlID0gMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ1onOlxuICAgICAgICBsZWFkX3JlcGxhY2UgPSAyO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICBjaGFycy5zcGxpY2UoMCwgMSwgbGVhZF9yZXBsYWNlKTsgLy8gRmlsbCB3aXRoIHplcm9zIGlmIHNtYWxsZXIgdGhhbiBwcm9wZXJcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoY2hhcnMubGVuZ3RoIDwgOSkge1xuICAgICAgY2hhcnMudW5zaGlmdCgwKTtcbiAgICB9XG4gIH0gLy8gQ2FsY3VsYXRlIGNoZWNrc3VtIGFuZCBjaGVjayBhY2NvcmRpbmcgdG8gbG9va3VwXG5cblxuICB2YXIgbG9va3VwID0gWydUJywgJ1InLCAnVycsICdBJywgJ0cnLCAnTScsICdZJywgJ0YnLCAnUCcsICdEJywgJ1gnLCAnQicsICdOJywgJ0onLCAnWicsICdTJywgJ1EnLCAnVicsICdIJywgJ0wnLCAnQycsICdLJywgJ0UnXTtcbiAgY2hhcnMgPSBjaGFycy5qb2luKCcnKTtcbiAgdmFyIGNoZWNrc3VtID0gcGFyc2VJbnQoY2hhcnMuc2xpY2UoMCwgOCksIDEwKSAlIDIzO1xuICByZXR1cm4gY2hhcnNbOF0gPT09IGxvb2t1cFtjaGVja3N1bV07XG59XG4vKlxuICogZXQtRUUgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKElzaWt1a29vZCAoSUspLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgaWYgYmlydGggZGF0ZSAoY2VudHVyeSBkaWdpdCBhbmQgc2l4IGZvbGxvd2luZykgaXMgdmFsaWQgYW5kIGNhbGN1bGF0ZXMgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKiBNYXRlcmlhbCBub3QgaW4gREcgVEFYVUQgZG9jdW1lbnQgc291cmNlZCBmcm9tOlxuICogLSBgaHR0cHM6Ly93d3cub2VjZC5vcmcvdGF4L2F1dG9tYXRpYy1leGNoYW5nZS9jcnMtaW1wbGVtZW50YXRpb24tYW5kLWFzc2lzdGFuY2UvdGF4LWlkZW50aWZpY2F0aW9uLW51bWJlcnMvRXN0b25pYS1USU4ucGRmYFxuICovXG5cblxuZnVuY3Rpb24gZXRFZUNoZWNrKHRpbikge1xuICAvLyBFeHRyYWN0IHllYXIgYW5kIGFkZCBjZW50dXJ5XG4gIHZhciBmdWxsX3llYXIgPSB0aW4uc2xpY2UoMSwgMyk7XG4gIHZhciBjZW50dXJ5X2RpZ2l0ID0gdGluLnNsaWNlKDAsIDEpO1xuXG4gIHN3aXRjaCAoY2VudHVyeV9kaWdpdCkge1xuICAgIGNhc2UgJzEnOlxuICAgIGNhc2UgJzInOlxuICAgICAgZnVsbF95ZWFyID0gXCIxOFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICczJzpcbiAgICBjYXNlICc0JzpcbiAgICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGZ1bGxfeWVhciA9IFwiMjBcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICAgIGJyZWFrO1xuICB9IC8vIENoZWNrIGRhdGUgdmFsaWRpdHlcblxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgzLCA1KSwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoNSwgNykpO1xuXG4gIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZWVkvTU0vREQnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBTcGxpdCBkaWdpdHMgaW50byBhbiBhcnJheSBmb3IgZnVydGhlciBwcm9jZXNzaW5nXG5cblxuICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KTtcbiAgdmFyIGNoZWNrc3VtID0gMDtcbiAgdmFyIHdlaWdodCA9IDE7IC8vIE11bHRpcGx5IGJ5IHdlaWdodCBhbmQgYWRkIHRvIGNoZWNrc3VtXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY2hlY2tzdW0gKz0gZGlnaXRzW2ldICogd2VpZ2h0O1xuICAgIHdlaWdodCArPSAxO1xuXG4gICAgaWYgKHdlaWdodCA9PT0gMTApIHtcbiAgICAgIHdlaWdodCA9IDE7XG4gICAgfVxuICB9IC8vIERvIGFnYWluIGlmIG1vZHVsbyAxMSBvZiBjaGVja3N1bSBpcyAxMFxuXG5cbiAgaWYgKGNoZWNrc3VtICUgMTEgPT09IDEwKSB7XG4gICAgY2hlY2tzdW0gPSAwO1xuICAgIHdlaWdodCA9IDM7XG5cbiAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCAxMDsgX2kzKyspIHtcbiAgICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tfaTNdICogd2VpZ2h0O1xuICAgICAgd2VpZ2h0ICs9IDE7XG5cbiAgICAgIGlmICh3ZWlnaHQgPT09IDEwKSB7XG4gICAgICAgIHdlaWdodCA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrc3VtICUgMTEgPT09IDEwKSB7XG4gICAgICByZXR1cm4gZGlnaXRzWzEwXSA9PT0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW0gJSAxMSA9PT0gZGlnaXRzWzEwXTtcbn1cbi8qXG4gKiBmaS1GSSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoSGVua2lsXHUwMEY2dHVubnVzIChIRVRVKSwgcGVyc29ucyBvbmx5KVxuICogQ2hlY2tzIGlmIGJpcnRoIGRhdGUgKGZpcnN0IHNpeCBkaWdpdHMgcGx1cyBjZW50dXJ5IHN5bWJvbCkgaXMgdmFsaWRcbiAqIGFuZCBjYWxjdWxhdGVzIGNoZWNrIChsYXN0KSBkaWdpdFxuICovXG5cblxuZnVuY3Rpb24gZmlGaUNoZWNrKHRpbikge1xuICAvLyBFeHRyYWN0IHllYXIgYW5kIGFkZCBjZW50dXJ5XG4gIHZhciBmdWxsX3llYXIgPSB0aW4uc2xpY2UoNCwgNik7XG4gIHZhciBjZW50dXJ5X3N5bWJvbCA9IHRpbi5zbGljZSg2LCA3KTtcblxuICBzd2l0Y2ggKGNlbnR1cnlfc3ltYm9sKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICBmdWxsX3llYXIgPSBcIjE4XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJy0nOlxuICAgICAgZnVsbF95ZWFyID0gXCIxOVwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgYnJlYWs7XG4gIH0gLy8gQ2hlY2sgZGF0ZSB2YWxpZGl0eVxuXG5cbiAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChmdWxsX3llYXIsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDIsIDQpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSgwLCAyKSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIENhbGN1bGF0ZSBjaGVjayBjaGFyYWN0ZXJcblxuXG4gIHZhciBjaGVja3N1bSA9IHBhcnNlSW50KHRpbi5zbGljZSgwLCA2KSArIHRpbi5zbGljZSg3LCAxMCksIDEwKSAlIDMxO1xuXG4gIGlmIChjaGVja3N1bSA8IDEwKSB7XG4gICAgcmV0dXJuIGNoZWNrc3VtID09PSBwYXJzZUludCh0aW4uc2xpY2UoMTApLCAxMCk7XG4gIH1cblxuICBjaGVja3N1bSAtPSAxMDtcbiAgdmFyIGxldHRlcnNfbG9va3VwID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdIJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdQJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWSddO1xuICByZXR1cm4gbGV0dGVyc19sb29rdXBbY2hlY2tzdW1dID09PSB0aW4uc2xpY2UoMTApO1xufVxuLypcbiAqIGZyL25sLUJFIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChOdW1cdTAwRTlybyBuYXRpb25hbCAoTi5OLiksIHBlcnNvbnMgb25seSlcbiAqIENoZWNrcyBpZiBiaXJ0aCBkYXRlIChmaXJzdCBzaXggZGlnaXRzKSBpcyB2YWxpZCBhbmQgY2FsY3VsYXRlcyBjaGVjayAobGFzdCB0d28pIGRpZ2l0c1xuICovXG5cblxuZnVuY3Rpb24gZnJCZUNoZWNrKHRpbikge1xuICAvLyBaZXJvIG1vbnRoL2RheSB2YWx1ZSBpcyBhY2NlcHRhYmxlXG4gIGlmICh0aW4uc2xpY2UoMiwgNCkgIT09ICcwMCcgfHwgdGluLnNsaWNlKDQsIDYpICE9PSAnMDAnKSB7XG4gICAgLy8gRXh0cmFjdCBkYXRlIGZyb20gZmlyc3Qgc2l4IGRpZ2l0cyBvZiBUSU5cbiAgICB2YXIgZGF0ZSA9IFwiXCIuY29uY2F0KHRpbi5zbGljZSgwLCAyKSwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoMiwgNCksIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDQsIDYpKTtcblxuICAgIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZL01NL0REJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2hlY2tzdW0gPSA5NyAtIHBhcnNlSW50KHRpbi5zbGljZSgwLCA5KSwgMTApICUgOTc7XG4gIHZhciBjaGVja2RpZ2l0cyA9IHBhcnNlSW50KHRpbi5zbGljZSg5LCAxMSksIDEwKTtcblxuICBpZiAoY2hlY2tzdW0gIT09IGNoZWNrZGlnaXRzKSB7XG4gICAgY2hlY2tzdW0gPSA5NyAtIHBhcnNlSW50KFwiMlwiLmNvbmNhdCh0aW4uc2xpY2UoMCwgOSkpLCAxMCkgJSA5NztcblxuICAgIGlmIChjaGVja3N1bSAhPT0gY2hlY2tkaWdpdHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qXG4gKiBmci1GUiB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoTnVtXHUwMEU5cm8gZmlzY2FsIGRlIHJcdTAwRTlmXHUwMEU5cmVuY2UgKG51bVx1MDBFOXJvIFNQSSksIHBlcnNvbnMgb25seSlcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsY3VsYXRpbmcgY2hlY2sgKGxhc3QgdGhyZWUpIGRpZ2l0c1xuICovXG5cblxuZnVuY3Rpb24gZnJGckNoZWNrKHRpbikge1xuICB0aW4gPSB0aW4ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgdmFyIGNoZWNrc3VtID0gcGFyc2VJbnQodGluLnNsaWNlKDAsIDEwKSwgMTApICUgNTExO1xuICB2YXIgY2hlY2tkaWdpdHMgPSBwYXJzZUludCh0aW4uc2xpY2UoMTAsIDEzKSwgMTApO1xuICByZXR1cm4gY2hlY2tzdW0gPT09IGNoZWNrZGlnaXRzO1xufVxuLypcbiAqIGZyL2xiLUxVIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIChudW1cdTAwRTlybyBkXHUyMDE5aWRlbnRpZmljYXRpb24gcGVyc29ubmVsbGUsIHBlcnNvbnMgb25seSlcbiAqIFZlcmlmeSBiaXJ0aCBkYXRlIHZhbGlkaXR5IGFuZCBydW4gTHVobiBhbmQgVmVyaG9lZmYgY2hlY2tzXG4gKi9cblxuXG5mdW5jdGlvbiBmckx1Q2hlY2sodGluKSB7XG4gIC8vIEV4dHJhY3QgZGF0ZSBhbmQgY2hlY2sgdmFsaWRpdHlcbiAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdCh0aW4uc2xpY2UoMCwgNCksIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDQsIDYpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg2LCA4KSk7XG5cbiAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFJ1biBMdWhuIGNoZWNrXG5cblxuICBpZiAoIWFsZ29yaXRobXMubHVobkNoZWNrKHRpbi5zbGljZSgwLCAxMikpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFJlbW92ZSBMdWhuIGNoZWNrIGRpZ2l0IGFuZCBydW4gVmVyaG9lZmYgY2hlY2tcblxuXG4gIHJldHVybiBhbGdvcml0aG1zLnZlcmhvZWZmQ2hlY2soXCJcIi5jb25jYXQodGluLnNsaWNlKDAsIDExKSkuY29uY2F0KHRpblsxMl0pKTtcbn1cbi8qXG4gKiBoci1IUiB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoT3NvYm5pIGlkZW50aWZpa2FjaWpza2kgYnJvaiAoT0lCKSwgcGVyc29ucy9lbnRpdGllcylcbiAqIFZlcmlmeSBUSU4gdmFsaWRpdHkgYnkgY2FsbGluZyBpc283MDY0Q2hlY2soZGlnaXRzKVxuICovXG5cblxuZnVuY3Rpb24gaHJIckNoZWNrKHRpbikge1xuICByZXR1cm4gYWxnb3JpdGhtcy5pc283MDY0Q2hlY2sodGluKTtcbn1cbi8qXG4gKiBodS1IVSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoQWRcdTAwRjNhem9ub3NcdTAwRUR0XHUwMEYzIGplbCwgcGVyc29ucyBvbmx5KVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAobGFzdCkgZGlnaXRcbiAqL1xuXG5cbmZ1bmN0aW9uIGh1SHVDaGVjayh0aW4pIHtcbiAgLy8gc3BsaXQgZGlnaXRzIGludG8gYW4gYXJyYXkgZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KTtcbiAgdmFyIGNoZWNrc3VtID0gODtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IDk7IGkrKykge1xuICAgIGNoZWNrc3VtICs9IGRpZ2l0c1tpXSAqIChpICsgMSk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tzdW0gJSAxMSA9PT0gZGlnaXRzWzldO1xufVxuLypcbiAqIGx0LUxUIHZhbGlkYXRpb24gZnVuY3Rpb24gKHNob3VsZCBnbyBoZXJlIGlmIG5lZWRlZClcbiAqIChBc21lbnMga29kYXMsIHBlcnNvbnMvZW50aXRpZXMgcmVzcGVjdGl2ZWx5KVxuICogQ3VycmVudCB2YWxpZGF0aW9uIGNoZWNrIGlzIGFsaWFzIG9mIGV0RWVDaGVjay0gc2FtZSBmb3JtYXQgYXBwbGllc1xuICovXG5cbi8qXG4gKiBpdC1JVCBmaXJzdC9sYXN0IG5hbWUgdmFsaWRpdHkgY2hlY2tcbiAqIEFjY2VwdHMgaXQtSVQgVElOLWVuY29kZWQgbmFtZXMgYXMgYSB0aHJlZS1lbGVtZW50IGNoYXJhY3RlciBhcnJheSBhbmQgY2hlY2tzIHRoZWlyIHZhbGlkaXR5XG4gKiBEdWUgdG8gbGFjayBvZiBjbGFyaXR5IGJldHdlZW4gcmVzb3VyY2VzIChcIkFyZSBvbmx5IEl0YWxpYW4gY29uc29uYW50cyB1c2VkP1xuICogV2hhdCBoYXBwZW5zIGlmIGEgcGVyc29uIGhhcyBYIGluIHRoZWlyIG5hbWU/XCIgZXRjLikgb25seSB0d28gdGVzdCBjb25kaXRpb25zXG4gKiBoYXZlIGJlZW4gaW1wbGVtZW50ZWQ6XG4gKiBWb3dlbHMgbWF5IG9ubHkgYmUgZm9sbG93ZWQgYnkgb3RoZXIgdm93ZWxzIG9yIGFuIFggY2hhcmFjdGVyXG4gKiBhbmQgWCBjaGFyYWN0ZXJzIGFmdGVyIHZvd2VscyBtYXkgb25seSBiZSBmb2xsb3dlZCBieSBvdGhlciBYIGNoYXJhY3RlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBpdEl0TmFtZUNoZWNrKG5hbWUpIHtcbiAgLy8gdHJ1ZSBhdCB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIGEgdm93ZWxcbiAgdmFyIHZvd2VsZmxhZyA9IGZhbHNlOyAvLyB0cnVlIGF0IHRoZSBmaXJzdCBvY2N1cmVuY2Ugb2YgYW4gWCBBRlRFUiB2b3dlbFxuICAvLyAodG8gcHJvcGVybHkgaGFuZGxlIGxhc3QgbmFtZXMgd2l0aCBYIGFzIGNvbnNvbmFudClcblxuICB2YXIgeGZsYWcgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGlmICghdm93ZWxmbGFnICYmIC9bQUVJT1VdLy50ZXN0KG5hbWVbaV0pKSB7XG4gICAgICB2b3dlbGZsYWcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXhmbGFnICYmIHZvd2VsZmxhZyAmJiBuYW1lW2ldID09PSAnWCcpIHtcbiAgICAgIHhmbGFnID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGkgPiAwKSB7XG4gICAgICBpZiAodm93ZWxmbGFnICYmICF4ZmxhZykge1xuICAgICAgICBpZiAoIS9bQUVJT1VdLy50ZXN0KG5hbWVbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh4ZmxhZykge1xuICAgICAgICBpZiAoIS9YLy50ZXN0KG5hbWVbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogaXQtSVQgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKENvZGljZSBmaXNjYWxlIChUSU4tSVQpLCBwZXJzb25zIG9ubHkpXG4gKiBWZXJpZnkgbmFtZSwgYmlydGggZGF0ZSBhbmQgY29kaWNlIGNhdGFzdGFsZSB2YWxpZGl0eVxuICogYW5kIGNhbGN1bGF0ZSBjaGVjayBjaGFyYWN0ZXIuXG4gKiBNYXRlcmlhbCBub3QgaW4gREctVEFYVUQgZG9jdW1lbnQgc291cmNlZCBmcm9tOlxuICogYGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0l0YWxpYW5fZmlzY2FsX2NvZGVgXG4gKi9cblxuXG5mdW5jdGlvbiBpdEl0Q2hlY2sodGluKSB7XG4gIC8vIENhcGl0YWxpemUgYW5kIHNwbGl0IGNoYXJhY3RlcnMgaW50byBhbiBhcnJheSBmb3IgZnVydGhlciBwcm9jZXNzaW5nXG4gIHZhciBjaGFycyA9IHRpbi50b1VwcGVyQ2FzZSgpLnNwbGl0KCcnKTsgLy8gQ2hlY2sgZmlyc3QgYW5kIGxhc3QgbmFtZSB2YWxpZGl0eSBjYWxsaW5nIGl0SXROYW1lQ2hlY2soKVxuXG4gIGlmICghaXRJdE5hbWVDaGVjayhjaGFycy5zbGljZSgwLCAzKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWl0SXROYW1lQ2hlY2soY2hhcnMuc2xpY2UoMywgNikpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIENvbnZlcnQgbGV0dGVycyBpbiBudW1iZXIgc3BhY2VzIGJhY2sgdG8gbnVtYmVycyBpZiBhbnlcblxuXG4gIHZhciBudW1iZXJfbG9jYXRpb25zID0gWzYsIDcsIDksIDEwLCAxMiwgMTMsIDE0XTtcbiAgdmFyIG51bWJlcl9yZXBsYWNlID0ge1xuICAgIEw6ICcwJyxcbiAgICBNOiAnMScsXG4gICAgTjogJzInLFxuICAgIFA6ICczJyxcbiAgICBROiAnNCcsXG4gICAgUjogJzUnLFxuICAgIFM6ICc2JyxcbiAgICBUOiAnNycsXG4gICAgVTogJzgnLFxuICAgIFY6ICc5J1xuICB9O1xuXG4gIGZvciAodmFyIF9pNCA9IDAsIF9udW1iZXJfbG9jYXRpb25zID0gbnVtYmVyX2xvY2F0aW9uczsgX2k0IDwgX251bWJlcl9sb2NhdGlvbnMubGVuZ3RoOyBfaTQrKykge1xuICAgIHZhciBpID0gX251bWJlcl9sb2NhdGlvbnNbX2k0XTtcblxuICAgIGlmIChjaGFyc1tpXSBpbiBudW1iZXJfcmVwbGFjZSkge1xuICAgICAgY2hhcnMuc3BsaWNlKGksIDEsIG51bWJlcl9yZXBsYWNlW2NoYXJzW2ldXSk7XG4gICAgfVxuICB9IC8vIEV4dHJhY3QgbW9udGggYW5kIGRheSwgYW5kIGNoZWNrIGRhdGUgdmFsaWRpdHlcblxuXG4gIHZhciBtb250aF9yZXBsYWNlID0ge1xuICAgIEE6ICcwMScsXG4gICAgQjogJzAyJyxcbiAgICBDOiAnMDMnLFxuICAgIEQ6ICcwNCcsXG4gICAgRTogJzA1JyxcbiAgICBIOiAnMDYnLFxuICAgIEw6ICcwNycsXG4gICAgTTogJzA4JyxcbiAgICBQOiAnMDknLFxuICAgIFI6ICcxMCcsXG4gICAgUzogJzExJyxcbiAgICBUOiAnMTInXG4gIH07XG4gIHZhciBtb250aCA9IG1vbnRoX3JlcGxhY2VbY2hhcnNbOF1dO1xuICB2YXIgZGF5ID0gcGFyc2VJbnQoY2hhcnNbOV0gKyBjaGFyc1sxMF0sIDEwKTtcblxuICBpZiAoZGF5ID4gNDApIHtcbiAgICBkYXkgLT0gNDA7XG4gIH1cblxuICBpZiAoZGF5IDwgMTApIHtcbiAgICBkYXkgPSBcIjBcIi5jb25jYXQoZGF5KTtcbiAgfVxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoY2hhcnNbNl0pLmNvbmNhdChjaGFyc1s3XSwgXCIvXCIpLmNvbmNhdChtb250aCwgXCIvXCIpLmNvbmNhdChkYXkpO1xuXG4gIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZL01NL0REJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gQ2FsY3VsYXRlIGNoZWNrIGNoYXJhY3RlciBieSBhZGRpbmcgdXAgZXZlbiBhbmQgb2RkIGNoYXJhY3RlcnMgYXMgbnVtYmVyc1xuXG5cbiAgdmFyIGNoZWNrc3VtID0gMDtcblxuICBmb3IgKHZhciBfaTUgPSAxOyBfaTUgPCBjaGFycy5sZW5ndGggLSAxOyBfaTUgKz0gMikge1xuICAgIHZhciBjaGFyX3RvX2ludCA9IHBhcnNlSW50KGNoYXJzW19pNV0sIDEwKTtcblxuICAgIGlmIChpc05hTihjaGFyX3RvX2ludCkpIHtcbiAgICAgIGNoYXJfdG9faW50ID0gY2hhcnNbX2k1XS5jaGFyQ29kZUF0KDApIC0gNjU7XG4gICAgfVxuXG4gICAgY2hlY2tzdW0gKz0gY2hhcl90b19pbnQ7XG4gIH1cblxuICB2YXIgb2RkX2NvbnZlcnQgPSB7XG4gICAgLy8gTWFwcyBvZiBjaGFyYWN0ZXJzIGF0IG9kZCBwbGFjZXNcbiAgICBBOiAxLFxuICAgIEI6IDAsXG4gICAgQzogNSxcbiAgICBEOiA3LFxuICAgIEU6IDksXG4gICAgRjogMTMsXG4gICAgRzogMTUsXG4gICAgSDogMTcsXG4gICAgSTogMTksXG4gICAgSjogMjEsXG4gICAgSzogMixcbiAgICBMOiA0LFxuICAgIE06IDE4LFxuICAgIE46IDIwLFxuICAgIE86IDExLFxuICAgIFA6IDMsXG4gICAgUTogNixcbiAgICBSOiA4LFxuICAgIFM6IDEyLFxuICAgIFQ6IDE0LFxuICAgIFU6IDE2LFxuICAgIFY6IDEwLFxuICAgIFc6IDIyLFxuICAgIFg6IDI1LFxuICAgIFk6IDI0LFxuICAgIFo6IDIzLFxuICAgIDA6IDEsXG4gICAgMTogMFxuICB9O1xuXG4gIGZvciAodmFyIF9pNiA9IDA7IF9pNiA8IGNoYXJzLmxlbmd0aCAtIDE7IF9pNiArPSAyKSB7XG4gICAgdmFyIF9jaGFyX3RvX2ludCA9IDA7XG5cbiAgICBpZiAoY2hhcnNbX2k2XSBpbiBvZGRfY29udmVydCkge1xuICAgICAgX2NoYXJfdG9faW50ID0gb2RkX2NvbnZlcnRbY2hhcnNbX2k2XV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtdWx0aXBsaWVyID0gcGFyc2VJbnQoY2hhcnNbX2k2XSwgMTApO1xuICAgICAgX2NoYXJfdG9faW50ID0gMiAqIG11bHRpcGxpZXIgKyAxO1xuXG4gICAgICBpZiAobXVsdGlwbGllciA+IDQpIHtcbiAgICAgICAgX2NoYXJfdG9faW50ICs9IDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tzdW0gKz0gX2NoYXJfdG9faW50O1xuICB9XG5cbiAgaWYgKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjaGVja3N1bSAlIDI2KSAhPT0gY2hhcnNbMTVdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogbHYtTFYgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKFBlcnNvbmFzIGtvZHMgKFBLKSwgcGVyc29ucyBvbmx5KVxuICogQ2hlY2sgdmFsaWRpdHkgb2YgYmlydGggZGF0ZSBhbmQgY2FsY3VsYXRlIGNoZWNrIChsYXN0KSBkaWdpdFxuICogU3VwcG9ydCBvbmx5IGZvciBvbGQgZm9ybWF0IG51bWJlcnMgKG5vdCBzdGFydGluZyB3aXRoICczMicsIGlzc3VlZCBiZWZvcmUgMjAxNy8wNy8wMSlcbiAqIE1hdGVyaWFsIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudCBzb3VyY2VkIGZyb206XG4gKiBgaHR0cHM6Ly9ib290LnJpdGFrYWZpamEubHYvZm9ydW1zL2luZGV4LnBocD8vdG9waWMvODgzMTQtcGVyc29uYXMta29kYS1hbGdvcml0bXMtJUM0JThEZWtzdW1tYS9gXG4gKi9cblxuXG5mdW5jdGlvbiBsdkx2Q2hlY2sodGluKSB7XG4gIHRpbiA9IHRpbi5yZXBsYWNlKC9cXFcvLCAnJyk7IC8vIEV4dHJhY3QgZGF0ZSBmcm9tIFRJTlxuXG4gIHZhciBkYXkgPSB0aW4uc2xpY2UoMCwgMik7XG5cbiAgaWYgKGRheSAhPT0gJzMyJykge1xuICAgIC8vIE5vIGRhdGUvY2hlY2tzdW0gY2hlY2sgaWYgbmV3IGZvcm1hdFxuICAgIHZhciBtb250aCA9IHRpbi5zbGljZSgyLCA0KTtcblxuICAgIGlmIChtb250aCAhPT0gJzAwJykge1xuICAgICAgLy8gTm8gZGF0ZSBjaGVjayBpZiB1bmtub3duIG1vbnRoXG4gICAgICB2YXIgZnVsbF95ZWFyID0gdGluLnNsaWNlKDQsIDYpO1xuXG4gICAgICBzd2l0Y2ggKHRpbls2XSkge1xuICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICBmdWxsX3llYXIgPSBcIjE4XCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgZnVsbF95ZWFyID0gXCIxOVwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBDaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICAgICAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChmdWxsX3llYXIsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDIsIDQpLCBcIi9cIikuY29uY2F0KGRheSk7XG5cbiAgICAgIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZWVkvTU0vREQnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSAvLyBDYWxjdWxhdGUgY2hlY2sgZGlnaXRcblxuXG4gICAgdmFyIGNoZWNrc3VtID0gMTEwMTtcbiAgICB2YXIgbXVsdGlwX2xvb2t1cCA9IFsxLCA2LCAzLCA3LCA5LCAxMCwgNSwgOCwgNCwgMl07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbi5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNoZWNrc3VtIC09IHBhcnNlSW50KHRpbltpXSwgMTApICogbXVsdGlwX2xvb2t1cFtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VJbnQodGluWzEwXSwgMTApID09PSBjaGVja3N1bSAlIDExO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogbXQtTVQgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKElkZW50aXR5IENhcmQgTnVtYmVyIG9yIFVuaXF1ZSBUYXhwYXllciBSZWZlcmVuY2UsIHBlcnNvbnMvZW50aXRpZXMpXG4gKiBWZXJpZnkgSWRlbnRpdHkgQ2FyZCBOdW1iZXIgc3RydWN0dXJlIChubyBvdGhlciB0ZXN0cyBmb3VuZClcbiAqL1xuXG5cbmZ1bmN0aW9uIG10TXRDaGVjayh0aW4pIHtcbiAgaWYgKHRpbi5sZW5ndGggIT09IDkpIHtcbiAgICAvLyBObyB0ZXN0cyBmb3IgVVRSXG4gICAgdmFyIGNoYXJzID0gdGluLnRvVXBwZXJDYXNlKCkuc3BsaXQoJycpOyAvLyBGaWxsIHdpdGggemVyb3MgaWYgc21hbGxlciB0aGFuIHByb3BlclxuXG4gICAgd2hpbGUgKGNoYXJzLmxlbmd0aCA8IDgpIHtcbiAgICAgIGNoYXJzLnVuc2hpZnQoMCk7XG4gICAgfSAvLyBWYWxpZGF0ZSBmb3JtYXQgYWNjb3JkaW5nIHRvIGxhc3QgY2hhcmFjdGVyXG5cblxuICAgIHN3aXRjaCAodGluWzddKSB7XG4gICAgICBjYXNlICdBJzpcbiAgICAgIGNhc2UgJ1AnOlxuICAgICAgICBpZiAocGFyc2VJbnQoY2hhcnNbNl0sIDEwKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGZpcnN0X3BhcnQgPSBwYXJzZUludChjaGFycy5qb2luKCcnKS5zbGljZSgwLCA1KSwgMTApO1xuXG4gICAgICAgICAgaWYgKGZpcnN0X3BhcnQgPiAzMjAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzZWNvbmRfcGFydCA9IHBhcnNlSW50KGNoYXJzLmpvaW4oJycpLnNsaWNlKDUsIDcpLCAxMCk7XG5cbiAgICAgICAgICBpZiAoZmlyc3RfcGFydCA9PT0gc2Vjb25kX3BhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qXG4gKiBubC1OTCB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoQnVyZ2Vyc2VydmljZW51bW1lciAoQlNOKSBvciBSZWNodHNwZXJzb25lbiBTYW1lbndlcmtpbmdzdmVyYmFuZGVuIEluZm9ybWF0aWUgTnVtbWVyIChSU0lOKSxcbiAqIHBlcnNvbnMvZW50aXRpZXMgcmVzcGVjdGl2ZWx5KVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAobGFzdCkgZGlnaXQgKHZhcmlhbnQgb2YgTU9EIDExKVxuICovXG5cblxuZnVuY3Rpb24gbmxObENoZWNrKHRpbikge1xuICByZXR1cm4gYWxnb3JpdGhtcy5yZXZlcnNlTXVsdGlwbHlBbmRTdW0odGluLnNwbGl0KCcnKS5zbGljZSgwLCA4KS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KSwgOSkgJSAxMSA9PT0gcGFyc2VJbnQodGluWzhdLCAxMCk7XG59XG4vKlxuICogcGwtUEwgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKFBvd3N6ZWNobnkgRWxla3Ryb25pY3pueSBTeXN0ZW0gRXdpZGVuY2ppIEx1ZG5vXHUwMTVCY2kgKFBFU0VMKVxuICogb3IgTnVtZXIgaWRlbnR5ZmlrYWNqaSBwb2RhdGtvd2VqIChOSVApLCBwZXJzb25zL2VudGl0aWVzKVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSB2YWxpZGF0aW5nIGJpcnRoIGRhdGUgKFBFU0VMKSBhbmQgY2FsY3VsYXRpbmcgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBwbFBsQ2hlY2sodGluKSB7XG4gIC8vIE5JUFxuICBpZiAodGluLmxlbmd0aCA9PT0gMTApIHtcbiAgICAvLyBDYWxjdWxhdGUgbGFzdCBkaWdpdCBieSBtdWx0aXBseWluZyB3aXRoIGxvb2t1cFxuICAgIHZhciBsb29rdXAgPSBbNiwgNSwgNywgMiwgMywgNCwgNSwgNiwgN107XG4gICAgdmFyIF9jaGVja3N1bSA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvb2t1cC5sZW5ndGg7IGkrKykge1xuICAgICAgX2NoZWNrc3VtICs9IHBhcnNlSW50KHRpbltpXSwgMTApICogbG9va3VwW2ldO1xuICAgIH1cblxuICAgIF9jaGVja3N1bSAlPSAxMTtcblxuICAgIGlmIChfY2hlY2tzdW0gPT09IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jaGVja3N1bSA9PT0gcGFyc2VJbnQodGluWzldLCAxMCk7XG4gIH0gLy8gUEVTRUxcbiAgLy8gRXh0cmFjdCBmdWxsIHllYXIgdXNpbmcgbW9udGhcblxuXG4gIHZhciBmdWxsX3llYXIgPSB0aW4uc2xpY2UoMCwgMik7XG4gIHZhciBtb250aCA9IHBhcnNlSW50KHRpbi5zbGljZSgyLCA0KSwgMTApO1xuXG4gIGlmIChtb250aCA+IDgwKSB7XG4gICAgZnVsbF95ZWFyID0gXCIxOFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIG1vbnRoIC09IDgwO1xuICB9IGVsc2UgaWYgKG1vbnRoID4gNjApIHtcbiAgICBmdWxsX3llYXIgPSBcIjIyXCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgbW9udGggLT0gNjA7XG4gIH0gZWxzZSBpZiAobW9udGggPiA0MCkge1xuICAgIGZ1bGxfeWVhciA9IFwiMjFcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICBtb250aCAtPSA0MDtcbiAgfSBlbHNlIGlmIChtb250aCA+IDIwKSB7XG4gICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgIG1vbnRoIC09IDIwO1xuICB9IGVsc2Uge1xuICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgfSAvLyBBZGQgbGVhZGluZyB6ZXJvIHRvIG1vbnRoIGlmIG5lZWRlZFxuXG5cbiAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICBtb250aCA9IFwiMFwiLmNvbmNhdChtb250aCk7XG4gIH0gLy8gQ2hlY2sgZGF0ZSB2YWxpZGl0eVxuXG5cbiAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChmdWxsX3llYXIsIFwiL1wiKS5jb25jYXQobW9udGgsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDQsIDYpKTtcblxuICBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWVlZL01NL0REJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gQ2FsY3VsYXRlIGxhc3QgZGlnaXQgYnkgbXVsaXRwbHlpbmcgd2l0aCBvZGQgb25lLWRpZ2l0IG51bWJlcnMgZXhjZXB0IDVcblxuXG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIHZhciBtdWx0aXBsaWVyID0gMTtcblxuICBmb3IgKHZhciBfaTcgPSAwOyBfaTcgPCB0aW4ubGVuZ3RoIC0gMTsgX2k3KyspIHtcbiAgICBjaGVja3N1bSArPSBwYXJzZUludCh0aW5bX2k3XSwgMTApICogbXVsdGlwbGllciAlIDEwO1xuICAgIG11bHRpcGxpZXIgKz0gMjtcblxuICAgIGlmIChtdWx0aXBsaWVyID4gMTApIHtcbiAgICAgIG11bHRpcGxpZXIgPSAxO1xuICAgIH0gZWxzZSBpZiAobXVsdGlwbGllciA9PT0gNSkge1xuICAgICAgbXVsdGlwbGllciArPSAyO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrc3VtID0gMTAgLSBjaGVja3N1bSAlIDEwO1xuICByZXR1cm4gY2hlY2tzdW0gPT09IHBhcnNlSW50KHRpblsxMF0sIDEwKTtcbn1cbi8qXG4qIHB0LUJSIHZhbGlkYXRpb24gZnVuY3Rpb25cbiogKENhZGFzdHJvIGRlIFBlc3NvYXMgRlx1MDBFRHNpY2FzIChDUEYsIHBlcnNvbnMpXG4qIENhZGFzdHJvIE5hY2lvbmFsIGRlIFBlc3NvYXMgSnVyXHUwMEVEZGljYXMgKENOUEosIGVudGl0aWVzKVxuKiBCb3RoIGlucHV0cyB3aWxsIGJlIHZhbGlkYXRlZFxuKi9cblxuXG5mdW5jdGlvbiBwdEJyQ2hlY2sodGluKSB7XG4gIGlmICh0aW4ubGVuZ3RoID09PSAxMSkge1xuICAgIHZhciBfc3VtO1xuXG4gICAgdmFyIHJlbWFpbmRlcjtcbiAgICBfc3VtID0gMDtcbiAgICBpZiAoIC8vIFJlamVjdCBrbm93biBpbnZhbGlkIENQRnNcbiAgICB0aW4gPT09ICcxMTExMTExMTExMScgfHwgdGluID09PSAnMjIyMjIyMjIyMjInIHx8IHRpbiA9PT0gJzMzMzMzMzMzMzMzJyB8fCB0aW4gPT09ICc0NDQ0NDQ0NDQ0NCcgfHwgdGluID09PSAnNTU1NTU1NTU1NTUnIHx8IHRpbiA9PT0gJzY2NjY2NjY2NjY2JyB8fCB0aW4gPT09ICc3Nzc3Nzc3Nzc3NycgfHwgdGluID09PSAnODg4ODg4ODg4ODgnIHx8IHRpbiA9PT0gJzk5OTk5OTk5OTk5JyB8fCB0aW4gPT09ICcwMDAwMDAwMDAwMCcpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgICAgX3N1bSArPSBwYXJzZUludCh0aW4uc3Vic3RyaW5nKGkgLSAxLCBpKSwgMTApICogKDExIC0gaSk7XG4gICAgfVxuXG4gICAgcmVtYWluZGVyID0gX3N1bSAqIDEwICUgMTE7XG4gICAgaWYgKHJlbWFpbmRlciA9PT0gMTApIHJlbWFpbmRlciA9IDA7XG4gICAgaWYgKHJlbWFpbmRlciAhPT0gcGFyc2VJbnQodGluLnN1YnN0cmluZyg5LCAxMCksIDEwKSkgcmV0dXJuIGZhbHNlO1xuICAgIF9zdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgX2k4ID0gMTsgX2k4IDw9IDEwOyBfaTgrKykge1xuICAgICAgX3N1bSArPSBwYXJzZUludCh0aW4uc3Vic3RyaW5nKF9pOCAtIDEsIF9pOCksIDEwKSAqICgxMiAtIF9pOCk7XG4gICAgfVxuXG4gICAgcmVtYWluZGVyID0gX3N1bSAqIDEwICUgMTE7XG4gICAgaWYgKHJlbWFpbmRlciA9PT0gMTApIHJlbWFpbmRlciA9IDA7XG4gICAgaWYgKHJlbWFpbmRlciAhPT0gcGFyc2VJbnQodGluLnN1YnN0cmluZygxMCwgMTEpLCAxMCkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICggLy8gUmVqZWN0IGtub3cgaW52YWxpZCBDTlBKc1xuICB0aW4gPT09ICcwMDAwMDAwMDAwMDAwMCcgfHwgdGluID09PSAnMTExMTExMTExMTExMTEnIHx8IHRpbiA9PT0gJzIyMjIyMjIyMjIyMjIyJyB8fCB0aW4gPT09ICczMzMzMzMzMzMzMzMzMycgfHwgdGluID09PSAnNDQ0NDQ0NDQ0NDQ0NDQnIHx8IHRpbiA9PT0gJzU1NTU1NTU1NTU1NTU1JyB8fCB0aW4gPT09ICc2NjY2NjY2NjY2NjY2NicgfHwgdGluID09PSAnNzc3Nzc3Nzc3Nzc3NzcnIHx8IHRpbiA9PT0gJzg4ODg4ODg4ODg4ODg4JyB8fCB0aW4gPT09ICc5OTk5OTk5OTk5OTk5OScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gdGluLmxlbmd0aCAtIDI7XG4gIHZhciBpZGVudGlmaWVycyA9IHRpbi5zdWJzdHJpbmcoMCwgbGVuZ3RoKTtcbiAgdmFyIHZlcmlmaWNhdG9ycyA9IHRpbi5zdWJzdHJpbmcobGVuZ3RoKTtcbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBwb3MgPSBsZW5ndGggLSA3O1xuXG4gIGZvciAodmFyIF9pOSA9IGxlbmd0aDsgX2k5ID49IDE7IF9pOS0tKSB7XG4gICAgc3VtICs9IGlkZW50aWZpZXJzLmNoYXJBdChsZW5ndGggLSBfaTkpICogcG9zO1xuICAgIHBvcyAtPSAxO1xuXG4gICAgaWYgKHBvcyA8IDIpIHtcbiAgICAgIHBvcyA9IDk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHN1bSAlIDExIDwgMiA/IDAgOiAxMSAtIHN1bSAlIDExO1xuXG4gIGlmIChyZXN1bHQgIT09IHBhcnNlSW50KHZlcmlmaWNhdG9ycy5jaGFyQXQoMCksIDEwKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxlbmd0aCArPSAxO1xuICBpZGVudGlmaWVycyA9IHRpbi5zdWJzdHJpbmcoMCwgbGVuZ3RoKTtcbiAgc3VtID0gMDtcbiAgcG9zID0gbGVuZ3RoIC0gNztcblxuICBmb3IgKHZhciBfaTEwID0gbGVuZ3RoOyBfaTEwID49IDE7IF9pMTAtLSkge1xuICAgIHN1bSArPSBpZGVudGlmaWVycy5jaGFyQXQobGVuZ3RoIC0gX2kxMCkgKiBwb3M7XG4gICAgcG9zIC09IDE7XG5cbiAgICBpZiAocG9zIDwgMikge1xuICAgICAgcG9zID0gOTtcbiAgICB9XG4gIH1cblxuICByZXN1bHQgPSBzdW0gJSAxMSA8IDIgPyAwIDogMTEgLSBzdW0gJSAxMTtcblxuICBpZiAocmVzdWx0ICE9PSBwYXJzZUludCh2ZXJpZmljYXRvcnMuY2hhckF0KDEpLCAxMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qXG4gKiBwdC1QVCB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoTlx1MDBGQW1lcm8gZGUgaWRlbnRpZmljYVx1MDBFN1x1MDBFM28gZmlzY2FsIChOSUYpLCBwZXJzb25zL2VudGl0aWVzKVxuICogVmVyaWZ5IFRJTiB2YWxpZGl0eSBieSBjYWxjdWxhdGluZyBjaGVjayAobGFzdCkgZGlnaXQgKHZhcmlhbnQgb2YgTU9EIDExKVxuICovXG5cblxuZnVuY3Rpb24gcHRQdENoZWNrKHRpbikge1xuICB2YXIgY2hlY2tzdW0gPSAxMSAtIGFsZ29yaXRobXMucmV2ZXJzZU11bHRpcGx5QW5kU3VtKHRpbi5zcGxpdCgnJykuc2xpY2UoMCwgOCkubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbiAgfSksIDkpICUgMTE7XG5cbiAgaWYgKGNoZWNrc3VtID4gOSkge1xuICAgIHJldHVybiBwYXJzZUludCh0aW5bOF0sIDEwKSA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bSA9PT0gcGFyc2VJbnQodGluWzhdLCAxMCk7XG59XG4vKlxuICogcm8tUk8gdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKENvZCBOdW1lcmljIFBlcnNvbmFsIChDTlApIG9yIENvZCBkZSBcdTAwRUVucmVnaXN0cmFyZSBmaXNjYWxcdTAxMDMgKENJRiksXG4gKiBwZXJzb25zIG9ubHkpXG4gKiBWZXJpZnkgQ05QIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChsYXN0KSBkaWdpdCAodGVzdCBub3QgZm91bmQgZm9yIENJRilcbiAqIE1hdGVyaWFsIG5vdCBpbiBERyBUQVhVRCBkb2N1bWVudCBzb3VyY2VkIGZyb206XG4gKiBgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmF0aW9uYWxfaWRlbnRpZmljYXRpb25fbnVtYmVyI1JvbWFuaWFgXG4gKi9cblxuXG5mdW5jdGlvbiByb1JvQ2hlY2sodGluKSB7XG4gIGlmICh0aW4uc2xpY2UoMCwgNCkgIT09ICc5MDAwJykge1xuICAgIC8vIE5vIHRlc3QgZm91bmQgZm9yIHRoaXMgZm9ybWF0XG4gICAgLy8gRXh0cmFjdCBmdWxsIHllYXIgdXNpbmcgY2VudHVyeSBkaWdpdCBpZiBwb3NzaWJsZVxuICAgIHZhciBmdWxsX3llYXIgPSB0aW4uc2xpY2UoMSwgMyk7XG5cbiAgICBzd2l0Y2ggKHRpblswXSkge1xuICAgICAgY2FzZSAnMSc6XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgZnVsbF95ZWFyID0gXCIxOVwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnMyc6XG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgZnVsbF95ZWFyID0gXCIxOFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnNSc6XG4gICAgICBjYXNlICc2JzpcbiAgICAgICAgZnVsbF95ZWFyID0gXCIyMFwiLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9IC8vIENoZWNrIGRhdGUgdmFsaWRpdHlcblxuXG4gICAgdmFyIGRhdGUgPSBcIlwiLmNvbmNhdChmdWxsX3llYXIsIFwiL1wiKS5jb25jYXQodGluLnNsaWNlKDMsIDUpLCBcIi9cIikuY29uY2F0KHRpbi5zbGljZSg1LCA3KSk7XG5cbiAgICBpZiAoZGF0ZS5sZW5ndGggPT09IDgpIHtcbiAgICAgIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZL01NL0REJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISgwLCBfaXNEYXRlLmRlZmF1bHQpKGRhdGUsICdZWVlZL01NL0REJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIENhbGN1bGF0ZSBjaGVjayBkaWdpdFxuXG5cbiAgICB2YXIgZGlnaXRzID0gdGluLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChhLCAxMCk7XG4gICAgfSk7XG4gICAgdmFyIG11bHRpcGxpZXJzID0gWzIsIDcsIDksIDEsIDQsIDYsIDMsIDUsIDgsIDIsIDcsIDldO1xuICAgIHZhciBjaGVja3N1bSA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11bHRpcGxpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja3N1bSArPSBkaWdpdHNbaV0gKiBtdWx0aXBsaWVyc1tpXTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzdW0gJSAxMSA9PT0gMTApIHtcbiAgICAgIHJldHVybiBkaWdpdHNbMTJdID09PSAxO1xuICAgIH1cblxuICAgIHJldHVybiBkaWdpdHNbMTJdID09PSBjaGVja3N1bSAlIDExO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogc2stU0sgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKFJvZG5cdTAwRTkgXHUwMTBEXHUwMEVEc2xvIChSXHUwMTBDKSBvciBiZXp2XHUwMEZEem5hbW92XHUwMEU5IGlkZW50aWZpa2FcdTAxMERuXHUwMEU5IFx1MDEwRFx1MDBFRHNsbyAoQklcdTAxMEMpLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgdmFsaWRpdHkgb2YgcHJlLTE5NTQgYmlydGggbnVtYmVycyAocm9kblx1MDBFOSBcdTAxMERcdTAwRURzbG8pIG9ubHlcbiAqIER1ZSB0byB0aGUgaW50cm9kdWN0aW9uIG9mIHRoZSBwc2V1ZG8tcmFuZG9tIEJJXHUwMTBDIGl0IGlzIG5vdCBwb3NzaWJsZSB0byB0ZXN0XG4gKiBwb3N0LTE5NTQgYmlydGggbnVtYmVycyB3aXRob3V0IGtub3dpbmcgd2hldGhlciB0aGV5IGFyZSBCSVx1MDEwQyBvciBSXHUwMTBDIGJlZm9yZWhhbmRcbiAqL1xuXG5cbmZ1bmN0aW9uIHNrU2tDaGVjayh0aW4pIHtcbiAgaWYgKHRpbi5sZW5ndGggPT09IDkpIHtcbiAgICB0aW4gPSB0aW4ucmVwbGFjZSgvXFxXLywgJycpO1xuXG4gICAgaWYgKHRpbi5zbGljZSg2KSA9PT0gJzAwMCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIFRocmVlLXplcm8gc2VyaWFsIG5vdCBhc3NpZ25lZCBiZWZvcmUgMTk1NFxuICAgIC8vIEV4dHJhY3QgZnVsbCB5ZWFyIGZyb20gVElOIGxlbmd0aFxuXG5cbiAgICB2YXIgZnVsbF95ZWFyID0gcGFyc2VJbnQodGluLnNsaWNlKDAsIDIpLCAxMCk7XG5cbiAgICBpZiAoZnVsbF95ZWFyID4gNTMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZnVsbF95ZWFyIDwgMTApIHtcbiAgICAgIGZ1bGxfeWVhciA9IFwiMTkwXCIuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGxfeWVhciA9IFwiMTlcIi5jb25jYXQoZnVsbF95ZWFyKTtcbiAgICB9IC8vIEV4dHJhY3QgbW9udGggZnJvbSBUSU4gYW5kIG5vcm1hbGl6ZVxuXG5cbiAgICB2YXIgbW9udGggPSBwYXJzZUludCh0aW4uc2xpY2UoMiwgNCksIDEwKTtcblxuICAgIGlmIChtb250aCA+IDUwKSB7XG4gICAgICBtb250aCAtPSA1MDtcbiAgICB9XG5cbiAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgbW9udGggPSBcIjBcIi5jb25jYXQobW9udGgpO1xuICAgIH0gLy8gQ2hlY2sgZGF0ZSB2YWxpZGl0eVxuXG5cbiAgICB2YXIgZGF0ZSA9IFwiXCIuY29uY2F0KGZ1bGxfeWVhciwgXCIvXCIpLmNvbmNhdChtb250aCwgXCIvXCIpLmNvbmNhdCh0aW4uc2xpY2UoNCwgNikpO1xuXG4gICAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVlZWS9NTS9ERCcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKlxuICogc2wtU0kgdmFsaWRhdGlvbiBmdW5jdGlvblxuICogKERhdlx1MDEwRG5hIFx1MDE2MXRldmlsa2EsIHBlcnNvbnMvZW50aXRpZXMpXG4gKiBWZXJpZnkgVElOIHZhbGlkaXR5IGJ5IGNhbGN1bGF0aW5nIGNoZWNrIChsYXN0KSBkaWdpdCAodmFyaWFudCBvZiBNT0QgMTEpXG4gKi9cblxuXG5mdW5jdGlvbiBzbFNpQ2hlY2sodGluKSB7XG4gIHZhciBjaGVja3N1bSA9IDExIC0gYWxnb3JpdGhtcy5yZXZlcnNlTXVsdGlwbHlBbmRTdW0odGluLnNwbGl0KCcnKS5zbGljZSgwLCA3KS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xuICB9KSwgOCkgJSAxMTtcblxuICBpZiAoY2hlY2tzdW0gPT09IDEwKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRpbls3XSwgMTApID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtID09PSBwYXJzZUludCh0aW5bN10sIDEwKTtcbn1cbi8qXG4gKiBzdi1TRSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiAoUGVyc29ubnVtbWVyIG9yIHNhbW9yZG5pbmdzbnVtbWVyLCBwZXJzb25zIG9ubHkpXG4gKiBDaGVja3MgdmFsaWRpdHkgb2YgYmlydGggZGF0ZSBhbmQgY2FsbHMgbHVobkNoZWNrKCkgdG8gdmFsaWRhdGUgY2hlY2sgKGxhc3QpIGRpZ2l0XG4gKi9cblxuXG5mdW5jdGlvbiBzdlNlQ2hlY2sodGluKSB7XG4gIC8vIE1ha2UgY29weSBvZiBUSU4gYW5kIG5vcm1hbGl6ZSB0byB0d28tZGlnaXQgeWVhciBmb3JtXG4gIHZhciB0aW5fY29weSA9IHRpbi5zbGljZSgwKTtcblxuICBpZiAodGluLmxlbmd0aCA+IDExKSB7XG4gICAgdGluX2NvcHkgPSB0aW5fY29weS5zbGljZSgyKTtcbiAgfSAvLyBFeHRyYWN0IGRhdGUgb2YgYmlydGhcblxuXG4gIHZhciBmdWxsX3llYXIgPSAnJztcbiAgdmFyIG1vbnRoID0gdGluX2NvcHkuc2xpY2UoMiwgNCk7XG4gIHZhciBkYXkgPSBwYXJzZUludCh0aW5fY29weS5zbGljZSg0LCA2KSwgMTApO1xuXG4gIGlmICh0aW4ubGVuZ3RoID4gMTEpIHtcbiAgICBmdWxsX3llYXIgPSB0aW4uc2xpY2UoMCwgNCk7XG4gIH0gZWxzZSB7XG4gICAgZnVsbF95ZWFyID0gdGluLnNsaWNlKDAsIDIpO1xuXG4gICAgaWYgKHRpbi5sZW5ndGggPT09IDExICYmIGRheSA8IDYwKSB7XG4gICAgICAvLyBFeHRyYWN0IGZ1bGwgeWVhciBmcm9tIGNlbnRlbmFyaWFuIHN5bWJvbFxuICAgICAgLy8gU2hvdWxkIHdvcmsganVzdCBmaW5lIHVudGlsIHllYXIgMTAwMDAgb3Igc29cbiAgICAgIHZhciBjdXJyZW50X3llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciBjdXJyZW50X2NlbnR1cnkgPSBwYXJzZUludChjdXJyZW50X3llYXIuc2xpY2UoMCwgMiksIDEwKTtcbiAgICAgIGN1cnJlbnRfeWVhciA9IHBhcnNlSW50KGN1cnJlbnRfeWVhciwgMTApO1xuXG4gICAgICBpZiAodGluWzZdID09PSAnLScpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSkuY29uY2F0KGZ1bGxfeWVhciksIDEwKSA+IGN1cnJlbnRfeWVhcikge1xuICAgICAgICAgIGZ1bGxfeWVhciA9IFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSAtIDEpLmNvbmNhdChmdWxsX3llYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZ1bGxfeWVhciA9IFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSkuY29uY2F0KGZ1bGxfeWVhcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGxfeWVhciA9IFwiXCIuY29uY2F0KGN1cnJlbnRfY2VudHVyeSAtIDEpLmNvbmNhdChmdWxsX3llYXIpO1xuXG4gICAgICAgIGlmIChjdXJyZW50X3llYXIgLSBwYXJzZUludChmdWxsX3llYXIsIDEwKSA8IDEwMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBOb3JtYWxpemUgZGF5IGFuZCBjaGVjayBkYXRlIHZhbGlkaXR5XG5cblxuICBpZiAoZGF5ID4gNjApIHtcbiAgICBkYXkgLT0gNjA7XG4gIH1cblxuICBpZiAoZGF5IDwgMTApIHtcbiAgICBkYXkgPSBcIjBcIi5jb25jYXQoZGF5KTtcbiAgfVxuXG4gIHZhciBkYXRlID0gXCJcIi5jb25jYXQoZnVsbF95ZWFyLCBcIi9cIikuY29uY2F0KG1vbnRoLCBcIi9cIikuY29uY2F0KGRheSk7XG5cbiAgaWYgKGRhdGUubGVuZ3RoID09PSA4KSB7XG4gICAgaWYgKCEoMCwgX2lzRGF0ZS5kZWZhdWx0KShkYXRlLCAnWVkvTU0vREQnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmICghKDAsIF9pc0RhdGUuZGVmYXVsdCkoZGF0ZSwgJ1lZWVkvTU0vREQnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhbGdvcml0aG1zLmx1aG5DaGVjayh0aW4ucmVwbGFjZSgvXFxXLywgJycpKTtcbn0gLy8gTG9jYWxlIGxvb2t1cCBvYmplY3RzXG5cbi8qXG4gKiBUYXggaWQgcmVnZXggZm9ybWF0cyBmb3IgdmFyaW91cyBsb2NhbGVzXG4gKlxuICogV2hlcmUgbm90IGV4cGxpY2l0bHkgc3BlY2lmaWVkIGluIERHLVRBWFVEIGRvY3VtZW50IGJvdGhcbiAqIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMgYXJlIGFjY2VwdGFibGUuXG4gKi9cblxuXG52YXIgdGF4SWRGb3JtYXQgPSB7XG4gICdiZy1CRyc6IC9eXFxkezEwfSQvLFxuICAnY3MtQ1onOiAvXlxcZHs2fVxcL3swLDF9XFxkezMsNH0kLyxcbiAgJ2RlLUFUJzogL15cXGR7OX0kLyxcbiAgJ2RlLURFJzogL15bMS05XVxcZHsxMH0kLyxcbiAgJ2RrLURLJzogL15cXGR7Nn0tezAsMX1cXGR7NH0kLyxcbiAgJ2VsLUNZJzogL15bMDldXFxkezd9W0EtWl0kLyxcbiAgJ2VsLUdSJzogL14oWzAtNF18WzctOV0pXFxkezh9JC8sXG4gICdlbi1HQic6IC9eXFxkezEwfSR8Xig/IUdCfE5LfFROfFpaKSg/IVtERklRVVZdKVtBLVpdKD8hW0RGSVFVVk9dKVtBLVpdXFxkezZ9W0FCQ0QgXSQvaSxcbiAgJ2VuLUlFJzogL15cXGR7N31bQS1XXVtBLUlXXXswLDF9JC9pLFxuICAnZW4tVVMnOiAvXlxcZHsyfVstIF17MCwxfVxcZHs3fSQvLFxuICAnZXMtRVMnOiAvXihcXGR7MCw4fXxbWFlaS0xNXVxcZHs3fSlbQS1ISi1OUC1UVi1aXSQvaSxcbiAgJ2V0LUVFJzogL15bMS02XVxcZHs2fSgwMFsxLTldfDBbMS05XVswLTldfFsxLTZdWzAtOV17Mn18NzBbMC05XXw3MTApXFxkJC8sXG4gICdmaS1GSSc6IC9eXFxkezZ9Wy0rQV1cXGR7M31bMC05QS1GSEotTlBSLVldJC9pLFxuICAnZnItQkUnOiAvXlxcZHsxMX0kLyxcbiAgJ2ZyLUZSJzogL15bMC0zXVxcZHsxMn0kfF5bMC0zXVxcZFxcc1xcZHsyfShcXHNcXGR7M30pezN9JC8sXG4gIC8vIENvbmZvcm1zIGJvdGggdG8gb2ZmaWNpYWwgc3BlYyBhbmQgcHJvdmlkZWQgZXhhbXBsZVxuICAnZnItTFUnOiAvXlxcZHsxM30kLyxcbiAgJ2hyLUhSJzogL15cXGR7MTF9JC8sXG4gICdodS1IVSc6IC9eOFxcZHs5fSQvLFxuICAnaXQtSVQnOiAvXltBLVpdezZ9W0wtTlAtVjAtOV17Mn1bQS1FSExNUFJTVF1bTC1OUC1WMC05XXsyfVtBLUlMTVpdW0wtTlAtVjAtOV17M31bQS1aXSQvaSxcbiAgJ2x2LUxWJzogL15cXGR7Nn0tezAsMX1cXGR7NX0kLyxcbiAgLy8gQ29uZm9ybXMgYm90aCB0byBERyBUQVhVRCBzcGVjIGFuZCBvcmlnaW5hbCByZXNlYXJjaFxuICAnbXQtTVQnOiAvXlxcZHszLDd9W0FQTUdMSEJaXSR8XihbMS04XSlcXDFcXGR7N30kL2ksXG4gICdubC1OTCc6IC9eXFxkezl9JC8sXG4gICdwbC1QTCc6IC9eXFxkezEwLDExfSQvLFxuICAncHQtQlInOiAvKD86XlxcZHsxMX0kKXwoPzpeXFxkezE0fSQpLyxcbiAgJ3B0LVBUJzogL15cXGR7OX0kLyxcbiAgJ3JvLVJPJzogL15cXGR7MTN9JC8sXG4gICdzay1TSyc6IC9eXFxkezZ9XFwvezAsMX1cXGR7Myw0fSQvLFxuICAnc2wtU0knOiAvXlsxLTldXFxkezd9JC8sXG4gICdzdi1TRSc6IC9eKFxcZHs2fVstK117MCwxfVxcZHs0fXwoMTh8MTl8MjApXFxkezZ9Wy0rXXswLDF9XFxkezR9KSQvXG59OyAvLyB0YXhJZEZvcm1hdCBsb2NhbGUgYWxpYXNlc1xuXG50YXhJZEZvcm1hdFsnbGItTFUnXSA9IHRheElkRm9ybWF0Wydmci1MVSddO1xudGF4SWRGb3JtYXRbJ2x0LUxUJ10gPSB0YXhJZEZvcm1hdFsnZXQtRUUnXTtcbnRheElkRm9ybWF0WydubC1CRSddID0gdGF4SWRGb3JtYXRbJ2ZyLUJFJ107IC8vIEFsZ29yaXRobWljIHRheCBpZCBjaGVjayBmdW5jdGlvbnMgZm9yIHZhcmlvdXMgbG9jYWxlc1xuXG52YXIgdGF4SWRDaGVjayA9IHtcbiAgJ2JnLUJHJzogYmdCZ0NoZWNrLFxuICAnY3MtQ1onOiBjc0N6Q2hlY2ssXG4gICdkZS1BVCc6IGRlQXRDaGVjayxcbiAgJ2RlLURFJzogZGVEZUNoZWNrLFxuICAnZGstREsnOiBka0RrQ2hlY2ssXG4gICdlbC1DWSc6IGVsQ3lDaGVjayxcbiAgJ2VsLUdSJzogZWxHckNoZWNrLFxuICAnZW4tSUUnOiBlbkllQ2hlY2ssXG4gICdlbi1VUyc6IGVuVXNDaGVjayxcbiAgJ2VzLUVTJzogZXNFc0NoZWNrLFxuICAnZXQtRUUnOiBldEVlQ2hlY2ssXG4gICdmaS1GSSc6IGZpRmlDaGVjayxcbiAgJ2ZyLUJFJzogZnJCZUNoZWNrLFxuICAnZnItRlInOiBmckZyQ2hlY2ssXG4gICdmci1MVSc6IGZyTHVDaGVjayxcbiAgJ2hyLUhSJzogaHJIckNoZWNrLFxuICAnaHUtSFUnOiBodUh1Q2hlY2ssXG4gICdpdC1JVCc6IGl0SXRDaGVjayxcbiAgJ2x2LUxWJzogbHZMdkNoZWNrLFxuICAnbXQtTVQnOiBtdE10Q2hlY2ssXG4gICdubC1OTCc6IG5sTmxDaGVjayxcbiAgJ3BsLVBMJzogcGxQbENoZWNrLFxuICAncHQtQlInOiBwdEJyQ2hlY2ssXG4gICdwdC1QVCc6IHB0UHRDaGVjayxcbiAgJ3JvLVJPJzogcm9Sb0NoZWNrLFxuICAnc2stU0snOiBza1NrQ2hlY2ssXG4gICdzbC1TSSc6IHNsU2lDaGVjayxcbiAgJ3N2LVNFJzogc3ZTZUNoZWNrXG59OyAvLyB0YXhJZENoZWNrIGxvY2FsZSBhbGlhc2VzXG5cbnRheElkQ2hlY2tbJ2xiLUxVJ10gPSB0YXhJZENoZWNrWydmci1MVSddO1xudGF4SWRDaGVja1snbHQtTFQnXSA9IHRheElkQ2hlY2tbJ2V0LUVFJ107XG50YXhJZENoZWNrWydubC1CRSddID0gdGF4SWRDaGVja1snZnItQkUnXTsgLy8gUmVnZXhlcyBmb3IgbG9jYWxlcyB3aGVyZSBjaGFyYWN0ZXJzIHNob3VsZCBiZSBvbWl0dGVkIGJlZm9yZSBjaGVja2luZyBmb3JtYXRcblxudmFyIGFsbHN5bWJvbHMgPSAvWy1cXFxcXFwvIUAjJCVcXF4mXFwqXFwoXFwpXFwrXFw9XFxbXFxdXSsvZztcbnZhciBzYW5pdGl6ZVJlZ2V4ZXMgPSB7XG4gICdkZS1BVCc6IGFsbHN5bWJvbHMsXG4gICdkZS1ERSc6IC9bXFwvXFxcXF0vZyxcbiAgJ2ZyLUJFJzogYWxsc3ltYm9sc1xufTsgLy8gc2FuaXRpemVSZWdleGVzIGxvY2FsZSBhbGlhc2VzXG5cbnNhbml0aXplUmVnZXhlc1snbmwtQkUnXSA9IHNhbml0aXplUmVnZXhlc1snZnItQkUnXTtcbi8qXG4gKiBWYWxpZGF0b3IgZnVuY3Rpb25cbiAqIFJldHVybiB0cnVlIGlmIHRoZSBwYXNzZWQgc3RyaW5nIGlzIGEgdmFsaWQgdGF4IGlkZW50aWZpY2F0aW9uIG51bWJlclxuICogZm9yIHRoZSBzcGVjaWZpZWQgbG9jYWxlLlxuICogVGhyb3cgYW4gZXJyb3IgZXhjZXB0aW9uIGlmIHRoZSBsb2NhbGUgaXMgbm90IHN1cHBvcnRlZC5cbiAqL1xuXG5mdW5jdGlvbiBpc1RheElEKHN0cikge1xuICB2YXIgbG9jYWxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZW4tVVMnO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBDb3B5IFRJTiB0byBhdm9pZCByZXBsYWNlbWVudCBpZiBzYW5pdGl6ZWRcblxuICB2YXIgc3RyY29weSA9IHN0ci5zbGljZSgwKTtcblxuICBpZiAobG9jYWxlIGluIHRheElkRm9ybWF0KSB7XG4gICAgaWYgKGxvY2FsZSBpbiBzYW5pdGl6ZVJlZ2V4ZXMpIHtcbiAgICAgIHN0cmNvcHkgPSBzdHJjb3B5LnJlcGxhY2Uoc2FuaXRpemVSZWdleGVzW2xvY2FsZV0sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRheElkRm9ybWF0W2xvY2FsZV0udGVzdChzdHJjb3B5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChsb2NhbGUgaW4gdGF4SWRDaGVjaykge1xuICAgICAgcmV0dXJuIHRheElkQ2hlY2tbbG9jYWxlXShzdHJjb3B5KTtcbiAgICB9IC8vIEZhbGx0aHJvdWdoOyBub3QgYWxsIGxvY2FsZXMgaGF2ZSBhbGdvcml0aG1pYyBjaGVja3NcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KGxvY2FsZSwgXCInXCIpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlUGhvbmU7XG5leHBvcnRzLmxvY2FsZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBwaG9uZXMgPSB7XG4gICdhbS1BTSc6IC9eKFxcKz8zNzR8MCkoKDEwfFs5fDddWzAtOV0pXFxkezZ9JHxbMi00XVxcZHs3fSQpLyxcbiAgJ2FyLUFFJzogL14oKFxcKz85NzEpfDApPzVbMDI0NTY4XVxcZHs3fSQvLFxuICAnYXItQkgnOiAvXihcXCs/OTczKT8oM3w2KVxcZHs3fSQvLFxuICAnYXItRFonOiAvXihcXCs/MjEzfDApKDV8Nnw3KVxcZHs4fSQvLFxuICAnYXItTEInOiAvXihcXCs/OTYxKT8oKDN8ODEpXFxkezZ9fDdcXGR7N30pJC8sXG4gICdhci1FRyc6IC9eKChcXCs/MjApfDApPzFbMDEyNV1cXGR7OH0kLyxcbiAgJ2FyLUlRJzogL14oXFwrPzk2NHwwKT83WzAtOV1cXGR7OH0kLyxcbiAgJ2FyLUpPJzogL14oXFwrPzk2MnwwKT83Wzc4OV1cXGR7N30kLyxcbiAgJ2FyLUtXJzogL14oXFwrPzk2NSlbNTY5XVxcZHs3fSQvLFxuICAnYXItTFknOiAvXigoXFwrPzIxOCl8MCk/KDlbMS02XVxcZHs3fXxbMS04XVxcZHs3LDl9KSQvLFxuICAnYXItTUEnOiAvXig/Oig/OlxcK3wwMCkyMTJ8MClbNS03XVxcZHs4fSQvLFxuICAnYXItT00nOiAvXigoXFwrfDAwKTk2OCk/KDlbMS05XSlcXGR7Nn0kLyxcbiAgJ2FyLVBTJzogL14oXFwrPzk3MHwwKTVbNnw5XShcXGR7N30pJC8sXG4gICdhci1TQSc6IC9eKCE/KFxcKz85NjYpfDApPzVcXGR7OH0kLyxcbiAgJ2FyLVNZJzogL14oIT8oXFwrPzk2Myl8MCk/OVxcZHs4fSQvLFxuICAnYXItVE4nOiAvXihcXCs/MjE2KT9bMjQ1OV1cXGR7N30kLyxcbiAgJ2F6LUFaJzogL14oXFwrOTk0fDApKDVbMDE1XXw3WzA3XXw5OSlcXGR7N30kLyxcbiAgJ2JzLUJBJzogL14oKCgoXFwrfDAwKTM4NzYpfDA2KSkoKChbMC0zXXxbNS02XSlcXGR7Nn0pfCg0XFxkezd9KSkkLyxcbiAgJ2JlLUJZJzogL14oXFwrPzM3NSk/KDI0fDI1fDI5fDMzfDQ0KVxcZHs3fSQvLFxuICAnYmctQkcnOiAvXihcXCs/MzU5fDApPzhbNzg5XVxcZHs3fSQvLFxuICAnYm4tQkQnOiAvXihcXCs/ODgwfDApMVsxMzQ1Njc4OV1bMC05XXs4fSQvLFxuICAnY2EtQUQnOiAvXihcXCszNzYpP1szNDZdXFxkezV9JC8sXG4gICdjcy1DWic6IC9eKFxcKz80MjApPyA/WzEtOV1bMC05XXsyfSA/WzAtOV17M30gP1swLTldezN9JC8sXG4gICdkYS1ESyc6IC9eKFxcKz80NSk/XFxzP1xcZHsyfVxccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfSQvLFxuICAnZGUtREUnOiAvXigoXFwrNDl8MClbMXwzXSkoWzB8NV1bMC00NS05XVxcZHw2KFsyM118MFxcZD8pfDcoWzAtNTctOV18NlxcZCkpXFxkezcsOX0kLyxcbiAgJ2RlLUFUJzogL14oXFwrNDN8MClcXGR7MSw0fVxcZHszLDEyfSQvLFxuICAnZGUtQ0gnOiAvXihcXCs0MXwwKShbMS05XSlcXGR7MSw5fSQvLFxuICAnZGUtTFUnOiAvXihcXCszNTIpPygoNlxcZDEpXFxkezZ9KSQvLFxuICAnZHYtTVYnOiAvXihcXCs/OTYwKT8oN1syLTldfDkxfDlbMy05XSlcXGR7N30kLyxcbiAgJ2VsLUdSJzogL14oXFwrPzMwfDApPyg2OVxcZHs4fSkkLyxcbiAgJ2VuLUFVJzogL14oXFwrPzYxfDApNFxcZHs4fSQvLFxuICAnZW4tQk0nOiAvXihcXCs/MSk/NDQxKCgoM3w3KVxcZHs2fSQpfCg1WzAtM11bMC05XVxcZHs0fSQpfCg1OVxcZHs1fSkpLyxcbiAgJ2VuLUdCJzogL14oXFwrPzQ0fDApN1xcZHs5fSQvLFxuICAnZW4tR0cnOiAvXihcXCs/NDR8MCkxNDgxXFxkezZ9JC8sXG4gICdlbi1HSCc6IC9eKFxcKzIzM3wwKSgyMHw1MHwyNHw1NHwyN3w1N3wyNnw1NnwyM3wyOHw1NXw1OSlcXGR7N30kLyxcbiAgJ2VuLUdZJzogL14oXFwrNTkyfDApNlxcZHs2fSQvLFxuICAnZW4tSEsnOiAvXihcXCs/ODUyWy1cXHNdPyk/WzQ1Njc4OV1cXGR7M31bLVxcc10/XFxkezR9JC8sXG4gICdlbi1NTyc6IC9eKFxcKz84NTNbLVxcc10/KT9bNl1cXGR7M31bLVxcc10/XFxkezR9JC8sXG4gICdlbi1JRSc6IC9eKFxcKz8zNTN8MCk4WzM1Njc4OV1cXGR7N30kLyxcbiAgJ2VuLUlOJzogL14oXFwrPzkxfDApP1s2Nzg5XVxcZHs5fSQvLFxuICAnZW4tS0UnOiAvXihcXCs/MjU0fDApKDd8MSlcXGR7OH0kLyxcbiAgJ2VuLUtJJzogL14oKFxcKzY4Nnw2ODYpPyk/KCApPygoNnw3KSgyfDN8OClbMC05XXs2fSkkLyxcbiAgJ2VuLU1UJzogL14oXFwrPzM1NnwwKT8oOTl8Nzl8Nzd8MjF8Mjd8MjJ8MjUpWzAtOV17Nn0kLyxcbiAgJ2VuLU1VJzogL14oXFwrPzIzMHwwKT9cXGR7OH0kLyxcbiAgJ2VuLU5BJzogL14oXFwrPzI2NHwwKSg2fDgpXFxkezd9JC8sXG4gICdlbi1ORyc6IC9eKFxcKz8yMzR8MCk/Wzc4OV1cXGR7OX0kLyxcbiAgJ2VuLU5aJzogL14oXFwrPzY0fDApWzI4XVxcZHs3LDl9JC8sXG4gICdlbi1QSyc6IC9eKCgwMHxcXCspPzkyfDApM1swLTZdXFxkezh9JC8sXG4gICdlbi1QSCc6IC9eKDA5fFxcKzYzOSlcXGR7OX0kLyxcbiAgJ2VuLVJXJzogL14oXFwrPzI1MHwwKT9bN11cXGR7OH0kLyxcbiAgJ2VuLVNHJzogL14oXFwrNjUpP1szNjg5XVxcZHs3fSQvLFxuICAnZW4tU0wnOiAvXihcXCs/MjMyfDApXFxkezh9JC8sXG4gICdlbi1UWic6IC9eKFxcKz8yNTV8MCk/WzY3XVxcZHs4fSQvLFxuICAnZW4tVUcnOiAvXihcXCs/MjU2fDApP1s3XVxcZHs4fSQvLFxuICAnZW4tVVMnOiAvXigoXFwrMXwxKT8oIHwtKT8pPyhcXChbMi05XVswLTldezJ9XFwpfFsyLTldWzAtOV17Mn0pKCB8LSk/KFsyLTldWzAtOV17Mn0oIHwtKT9bMC05XXs0fSkkLyxcbiAgJ2VuLVpBJzogL14oXFwrPzI3fDApXFxkezl9JC8sXG4gICdlbi1aTSc6IC9eKFxcKz8yNik/MDlbNTY3XVxcZHs3fSQvLFxuICAnZW4tWlcnOiAvXihcXCsyNjMpWzAtOV17OX0kLyxcbiAgJ2VuLUJXJzogL14oXFwrPzI2Nyk/KDdbMS04XXsxfSlcXGR7Nn0kLyxcbiAgJ2VzLUFSJzogL15cXCs/NTQ5KDExfFsyMzY4XVxcZClcXGR7OH0kLyxcbiAgJ2VzLUJPJzogL14oXFwrPzU5MSk/KDZ8NylcXGR7N30kLyxcbiAgJ2VzLUNPJzogL14oXFwrPzU3KT8zKDAoMHwxfDJ8NHw1KXwxXFxkfDJbMC00XXw1KDB8MSkpXFxkezd9JC8sXG4gICdlcy1DTCc6IC9eKFxcKz81NnwwKVsyLTldXFxkezF9XFxkezd9JC8sXG4gICdlcy1DUic6IC9eKFxcKzUwNik/WzItOF1cXGR7N30kLyxcbiAgJ2VzLUNVJzogL14oXFwrNTN8MDA1Myk/NVxcZHs3fS8sXG4gICdlcy1ETyc6IC9eKFxcKz8xKT84WzAyNF05XFxkezd9JC8sXG4gICdlcy1ITic6IC9eKFxcKz81MDQpP1s5fDhdXFxkezd9JC8sXG4gICdlcy1FQyc6IC9eKFxcKz81OTN8MCkoWzItN118OVsyLTldKVxcZHs3fSQvLFxuICAnZXMtRVMnOiAvXihcXCs/MzQpP1s2fDddXFxkezh9JC8sXG4gICdlcy1QRSc6IC9eKFxcKz81MSk/OVxcZHs4fSQvLFxuICAnZXMtTVgnOiAvXihcXCs/NTIpPygxfDAxKT9cXGR7MTAsMTF9JC8sXG4gICdlcy1QQSc6IC9eKFxcKz81MDcpXFxkezcsOH0kLyxcbiAgJ2VzLVBZJzogL14oXFwrPzU5NXwwKTlbOTg3Nl1cXGR7N30kLyxcbiAgJ2VzLVNWJzogL14oXFwrPzUwMyk/WzY3XVxcZHs3fSQvLFxuICAnZXMtVVknOiAvXihcXCs1OTh8MCk5WzEtOV1bXFxkXXs2fSQvLFxuICAnZXMtVkUnOiAvXihcXCs/NTgpPygyfDQpXFxkezl9JC8sXG4gICdldC1FRSc6IC9eKFxcKz8zNzIpP1xccz8oNXw4WzEtNF0pXFxzPyhbMC05XVxccz8pezYsN30kLyxcbiAgJ2ZhLUlSJzogL14oXFwrPzk4W1xcLVxcc10/fDApOVswLTM5XVxcZFtcXC1cXHNdP1xcZHszfVtcXC1cXHNdP1xcZHs0fSQvLFxuICAnZmktRkknOiAvXihcXCs/MzU4fDApXFxzPyg0KDB8MXwyfDR8NXw2KT98NTApXFxzPyhcXGRcXHM/KXs0LDh9XFxkJC8sXG4gICdmai1GSic6IC9eKFxcKz82NzkpP1xccz9cXGR7M31cXHM/XFxkezR9JC8sXG4gICdmby1GTyc6IC9eKFxcKz8yOTgpP1xccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfSQvLFxuICAnZnItQkYnOiAvXihcXCsyMjZ8MClbNjddXFxkezd9JC8sXG4gICdmci1DTSc6IC9eKFxcKz8yMzcpNlswLTldezh9JC8sXG4gICdmci1GUic6IC9eKFxcKz8zM3wwKVs2N11cXGR7OH0kLyxcbiAgJ2ZyLUdGJzogL14oXFwrPzU5NHwwfDAwNTk0KVs2N11cXGR7OH0kLyxcbiAgJ2ZyLUdQJzogL14oXFwrPzU5MHwwfDAwNTkwKVs2N11cXGR7OH0kLyxcbiAgJ2ZyLU1RJzogL14oXFwrPzU5NnwwfDAwNTk2KVs2N11cXGR7OH0kLyxcbiAgJ2ZyLVBGJzogL14oXFwrPzY4OSk/OFs3ODldXFxkezZ9JC8sXG4gICdmci1SRSc6IC9eKFxcKz8yNjJ8MHwwMDI2MilbNjddXFxkezh9JC8sXG4gICdoZS1JTCc6IC9eKFxcKzk3MnwwKShbMjM0ODldfDVbMDEyMzQ1Njg5XXw3NylbMS05XVxcZHs2fSQvLFxuICAnaHUtSFUnOiAvXihcXCs/MzZ8MDYpKDIwfDMwfDMxfDUwfDcwKVxcZHs3fSQvLFxuICAnaWQtSUQnOiAvXihcXCs/NjJ8MCk4KDFbMTIzNDU2Nzg5XXwyWzEyMzhdfDNbMTIzOF18NVsxMjM1Njc4OV18N1s3OF18OVs1Njc4OV18OFsxMjM0NTY3ODldKShbXFxzP3xcXGRdezUsMTF9KSQvLFxuICAnaXQtSVQnOiAvXihcXCs/MzkpP1xccz8zXFxkezJ9ID9cXGR7Niw3fSQvLFxuICAnaXQtU00nOiAvXigoXFwrMzc4KXwoMDU0OSl8KFxcKzM5MDU0OSl8KFxcKzM3ODA1NDkpKT82XFxkezUsOX0kLyxcbiAgJ2phLUpQJzogL14oXFwrODFbIFxcLV0/KFxcKDBcXCkpP3wwKVs2Nzg5XTBbIFxcLV0/XFxkezR9WyBcXC1dP1xcZHs0fSQvLFxuICAna2EtR0UnOiAvXihcXCs/OTk1KT8oNXw3OSlcXGR7N30kLyxcbiAgJ2trLUtaJzogL14oXFwrPzd8OCk/N1xcZHs5fSQvLFxuICAna2wtR0wnOiAvXihcXCs/Mjk5KT9cXHM/XFxkezJ9XFxzP1xcZHsyfVxccz9cXGR7Mn0kLyxcbiAgJ2tvLUtSJzogL14oKFxcKz84MilbIFxcLV0/KT8wPzEoWzB8MXw2fDd8OHw5XXsxfSlbIFxcLV0/XFxkezMsNH1bIFxcLV0/XFxkezR9JC8sXG4gICdsdC1MVCc6IC9eKFxcKzM3MHw4KVxcZHs4fSQvLFxuICAnbHYtTFYnOiAvXihcXCs/MzcxKTJcXGR7N30kLyxcbiAgJ21zLU1ZJzogL14oXFwrPzY/MDEpezF9KChbMDE0NV17MX0oXFwtfFxccyk/XFxkezcsOH0pfChbMjM2Nzg5XXsxfShcXHN8XFwtKT9cXGR7N30pKSQvLFxuICAnbXotTVonOiAvXihcXCs/MjU4KT84WzIzNDU2N11cXGR7N30kLyxcbiAgJ25iLU5PJzogL14oXFwrPzQ3KT9bNDldXFxkezd9JC8sXG4gICduZS1OUCc6IC9eKFxcKz85NzcpPzlbNzhdXFxkezh9JC8sXG4gICdubC1CRSc6IC9eKFxcKz8zMnwwKTRcXGR7OH0kLyxcbiAgJ25sLU5MJzogL14oKChcXCt8MDApPzMxXFwoMFxcKSl8KChcXCt8MDApPzMxKXwwKTZ7MX1cXGR7OH0kLyxcbiAgJ25uLU5PJzogL14oXFwrPzQ3KT9bNDldXFxkezd9JC8sXG4gICdwbC1QTCc6IC9eKFxcKz80OCk/ID9bNS04XVxcZCA/XFxkezN9ID9cXGR7Mn0gP1xcZHsyfSQvLFxuICAncHQtQlInOiAvXigoXFwrPzU1XFwgP1sxLTldezJ9XFwgPyl8KFxcKz81NVxcID9cXChbMS05XXsyfVxcKVxcID8pfCgwWzEtOV17Mn1cXCA/KXwoXFwoWzEtOV17Mn1cXClcXCA/KXwoWzEtOV17Mn1cXCA/KSkoKFxcZHs0fVxcLT9cXGR7NH0pfCg5WzItOV17MX1cXGR7M31cXC0/XFxkezR9KSkkLyxcbiAgJ3B0LVBUJzogL14oXFwrPzM1MSk/OVsxMjM2XVxcZHs3fSQvLFxuICAncHQtQU8nOiAvXihcXCsyNDQpXFxkezl9JC8sXG4gICdyby1STyc6IC9eKFxcKz80PzApXFxzPzdcXGR7Mn0oXFwvfFxcc3xcXC58XFwtKT9cXGR7M30oXFxzfFxcLnxcXC0pP1xcZHszfSQvLFxuICAncnUtUlUnOiAvXihcXCs/N3w4KT85XFxkezl9JC8sXG4gICdzaS1MSyc6IC9eKD86MHw5NHxcXCs5NCk/KDcoMHwxfDJ8NHw1fDZ8N3w4KSggfC0pPylcXGR7N30kLyxcbiAgJ3NsLVNJJzogL14oXFwrMzg2XFxzP3wwKShcXGR7MX1cXHM/XFxkezN9XFxzP1xcZHsyfVxccz9cXGR7Mn18XFxkezJ9XFxzP1xcZHszfVxccz9cXGR7M30pJC8sXG4gICdzay1TSyc6IC9eKFxcKz80MjEpPyA/WzEtOV1bMC05XXsyfSA/WzAtOV17M30gP1swLTldezN9JC8sXG4gICdzcS1BTCc6IC9eKFxcKzM1NXwwKTZbNzg5XVxcZHs2fSQvLFxuICAnc3ItUlMnOiAvXihcXCszODE2fDA2KVstIFxcZF17NSw5fSQvLFxuICAnc3YtU0UnOiAvXihcXCs/NDZ8MClbXFxzXFwtXT83W1xcc1xcLV0/WzAyMzY5XShbXFxzXFwtXT9cXGQpezd9JC8sXG4gICd0Zy1USic6IC9eKFxcKz85OTIpP1s1XVs1XVxcZHs3fSQvLFxuICAndGgtVEgnOiAvXihcXCs2Nnw2NnwwKVxcZHs5fSQvLFxuICAndHItVFInOiAvXihcXCs/OTB8MCk/NVxcZHs5fSQvLFxuICAndGstVE0nOiAvXihcXCs5OTN8OTkzfDgpXFxkezh9JC8sXG4gICd1ay1VQSc6IC9eKFxcKz8zOHw4KT8wXFxkezl9JC8sXG4gICd1ei1VWic6IC9eKFxcKz85OTgpPyg2WzEyNS03OV18N1sxLTY5XXw4OHw5XFxkKVxcZHs3fSQvLFxuICAndmktVk4nOiAvXigoXFwrPzg0KXwwKSgoMyhbMi05XSkpfCg1KFsyNTY4OV0pKXwoNyhbMHw2LTldKSl8KDgoWzEtOV0pKXwoOShbMC05XSkpKShbMC05XXs3fSkkLyxcbiAgJ3poLUNOJzogL14oKFxcK3wwMCk4Nik/KDFbMy05XXw5WzI4XSlcXGR7OX0kLyxcbiAgJ3poLVRXJzogL14oXFwrPzg4NlxcLT98MCk/OVxcZHs4fSQvLFxuICAnZHotQlQnOiAvXihcXCs/OTc1fDApPygxN3wxNnw3N3wwMilcXGR7Nn0kL1xufTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuLy8gYWxpYXNlc1xuXG5waG9uZXNbJ2VuLUNBJ10gPSBwaG9uZXNbJ2VuLVVTJ107XG5waG9uZXNbJ2ZyLUNBJ10gPSBwaG9uZXNbJ2VuLUNBJ107XG5waG9uZXNbJ2ZyLUJFJ10gPSBwaG9uZXNbJ25sLUJFJ107XG5waG9uZXNbJ3poLUhLJ10gPSBwaG9uZXNbJ2VuLUhLJ107XG5waG9uZXNbJ3poLU1PJ10gPSBwaG9uZXNbJ2VuLU1PJ107XG5waG9uZXNbJ2dhLUlFJ10gPSBwaG9uZXNbJ2VuLUlFJ107XG5waG9uZXNbJ2ZyLUNIJ10gPSBwaG9uZXNbJ2RlLUNIJ107XG5waG9uZXNbJ2l0LUNIJ10gPSBwaG9uZXNbJ2ZyLUNIJ107XG5cbmZ1bmN0aW9uIGlzTW9iaWxlUGhvbmUoc3RyLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnN0cmljdE1vZGUgJiYgIXN0ci5zdGFydHNXaXRoKCcrJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGUpKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3R3YXJsb3N0L2lzdGFuYnVsL2Jsb2IvbWFzdGVyL2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLm1kI2lnbm9yaW5nLWNvZGUtZm9yLWNvdmVyYWdlLXB1cnBvc2VzXG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKHBob25lcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBwaG9uZSA9IHBob25lc1trZXldO1xuXG4gICAgICAgIGlmIChwaG9uZS50ZXN0KHN0cikpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobG9jYWxlIGluIHBob25lcykge1xuICAgIHJldHVybiBwaG9uZXNbbG9jYWxlXS50ZXN0KHN0cik7IC8vIGFsaWFzIGZhbHNleSBsb2NhbGUgYXMgJ2FueSdcbiAgfSBlbHNlIGlmICghbG9jYWxlIHx8IGxvY2FsZSA9PT0gJ2FueScpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcGhvbmVzKSB7XG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKHBob25lcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBwaG9uZSA9IHBob25lc1trZXldO1xuXG4gICAgICAgIGlmIChwaG9uZS50ZXN0KHN0cikpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9jYWxlICdcIi5jb25jYXQobG9jYWxlLCBcIidcIikpO1xufVxuXG52YXIgbG9jYWxlcyA9IE9iamVjdC5rZXlzKHBob25lcyk7XG5leHBvcnRzLmxvY2FsZXMgPSBsb2NhbGVzOyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRXRoZXJldW1BZGRyZXNzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZXRoID0gL14oMHgpWzAtOWEtZl17NDB9JC9pO1xuXG5mdW5jdGlvbiBpc0V0aGVyZXVtQWRkcmVzcyhzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGV0aC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0N1cnJlbmN5O1xuXG52YXIgX21lcmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL21lcmdlXCIpKTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3VycmVuY3lSZWdleChvcHRpb25zKSB7XG4gIHZhciBkZWNpbWFsX2RpZ2l0cyA9IFwiXFxcXGR7XCIuY29uY2F0KG9wdGlvbnMuZGlnaXRzX2FmdGVyX2RlY2ltYWxbMF0sIFwifVwiKTtcbiAgb3B0aW9ucy5kaWdpdHNfYWZ0ZXJfZGVjaW1hbC5mb3JFYWNoKGZ1bmN0aW9uIChkaWdpdCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT09IDApIGRlY2ltYWxfZGlnaXRzID0gXCJcIi5jb25jYXQoZGVjaW1hbF9kaWdpdHMsIFwifFxcXFxke1wiKS5jb25jYXQoZGlnaXQsIFwifVwiKTtcbiAgfSk7XG4gIHZhciBzeW1ib2wgPSBcIihcIi5jb25jYXQob3B0aW9ucy5zeW1ib2wucmVwbGFjZSgvXFxXLywgZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gXCJcXFxcXCIuY29uY2F0KG0pO1xuICB9KSwgXCIpXCIpLmNvbmNhdChvcHRpb25zLnJlcXVpcmVfc3ltYm9sID8gJycgOiAnPycpLFxuICAgICAgbmVnYXRpdmUgPSAnLT8nLFxuICAgICAgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRob3V0X3NlcCA9ICdbMS05XVxcXFxkKicsXG4gICAgICB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhfc2VwID0gXCJbMS05XVxcXFxkezAsMn0oXFxcXFwiLmNvbmNhdChvcHRpb25zLnRob3VzYW5kc19zZXBhcmF0b3IsIFwiXFxcXGR7M30pKlwiKSxcbiAgICAgIHZhbGlkX3dob2xlX2RvbGxhcl9hbW91bnRzID0gWycwJywgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRob3V0X3NlcCwgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRoX3NlcF0sXG4gICAgICB3aG9sZV9kb2xsYXJfYW1vdW50ID0gXCIoXCIuY29uY2F0KHZhbGlkX3dob2xlX2RvbGxhcl9hbW91bnRzLmpvaW4oJ3wnKSwgXCIpP1wiKSxcbiAgICAgIGRlY2ltYWxfYW1vdW50ID0gXCIoXFxcXFwiLmNvbmNhdChvcHRpb25zLmRlY2ltYWxfc2VwYXJhdG9yLCBcIihcIikuY29uY2F0KGRlY2ltYWxfZGlnaXRzLCBcIikpXCIpLmNvbmNhdChvcHRpb25zLnJlcXVpcmVfZGVjaW1hbCA/ICcnIDogJz8nKTtcbiAgdmFyIHBhdHRlcm4gPSB3aG9sZV9kb2xsYXJfYW1vdW50ICsgKG9wdGlvbnMuYWxsb3dfZGVjaW1hbCB8fCBvcHRpb25zLnJlcXVpcmVfZGVjaW1hbCA/IGRlY2ltYWxfYW1vdW50IDogJycpOyAvLyBkZWZhdWx0IGlzIG5lZ2F0aXZlIHNpZ24gYmVmb3JlIHN5bWJvbCwgYnV0IHRoZXJlIGFyZSB0d28gb3RoZXIgb3B0aW9ucyAoYmVzaWRlcyBwYXJlbnMpXG5cbiAgaWYgKG9wdGlvbnMuYWxsb3dfbmVnYXRpdmVzICYmICFvcHRpb25zLnBhcmVuc19mb3JfbmVnYXRpdmVzKSB7XG4gICAgaWYgKG9wdGlvbnMubmVnYXRpdmVfc2lnbl9hZnRlcl9kaWdpdHMpIHtcbiAgICAgIHBhdHRlcm4gKz0gbmVnYXRpdmU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0cykge1xuICAgICAgcGF0dGVybiA9IG5lZ2F0aXZlICsgcGF0dGVybjtcbiAgICB9XG4gIH0gLy8gU291dGggQWZyaWNhbiBSYW5kLCBmb3IgZXhhbXBsZSwgdXNlcyBSIDEyMyAoc3BhY2UpIGFuZCBSLTEyMyAobm8gc3BhY2UpXG5cblxuICBpZiAob3B0aW9ucy5hbGxvd19uZWdhdGl2ZV9zaWduX3BsYWNlaG9sZGVyKSB7XG4gICAgcGF0dGVybiA9IFwiKCAoPyFcXFxcLSkpP1wiLmNvbmNhdChwYXR0ZXJuKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93X3NwYWNlX2FmdGVyX3N5bWJvbCkge1xuICAgIHBhdHRlcm4gPSBcIiA/XCIuY29uY2F0KHBhdHRlcm4pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfc3BhY2VfYWZ0ZXJfZGlnaXRzKSB7XG4gICAgcGF0dGVybiArPSAnKCAoPyEkKSk/JztcbiAgfVxuXG4gIGlmIChvcHRpb25zLnN5bWJvbF9hZnRlcl9kaWdpdHMpIHtcbiAgICBwYXR0ZXJuICs9IHN5bWJvbDtcbiAgfSBlbHNlIHtcbiAgICBwYXR0ZXJuID0gc3ltYm9sICsgcGF0dGVybjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFsbG93X25lZ2F0aXZlcykge1xuICAgIGlmIChvcHRpb25zLnBhcmVuc19mb3JfbmVnYXRpdmVzKSB7XG4gICAgICBwYXR0ZXJuID0gXCIoXFxcXChcIi5jb25jYXQocGF0dGVybiwgXCJcXFxcKXxcIikuY29uY2F0KHBhdHRlcm4sIFwiKVwiKTtcbiAgICB9IGVsc2UgaWYgKCEob3B0aW9ucy5uZWdhdGl2ZV9zaWduX2JlZm9yZV9kaWdpdHMgfHwgb3B0aW9ucy5uZWdhdGl2ZV9zaWduX2FmdGVyX2RpZ2l0cykpIHtcbiAgICAgIHBhdHRlcm4gPSBuZWdhdGl2ZSArIHBhdHRlcm47XG4gICAgfVxuICB9IC8vIGVuc3VyZSB0aGVyZSdzIGEgZG9sbGFyIGFuZC9vciBkZWNpbWFsIGFtb3VudCwgYW5kIHRoYXRcbiAgLy8gaXQgZG9lc24ndCBzdGFydCB3aXRoIGEgc3BhY2Ugb3IgYSBuZWdhdGl2ZSBzaWduIGZvbGxvd2VkIGJ5IGEgc3BhY2VcblxuXG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXig/IS0/ICkoPz0uKlxcXFxkKVwiLmNvbmNhdChwYXR0ZXJuLCBcIiRcIikpO1xufVxuXG52YXIgZGVmYXVsdF9jdXJyZW5jeV9vcHRpb25zID0ge1xuICBzeW1ib2w6ICckJyxcbiAgcmVxdWlyZV9zeW1ib2w6IGZhbHNlLFxuICBhbGxvd19zcGFjZV9hZnRlcl9zeW1ib2w6IGZhbHNlLFxuICBzeW1ib2xfYWZ0ZXJfZGlnaXRzOiBmYWxzZSxcbiAgYWxsb3dfbmVnYXRpdmVzOiB0cnVlLFxuICBwYXJlbnNfZm9yX25lZ2F0aXZlczogZmFsc2UsXG4gIG5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0czogZmFsc2UsXG4gIG5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzOiBmYWxzZSxcbiAgYWxsb3dfbmVnYXRpdmVfc2lnbl9wbGFjZWhvbGRlcjogZmFsc2UsXG4gIHRob3VzYW5kc19zZXBhcmF0b3I6ICcsJyxcbiAgZGVjaW1hbF9zZXBhcmF0b3I6ICcuJyxcbiAgYWxsb3dfZGVjaW1hbDogdHJ1ZSxcbiAgcmVxdWlyZV9kZWNpbWFsOiBmYWxzZSxcbiAgZGlnaXRzX2FmdGVyX2RlY2ltYWw6IFsyXSxcbiAgYWxsb3dfc3BhY2VfYWZ0ZXJfZGlnaXRzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNDdXJyZW5jeShzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9jdXJyZW5jeV9vcHRpb25zKTtcbiAgcmV0dXJuIGN1cnJlbmN5UmVnZXgob3B0aW9ucykudGVzdChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCdGNBZGRyZXNzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBzdXBwb3J0cyBCZWNoMzIgYWRkcmVzc2VzXG52YXIgYmVjaDMyID0gL14oYmMxKVthLXowLTldezI1LDM5fSQvO1xudmFyIGJhc2U1OCA9IC9eKDF8MylbQS1ISi1OUC1aYS1rbS16MS05XXsyNSwzOX0kLztcblxuZnVuY3Rpb24gaXNCdGNBZGRyZXNzKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBjaGVjayBmb3IgYmVjaDMyXG5cbiAgaWYgKHN0ci5zdGFydHNXaXRoKCdiYzEnKSkge1xuICAgIHJldHVybiBiZWNoMzIudGVzdChzdHIpO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U1OC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTTzg2MDE7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8vIGZyb20gaHR0cDovL2dvby5nbC8wZWpISFdcbnZhciBpc284NjAxID0gL14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0zXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvOyAvLyBzYW1lIGFzIGFib3ZlLCBleGNlcHQgd2l0aCBhIHN0cmljdCAnVCcgc2VwYXJhdG9yIGJldHdlZW4gZGF0ZSBhbmQgdGltZVxuXG52YXIgaXNvODYwMVN0cmljdFNlcGFyYXRvciA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtM10pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVF0oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjQ6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG52YXIgaXNWYWxpZERhdGUgPSBmdW5jdGlvbiBpc1ZhbGlkRGF0ZShzdHIpIHtcbiAgLy8gc3RyIG11c3QgaGF2ZSBwYXNzZWQgdGhlIElTTzg2MDEgY2hlY2tcbiAgLy8gdGhpcyBjaGVjayBpcyBtZWFudCB0byBjYXRjaCBpbnZhbGlkIGRhdGVzXG4gIC8vIGxpa2UgMjAwOS0wMi0zMVxuICAvLyBmaXJzdCBjaGVjayBmb3Igb3JkaW5hbCBkYXRlc1xuICB2YXIgb3JkaW5hbE1hdGNoID0gc3RyLm1hdGNoKC9eKFxcZHs0fSktPyhcXGR7M30pKFsgVF17MX1cXC4qfCQpLyk7XG5cbiAgaWYgKG9yZGluYWxNYXRjaCkge1xuICAgIHZhciBvWWVhciA9IE51bWJlcihvcmRpbmFsTWF0Y2hbMV0pO1xuICAgIHZhciBvRGF5ID0gTnVtYmVyKG9yZGluYWxNYXRjaFsyXSk7IC8vIGlmIGlzIGxlYXAgeWVhclxuXG4gICAgaWYgKG9ZZWFyICUgNCA9PT0gMCAmJiBvWWVhciAlIDEwMCAhPT0gMCB8fCBvWWVhciAlIDQwMCA9PT0gMCkgcmV0dXJuIG9EYXkgPD0gMzY2O1xuICAgIHJldHVybiBvRGF5IDw9IDM2NTtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaCgvKFxcZHs0fSktPyhcXGR7MCwyfSktPyhcXGQqKS8pLm1hcChOdW1iZXIpO1xuICB2YXIgeWVhciA9IG1hdGNoWzFdO1xuICB2YXIgbW9udGggPSBtYXRjaFsyXTtcbiAgdmFyIGRheSA9IG1hdGNoWzNdO1xuICB2YXIgbW9udGhTdHJpbmcgPSBtb250aCA/IFwiMFwiLmNvbmNhdChtb250aCkuc2xpY2UoLTIpIDogbW9udGg7XG4gIHZhciBkYXlTdHJpbmcgPSBkYXkgPyBcIjBcIi5jb25jYXQoZGF5KS5zbGljZSgtMikgOiBkYXk7IC8vIGNyZWF0ZSBhIGRhdGUgb2JqZWN0IGFuZCBjb21wYXJlXG5cbiAgdmFyIGQgPSBuZXcgRGF0ZShcIlwiLmNvbmNhdCh5ZWFyLCBcIi1cIikuY29uY2F0KG1vbnRoU3RyaW5nIHx8ICcwMScsIFwiLVwiKS5jb25jYXQoZGF5U3RyaW5nIHx8ICcwMScpKTtcblxuICBpZiAobW9udGggJiYgZGF5KSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDRnVsbFllYXIoKSA9PT0geWVhciAmJiBkLmdldFVUQ01vbnRoKCkgKyAxID09PSBtb250aCAmJiBkLmdldFVUQ0RhdGUoKSA9PT0gZGF5O1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBpc0lTTzg2MDEoc3RyKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGNoZWNrID0gb3B0aW9ucy5zdHJpY3RTZXBhcmF0b3IgPyBpc284NjAxU3RyaWN0U2VwYXJhdG9yLnRlc3Qoc3RyKSA6IGlzbzg2MDEudGVzdChzdHIpO1xuICBpZiAoY2hlY2sgJiYgb3B0aW9ucy5zdHJpY3QpIHJldHVybiBpc1ZhbGlkRGF0ZShzdHIpO1xuICByZXR1cm4gY2hlY2s7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1JGQzMzMzk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIEJhc2VkIG9uIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42ICovXG52YXIgZGF0ZUZ1bGxZZWFyID0gL1swLTldezR9LztcbnZhciBkYXRlTW9udGggPSAvKDBbMS05XXwxWzAtMl0pLztcbnZhciBkYXRlTURheSA9IC8oWzEyXVxcZHwwWzEtOV18M1swMV0pLztcbnZhciB0aW1lSG91ciA9IC8oWzAxXVswLTldfDJbMC0zXSkvO1xudmFyIHRpbWVNaW51dGUgPSAvWzAtNV1bMC05XS87XG52YXIgdGltZVNlY29uZCA9IC8oWzAtNV1bMC05XXw2MCkvO1xudmFyIHRpbWVTZWNGcmFjID0gLyhcXC5bMC05XSspPy87XG52YXIgdGltZU51bU9mZnNldCA9IG5ldyBSZWdFeHAoXCJbLStdXCIuY29uY2F0KHRpbWVIb3VyLnNvdXJjZSwgXCI6XCIpLmNvbmNhdCh0aW1lTWludXRlLnNvdXJjZSkpO1xudmFyIHRpbWVPZmZzZXQgPSBuZXcgUmVnRXhwKFwiKFt6Wl18XCIuY29uY2F0KHRpbWVOdW1PZmZzZXQuc291cmNlLCBcIilcIikpO1xudmFyIHBhcnRpYWxUaW1lID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdCh0aW1lSG91ci5zb3VyY2UsIFwiOlwiKS5jb25jYXQodGltZU1pbnV0ZS5zb3VyY2UsIFwiOlwiKS5jb25jYXQodGltZVNlY29uZC5zb3VyY2UpLmNvbmNhdCh0aW1lU2VjRnJhYy5zb3VyY2UpKTtcbnZhciBmdWxsRGF0ZSA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZGF0ZUZ1bGxZZWFyLnNvdXJjZSwgXCItXCIpLmNvbmNhdChkYXRlTW9udGguc291cmNlLCBcIi1cIikuY29uY2F0KGRhdGVNRGF5LnNvdXJjZSkpO1xudmFyIGZ1bGxUaW1lID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChwYXJ0aWFsVGltZS5zb3VyY2UpLmNvbmNhdCh0aW1lT2Zmc2V0LnNvdXJjZSkpO1xudmFyIHJmYzMzMzkgPSBuZXcgUmVnRXhwKFwiXlwiLmNvbmNhdChmdWxsRGF0ZS5zb3VyY2UsIFwiWyB0VF1cIikuY29uY2F0KGZ1bGxUaW1lLnNvdXJjZSwgXCIkXCIpKTtcblxuZnVuY3Rpb24gaXNSRkMzMzM5KHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gcmZjMzMzOS50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lTTzMxNjYxQWxwaGEzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT18zMTY2LTFfYWxwaGEtM1xudmFyIHZhbGlkSVNPMzE2NjFBbHBoYTNDb3VudHJpZXNDb2RlcyA9IG5ldyBTZXQoWydBRkcnLCAnQUxBJywgJ0FMQicsICdEWkEnLCAnQVNNJywgJ0FORCcsICdBR08nLCAnQUlBJywgJ0FUQScsICdBVEcnLCAnQVJHJywgJ0FSTScsICdBQlcnLCAnQVVTJywgJ0FVVCcsICdBWkUnLCAnQkhTJywgJ0JIUicsICdCR0QnLCAnQlJCJywgJ0JMUicsICdCRUwnLCAnQkxaJywgJ0JFTicsICdCTVUnLCAnQlROJywgJ0JPTCcsICdCRVMnLCAnQklIJywgJ0JXQScsICdCVlQnLCAnQlJBJywgJ0lPVCcsICdCUk4nLCAnQkdSJywgJ0JGQScsICdCREknLCAnS0hNJywgJ0NNUicsICdDQU4nLCAnQ1BWJywgJ0NZTScsICdDQUYnLCAnVENEJywgJ0NITCcsICdDSE4nLCAnQ1hSJywgJ0NDSycsICdDT0wnLCAnQ09NJywgJ0NPRycsICdDT0QnLCAnQ09LJywgJ0NSSScsICdDSVYnLCAnSFJWJywgJ0NVQicsICdDVVcnLCAnQ1lQJywgJ0NaRScsICdETksnLCAnREpJJywgJ0RNQScsICdET00nLCAnRUNVJywgJ0VHWScsICdTTFYnLCAnR05RJywgJ0VSSScsICdFU1QnLCAnRVRIJywgJ0ZMSycsICdGUk8nLCAnRkpJJywgJ0ZJTicsICdGUkEnLCAnR1VGJywgJ1BZRicsICdBVEYnLCAnR0FCJywgJ0dNQicsICdHRU8nLCAnREVVJywgJ0dIQScsICdHSUInLCAnR1JDJywgJ0dSTCcsICdHUkQnLCAnR0xQJywgJ0dVTScsICdHVE0nLCAnR0dZJywgJ0dJTicsICdHTkInLCAnR1VZJywgJ0hUSScsICdITUQnLCAnVkFUJywgJ0hORCcsICdIS0cnLCAnSFVOJywgJ0lTTCcsICdJTkQnLCAnSUROJywgJ0lSTicsICdJUlEnLCAnSVJMJywgJ0lNTicsICdJU1InLCAnSVRBJywgJ0pBTScsICdKUE4nLCAnSkVZJywgJ0pPUicsICdLQVonLCAnS0VOJywgJ0tJUicsICdQUksnLCAnS09SJywgJ0tXVCcsICdLR1onLCAnTEFPJywgJ0xWQScsICdMQk4nLCAnTFNPJywgJ0xCUicsICdMQlknLCAnTElFJywgJ0xUVScsICdMVVgnLCAnTUFDJywgJ01LRCcsICdNREcnLCAnTVdJJywgJ01ZUycsICdNRFYnLCAnTUxJJywgJ01MVCcsICdNSEwnLCAnTVRRJywgJ01SVCcsICdNVVMnLCAnTVlUJywgJ01FWCcsICdGU00nLCAnTURBJywgJ01DTycsICdNTkcnLCAnTU5FJywgJ01TUicsICdNQVInLCAnTU9aJywgJ01NUicsICdOQU0nLCAnTlJVJywgJ05QTCcsICdOTEQnLCAnTkNMJywgJ05aTCcsICdOSUMnLCAnTkVSJywgJ05HQScsICdOSVUnLCAnTkZLJywgJ01OUCcsICdOT1InLCAnT01OJywgJ1BBSycsICdQTFcnLCAnUFNFJywgJ1BBTicsICdQTkcnLCAnUFJZJywgJ1BFUicsICdQSEwnLCAnUENOJywgJ1BPTCcsICdQUlQnLCAnUFJJJywgJ1FBVCcsICdSRVUnLCAnUk9VJywgJ1JVUycsICdSV0EnLCAnQkxNJywgJ1NITicsICdLTkEnLCAnTENBJywgJ01BRicsICdTUE0nLCAnVkNUJywgJ1dTTScsICdTTVInLCAnU1RQJywgJ1NBVScsICdTRU4nLCAnU1JCJywgJ1NZQycsICdTTEUnLCAnU0dQJywgJ1NYTScsICdTVksnLCAnU1ZOJywgJ1NMQicsICdTT00nLCAnWkFGJywgJ1NHUycsICdTU0QnLCAnRVNQJywgJ0xLQScsICdTRE4nLCAnU1VSJywgJ1NKTScsICdTV1onLCAnU1dFJywgJ0NIRScsICdTWVInLCAnVFdOJywgJ1RKSycsICdUWkEnLCAnVEhBJywgJ1RMUycsICdUR08nLCAnVEtMJywgJ1RPTicsICdUVE8nLCAnVFVOJywgJ1RVUicsICdUS00nLCAnVENBJywgJ1RVVicsICdVR0EnLCAnVUtSJywgJ0FSRScsICdHQlInLCAnVVNBJywgJ1VNSScsICdVUlknLCAnVVpCJywgJ1ZVVCcsICdWRU4nLCAnVk5NJywgJ1ZHQicsICdWSVInLCAnV0xGJywgJ0VTSCcsICdZRU0nLCAnWk1CJywgJ1pXRSddKTtcblxuZnVuY3Rpb24gaXNJU08zMTY2MUFscGhhMyhzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHZhbGlkSVNPMzE2NjFBbHBoYTNDb3VudHJpZXNDb2Rlcy5oYXMoc3RyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJU080MjE3O1xuZXhwb3J0cy5DdXJyZW5jeUNvZGVzID0gdm9pZCAwO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3XG52YXIgdmFsaWRJU080MjE3Q3VycmVuY3lDb2RlcyA9IG5ldyBTZXQoWydBRUQnLCAnQUZOJywgJ0FMTCcsICdBTUQnLCAnQU5HJywgJ0FPQScsICdBUlMnLCAnQVVEJywgJ0FXRycsICdBWk4nLCAnQkFNJywgJ0JCRCcsICdCRFQnLCAnQkdOJywgJ0JIRCcsICdCSUYnLCAnQk1EJywgJ0JORCcsICdCT0InLCAnQk9WJywgJ0JSTCcsICdCU0QnLCAnQlROJywgJ0JXUCcsICdCWU4nLCAnQlpEJywgJ0NBRCcsICdDREYnLCAnQ0hFJywgJ0NIRicsICdDSFcnLCAnQ0xGJywgJ0NMUCcsICdDTlknLCAnQ09QJywgJ0NPVScsICdDUkMnLCAnQ1VDJywgJ0NVUCcsICdDVkUnLCAnQ1pLJywgJ0RKRicsICdES0snLCAnRE9QJywgJ0RaRCcsICdFR1AnLCAnRVJOJywgJ0VUQicsICdFVVInLCAnRkpEJywgJ0ZLUCcsICdHQlAnLCAnR0VMJywgJ0dIUycsICdHSVAnLCAnR01EJywgJ0dORicsICdHVFEnLCAnR1lEJywgJ0hLRCcsICdITkwnLCAnSFJLJywgJ0hURycsICdIVUYnLCAnSURSJywgJ0lMUycsICdJTlInLCAnSVFEJywgJ0lSUicsICdJU0snLCAnSk1EJywgJ0pPRCcsICdKUFknLCAnS0VTJywgJ0tHUycsICdLSFInLCAnS01GJywgJ0tQVycsICdLUlcnLCAnS1dEJywgJ0tZRCcsICdLWlQnLCAnTEFLJywgJ0xCUCcsICdMS1InLCAnTFJEJywgJ0xTTCcsICdMWUQnLCAnTUFEJywgJ01ETCcsICdNR0EnLCAnTUtEJywgJ01NSycsICdNTlQnLCAnTU9QJywgJ01SVScsICdNVVInLCAnTVZSJywgJ01XSycsICdNWE4nLCAnTVhWJywgJ01ZUicsICdNWk4nLCAnTkFEJywgJ05HTicsICdOSU8nLCAnTk9LJywgJ05QUicsICdOWkQnLCAnT01SJywgJ1BBQicsICdQRU4nLCAnUEdLJywgJ1BIUCcsICdQS1InLCAnUExOJywgJ1BZRycsICdRQVInLCAnUk9OJywgJ1JTRCcsICdSVUInLCAnUldGJywgJ1NBUicsICdTQkQnLCAnU0NSJywgJ1NERycsICdTRUsnLCAnU0dEJywgJ1NIUCcsICdTTEwnLCAnU09TJywgJ1NSRCcsICdTU1AnLCAnU1ROJywgJ1NWQycsICdTWVAnLCAnU1pMJywgJ1RIQicsICdUSlMnLCAnVE1UJywgJ1RORCcsICdUT1AnLCAnVFJZJywgJ1RURCcsICdUV0QnLCAnVFpTJywgJ1VBSCcsICdVR1gnLCAnVVNEJywgJ1VTTicsICdVWUknLCAnVVlVJywgJ1VZVycsICdVWlMnLCAnVkVTJywgJ1ZORCcsICdWVVYnLCAnV1NUJywgJ1hBRicsICdYQUcnLCAnWEFVJywgJ1hCQScsICdYQkInLCAnWEJDJywgJ1hCRCcsICdYQ0QnLCAnWERSJywgJ1hPRicsICdYUEQnLCAnWFBGJywgJ1hQVCcsICdYU1UnLCAnWFRTJywgJ1hVQScsICdYWFgnLCAnWUVSJywgJ1pBUicsICdaTVcnLCAnWldMJ10pO1xuXG5mdW5jdGlvbiBpc0lTTzQyMTcoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiB2YWxpZElTTzQyMTdDdXJyZW5jeUNvZGVzLmhhcyhzdHIudG9VcHBlckNhc2UoKSk7XG59XG5cbnZhciBDdXJyZW5jeUNvZGVzID0gdmFsaWRJU080MjE3Q3VycmVuY3lDb2RlcztcbmV4cG9ydHMuQ3VycmVuY3lDb2RlcyA9IEN1cnJlbmN5Q29kZXM7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCYXNlMzI7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBiYXNlMzIgPSAvXltBLVoyLTddKz0qJC87XG5cbmZ1bmN0aW9uIGlzQmFzZTMyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aDtcblxuICBpZiAobGVuICUgOCA9PT0gMCAmJiBiYXNlMzIudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jhc2U1ODtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gQWNjZXB0ZWQgY2hhcnMgLSAxMjM0NTY3ODlBQkNERUZHSCBKS0xNTiBQUVJTVFVWV1hZWmFiY2RlZmdoaWprIG1ub3BxcnN0dXZ3eHl6XG52YXIgYmFzZTU4UmVnID0gL15bQS1ISi1OUC1aYS1rbS16MS05XSokLztcblxuZnVuY3Rpb24gaXNCYXNlNTgoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKGJhc2U1OFJlZy50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGF0YVVSSTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbGlkTWVkaWFUeXBlID0gL15bYS16XStcXC9bYS16MC05XFwtXFwrXSskL2k7XG52YXIgdmFsaWRBdHRyaWJ1dGUgPSAvXlthLXpcXC1dKz1bYS16MC05XFwtXSskL2k7XG52YXIgdmFsaWREYXRhID0gL15bYS16MC05IVxcJCYnXFwoXFwpXFwqXFwrLDs9XFwtXFwuX346QFxcL1xcPyVcXHNdKiQvaTtcblxuZnVuY3Rpb24gaXNEYXRhVVJJKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICB2YXIgZGF0YSA9IHN0ci5zcGxpdCgnLCcpO1xuXG4gIGlmIChkYXRhLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYXR0cmlidXRlcyA9IGRhdGEuc2hpZnQoKS50cmltKCkuc3BsaXQoJzsnKTtcbiAgdmFyIHNjaGVtZUFuZE1lZGlhVHlwZSA9IGF0dHJpYnV0ZXMuc2hpZnQoKTtcblxuICBpZiAoc2NoZW1lQW5kTWVkaWFUeXBlLnN1YnN0cigwLCA1KSAhPT0gJ2RhdGE6Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtZWRpYVR5cGUgPSBzY2hlbWVBbmRNZWRpYVR5cGUuc3Vic3RyKDUpO1xuXG4gIGlmIChtZWRpYVR5cGUgIT09ICcnICYmICF2YWxpZE1lZGlhVHlwZS50ZXN0KG1lZGlhVHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIShpID09PSBhdHRyaWJ1dGVzLmxlbmd0aCAtIDEgJiYgYXR0cmlidXRlc1tpXS50b0xvd2VyQ2FzZSgpID09PSAnYmFzZTY0JykgJiYgIXZhbGlkQXR0cmlidXRlLnRlc3QoYXR0cmlidXRlc1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZGF0YS5sZW5ndGg7IF9pKyspIHtcbiAgICBpZiAoIXZhbGlkRGF0YS50ZXN0KGRhdGFbX2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNYWduZXRVUkk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtYWduZXRVUkkgPSAvXm1hZ25ldDpcXD94dCg/OlxcLjEpPz11cm46KD86YWljaHxiaXRwcmludHxidGlofGVkMmt8ZWQya2hhc2h8a3poYXNofG1kNXxzaGExfHRyZWU6dGlnZXIpOlthLXowLTldezMyfSg/OlthLXowLTldezh9KT8oJHwmKS9pO1xuXG5mdW5jdGlvbiBpc01hZ25ldFVSSSh1cmwpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkodXJsKTtcbiAgcmV0dXJuIG1hZ25ldFVSSS50ZXN0KHVybC50cmltKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNaW1lVHlwZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBzdHJpbmcgbWF0Y2hlcyB0byBhIGNvcnJlY3QgTWVkaWEgdHlwZSBmb3JtYXQgKE1JTUUgdHlwZSlcblxuICBUaGlzIGZ1bmN0aW9uIG9ubHkgY2hlY2tzIGlzIHRoZSBzdHJpbmcgZm9ybWF0IGZvbGxvd3MgdGhlXG4gIGV0YWJsaXNoZWQgcnVsZXMgYnkgdGhlIGFjY29yZGluZyBSRkMgc3BlY2lmaWNhdGlvbnMuXG4gIFRoaXMgZnVuY3Rpb24gc3VwcG9ydHMgJ2NoYXJzZXQnIGluIHRleHR1YWwgbWVkaWEgdHlwZXNcbiAgKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NjU3KS5cblxuICBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGNoZWNrIGFnYWluc3QgYWxsIHRoZSBtZWRpYSB0eXBlcyBsaXN0ZWRcbiAgYnkgdGhlIElBTkEgKGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sKVxuICBiZWNhdXNlIG9mIGxpZ2h0bmVzcyBwdXJwb3NlcyA6IGl0IHdvdWxkIHJlcXVpcmUgdG8gaW5jbHVkZVxuICBhbGwgdGhlc2UgTUlNRSB0eXBlcyBpbiB0aGlzIGxpYnJhaXJ5LCB3aGljaCB3b3VsZCB3ZWlnaCBpdFxuICBzaWduaWZpY2FudGx5LiBUaGlzIGtpbmQgb2YgZWZmb3J0IG1heWJlIGlzIG5vdCB3b3J0aCBmb3IgdGhlIHVzZSB0aGF0XG4gIHRoaXMgZnVuY3Rpb24gaGFzIGluIHRoaXMgZW50aXJlIGxpYnJhaXJ5LlxuXG4gIE1vcmUgaW5mb3JtYXRpb25zIGluIHRoZSBSRkMgc3BlY2lmaWNhdGlvbnMgOlxuICAtIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMDQ1XG4gIC0gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIwNDZcbiAgLSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTMuMS4xLjFcbiAgLSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTMuMS4xLjVcbiovXG4vLyBNYXRjaCBzaW1wbGUgTUlNRSB0eXBlc1xuLy8gTkIgOlxuLy8gICBTdWJ0eXBlIGxlbmd0aCBtdXN0IG5vdCBleGNlZWQgMTAwIGNoYXJhY3RlcnMuXG4vLyAgIFRoaXMgcnVsZSBkb2VzIG5vdCBjb21wbHkgdG8gdGhlIFJGQyBzcGVjcyAod2hhdCBpcyB0aGUgbWF4IGxlbmd0aCA/KS5cbnZhciBtaW1lVHlwZVNpbXBsZSA9IC9eKGFwcGxpY2F0aW9ufGF1ZGlvfGZvbnR8aW1hZ2V8bWVzc2FnZXxtb2RlbHxtdWx0aXBhcnR8dGV4dHx2aWRlbylcXC9bYS16QS1aMC05XFwuXFwtXFwrXXsxLDEwMH0kL2k7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuLy8gSGFuZGxlIFwiY2hhcnNldFwiIGluIFwidGV4dC8qXCJcblxudmFyIG1pbWVUeXBlVGV4dCA9IC9edGV4dFxcL1thLXpBLVowLTlcXC5cXC1cXCtdezEsMTAwfTtcXHM/Y2hhcnNldD0oXCJbYS16QS1aMC05XFwuXFwtXFwrXFxzXXswLDcwfVwifFthLXpBLVowLTlcXC5cXC1cXCtdezAsNzB9KShcXHM/XFwoW2EtekEtWjAtOVxcLlxcLVxcK1xcc117MSwyMH1cXCkpPyQvaTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4vLyBIYW5kbGUgXCJib3VuZGFyeVwiIGluIFwibXVsdGlwYXJ0LypcIlxuXG52YXIgbWltZVR5cGVNdWx0aXBhcnQgPSAvXm11bHRpcGFydFxcL1thLXpBLVowLTlcXC5cXC1cXCtdezEsMTAwfSg7XFxzPyhib3VuZGFyeXxjaGFyc2V0KT0oXCJbYS16QS1aMC05XFwuXFwtXFwrXFxzXXswLDcwfVwifFthLXpBLVowLTlcXC5cXC1cXCtdezAsNzB9KShcXHM/XFwoW2EtekEtWjAtOVxcLlxcLVxcK1xcc117MSwyMH1cXCkpPyl7MCwyfSQvaTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cbmZ1bmN0aW9uIGlzTWltZVR5cGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtaW1lVHlwZVNpbXBsZS50ZXN0KHN0cikgfHwgbWltZVR5cGVUZXh0LnRlc3Qoc3RyKSB8fCBtaW1lVHlwZU11bHRpcGFydC50ZXN0KHN0cik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0xhdExvbmc7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvbWVyZ2VcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbGF0ID0gL15cXCg/WystXT8oOTAoXFwuMCspP3xbMS04XT9cXGQoXFwuXFxkKyk/KSQvO1xudmFyIGxvbmcgPSAvXlxccz9bKy1dPygxODAoXFwuMCspP3wxWzAtN11cXGQoXFwuXFxkKyk/fFxcZHsxLDJ9KFxcLlxcZCspPylcXCk/JC87XG52YXIgbGF0RE1TID0gL14oKFsxLThdP1xcZClcXEQrKFsxLTVdP1xcZHw2MClcXEQrKFsxLTVdP1xcZHw2MCkoXFwuXFxkKyk/fDkwXFxEKzBcXEQrMClcXEQrW05TbnNdPyQvaTtcbnZhciBsb25nRE1TID0gL15cXHMqKFsxLTddP1xcZHsxLDJ9XFxEKyhbMS01XT9cXGR8NjApXFxEKyhbMS01XT9cXGR8NjApKFxcLlxcZCspP3wxODBcXEQrMFxcRCswKVxcRCtbRVdld10/JC9pO1xudmFyIGRlZmF1bHRMYXRMb25nT3B0aW9ucyA9IHtcbiAgY2hlY2tETVM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0xhdExvbmcoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRMYXRMb25nT3B0aW9ucyk7XG4gIGlmICghc3RyLmluY2x1ZGVzKCcsJykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHBhaXIgPSBzdHIuc3BsaXQoJywnKTtcbiAgaWYgKHBhaXJbMF0uc3RhcnRzV2l0aCgnKCcpICYmICFwYWlyWzFdLmVuZHNXaXRoKCcpJykgfHwgcGFpclsxXS5lbmRzV2l0aCgnKScpICYmICFwYWlyWzBdLnN0YXJ0c1dpdGgoJygnKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChvcHRpb25zLmNoZWNrRE1TKSB7XG4gICAgcmV0dXJuIGxhdERNUy50ZXN0KHBhaXJbMF0pICYmIGxvbmdETVMudGVzdChwYWlyWzFdKTtcbiAgfVxuXG4gIHJldHVybiBsYXQudGVzdChwYWlyWzBdKSAmJiBsb25nLnRlc3QocGFpclsxXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1Bvc3RhbENvZGU7XG5leHBvcnRzLmxvY2FsZXMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGNvbW1vbiBwYXR0ZXJuc1xudmFyIHRocmVlRGlnaXQgPSAvXlxcZHszfSQvO1xudmFyIGZvdXJEaWdpdCA9IC9eXFxkezR9JC87XG52YXIgZml2ZURpZ2l0ID0gL15cXGR7NX0kLztcbnZhciBzaXhEaWdpdCA9IC9eXFxkezZ9JC87XG52YXIgcGF0dGVybnMgPSB7XG4gIEFEOiAvXkFEXFxkezN9JC8sXG4gIEFUOiBmb3VyRGlnaXQsXG4gIEFVOiBmb3VyRGlnaXQsXG4gIEFaOiAvXkFaXFxkezR9JC8sXG4gIEJFOiBmb3VyRGlnaXQsXG4gIEJHOiBmb3VyRGlnaXQsXG4gIEJSOiAvXlxcZHs1fS1cXGR7M30kLyxcbiAgQlk6IC8yWzEtNF17MX1cXGR7NH0kLyxcbiAgQ0E6IC9eW0FCQ0VHSEpLTE1OUFJTVFZYWV1cXGRbQUJDRUdISi1OUFJTVFYtWl1bXFxzXFwtXT9cXGRbQUJDRUdISi1OUFJTVFYtWl1cXGQkL2ksXG4gIENIOiBmb3VyRGlnaXQsXG4gIENOOiAvXigwWzEtN118MVswMTIzNTZdfDJbMC03XXwzWzAtNl18NFswLTddfDVbMS03XXw2WzEtN118N1sxLTVdfDhbMTM0NV18OVswOV0pXFxkezR9JC8sXG4gIENaOiAvXlxcZHszfVxccz9cXGR7Mn0kLyxcbiAgREU6IGZpdmVEaWdpdCxcbiAgREs6IGZvdXJEaWdpdCxcbiAgRE86IGZpdmVEaWdpdCxcbiAgRFo6IGZpdmVEaWdpdCxcbiAgRUU6IGZpdmVEaWdpdCxcbiAgRVM6IC9eKDVbMC0yXXsxfXxbMC00XXsxfVxcZHsxfSlcXGR7M30kLyxcbiAgRkk6IGZpdmVEaWdpdCxcbiAgRlI6IC9eXFxkezJ9XFxzP1xcZHszfSQvLFxuICBHQjogL14oZ2lyXFxzPzBhYXxbYS16XXsxLDJ9XFxkW1xcZGEtel0/XFxzPyhcXGRbYS16XXsyfSk/KSQvaSxcbiAgR1I6IC9eXFxkezN9XFxzP1xcZHsyfSQvLFxuICBIUjogL14oWzEtNV1cXGR7NH0kKS8sXG4gIEhUOiAvXkhUXFxkezR9JC8sXG4gIEhVOiBmb3VyRGlnaXQsXG4gIElEOiBmaXZlRGlnaXQsXG4gIElFOiAvXig/IS4qKD86bykpW0EtWmEtel1cXGRbXFxkd11cXHNcXHd7NH0kL2ksXG4gIElMOiAvXihcXGR7NX18XFxkezd9KSQvLFxuICBJTjogL14oKD8hMTB8Mjl8MzV8NTR8NTV8NjV8NjZ8ODZ8ODd8ODh8ODkpWzEtOV1bMC05XXs1fSkkLyxcbiAgSVI6IC9cXGIoPyEoXFxkKVxcMXszfSlbMTMtOV17NH1bMTM0Ni05XVswMTMtOV17NX1cXGIvLFxuICBJUzogdGhyZWVEaWdpdCxcbiAgSVQ6IGZpdmVEaWdpdCxcbiAgSlA6IC9eXFxkezN9XFwtXFxkezR9JC8sXG4gIEtFOiBmaXZlRGlnaXQsXG4gIEtSOiAvXihcXGR7NX18XFxkezZ9KSQvLFxuICBMSTogL14oOTQ4WzUtOV18OTQ5WzAtN10pJC8sXG4gIExUOiAvXkxUXFwtXFxkezV9JC8sXG4gIExVOiBmb3VyRGlnaXQsXG4gIExWOiAvXkxWXFwtXFxkezR9JC8sXG4gIExLOiBmaXZlRGlnaXQsXG4gIE1YOiBmaXZlRGlnaXQsXG4gIE1UOiAvXltBLVphLXpdezN9XFxzezAsMX1cXGR7NH0kLyxcbiAgTVk6IGZpdmVEaWdpdCxcbiAgTkw6IC9eXFxkezR9XFxzP1thLXpdezJ9JC9pLFxuICBOTzogZm91ckRpZ2l0LFxuICBOUDogL14oMTB8MjF8MjJ8MzJ8MzN8MzR8NDR8NDV8NTZ8NTcpXFxkezN9JHxeKDk3NykkL2ksXG4gIE5aOiBmb3VyRGlnaXQsXG4gIFBMOiAvXlxcZHsyfVxcLVxcZHszfSQvLFxuICBQUjogL14wMFs2NzldXFxkezJ9KFsgLV1cXGR7NH0pPyQvLFxuICBQVDogL15cXGR7NH1cXC1cXGR7M30/JC8sXG4gIFJPOiBzaXhEaWdpdCxcbiAgUlU6IHNpeERpZ2l0LFxuICBTQTogZml2ZURpZ2l0LFxuICBTRTogL15bMS05XVxcZHsyfVxccz9cXGR7Mn0kLyxcbiAgU0c6IHNpeERpZ2l0LFxuICBTSTogZm91ckRpZ2l0LFxuICBTSzogL15cXGR7M31cXHM/XFxkezJ9JC8sXG4gIFRIOiBmaXZlRGlnaXQsXG4gIFROOiBmb3VyRGlnaXQsXG4gIFRXOiAvXlxcZHszfShcXGR7Mn0pPyQvLFxuICBVQTogZml2ZURpZ2l0LFxuICBVUzogL15cXGR7NX0oLVxcZHs0fSk/JC8sXG4gIFpBOiBmb3VyRGlnaXQsXG4gIFpNOiBmaXZlRGlnaXRcbn07XG52YXIgbG9jYWxlcyA9IE9iamVjdC5rZXlzKHBhdHRlcm5zKTtcbmV4cG9ydHMubG9jYWxlcyA9IGxvY2FsZXM7XG5cbmZ1bmN0aW9uIGlzUG9zdGFsQ29kZShzdHIsIGxvY2FsZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuXG4gIGlmIChsb2NhbGUgaW4gcGF0dGVybnMpIHtcbiAgICByZXR1cm4gcGF0dGVybnNbbG9jYWxlXS50ZXN0KHN0cik7XG4gIH0gZWxzZSBpZiAobG9jYWxlID09PSAnYW55Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBwYXR0ZXJucykge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dvdHdhcmxvc3QvaXN0YW5idWwvYmxvYi9tYXN0ZXIvaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UubWQjaWdub3JpbmctY29kZS1mb3ItY292ZXJhZ2UtcHVycG9zZXNcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAocGF0dGVybnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2tleV07XG5cbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChzdHIpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvY2FsZSAnXCIuY29uY2F0KGxvY2FsZSwgXCInXCIpKTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsdHJpbTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbHRyaW0oc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnMjRXNjYXBpbmdcblxuICB2YXIgcGF0dGVybiA9IGNoYXJzID8gbmV3IFJlZ0V4cChcIl5bXCIuY29uY2F0KGNoYXJzLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksIFwiXStcIiksICdnJykgOiAvXlxccysvZztcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHBhdHRlcm4sICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJ0cmltO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBydHJpbShzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKGNoYXJzKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zI0VzY2FwaW5nXG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiW1wiLmNvbmNhdChjaGFycy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpLCBcIl0rJFwiKSwgJ2cnKTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocGF0dGVybiwgJycpO1xuICB9IC8vIFVzZSBhIGZhc3RlciBhbmQgbW9yZSBzYWZlIHRoYW4gcmVnZXggdHJpbSBtZXRob2QgaHR0cHM6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9mYXN0ZXItdHJpbS1qYXZhc2NyaXB0XG5cblxuICB2YXIgc3RySW5kZXggPSBzdHIubGVuZ3RoIC0gMTtcblxuICB3aGlsZSAoL1xccy8udGVzdChzdHIuY2hhckF0KHN0ckluZGV4KSkpIHtcbiAgICBzdHJJbmRleCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5zbGljZSgwLCBzdHJJbmRleCArIDEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJpbTtcblxudmFyIF9ydHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcnRyaW1cIikpO1xuXG52YXIgX2x0cmltID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sdHJpbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyaW0oc3RyLCBjaGFycykge1xuICByZXR1cm4gKDAsIF9ydHJpbS5kZWZhdWx0KSgoMCwgX2x0cmltLmRlZmF1bHQpKHN0ciwgY2hhcnMpLCBjaGFycyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlc2NhcGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmI3gyNzsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1xcLy9nLCAnJiN4MkY7JykucmVwbGFjZSgvXFxcXC9nLCAnJiN4NUM7JykucmVwbGFjZSgvYC9nLCAnJiM5NjsnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZXNjYXBlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB1bmVzY2FwZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJykucmVwbGFjZSgvJiN4Mjc7L2csIFwiJ1wiKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyYjeDJGOy9nLCAnLycpLnJlcGxhY2UoLyYjeDVDOy9nLCAnXFxcXCcpLnJlcGxhY2UoLyYjOTY7L2csICdgJykucmVwbGFjZSgvJmFtcDsvZywgJyYnKTsgLy8gJmFtcDsgcmVwbGFjZW1lbnQgaGFzIHRvIGJlIHRoZSBsYXN0IG9uZSB0byBwcmV2ZW50XG4gIC8vIGJ1Z3Mgd2l0aCBpbnRlcm1lZGlhdGUgc3RyaW5ncyBjb250YWluaW5nIGVzY2FwZSBzZXF1ZW5jZXNcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdmFsaWRhdG9yanMvdmFsaWRhdG9yLmpzL2lzc3Vlcy8xODI3XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBibGFja2xpc3Q7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGJsYWNrbGlzdChzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiW1wiLmNvbmNhdChjaGFycywgXCJdK1wiKSwgJ2cnKSwgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaXBMb3c7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbnZhciBfYmxhY2tsaXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ibGFja2xpc3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpcExvdyhzdHIsIGtlZXBfbmV3X2xpbmVzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBjaGFycyA9IGtlZXBfbmV3X2xpbmVzID8gJ1xcXFx4MDAtXFxcXHgwOVxcXFx4MEJcXFxceDBDXFxcXHgwRS1cXFxceDFGXFxcXHg3RicgOiAnXFxcXHgwMC1cXFxceDFGXFxcXHg3Ric7XG4gIHJldHVybiAoMCwgX2JsYWNrbGlzdC5kZWZhdWx0KShzdHIsIGNoYXJzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdoaXRlbGlzdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gd2hpdGVsaXN0KHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJbXlwiLmNvbmNhdChjaGFycywgXCJdK1wiKSwgJ2cnKSwgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNXaGl0ZWxpc3RlZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvYXNzZXJ0U3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNXaGl0ZWxpc3RlZChzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgZm9yICh2YXIgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChjaGFycy5pbmRleE9mKHN0cltpXSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBub3JtYWxpemVFbWFpbDtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X25vcm1hbGl6ZV9lbWFpbF9vcHRpb25zID0ge1xuICAvLyBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXBwbHkgdG8gYWxsIGVtYWlsIGFkZHJlc3Nlc1xuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBlbWFpbCBhZGRyZXNzLlxuICAvLyBQbGVhc2Ugbm90ZSB0aGlzIG1heSB2aW9sYXRlIFJGQyA1MzIxIGFzIHBlciBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85ODA4MzMyLzE5MjAyNCkuXG4gIC8vIFRoZSBkb21haW4gaXMgYWx3YXlzIGxvd2VyY2FzZWQsIGFzIHBlciBSRkMgMTAzNVxuICBhbGxfbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBUaGUgZm9sbG93aW5nIGNvbnZlcnNpb25zIGFyZSBzcGVjaWZpYyB0byBHTWFpbFxuICAvLyBMb3dlcmNhc2VzIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBHTWFpbCBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICBnbWFpbF9sb3dlcmNhc2U6IHRydWUsXG4gIC8vIFJlbW92ZXMgZG90cyBmcm9tIHRoZSBsb2NhbCBwYXJ0IG9mIHRoZSBlbWFpbCBhZGRyZXNzLCBhcyB0aGF0J3MgaWdub3JlZCBieSBHTWFpbFxuICBnbWFpbF9yZW1vdmVfZG90czogdHJ1ZSxcbiAgLy8gUmVtb3ZlcyB0aGUgc3ViYWRkcmVzcyAoZS5nLiBcIitmb29cIikgZnJvbSB0aGUgZW1haWwgYWRkcmVzc1xuICBnbWFpbF9yZW1vdmVfc3ViYWRkcmVzczogdHJ1ZSxcbiAgLy8gQ29udmVyc3RzIHRoZSBnb29nbGVtYWlsLmNvbSBkb21haW4gdG8gZ21haWwuY29tXG4gIGdtYWlsX2NvbnZlcnRfZ29vZ2xlbWFpbGRvdGNvbTogdHJ1ZSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb252ZXJzaW9ucyBhcmUgc3BlY2lmaWMgdG8gT3V0bG9vay5jb20gLyBXaW5kb3dzIExpdmUgLyBIb3RtYWlsXG4gIC8vIExvd2VyY2FzZXMgdGhlIGxvY2FsIHBhcnQgb2YgdGhlIE91dGxvb2suY29tIGFkZHJlc3MgKGtub3duIHRvIGJlIGNhc2UtaW5zZW5zaXRpdmUpXG4gIG91dGxvb2tkb3Rjb21fbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBSZW1vdmVzIHRoZSBzdWJhZGRyZXNzIChlLmcuIFwiK2Zvb1wiKSBmcm9tIHRoZSBlbWFpbCBhZGRyZXNzXG4gIG91dGxvb2tkb3Rjb21fcmVtb3ZlX3N1YmFkZHJlc3M6IHRydWUsXG4gIC8vIFRoZSBmb2xsb3dpbmcgY29udmVyc2lvbnMgYXJlIHNwZWNpZmljIHRvIFlhaG9vXG4gIC8vIExvd2VyY2FzZXMgdGhlIGxvY2FsIHBhcnQgb2YgdGhlIFlhaG9vIGFkZHJlc3MgKGtub3duIHRvIGJlIGNhc2UtaW5zZW5zaXRpdmUpXG4gIHlhaG9vX2xvd2VyY2FzZTogdHJ1ZSxcbiAgLy8gUmVtb3ZlcyB0aGUgc3ViYWRkcmVzcyAoZS5nLiBcIi1mb29cIikgZnJvbSB0aGUgZW1haWwgYWRkcmVzc1xuICB5YWhvb19yZW1vdmVfc3ViYWRkcmVzczogdHJ1ZSxcbiAgLy8gVGhlIGZvbGxvd2luZyBjb252ZXJzaW9ucyBhcmUgc3BlY2lmaWMgdG8gWWFuZGV4XG4gIC8vIExvd2VyY2FzZXMgdGhlIGxvY2FsIHBhcnQgb2YgdGhlIFlhbmRleCBhZGRyZXNzIChrbm93biB0byBiZSBjYXNlLWluc2Vuc2l0aXZlKVxuICB5YW5kZXhfbG93ZXJjYXNlOiB0cnVlLFxuICAvLyBUaGUgZm9sbG93aW5nIGNvbnZlcnNpb25zIGFyZSBzcGVjaWZpYyB0byBpQ2xvdWRcbiAgLy8gTG93ZXJjYXNlcyB0aGUgbG9jYWwgcGFydCBvZiB0aGUgaUNsb3VkIGFkZHJlc3MgKGtub3duIHRvIGJlIGNhc2UtaW5zZW5zaXRpdmUpXG4gIGljbG91ZF9sb3dlcmNhc2U6IHRydWUsXG4gIC8vIFJlbW92ZXMgdGhlIHN1YmFkZHJlc3MgKGUuZy4gXCIrZm9vXCIpIGZyb20gdGhlIGVtYWlsIGFkZHJlc3NcbiAgaWNsb3VkX3JlbW92ZV9zdWJhZGRyZXNzOiB0cnVlXG59OyAvLyBMaXN0IG9mIGRvbWFpbnMgdXNlZCBieSBpQ2xvdWRcblxudmFyIGljbG91ZF9kb21haW5zID0gWydpY2xvdWQuY29tJywgJ21lLmNvbSddOyAvLyBMaXN0IG9mIGRvbWFpbnMgdXNlZCBieSBPdXRsb29rLmNvbSBhbmQgaXRzIHByZWRlY2Vzc29yc1xuLy8gVGhpcyBsaXN0IGlzIGxpa2VseSBpbmNvbXBsZXRlLlxuLy8gUGFydGlhbCByZWZlcmVuY2U6XG4vLyBodHRwczovL2Jsb2dzLm9mZmljZS5jb20vMjAxMy8wNC8xNy9vdXRsb29rLWNvbS1nZXRzLXR3by1zdGVwLXZlcmlmaWNhdGlvbi1zaWduLWluLWJ5LWFsaWFzLWFuZC1uZXctaW50ZXJuYXRpb25hbC1kb21haW5zL1xuXG52YXIgb3V0bG9va2RvdGNvbV9kb21haW5zID0gWydob3RtYWlsLmF0JywgJ2hvdG1haWwuYmUnLCAnaG90bWFpbC5jYScsICdob3RtYWlsLmNsJywgJ2hvdG1haWwuY28uaWwnLCAnaG90bWFpbC5jby5ueicsICdob3RtYWlsLmNvLnRoJywgJ2hvdG1haWwuY28udWsnLCAnaG90bWFpbC5jb20nLCAnaG90bWFpbC5jb20uYXInLCAnaG90bWFpbC5jb20uYXUnLCAnaG90bWFpbC5jb20uYnInLCAnaG90bWFpbC5jb20uZ3InLCAnaG90bWFpbC5jb20ubXgnLCAnaG90bWFpbC5jb20ucGUnLCAnaG90bWFpbC5jb20udHInLCAnaG90bWFpbC5jb20udm4nLCAnaG90bWFpbC5jeicsICdob3RtYWlsLmRlJywgJ2hvdG1haWwuZGsnLCAnaG90bWFpbC5lcycsICdob3RtYWlsLmZyJywgJ2hvdG1haWwuaHUnLCAnaG90bWFpbC5pZCcsICdob3RtYWlsLmllJywgJ2hvdG1haWwuaW4nLCAnaG90bWFpbC5pdCcsICdob3RtYWlsLmpwJywgJ2hvdG1haWwua3InLCAnaG90bWFpbC5sdicsICdob3RtYWlsLm15JywgJ2hvdG1haWwucGgnLCAnaG90bWFpbC5wdCcsICdob3RtYWlsLnNhJywgJ2hvdG1haWwuc2cnLCAnaG90bWFpbC5zaycsICdsaXZlLmJlJywgJ2xpdmUuY28udWsnLCAnbGl2ZS5jb20nLCAnbGl2ZS5jb20uYXInLCAnbGl2ZS5jb20ubXgnLCAnbGl2ZS5kZScsICdsaXZlLmVzJywgJ2xpdmUuZXUnLCAnbGl2ZS5mcicsICdsaXZlLml0JywgJ2xpdmUubmwnLCAnbXNuLmNvbScsICdvdXRsb29rLmF0JywgJ291dGxvb2suYmUnLCAnb3V0bG9vay5jbCcsICdvdXRsb29rLmNvLmlsJywgJ291dGxvb2suY28ubnonLCAnb3V0bG9vay5jby50aCcsICdvdXRsb29rLmNvbScsICdvdXRsb29rLmNvbS5hcicsICdvdXRsb29rLmNvbS5hdScsICdvdXRsb29rLmNvbS5icicsICdvdXRsb29rLmNvbS5ncicsICdvdXRsb29rLmNvbS5wZScsICdvdXRsb29rLmNvbS50cicsICdvdXRsb29rLmNvbS52bicsICdvdXRsb29rLmN6JywgJ291dGxvb2suZGUnLCAnb3V0bG9vay5kaycsICdvdXRsb29rLmVzJywgJ291dGxvb2suZnInLCAnb3V0bG9vay5odScsICdvdXRsb29rLmlkJywgJ291dGxvb2suaWUnLCAnb3V0bG9vay5pbicsICdvdXRsb29rLml0JywgJ291dGxvb2suanAnLCAnb3V0bG9vay5rcicsICdvdXRsb29rLmx2JywgJ291dGxvb2subXknLCAnb3V0bG9vay5waCcsICdvdXRsb29rLnB0JywgJ291dGxvb2suc2EnLCAnb3V0bG9vay5zZycsICdvdXRsb29rLnNrJywgJ3Bhc3Nwb3J0LmNvbSddOyAvLyBMaXN0IG9mIGRvbWFpbnMgdXNlZCBieSBZYWhvbyBNYWlsXG4vLyBUaGlzIGxpc3QgaXMgbGlrZWx5IGluY29tcGxldGVcblxudmFyIHlhaG9vX2RvbWFpbnMgPSBbJ3JvY2tldG1haWwuY29tJywgJ3lhaG9vLmNhJywgJ3lhaG9vLmNvLnVrJywgJ3lhaG9vLmNvbScsICd5YWhvby5kZScsICd5YWhvby5mcicsICd5YWhvby5pbicsICd5YWhvby5pdCcsICd5bWFpbC5jb20nXTsgLy8gTGlzdCBvZiBkb21haW5zIHVzZWQgYnkgeWFuZGV4LnJ1XG5cbnZhciB5YW5kZXhfZG9tYWlucyA9IFsneWFuZGV4LnJ1JywgJ3lhbmRleC51YScsICd5YW5kZXgua3onLCAneWFuZGV4LmNvbScsICd5YW5kZXguYnknLCAneWEucnUnXTsgLy8gcmVwbGFjZSBzaW5nbGUgZG90cywgYnV0IG5vdCBtdWx0aXBsZSBjb25zZWN1dGl2ZSBkb3RzXG5cbmZ1bmN0aW9uIGRvdHNSZXBsYWNlcihtYXRjaCkge1xuICBpZiAobWF0Y2gubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBtYXRjaDtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRW1haWwoZW1haWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9ub3JtYWxpemVfZW1haWxfb3B0aW9ucyk7XG4gIHZhciByYXdfcGFydHMgPSBlbWFpbC5zcGxpdCgnQCcpO1xuICB2YXIgZG9tYWluID0gcmF3X3BhcnRzLnBvcCgpO1xuICB2YXIgdXNlciA9IHJhd19wYXJ0cy5qb2luKCdAJyk7XG4gIHZhciBwYXJ0cyA9IFt1c2VyLCBkb21haW5dOyAvLyBUaGUgZG9tYWluIGlzIGFsd2F5cyBsb3dlcmNhc2VkLCBhcyBpdCdzIGNhc2UtaW5zZW5zaXRpdmUgcGVyIFJGQyAxMDM1XG5cbiAgcGFydHNbMV0gPSBwYXJ0c1sxXS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChwYXJ0c1sxXSA9PT0gJ2dtYWlsLmNvbScgfHwgcGFydHNbMV0gPT09ICdnb29nbGVtYWlsLmNvbScpIHtcbiAgICAvLyBBZGRyZXNzIGlzIEdNYWlsXG4gICAgaWYgKG9wdGlvbnMuZ21haWxfcmVtb3ZlX3N1YmFkZHJlc3MpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0uc3BsaXQoJysnKVswXTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5nbWFpbF9yZW1vdmVfZG90cykge1xuICAgICAgLy8gdGhpcyBkb2VzIG5vdCByZXBsYWNlIGNvbnNlY3V0aXZlIGRvdHMgbGlrZSBleGFtcGxlLi5lbWFpbEBnbWFpbC5jb21cbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFwuKy9nLCBkb3RzUmVwbGFjZXIpO1xuICAgIH1cblxuICAgIGlmICghcGFydHNbMF0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSB8fCBvcHRpb25zLmdtYWlsX2xvd2VyY2FzZSkge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHBhcnRzWzFdID0gb3B0aW9ucy5nbWFpbF9jb252ZXJ0X2dvb2dsZW1haWxkb3Rjb20gPyAnZ21haWwuY29tJyA6IHBhcnRzWzFdO1xuICB9IGVsc2UgaWYgKGljbG91ZF9kb21haW5zLmluZGV4T2YocGFydHNbMV0pID49IDApIHtcbiAgICAvLyBBZGRyZXNzIGlzIGlDbG91ZFxuICAgIGlmIChvcHRpb25zLmljbG91ZF9yZW1vdmVfc3ViYWRkcmVzcykge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5zcGxpdCgnKycpWzBdO1xuICAgIH1cblxuICAgIGlmICghcGFydHNbMF0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSB8fCBvcHRpb25zLmljbG91ZF9sb3dlcmNhc2UpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3V0bG9va2RvdGNvbV9kb21haW5zLmluZGV4T2YocGFydHNbMV0pID49IDApIHtcbiAgICAvLyBBZGRyZXNzIGlzIE91dGxvb2suY29tXG4gICAgaWYgKG9wdGlvbnMub3V0bG9va2RvdGNvbV9yZW1vdmVfc3ViYWRkcmVzcykge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5zcGxpdCgnKycpWzBdO1xuICAgIH1cblxuICAgIGlmICghcGFydHNbMF0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSB8fCBvcHRpb25zLm91dGxvb2tkb3Rjb21fbG93ZXJjYXNlKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHlhaG9vX2RvbWFpbnMuaW5kZXhPZihwYXJ0c1sxXSkgPj0gMCkge1xuICAgIC8vIEFkZHJlc3MgaXMgWWFob29cbiAgICBpZiAob3B0aW9ucy55YWhvb19yZW1vdmVfc3ViYWRkcmVzcykge1xuICAgICAgdmFyIGNvbXBvbmVudHMgPSBwYXJ0c1swXS5zcGxpdCgnLScpO1xuICAgICAgcGFydHNbMF0gPSBjb21wb25lbnRzLmxlbmd0aCA+IDEgPyBjb21wb25lbnRzLnNsaWNlKDAsIC0xKS5qb2luKCctJykgOiBjb21wb25lbnRzWzBdO1xuICAgIH1cblxuICAgIGlmICghcGFydHNbMF0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSB8fCBvcHRpb25zLnlhaG9vX2xvd2VyY2FzZSkge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5YW5kZXhfZG9tYWlucy5pbmRleE9mKHBhcnRzWzFdKSA+PSAwKSB7XG4gICAgaWYgKG9wdGlvbnMuYWxsX2xvd2VyY2FzZSB8fCBvcHRpb25zLnlhbmRleF9sb3dlcmNhc2UpIHtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBwYXJ0c1sxXSA9ICd5YW5kZXgucnUnOyAvLyBhbGwgeWFuZGV4IGRvbWFpbnMgYXJlIGVxdWFsLCAxc3QgcHJlZmVycmVkXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5hbGxfbG93ZXJjYXNlKSB7XG4gICAgLy8gQW55IG90aGVyIGFkZHJlc3NcbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignQCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTbHVnO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY2hhcnNldFJlZ2V4ID0gL15bXlxccy1fXSg/IS4qP1stX117Mix9KVthLXowLTktXFxcXF1bXlxcc10qW14tX1xcc10kLztcblxuZnVuY3Rpb24gaXNTbHVnKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gY2hhcnNldFJlZ2V4LnRlc3Qoc3RyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTGljZW5zZVBsYXRlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9hc3NlcnRTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsaWRhdG9ycyA9IHtcbiAgJ2NzLUNaJzogZnVuY3Rpb24gY3NDWihzdHIpIHtcbiAgICByZXR1cm4gL14oKFtBQkNERUZIS0lKS0xNTlBSU1RVVlhZWl18WzAtOV0pLT8pezUsOH0kLy50ZXN0KHN0cik7XG4gIH0sXG4gICdkZS1ERSc6IGZ1bmN0aW9uIGRlREUoc3RyKSB7XG4gICAgcmV0dXJuIC9eKChBV3xVTHxBS3xHQXxBXHUwMEQ2fExGfEFafEFNfEFTfFpFfEFOfEFCfEF8S0d8S0h8QkF8RVd8Qlp8SFl8S018QlR8SFB8QnxCQ3xCSXxCT3xGTnxUVHxcdTAwRENCfEJOfEFIfEJTfEZSfEhCfFpafEJCfEJLfEJcdTAwRDZ8T0N8T0t8Q1d8Q0V8Q3xDT3xMSHxDQnxLV3xMQ3xMTnxEQXxESXxERXxESHxTWXxOXHUwMEQ2fERPfEREfERVfEROfER8RUl8RUF8RUV8Rkl8RU18RUx8RU58UEZ8RUR8RUZ8RVJ8QVV8WlB8RXxFU3xOVHxFVXxGTHxGT3xGVHxGRnxGfEZTfEZEfEZcdTAwREN8R0V8R3xHSXxHRnxHU3xaUnxHR3xHUHxHUnxOWXxaSXxHXHUwMEQ2fEdafEdUfEhBfEhIfEhNfEhVfFdMfEhafFdSfFJOfEhLfEhEfEhOfEhTfEdLfEhFfEhGfFJafEhJfEhHfEhPfEhYfElLfElMfElOfEp8Skx8S0x8S0F8S1N8S0Z8S0V8S0l8S1R8S098S058S1J8S0N8S1V8S3xMRHxMTHxMQXxMfE9QfExNfExJfExCfExVfExcdTAwRDZ8SEx8TEd8TUR8R058TVp8TUF8TUx8TVJ8TVl8QVR8RE18TUN8Tlp8Uk18Ukd8TU18TUV8TUJ8TUl8Rkd8REx8SEN8TVd8Ukx8TUt8TUd8TVx1MDBEQ3xXU3xNSHxNfE1TfE5VfE5CfE5EfE5NfE5LfE5XfE5SfE5JfE5GfERafEVCfE9afFRHfFRPfE58T0F8R018T0J8Q0F8RUh8Rld8T0Z8T0x8T0V8T0d8Qkh8TFJ8T1N8QUF8R0R8T0h8S1l8TlB8V0t8UEJ8UEF8UEV8UEl8UFN8UHxQTXxQUnxSQXxSVnxSRXxSfEh8U0J8V058UlN8UkR8UlR8Qk18TkV8R1Z8UlB8U1V8R0x8Uk98R1x1MDBEQ3xSSHxFR3xSV3xQTnxTS3xNUXxSVXxTWnxSSXxTTHxTTXxTQ3xIUnxGWnxWU3xTV3xTTnxDUnxTRXxTSXxTT3xMUHxTR3xOSHxTUHxJWnxTVHxCRnxURXxIVnxPRHxTUnxTfEFDfERXfFpXfFRGfFRTfFRSfFRcdTAwREN8VU18UFp8VFB8VUV8VU58VUh8TU58S0t8VkJ8VnxBRXxQTHxSQ3xWR3xHV3xQV3xWUnxWS3xLQnxXQXxXVHxCRXxXTXxXRXxBUHxNT3xXV3xGQnxXWnxXSXxXQnxKRXxXRnxXT3xXfFdcdTAwREN8Qkx8WnxHQylbLSBdP1tBLVpdezEsMn1bLSBdP1xcZHsxLDR9fChBSUN8RkRCfEFCR3xTTE58U0FXfEtMWnxCVUx8RVNCfE5BQnxTVUx8V1NUfEFCSXxBWkV8QlRGfEtcdTAwRDZUfERLQnxGRVV8Uk9UfEFMWnxTTVx1MDBEQ3xXRVJ8QVVSfE5PUnxEXHUwMERDV3xCUkt8SEFCfFRcdTAwRDZMfFdPUnxCQUR8QkFSfEJFUnxCSVd8RUJTfEtFTXxNXHUwMERDQnxQRUd8QkdMfEJHRHxSRUl8V0lMfEJLU3xCSVJ8V0FUfEJPUnxCT0h8Qk9UfEJSQnxCTEt8SEhNfE5FQnxOTUJ8V1NGfExFT3xIREx8V01TfFdaTHxCXHUwMERDU3xDSEF8S1x1MDBENlp8Uk9EfFdcdTAwRENNfENMUHxORUN8Q09DfFpFTHxDT0V8Q1VYfERBSHxMRFN8REVHfERFTHxSU0x8RExHfERHRnxMQU58SEVJfE1FRHxET058S0lCfFJPS3xKXHUwMERDTHxNT058U0xFfEVCRXxFSUN8SElHfFdCU3xCSVR8UFJcdTAwREN8TElCfEVNRHxXSVR8RVJIfEhcdTAwRDZTfEVSWnxBTkF8QVNafE1BQnxNRUt8U1RMfFNaQnxGRFN8SENIfEhPUnxXT0x8RlJHfEdSQXxXT1N8RlJJfEZGQnxHQVB8R0VSfEJSTHxDTFp8R1RIfE5PSHxIR1d8R1JafExcdTAwRDZCfE5PTHxXU1d8RFVEfEhNXHUwMERDfE9IQXxLUlV8SEFMfEhBTXxIQlN8UUxCfEhWTHxOQVV8SEFTfEVCTnxHRU98SE9IfEhESHxFUkt8SEVSfFdBTnxIRUZ8Uk9GfEhCTnxBTEZ8SFNLfFVTSXxOQUl8UkVIfFNBTnxLXHUwMERDTnxcdTAwRDZIUnxIT0x8V0FSfEFSTnxCUkd8R05UfEhPR3xXT0h8S0VIfE1BSXxQQVJ8UklEfFJPTHxLTEV8R0VMfEtVU3xLWUZ8QVJUfFNESHxMREt8RElMfE1BTHxWSUJ8TEVSfEJOQXxHSEF8R1JNfE1UTHxXVVJ8TEVWfExJRnxTVEV8V0VMfExJUHxWQUl8TFVQfEhHTnxMQlp8TFdMfFBDSHxTVEJ8REFOfE1LS3xTTFx1MDBEQ3xNU1B8VEJCfE1HSHxNVEt8QklOfE1TSHxFSUx8SEVUfFNHSHxCSUR8TVlLfE1TRXxNU1R8TVx1MDBEQ1J8V1JOfE1FSXxHUkh8UklFfE1aR3xNSUx8T0JCfEJFRHxGTFx1MDBENnxNT0x8RlJXfFNFRXxTUkJ8QUlCfE1PU3xCQ0h8SUxMfFNPQnxOTVN8TkVBfFNFRnxVRkZ8TkVXfFZPSHxOREh8VERPfE5XTXxHREJ8R1ZNfFdJU3xOT018RUlOfEdBTnxMQVV8SEVCfE9IVnxPU0x8U0ZCfEVSQnxMT1N8QlNLfEtFTHxCU0J8TUVMfFdUTHxPQUx8Rlx1MDBEQ1N8TU9EfE9IWnxPUFJ8Qlx1MDBEQ1J8UEFGfFBMXHUwMEQ2fENBU3xHTEF8UkVHfFZJVHxFQ0t8U0lNfEdPQXxFTVN8RElafEdPSHxSXHUwMERDRHxTV0F8TkVTfEtcdTAwRDZOfE1FVHxMUk98Qlx1MDBEQ1p8REJSfFJPU3xURVR8SFJPfFJPV3xCUlZ8SElQfFBBTnxHUkl8U0hLfEVJU3xTUk98U09LfExCU3xTQ1p8TUVSfFFGVHxTTEZ8U0xTfEhPTXxTTEt8QVNMfEJCR3xTQkt8U0ZUfFNIR3xNR058TUVHfFpJR3xTQUR8TkVOfE9WSXxTSEF8QkxCfFNJR3xTT058U1BOfEZPUnxHVUJ8U1BCfElHQnxXTkR8U1REfFNUQXxTREx8T0JHfEhTVHxCT0d8U0hMfFBJUnxGVEx8U0VCfFNcdTAwRDZNfFNcdTAwRENXfFRJUnxTQUJ8VFVUfEFOR3xTRFR8TFx1MDBEQ058TFNafE1ITHxWRUN8VkVSfFZJRXxPVkx8QU5LfE9WUHxTQkd8VUVNfFVFUnxXTEd8R01OfE5WUHxSREd8Ulx1MDBEQ0d8REFVfEZLQnxXQUZ8V0FLfFNMWnxXRU58U09HfEFQRHxXVUd8R1VOfEVTV3xXSVp8V0VTfERJTnxCUkF8Qlx1MDBEQ0R8V0hWfEhXSXxHSEN8V1RNfFdPQnxXVU58TUFLfFNFTHxPQ0h8SE9UfFdEQSlbLSBdPygoW0EtWl1bLSBdP1xcZHsxLDR9KXwoW0EtWl17Mn1bLSBdP1xcZHsxLDN9KSkpWy0gXT8oRXxIKT8kLy50ZXN0KHN0cik7XG4gIH0sXG4gICdkZS1MSSc6IGZ1bmN0aW9uIGRlTEkoc3RyKSB7XG4gICAgcmV0dXJuIC9eRkxbLSBdP1xcZHsxLDV9W1VaXT8kLy50ZXN0KHN0cik7XG4gIH0sXG4gICdmaS1GSSc6IGZ1bmN0aW9uIGZpRkkoc3RyKSB7XG4gICAgcmV0dXJuIC9eKD89Lns0LDd9KSgoW0EtWl17MSwzfXxbMC05XXsxLDN9KVtcXHMtXT8oW0EtWl17MSwzfXxbMC05XXsxLDV9KSkkLy50ZXN0KHN0cik7XG4gIH0sXG4gICdwdC1QVCc6IGZ1bmN0aW9uIHB0UFQoc3RyKSB7XG4gICAgcmV0dXJuIC9eKFtBLVpdezJ9fFswLTldezJ9KVsgLVx1MDBCN10/KFtBLVpdezJ9fFswLTldezJ9KVsgLVx1MDBCN10/KFtBLVpdezJ9fFswLTldezJ9KSQvLnRlc3Qoc3RyKTtcbiAgfSxcbiAgJ3NxLUFMJzogZnVuY3Rpb24gc3FBTChzdHIpIHtcbiAgICByZXR1cm4gL15bQS1aXXsyfVstIF0/KChcXGR7M31bLSBdPygoW0EtWl17Mn0pfFQpKXwoUlstIF0/XFxkezN9KSkkLy50ZXN0KHN0cik7XG4gIH0sXG4gICdwdC1CUic6IGZ1bmN0aW9uIHB0QlIoc3RyKSB7XG4gICAgcmV0dXJuIC9eW0EtWl17M31bIC1dP1swLTldW0EtWl1bMC05XXsyfXxbQS1aXXszfVsgLV0/WzAtOV17NH0kLy50ZXN0KHN0cik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGlzTGljZW5zZVBsYXRlKHN0ciwgbG9jYWxlKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG5cbiAgaWYgKGxvY2FsZSBpbiB2YWxpZGF0b3JzKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRvcnNbbG9jYWxlXShzdHIpO1xuICB9IGVsc2UgaWYgKGxvY2FsZSA9PT0gJ2FueScpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsaWRhdG9ycykge1xuICAgICAgLyogZXNsaW50IGd1YXJkLWZvci1pbjogMCAqL1xuICAgICAgdmFyIHZhbGlkYXRvciA9IHZhbGlkYXRvcnNba2V5XTtcblxuICAgICAgaWYgKHZhbGlkYXRvcihzdHIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9jYWxlICdcIi5jb25jYXQobG9jYWxlLCBcIidcIikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQ7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTdHJvbmdQYXNzd29yZDtcblxudmFyIF9tZXJnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9tZXJnZVwiKSk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB1cHBlckNhc2VSZWdleCA9IC9eW0EtWl0kLztcbnZhciBsb3dlckNhc2VSZWdleCA9IC9eW2Etel0kLztcbnZhciBudW1iZXJSZWdleCA9IC9eWzAtOV0kLztcbnZhciBzeW1ib2xSZWdleCA9IC9eWy0jISRAJV4mKigpXyt8fj1ge31cXFtcXF06XCI7Jzw+PywuXFwvIF0kLztcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgbWluTGVuZ3RoOiA4LFxuICBtaW5Mb3dlcmNhc2U6IDEsXG4gIG1pblVwcGVyY2FzZTogMSxcbiAgbWluTnVtYmVyczogMSxcbiAgbWluU3ltYm9sczogMSxcbiAgcmV0dXJuU2NvcmU6IGZhbHNlLFxuICBwb2ludHNQZXJVbmlxdWU6IDEsXG4gIHBvaW50c1BlclJlcGVhdDogMC41LFxuICBwb2ludHNGb3JDb250YWluaW5nTG93ZXI6IDEwLFxuICBwb2ludHNGb3JDb250YWluaW5nVXBwZXI6IDEwLFxuICBwb2ludHNGb3JDb250YWluaW5nTnVtYmVyOiAxMCxcbiAgcG9pbnRzRm9yQ29udGFpbmluZ1N5bWJvbDogMTBcbn07XG4vKiBDb3VudHMgbnVtYmVyIG9mIG9jY3VycmVuY2VzIG9mIGVhY2ggY2hhciBpbiBhIHN0cmluZ1xuICogY291bGQgYmUgbW92ZWQgdG8gdXRpbC8gP1xuKi9cblxuZnVuY3Rpb24gY291bnRDaGFycyhzdHIpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBBcnJheS5mcm9tKHN0cikuZm9yRWFjaChmdW5jdGlvbiAoY2hhcikge1xuICAgIHZhciBjdXJWYWwgPSByZXN1bHRbY2hhcl07XG5cbiAgICBpZiAoY3VyVmFsKSB7XG4gICAgICByZXN1bHRbY2hhcl0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2NoYXJdID0gMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyogUmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGEgcGFzc3dvcmQgKi9cblxuXG5mdW5jdGlvbiBhbmFseXplUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgdmFyIGNoYXJNYXAgPSBjb3VudENoYXJzKHBhc3N3b3JkKTtcbiAgdmFyIGFuYWx5c2lzID0ge1xuICAgIGxlbmd0aDogcGFzc3dvcmQubGVuZ3RoLFxuICAgIHVuaXF1ZUNoYXJzOiBPYmplY3Qua2V5cyhjaGFyTWFwKS5sZW5ndGgsXG4gICAgdXBwZXJjYXNlQ291bnQ6IDAsXG4gICAgbG93ZXJjYXNlQ291bnQ6IDAsXG4gICAgbnVtYmVyQ291bnQ6IDAsXG4gICAgc3ltYm9sQ291bnQ6IDBcbiAgfTtcbiAgT2JqZWN0LmtleXMoY2hhck1hcCkuZm9yRWFjaChmdW5jdGlvbiAoY2hhcikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHVwcGVyQ2FzZVJlZ2V4LnRlc3QoY2hhcikpIHtcbiAgICAgIGFuYWx5c2lzLnVwcGVyY2FzZUNvdW50ICs9IGNoYXJNYXBbY2hhcl07XG4gICAgfSBlbHNlIGlmIChsb3dlckNhc2VSZWdleC50ZXN0KGNoYXIpKSB7XG4gICAgICBhbmFseXNpcy5sb3dlcmNhc2VDb3VudCArPSBjaGFyTWFwW2NoYXJdO1xuICAgIH0gZWxzZSBpZiAobnVtYmVyUmVnZXgudGVzdChjaGFyKSkge1xuICAgICAgYW5hbHlzaXMubnVtYmVyQ291bnQgKz0gY2hhck1hcFtjaGFyXTtcbiAgICB9IGVsc2UgaWYgKHN5bWJvbFJlZ2V4LnRlc3QoY2hhcikpIHtcbiAgICAgIGFuYWx5c2lzLnN5bWJvbENvdW50ICs9IGNoYXJNYXBbY2hhcl07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFuYWx5c2lzO1xufVxuXG5mdW5jdGlvbiBzY29yZVBhc3N3b3JkKGFuYWx5c2lzLCBzY29yaW5nT3B0aW9ucykge1xuICB2YXIgcG9pbnRzID0gMDtcbiAgcG9pbnRzICs9IGFuYWx5c2lzLnVuaXF1ZUNoYXJzICogc2NvcmluZ09wdGlvbnMucG9pbnRzUGVyVW5pcXVlO1xuICBwb2ludHMgKz0gKGFuYWx5c2lzLmxlbmd0aCAtIGFuYWx5c2lzLnVuaXF1ZUNoYXJzKSAqIHNjb3JpbmdPcHRpb25zLnBvaW50c1BlclJlcGVhdDtcblxuICBpZiAoYW5hbHlzaXMubG93ZXJjYXNlQ291bnQgPiAwKSB7XG4gICAgcG9pbnRzICs9IHNjb3JpbmdPcHRpb25zLnBvaW50c0ZvckNvbnRhaW5pbmdMb3dlcjtcbiAgfVxuXG4gIGlmIChhbmFseXNpcy51cHBlcmNhc2VDb3VudCA+IDApIHtcbiAgICBwb2ludHMgKz0gc2NvcmluZ09wdGlvbnMucG9pbnRzRm9yQ29udGFpbmluZ1VwcGVyO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLm51bWJlckNvdW50ID4gMCkge1xuICAgIHBvaW50cyArPSBzY29yaW5nT3B0aW9ucy5wb2ludHNGb3JDb250YWluaW5nTnVtYmVyO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLnN5bWJvbENvdW50ID4gMCkge1xuICAgIHBvaW50cyArPSBzY29yaW5nT3B0aW9ucy5wb2ludHNGb3JDb250YWluaW5nU3ltYm9sO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZnVuY3Rpb24gaXNTdHJvbmdQYXNzd29yZChzdHIpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICgwLCBfYXNzZXJ0U3RyaW5nLmRlZmF1bHQpKHN0cik7XG4gIHZhciBhbmFseXNpcyA9IGFuYWx5emVQYXNzd29yZChzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZS5kZWZhdWx0KShvcHRpb25zIHx8IHt9LCBkZWZhdWx0T3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMucmV0dXJuU2NvcmUpIHtcbiAgICByZXR1cm4gc2NvcmVQYXNzd29yZChhbmFseXNpcywgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gYW5hbHlzaXMubGVuZ3RoID49IG9wdGlvbnMubWluTGVuZ3RoICYmIGFuYWx5c2lzLmxvd2VyY2FzZUNvdW50ID49IG9wdGlvbnMubWluTG93ZXJjYXNlICYmIGFuYWx5c2lzLnVwcGVyY2FzZUNvdW50ID49IG9wdGlvbnMubWluVXBwZXJjYXNlICYmIGFuYWx5c2lzLm51bWJlckNvdW50ID49IG9wdGlvbnMubWluTnVtYmVycyAmJiBhbmFseXNpcy5zeW1ib2xDb3VudCA+PSBvcHRpb25zLm1pblN5bWJvbHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdDsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ZBVDtcbmV4cG9ydHMudmF0TWF0Y2hlcnMgPSB2b2lkIDA7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL2Fzc2VydFN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YXRNYXRjaGVycyA9IHtcbiAgR0I6IC9eR0IoKFxcZHszfSBcXGR7NH0gKFswLThdWzAtOV18OVswLTZdKSl8KFxcZHs5fSBcXGR7M30pfCgoKEdEWzAtNF0pfChIQVs1LTldKSlbMC05XXsyfSkpJC8sXG4gIElUOiAvXihJVCk/WzAtOV17MTF9JC8sXG4gIE5MOiAvXihOTCk/WzAtOV17OX1CWzAtOV17Mn0kL1xufTtcbmV4cG9ydHMudmF0TWF0Y2hlcnMgPSB2YXRNYXRjaGVycztcblxuZnVuY3Rpb24gaXNWQVQoc3RyLCBjb3VudHJ5Q29kZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShzdHIpO1xuICAoMCwgX2Fzc2VydFN0cmluZy5kZWZhdWx0KShjb3VudHJ5Q29kZSk7XG5cbiAgaWYgKGNvdW50cnlDb2RlIGluIHZhdE1hdGNoZXJzKSB7XG4gICAgcmV0dXJuIHZhdE1hdGNoZXJzW2NvdW50cnlDb2RlXS50ZXN0KHN0cik7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvdW50cnkgY29kZTogJ1wiLmNvbmNhdChjb3VudHJ5Q29kZSwgXCInXCIpKTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF90b0RhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi90b0RhdGVcIikpO1xuXG52YXIgX3RvRmxvYXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi90b0Zsb2F0XCIpKTtcblxudmFyIF90b0ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3RvSW50XCIpKTtcblxudmFyIF90b0Jvb2xlYW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi90b0Jvb2xlYW5cIikpO1xuXG52YXIgX2VxdWFscyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2VxdWFsc1wiKSk7XG5cbnZhciBfY29udGFpbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9jb250YWluc1wiKSk7XG5cbnZhciBfbWF0Y2hlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL21hdGNoZXNcIikpO1xuXG52YXIgX2lzRW1haWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0VtYWlsXCIpKTtcblxudmFyIF9pc1VSTCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzVVJMXCIpKTtcblxudmFyIF9pc01BQ0FkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc01BQ0FkZHJlc3NcIikpO1xuXG52YXIgX2lzSVAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lQXCIpKTtcblxudmFyIF9pc0lQUmFuZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lQUmFuZ2VcIikpO1xuXG52YXIgX2lzRlFETiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRlFETlwiKSk7XG5cbnZhciBfaXNEYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNEYXRlXCIpKTtcblxudmFyIF9pc0Jvb2xlYW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0Jvb2xlYW5cIikpO1xuXG52YXIgX2lzTG9jYWxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMb2NhbGVcIikpO1xuXG52YXIgX2lzQWxwaGEgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saWIvaXNBbHBoYVwiKSk7XG5cbnZhciBfaXNBbHBoYW51bWVyaWMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saWIvaXNBbHBoYW51bWVyaWNcIikpO1xuXG52YXIgX2lzTnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTnVtZXJpY1wiKSk7XG5cbnZhciBfaXNQYXNzcG9ydE51bWJlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzUGFzc3BvcnROdW1iZXJcIikpO1xuXG52YXIgX2lzUG9ydCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzUG9ydFwiKSk7XG5cbnZhciBfaXNMb3dlcmNhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0xvd2VyY2FzZVwiKSk7XG5cbnZhciBfaXNVcHBlcmNhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1VwcGVyY2FzZVwiKSk7XG5cbnZhciBfaXNJTUVJID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJTUVJXCIpKTtcblxudmFyIF9pc0FzY2lpID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNBc2NpaVwiKSk7XG5cbnZhciBfaXNGdWxsV2lkdGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0Z1bGxXaWR0aFwiKSk7XG5cbnZhciBfaXNIYWxmV2lkdGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0hhbGZXaWR0aFwiKSk7XG5cbnZhciBfaXNWYXJpYWJsZVdpZHRoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNWYXJpYWJsZVdpZHRoXCIpKTtcblxudmFyIF9pc011bHRpYnl0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTXVsdGlieXRlXCIpKTtcblxudmFyIF9pc1NlbVZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzU2VtVmVyXCIpKTtcblxudmFyIF9pc1N1cnJvZ2F0ZVBhaXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1N1cnJvZ2F0ZVBhaXJcIikpO1xuXG52YXIgX2lzSW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJbnRcIikpO1xuXG52YXIgX2lzRmxvYXQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saWIvaXNGbG9hdFwiKSk7XG5cbnZhciBfaXNEZWNpbWFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNEZWNpbWFsXCIpKTtcblxudmFyIF9pc0hleGFkZWNpbWFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNIZXhhZGVjaW1hbFwiKSk7XG5cbnZhciBfaXNPY3RhbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzT2N0YWxcIikpO1xuXG52YXIgX2lzRGl2aXNpYmxlQnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0RpdmlzaWJsZUJ5XCIpKTtcblxudmFyIF9pc0hleENvbG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNIZXhDb2xvclwiKSk7XG5cbnZhciBfaXNSZ2JDb2xvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzUmdiQ29sb3JcIikpO1xuXG52YXIgX2lzSFNMID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNIU0xcIikpO1xuXG52YXIgX2lzSVNSQyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNSQ1wiKSk7XG5cbnZhciBfaXNJQkFOID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbGliL2lzSUJBTlwiKSk7XG5cbnZhciBfaXNCSUMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0JJQ1wiKSk7XG5cbnZhciBfaXNNRCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTUQ1XCIpKTtcblxudmFyIF9pc0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0hhc2hcIikpO1xuXG52YXIgX2lzSldUID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNKV1RcIikpO1xuXG52YXIgX2lzSlNPTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSlNPTlwiKSk7XG5cbnZhciBfaXNFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRW1wdHlcIikpO1xuXG52YXIgX2lzTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMZW5ndGhcIikpO1xuXG52YXIgX2lzQnl0ZUxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQnl0ZUxlbmd0aFwiKSk7XG5cbnZhciBfaXNVVUlEID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNVVUlEXCIpKTtcblxudmFyIF9pc01vbmdvSWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc01vbmdvSWRcIikpO1xuXG52YXIgX2lzQWZ0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0FmdGVyXCIpKTtcblxudmFyIF9pc0JlZm9yZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQmVmb3JlXCIpKTtcblxudmFyIF9pc0luID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJblwiKSk7XG5cbnZhciBfaXNDcmVkaXRDYXJkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNDcmVkaXRDYXJkXCIpKTtcblxudmFyIF9pc0lkZW50aXR5Q2FyZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSWRlbnRpdHlDYXJkXCIpKTtcblxudmFyIF9pc0VBTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRUFOXCIpKTtcblxudmFyIF9pc0lTSU4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTSU5cIikpO1xuXG52YXIgX2lzSVNCTiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNCTlwiKSk7XG5cbnZhciBfaXNJU1NOID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNJU1NOXCIpKTtcblxudmFyIF9pc1RheElEID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNUYXhJRFwiKSk7XG5cbnZhciBfaXNNb2JpbGVQaG9uZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9pc01vYmlsZVBob25lXCIpKTtcblxudmFyIF9pc0V0aGVyZXVtQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzRXRoZXJldW1BZGRyZXNzXCIpKTtcblxudmFyIF9pc0N1cnJlbmN5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNDdXJyZW5jeVwiKSk7XG5cbnZhciBfaXNCdGNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCdGNBZGRyZXNzXCIpKTtcblxudmFyIF9pc0lTTyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNPODYwMVwiKSk7XG5cbnZhciBfaXNSRkMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc1JGQzMzMzlcIikpO1xuXG52YXIgX2lzSVNPMzE2NjFBbHBoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzSVNPMzE2NjFBbHBoYTJcIikpO1xuXG52YXIgX2lzSVNPMzE2NjFBbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTTzMxNjYxQWxwaGEzXCIpKTtcblxudmFyIF9pc0lTTzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0lTTzQyMTdcIikpO1xuXG52YXIgX2lzQmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzQmFzZTMyXCIpKTtcblxudmFyIF9pc0Jhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNCYXNlNThcIikpO1xuXG52YXIgX2lzQmFzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0Jhc2U2NFwiKSk7XG5cbnZhciBfaXNEYXRhVVJJID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNEYXRhVVJJXCIpKTtcblxudmFyIF9pc01hZ25ldFVSSSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzTWFnbmV0VVJJXCIpKTtcblxudmFyIF9pc01pbWVUeXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNNaW1lVHlwZVwiKSk7XG5cbnZhciBfaXNMYXRMb25nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNMYXRMb25nXCIpKTtcblxudmFyIF9pc1Bvc3RhbENvZGUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saWIvaXNQb3N0YWxDb2RlXCIpKTtcblxudmFyIF9sdHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2x0cmltXCIpKTtcblxudmFyIF9ydHJpbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3J0cmltXCIpKTtcblxudmFyIF90cmltID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdHJpbVwiKSk7XG5cbnZhciBfZXNjYXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvZXNjYXBlXCIpKTtcblxudmFyIF91bmVzY2FwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3VuZXNjYXBlXCIpKTtcblxudmFyIF9zdHJpcExvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0cmlwTG93XCIpKTtcblxudmFyIF93aGl0ZWxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi93aGl0ZWxpc3RcIikpO1xuXG52YXIgX2JsYWNrbGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2JsYWNrbGlzdFwiKSk7XG5cbnZhciBfaXNXaGl0ZWxpc3RlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzV2hpdGVsaXN0ZWRcIikpO1xuXG52YXIgX25vcm1hbGl6ZUVtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvbm9ybWFsaXplRW1haWxcIikpO1xuXG52YXIgX2lzU2x1ZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzU2x1Z1wiKSk7XG5cbnZhciBfaXNMaWNlbnNlUGxhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9pc0xpY2Vuc2VQbGF0ZVwiKSk7XG5cbnZhciBfaXNTdHJvbmdQYXNzd29yZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2lzU3Ryb25nUGFzc3dvcmRcIikpO1xuXG52YXIgX2lzVkFUID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvaXNWQVRcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmVyc2lvbiA9ICcxMy43LjAnO1xudmFyIHZhbGlkYXRvciA9IHtcbiAgdmVyc2lvbjogdmVyc2lvbixcbiAgdG9EYXRlOiBfdG9EYXRlLmRlZmF1bHQsXG4gIHRvRmxvYXQ6IF90b0Zsb2F0LmRlZmF1bHQsXG4gIHRvSW50OiBfdG9JbnQuZGVmYXVsdCxcbiAgdG9Cb29sZWFuOiBfdG9Cb29sZWFuLmRlZmF1bHQsXG4gIGVxdWFsczogX2VxdWFscy5kZWZhdWx0LFxuICBjb250YWluczogX2NvbnRhaW5zLmRlZmF1bHQsXG4gIG1hdGNoZXM6IF9tYXRjaGVzLmRlZmF1bHQsXG4gIGlzRW1haWw6IF9pc0VtYWlsLmRlZmF1bHQsXG4gIGlzVVJMOiBfaXNVUkwuZGVmYXVsdCxcbiAgaXNNQUNBZGRyZXNzOiBfaXNNQUNBZGRyZXNzLmRlZmF1bHQsXG4gIGlzSVA6IF9pc0lQLmRlZmF1bHQsXG4gIGlzSVBSYW5nZTogX2lzSVBSYW5nZS5kZWZhdWx0LFxuICBpc0ZRRE46IF9pc0ZRRE4uZGVmYXVsdCxcbiAgaXNCb29sZWFuOiBfaXNCb29sZWFuLmRlZmF1bHQsXG4gIGlzSUJBTjogX2lzSUJBTi5kZWZhdWx0LFxuICBpc0JJQzogX2lzQklDLmRlZmF1bHQsXG4gIGlzQWxwaGE6IF9pc0FscGhhLmRlZmF1bHQsXG4gIGlzQWxwaGFMb2NhbGVzOiBfaXNBbHBoYS5sb2NhbGVzLFxuICBpc0FscGhhbnVtZXJpYzogX2lzQWxwaGFudW1lcmljLmRlZmF1bHQsXG4gIGlzQWxwaGFudW1lcmljTG9jYWxlczogX2lzQWxwaGFudW1lcmljLmxvY2FsZXMsXG4gIGlzTnVtZXJpYzogX2lzTnVtZXJpYy5kZWZhdWx0LFxuICBpc1Bhc3Nwb3J0TnVtYmVyOiBfaXNQYXNzcG9ydE51bWJlci5kZWZhdWx0LFxuICBpc1BvcnQ6IF9pc1BvcnQuZGVmYXVsdCxcbiAgaXNMb3dlcmNhc2U6IF9pc0xvd2VyY2FzZS5kZWZhdWx0LFxuICBpc1VwcGVyY2FzZTogX2lzVXBwZXJjYXNlLmRlZmF1bHQsXG4gIGlzQXNjaWk6IF9pc0FzY2lpLmRlZmF1bHQsXG4gIGlzRnVsbFdpZHRoOiBfaXNGdWxsV2lkdGguZGVmYXVsdCxcbiAgaXNIYWxmV2lkdGg6IF9pc0hhbGZXaWR0aC5kZWZhdWx0LFxuICBpc1ZhcmlhYmxlV2lkdGg6IF9pc1ZhcmlhYmxlV2lkdGguZGVmYXVsdCxcbiAgaXNNdWx0aWJ5dGU6IF9pc011bHRpYnl0ZS5kZWZhdWx0LFxuICBpc1NlbVZlcjogX2lzU2VtVmVyLmRlZmF1bHQsXG4gIGlzU3Vycm9nYXRlUGFpcjogX2lzU3Vycm9nYXRlUGFpci5kZWZhdWx0LFxuICBpc0ludDogX2lzSW50LmRlZmF1bHQsXG4gIGlzSU1FSTogX2lzSU1FSS5kZWZhdWx0LFxuICBpc0Zsb2F0OiBfaXNGbG9hdC5kZWZhdWx0LFxuICBpc0Zsb2F0TG9jYWxlczogX2lzRmxvYXQubG9jYWxlcyxcbiAgaXNEZWNpbWFsOiBfaXNEZWNpbWFsLmRlZmF1bHQsXG4gIGlzSGV4YWRlY2ltYWw6IF9pc0hleGFkZWNpbWFsLmRlZmF1bHQsXG4gIGlzT2N0YWw6IF9pc09jdGFsLmRlZmF1bHQsXG4gIGlzRGl2aXNpYmxlQnk6IF9pc0RpdmlzaWJsZUJ5LmRlZmF1bHQsXG4gIGlzSGV4Q29sb3I6IF9pc0hleENvbG9yLmRlZmF1bHQsXG4gIGlzUmdiQ29sb3I6IF9pc1JnYkNvbG9yLmRlZmF1bHQsXG4gIGlzSFNMOiBfaXNIU0wuZGVmYXVsdCxcbiAgaXNJU1JDOiBfaXNJU1JDLmRlZmF1bHQsXG4gIGlzTUQ1OiBfaXNNRC5kZWZhdWx0LFxuICBpc0hhc2g6IF9pc0hhc2guZGVmYXVsdCxcbiAgaXNKV1Q6IF9pc0pXVC5kZWZhdWx0LFxuICBpc0pTT046IF9pc0pTT04uZGVmYXVsdCxcbiAgaXNFbXB0eTogX2lzRW1wdHkuZGVmYXVsdCxcbiAgaXNMZW5ndGg6IF9pc0xlbmd0aC5kZWZhdWx0LFxuICBpc0xvY2FsZTogX2lzTG9jYWxlLmRlZmF1bHQsXG4gIGlzQnl0ZUxlbmd0aDogX2lzQnl0ZUxlbmd0aC5kZWZhdWx0LFxuICBpc1VVSUQ6IF9pc1VVSUQuZGVmYXVsdCxcbiAgaXNNb25nb0lkOiBfaXNNb25nb0lkLmRlZmF1bHQsXG4gIGlzQWZ0ZXI6IF9pc0FmdGVyLmRlZmF1bHQsXG4gIGlzQmVmb3JlOiBfaXNCZWZvcmUuZGVmYXVsdCxcbiAgaXNJbjogX2lzSW4uZGVmYXVsdCxcbiAgaXNDcmVkaXRDYXJkOiBfaXNDcmVkaXRDYXJkLmRlZmF1bHQsXG4gIGlzSWRlbnRpdHlDYXJkOiBfaXNJZGVudGl0eUNhcmQuZGVmYXVsdCxcbiAgaXNFQU46IF9pc0VBTi5kZWZhdWx0LFxuICBpc0lTSU46IF9pc0lTSU4uZGVmYXVsdCxcbiAgaXNJU0JOOiBfaXNJU0JOLmRlZmF1bHQsXG4gIGlzSVNTTjogX2lzSVNTTi5kZWZhdWx0LFxuICBpc01vYmlsZVBob25lOiBfaXNNb2JpbGVQaG9uZS5kZWZhdWx0LFxuICBpc01vYmlsZVBob25lTG9jYWxlczogX2lzTW9iaWxlUGhvbmUubG9jYWxlcyxcbiAgaXNQb3N0YWxDb2RlOiBfaXNQb3N0YWxDb2RlLmRlZmF1bHQsXG4gIGlzUG9zdGFsQ29kZUxvY2FsZXM6IF9pc1Bvc3RhbENvZGUubG9jYWxlcyxcbiAgaXNFdGhlcmV1bUFkZHJlc3M6IF9pc0V0aGVyZXVtQWRkcmVzcy5kZWZhdWx0LFxuICBpc0N1cnJlbmN5OiBfaXNDdXJyZW5jeS5kZWZhdWx0LFxuICBpc0J0Y0FkZHJlc3M6IF9pc0J0Y0FkZHJlc3MuZGVmYXVsdCxcbiAgaXNJU084NjAxOiBfaXNJU08uZGVmYXVsdCxcbiAgaXNSRkMzMzM5OiBfaXNSRkMuZGVmYXVsdCxcbiAgaXNJU08zMTY2MUFscGhhMjogX2lzSVNPMzE2NjFBbHBoYS5kZWZhdWx0LFxuICBpc0lTTzMxNjYxQWxwaGEzOiBfaXNJU08zMTY2MUFscGhhMi5kZWZhdWx0LFxuICBpc0lTTzQyMTc6IF9pc0lTTzIuZGVmYXVsdCxcbiAgaXNCYXNlMzI6IF9pc0Jhc2UuZGVmYXVsdCxcbiAgaXNCYXNlNTg6IF9pc0Jhc2UyLmRlZmF1bHQsXG4gIGlzQmFzZTY0OiBfaXNCYXNlMy5kZWZhdWx0LFxuICBpc0RhdGFVUkk6IF9pc0RhdGFVUkkuZGVmYXVsdCxcbiAgaXNNYWduZXRVUkk6IF9pc01hZ25ldFVSSS5kZWZhdWx0LFxuICBpc01pbWVUeXBlOiBfaXNNaW1lVHlwZS5kZWZhdWx0LFxuICBpc0xhdExvbmc6IF9pc0xhdExvbmcuZGVmYXVsdCxcbiAgbHRyaW06IF9sdHJpbS5kZWZhdWx0LFxuICBydHJpbTogX3J0cmltLmRlZmF1bHQsXG4gIHRyaW06IF90cmltLmRlZmF1bHQsXG4gIGVzY2FwZTogX2VzY2FwZS5kZWZhdWx0LFxuICB1bmVzY2FwZTogX3VuZXNjYXBlLmRlZmF1bHQsXG4gIHN0cmlwTG93OiBfc3RyaXBMb3cuZGVmYXVsdCxcbiAgd2hpdGVsaXN0OiBfd2hpdGVsaXN0LmRlZmF1bHQsXG4gIGJsYWNrbGlzdDogX2JsYWNrbGlzdC5kZWZhdWx0LFxuICBpc1doaXRlbGlzdGVkOiBfaXNXaGl0ZWxpc3RlZC5kZWZhdWx0LFxuICBub3JtYWxpemVFbWFpbDogX25vcm1hbGl6ZUVtYWlsLmRlZmF1bHQsXG4gIHRvU3RyaW5nOiB0b1N0cmluZyxcbiAgaXNTbHVnOiBfaXNTbHVnLmRlZmF1bHQsXG4gIGlzU3Ryb25nUGFzc3dvcmQ6IF9pc1N0cm9uZ1Bhc3N3b3JkLmRlZmF1bHQsXG4gIGlzVGF4SUQ6IF9pc1RheElELmRlZmF1bHQsXG4gIGlzRGF0ZTogX2lzRGF0ZS5kZWZhdWx0LFxuICBpc0xpY2Vuc2VQbGF0ZTogX2lzTGljZW5zZVBsYXRlLmRlZmF1bHQsXG4gIGlzVkFUOiBfaXNWQVQuZGVmYXVsdCxcbiAgaWJhbkxvY2FsZXM6IF9pc0lCQU4ubG9jYWxlc1xufTtcbnZhciBfZGVmYXVsdCA9IHZhbGlkYXRvcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0OyIsICJpbXBvcnQgeyBWYWxpZGF0aW9uUGFyYW1zIH0gZnJvbSBcIi4vdmFsaWRhdGlvblwiO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6IFwidGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuICBlbWFpbDogXCJpbnZhbGlkIGVtYWlsIGZvcm1hdFwiLFxuICBtaW5MZW5ndGg6IFwiOCsgY2hhcmFjdGVyc1wiLFxuICBoYXNMb3dlckNhc2U6IFwibG93ZXJjYXNlIGxldHRlclwiLFxuICBoYXNVcHBlckNhc2U6IFwidXBwZXJjYXNlIGxldHRlclwiLFxuICBoYXNOdW1iZXI6IFwibnVtYmVyXCIsXG4gIGhhc1NwZWNpYWxDaGFyOiBcInNwZWNpYWwgY2hhcmFjdGVyXCIsXG59O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogeyB2YWxpZDogYm9vbGVhbjsgcGVybWFuZW50OiBib29sZWFuIH0pID0+IHtcbiAgY29uc3QgRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBkaXNwYWx5ID0gb3B0aW9ucy5wZXJtYW5lbnQgfHwgIW9wdGlvbnMudmFsaWQgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xuICBESVYuaW5uZXJIVE1MID0gLyoqIGh0bWwgKi8gYFxuICAgIDxkaXYgc3R5bGU9XCJcbiAgICBkaXNwbGF5OiAke2Rpc3BhbHl9OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodClcIj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJcbiAgICAgICAgY29sb3I6ICR7b3B0aW9ucz8udmFsaWQgPyBcIiMwMDlFMkRcIiA6IFwiIzlFMDAwMFwifTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHhcIj4ke29wdGlvbnMudmFsaWQgPyBcIlx1MjcxNFx1RkUwRVwiIDogXCJcdTI3MThcIn0gPC9zcGFuPlxuICAgICAgICA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgcmV0dXJuIERJVjtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJWYWxpZGF0b3JzID0gKFxuICB2YWxpZGF0aW9uUGFyYW1zOiBWYWxpZGF0aW9uUGFyYW1zLFxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCxcbiAgb3B0aW9ucz86IHtcbiAgICBwZXJtYW5lbnQ/OiBBcnJheTxzdHJpbmc+O1xuICB9XG4pID0+IHtcbiAgaWYgKCFpbnB1dC5pZCkge1xuICAgIHRocm93IFwiaW5wdXQgaWQgaXMgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb25cIjtcbiAgfVxuXG4gIGlmICghdmFsaWRhdGlvblBhcmFtcy52YWxpZGF0b3JzKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgZm9yIChjb25zdCB2YWxpZGF0b3IgaW4gdmFsaWRhdGlvblBhcmFtcy52YWxpZGF0b3JzKSB7XG4gICAgaWYgKHZhbGlkYXRvciBpbiBtZXNzYWdlcykge1xuICAgICAgY29uc3QgcGVybSA9IG9wdGlvbnM/LnBlcm1hbmVudD8uaW5jbHVkZXModmFsaWRhdG9yKTtcbiAgICAgIGNvbnN0IHRvdWNoZWQgPSB2YWxpZGF0aW9uUGFyYW1zLnRvdWNoZWQ7XG5cbiAgICAgIGlmICghcGVybSAmJiAhdG91Y2hlZCkgY29udGludWU7XG4gICAgICBpdGVtcy5wdXNoKFxuICAgICAgICBjcmVhdGVFbGVtZW50KG1lc3NhZ2VzW3ZhbGlkYXRvcl0sIHtcbiAgICAgICAgICBwZXJtYW5lbnQ6IHBlcm0sXG4gICAgICAgICAgdmFsaWQ6IHZhbGlkYXRpb25QYXJhbXMudmFsaWRhdG9yc1t2YWxpZGF0b3JdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpZCA9IGAke2lucHV0LmlkfV92YWxpZGF0b3JgO1xuICBjb25zdCByZW5kZXJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgcmVuZGVyZWQgJiYgcmVuZGVyZWQucmVtb3ZlKCk7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiY2FsYyh2YXIoLS1hcHAtc3BhY2luZykgLSAzcHgpXCI7XG4gIHdyYXBwZXIuaWQgPSBpZDtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xuXG4gIGlucHV0Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHdyYXBwZXIpO1xufTtcbiIsICJpbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcbmltcG9ydCB0eXBlIHsgSXNFbWFpbE9wdGlvbnMgfSBmcm9tIFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCI7XG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uUGFyYW1zID0ge1xuICB0b3VjaGVkOiBib29sZWFuO1xuICB2YWxpZDogYm9vbGVhbjtcbiAgZGlydHk6IGJvb2xlYW47XG4gIHZhbHVlOiBhbnk7XG4gIFtrOiBzdHJpbmddOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IFwiXCIpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59O1xuZXhwb3J0IGNvbnN0IGVtYWlsID0gKHZhbDogc3RyaW5nKSA9PiB2YWxpZGF0b3IuaXNFbWFpbCh2YWwpO1xuZXhwb3J0IGNvbnN0IGVtYWlsV2l0aE9wdGlvbnMgPSAob3B0aW9ucz86IElzRW1haWxPcHRpb25zKSA9PiAodmFsOiBzdHJpbmcpID0+XG4gIHZhbGlkYXRvci5pc0VtYWlsKHZhbCwgb3B0aW9ucyk7XG5leHBvcnQgY29uc3QgbWluTGVuZ3RoID0gKGxlbmd0aDogbnVtYmVyKSA9PiAodmFsOiBzdHJpbmcpID0+IHZhbC5sZW5ndGggPj0gbGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgbWF4TGVuZ3RoID0gKGxlbmd0aDogbnVtYmVyKSA9PiAodmFsOiBzdHJpbmcpID0+IHZhbC5sZW5ndGggPD0gbGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgaGFzVXBwZXJDYXNlID0gKHZhbDogc3RyaW5nKSA9PiB2YWwudG9Mb3dlckNhc2UoKSAhPT0gdmFsO1xuZXhwb3J0IGNvbnN0IGhhc0xvd2VyQ2FzZSA9ICh2YWw6IHN0cmluZykgPT4gdmFsLnRvVXBwZXJDYXNlKCkgIT09IHZhbDtcbmV4cG9ydCBjb25zdCBoYXNOdW1iZXIgPSAodmFsOiBzdHJpbmcpID0+ICEhdmFsLm1hdGNoKC9cXGQrL2cpO1xuZXhwb3J0IGNvbnN0IGhhc1NwZWNpYWxDaGFyID0gKHZhbDogc3RyaW5nKSA9PiAvWyBgIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/fl0vLnRlc3QodmFsKTtcblxuY29uc3QgaGFuZGxlVmFsaWRhdG9ycyA9ICh2YWw6IHN0cmluZywgdmFsaWRhdG9yczogYW55KSA9PiB7XG4gIGlmICghdmFsaWRhdG9yKSByZXR1cm47XG4gIGxldCByZXN1bHQgPSB7fTtcbiAgZm9yIChjb25zdCBrIGluIHZhbGlkYXRvcnMpIHtcbiAgICByZXN1bHRba10gPSB2YWxpZGF0b3JzW2tdKHZhbCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbGlkYXRpb24oXG4gIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gIHZhbGlkYXRvcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBjYWxsYmFjazogKHZhbGlkYXRpb246IFZhbGlkYXRpb25QYXJhbXMpID0+IHZvaWRcbikge1xuICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBFcnJvcihcIkVsZW1lbnQgY2FuJ3QgYmUgdW5kaWZpZW5kXCIpO1xuICB9XG5cbiAgbGV0IHZhbDogc3RyaW5nLFxuICAgIHZhbGlkYXRpb25CYXNlOiBWYWxpZGF0aW9uUGFyYW1zID0ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgZ2V0IHZhbGlkKCkge1xuICAgICAgICByZXR1cm4gIU9iamVjdC52YWx1ZXModGhpcy52YWxpZGF0b3JzKS5pbmNsdWRlcyhmYWxzZSk7XG4gICAgICB9LFxuICAgICAgZGlydHk6IGZhbHNlLFxuICAgIH07XG5cbiAgdmFsID0gZWxlbWVudC52YWx1ZTtcbiAgdmFsaWRhdGlvbkJhc2UudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gIHZhbGlkYXRpb25CYXNlLnZhbGlkYXRvcnMgPSBoYW5kbGVWYWxpZGF0b3JzKHZhbCwgdmFsaWRhdG9ycyk7XG5cbiAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodmFsaWRhdGlvbkJhc2UpO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgIHZhbGlkYXRpb25CYXNlLnRvdWNoZWQgPSB0cnVlO1xuICAgIHZhbGlkYXRpb25CYXNlLnZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh2YWxpZGF0aW9uQmFzZSk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlOiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbCA9ICg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkudmFsdWU7XG4gICAgdmFsaWRhdGlvbkJhc2UuZGlydHkgPSB0cnVlO1xuICAgIHZhbGlkYXRpb25CYXNlLnZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICB2YWxpZGF0aW9uQmFzZS52YWxpZGF0b3JzID0gaGFuZGxlVmFsaWRhdG9ycyh2YWwsIHZhbGlkYXRvcnMpO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHZhbGlkYXRpb25CYXNlKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFrZURpcnR5ID0gKCkgPT4ge1xuICAgIHZhbGlkYXRpb25CYXNlLmRpcnR5ID0gdHJ1ZTtcbiAgICB2YWxpZGF0aW9uQmFzZS50b3VjaGVkID0gdHJ1ZTtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh2YWxpZGF0aW9uQmFzZSk7XG4gIH07XG5cbiAgcmV0dXJuIG1ha2VEaXJ0eTtcbn1cbiIsICJpbXBvcnQgeyByZW5kZXJWYWxpZGF0b3JzIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgVmFsaWRhdGlvbiwge1xuICBlbWFpbCxcbiAgcmVxdWlyZWQsXG4gIG1pbkxlbmd0aCxcbiAgaGFzVXBwZXJDYXNlLFxuICBoYXNMb3dlckNhc2UsXG4gIGhhc051bWJlcixcbiAgaGFzU3BlY2lhbENoYXIsXG59IGZyb20gXCIuL3ZhbGlkYXRpb24uanNcIjtcblxuY29uc3QgcmVnaXN0ZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3Rlcl9mb3JtXCIpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZ2lzdGVyX2VtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3Rlcl9wYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG5jb25zdCBmb3JtVmFsaWRhdGlvbiA9IHtcbiAgZW1haWw6IG51bGwsXG4gIHBhc3N3b3JkOiBudWxsLFxufTtcblxuY29uc3QgbWFrZUVtYWlsRGlydHkgPSBWYWxpZGF0aW9uKFxuICBlbWFpbElucHV0LFxuICB7XG4gICAgZW1haWwsXG4gICAgcmVxdWlyZWQsXG4gIH0sXG4gICh2YWxpZGF0aW9uUGFyYW1zKSA9PiB7XG4gICAgZm9ybVZhbGlkYXRpb24uZW1haWwgPSB2YWxpZGF0aW9uUGFyYW1zO1xuICAgIHJlbmRlclZhbGlkYXRvcnModmFsaWRhdGlvblBhcmFtcywgZW1haWxJbnB1dCk7XG4gIH1cbik7XG5cbmNvbnN0IG1ha2VQYXNzd29yZERpcnR5ID0gVmFsaWRhdGlvbihcbiAgcGFzc3dvcmRJbnB1dCxcbiAge1xuICAgIHJlcXVpcmVkLFxuICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDgpLFxuICAgIGhhc1VwcGVyQ2FzZSxcbiAgICBoYXNOdW1iZXIsXG4gICAgaGFzU3BlY2lhbENoYXIsXG4gICAgaGFzTG93ZXJDYXNlLFxuICB9LFxuICAodmFsaWRhdGlvblBhcmFtcykgPT4ge1xuICAgIGZvcm1WYWxpZGF0aW9uLnBhc3N3b3JkID0gdmFsaWRhdGlvblBhcmFtcztcbiAgICByZW5kZXJWYWxpZGF0b3JzKHZhbGlkYXRpb25QYXJhbXMsIHBhc3N3b3JkSW5wdXQsIHtcbiAgICAgIHBlcm1hbmVudDogW1wibWluTGVuZ3RoXCIsIFwiaGFzTG93ZXJDYXNlXCIsIFwiaGFzVXBwZXJDYXNlXCIsIFwiaGFzTnVtYmVyXCIsIFwiaGFzU3BlY2lhbENoYXJcIl0sXG4gICAgfSk7XG4gIH1cbik7XG5cbmNvbnN0IG9uU3VibWl0ID0gKGU6IEV2ZW50KSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFmb3JtVmFsaWRhdGlvbi5lbWFpbC52YWxpZCB8fCAhZm9ybVZhbGlkYXRpb24ucGFzc3dvcmQudmFsaWQpIHtcbiAgICBtYWtlRW1haWxEaXJ0eSgpO1xuICAgIG1ha2VQYXNzd29yZERpcnR5KCk7XG4gICAgYWxlcnQoXCJpbnZhbGlkIGlucHV0cyFcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWxlcnQoXG4gICAgYHN1Y2Nlc3M6IGVtYWlsOiAke2Zvcm1WYWxpZGF0aW9uLmVtYWlsLnZhbHVlfSB8IHBhc3N3b3JkOiAke2Zvcm1WYWxpZGF0aW9uLnBhc3N3b3JkLnZhbHVlfWBcbiAgKTtcbn07XG5cbnJlZ2lzdGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIG9uU3VibWl0KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsYUFBUyxRQUFRLEtBQUs7QUFBRTtBQUEyQixVQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sT0FBTyxhQUFhLFVBQVU7QUFBRSxrQkFBVSxTQUFTQSxTQUFRQyxNQUFLO0FBQUUsaUJBQU8sT0FBT0E7QUFBQSxRQUFLO0FBQUEsTUFBRyxPQUFPO0FBQUUsa0JBQVUsU0FBU0QsU0FBUUMsTUFBSztBQUFFLGlCQUFPQSxRQUFPLE9BQU8sV0FBVyxjQUFjQSxLQUFJLGdCQUFnQixVQUFVQSxTQUFRLE9BQU8sWUFBWSxXQUFXLE9BQU9BO0FBQUEsUUFBSztBQUFBLE1BQUc7QUFBRSxhQUFPLFFBQVEsR0FBRztBQUFBLElBQUc7QUFFelgsYUFBUyxhQUFhLE9BQU87QUFDM0IsVUFBSSxXQUFXLE9BQU8sVUFBVSxZQUFZLGlCQUFpQjtBQUU3RCxVQUFJLENBQUMsVUFBVTtBQUNiLFlBQUksY0FBYyxRQUFRLEtBQUs7QUFFL0IsWUFBSSxVQUFVO0FBQU0sd0JBQWM7QUFBQSxpQkFBZ0IsZ0JBQWdCO0FBQVUsd0JBQWMsTUFBTSxZQUFZO0FBQzVHLGNBQU0sSUFBSSxVQUFVLG9DQUFvQyxPQUFPLFdBQVcsQ0FBQztBQUFBLE1BQzdFO0FBQUEsSUFDRjtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUNyQmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsYUFBUyxPQUFPLE1BQU07QUFDcEIsT0FBQyxHQUFHLGNBQWMsU0FBUyxJQUFJO0FBQy9CLGFBQU8sS0FBSyxNQUFNLElBQUk7QUFDdEIsYUFBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUk7QUFBQSxJQUN6QztBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUNsQmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxlQUFlLFFBQVEsYUFBYSxRQUFRLGVBQWUsUUFBUSxnQkFBZ0IsUUFBUSxpQkFBaUIsUUFBUSxVQUFVLFFBQVEsZUFBZSxRQUFRLFFBQVE7QUFDN0ssUUFBSSxRQUFRO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUNBLFlBQVEsUUFBUTtBQUNoQixRQUFJLGVBQWU7QUFBQSxNQUNqQixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsSUFDWDtBQUNBLFlBQVEsZUFBZTtBQUN2QixRQUFJLFVBQVU7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULElBQUk7QUFBQSxJQUNOO0FBQ0EsWUFBUSxVQUFVO0FBQ2xCLFFBQUksaUJBQWlCLENBQUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUM5RCxZQUFRLGlCQUFpQjtBQUV6QixTQUFpQixJQUFJLEdBQUcsSUFBSSxlQUFlLFFBQVEsS0FBSztBQUN0RCxl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O0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsSUFDTjtBQWFBLGFBQVMsbUJBQW1CLEtBQUs7QUFFL0IsVUFBSSxjQUFjLElBQUksUUFBUSxhQUFhLEVBQUUsRUFBRSxZQUFZO0FBQzNELFVBQUksaUJBQWlCLFlBQVksTUFBTSxHQUFHLENBQUMsRUFBRSxZQUFZO0FBQ3pELGFBQU8sa0JBQWtCLCtCQUErQiw0QkFBNEIsZ0JBQWdCLEtBQUssV0FBVztBQUFBLElBQ3RIO0FBZ0JBLGFBQVMscUJBQXFCLEtBQUs7QUFDakMsVUFBSSxjQUFjLElBQUksUUFBUSxnQkFBZ0IsRUFBRSxFQUFFLFlBQVk7QUFFOUQsVUFBSSxhQUFhLFlBQVksTUFBTSxDQUFDLElBQUksWUFBWSxNQUFNLEdBQUcsQ0FBQztBQUM5RCxVQUFJLDhCQUE4QixXQUFXLFFBQVEsVUFBVSxTQUFVLE1BQU07QUFDN0UsZUFBTyxLQUFLLFdBQVcsQ0FBQyxJQUFJO0FBQUEsTUFDOUIsQ0FBQztBQUNELFVBQUksWUFBWSw0QkFBNEIsTUFBTSxVQUFVLEVBQUUsT0FBTyxTQUFVLEtBQUssT0FBTztBQUN6RixlQUFPLE9BQU8sTUFBTSxLQUFLLElBQUk7QUFBQSxNQUMvQixHQUFHLEVBQUU7QUFDTCxhQUFPLGNBQWM7QUFBQSxJQUN2QjtBQUVBLGFBQVMsT0FBTyxLQUFLO0FBQ25CLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixhQUFPLG1CQUFtQixHQUFHLEtBQUsscUJBQXFCLEdBQUc7QUFBQSxJQUM1RDtBQUVBLFFBQUksVUFBVSxPQUFPLEtBQUssMkJBQTJCO0FBQ3JELFlBQVEsVUFBVTtBQUFBO0FBQUE7OztBQ3JKbEI7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFDbEIsWUFBUSxlQUFlO0FBRXZCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFHOUYsUUFBSSxvQ0FBb0Msb0JBQUksSUFBSSxDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxN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QUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRXZVLFlBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRXZRLFlBQUksWUFBWSxJQUFJLEtBQUs7QUFFekIsWUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEdBQUc7QUFDeEIsaUJBQU87QUFBQSxRQUNUO0FBRUEsWUFBSSxJQUFJO0FB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UztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLElBQ1g7QUFJQSxXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUN6QixXQUFPLFdBQVcsT0FBTztBQUV6QixhQUFTLGNBQWMsS0FBSyxRQUFRLFNBQVM7QUFDM0MsT0FBQyxHQUFH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T0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUssQ0FBQztBQUUvdkQsYUFBUyxpQkFBaUIsS0FBSztBQUM3QixPQUFDLEdBQUcsY0FBYyxTQUFTLEdBQUc7QUFDOUIsYUFBTyxrQ0FBa0MsSUFBSSxJQUFJLFlBQVksQ0FBQztBQUFBLElBQ2hFO0FBRUEsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ3BCakM7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFDbEIsWUFBUSxnQkFBZ0I7QUFFeEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUc5RixRQUFJLDRCQUE0QixvQkFBSSxJQUFJLENBQUMsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLLENBQUM7QUFFN3dDLGFBQVMsVUFBVSxLQUFLO0FBQ3RCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixhQUFPLDBCQUEwQixJQUFJLElBQUksWUFBWSxDQUFDO0FBQUEsSUFDeEQ7QUFFQSxRQUFJLGdCQUFnQjtBQUNwQixZQUFRLGdCQUFnQjtBQUFBO0FBQUE7OztBQ3JCeEI7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixRQUFJLFNBQVM7QUFFYixhQUFTLFNBQVMsS0FBSztBQUNyQixPQUFDLEdBQUcsY0FBYyxTQUFTLEdBQUc7QUFDOUIsVUFBSSxNQUFNLElBQUk7QUFFZCxVQUFJLE1BQU0sTUFBTSxLQUFLLE9BQU8sS0FBSyxHQUFHLEdBQUc7QUFDckMsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUN6QmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFHOUYsUUFBSSxZQUFZO0FBRWhCLGFBQVMsU0FBUyxLQUFLO0FBQ3JCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUU5QixVQUFJLFVBQVUsS0FBSyxHQUFHLEdBQUc7QUFDdkIsZUFBTztBQUFBLE1BQ1Q7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUN6QmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSxZQUFZO0FBRWhCLGFBQVMsVUFBVSxLQUFLO0FBQ3RCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixVQUFJLE9BQU8sSUFBSSxNQUFNLEdBQUc7QUFFeEIsVUFBSSxLQUFLLFNBQVMsR0FBRztBQUNuQixlQUFPO0FBQUEsTUFDVDtBQUVBLFVBQUksYUFBYSxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHO0FBQzlDLFVBQUkscUJBQXFCLFdBQVcsTUFBTTtBQUUxQyxVQUFJLG1CQUFtQixPQUFPLEdBQUcsQ0FBQyxNQUFNLFNBQVM7QUFDL0MsZUFBTztBQUFBLE1BQ1Q7QUFFQSxVQUFJLFlBQVksbUJBQW1CLE9BQU8sQ0FBQztBQUUzQyxVQUFJLGNBQWMsTUFBTSxDQUFDLGVBQWUsS0FBSyxTQUFTLEdBQUc7QUFDdkQsZUFBTztBQUFBLE1BQ1Q7QUFFQSxlQUFTLElBQUksR0FBRyxJQUFJLFdBQVcsUUFBUSxLQUFLO0FBQzFDLFlBQUksRUFBRSxNQUFNLFdBQVcsU0FBUyxLQUFLLFdBQVcsR0FBRyxZQUFZLE1BQU0sYUFBYSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUUsR0FBRztBQUNySCxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBRUEsZUFBUyxLQUFLLEdBQUcsS0FBSyxLQUFLLFFBQVEsTUFBTTtBQUN2QyxZQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssR0FBRyxHQUFHO0FBQzdCLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUNwRGpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsUUFBSSxZQUFZO0FBRWhCLGFBQVMsWUFBWSxLQUFLO0FBQ3hCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixhQUFPLFVBQVUsS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFBLElBQ2xDO0FBRUEsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ25CakM7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQTJCOUYsUUFBSSxpQkFBaUI7QUFHckIsUUFBSSxlQUFlO0FBR25CLFFBQUksb0JBQW9CO0FBRXhCLGFBQVMsV0FBVyxLQUFLO0FBQ3ZCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixhQUFPLGVBQWUsS0FBSyxHQUFHLEtBQUssYUFBYSxLQUFLLEdBQUcsS0FBSyxrQkFBa0IsS0FBSyxHQUFHO0FBQUEsSUFDekY7QUFFQSxXQUFPLFVBQVUsUUFBUTtBQUN6QixXQUFPLFFBQVEsVUFBVSxRQUFRO0FBQUE7QUFBQTs7O0FDbERqQztBQUFBO0FBQUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsVUFBVTtBQUVsQixRQUFJLGdCQUFnQix1QkFBdUIsc0JBQThCO0FBRXpFLFFBQUksU0FBUyx1QkFBdUIsZUFBdUI7QUFFM0QsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsUUFBSSxNQUFNO0FBQ1YsUUFBSSxPQUFPO0FBQ1gsUUFBSSxTQUFTO0FBQ2IsUUFBSSxVQUFVO0FBQ2QsUUFBSSx3QkFBd0I7QUFBQSxNQUMxQixVQUFVO0FBQUEsSUFDWjtBQUVBLGFBQVMsVUFBVSxLQUFLLFNBQVM7QUFDL0IsT0FBQyxHQUFHLGNBQWMsU0FBUyxHQUFHO0FBQzlCLGlCQUFXLEdBQUcsT0FBTyxTQUFTLFNBQVMscUJBQXFCO0FBQzVELFVBQUksQ0FBQyxJQUFJLFNBQVMsR0FBRztBQUFHLGVBQU87QUFDL0IsVUFBSSxPQUFPLElBQUksTUFBTSxHQUFHO0FBQ3hCLFVBQUksS0FBSyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxLQUFLLEtBQUssR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUc7QUFBRyxlQUFPO0FBRW5ILFVBQUksUUFBUSxVQUFVO0FBQ3BCLGVBQU8sT0FBTyxLQUFLLEtBQUssRUFBRSxLQUFLLFFBQVEsS0FBSyxLQUFLLEVBQUU7QUFBQSxNQUNyRDtBQUVBLGFBQU8sSUFBSSxLQUFLLEtBQUssRUFBRSxLQUFLLEtBQUssS0FBSyxLQUFLLEVBQUU7QUFBQSxJQUMvQztBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUNwQ2pDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBQ2xCLFlBQVEsVUFBVTtBQUVsQixRQUFJLGdCQUFnQix1QkFBdUIsc0JBQThCO0FBRXpFLGFBQVMsdUJBQXVCLEtBQUs7QUFBRSxhQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFBQSxJQUFHO0FBRzlGLFFBQUksYUFBYTtBQUNqQixRQUFJLFlBQVk7QUFDaEIsUUFBSSxZQUFZO0FBQ2hCLFFBQUksV0FBVztBQUNmLFFBQUksV0FBVztBQUFBLE1BQ2IsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLElBQ047QUFDQSxRQUFJLFVBQVUsT0FBTyxLQUFLLFFBQVE7QUFDbEMsWUFBUSxVQUFVO0FBRWxCLGFBQVMsYUFBYSxLQUFLLFFBQVE7QUFDakMsT0FBQyxHQUFHLGNBQWMsU0FBUyxHQUFHO0FBRTlCLFVBQUksVUFBVSxVQUFVO0FBQ3RCLGVBQU8sU0FBUyxRQUFRLEtBQUssR0FBRztBQUFBLE1BQ2xDLFdBQVcsV0FBVyxPQUFPO0FBQzNCLGlCQUFTLE9BQU8sVUFBVTtBQUd4QixjQUFJLFNBQVMsZUFBZSxHQUFHLEdBQUc7QUFDaEMsZ0JBQUksVUFBVSxTQUFTO0FBRXZCLGdCQUFJLFFBQVEsS0FBSyxHQUFHLEdBQUc7QUFDckIscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUVBLFlBQU0sSUFBSSxNQUFNLG1CQUFtQixPQUFPLFFBQVEsR0FBRyxDQUFDO0FBQUEsSUFDeEQ7QUFBQTtBQUFBOzs7QUM1R0E7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixhQUFTLE1BQU0sS0FBSyxPQUFPO0FBQ3pCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUU5QixVQUFJLFVBQVUsUUFBUSxJQUFJLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSx1QkFBdUIsTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLElBQUk7QUFDekcsYUFBTyxJQUFJLFFBQVEsU0FBUyxFQUFFO0FBQUEsSUFDaEM7QUFFQSxXQUFPLFVBQVUsUUFBUTtBQUN6QixXQUFPLFFBQVEsVUFBVSxRQUFRO0FBQUE7QUFBQTs7O0FDbkJqQztBQUFBO0FBQUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsVUFBVTtBQUVsQixRQUFJLGdCQUFnQix1QkFBdUIsc0JBQThCO0FBRXpFLGFBQVMsdUJBQXVCLEtBQUs7QUFBRSxhQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFBQSxJQUFHO0FBRTlGLGFBQVMsTUFBTSxLQUFLLE9BQU87QUFDekIsT0FBQyxHQUFHLGNBQWMsU0FBUyxHQUFHO0FBRTlCLFVBQUksT0FBTztBQUVULFlBQUksVUFBVSxJQUFJLE9BQU8sSUFBSSxPQUFPLE1BQU0sUUFBUSx1QkFBdUIsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHO0FBQzdGLGVBQU8sSUFBSSxRQUFRLFNBQVMsRUFBRTtBQUFBLE1BQ2hDO0FBR0EsVUFBSSxXQUFXLElBQUksU0FBUztBQUU1QixhQUFPLEtBQUssS0FBSyxJQUFJLE9BQU8sUUFBUSxDQUFDLEdBQUc7QUFDdEMsb0JBQVk7QUFBQSxNQUNkO0FBRUEsYUFBTyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFBQSxJQUNsQztBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUMvQmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksU0FBUyx1QkFBdUIsZUFBa0I7QUFFdEQsUUFBSSxTQUFTLHVCQUF1QixlQUFrQjtBQUV0RCxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixhQUFTLEtBQUssS0FBSyxPQUFPO0FBQ3hCLGNBQVEsR0FBRyxPQUFPLFVBQVUsR0FBRyxPQUFPLFNBQVMsS0FBSyxLQUFLLEdBQUcsS0FBSztBQUFBLElBQ25FO0FBRUEsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ2xCakM7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixhQUFTLE9BQU8sS0FBSztBQUNuQixPQUFDLEdBQUcsY0FBYyxTQUFTLEdBQUc7QUFDOUIsYUFBTyxJQUFJLFFBQVEsTUFBTSxPQUFPLEVBQUUsUUFBUSxNQUFNLFFBQVEsRUFBRSxRQUFRLE1BQU0sUUFBUSxFQUFFLFFBQVEsTUFBTSxNQUFNLEVBQUUsUUFBUSxNQUFNLE1BQU0sRUFBRSxRQUFRLE9BQU8sUUFBUSxFQUFFLFFBQVEsT0FBTyxRQUFRLEVBQUUsUUFBUSxNQUFNLE9BQU87QUFBQSxJQUN2TTtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUNqQmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsYUFBUyxTQUFTLEtBQUs7QUFDckIsT0FBQyxHQUFHLGNBQWMsU0FBUyxHQUFHO0FBQzlCLGFBQU8sSUFBSSxRQUFRLFdBQVcsR0FBRyxFQUFFLFFBQVEsV0FBVyxHQUFHLEVBQUUsUUFBUSxTQUFTLEdBQUcsRUFBRSxRQUFRLFNBQVMsR0FBRyxFQUFFLFFBQVEsV0FBVyxHQUFHLEVBQUUsUUFBUSxXQUFXLElBQUksRUFBRSxRQUFRLFVBQVUsR0FBRyxFQUFFLFFBQVEsVUFBVSxHQUFHO0FBQUEsSUFHdE07QUFFQSxXQUFPLFVBQVUsUUFBUTtBQUN6QixXQUFPLFFBQVEsVUFBVSxRQUFRO0FBQUE7QUFBQTs7O0FDbkJqQztBQUFBO0FBQUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsVUFBVTtBQUVsQixRQUFJLGdCQUFnQix1QkFBdUIsc0JBQThCO0FBRXpFLGFBQVMsdUJBQXVCLEtBQUs7QUFBRSxhQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFBQSxJQUFHO0FBRTlGLGFBQVMsVUFBVSxLQUFLLE9BQU87QUFDN0IsT0FBQyxHQUFHLGNBQWMsU0FBUyxHQUFHO0FBQzlCLGFBQU8sSUFBSSxRQUFRLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxJQUNqRTtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUNqQmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsUUFBSSxhQUFhLHVCQUF1QixtQkFBc0I7QUFFOUQsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsYUFBUyxTQUFTLEtBQUssZ0JBQWdCO0FBQ3JDLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixVQUFJLFFBQVEsaUJBQWlCLDBDQUEwQztBQUN2RSxjQUFRLEdBQUcsV0FBVyxTQUFTLEtBQUssS0FBSztBQUFBLElBQzNDO0FBRUEsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ3BCakM7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixhQUFTLFVBQVUsS0FBSyxPQUFPO0FBQzdCLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixhQUFPLElBQUksUUFBUSxJQUFJLE9BQU8sS0FBSyxPQUFPLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsSUFDbEU7QUFFQSxXQUFPLFVBQVUsUUFBUTtBQUN6QixXQUFPLFFBQVEsVUFBVSxRQUFRO0FBQUE7QUFBQTs7O0FDakJqQztBQUFBO0FBQUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsVUFBVTtBQUVsQixRQUFJLGdCQUFnQix1QkFBdUIsc0JBQThCO0FBRXpFLGFBQVMsdUJBQXVCLEtBQUs7QUFBRSxhQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFBQSxJQUFHO0FBRTlGLGFBQVMsY0FBYyxLQUFLLE9BQU87QUFDakMsT0FBQyxHQUFHLGNBQWMsU0FBUyxHQUFHO0FBRTlCLGVBQVMsSUFBSSxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsS0FBSztBQUN4QyxZQUFJLE1BQU0sUUFBUSxJQUFJLEVBQUUsTUFBTSxJQUFJO0FBQ2hDLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUN4QmpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksU0FBUyx1QkFBdUIsZUFBdUI7QUFFM0QsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsUUFBSSxrQ0FBa0M7QUFBQSxNQUtwQyxlQUFlO0FBQUEsTUFHZixpQkFBaUI7QUFBQSxNQUVqQixtQkFBbUI7QUFBQSxNQUVuQix5QkFBeUI7QUFBQSxNQUV6QixnQ0FBZ0M7QUFBQSxNQUdoQyx5QkFBeUI7QUFBQSxNQUV6QixpQ0FBaUM7QUFBQSxNQUdqQyxpQkFBaUI7QUFBQSxNQUVqQix5QkFBeUI7QUFBQSxNQUd6QixrQkFBa0I7QUFBQSxNQUdsQixrQkFBa0I7QUFBQSxNQUVsQiwwQkFBMEI7QUFBQSxJQUM1QjtBQUVBLFFBQUksaUJBQWlCLENBQUMsY0FBYyxRQUFRO0FBSzVDLFFBQUksd0JBQXdCLENBQUMsY0FBYyxjQUFjLGNBQWMsY0FBYyxpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsZUFBZSxrQkFBa0Isa0JBQWtCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsV0FBVyxjQUFjLFlBQVksZUFBZSxlQUFlLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsY0FBYyxjQUFjLGNBQWMsaUJBQWlCLGlCQUFpQixpQkFBaUIsZUFBZSxrQkFBa0Isa0JBQWtCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixrQkFBa0IsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjO0FBR3B0QyxRQUFJLGdCQUFnQixDQUFDLGtCQUFrQixZQUFZLGVBQWUsYUFBYSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVc7QUFFMUksUUFBSSxpQkFBaUIsQ0FBQyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTztBQUUvRixhQUFTLGFBQWEsT0FBTztBQUMzQixVQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3BCLGVBQU87QUFBQSxNQUNUO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGVBQWVDLFFBQU8sU0FBUztBQUN0QyxpQkFBVyxHQUFHLE9BQU8sU0FBUyxTQUFTLCtCQUErQjtBQUN0RSxVQUFJLFlBQVlBLE9BQU0sTUFBTSxHQUFHO0FBQy9CLFVBQUksU0FBUyxVQUFVLElBQUk7QUFDM0IsVUFBSSxPQUFPLFVBQVUsS0FBSyxHQUFHO0FBQzdCLFVBQUksUUFBUSxDQUFDLE1BQU0sTUFBTTtBQUV6QixZQUFNLEtBQUssTUFBTSxHQUFHLFlBQVk7QUFFaEMsVUFBSSxNQUFNLE9BQU8sZUFBZSxNQUFNLE9BQU8sa0JBQWtCO0FBRTdELFlBQUksUUFBUSx5QkFBeUI7QUFDbkMsZ0JBQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUU7QUFBQSxRQUNqQztBQUVBLFlBQUksUUFBUSxtQkFBbUI7QUFFN0IsZ0JBQU0sS0FBSyxNQUFNLEdBQUcsUUFBUSxRQUFRLFlBQVk7QUFBQSxRQUNsRDtBQUVBLFlBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUTtBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLFFBQVEsaUJBQWlCLFFBQVEsaUJBQWlCO0FBQ3BELGdCQUFNLEtBQUssTUFBTSxHQUFHLFlBQVk7QUFBQSxRQUNsQztBQUVBLGNBQU0sS0FBSyxRQUFRLGlDQUFpQyxjQUFjLE1BQU07QUFBQSxNQUMxRSxXQUFXLGVBQWUsUUFBUSxNQUFNLEVBQUUsS0FBSyxHQUFHO0FBRWhELFlBQUksUUFBUSwwQkFBMEI7QUFDcEMsZ0JBQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUU7QUFBQSxRQUNqQztBQUVBLFlBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUTtBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLFFBQVEsaUJBQWlCLFFBQVEsa0JBQWtCO0FBQ3JELGdCQUFNLEtBQUssTUFBTSxHQUFHLFlBQVk7QUFBQSxRQUNsQztBQUFBLE1BQ0YsV0FBVyxzQkFBc0IsUUFBUSxNQUFNLEVBQUUsS0FBSyxHQUFHO0FBRXZELFlBQUksUUFBUSxpQ0FBaUM7QUFDM0MsZ0JBQU0sS0FBSyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUU7QUFBQSxRQUNqQztBQUVBLFlBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUTtBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLFFBQVEsaUJBQWlCLFFBQVEseUJBQXlCO0FBQzVELGdCQUFNLEtBQUssTUFBTSxHQUFHLFlBQVk7QUFBQSxRQUNsQztBQUFBLE1BQ0YsV0FBVyxjQUFjLFFBQVEsTUFBTSxFQUFFLEtBQUssR0FBRztBQUUvQyxZQUFJLFFBQVEseUJBQXlCO0FBQ25DLGNBQUksYUFBYSxNQUFNLEdBQUcsTUFBTSxHQUFHO0FBQ25DLGdCQUFNLEtBQUssV0FBVyxTQUFTLElBQUksV0FBVyxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUssR0FBRyxJQUFJLFdBQVc7QUFBQSxRQUNwRjtBQUVBLFlBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUTtBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLFFBQVEsaUJBQWlCLFFBQVEsaUJBQWlCO0FBQ3BELGdCQUFNLEtBQUssTUFBTSxHQUFHLFlBQVk7QUFBQSxRQUNsQztBQUFBLE1BQ0YsV0FBVyxlQUFlLFFBQVEsTUFBTSxFQUFFLEtBQUssR0FBRztBQUNoRCxZQUFJLFFBQVEsaUJBQWlCLFFBQVEsa0JBQWtCO0FBQ3JELGdCQUFNLEtBQUssTUFBTSxHQUFHLFlBQVk7QUFBQSxRQUNsQztBQUVBLGNBQU0sS0FBSztBQUFBLE1BQ2IsV0FBVyxRQUFRLGVBQWU7QUFFaEMsY0FBTSxLQUFLLE1BQU0sR0FBRyxZQUFZO0FBQUEsTUFDbEM7QUFFQSxhQUFPLE1BQU0sS0FBSyxHQUFHO0FBQUEsSUFDdkI7QUFFQSxXQUFPLFVBQVUsUUFBUTtBQUN6QixXQUFPLFFBQVEsVUFBVSxRQUFRO0FBQUE7QUFBQTs7O0FDdEpqQztBQUFBO0FBQUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsVUFBVTtBQUVsQixRQUFJLGdCQUFnQix1QkFBdUIsc0JBQThCO0FBRXpFLGFBQVMsdUJBQXVCLEtBQUs7QUFBRSxhQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFBQSxJQUFHO0FBRTlGLFFBQUksZUFBZTtBQUVuQixhQUFTLE9BQU8sS0FBSztBQUNuQixPQUFDLEdBQUcsY0FBYyxTQUFTLEdBQUc7QUFDOUIsYUFBTyxhQUFhLEtBQUssR0FBRztBQUFBLElBQzlCO0FBRUEsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ25CakM7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFFbEIsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixRQUFJLGFBQWE7QUFBQSxNQUNmLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTywrQ0FBK0MsS0FBSyxHQUFHO0FBQUEsTUFDaEU7QUFBQSxNQUNBLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTyxxL0VBQXEvRSxLQUFLLEdBQUc7QUFBQSxNQUN0Z0Y7QUFBQSxNQUNBLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTyx3QkFBd0IsS0FBSyxHQUFHO0FBQUEsTUFDekM7QUFBQSxNQUNBLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTyxxRUFBcUUsS0FBSyxHQUFHO0FBQUEsTUFDdEY7QUFBQSxNQUNBLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTywwRUFBMEUsS0FBSyxHQUFHO0FBQUEsTUFDM0Y7QUFBQSxNQUNBLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTyw0REFBNEQsS0FBSyxHQUFHO0FBQUEsTUFDN0U7QUFBQSxNQUNBLFNBQVMsU0FBUyxLQUFLLEtBQUs7QUFDMUIsZUFBTywwREFBMEQsS0FBSyxHQUFHO0FBQUEsTUFDM0U7QUFBQSxJQUNGO0FBRUEsYUFBUyxlQUFlLEtBQUssUUFBUTtBQUNuQyxPQUFDLEdBQUcsY0FBYyxTQUFTLEdBQUc7QUFFOUIsVUFBSSxVQUFVLFlBQVk7QUFDeEIsZUFBTyxXQUFXLFFBQVEsR0FBRztBQUFBLE1BQy9CLFdBQVcsV0FBVyxPQUFPO0FBQzNCLGlCQUFTLE9BQU8sWUFBWTtBQUUxQixjQUFJQyxhQUFZLFdBQVc7QUFFM0IsY0FBSUEsV0FBVSxHQUFHLEdBQUc7QUFDbEIsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUVBLGVBQU87QUFBQSxNQUNUO0FBRUEsWUFBTSxJQUFJLE1BQU0sbUJBQW1CLE9BQU8sUUFBUSxHQUFHLENBQUM7QUFBQSxJQUN4RDtBQUVBLFdBQU8sVUFBVSxRQUFRO0FBQ3pCLFdBQU8sUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUFBOzs7QUN6RGpDO0FBQUE7QUFBQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQ0QsWUFBUSxVQUFVO0FBRWxCLFFBQUksU0FBUyx1QkFBdUIsZUFBdUI7QUFFM0QsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE4QjtBQUV6RSxhQUFTLHVCQUF1QixLQUFLO0FBQUUsYUFBTyxPQUFPLElBQUksYUFBYSxNQUFNLEVBQUUsU0FBUyxJQUFJO0FBQUEsSUFBRztBQUU5RixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLGNBQWM7QUFDbEIsUUFBSSxjQUFjO0FBQ2xCLFFBQUksaUJBQWlCO0FBQUEsTUFDbkIsV0FBVztBQUFBLE1BQ1gsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsaUJBQWlCO0FBQUEsTUFDakIsaUJBQWlCO0FBQUEsTUFDakIsMEJBQTBCO0FBQUEsTUFDMUIsMEJBQTBCO0FBQUEsTUFDMUIsMkJBQTJCO0FBQUEsTUFDM0IsMkJBQTJCO0FBQUEsSUFDN0I7QUFLQSxhQUFTLFdBQVcsS0FBSztBQUN2QixVQUFJLFNBQVMsQ0FBQztBQUNkLFlBQU0sS0FBSyxHQUFHLEVBQUUsUUFBUSxTQUFVLE1BQU07QUFDdEMsWUFBSSxTQUFTLE9BQU87QUFFcEIsWUFBSSxRQUFRO0FBQ1YsaUJBQU8sU0FBUztBQUFBLFFBQ2xCLE9BQU87QUFDTCxpQkFBTyxRQUFRO0FBQUEsUUFDakI7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDVDtBQUlBLGFBQVMsZ0JBQWdCLFVBQVU7QUFDakMsVUFBSSxVQUFVLFdBQVcsUUFBUTtBQUNqQyxVQUFJLFdBQVc7QUFBQSxRQUNiLFFBQVEsU0FBUztBQUFBLFFBQ2pCLGFBQWEsT0FBTyxLQUFLLE9BQU8sRUFBRTtBQUFBLFFBQ2xDLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxNQUNmO0FBQ0EsYUFBTyxLQUFLLE9BQU8sRUFBRSxRQUFRLFNBQVUsTUFBTTtBQUUzQyxZQUFJLGVBQWUsS0FBSyxJQUFJLEdBQUc7QUFDN0IsbUJBQVMsa0JBQWtCLFFBQVE7QUFBQSxRQUNyQyxXQUFXLGVBQWUsS0FBSyxJQUFJLEdBQUc7QUFDcEMsbUJBQVMsa0JBQWtCLFFBQVE7QUFBQSxRQUNyQyxXQUFXLFlBQVksS0FBSyxJQUFJLEdBQUc7QUFDakMsbUJBQVMsZUFBZSxRQUFRO0FBQUEsUUFDbEMsV0FBVyxZQUFZLEtBQUssSUFBSSxHQUFHO0FBQ2pDLG1CQUFTLGVBQWUsUUFBUTtBQUFBLFFBQ2xDO0FBQUEsTUFDRixDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGNBQWMsVUFBVSxnQkFBZ0I7QUFDL0MsVUFBSSxTQUFTO0FBQ2IsZ0JBQVUsU0FBUyxjQUFjLGVBQWU7QUFDaEQsaUJBQVcsU0FBUyxTQUFTLFNBQVMsZUFBZSxlQUFlO0FBRXBFLFVBQUksU0FBUyxpQkFBaUIsR0FBRztBQUMvQixrQkFBVSxlQUFlO0FBQUEsTUFDM0I7QUFFQSxVQUFJLFNBQVMsaUJBQWlCLEdBQUc7QUFDL0Isa0JBQVUsZUFBZTtBQUFBLE1BQzNCO0FBRUEsVUFBSSxTQUFTLGNBQWMsR0FBRztBQUM1QixrQkFBVSxlQUFlO0FBQUEsTUFDM0I7QUFFQSxVQUFJLFNBQVMsY0FBYyxHQUFHO0FBQzVCLGtCQUFVLGVBQWU7QUFBQSxNQUMzQjtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxpQkFBaUIsS0FBSztBQUM3QixVQUFJLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxPQUFPLFNBQVksVUFBVSxLQUFLO0FBQ2xGLE9BQUMsR0FBRyxjQUFjLFNBQVMsR0FBRztBQUM5QixVQUFJLFdBQVcsZ0JBQWdCLEdBQUc7QUFDbEMsaUJBQVcsR0FBRyxPQUFPLFNBQVMsV0FBVyxDQUFDLEdBQUcsY0FBYztBQUUzRCxVQUFJLFFBQVEsYUFBYTtBQUN2QixlQUFPLGNBQWMsVUFBVSxPQUFPO0FBQUEsTUFDeEM7QUFFQSxhQUFPLFNBQVMsVUFBVSxRQUFRLGFBQWEsU0FBUyxrQkFBa0IsUUFBUSxnQkFBZ0IsU0FBUyxrQkFBa0IsUUFBUSxnQkFBZ0IsU0FBUyxlQUFlLFFBQVEsY0FBYyxTQUFTLGVBQWUsUUFBUTtBQUFBLElBQ3JPO0FBRUEsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ2xIakM7QUFBQTtBQUFBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLE9BQU87QUFBQSxJQUNULENBQUM7QUFDRCxZQUFRLFVBQVU7QUFDbEIsWUFBUSxjQUFjO0FBRXRCLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBOEI7QUFFekUsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsUUFBSSxjQUFjO0FBQUEsTUFDaEIsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLElBQ047QUFDQSxZQUFRLGNBQWM7QUFFdEIsYUFBUyxNQUFNLEtBQUssYUFBYTtBQUMvQixPQUFDLEdBQUcsY0FBYyxTQUFTLEdBQUc7QUFDOUIsT0FBQyxHQUFHLGNBQWMsU0FBUyxXQUFXO0FBRXRDLFVBQUksZUFBZSxhQUFhO0FBQzlCLGVBQU8sWUFBWSxhQUFhLEtBQUssR0FBRztBQUFBLE1BQzFDO0FBRUEsWUFBTSxJQUFJLE1BQU0sMEJBQTBCLE9BQU8sYUFBYSxHQUFHLENBQUM7QUFBQSxJQUNwRTtBQUFBO0FBQUE7OztBQzVCQTtBQUFBO0FBQUE7QUFFQSxhQUFTLFFBQVEsS0FBSztBQUFFO0FBQTJCLFVBQUksT0FBTyxXQUFXLGNBQWMsT0FBTyxPQUFPLGFBQWEsVUFBVTtBQUFFLGtCQUFVLFNBQVNDLFNBQVFDLE1BQUs7QUFBRSxpQkFBTyxPQUFPQTtBQUFBLFFBQUs7QUFBQSxNQUFHLE9BQU87QUFBRSxrQkFBVSxTQUFTRCxTQUFRQyxNQUFLO0FBQUUsaUJBQU9BLFFBQU8sT0FBTyxXQUFXLGNBQWNBLEtBQUksZ0JBQWdCLFVBQVVBLFNBQVEsT0FBTyxZQUFZLFdBQVcsT0FBT0E7QUFBQSxRQUFLO0FBQUEsTUFBRztBQUFFLGFBQU8sUUFBUSxHQUFHO0FBQUEsSUFBRztBQUV6WCxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUNELFlBQVEsVUFBVTtBQUVsQixRQUFJLFVBQVUsdUJBQXVCLGdCQUF1QjtBQUU1RCxRQUFJLFdBQVcsdUJBQXVCLGlCQUF3QjtBQUU5RCxRQUFJLFNBQVMsdUJBQXVCLGVBQXNCO0FBRTFELFFBQUksYUFBYSx1QkFBdUIsbUJBQTBCO0FBRWxFLFFBQUksVUFBVSx1QkFBdUIsZ0JBQXVCO0FBRTVELFFBQUksWUFBWSx1QkFBdUIsa0JBQXlCO0FBRWhFLFFBQUksV0FBVyx1QkFBdUIsaUJBQXdCO0FBRTlELFFBQUksV0FBVyx1QkFBdUIsaUJBQXdCO0FBRTlELFFBQUksU0FBUyx1QkFBdUIsZUFBc0I7QUFFMUQsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE2QjtBQUV4RSxRQUFJLFFBQVEsdUJBQXVCLGNBQXFCO0FBRXhELFFBQUksYUFBYSx1QkFBdUIsbUJBQTBCO0FBRWxFLFFBQUksVUFBVSx1QkFBdUIsZ0JBQXVCO0FBRTVELFFBQUksVUFBVSx1QkFBdUIsZ0JBQXVCO0FBRTVELFFBQUksYUFBYSx1QkFBdUIsbUJBQTBCO0FBRWxFLFFBQUksWUFBWSx1QkFBdUIsa0JBQXlCO0FBRWhFLFFBQUksV0FBVyx3QkFBd0IsaUJBQXdCO0FBRS9ELFFBQUksa0JBQWtCLHdCQUF3Qix3QkFBK0I7QUFFN0UsUUFBSSxhQUFhLHVCQUF1QixtQkFBMEI7QUFFbEUsUUFBSSxvQkFBb0IsdUJBQXVCLDBCQUFpQztBQUVoRixRQUFJLFVBQVUsdUJBQXVCLGdCQUF1QjtBQUU1RCxRQUFJLGVBQWUsdUJBQXVCLHFCQUE0QjtBQUV0RSxRQUFJLGVBQWUsdUJBQXVCLHFCQUE0QjtBQUV0RSxRQUFJLFVBQVUsdUJBQXVCLGdCQUF1QjtBQUU1RCxRQUFJLFdBQVcsdUJBQXVCLGlCQUF3QjtBQUU5RCxRQUFJLGVBQWUsdUJBQXVCLHFCQUE0QjtBQUV0RSxRQUFJLGVBQWUsdUJBQXVCLHFCQUE0QjtBQUV0RSxRQUFJLG1CQUFtQix1QkFBdUIseUJBQWdDO0FBRTlFLFFBQUksZUFBZSx1QkFBdUIscUJBQTRCO0FBRXRFLFFBQUksWUFBWSx1QkFBdUIsa0JBQXlCO0FBRWhFLFFBQUksbUJBQW1CLHVCQUF1Qix5QkFBZ0M7QUFFOUUsUUFBSSxTQUFTLHVCQUF1QixlQUFzQjtBQUUxRCxRQUFJLFdBQVcsd0JBQXdCLGlCQUF3QjtBQUUvRCxRQUFJLGFBQWEsdUJBQXVCLG1CQUEwQjtBQUVsRSxRQUFJLGlCQUFpQix1QkFBdUIsdUJBQThCO0FBRTFFLFFBQUksV0FBVyx1QkFBdUIsaUJBQXdCO0FBRTlELFFBQUksaUJBQWlCLHVCQUF1Qix1QkFBOEI7QUFFMUUsUUFBSSxjQUFjLHVCQUF1QixvQkFBMkI7QUFFcEUsUUFBSSxjQUFjLHVCQUF1QixvQkFBMkI7QUFFcEUsUUFBSSxTQUFTLHVCQUF1QixlQUFzQjtBQUUxRCxRQUFJLFVBQVUsdUJBQXVCLGdCQUF1QjtBQUU1RCxRQUFJLFVBQVUsd0JBQXdCLGdCQUF1QjtBQUU3RCxRQUFJLFNBQVMsdUJBQXVCLGVBQXNCO0FBRTFELFFBQUksUUFBUSx1QkFBdUIsZUFBc0I7QUFFekQsUUFBSSxVQUFVLHVCQUF1QixnQkFBdUI7QUFFNUQsUUFBSSxTQUFTLHVCQUF1QixlQUFzQjtBQUUxRCxRQUFJLFVBQVUsdUJBQXVCLGdCQUF1QjtBQUU1RCxRQUFJLFdBQVcsdUJBQXVCLGlCQUF3QjtBQUU5RCxRQUFJLFlBQVksdUJBQXVCLGtCQUF5QjtBQUVoRSxRQUFJLGdCQUFnQix1QkFBdUIsc0JBQTZCO0FBRXhFLFFBQUksVUFBVSx1QkFBdUIsZ0JBQXVCO0FBRTVELFFBQUksYUFBYSx1QkFBdUIsbUJBQTBCO0FBRWxFLFFBQUksV0FBVyx1QkFBdUIsaUJBQXdCO0FBRTlELFFBQUksWUFBWSx1QkFBdUIsa0JBQXlCO0FBRWhFLFFBQUksUUFBUSx1QkFBdUIsY0FBcUI7QUFFeEQsUUFBSSxnQkFBZ0IsdUJBQXVCLHNCQUE2QjtBQUV4RSxRQUFJLGtCQUFrQix1QkFBdUIsd0JBQStCO0FBRTVFLFFBQUksU0FBUyx1QkFBdUIsZUFBc0I7QUFFMUQsUUFBSSxVQUFVLHVCQUF1QixnQkFBdUI7QUFFNUQsUUFBSSxVQUFVLHVCQUF1QixnQkFBdUI7QUFFNUQsUUFBSSxVQUFVLHVCQUF1QixnQkFBdUI7QUFFNUQsUUFBSSxXQUFXLHVCQUF1QixpQkFBd0I7QUFFOUQsUUFBSSxpQkFBaUIsd0JBQXdCLHVCQUE4QjtBQUUzRSxRQUFJLHFCQUFxQix1QkFBdUIsMkJBQWtDO0FBRWxGLFFBQUksY0FBYyx1QkFBdUIsb0JBQTJCO0FBRXBFLFFBQUksZ0JBQWdCLHVCQUF1QixzQkFBNkI7QUFFeEUsUUFBSSxTQUFTLHVCQUF1QixtQkFBMEI7QUFFOUQsUUFBSSxTQUFTLHVCQUF1QixtQkFBMEI7QUFFOUQsUUFBSSxtQkFBbUIsdUJBQXVCLDBCQUFpQztBQUUvRSxRQUFJLG9CQUFvQix1QkFBdUIsMEJBQWlDO0FBRWhGLFFBQUksVUFBVSx1QkFBdUIsbUJBQTBCO0FBRS9ELFFBQUksVUFBVSx1QkFBdUIsa0JBQXlCO0FBRTlELFFBQUksV0FBVyx1QkFBdUIsa0JBQXlCO0FBRS9ELFFBQUksV0FBVyx1QkFBdUIsa0JBQXlCO0FBRS9ELFFBQUksYUFBYSx1QkFBdUIsbUJBQTBCO0FBRWxFLFFBQUksZUFBZSx1QkFBdUIscUJBQTRCO0FBRXRFLFFBQUksY0FBYyx1QkFBdUIsb0JBQTJCO0FBRXBFLFFBQUksYUFBYSx1QkFBdUIsbUJBQTBCO0FBRWxFLFFBQUksZ0JBQWdCLHdCQUF3QixzQkFBNkI7QUFFekUsUUFBSSxTQUFTLHVCQUF1QixlQUFzQjtBQUUxRCxRQUFJLFNBQVMsdUJBQXVCLGVBQXNCO0FBRTFELFFBQUksUUFBUSx1QkFBdUIsY0FBcUI7QUFFeEQsUUFBSSxVQUFVLHVCQUF1QixnQkFBdUI7QUFFNUQsUUFBSSxZQUFZLHVCQUF1QixrQkFBeUI7QUFFaEUsUUFBSSxZQUFZLHVCQUF1QixrQkFBeUI7QUFFaEUsUUFBSSxhQUFhLHVCQUF1QixtQkFBMEI7QUFFbEUsUUFBSSxhQUFhLHVCQUF1QixtQkFBMEI7QUFFbEUsUUFBSSxpQkFBaUIsdUJBQXVCLHVCQUE4QjtBQUUxRSxRQUFJLGtCQUFrQix1QkFBdUIsd0JBQStCO0FBRTVFLFFBQUksVUFBVSx1QkFBdUIsZ0JBQXVCO0FBRTVELFFBQUksa0JBQWtCLHVCQUF1Qix3QkFBK0I7QUFFNUUsUUFBSSxvQkFBb0IsdUJBQXVCLDBCQUFpQztBQUVoRixRQUFJLFNBQVMsdUJBQXVCLGVBQXNCO0FBRTFELGFBQVMsMkJBQTJCO0FBQUUsVUFBSSxPQUFPLFlBQVk7QUFBWSxlQUFPO0FBQU0sVUFBSSxRQUFRLG9CQUFJLFFBQVE7QUFBRyxpQ0FBMkIsU0FBU0MsNEJBQTJCO0FBQUUsZUFBTztBQUFBLE1BQU87QUFBRyxhQUFPO0FBQUEsSUFBTztBQUVqTixhQUFTLHdCQUF3QixLQUFLO0FBQUUsVUFBSSxPQUFPLElBQUksWUFBWTtBQUFFLGVBQU87QUFBQSxNQUFLO0FBQUUsVUFBSSxRQUFRLFFBQVEsUUFBUSxHQUFHLE1BQU0sWUFBWSxPQUFPLFFBQVEsWUFBWTtBQUFFLGVBQU8sRUFBRSxTQUFTLElBQUk7QUFBQSxNQUFHO0FBQUUsVUFBSSxRQUFRLHlCQUF5QjtBQUFHLFVBQUksU0FBUyxNQUFNLElBQUksR0FBRyxHQUFHO0FBQUUsZUFBTyxNQUFNLElBQUksR0FBRztBQUFBLE1BQUc7QUFBRSxVQUFJLFNBQVMsQ0FBQztBQUFHLFVBQUksd0JBQXdCLE9BQU8sa0JBQWtCLE9BQU87QUFBMEIsZUFBUyxPQUFPLEtBQUs7QUFBRSxZQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUssS0FBSyxHQUFHLEdBQUc7QUFBRSxjQUFJLE9BQU8sd0JBQXdCLE9BQU8seUJBQXlCLEtBQUssR0FBRyxJQUFJO0FBQU0sY0FBSSxTQUFTLEtBQUssT0FBTyxLQUFLLE1BQU07QUFBRSxtQkFBTyxlQUFlLFFBQVEsS0FBSyxJQUFJO0FBQUEsVUFBRyxPQUFPO0FBQUUsbUJBQU8sT0FBTyxJQUFJO0FBQUEsVUFBTTtBQUFBLFFBQUU7QUFBQSxNQUFFO0FBQUUsYUFBTyxVQUFVO0FBQUssVUFBSSxPQUFPO0FBQUUsY0FBTSxJQUFJLEtBQUssTUFBTTtBQUFBLE1BQUc7QUFBRSxhQUFPO0FBQUEsSUFBUTtBQUV4dUIsYUFBUyx1QkFBdUIsS0FBSztBQUFFLGFBQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUc7QUFFOUYsUUFBSSxVQUFVO0FBQ2QsUUFBSUMsYUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLFNBQVMsU0FBUztBQUFBLE1BQ2xCLE9BQU8sT0FBTztBQUFBLE1BQ2QsV0FBVyxXQUFXO0FBQUEsTUFDdEIsUUFBUSxRQUFRO0FBQUEsTUFDaEIsVUFBVSxVQUFVO0FBQUEsTUFDcEIsU0FBUyxTQUFTO0FBQUEsTUFDbEIsU0FBUyxTQUFTO0FBQUEsTUFDbEIsT0FBTyxPQUFPO0FBQUEsTUFDZCxjQUFjLGNBQWM7QUFBQSxNQUM1QixNQUFNLE1BQU07QUFBQSxNQUNaLFdBQVcsV0FBVztBQUFBLE1BQ3RCLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLFdBQVcsV0FBVztBQUFBLE1BQ3RCLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLE9BQU8sT0FBTztBQUFBLE1BQ2QsU0FBUyxTQUFTO0FBQUEsTUFDbEIsZ0JBQWdCLFNBQVM7QUFBQSxNQUN6QixnQkFBZ0IsZ0JBQWdCO0FBQUEsTUFDaEMsdUJBQXVCLGdCQUFnQjtBQUFBLE1BQ3ZDLFdBQVcsV0FBVztBQUFBLE1BQ3RCLGtCQUFrQixrQkFBa0I7QUFBQSxNQUNwQyxRQUFRLFFBQVE7QUFBQSxNQUNoQixhQUFhLGFBQWE7QUFBQSxNQUMxQixhQUFhLGFBQWE7QUFBQSxNQUMxQixTQUFTLFNBQVM7QUFBQSxNQUNsQixhQUFhLGFBQWE7QUFBQSxNQUMxQixhQUFhLGFBQWE7QUFBQSxNQUMxQixpQkFBaUIsaUJBQWlCO0FBQUEsTUFDbEMsYUFBYSxhQUFhO0FBQUEsTUFDMUIsVUFBVSxVQUFVO0FBQUEsTUFDcEIsaUJBQWlCLGlCQUFpQjtBQUFBLE1BQ2xDLE9BQU8sT0FBTztBQUFBLE1BQ2QsUUFBUSxRQUFRO0FBQUEsTUFDaEIsU0FBUyxTQUFTO0FBQUEsTUFDbEIsZ0JBQWdCLFNBQVM7QUFBQSxNQUN6QixXQUFXLFdBQVc7QUFBQSxNQUN0QixlQUFlLGVBQWU7QUFBQSxNQUM5QixTQUFTLFNBQVM7QUFBQSxNQUNsQixlQUFlLGVBQWU7QUFBQSxNQUM5QixZQUFZLFlBQVk7QUFBQSxNQUN4QixZQUFZLFlBQVk7QUFBQSxNQUN4QixPQUFPLE9BQU87QUFBQSxNQUNkLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLE9BQU8sTUFBTTtBQUFBLE1BQ2IsUUFBUSxRQUFRO0FBQUEsTUFDaEIsT0FBTyxPQUFPO0FBQUEsTUFDZCxRQUFRLFFBQVE7QUFBQSxNQUNoQixTQUFTLFNBQVM7QUFBQSxNQUNsQixVQUFVLFVBQVU7QUFBQSxNQUNwQixVQUFVLFVBQVU7QUFBQSxNQUNwQixjQUFjLGNBQWM7QUFBQSxNQUM1QixRQUFRLFFBQVE7QUFBQSxNQUNoQixXQUFXLFdBQVc7QUFBQSxNQUN0QixTQUFTLFNBQVM7QUFBQSxNQUNsQixVQUFVLFVBQVU7QUFBQSxNQUNwQixNQUFNLE1BQU07QUFBQSxNQUNaLGNBQWMsY0FBYztBQUFBLE1BQzVCLGdCQUFnQixnQkFBZ0I7QUFBQSxNQUNoQyxPQUFPLE9BQU87QUFBQSxNQUNkLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLGVBQWUsZUFBZTtBQUFBLE1BQzlCLHNCQUFzQixlQUFlO0FBQUEsTUFDckMsY0FBYyxjQUFjO0FBQUEsTUFDNUIscUJBQXFCLGNBQWM7QUFBQSxNQUNuQyxtQkFBbUIsbUJBQW1CO0FBQUEsTUFDdEMsWUFBWSxZQUFZO0FBQUEsTUFDeEIsY0FBYyxjQUFjO0FBQUEsTUFDNUIsV0FBVyxPQUFPO0FBQUEsTUFDbEIsV0FBVyxPQUFPO0FBQUEsTUFDbEIsa0JBQWtCLGlCQUFpQjtBQUFBLE1BQ25DLGtCQUFrQixrQkFBa0I7QUFBQSxNQUNwQyxXQUFXLFFBQVE7QUFBQSxNQUNuQixVQUFVLFFBQVE7QUFBQSxNQUNsQixVQUFVLFNBQVM7QUFBQSxNQUNuQixVQUFVLFNBQVM7QUFBQSxNQUNuQixXQUFXLFdBQVc7QUFBQSxNQUN0QixhQUFhLGFBQWE7QUFBQSxNQUMxQixZQUFZLFlBQVk7QUFBQSxNQUN4QixXQUFXLFdBQVc7QUFBQSxNQUN0QixPQUFPLE9BQU87QUFBQSxNQUNkLE9BQU8sT0FBTztBQUFBLE1BQ2QsTUFBTSxNQUFNO0FBQUEsTUFDWixRQUFRLFFBQVE7QUFBQSxNQUNoQixVQUFVLFVBQVU7QUFBQSxNQUNwQixVQUFVLFVBQVU7QUFBQSxNQUNwQixXQUFXLFdBQVc7QUFBQSxNQUN0QixXQUFXLFdBQVc7QUFBQSxNQUN0QixlQUFlLGVBQWU7QUFBQSxNQUM5QixnQkFBZ0IsZ0JBQWdCO0FBQUEsTUFDaEM7QUFBQSxNQUNBLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLGtCQUFrQixrQkFBa0I7QUFBQSxNQUNwQyxTQUFTLFNBQVM7QUFBQSxNQUNsQixRQUFRLFFBQVE7QUFBQSxNQUNoQixnQkFBZ0IsZ0JBQWdCO0FBQUEsTUFDaEMsT0FBTyxPQUFPO0FBQUEsTUFDZCxhQUFhLFFBQVE7QUFBQSxJQUN2QjtBQUNBLFFBQUksV0FBV0E7QUFDZixZQUFRLFVBQVU7QUFDbEIsV0FBTyxVQUFVLFFBQVE7QUFDekIsV0FBTyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBQUE7OztBQ2xUakMsSUFBTSxXQUFXO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxnQkFBZ0I7QUFDbEI7QUFFQSxJQUFNLGdCQUFnQixDQUFDLFNBQWlCLFlBQW9EO0FBQzFGLFFBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUV4QyxRQUFNLFVBQVUsUUFBUSxhQUFhLENBQUMsUUFBUSxRQUFRLFNBQVM7QUFDL0QsTUFBSSxZQUF3QjtBQUFBO0FBQUEsZUFFZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlFLFNBQVMsUUFBUSxZQUFZO0FBQUEsNkJBQ2pCLFFBQVEsUUFBUSxpQkFBTztBQUFBLGdCQUNwQztBQUFBO0FBQUE7QUFJZCxTQUFPO0FBQ1Q7QUFFTyxJQUFNLG1CQUFtQixDQUM5QixrQkFDQSxPQUNBLFlBR0c7QUFDSCxNQUFJLENBQUMsTUFBTSxJQUFJO0FBQ2IsVUFBTTtBQUFBLEVBQ1I7QUFFQSxNQUFJLENBQUMsaUJBQWlCO0FBQVk7QUFDbEMsUUFBTSxRQUFRLENBQUM7QUFFZixhQUFXQyxjQUFhLGlCQUFpQixZQUFZO0FBQ25ELFFBQUlBLGNBQWEsVUFBVTtBQUN6QixZQUFNLE9BQU8sU0FBUyxXQUFXLFNBQVNBLFVBQVM7QUFDbkQsWUFBTSxVQUFVLGlCQUFpQjtBQUVqQyxVQUFJLENBQUMsUUFBUSxDQUFDO0FBQVM7QUFDdkIsWUFBTTtBQUFBLFFBQ0osY0FBYyxTQUFTQSxhQUFZO0FBQUEsVUFDakMsV0FBVztBQUFBLFVBQ1gsT0FBTyxpQkFBaUIsV0FBV0E7QUFBQSxRQUNyQyxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxLQUFLLEdBQUcsTUFBTTtBQUNwQixRQUFNLFdBQVcsU0FBUyxlQUFlLEVBQUU7QUFDM0MsY0FBWSxTQUFTLE9BQU87QUFDNUIsUUFBTSxVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQzVDLFVBQVEsTUFBTSxZQUFZO0FBQzFCLFVBQVEsS0FBSztBQUNiLFFBQU0sUUFBUSxDQUFDLFNBQVM7QUFDdEIsWUFBUSxZQUFZLElBQUk7QUFBQSxFQUMxQixDQUFDO0FBRUQsUUFBTSxzQkFBc0IsWUFBWSxPQUFPO0FBQ2pEOzs7QUN2RUEsdUJBQXNCO0FBVWYsSUFBTSxXQUFXLENBQUMsUUFBZ0I7QUFDdkMsTUFBSSxRQUFRLFVBQWEsUUFBUSxRQUFRLFFBQVE7QUFBSSxXQUFPO0FBQzVELFNBQU87QUFDVDtBQUNPLElBQU0sUUFBUSxDQUFDLFFBQWdCLGlCQUFBQyxRQUFVLFFBQVEsR0FBRztBQUdwRCxJQUFNLFlBQVksQ0FBQyxXQUFtQixDQUFDLFFBQWdCLElBQUksVUFBVTtBQUlyRSxJQUFNLGVBQWUsQ0FBQyxRQUFnQixJQUFJLFlBQVksTUFBTTtBQUM1RCxJQUFNLGVBQWUsQ0FBQyxRQUFnQixJQUFJLFlBQVksTUFBTTtBQUM1RCxJQUFNLFlBQVksQ0FBQyxRQUFnQixDQUFDLENBQUMsSUFBSSxNQUFNLE1BQU07QUFDckQsSUFBTSxpQkFBaUIsQ0FBQyxRQUFnQiwyQ0FBMkMsS0FBSyxHQUFHO0FBRWxHLElBQU0sbUJBQW1CLENBQUMsS0FBYSxlQUFvQjtBQUN6RCxNQUFJLENBQUMsaUJBQUFDO0FBQVc7QUFDaEIsTUFBSSxTQUFTLENBQUM7QUFDZCxhQUFXLEtBQUssWUFBWTtBQUMxQixXQUFPLEtBQUssV0FBVyxHQUFHLEdBQUc7QUFBQSxFQUMvQjtBQUNBLFNBQU87QUFDVDtBQUVlLFNBQVIsV0FDTCxTQUNBLFlBQ0EsVUFDQTtBQUNBLE1BQUksWUFBWSxVQUFhLFlBQVksTUFBTTtBQUM3QyxVQUFNLE1BQU0sNEJBQTRCO0FBQUEsRUFDMUM7QUFFQSxNQUFJLEtBQ0YsaUJBQW1DO0FBQUEsSUFDakMsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsSUFBSSxRQUFRO0FBQ1YsYUFBTyxDQUFDLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRSxTQUFTLEtBQUs7QUFBQSxJQUN2RDtBQUFBLElBQ0EsT0FBTztBQUFBLEVBQ1Q7QUFFRixRQUFNLFFBQVE7QUFDZCxpQkFBZSxRQUFRLFFBQVE7QUFFL0IsaUJBQWUsYUFBYSxpQkFBaUIsS0FBSyxVQUFVO0FBRTVELGNBQVksU0FBUyxjQUFjO0FBRW5DLFVBQVEsaUJBQWlCLFFBQVEsTUFBTTtBQUNyQyxtQkFBZSxVQUFVO0FBQ3pCLG1CQUFlLFFBQVEsUUFBUTtBQUMvQixnQkFBWSxTQUFTLGNBQWM7QUFBQSxFQUNyQyxDQUFDO0FBRUQsVUFBUSxpQkFBaUIsU0FBUyxDQUFDLE1BQWE7QUFDOUMsVUFBTUMsT0FBeUIsRUFBRSxPQUFRO0FBQ3pDLG1CQUFlLFFBQVE7QUFDdkIsbUJBQWUsUUFBUSxRQUFRO0FBQy9CLG1CQUFlLGFBQWEsaUJBQWlCQSxNQUFLLFVBQVU7QUFDNUQsZ0JBQVksU0FBUyxjQUFjO0FBQUEsRUFDckMsQ0FBQztBQUVELFFBQU0sWUFBWSxNQUFNO0FBQ3RCLG1CQUFlLFFBQVE7QUFDdkIsbUJBQWUsVUFBVTtBQUN6QixnQkFBWSxTQUFTLGNBQWM7QUFBQSxFQUNyQztBQUVBLFNBQU87QUFDVDs7O0FDdkVBLElBQU0sZUFBZSxTQUFTLGNBQWMsZ0JBQWdCO0FBQzVELElBQU0sYUFBYSxTQUFTLGNBQWMsaUJBQWlCO0FBQzNELElBQU0sZ0JBQWdCLFNBQVMsY0FBYyxvQkFBb0I7QUFFakUsSUFBTSxpQkFBaUI7QUFBQSxFQUNyQixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQ1o7QUFFQSxJQUFNLGlCQUFpQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxxQkFBcUI7QUFDcEIsbUJBQWUsUUFBUTtBQUN2QixxQkFBaUIsa0JBQWtCLFVBQVU7QUFBQSxFQUMvQztBQUNGO0FBRUEsSUFBTSxvQkFBb0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQSxXQUFXLFVBQVUsQ0FBQztBQUFBLElBQ3RCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxxQkFBcUI7QUFDcEIsbUJBQWUsV0FBVztBQUMxQixxQkFBaUIsa0JBQWtCLGVBQWU7QUFBQSxNQUNoRCxXQUFXLENBQUMsYUFBYSxnQkFBZ0IsZ0JBQWdCLGFBQWEsZ0JBQWdCO0FBQUEsSUFDeEYsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVBLElBQU0sV0FBVyxDQUFDLE1BQWE7QUFDN0IsSUFBRSxlQUFlO0FBQ2pCLE1BQUksQ0FBQyxlQUFlLE1BQU0sU0FBUyxDQUFDLGVBQWUsU0FBUyxPQUFPO0FBQ2pFLG1CQUFlO0FBQ2Ysc0JBQWtCO0FBQ2xCLFVBQU0saUJBQWlCO0FBQ3ZCO0FBQUEsRUFDRjtBQUVBO0FBQUEsSUFDRSxtQkFBbUIsZUFBZSxNQUFNLHFCQUFxQixlQUFlLFNBQVM7QUFBQSxFQUN2RjtBQUNGO0FBRUEsYUFBYSxpQkFBaUIsVUFBVSxRQUFROyIsCiAgIm5hbWVzIjogWyJfdHlwZW9mIiwgIm9iaiIsICJ0b1N0cmluZyIsICJfdHlwZW9mIiwgIm9iaiIsICJfdHlwZW9mIiwgIm9iaiIsICJGIiwgImluY2x1ZGVzIiwgIl90eXBlb2YiLCAib2JqIiwgIl90eXBlb2YiLCAib2JqIiwgIl90eXBlb2YiLCAib2JqIiwgImNoZWNrQWRkcmVzc0NvZGUiLCAiY2hlY2tCaXJ0aERheUNvZGUiLCAiZ2V0UGFyaXR5Qml0IiwgImNoZWNrUGFyaXR5Qml0IiwgImNoZWNrMTVJZENhcmRObyIsICJjaGVjazE4SWRDYXJkTm8iLCAiY2hlY2tJZENhcmRObyIsICJ2YWxpZGF0b3IiLCAiX3R5cGVvZiIsICJvYmoiLCAiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwgImtleSIsICJwaG9uZSIsICJpc1ZhbGlkRGF0ZSIsICJlbWFpbCIsICJ2YWxpZGF0b3IiLCAiX3R5cGVvZiIsICJvYmoiLCAiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwgInZhbGlkYXRvciIsICJ2YWxpZGF0b3IiLCAidmFsaWRhdG9yIiwgInZhbGlkYXRvciIsICJ2YWwiXQp9Cg==
