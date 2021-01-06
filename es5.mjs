import _typeof from '@babel/runtime/helpers/esm/typeof';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import DOMException from 'domexception';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _set from '@babel/runtime/helpers/esm/set';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _get from '@babel/runtime/helpers/esm/get';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';

/**
 * Assert a condition.
 * @param condition The condition that it should satisfy.
 * @param message The error message.
 * @param args The arguments for replacing placeholders in the message.
 */
function assert(condition, message) {
  if (!condition) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    throw new Error(format(message, args));
  }
}
/**
 * Assert a condition.
 * @param condition The condition that it should satisfy.
 * @param message The error message.
 * @param args The arguments for replacing placeholders in the message.
 */

function assertType(condition, message) {
  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    throw new TypeError(format(message, args));
  }
}
/**
 * Convert a text and arguments to one string.
 * @param message The formating text
 * @param args The arguments.
 */

function format(message, args) {
  var i = 0;
  return message.replace(/%o/g, function () {
    return anyToString(args[i++]);
  });
}
/**
 * Convert a value to a string representation.
 * @param x The value to get the string representation.
 */

function anyToString(x) {
  if (_typeof(x) !== "object" || x === null) {
    return String(x);
  }

  return Object.toString.call(x);
}

var currentErrorHandler;
/**
 * Set the error handler.
 * @param value The error handler to set.
 */

function setErrorHandler(value) {
  assertType(typeof value === "function" || value === undefined, "The error handler must be a function or undefined, but got %o.", value);
  currentErrorHandler = value;
}
/**
 * Print a error message.
 * @param maybeError The error object.
 */

function reportError(maybeError) {
  try {
    var error = maybeError instanceof Error ? maybeError : new Error(anyToString(maybeError)); // Call the user-defined error handler if exists.

    if (currentErrorHandler) {
      currentErrorHandler(error);
      return;
    } // Dispatch an `error` event if this is on a browser.


    if (typeof dispatchEvent === "function" && typeof ErrorEvent === "function") {
      dispatchEvent(new ErrorEvent("error", {
        error: error,
        message: error.message
      }));
    } // Emit an `uncaughtException` event if this is on Node.js.
    //istanbul ignore else
    else if (typeof process !== "undefined" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      } // Otherwise, print the error.


    console.error(error);
  } catch (_a) {// ignore.
  }
}

/**
 * The global object.
 */
//istanbul ignore next
var Global = typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var currentWarnHandler;
/**
 * Set the warning handler.
 * @param value The warning handler to set.
 */

function setWarningHandler(value) {
  assertType(typeof value === "function" || value === undefined, "The warning handler must be a function or undefined, but got %o.", value);
  currentWarnHandler = value;
}
/**
 * The warning information.
 */

var Warning = /*#__PURE__*/function () {
  function Warning(code, message) {
    _classCallCheck(this, Warning);

    this.code = code;
    this.message = message;
  }
  /**
   * Report this warning.
   * @param args The arguments of the warning.
   */


  _createClass(Warning, [{
    key: "warn",
    value: function warn() {
      var _a;

      try {
        var _console;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Call the user-defined warning handler if exists.
        if (currentWarnHandler) {
          currentWarnHandler(_objectSpread(_objectSpread({}, this), {}, {
            args: args
          }));
          return;
        } // Otherwise, print the warning.


        var stack = ((_a = new Error().stack) !== null && _a !== void 0 ? _a : "").replace(/^(?:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?\n){2}/g, "\n");

        (_console = console).warn.apply(_console, [this.message].concat(args, [stack]));
      } catch (_b) {// Ignore.
      }
    }
  }]);

  return Warning;
}();

var InitEventWasCalledWhileDispatching = new Warning("W01", "Unable to initialize event under dispatching.");
var FalsyWasAssignedToCancelBubble = new Warning("W02", "Assigning any falsy value to 'cancelBubble' property has no effect.");
var TruthyWasAssignedToReturnValue = new Warning("W03", "Assigning any truthy value to 'returnValue' property has no effect.");
var NonCancelableEventWasCanceled = new Warning("W04", "Unable to preventDefault on non-cancelable events.");
var CanceledInPassiveListener = new Warning("W05", "Unable to preventDefault inside passive event listener invocation.");
var EventListenerWasDuplicated = new Warning("W06", "An event listener wasn't added because it has been added already: %o, %o");
var OptionWasIgnored = new Warning("W07", "The %o option value was abandoned because the event listener wasn't added as duplicated.");
var InvalidEventListener = new Warning("W08", "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
var InvalidAttributeHandler = new Warning("W09", "Event attribute handler must be a function: %o");

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/*eslint-disable class-methods-use-this */

/**
 * An implementation of `Event` interface, that wraps a given event object.
 * `EventTarget` shim can control the internal state of this `Event` objects.
 * @see https://dom.spec.whatwg.org/#event
 */

var Event = /*#__PURE__*/function () {
  _createClass(Event, null, [{
    key: "NONE",

    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    get: function get() {
      return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */

  }, {
    key: "CAPTURING_PHASE",
    get: function get() {
      return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */

  }, {
    key: "AT_TARGET",
    get: function get() {
      return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */

  }, {
    key: "BUBBLING_PHASE",
    get: function get() {
      return BUBBLING_PHASE;
    }
    /**
     * Initialize this event instance.
     * @param type The type of this event.
     * @param eventInitDict Options to initialize.
     * @see https://dom.spec.whatwg.org/#dom-event-event
     */

  }]);

  function Event(type, eventInitDict) {
    _classCallCheck(this, Event);

    var opts = eventInitDict !== null && eventInitDict !== void 0 ? eventInitDict : {};
    internalDataMap.set(this, {
      type: String(type),
      bubbles: Boolean(opts.bubbles),
      cancelable: Boolean(opts.cancelable),
      composed: Boolean(opts.composed),
      target: null,
      currentTarget: null,
      stopPropagationFlag: false,
      stopImmediatePropagationFlag: false,
      canceledFlag: false,
      inPassiveListenerFlag: false,
      dispatchFlag: false,
      timeStamp: Date.now()
    });
    Object.defineProperty(this, "isTrusted", {
      value: false,
      enumerable: true
    });
  }
  /**
   * The type of this event.
   * @see https://dom.spec.whatwg.org/#dom-event-type
   */


  _createClass(Event, [{
    key: "composedPath",

    /**
     * The event target of the current dispatching.
     * This doesn't support node tree.
     * @see https://dom.spec.whatwg.org/#dom-event-composedpath
     */
    value: function composedPath() {
      var currentTarget = $(this).currentTarget;

      if (currentTarget) {
        return [currentTarget];
      }

      return [];
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */

  }, {
    key: "stopPropagation",

    /**
     * Stop event bubbling.
     * Because this shim doesn't support node tree, this merely changes the `cancelBubble` property value.
     * @see https://dom.spec.whatwg.org/#dom-event-stoppropagation
     */
    value: function stopPropagation() {
      $(this).stopPropagationFlag = true;
    }
    /**
     * `true` if event bubbling was stopped.
     * @deprecated
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */

  }, {
    key: "stopImmediatePropagation",

    /**
     * Stop event bubbling and subsequent event listener callings.
     * @see https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation
     */
    value: function stopImmediatePropagation() {
      var data = $(this);
      data.stopPropagationFlag = data.stopImmediatePropagationFlag = true;
    }
    /**
     * `true` if this event will bubble.
     * @see https://dom.spec.whatwg.org/#dom-event-bubbles
     */

  }, {
    key: "preventDefault",

    /**
     * Cancel the default behavior.
     * @see https://dom.spec.whatwg.org/#dom-event-preventdefault
     */
    value: function preventDefault() {
      setCancelFlag($(this));
    }
    /**
     * `true` if the default behavior was canceled.
     * @see https://dom.spec.whatwg.org/#dom-event-defaultprevented
     */

  }, {
    key: "initEvent",

    /**
     * @deprecated Don't use this method. The constructor did initialization.
     */
    value: function initEvent(type) {
      var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var data = $(this);

      if (data.dispatchFlag) {
        InitEventWasCalledWhileDispatching.warn();
        return;
      }

      internalDataMap.set(this, _objectSpread$1(_objectSpread$1({}, data), {}, {
        type: String(type),
        bubbles: Boolean(bubbles),
        cancelable: Boolean(cancelable),
        target: null,
        currentTarget: null,
        stopPropagationFlag: false,
        stopImmediatePropagationFlag: false,
        canceledFlag: false
      }));
    }
  }, {
    key: "type",
    get: function get() {
      return $(this).type;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-target
     */

  }, {
    key: "target",
    get: function get() {
      return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @deprecated Use the `target` property instead.
     * @see https://dom.spec.whatwg.org/#dom-event-srcelement
     */

  }, {
    key: "srcElement",
    get: function get() {
      return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-currenttarget
     */

  }, {
    key: "currentTarget",
    get: function get() {
      return $(this).currentTarget;
    }
  }, {
    key: "NONE",
    get: function get() {
      return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */

  }, {
    key: "CAPTURING_PHASE",
    get: function get() {
      return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */

  }, {
    key: "AT_TARGET",
    get: function get() {
      return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */

  }, {
    key: "BUBBLING_PHASE",
    get: function get() {
      return BUBBLING_PHASE;
    }
    /**
     * The current event phase.
     * @see https://dom.spec.whatwg.org/#dom-event-eventphase
     */

  }, {
    key: "eventPhase",
    get: function get() {
      return $(this).dispatchFlag ? 2 : 0;
    }
  }, {
    key: "cancelBubble",
    get: function get() {
      return $(this).stopPropagationFlag;
    }
    /**
     * Stop event bubbling if `true` is set.
     * @deprecated Use the `stopPropagation()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    ,
    set: function set(value) {
      if (value) {
        $(this).stopPropagationFlag = true;
      } else {
        FalsyWasAssignedToCancelBubble.warn();
      }
    }
  }, {
    key: "bubbles",
    get: function get() {
      return $(this).bubbles;
    }
    /**
     * `true` if this event can be canceled by the `preventDefault()` method.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelable
     */

  }, {
    key: "cancelable",
    get: function get() {
      return $(this).cancelable;
    }
    /**
     * `true` if the default behavior will act.
     * @deprecated Use the `defaultPrevented` proeprty instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */

  }, {
    key: "returnValue",
    get: function get() {
      return !$(this).canceledFlag;
    }
    /**
     * Cancel the default behavior if `false` is set.
     * @deprecated Use the `preventDefault()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    ,
    set: function set(value) {
      if (!value) {
        setCancelFlag($(this));
      } else {
        TruthyWasAssignedToReturnValue.warn();
      }
    }
  }, {
    key: "defaultPrevented",
    get: function get() {
      return $(this).canceledFlag;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-composed
     */

  }, {
    key: "composed",
    get: function get() {
      return $(this).composed;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-istrusted
     */
    //istanbul ignore next

  }, {
    key: "isTrusted",
    get: function get() {
      return false;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-timestamp
     */

  }, {
    key: "timeStamp",
    get: function get() {
      return $(this).timeStamp;
    }
  }]);

  return Event;
}();
// Helpers
//------------------------------------------------------------------------------

var NONE = 0;
var CAPTURING_PHASE = 1;
var AT_TARGET = 2;
var BUBBLING_PHASE = 3;
/**
 * Private data for event wrappers.
 */

var internalDataMap = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @returns The private data of the event.
 */

function $(event) {
  var retv = internalDataMap.get(event);
  assertType(retv != null, "'this' is expected an Event object, but got %o", event);
  return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data private data.
 */


function setCancelFlag(data) {
  if (data.inPassiveListenerFlag) {
    CanceledInPassiveListener.warn();
    return;
  }

  if (!data.cancelable) {
    NonCancelableEventWasCanceled.warn();
    return;
  }

  data.canceledFlag = true;
} // Set enumerable


Object.defineProperty(Event, "NONE", {
  enumerable: true
});
Object.defineProperty(Event, "CAPTURING_PHASE", {
  enumerable: true
});
Object.defineProperty(Event, "AT_TARGET", {
  enumerable: true
});
Object.defineProperty(Event, "BUBBLING_PHASE", {
  enumerable: true
});
var keys = Object.getOwnPropertyNames(Event.prototype);

for (var i = 0; i < keys.length; ++i) {
  if (keys[i] === "constructor") {
    continue;
  }

  Object.defineProperty(Event.prototype, keys[i], {
    enumerable: true
  });
} // Ensure `event instanceof window.Event` is `true`.


if (typeof Global !== "undefined" && typeof Global.Event !== "undefined") {
  Object.setPrototypeOf(Event.prototype, Global.Event.prototype);
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * An implementation of `Event` interface, that wraps a given event object.
 * This class controls the internal state of `Event`.
 * @see https://dom.spec.whatwg.org/#interface-event
 */

var EventWrapper = /*#__PURE__*/function (_Event) {
  _inherits(EventWrapper, _Event);

  var _super = _createSuper(EventWrapper);

  _createClass(EventWrapper, null, [{
    key: "wrap",

    /**
     * Wrap a given event object to control states.
     * @param event The event-like object to wrap.
     */
    value: function wrap(event) {
      return new (getWrapperClassOf(event))(event);
    }
  }]);

  function EventWrapper(event) {
    var _thisSuper, _thisSuper2, _this;

    _classCallCheck(this, EventWrapper);

    _this = _super.call(this, event.type, {
      bubbles: event.bubbles,
      cancelable: event.cancelable,
      composed: event.composed
    });

    if (event.cancelBubble) {
      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(EventWrapper.prototype)), "stopPropagation", _thisSuper).call(_thisSuper);
    }

    if (event.defaultPrevented) {
      _get((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(EventWrapper.prototype)), "preventDefault", _thisSuper2).call(_thisSuper2);
    }

    internalDataMap$1.set(_assertThisInitialized(_this), {
      original: event
    }); // Define accessors

    var keys = Object.keys(event);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!(key in _assertThisInitialized(_this))) {
        Object.defineProperty(_assertThisInitialized(_this), key, defineRedirectDescriptor(event, key));
      }
    }

    return _this;
  }

  _createClass(EventWrapper, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      _get(_getPrototypeOf(EventWrapper.prototype), "stopPropagation", this).call(this);

      var _$ = $$1(this),
          original = _$.original;

      if ("stopPropagation" in original) {
        original.stopPropagation();
      }
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      _get(_getPrototypeOf(EventWrapper.prototype), "stopImmediatePropagation", this).call(this);

      var _$2 = $$1(this),
          original = _$2.original;

      if ("stopImmediatePropagation" in original) {
        original.stopImmediatePropagation();
      }
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      _get(_getPrototypeOf(EventWrapper.prototype), "preventDefault", this).call(this);

      var _$3 = $$1(this),
          original = _$3.original;

      if ("preventDefault" in original) {
        original.preventDefault();
      }
    }
  }, {
    key: "cancelBubble",
    get: function get() {
      return _get(_getPrototypeOf(EventWrapper.prototype), "cancelBubble", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(EventWrapper.prototype), "cancelBubble", value, this, true);

      var _$4 = $$1(this),
          original = _$4.original;

      if ("cancelBubble" in original) {
        original.cancelBubble = value;
      }
    }
  }, {
    key: "returnValue",
    get: function get() {
      return _get(_getPrototypeOf(EventWrapper.prototype), "returnValue", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(EventWrapper.prototype), "returnValue", value, this, true);

      var _$5 = $$1(this),
          original = _$5.original;

      if ("returnValue" in original) {
        original.returnValue = value;
      }
    }
  }, {
    key: "timeStamp",
    get: function get() {
      var _$6 = $$1(this),
          original = _$6.original;

      if ("timeStamp" in original) {
        return original.timeStamp;
      }

      return _get(_getPrototypeOf(EventWrapper.prototype), "timeStamp", this);
    }
  }]);

  return EventWrapper;
}(Event);
/**
 * Private data for event wrappers.
 */

var internalDataMap$1 = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @returns The private data of the event.
 */

function $$1(event) {
  var retv = internalDataMap$1.get(event);
  assertType(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */


var wrapperClassCache = new WeakMap(); // Make association for wrappers.

wrapperClassCache.set(Object.prototype, EventWrapper);

if (typeof Global !== "undefined" && typeof Global.Event !== "undefined") {
  wrapperClassCache.set(Global.Event.prototype, EventWrapper);
}
/**
 * Get the wrapper class of a given prototype.
 * @param originalEvent The event object to wrap.
 */


function getWrapperClassOf(originalEvent) {
  var prototype = Object.getPrototypeOf(originalEvent);

  if (prototype == null) {
    return EventWrapper;
  }

  var wrapper = wrapperClassCache.get(prototype);

  if (wrapper == null) {
    wrapper = defineWrapper(getWrapperClassOf(prototype), prototype);
    wrapperClassCache.set(prototype, wrapper);
  }

  return wrapper;
}
/**
 * Define new wrapper class.
 * @param BaseEventWrapper The base wrapper class.
 * @param originalPrototype The prototype of the original event.
 */


function defineWrapper(BaseEventWrapper, originalPrototype) {
  var CustomEventWrapper = /*#__PURE__*/function (_BaseEventWrapper) {
    _inherits(CustomEventWrapper, _BaseEventWrapper);

    var _super2 = _createSuper(CustomEventWrapper);

    function CustomEventWrapper() {
      _classCallCheck(this, CustomEventWrapper);

      return _super2.apply(this, arguments);
    }

    return CustomEventWrapper;
  }(BaseEventWrapper);

  var keys = Object.keys(originalPrototype);

  for (var i = 0; i < keys.length; ++i) {
    Object.defineProperty(CustomEventWrapper.prototype, keys[i], defineRedirectDescriptor(originalPrototype, keys[i]));
  }

  return CustomEventWrapper;
}
/**
 * Get the property descriptor to redirect a given property.
 */


function defineRedirectDescriptor(obj, key) {
  var d = Object.getOwnPropertyDescriptor(obj, key);
  return {
    get: function get() {
      var original = $$1(this).original;
      var value = original[key];

      if (typeof value === "function") {
        return value.bind(original);
      }

      return value;
    },
    set: function set(value) {
      var original = $$1(this).original;
      original[key] = value;
    },
    configurable: d.configurable,
    enumerable: d.enumerable
  };
}

/**
 * Create a new listener.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 * @param signalListener The abort event listener for the abort signal.
 */

function createListener(callback, capture, passive, once, signal, signalListener) {
  return {
    callback: callback,
    flags: (capture ? 1
    /* Capture */
    : 0) | (passive ? 2
    /* Passive */
    : 0) | (once ? 4
    /* Once */
    : 0),
    signal: signal,
    signalListener: signalListener
  };
}
/**
 * Set the `removed` flag to the given listener.
 * @param listener The listener to check.
 */

function setRemoved(listener) {
  listener.flags |= 8
  /* Removed */
  ;
}
/**
 * Check if the given listener has the `capture` flag or not.
 * @param listener The listener to check.
 */

function isCapture(listener) {
  return (listener.flags & 1
  /* Capture */
  ) === 1
  /* Capture */
  ;
}
/**
 * Check if the given listener has the `passive` flag or not.
 * @param listener The listener to check.
 */

function isPassive(listener) {
  return (listener.flags & 2
  /* Passive */
  ) === 2
  /* Passive */
  ;
}
/**
 * Check if the given listener has the `once` flag or not.
 * @param listener The listener to check.
 */

function isOnce(listener) {
  return (listener.flags & 4
  /* Once */
  ) === 4
  /* Once */
  ;
}
/**
 * Check if the given listener has the `removed` flag or not.
 * @param listener The listener to check.
 */

function isRemoved(listener) {
  return (listener.flags & 8
  /* Removed */
  ) === 8
  /* Removed */
  ;
}
/**
 * Call an event listener.
 * @param listener The listener to call.
 * @param target The event target object for `thisArg`.
 * @param event The event object for the first argument.
 * @param attribute `true` if this callback is an event attribute handler.
 */

function invokeCallback(_ref, target, event) {
  var callback = _ref.callback;

  try {
    if (typeof callback === "function") {
      callback.call(target, event);
    } else if (typeof callback.handleEvent === "function") {
      callback.handleEvent(event);
    }
  } catch (thrownError) {
    reportError(thrownError);
  }
}

/**
 * Find the index of given listener.
 * This returns `-1` if not found.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 */

function findIndexOfListener(_ref, callback, capture) {
  var listeners = _ref.listeners;

  for (var i = 0; i < listeners.length; ++i) {
    if (listeners[i].callback === callback && isCapture(listeners[i]) === capture) {
      return i;
    }
  }

  return -1;
}
/**
 * Add the given listener.
 * Does copy-on-write if needed.
 * @param list The listener list.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 */

function addListener(list, callback, capture, passive, once, signal) {
  var signalListener;

  if (signal) {
    signalListener = removeListener.bind(null, list, callback, capture);
    signal.addEventListener("abort", signalListener);
  }

  var listener = createListener(callback, capture, passive, once, signal, signalListener);

  if (list.cow) {
    list.cow = false;
    list.listeners = [].concat(_toConsumableArray(list.listeners), [listener]);
  } else {
    list.listeners.push(listener);
  }

  return listener;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 * @returns `true` if it mutated the list directly.
 */

function removeListener(list, callback, capture) {
  var index = findIndexOfListener(list, callback, capture);

  if (index !== -1) {
    return removeListenerAt(list, index);
  }

  return false;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param index The index of the target listener.
 * @param disableCow Disable copy-on-write if true.
 * @returns `true` if it mutated the `listeners` array directly.
 */

function removeListenerAt(list, index) {
  var disableCow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var listener = list.listeners[index]; // Set the removed flag.

  setRemoved(listener); // Dispose the abort signal listener if exists.

  if (listener.signal) {
    listener.signal.removeEventListener("abort", listener.signalListener);
  } // Remove it from the array.


  if (list.cow && !disableCow) {
    list.cow = false;
    list.listeners = list.listeners.filter(function (_, i) {
      return i !== index;
    });
    return false;
  }

  list.listeners.splice(index, 1);
  return true;
}

/**
 * Create a new `ListenerListMap` object.
 */
function createListenerListMap() {
  return Object.create(null);
}
/**
 * Get the listener list of the given type.
 * If the listener list has not been initialized, initialize and return it.
 * @param listenerMap The listener list map.
 * @param type The event type to get.
 */

function ensureListenerList(listenerMap, type) {
  var _a;

  return (_a = listenerMap[type]) !== null && _a !== void 0 ? _a : listenerMap[type] = {
    attrCallback: undefined,
    attrListener: undefined,
    cow: false,
    listeners: []
  };
}

/**
 * An implementation of the `EventTarget` interface.
 * @see https://dom.spec.whatwg.org/#eventtarget
 */

var EventTarget = /*#__PURE__*/function () {
  /**
   * Initialize this instance.
   */
  function EventTarget() {
    _classCallCheck(this, EventTarget);

    internalDataMap$2.set(this, createListenerListMap());
  } // Implementation


  _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type0, callback0, options0) {
      var listenerMap = $$2(this);

      var _normalizeAddOptions = normalizeAddOptions(type0, callback0, options0),
          callback = _normalizeAddOptions.callback,
          capture = _normalizeAddOptions.capture,
          once = _normalizeAddOptions.once,
          passive = _normalizeAddOptions.passive,
          signal = _normalizeAddOptions.signal,
          type = _normalizeAddOptions.type;

      if (callback == null || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
        return;
      }

      var list = ensureListenerList(listenerMap, type); // Find existing listener.

      var i = findIndexOfListener(list, callback, capture);

      if (i !== -1) {
        warnDuplicate(list.listeners[i], passive, once, signal);
        return;
      } // Add the new listener.


      addListener(list, callback, capture, passive, once, signal);
    } // Implementation

  }, {
    key: "removeEventListener",
    value: function removeEventListener(type0, callback0, options0) {
      var listenerMap = $$2(this);

      var _normalizeOptions = normalizeOptions(type0, callback0, options0),
          callback = _normalizeOptions.callback,
          capture = _normalizeOptions.capture,
          type = _normalizeOptions.type;

      var list = listenerMap[type];

      if (callback != null && list) {
        removeListener(list, callback, capture);
      }
    } // Implementation

  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event0) {
      var list = $$2(this)[String(event0.type)];

      if (list == null) {
        return true;
      }

      var event = event0 instanceof Event ? event0 : EventWrapper.wrap(event0);
      var eventData = $(event);

      if (eventData.dispatchFlag) {
        throw new DOMException("This event has been in dispatching.", "InvalidStateError");
      }

      assert(event.isTrusted === false, "'isTrusted' property must be false");
      eventData.dispatchFlag = true;
      eventData.target = eventData.currentTarget = this;

      if (!eventData.stopPropagationFlag) {
        var cow = list.cow,
            listeners = list.listeners; // Set copy-on-write flag.

        list.cow = true; // Call listeners.

        for (var i = 0; i < listeners.length; ++i) {
          var listener = listeners[i]; // Skip if removed.

          if (isRemoved(listener)) {
            continue;
          } // Remove this listener if has the `once` flag.


          if (isOnce(listener) && removeListenerAt(list, i, !cow)) {
            // Because this listener was removed, the next index is the
            // same as the current value.
            i -= 1;
          } // Call this listener with the `passive` flag.


          eventData.inPassiveListenerFlag = isPassive(listener);
          invokeCallback(listener, this, event);
          eventData.inPassiveListenerFlag = false; // Stop if the `event.stopImmediatePropagation()` method was called.

          if (eventData.stopImmediatePropagationFlag) {
            break;
          }
        } // Restore copy-on-write flag.


        if (!cow) {
          list.cow = false;
        }
      }

      eventData.target = null;
      eventData.currentTarget = null;
      eventData.stopImmediatePropagationFlag = false;
      eventData.stopPropagationFlag = false;
      eventData.dispatchFlag = false;
      return !eventData.canceledFlag;
    }
  }]);

  return EventTarget;
}();
/**
 * Internal data.
 */

var internalDataMap$2 = new WeakMap();
/**
 * Get private data.
 * @param target The event target object to get private data.
 * @returns The private data of the event.
 */

function $$2(target) {
  var retv = internalDataMap$2.get(target);
  assertType(retv != null, "'this' is expected an EventTarget object, but got %o", target);
  return retv;
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */


function normalizeAddOptions(type, callback, options) {
  var _a;

  assertCallback(callback);

  if (_typeof(options) === "object" && options !== null) {
    return {
      type: String(type),
      callback: callback !== null && callback !== void 0 ? callback : undefined,
      capture: Boolean(options.capture),
      passive: Boolean(options.passive),
      once: Boolean(options.once),
      signal: (_a = options.signal) !== null && _a !== void 0 ? _a : undefined
    };
  }

  return {
    type: String(type),
    callback: callback !== null && callback !== void 0 ? callback : undefined,
    capture: Boolean(options),
    passive: false,
    once: false,
    signal: undefined
  };
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */


function normalizeOptions(type, callback, options) {
  assertCallback(callback);

  if (_typeof(options) === "object" && options !== null) {
    return {
      type: String(type),
      callback: callback !== null && callback !== void 0 ? callback : undefined,
      capture: Boolean(options.capture)
    };
  }

  return {
    type: String(type),
    callback: callback !== null && callback !== void 0 ? callback : undefined,
    capture: Boolean(options)
  };
}
/**
 * Assert the type of 'callback' argument.
 * @param callback The callback to check.
 */


function assertCallback(callback) {
  if (typeof callback === "function" || _typeof(callback) === "object" && callback !== null && typeof callback.handleEvent === "function") {
    return;
  }

  if (callback == null || _typeof(callback) === "object") {
    InvalidEventListener.warn(callback);
    return;
  }

  throw new TypeError(format(InvalidEventListener.message, [callback]));
}
/**
 * Print warning for duplicated.
 * @param listener The current listener that is duplicated.
 * @param passive The passive flag of the new duplicated listener.
 * @param once The once flag of the new duplicated listener.
 * @param signal The signal object of the new duplicated listener.
 */


function warnDuplicate(listener, passive, once, signal) {
  EventListenerWasDuplicated.warn(isCapture(listener) ? "capture" : "bubble", listener.callback);

  if (isPassive(listener) !== passive) {
    OptionWasIgnored.warn("passive");
  }

  if (isOnce(listener) !== once) {
    OptionWasIgnored.warn("once");
  }

  if (listener.signal !== signal) {
    OptionWasIgnored.warn("signal");
  }
} // Set enumerable


var keys$1 = Object.getOwnPropertyNames(EventTarget.prototype);

for (var i$1 = 0; i$1 < keys$1.length; ++i$1) {
  if (keys$1[i$1] === "constructor") {
    continue;
  }

  Object.defineProperty(EventTarget.prototype, keys$1[i$1], {
    enumerable: true
  });
} // Ensure `eventTarget instanceof window.EventTarget` is `true`.


if (typeof Global !== "undefined" && typeof Global.EventTarget !== "undefined") {
  Object.setPrototypeOf(EventTarget.prototype, Global.EventTarget.prototype);
}

/**
 * Get the current value of a given event attribute.
 * @param target The `EventTarget` object to get.
 * @param type The event type.
 */

function getEventAttributeValue(target, type) {
  var _a, _b;

  return (_b = (_a = $$2(target)[type]) === null || _a === void 0 ? void 0 : _a.attrCallback) !== null && _b !== void 0 ? _b : null;
}
/**
 * Set an event listener to a given event attribute.
 * @param target The `EventTarget` object to set.
 * @param type The event type.
 * @param callback The event listener.
 */

function setEventAttributeValue(target, type, callback) {
  if (callback != null && typeof callback !== "function") {
    InvalidAttributeHandler.warn(callback);
  }

  if (typeof callback === "function" || _typeof(callback) === "object" && callback !== null) {
    upsertEventAttributeListener(target, type, callback);
  } else {
    removeEventAttributeListener(target, type);
  }
} //------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Update or insert the given event attribute handler.
 * @param target The `EventTarget` object to set.
 * @param type The event type.
 * @param callback The event listener.
 */

function upsertEventAttributeListener(target, type, callback) {
  var list = ensureListenerList($$2(target), String(type));
  list.attrCallback = callback;

  if (list.attrListener == null) {
    list.attrListener = addListener(list, defineEventAttributeCallback(list), false, false, false, undefined);
  }
}
/**
 * Remove the given event attribute handler.
 * @param target The `EventTarget` object to remove.
 * @param type The event type.
 * @param callback The event listener.
 */


function removeEventAttributeListener(target, type) {
  var list = $$2(target)[String(type)];

  if (list && list.attrListener) {
    removeListener(list, list.attrListener.callback, false);
    list.attrCallback = list.attrListener = undefined;
  }
}
/**
 * Define the callback function for the given listener list object.
 * It calls `attrCallback` property if the property value is a function.
 * @param list The `ListenerList` object.
 */


function defineEventAttributeCallback(list) {
  return function (event) {
    var callback = list.attrCallback;

    if (typeof callback === "function") {
      callback.call(this, event);
    }
  };
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Define an `EventTarget` class that has event attibutes.
 * @param types The types to define event attributes.
 * @deprecated Use `getEventAttributeValue`/`setEventAttributeValue` pair on your derived class instead because of static analysis friendly.
 */

function defineCustomEventTarget() {
  var CustomEventTarget = /*#__PURE__*/function (_EventTarget) {
    _inherits(CustomEventTarget, _EventTarget);

    var _super = _createSuper$1(CustomEventTarget);

    function CustomEventTarget() {
      _classCallCheck(this, CustomEventTarget);

      return _super.apply(this, arguments);
    }

    return CustomEventTarget;
  }(EventTarget);

  for (var i = 0; i < arguments.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, i < 0 || arguments.length <= i ? undefined : arguments[i]);
  }

  return CustomEventTarget;
}
/**
 * Define an event attribute.
 * @param target The `EventTarget` object to define an event attribute.
 * @param type The event type to define.
 * @param _eventClass Unused, but to infer `Event` class type.
 * @deprecated Use `getEventAttributeValue`/`setEventAttributeValue` pair on your derived class instead because of static analysis friendly.
 */

function defineEventAttribute(target, type, _eventClass) {
  Object.defineProperty(target, "on".concat(type), {
    get: function get() {
      return getEventAttributeValue(this, type);
    },
    set: function set(value) {
      setEventAttributeValue(this, type, value);
    },
    configurable: true,
    enumerable: true
  });
}

export default EventTarget;
export { Event, EventTarget, defineCustomEventTarget, defineEventAttribute, getEventAttributeValue, setErrorHandler, setEventAttributeValue, setWarningHandler };
//# sourceMappingURL=es5.mjs.map
