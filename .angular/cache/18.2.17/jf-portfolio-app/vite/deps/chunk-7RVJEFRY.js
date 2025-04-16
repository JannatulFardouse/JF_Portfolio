import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js
var generatedAttribute = "generated";
var mouseDownEvent = "pointerdown";
var mouseUpEvent = "pointerup";
var mouseLeaveEvent = "pointerleave";
var mouseOutEvent = "pointerout";
var mouseMoveEvent = "pointermove";
var touchStartEvent = "touchstart";
var touchEndEvent = "touchend";
var touchMoveEvent = "touchmove";
var touchCancelEvent = "touchcancel";
var resizeEvent = "resize";
var visibilityChangeEvent = "visibilitychange";
var errorPrefix = "tsParticles - Error";
var percentDenominator = 100;
var half = 0.5;
var millisecondsToSeconds = 1e3;
var originPoint = {
  x: 0,
  y: 0,
  z: 0
};
var defaultTransform = {
  a: 1,
  b: 0,
  c: 0,
  d: 1
};
var randomColorValue = "random";
var midColorValue = "mid";
var double = 2;
var doublePI = Math.PI * double;
var defaultFps = 60;
var defaultAlpha = 1;
var generatedTrue = "true";
var generatedFalse = "false";
var canvasTag = "canvas";
var defaultRetryCount = 0;
var squareExp = 2;
var qTreeCapacity = 4;
var defaultRemoveQuantity = 1;
var defaultRatio = 1;
var defaultReduceFactor = 1;
var subdivideCount = 4;
var inverseFactorNumerator = 1;
var rgbMax = 255;
var hMax = 360;
var sMax = 100;
var lMax = 100;
var hMin = 0;
var sMin = 0;
var hPhase = 60;
var empty = 0;
var quarter = 0.25;
var threeQuarter = half + quarter;
var minVelocity = 0;
var defaultTransformValue = 1;
var minimumSize = 0;
var minimumLength = 0;
var zIndexFactorOffset = 1;
var defaultOpacity = 1;
var clickRadius = 1;
var touchEndLengthOffset = 1;
var minCoordinate = 0;
var removeDeleteCount = 1;
var removeMinIndex = 0;
var defaultFpsLimit = 120;
var minFpsLimit = 0;
var canvasFirstIndex = 0;
var loadRandomFactor = 1e4;
var loadMinIndex = 0;
var one = 1;
var none = 0;
var decayOffset = 1;
var tryCountIncrement = 1;
var minRetries = 0;
var rollFactor = 1;
var minZ = 0;
var defaultRadius = 0;
var posOffset = -quarter;
var sizeFactor = 1.5;
var minLimit = 0;
var countOffset = 1;
var minCount = 0;
var minIndex = 0;
var manualCount = 0;
var lengthOffset = 1;
var defaultDensityFactor = 1;
var deleteCount = 1;
var touchDelay = 500;
var manualDefaultPosition = 50;
var defaultAngle = 0;
var identity = 1;
var minStrokeWidth = 0;
var lFactor = 1;
var lMin = 0;
var rgbFactor = 255;
var triple = 3;
var sextuple = 6;
var sNormalizedOffset = 1;
var phaseNumerator = 1;
var defaultRgbMin = 0;
var defaultVelocity = 0;
var defaultLoops = 0;
var defaultTime = 0;

// ../../node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js
var MoveDirection;
(function(MoveDirection2) {
  MoveDirection2["bottom"] = "bottom";
  MoveDirection2["bottomLeft"] = "bottom-left";
  MoveDirection2["bottomRight"] = "bottom-right";
  MoveDirection2["left"] = "left";
  MoveDirection2["none"] = "none";
  MoveDirection2["right"] = "right";
  MoveDirection2["top"] = "top";
  MoveDirection2["topLeft"] = "top-left";
  MoveDirection2["topRight"] = "top-right";
  MoveDirection2["outside"] = "outside";
  MoveDirection2["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));

// ../../node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isString(arg) {
  return typeof arg === "string";
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function isNull(arg) {
  return arg === null || arg === void 0;
}

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js
var Vector3d = class _Vector3d {
  constructor(xOrCoords, y, z) {
    this._updateFromAngle = (angle, length) => {
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    };
    if (!isNumber(xOrCoords) && xOrCoords) {
      this.x = xOrCoords.x;
      this.y = xOrCoords.y;
      const coords3d = xOrCoords;
      this.z = coords3d.z ? coords3d.z : originPoint.z;
    } else if (xOrCoords !== void 0 && y !== void 0) {
      this.x = xOrCoords;
      this.y = y;
      this.z = z ?? originPoint.z;
    } else {
      throw new Error(`${errorPrefix} Vector3d not initialized correctly`);
    }
  }
  static get origin() {
    return _Vector3d.create(originPoint.x, originPoint.y, originPoint.z);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(angle) {
    this._updateFromAngle(angle, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(length) {
    this._updateFromAngle(this.angle, length);
  }
  static clone(source) {
    return _Vector3d.create(source.x, source.y, source.z);
  }
  static create(x, y, z) {
    return new _Vector3d(x, y, z);
  }
  add(v) {
    return _Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  addTo(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  copy() {
    return _Vector3d.clone(this);
  }
  distanceTo(v) {
    return this.sub(v).length;
  }
  distanceToSq(v) {
    return this.sub(v).getLengthSq();
  }
  div(n) {
    return _Vector3d.create(this.x / n, this.y / n, this.z / n);
  }
  divTo(n) {
    this.x /= n;
    this.y /= n;
    this.z /= n;
  }
  getLengthSq() {
    return this.x ** squareExp + this.y ** squareExp;
  }
  mult(n) {
    return _Vector3d.create(this.x * n, this.y * n, this.z * n);
  }
  multTo(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }
  normalize() {
    const length = this.length;
    if (length != none) {
      this.multTo(inverseFactorNumerator / length);
    }
  }
  rotate(angle) {
    return _Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), originPoint.z);
  }
  setTo(c) {
    this.x = c.x;
    this.y = c.y;
    const v3d = c;
    this.z = v3d.z ? v3d.z : originPoint.z;
  }
  sub(v) {
    return _Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
};
var Vector = class _Vector extends Vector3d {
  constructor(xOrCoords, y) {
    super(xOrCoords, y, originPoint.z);
  }
  static get origin() {
    return _Vector.create(originPoint.x, originPoint.y);
  }
  static clone(source) {
    return _Vector.create(source.x, source.y);
  }
  static create(x, y) {
    return new _Vector(x, y);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Utils/NumberUtils.js
var _random = Math.random;
var _animationLoop = {
  nextFrame: (cb) => requestAnimationFrame(cb),
  cancel: (idx) => cancelAnimationFrame(idx)
};
function setRandom(rnd = Math.random) {
  _random = rnd;
}
function getRandom() {
  const min = 0, max = 1;
  return clamp(_random(), min, max - Number.EPSILON);
}
function setAnimationFunctions(nextFrame, cancel) {
  _animationLoop.nextFrame = (callback) => nextFrame(callback);
  _animationLoop.cancel = (handle) => cancel(handle);
}
function animate(fn) {
  return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
  _animationLoop.cancel(handle);
}
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
  return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
  const max = getRangeMax(r), minOffset = 0;
  let min = getRangeMin(r);
  if (max === min) {
    min = minOffset;
  }
  return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
  return isNumber(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
  return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
  return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
  if (source === value || value === void 0 && isNumber(source)) {
    return source;
  }
  const min = getRangeMin(source), max = getRangeMax(source);
  return value !== void 0 ? {
    min: Math.min(min, value),
    max: Math.max(max, value)
  } : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
  const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y, squareExp2 = 2;
  return {
    dx,
    dy,
    distance: Math.sqrt(dx ** squareExp2 + dy ** squareExp2)
  };
}
function getDistance(pointA, pointB) {
  return getDistances(pointA, pointB).distance;
}
function degToRad(degrees) {
  const PIDeg = 180;
  return degrees * Math.PI / PIDeg;
}
function getParticleDirectionAngle(direction, position, center) {
  if (isNumber(direction)) {
    return degToRad(direction);
  }
  switch (direction) {
    case MoveDirection.top:
      return -Math.PI * half;
    case MoveDirection.topRight:
      return -Math.PI * quarter;
    case MoveDirection.right:
      return empty;
    case MoveDirection.bottomRight:
      return Math.PI * quarter;
    case MoveDirection.bottom:
      return Math.PI * half;
    case MoveDirection.bottomLeft:
      return Math.PI * threeQuarter;
    case MoveDirection.left:
      return Math.PI;
    case MoveDirection.topLeft:
      return -Math.PI * threeQuarter;
    case MoveDirection.inside:
      return Math.atan2(center.y - position.y, center.x - position.x);
    case MoveDirection.outside:
      return Math.atan2(position.y - center.y, position.x - center.x);
    default:
      return getRandom() * doublePI;
  }
}
function getParticleBaseVelocity(direction) {
  const baseVelocity = Vector.origin;
  baseVelocity.length = 1;
  baseVelocity.angle = direction;
  return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
  return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * double * m2 / (m1 + m2), v1.y);
}
function calcPositionFromSize(data) {
  return data.position?.x !== void 0 && data.position.y !== void 0 ? {
    x: data.position.x * data.size.width / percentDenominator,
    y: data.position.y * data.size.height / percentDenominator
  } : void 0;
}
function calcPositionOrRandomFromSize(data) {
  return {
    x: (data.position?.x ?? getRandom() * percentDenominator) * data.size.width / percentDenominator,
    y: (data.position?.y ?? getRandom() * percentDenominator) * data.size.height / percentDenominator
  };
}
function calcPositionOrRandomFromSizeRanged(data) {
  const position = {
    x: data.position?.x !== void 0 ? getRangeValue(data.position.x) : void 0,
    y: data.position?.y !== void 0 ? getRangeValue(data.position.y) : void 0
  };
  return calcPositionOrRandomFromSize({
    size: data.size,
    position
  });
}
function calcExactPositionOrRandomFromSize(data) {
  return {
    x: data.position?.x ?? getRandom() * data.size.width,
    y: data.position?.y ?? getRandom() * data.size.height
  };
}
function calcExactPositionOrRandomFromSizeRanged(data) {
  const position = {
    x: data.position?.x !== void 0 ? getRangeValue(data.position.x) : void 0,
    y: data.position?.y !== void 0 ? getRangeValue(data.position.y) : void 0
  };
  return calcExactPositionOrRandomFromSize({
    size: data.size,
    position
  });
}
function parseAlpha(input) {
  const defaultAlpha2 = 1;
  if (!input) {
    return defaultAlpha2;
  }
  return input.endsWith("%") ? parseFloat(input) / percentDenominator : parseFloat(input);
}

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js
var AnimationMode;
(function(AnimationMode2) {
  AnimationMode2["auto"] = "auto";
  AnimationMode2["increase"] = "increase";
  AnimationMode2["decrease"] = "decrease";
  AnimationMode2["random"] = "random";
})(AnimationMode || (AnimationMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js
var AnimationStatus;
(function(AnimationStatus2) {
  AnimationStatus2["increasing"] = "increasing";
  AnimationStatus2["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js
var DestroyType;
(function(DestroyType2) {
  DestroyType2["none"] = "none";
  DestroyType2["max"] = "max";
  DestroyType2["min"] = "min";
})(DestroyType || (DestroyType = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js
var OutModeDirection;
(function(OutModeDirection2) {
  OutModeDirection2["bottom"] = "bottom";
  OutModeDirection2["left"] = "left";
  OutModeDirection2["right"] = "right";
  OutModeDirection2["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js
var PixelMode;
(function(PixelMode2) {
  PixelMode2["precise"] = "precise";
  PixelMode2["percent"] = "percent";
})(PixelMode || (PixelMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js
var StartValueType;
(function(StartValueType2) {
  StartValueType2["max"] = "max";
  StartValueType2["min"] = "min";
  StartValueType2["random"] = "random";
})(StartValueType || (StartValueType = {}));

// ../../node_modules/@tsparticles/engine/browser/Utils/Utils.js
var _logger = {
  debug: console.debug,
  error: console.error,
  info: console.info,
  log: console.log,
  verbose: console.log,
  warning: console.warn
};
function setLogger(logger) {
  _logger.debug = logger.debug || _logger.debug;
  _logger.error = logger.error || _logger.error;
  _logger.info = logger.info || _logger.info;
  _logger.log = logger.log || _logger.log;
  _logger.verbose = logger.verbose || _logger.verbose;
  _logger.warning = logger.warning || _logger.warning;
}
function getLogger() {
  return _logger;
}
function memoize(fn) {
  const cache = /* @__PURE__ */ new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
function rectSideBounce(data) {
  const res = {
    bounced: false
  }, {
    pSide,
    pOtherSide,
    rectSide,
    rectOtherSide,
    velocity,
    factor
  } = data;
  if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
    return res;
  }
  if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * half && velocity > minVelocity || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * half && velocity < minVelocity) {
    res.velocity = velocity * -factor;
    res.bounced = true;
  }
  return res;
}
function checkSelector(element, selectors) {
  const res = executeOnSingleOrMultiple(selectors, (selector) => {
    return element.matches(selector);
  });
  return isArray(res) ? res.some((t) => t) : res;
}
function isSsr() {
  return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
  return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
  if (!hasMatchMedia()) {
    return;
  }
  return matchMedia(query);
}
function safeIntersectionObserver(callback) {
  if (isSsr() || typeof IntersectionObserver === "undefined") {
    return;
  }
  return new IntersectionObserver(callback);
}
function safeMutationObserver(callback) {
  if (isSsr() || typeof MutationObserver === "undefined") {
    return;
  }
  return new MutationObserver(callback);
}
function isInArray(value, array) {
  const invalidIndex = -1;
  return value === array || isArray(array) && array.indexOf(value) > invalidIndex;
}
function loadFont(font, weight) {
  return __async(this, null, function* () {
    try {
      yield document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch {
    }
  });
}
function arrayRandomIndex(array) {
  return Math.floor(getRandom() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
  return array[index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size, offset, radius, direction) {
  const minRadius = 0;
  return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
  let inside = true;
  if (!direction || direction === OutModeDirection.bottom) {
    inside = bounds.top < size.height + offset.x;
  }
  if (inside && (!direction || direction === OutModeDirection.left)) {
    inside = bounds.right > offset.x;
  }
  if (inside && (!direction || direction === OutModeDirection.right)) {
    inside = bounds.left < size.width + offset.y;
  }
  if (inside && (!direction || direction === OutModeDirection.top)) {
    inside = bounds.bottom > offset.y;
  }
  return inside;
}
function calculateBounds(point, radius) {
  return {
    bottom: point.y + radius,
    left: point.x - radius,
    right: point.x + radius,
    top: point.y - radius
  };
}
function deepExtend(destination, ...sources) {
  for (const source of sources) {
    if (source === void 0 || source === null) {
      continue;
    }
    if (!isObject(source)) {
      destination = source;
      continue;
    }
    const sourceIsArray = Array.isArray(source);
    if (sourceIsArray && (isObject(destination) || !destination || !Array.isArray(destination))) {
      destination = [];
    } else if (!sourceIsArray && (isObject(destination) || !destination || Array.isArray(destination))) {
      destination = {};
    }
    for (const key in source) {
      if (key === "__proto__") {
        continue;
      }
      const sourceDict = source, value = sourceDict[key], destDict = destination;
      destDict[key] = isObject(value) && Array.isArray(value) ? value.map((v) => deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
    }
  }
  return destination;
}
function isDivModeEnabled(mode, divs) {
  return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
  executeOnSingleOrMultiple(divs, (div) => {
    const divMode2 = div.mode, divEnabled = div.enable;
    if (divEnabled && isInArray(mode, divMode2)) {
      singleDivModeExecute(div, callback);
    }
  });
}
function singleDivModeExecute(div, callback) {
  const selectors = div.selectors;
  executeOnSingleOrMultiple(selectors, (selector) => {
    callback(selector, div);
  });
}
function divMode(divs, element) {
  if (!element || !divs) {
    return;
  }
  return findItemFromSingleOrMultiple(divs, (div) => {
    return checkSelector(element, div.selectors);
  });
}
function circleBounceDataFromParticle(p) {
  return {
    position: p.getPosition(),
    radius: p.getRadius(),
    mass: p.getMass(),
    velocity: p.velocity,
    factor: Vector.create(getRangeValue(p.options.bounce.horizontal.value), getRangeValue(p.options.bounce.vertical.value))
  };
}
function circleBounce(p1, p2) {
  const {
    x: xVelocityDiff,
    y: yVelocityDiff
  } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], {
    dx: xDist,
    dy: yDist
  } = getDistances(pos2, pos1), minimumDistance = 0;
  if (xVelocityDiff * xDist + yVelocityDiff * yDist < minimumDistance) {
    return;
  }
  const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
  p1.velocity.x = vFinal1.x * p1.factor.x;
  p1.velocity.y = vFinal1.y * p1.factor.y;
  p2.velocity.x = vFinal2.x * p2.factor.x;
  p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
  const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), bounceOptions = particle.options.bounce, resH = rectSideBounce({
    pSide: {
      min: bounds.left,
      max: bounds.right
    },
    pOtherSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    rectSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    rectOtherSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    velocity: particle.velocity.x,
    factor: getRangeValue(bounceOptions.horizontal.value)
  });
  if (resH.bounced) {
    if (resH.velocity !== void 0) {
      particle.velocity.x = resH.velocity;
    }
    if (resH.position !== void 0) {
      particle.position.x = resH.position;
    }
  }
  const resV = rectSideBounce({
    pSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    pOtherSide: {
      min: bounds.left,
      max: bounds.right
    },
    rectSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    rectOtherSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    velocity: particle.velocity.y,
    factor: getRangeValue(bounceOptions.vertical.value)
  });
  if (resV.bounced) {
    if (resV.velocity !== void 0) {
      particle.velocity.y = resV.velocity;
    }
    if (resV.position !== void 0) {
      particle.position.y = resV.position;
    }
  }
}
function executeOnSingleOrMultiple(obj, callback) {
  const defaultIndex = 0;
  return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, defaultIndex);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
  return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
  if (isArray(obj)) {
    return obj.find((t, index) => callback(t, index));
  }
  const defaultIndex = 0;
  return callback(obj, defaultIndex) ? obj : void 0;
}
function initParticleNumericAnimationValue(options, pxRatio) {
  const valueRange = options.value, animationOptions = options.animation, res = {
    delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
    enable: animationOptions.enable,
    value: getRangeValue(options.value) * pxRatio,
    max: getRangeMax(valueRange) * pxRatio,
    min: getRangeMin(valueRange) * pxRatio,
    loops: 0,
    maxLoops: getRangeValue(animationOptions.count),
    time: 0
  }, decayOffset2 = 1;
  if (animationOptions.enable) {
    res.decay = decayOffset2 - getRangeValue(animationOptions.decay);
    switch (animationOptions.mode) {
      case AnimationMode.increase:
        res.status = AnimationStatus.increasing;
        break;
      case AnimationMode.decrease:
        res.status = AnimationStatus.decreasing;
        break;
      case AnimationMode.random:
        res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
        break;
    }
    const autoStatus = animationOptions.mode === AnimationMode.auto;
    switch (animationOptions.startValue) {
      case StartValueType.min:
        res.value = res.min;
        if (autoStatus) {
          res.status = AnimationStatus.increasing;
        }
        break;
      case StartValueType.max:
        res.value = res.max;
        if (autoStatus) {
          res.status = AnimationStatus.decreasing;
        }
        break;
      case StartValueType.random:
      default:
        res.value = randomInRange(res);
        if (autoStatus) {
          res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
        }
        break;
    }
  }
  res.initialValue = res.value;
  return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
  const isPercent = positionOrSize.mode === PixelMode.percent;
  if (!isPercent) {
    const _a = positionOrSize, {
      mode: _
    } = _a, rest = __objRest(_a, [
      "mode"
    ]);
    return rest;
  }
  const isPosition = "x" in positionOrSize;
  if (isPosition) {
    return {
      x: positionOrSize.x / percentDenominator * canvasSize.width,
      y: positionOrSize.y / percentDenominator * canvasSize.height
    };
  } else {
    return {
      width: positionOrSize.width / percentDenominator * canvasSize.width,
      height: positionOrSize.height / percentDenominator * canvasSize.height
    };
  }
}
function getPosition(position, canvasSize) {
  return getPositionOrSize(position, canvasSize);
}
function getSize(size, canvasSize) {
  return getPositionOrSize(size, canvasSize);
}
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
  switch (destroyType) {
    case DestroyType.max:
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case DestroyType.min:
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
function updateAnimation(particle, data, changeDirection, destroyType, delta) {
  const minLoops = 0, minDelay = 0, identity2 = 1, minVelocity2 = 0, minDecay = 1;
  if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) {
    return;
  }
  const velocity = (data.velocity ?? minVelocity2) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
  if (!data.time) {
    data.time = 0;
  }
  if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
    data.time += delta.value;
  }
  if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
    return;
  }
  switch (data.status) {
    case AnimationStatus.increasing:
      if (data.value >= maxValue) {
        if (changeDirection) {
          data.status = AnimationStatus.decreasing;
        } else {
          data.value -= maxValue;
        }
        if (!data.loops) {
          data.loops = minLoops;
        }
        data.loops++;
      } else {
        data.value += velocity;
      }
      break;
    case AnimationStatus.decreasing:
      if (data.value <= minValue) {
        if (changeDirection) {
          data.status = AnimationStatus.increasing;
        } else {
          data.value += maxValue;
        }
        if (!data.loops) {
          data.loops = minLoops;
        }
        data.loops++;
      } else {
        data.value -= velocity;
      }
  }
  if (data.velocity && decay !== identity2) {
    data.velocity *= decay;
  }
  checkDestroy(particle, destroyType, data.value, minValue, maxValue);
  if (!particle.destroyed) {
    data.value = clamp(data.value, minValue, maxValue);
  }
}
function cloneStyle(style) {
  const clonedStyle = document.createElement("div").style;
  if (!style) {
    return clonedStyle;
  }
  for (const key in style) {
    const styleKey = style[key];
    if (!Object.prototype.hasOwnProperty.call(style, key) || isNull(styleKey)) {
      continue;
    }
    const styleValue = style.getPropertyValue?.(styleKey);
    if (!styleValue) {
      continue;
    }
    const stylePriority = style.getPropertyPriority?.(styleKey);
    if (!stylePriority) {
      clonedStyle.setProperty?.(styleKey, styleValue);
    } else {
      clonedStyle.setProperty?.(styleKey, styleValue, stylePriority);
    }
  }
  return clonedStyle;
}
function computeFullScreenStyle(zIndex) {
  const fullScreenStyle = document.createElement("div").style, radix = 10, style = {
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    borderWidth: "0",
    position: "fixed",
    zIndex: zIndex.toString(radix),
    "z-index": zIndex.toString(radix),
    top: "0",
    left: "0"
  };
  for (const key in style) {
    const value = style[key];
    fullScreenStyle.setProperty(key, value);
  }
  return fullScreenStyle;
}
var getFullScreenStyle = memoize(computeFullScreenStyle);

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js
var AlterType;
(function(AlterType2) {
  AlterType2["darken"] = "darken";
  AlterType2["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));

// ../../node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js
function stringToRgba(engine, input) {
  if (!input) {
    return;
  }
  for (const manager of engine.colorManagers.values()) {
    if (input.startsWith(manager.stringPrefix)) {
      return manager.parseString(input);
    }
  }
}
function rangeColorToRgb(engine, input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? {
    value: input
  } : input;
  if (isString(color.value)) {
    return colorToRgb(engine, color.value, index, useIndex);
  }
  if (isArray(color.value)) {
    return rangeColorToRgb(engine, {
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const manager of engine.colorManagers.values()) {
    const res = manager.handleRangeColor(color);
    if (res) {
      return res;
    }
  }
}
function colorToRgb(engine, input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? {
    value: input
  } : input;
  if (isString(color.value)) {
    return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(engine, color.value);
  }
  if (isArray(color.value)) {
    return colorToRgb(engine, {
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const manager of engine.colorManagers.values()) {
    const res = manager.handleColor(color);
    if (res) {
      return res;
    }
  }
}
function colorToHsl(engine, color, index, useIndex = true) {
  const rgb = colorToRgb(engine, color, index, useIndex);
  return rgb ? rgbToHsl(rgb) : void 0;
}
function rangeColorToHsl(engine, color, index, useIndex = true) {
  const rgb = rangeColorToRgb(engine, color, index, useIndex);
  return rgb ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
  const r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
    h: hMin,
    l: (max + min) * half,
    s: sMin
  };
  if (max !== min) {
    res.s = res.l < half ? (max - min) / (max + min) : (max - min) / (double - max - min);
    res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? double + (b1 - r1) / (max - min) : double * double + (r1 - g1) / (max - min);
  }
  res.l *= lMax;
  res.s *= sMax;
  res.h *= hPhase;
  if (res.h < hMin) {
    res.h += hMax;
  }
  if (res.h >= hMax) {
    res.h -= hMax;
  }
  return res;
}
function stringToAlpha(engine, input) {
  return stringToRgba(engine, input)?.a;
}
function stringToRgb(engine, input) {
  return stringToRgba(engine, input);
}
function hslToRgb(hsl) {
  const h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax;
  if (s === sMin) {
    const grayscaleValue = Math.round(lNormalized * rgbFactor);
    return {
      r: grayscaleValue,
      g: grayscaleValue,
      b: grayscaleValue
    };
  }
  const channel = (temp12, temp22, temp3) => {
    const temp3Min = 0, temp3Max = 1;
    if (temp3 < temp3Min) {
      temp3++;
    }
    if (temp3 > temp3Max) {
      temp3--;
    }
    if (temp3 * sextuple < temp3Max) {
      return temp12 + (temp22 - temp12) * sextuple * temp3;
    }
    if (temp3 * double < temp3Max) {
      return temp22;
    }
    if (temp3 * triple < temp3Max * double) {
      const temp3Offset = double / triple;
      return temp12 + (temp22 - temp12) * (temp3Offset - temp3) * sextuple;
    }
    return temp12;
  }, temp1 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = double * lNormalized - temp1, phaseThird = phaseNumerator / triple, red = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized)), blue = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized - phaseThird));
  return {
    r: Math.round(red),
    g: Math.round(green),
    b: Math.round(blue)
  };
}
function hslaToRgba(hsla) {
  const rgbResult = hslToRgb(hsla);
  return {
    a: hsla.a,
    b: rgbResult.b,
    g: rgbResult.g,
    r: rgbResult.r
  };
}
function getRandomRgbColor(min) {
  const fixedMin = min ?? defaultRgbMin, fixedMax = rgbMax + identity;
  return {
    b: Math.floor(randomInRange(setRangeValue(fixedMin, fixedMax))),
    g: Math.floor(randomInRange(setRangeValue(fixedMin, fixedMax))),
    r: Math.floor(randomInRange(setRangeValue(fixedMin, fixedMax)))
  };
}
function getStyleFromRgb(color, opacity) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? defaultOpacity})`;
}
function getStyleFromHsl(color, opacity) {
  return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? defaultOpacity})`;
}
function colorMix(color1, color2, size1, size2) {
  let rgb1 = color1, rgb2 = color2;
  if (rgb1.r === void 0) {
    rgb1 = hslToRgb(color1);
  }
  if (rgb2.r === void 0) {
    rgb2 = hslToRgb(color2);
  }
  return {
    b: mix(rgb1.b, rgb2.b, size1, size2),
    g: mix(rgb1.g, rgb2.g, size1, size2),
    r: mix(rgb1.r, rgb2.r, size1, size2)
  };
}
function getLinkColor(p1, p2, linkColor) {
  if (linkColor === randomColorValue) {
    return getRandomRgbColor();
  } else if (linkColor === midColorValue) {
    const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
    if (sourceColor && destColor && p2) {
      return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
    } else {
      const hslColor = sourceColor ?? destColor;
      if (hslColor) {
        return hslToRgb(hslColor);
      }
    }
  } else {
    return linkColor;
  }
}
function getLinkRandomColor(engine, optColor, blink, consent) {
  const color = isString(optColor) ? optColor : optColor.value;
  if (color === randomColorValue) {
    if (consent) {
      return rangeColorToRgb(engine, {
        value: color
      });
    }
    if (blink) {
      return randomColorValue;
    }
    return midColorValue;
  } else if (color === midColorValue) {
    return midColorValue;
  } else {
    return rangeColorToRgb(engine, {
      value: color
    });
  }
}
function getHslFromAnimation(animation) {
  return animation !== void 0 ? {
    h: animation.h.value,
    s: animation.s.value,
    l: animation.l.value
  } : void 0;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
  const resColor = {
    h: {
      enable: false,
      value: hsl.h
    },
    s: {
      enable: false,
      value: hsl.s
    },
    l: {
      enable: false,
      value: hsl.l
    }
  };
  if (animationOptions) {
    setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
    setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
    setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
  }
  return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
  colorValue.enable = colorAnimation.enable;
  if (colorValue.enable) {
    colorValue.velocity = getRangeValue(colorAnimation.speed) / percentDenominator * reduceFactor;
    colorValue.decay = decayOffset - getRangeValue(colorAnimation.decay);
    colorValue.status = AnimationStatus.increasing;
    colorValue.loops = defaultLoops;
    colorValue.maxLoops = getRangeValue(colorAnimation.count);
    colorValue.time = defaultTime;
    colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
    if (!colorAnimation.sync) {
      colorValue.velocity *= getRandom();
      colorValue.value *= getRandom();
    }
    colorValue.initialValue = colorValue.value;
    colorValue.offset = setRangeValue(colorAnimation.offset);
  } else {
    colorValue.velocity = defaultVelocity;
  }
}
function updateColorValue(data, range, decrease, delta) {
  const minLoops = 0, minDelay = 0, identity2 = 1, minVelocity2 = 0, minOffset = 0, velocityFactor = 3.6;
  if (!data || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) {
    return;
  }
  if (!data.time) {
    data.time = 0;
  }
  if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
    data.time += delta.value;
  }
  if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
    return;
  }
  const offset = data.offset ? randomInRange(data.offset) : minOffset, velocity = (data.velocity ?? minVelocity2) * delta.factor + offset * velocityFactor, decay = data.decay ?? identity2, max = getRangeMax(range), min = getRangeMin(range);
  if (!decrease || data.status === AnimationStatus.increasing) {
    data.value += velocity;
    if (data.value > max) {
      if (!data.loops) {
        data.loops = 0;
      }
      data.loops++;
      if (decrease) {
        data.status = AnimationStatus.decreasing;
      } else {
        data.value -= max;
      }
    }
  } else {
    data.value -= velocity;
    const minValue = 0;
    if (data.value < minValue) {
      if (!data.loops) {
        data.loops = 0;
      }
      data.loops++;
      data.status = AnimationStatus.increasing;
    }
  }
  if (data.velocity && decay !== identity2) {
    data.velocity *= decay;
  }
  data.value = clamp(data.value, min, max);
}
function updateColor(color, delta) {
  if (!color) {
    return;
  }
  const {
    h,
    s,
    l
  } = color, ranges = {
    h: {
      min: 0,
      max: 360
    },
    s: {
      min: 0,
      max: 100
    },
    l: {
      min: 0,
      max: 100
    }
  };
  if (h) {
    updateColorValue(h, ranges.h, false, delta);
  }
  if (s) {
    updateColorValue(s, ranges.s, true, delta);
  }
  if (l) {
    updateColorValue(l, ranges.l, true, delta);
  }
}

// ../../node_modules/@tsparticles/engine/browser/Utils/CanvasUtils.js
function drawLine(context, begin, end) {
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.lineTo(end.x, end.y);
  context.closePath();
}
function paintBase(context, dimension, baseColor) {
  context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
  context.fillRect(originPoint.x, originPoint.y, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
  if (!image) {
    return;
  }
  context.globalAlpha = opacity;
  context.drawImage(image, originPoint.x, originPoint.y, dimension.width, dimension.height);
  context.globalAlpha = 1;
}
function clear(context, dimension) {
  context.clearRect(originPoint.x, originPoint.y, dimension.width, dimension.height);
}
function drawParticle(data) {
  const {
    container,
    context,
    particle,
    delta,
    colorStyles,
    backgroundMask,
    composite,
    radius,
    opacity,
    shadow,
    transform
  } = data, pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : defaultAngle), rotateData = {
    sin: Math.sin(angle),
    cos: Math.cos(angle)
  }, rotating = !!angle, transformData = {
    a: rotateData.cos * (transform.a ?? defaultTransform.a),
    b: rotating ? rotateData.sin * (transform.b ?? identity) : transform.b ?? defaultTransform.b,
    c: rotating ? -rotateData.sin * (transform.c ?? identity) : transform.c ?? defaultTransform.c,
    d: rotateData.cos * (transform.d ?? defaultTransform.d)
  };
  context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  const shadowColor = particle.shadowColor;
  if (shadow.enable && shadowColor) {
    context.shadowBlur = shadow.blur;
    context.shadowColor = getStyleFromRgb(shadowColor);
    context.shadowOffsetX = shadow.offset.x;
    context.shadowOffsetY = shadow.offset.y;
  }
  if (colorStyles.fill) {
    context.fillStyle = colorStyles.fill;
  }
  const strokeWidth = particle.strokeWidth ?? minStrokeWidth;
  context.lineWidth = strokeWidth;
  if (colorStyles.stroke) {
    context.strokeStyle = colorStyles.stroke;
  }
  const drawData = {
    container,
    context,
    particle,
    radius,
    opacity,
    delta,
    transformData,
    strokeWidth
  };
  drawShape(drawData);
  drawShapeAfterDraw(drawData);
  drawEffect(drawData);
  context.globalCompositeOperation = "source-over";
  context.resetTransform();
}
function drawEffect(data) {
  const {
    container,
    context,
    particle,
    radius,
    opacity,
    delta,
    transformData
  } = data;
  if (!particle.effect) {
    return;
  }
  const drawer = container.effectDrawers.get(particle.effect);
  if (!drawer) {
    return;
  }
  drawer.draw({
    context,
    particle,
    radius,
    opacity,
    delta,
    pixelRatio: container.retina.pixelRatio,
    transformData: __spreadValues({}, transformData)
  });
}
function drawShape(data) {
  const {
    container,
    context,
    particle,
    radius,
    opacity,
    delta,
    strokeWidth,
    transformData
  } = data;
  if (!particle.shape) {
    return;
  }
  const drawer = container.shapeDrawers.get(particle.shape);
  if (!drawer) {
    return;
  }
  context.beginPath();
  drawer.draw({
    context,
    particle,
    radius,
    opacity,
    delta,
    pixelRatio: container.retina.pixelRatio,
    transformData: __spreadValues({}, transformData)
  });
  if (particle.shapeClose) {
    context.closePath();
  }
  if (strokeWidth > minStrokeWidth) {
    context.stroke();
  }
  if (particle.shapeFill) {
    context.fill();
  }
}
function drawShapeAfterDraw(data) {
  const {
    container,
    context,
    particle,
    radius,
    opacity,
    delta,
    transformData
  } = data;
  if (!particle.shape) {
    return;
  }
  const drawer = container.shapeDrawers.get(particle.shape);
  if (!drawer?.afterDraw) {
    return;
  }
  drawer.afterDraw({
    context,
    particle,
    radius,
    opacity,
    delta,
    pixelRatio: container.retina.pixelRatio,
    transformData: __spreadValues({}, transformData)
  });
}
function drawPlugin(context, plugin, delta) {
  if (!plugin.draw) {
    return;
  }
  plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
  if (!plugin.drawParticle) {
    return;
  }
  plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
  return {
    h: color.h,
    s: color.s,
    l: color.l + (type === AlterType.darken ? -lFactor : lFactor) * value
  };
}

// ../../node_modules/@tsparticles/engine/browser/Core/Canvas.js
function setTransformValue(factor, newFactor, key) {
  const newValue = newFactor[key];
  if (newValue !== void 0) {
    factor[key] = (factor[key] ?? defaultTransformValue) * newValue;
  }
}
function setStyle(canvas, style, important = false) {
  if (!style) {
    return;
  }
  const element = canvas;
  if (!element) {
    return;
  }
  const elementStyle = element.style;
  if (!elementStyle) {
    return;
  }
  const keys = /* @__PURE__ */ new Set();
  for (const key in elementStyle) {
    if (!Object.prototype.hasOwnProperty.call(elementStyle, key)) {
      continue;
    }
    keys.add(elementStyle[key]);
  }
  for (const key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    keys.add(style[key]);
  }
  for (const key of keys) {
    const value = style.getPropertyValue(key);
    if (!value) {
      elementStyle.removeProperty(key);
    } else {
      elementStyle.setProperty(key, value, important ? "important" : "");
    }
  }
}
var Canvas = class {
  constructor(container, engine) {
    this.container = container;
    this._applyPostDrawUpdaters = (particle) => {
      for (const updater of this._postDrawUpdaters) {
        updater.afterDraw?.(particle);
      }
    };
    this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
      for (const updater of this._preDrawUpdaters) {
        if (updater.getColorStyles) {
          const {
            fill,
            stroke
          } = updater.getColorStyles(particle, ctx, radius, zOpacity);
          if (fill) {
            colorStyles.fill = fill;
          }
          if (stroke) {
            colorStyles.stroke = stroke;
          }
        }
        if (updater.getTransformValues) {
          const updaterTransform = updater.getTransformValues(particle);
          for (const key in updaterTransform) {
            setTransformValue(transform, updaterTransform, key);
          }
        }
        updater.beforeDraw?.(particle);
      }
    };
    this._applyResizePlugins = () => {
      for (const plugin of this._resizePlugins) {
        plugin.resize?.();
      }
    };
    this._getPluginParticleColors = (particle) => {
      let fColor, sColor;
      for (const plugin of this._colorPlugins) {
        if (!fColor && plugin.particleFillColor) {
          fColor = rangeColorToHsl(this._engine, plugin.particleFillColor(particle));
        }
        if (!sColor && plugin.particleStrokeColor) {
          sColor = rangeColorToHsl(this._engine, plugin.particleStrokeColor(particle));
        }
        if (fColor && sColor) {
          break;
        }
      }
      return [fColor, sColor];
    };
    this._initCover = () => __async(this, null, function* () {
      const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
      if (color) {
        const coverRgb = rangeColorToRgb(this._engine, color);
        if (coverRgb) {
          const coverColor = __spreadProps(__spreadValues({}, coverRgb), {
            a: cover.opacity
          });
          this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
        }
      } else {
        yield new Promise((resolve, reject) => {
          if (!cover.image) {
            return;
          }
          const img = document.createElement("img");
          img.addEventListener("load", () => {
            this._coverImage = {
              image: img,
              opacity: cover.opacity
            };
            resolve();
          });
          img.addEventListener("error", (evt) => {
            reject(evt.error);
          });
          img.src = cover.image;
        });
      }
    });
    this._initStyle = () => {
      const element = this.element, options = this.container.actualOptions;
      if (!element) {
        return;
      }
      if (this._fullScreen) {
        this._setFullScreenStyle();
      } else {
        this._resetOriginalStyle();
      }
      for (const key in options.style) {
        if (!key || !options.style || !Object.prototype.hasOwnProperty.call(options.style, key)) {
          continue;
        }
        const value = options.style[key];
        if (!value) {
          continue;
        }
        element.style.setProperty(key, value, "important");
      }
    };
    this._initTrail = () => __async(this, null, function* () {
      const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
      if (!trail.enable) {
        return;
      }
      const opacity = inverseFactorNumerator / trail.length;
      if (trailFill.color) {
        const fillColor = rangeColorToRgb(this._engine, trailFill.color);
        if (!fillColor) {
          return;
        }
        this._trailFill = {
          color: __spreadValues({}, fillColor),
          opacity
        };
      } else {
        yield new Promise((resolve, reject) => {
          if (!trailFill.image) {
            return;
          }
          const img = document.createElement("img");
          img.addEventListener("load", () => {
            this._trailFill = {
              image: img,
              opacity
            };
            resolve();
          });
          img.addEventListener("error", (evt) => {
            reject(evt.error);
          });
          img.src = trailFill.image;
        });
      }
    });
    this._paintBase = (baseColor) => {
      this.draw((ctx) => paintBase(ctx, this.size, baseColor));
    };
    this._paintImage = (image, opacity) => {
      this.draw((ctx) => paintImage(ctx, this.size, image, opacity));
    };
    this._repairStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      this._safeMutationObserver((observer) => observer.disconnect());
      this._initStyle();
      this.initBackground();
      this._safeMutationObserver((observer) => {
        if (!element || !(element instanceof Node)) {
          return;
        }
        observer.observe(element, {
          attributes: true
        });
      });
    };
    this._resetOriginalStyle = () => {
      const element = this.element, originalStyle = this._originalStyle;
      if (!element || !originalStyle) {
        return;
      }
      setStyle(element, originalStyle, true);
    };
    this._safeMutationObserver = (callback) => {
      if (!this._mutationObserver) {
        return;
      }
      callback(this._mutationObserver);
    };
    this._setFullScreenStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      setStyle(element, getFullScreenStyle(this.container.actualOptions.fullScreen.zIndex), true);
    };
    this._engine = engine;
    this._standardSize = {
      height: 0,
      width: 0
    };
    const pxRatio = container.retina.pixelRatio, stdSize = this._standardSize;
    this.size = {
      height: stdSize.height * pxRatio,
      width: stdSize.width * pxRatio
    };
    this._context = null;
    this._generated = false;
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > minimumLength && trailFill) {
      if (trailFill.color) {
        this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
      } else if (trailFill.image) {
        this._paintImage(trailFill.image, trailFill.opacity);
      }
    } else if (options.clear) {
      this.draw((ctx) => {
        clear(ctx, this.size);
      });
    }
  }
  destroy() {
    this.stop();
    if (this._generated) {
      const element = this.element;
      element?.remove();
      this.element = void 0;
    } else {
      this._resetOriginalStyle();
    }
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  draw(cb) {
    const ctx = this._context;
    if (!ctx) {
      return;
    }
    return cb(ctx);
  }
  drawAsync(cb) {
    const ctx = this._context;
    if (!ctx) {
      return void 0;
    }
    return cb(ctx);
  }
  drawParticle(particle, delta) {
    if (particle.spawning || particle.destroyed) {
      return;
    }
    const radius = particle.getRadius();
    if (radius <= minimumSize) {
      return;
    }
    const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
    let [fColor, sColor] = this._getPluginParticleColors(particle);
    if (!fColor) {
      fColor = pfColor;
    }
    if (!sColor) {
      sColor = psColor;
    }
    if (!fColor && !sColor) {
      return;
    }
    this.draw((ctx) => {
      const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? defaultOpacity, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
        fill: fColor ? getStyleFromHsl(fColor, zOpacity) : void 0
      };
      colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
      this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
      drawParticle({
        container,
        context: ctx,
        particle,
        delta,
        colorStyles,
        backgroundMask: options.backgroundMask.enable,
        composite: options.backgroundMask.composite,
        radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
        opacity: zOpacity,
        shadow: particle.options.shadow,
        transform
      });
      this._applyPostDrawUpdaters(particle);
    });
  }
  drawParticlePlugin(plugin, particle, delta) {
    this.draw((ctx) => drawParticlePlugin(ctx, plugin, particle, delta));
  }
  drawPlugin(plugin, delta) {
    this.draw((ctx) => drawPlugin(ctx, plugin, delta));
  }
  init() {
    return __async(this, null, function* () {
      this._safeMutationObserver((obs) => obs.disconnect());
      this._mutationObserver = safeMutationObserver((records) => {
        for (const record of records) {
          if (record.type === "attributes" && record.attributeName === "style") {
            this._repairStyle();
          }
        }
      });
      this.resize();
      this._initStyle();
      yield this._initCover();
      try {
        yield this._initTrail();
      } catch (e) {
        getLogger().error(e);
      }
      this.initBackground();
      this._safeMutationObserver((obs) => {
        if (!this.element || !(this.element instanceof Node)) {
          return;
        }
        obs.observe(this.element, {
          attributes: true
        });
      });
      this.initUpdaters();
      this.initPlugins();
      this.paint();
    });
  }
  initBackground() {
    const options = this.container.actualOptions, background = options.background, element = this.element;
    if (!element) {
      return;
    }
    const elementStyle = element.style;
    if (!elementStyle) {
      return;
    }
    if (background.color) {
      const color = rangeColorToRgb(this._engine, background.color);
      elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
    } else {
      elementStyle.backgroundColor = "";
    }
    elementStyle.backgroundImage = background.image || "";
    elementStyle.backgroundPosition = background.position || "";
    elementStyle.backgroundRepeat = background.repeat || "";
    elementStyle.backgroundSize = background.size || "";
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const plugin of this.container.plugins.values()) {
      if (plugin.resize) {
        this._resizePlugins.push(plugin);
      }
      if (plugin.particleFillColor ?? plugin.particleStrokeColor) {
        this._colorPlugins.push(plugin);
      }
    }
  }
  initUpdaters() {
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    for (const updater of this.container.particles.updaters) {
      if (updater.afterDraw) {
        this._postDrawUpdaters.push(updater);
      }
      if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) {
        this._preDrawUpdaters.push(updater);
      }
    }
  }
  loadCanvas(canvas) {
    if (this._generated && this.element) {
      this.element.remove();
    }
    this._generated = canvas.dataset && generatedAttribute in canvas.dataset ? canvas.dataset[generatedAttribute] === "true" : this._generated;
    this.element = canvas;
    this.element.ariaHidden = "true";
    this._originalStyle = cloneStyle(this.element.style);
    const standardSize = this._standardSize;
    standardSize.height = canvas.offsetHeight;
    standardSize.width = canvas.offsetWidth;
    const pxRatio = this.container.retina.pixelRatio, retinaSize = this.size;
    canvas.height = retinaSize.height = standardSize.height * pxRatio;
    canvas.width = retinaSize.width = standardSize.width * pxRatio;
    this._context = this.element.getContext("2d");
    this._safeMutationObserver((obs) => obs.disconnect());
    this.container.retina.init();
    this.initBackground();
    this._safeMutationObserver((obs) => {
      if (!this.element || !(this.element instanceof Node)) {
        return;
      }
      obs.observe(this.element, {
        attributes: true
      });
    });
  }
  paint() {
    const options = this.container.actualOptions;
    this.draw((ctx) => {
      if (options.backgroundMask.enable && options.backgroundMask.cover) {
        clear(ctx, this.size);
        if (this._coverImage) {
          this._paintImage(this._coverImage.image, this._coverImage.opacity);
        } else if (this._coverColorStyle) {
          this._paintBase(this._coverColorStyle);
        } else {
          this._paintBase();
        }
      } else {
        this._paintBase();
      }
    });
  }
  resize() {
    if (!this.element) {
      return false;
    }
    const container = this.container, currentSize = container.canvas._standardSize, newSize = {
      width: this.element.offsetWidth,
      height: this.element.offsetHeight
    }, pxRatio = container.retina.pixelRatio, retinaSize = {
      width: newSize.width * pxRatio,
      height: newSize.height * pxRatio
    };
    if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === this.element.height && retinaSize.width === this.element.width) {
      return false;
    }
    const oldSize = __spreadValues({}, currentSize);
    currentSize.height = newSize.height;
    currentSize.width = newSize.width;
    const canvasSize = this.size;
    this.element.width = canvasSize.width = retinaSize.width;
    this.element.height = canvasSize.height = retinaSize.height;
    if (this.container.started) {
      container.particles.setResizeFactor({
        width: currentSize.width / oldSize.width,
        height: currentSize.height / oldSize.height
      });
    }
    return true;
  }
  stop() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = void 0;
    this.draw((ctx) => clear(ctx, this.size));
  }
  windowResize() {
    return __async(this, null, function* () {
      if (!this.element || !this.resize()) {
        return;
      }
      const container = this.container, needsRefresh = container.updateActualOptions();
      container.particles.setDensity();
      this._applyResizePlugins();
      if (needsRefresh) {
        yield container.refresh();
      }
    });
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/InteractivityDetect.js
var InteractivityDetect;
(function(InteractivityDetect2) {
  InteractivityDetect2["canvas"] = "canvas";
  InteractivityDetect2["parent"] = "parent";
  InteractivityDetect2["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js
function manageListener(element, event, handler, add, options) {
  if (add) {
    let addOptions = {
      passive: true
    };
    if (isBoolean(options)) {
      addOptions.capture = options;
    } else if (options !== void 0) {
      addOptions = options;
    }
    element.addEventListener(event, handler, addOptions);
  } else {
    const removeOptions = options;
    element.removeEventListener(event, handler, removeOptions);
  }
}
var EventListeners = class {
  constructor(container) {
    this.container = container;
    this._doMouseTouchClick = (e) => {
      const container2 = this.container, options = container2.actualOptions;
      if (this._canPush) {
        const mouseInteractivity = container2.interactivity.mouse, mousePos = mouseInteractivity.position;
        if (!mousePos) {
          return;
        }
        mouseInteractivity.clickPosition = __spreadValues({}, mousePos);
        mouseInteractivity.clickTime = (/* @__PURE__ */ new Date()).getTime();
        const onClick = options.interactivity.events.onClick;
        executeOnSingleOrMultiple(onClick.mode, (mode) => this.container.handleClickMode(mode));
      }
      if (e.type === "touchend") {
        setTimeout(() => this._mouseTouchFinish(), touchDelay);
      }
    };
    this._handleThemeChange = (e) => {
      const mediaEvent = e, container2 = this.container, options = container2.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme2) => theme2.name === themeName);
      if (theme?.default.auto) {
        void container2.loadTheme(themeName);
      }
    };
    this._handleVisibilityChange = () => {
      const container2 = this.container, options = container2.actualOptions;
      this._mouseTouchFinish();
      if (!options.pauseOnBlur) {
        return;
      }
      if (document?.hidden) {
        container2.pageHidden = true;
        container2.pause();
      } else {
        container2.pageHidden = false;
        if (container2.animationStatus) {
          void container2.play(true);
        } else {
          void container2.draw(true);
        }
      }
    };
    this._handleWindowResize = () => {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
        delete this._resizeTimeout;
      }
      const handleResize = () => __async(this, null, function* () {
        const canvas = this.container.canvas;
        yield canvas?.windowResize();
      });
      this._resizeTimeout = setTimeout(() => void handleResize(), this.container.actualOptions.interactivity.events.resize.delay * millisecondsToSeconds);
    };
    this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions, interactivityEl = container2.interactivity.element;
      if (!interactivityEl) {
        return;
      }
      const html = interactivityEl, canvasEl = container2.canvas.element;
      if (canvasEl) {
        canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
      }
      if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
        return;
      }
      manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
      manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
      manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
      if (!options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add);
      } else {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add);
        manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
        manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
      }
      manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
      manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
    };
    this._manageListeners = (add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container2.canvas.element;
      let mouseLeaveTmpEvent = mouseLeaveEvent;
      if (detectType === InteractivityDetect.window) {
        container2.interactivity.element = window;
        mouseLeaveTmpEvent = mouseOutEvent;
      } else if (detectType === InteractivityDetect.parent && canvasEl) {
        container2.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
      } else {
        container2.interactivity.element = canvasEl;
      }
      this._manageMediaMatch(add);
      this._manageResize(add);
      this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
      if (document) {
        manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
      }
    };
    this._manageMediaMatch = (add) => {
      const handlers = this._handlers, mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)");
      if (!mediaMatch) {
        return;
      }
      if (mediaMatch.addEventListener !== void 0) {
        manageListener(mediaMatch, "change", handlers.themeChange, add);
        return;
      }
      if (mediaMatch.addListener === void 0) {
        return;
      }
      if (add) {
        mediaMatch.addListener(handlers.oldThemeChange);
      } else {
        mediaMatch.removeListener(handlers.oldThemeChange);
      }
    };
    this._manageResize = (add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.events.resize) {
        return;
      }
      if (typeof ResizeObserver === "undefined") {
        manageListener(window, resizeEvent, handlers.resize, add);
        return;
      }
      const canvasEl = container2.canvas.element;
      if (this._resizeObserver && !add) {
        if (canvasEl) {
          this._resizeObserver.unobserve(canvasEl);
        }
        this._resizeObserver.disconnect();
        delete this._resizeObserver;
      } else if (!this._resizeObserver && add && canvasEl) {
        this._resizeObserver = new ResizeObserver((entries) => {
          const entry = entries.find((e) => e.target === canvasEl);
          if (!entry) {
            return;
          }
          this._handleWindowResize();
        });
        this._resizeObserver.observe(canvasEl);
      }
    };
    this._mouseDown = () => {
      const {
        interactivity
      } = this.container;
      if (!interactivity) {
        return;
      }
      const {
        mouse
      } = interactivity;
      mouse.clicking = true;
      mouse.downPosition = mouse.position;
    };
    this._mouseTouchClick = (e) => {
      const container2 = this.container, options = container2.actualOptions, {
        mouse
      } = container2.interactivity;
      mouse.inside = true;
      let handled = false;
      const mousePosition = mouse.position;
      if (!mousePosition || !options.interactivity.events.onClick.enable) {
        return;
      }
      for (const plugin of container2.plugins.values()) {
        if (!plugin.clickPositionValid) {
          continue;
        }
        handled = plugin.clickPositionValid(mousePosition);
        if (handled) {
          break;
        }
      }
      if (!handled) {
        this._doMouseTouchClick(e);
      }
      mouse.clicking = false;
    };
    this._mouseTouchFinish = () => {
      const interactivity = this.container.interactivity;
      if (!interactivity) {
        return;
      }
      const mouse = interactivity.mouse;
      delete mouse.position;
      delete mouse.clickPosition;
      delete mouse.downPosition;
      interactivity.status = mouseLeaveEvent;
      mouse.inside = false;
      mouse.clicking = false;
    };
    this._mouseTouchMove = (e) => {
      const container2 = this.container, options = container2.actualOptions, interactivity = container2.interactivity, canvasEl = container2.canvas.element;
      if (!interactivity?.element) {
        return;
      }
      interactivity.mouse.inside = true;
      let pos;
      if (e.type.startsWith("pointer")) {
        this._canPush = true;
        const mouseEvent = e;
        if (interactivity.element === window) {
          if (canvasEl) {
            const clientRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.clientX - clientRect.left,
              y: mouseEvent.clientY - clientRect.top
            };
          }
        } else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
          const source = mouseEvent.target, target = mouseEvent.currentTarget;
          if (source && target && canvasEl) {
            const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.offsetX + double * sourceRect.left - (targetRect.left + canvasRect.left),
              y: mouseEvent.offsetY + double * sourceRect.top - (targetRect.top + canvasRect.top)
            };
          } else {
            pos = {
              x: mouseEvent.offsetX ?? mouseEvent.clientX,
              y: mouseEvent.offsetY ?? mouseEvent.clientY
            };
          }
        } else if (mouseEvent.target === canvasEl) {
          pos = {
            x: mouseEvent.offsetX ?? mouseEvent.clientX,
            y: mouseEvent.offsetY ?? mouseEvent.clientY
          };
        }
      } else {
        this._canPush = e.type !== "touchmove";
        if (canvasEl) {
          const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect = canvasEl.getBoundingClientRect();
          pos = {
            x: lastTouch.clientX - (canvasRect.left ?? minCoordinate),
            y: lastTouch.clientY - (canvasRect.top ?? minCoordinate)
          };
        }
      }
      const pxRatio = container2.retina.pixelRatio;
      if (pos) {
        pos.x *= pxRatio;
        pos.y *= pxRatio;
      }
      interactivity.mouse.position = pos;
      interactivity.status = mouseMoveEvent;
    };
    this._touchEnd = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchFinish();
    };
    this._touchEndClick = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchClick(e);
    };
    this._touchStart = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.set(touch.identifier, performance.now());
      }
      this._mouseTouchMove(e);
    };
    this._canPush = true;
    this._touches = /* @__PURE__ */ new Map();
    this._handlers = {
      mouseDown: () => this._mouseDown(),
      mouseLeave: () => this._mouseTouchFinish(),
      mouseMove: (e) => this._mouseTouchMove(e),
      mouseUp: (e) => this._mouseTouchClick(e),
      touchStart: (e) => this._touchStart(e),
      touchMove: (e) => this._mouseTouchMove(e),
      touchEnd: (e) => this._touchEnd(e),
      touchCancel: (e) => this._touchEnd(e),
      touchEndClick: (e) => this._touchEndClick(e),
      visibilityChange: () => this._handleVisibilityChange(),
      themeChange: (e) => this._handleThemeChange(e),
      oldThemeChange: (e) => this._handleThemeChange(e),
      resize: () => {
        this._handleWindowResize();
      }
    };
  }
  addListeners() {
    this._manageListeners(true);
  }
  removeListeners() {
    this._manageListeners(false);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js
var EventType;
(function(EventType2) {
  EventType2["configAdded"] = "configAdded";
  EventType2["containerInit"] = "containerInit";
  EventType2["particlesSetup"] = "particlesSetup";
  EventType2["containerStarted"] = "containerStarted";
  EventType2["containerStopped"] = "containerStopped";
  EventType2["containerDestroyed"] = "containerDestroyed";
  EventType2["containerPaused"] = "containerPaused";
  EventType2["containerPlay"] = "containerPlay";
  EventType2["containerBuilt"] = "containerBuilt";
  EventType2["particleAdded"] = "particleAdded";
  EventType2["particleDestroyed"] = "particleDestroyed";
  EventType2["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js
var OptionsColor = class _OptionsColor {
  constructor() {
    this.value = "";
  }
  static create(source, data) {
    const color = new _OptionsColor();
    color.load(source);
    if (data !== void 0) {
      if (isString(data) || isArray(data)) {
        color.load({
          value: data
        });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (!isNull(data.value)) {
      this.value = data.value;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js
var Background = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
    if (data.position !== void 0) {
      this.position = data.position;
    }
    if (data.repeat !== void 0) {
      this.repeat = data.repeat;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMaskCover.js
var BackgroundMaskCover = class {
  constructor() {
    this.opacity = 1;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/BackgroundMask/BackgroundMask.js
var BackgroundMask = class {
  constructor() {
    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover();
    this.enable = false;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.composite !== void 0) {
      this.composite = data.composite;
    }
    if (data.cover !== void 0) {
      const cover = data.cover, color = isString(data.cover) ? {
        color: data.cover
      } : data.cover;
      this.cover.load(cover.color !== void 0 || cover.image !== void 0 ? cover : {
        color
      });
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js
var FullScreen = class {
  constructor() {
    this.enable = true;
    this.zIndex = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.zIndex !== void 0) {
      this.zIndex = data.zIndex;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ClickEvent.js
var ClickEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/DivType.js
var DivType;
(function(DivType2) {
  DivType2["circle"] = "circle";
  DivType2["rectangle"] = "rectangle";
})(DivType || (DivType = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/DivEvent.js
var DivEvent = class {
  constructor() {
    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = DivType.circle;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Parallax.js
var Parallax = class {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.force !== void 0) {
      this.force = data.force;
    }
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/HoverEvent.js
var HoverEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.parallax.load(data.parallax);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/ResizeEvent.js
var ResizeEvent = class {
  constructor() {
    this.delay = 0.5;
    this.enable = true;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Events/Events.js
var Events = class {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent();
    this.resize = new ResizeEvent();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.onClick.load(data.onClick);
    const onDiv = data.onDiv;
    if (onDiv !== void 0) {
      this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
        const tmp = new DivEvent();
        tmp.load(t);
        return tmp;
      });
    }
    this.onHover.load(data.onHover);
    this.resize.load(data.resize);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Modes/Modes.js
var Modes = class {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (!this._container) {
      return;
    }
    const interactors = this._engine.interactors.get(this._container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      if (!interactor.loadModeOptions) {
        continue;
      }
      interactor.loadModeOptions(this, data);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Interactivity/Interactivity.js
var Interactivity = class {
  constructor(engine, container) {
    this.detectsOn = InteractivityDetect.window;
    this.events = new Events();
    this.modes = new Modes(engine, container);
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    const detectsOn = data.detectsOn;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data.events);
    this.modes.load(data.modes);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/ManualParticle.js
var ManualParticle = class {
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.position) {
      this.position = {
        x: data.position.x ?? manualDefaultPosition,
        y: data.position.y ?? manualDefaultPosition,
        mode: data.position.mode ?? PixelMode.percent
      };
    }
    if (data.options) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/ResponsiveMode.js
var ResponsiveMode;
(function(ResponsiveMode2) {
  ResponsiveMode2["screen"] = "screen";
  ResponsiveMode2["canvas"] = "canvas";
})(ResponsiveMode || (ResponsiveMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Responsive.js
var Responsive = class {
  constructor() {
    this.maxWidth = Infinity;
    this.options = {};
    this.mode = ResponsiveMode.canvas;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (!isNull(data.maxWidth)) {
      this.maxWidth = data.maxWidth;
    }
    if (!isNull(data.mode)) {
      if (data.mode === ResponsiveMode.screen) {
        this.mode = ResponsiveMode.screen;
      } else {
        this.mode = ResponsiveMode.canvas;
      }
    }
    if (!isNull(data.options)) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/ThemeMode.js
var ThemeMode;
(function(ThemeMode2) {
  ThemeMode2["any"] = "any";
  ThemeMode2["dark"] = "dark";
  ThemeMode2["light"] = "light";
})(ThemeMode || (ThemeMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Theme/ThemeDefault.js
var ThemeDefault = class {
  constructor() {
    this.auto = false;
    this.mode = ThemeMode.any;
    this.value = false;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.auto !== void 0) {
      this.auto = data.auto;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Theme/Theme.js
var Theme = class {
  constructor() {
    this.name = "";
    this.default = new ThemeDefault();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    this.default.load(data.default);
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js
var AnimationOptions = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 1;
    this.decay = 0;
    this.delay = 0;
    this.sync = false;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var RangedAnimationOptions = class extends AnimationOptions {
  constructor() {
    super();
    this.mode = AnimationMode.auto;
    this.startValue = StartValueType.random;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js
var ColorAnimation = class extends AnimationOptions {
  constructor() {
    super();
    this.offset = 0;
    this.sync = true;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js
var HslAnimation = class {
  constructor() {
    this.h = new ColorAnimation();
    this.s = new ColorAnimation();
    this.l = new ColorAnimation();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.h.load(data.h);
    this.s.load(data.s);
    this.l.load(data.l);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js
var AnimatableColor = class _AnimatableColor extends OptionsColor {
  constructor() {
    super();
    this.animation = new HslAnimation();
  }
  static create(source, data) {
    const color = new _AnimatableColor();
    color.load(source);
    if (data !== void 0) {
      if (isString(data) || isArray(data)) {
        color.load({
          value: data
        });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    const colorAnimation = data.animation;
    if (colorAnimation !== void 0) {
      if (colorAnimation.enable !== void 0) {
        this.animation.h.load(colorAnimation);
      } else {
        this.animation.load(data.animation);
      }
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/CollisionMode.js
var CollisionMode;
(function(CollisionMode2) {
  CollisionMode2["absorb"] = "absorb";
  CollisionMode2["bounce"] = "bounce";
  CollisionMode2["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsAbsorb.js
var CollisionsAbsorb = class {
  constructor() {
    this.speed = 2;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/CollisionsOverlap.js
var CollisionsOverlap = class {
  constructor() {
    this.enable = true;
    this.retries = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.retries !== void 0) {
      this.retries = data.retries;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js
var ValueWithRandom = class {
  constructor() {
    this.value = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (!isNull(data.value)) {
      this.value = setRangeValue(data.value);
    }
  }
};
var AnimationValueWithRandom = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new AnimationOptions();
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    const animation = data.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
};
var RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
  constructor() {
    super();
    this.animation = new RangedAnimationOptions();
  }
  load(data) {
    super.load(data);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
var ParticlesBounceFactor = class extends ValueWithRandom {
  constructor() {
    super();
    this.value = 1;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js
var ParticlesBounce = class {
  constructor() {
    this.horizontal = new ParticlesBounceFactor();
    this.vertical = new ParticlesBounceFactor();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.horizontal.load(data.horizontal);
    this.vertical.load(data.vertical);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Collisions/Collisions.js
var Collisions = class {
  constructor() {
    this.absorb = new CollisionsAbsorb();
    this.bounce = new ParticlesBounce();
    this.enable = false;
    this.maxSpeed = 50;
    this.mode = CollisionMode.bounce;
    this.overlap = new CollisionsOverlap();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.absorb.load(data.absorb);
    this.bounce.load(data.bounce);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.overlap.load(data.overlap);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js
var Effect = class {
  constructor() {
    this.close = true;
    this.fill = true;
    this.options = {};
    this.type = [];
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    const options = data.options;
    if (options !== void 0) {
      for (const effect in options) {
        const item = options[effect];
        if (item) {
          this.options[effect] = deepExtend(this.options[effect] ?? {}, item);
        }
      }
    }
    if (data.close !== void 0) {
      this.close = data.close;
    }
    if (data.fill !== void 0) {
      this.fill = data.fill;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js
var MoveAngle = class {
  constructor() {
    this.offset = 0;
    this.value = 90;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAttract.js
var MoveAttract = class {
  constructor() {
    this.distance = 200;
    this.enable = false;
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = setRangeValue(data.distance);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.rotate) {
      const rotateX = data.rotate.x;
      if (rotateX !== void 0) {
        this.rotate.x = rotateX;
      }
      const rotateY = data.rotate.y;
      if (rotateY !== void 0) {
        this.rotate.y = rotateY;
      }
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js
var MoveCenter = class {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.mode = PixelMode.percent;
    this.radius = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.x !== void 0) {
      this.x = data.x;
    }
    if (data.y !== void 0) {
      this.y = data.y;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js
var MoveGravity = class {
  constructor() {
    this.acceleration = 9.81;
    this.enable = false;
    this.inverse = false;
    this.maxSpeed = 50;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.inverse !== void 0) {
      this.inverse = data.inverse;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js
var MovePath = class {
  constructor() {
    this.clamp = true;
    this.delay = new ValueWithRandom();
    this.enable = false;
    this.options = {};
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.clamp !== void 0) {
      this.clamp = data.clamp;
    }
    this.delay.load(data.delay);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.generator = data.generator;
    if (data.options) {
      this.options = deepExtend(this.options, data.options);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrailFill.js
var MoveTrailFill = class {
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveTrail.js
var MoveTrail = class {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fill = new MoveTrailFill();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.fill !== void 0) {
      this.fill.load(data.fill);
    }
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js
var OutMode;
(function(OutMode2) {
  OutMode2["bounce"] = "bounce";
  OutMode2["none"] = "none";
  OutMode2["out"] = "out";
  OutMode2["destroy"] = "destroy";
  OutMode2["split"] = "split";
})(OutMode || (OutMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js
var OutModes = class {
  constructor() {
    this.default = OutMode.out;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    this.bottom = data.bottom ?? data.default;
    this.left = data.left ?? data.default;
    this.right = data.right ?? data.default;
    this.top = data.top ?? data.default;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js
var Spin = class {
  constructor() {
    this.acceleration = 0;
    this.enable = false;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.position) {
      this.position = deepExtend({}, data.position);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js
var Move = class {
  constructor() {
    this.angle = new MoveAngle();
    this.attract = new MoveAttract();
    this.center = new MoveCenter();
    this.decay = 0;
    this.distance = {};
    this.direction = MoveDirection.none;
    this.drift = 0;
    this.enable = false;
    this.gravity = new MoveGravity();
    this.path = new MovePath();
    this.outModes = new OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.spin = new Spin();
    this.straight = false;
    this.trail = new MoveTrail();
    this.vibrate = false;
    this.warp = false;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.angle.load(isNumber(data.angle) ? {
      value: data.angle
    } : data.angle);
    this.attract.load(data.attract);
    this.center.load(data.center);
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    if (data.distance !== void 0) {
      this.distance = isNumber(data.distance) ? {
        horizontal: data.distance,
        vertical: data.distance
      } : __spreadValues({}, data.distance);
    }
    if (data.drift !== void 0) {
      this.drift = setRangeValue(data.drift);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.gravity.load(data.gravity);
    const outModes = data.outModes;
    if (outModes !== void 0) {
      if (isObject(outModes)) {
        this.outModes.load(outModes);
      } else {
        this.outModes.load({
          default: outModes
        });
      }
    }
    this.path.load(data.path);
    if (data.random !== void 0) {
      this.random = data.random;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    this.spin.load(data.spin);
    if (data.straight !== void 0) {
      this.straight = data.straight;
    }
    this.trail.load(data.trail);
    if (data.vibrate !== void 0) {
      this.vibrate = data.vibrate;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/OpacityAnimation.js
var OpacityAnimation = class extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = DestroyType.none;
    this.speed = 2;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Opacity/Opacity.js
var Opacity = class extends RangedAnimationValueWithRandom {
  constructor() {
    super();
    this.animation = new OpacityAnimation();
    this.value = 1;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    super.load(data);
    const animation = data.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js
var ParticlesDensity = class {
  constructor() {
    this.enable = false;
    this.width = 1920;
    this.height = 1080;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const width = data.width;
    if (width !== void 0) {
      this.width = width;
    }
    const height = data.height;
    if (height !== void 0) {
      this.height = height;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js
var LimitMode;
(function(LimitMode2) {
  LimitMode2["delete"] = "delete";
  LimitMode2["wait"] = "wait";
})(LimitMode || (LimitMode = {}));

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js
var ParticlesNumberLimit = class {
  constructor() {
    this.mode = LimitMode.delete;
    this.value = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js
var ParticlesNumber = class {
  constructor() {
    this.density = new ParticlesDensity();
    this.limit = new ParticlesNumberLimit();
    this.value = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.density.load(data.density);
    this.limit.load(data.limit);
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shadow.js
var Shadow = class {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000";
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset === void 0) {
      return;
    }
    if (data.offset.x !== void 0) {
      this.offset.x = data.offset.x;
    }
    if (data.offset.y !== void 0) {
      this.offset.y = data.offset.y;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js
var Shape = class {
  constructor() {
    this.close = true;
    this.fill = true;
    this.options = {};
    this.type = "circle";
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    const options = data.options;
    if (options !== void 0) {
      for (const shape in options) {
        const item = options[shape];
        if (item) {
          this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
        }
      }
    }
    if (data.close !== void 0) {
      this.close = data.close;
    }
    if (data.fill !== void 0) {
      this.fill = data.fill;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/SizeAnimation.js
var SizeAnimation = class extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = DestroyType.none;
    this.speed = 5;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Size/Size.js
var Size = class extends RangedAnimationValueWithRandom {
  constructor() {
    super();
    this.animation = new SizeAnimation();
    this.value = 3;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    const animation = data.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js
var Stroke = class {
  constructor() {
    this.width = 0;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = AnimatableColor.create(this.color, data.color);
    }
    if (data.width !== void 0) {
      this.width = setRangeValue(data.width);
    }
    if (data.opacity !== void 0) {
      this.opacity = setRangeValue(data.opacity);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js
var ZIndex = class extends ValueWithRandom {
  constructor() {
    super();
    this.opacityRate = 1;
    this.sizeRate = 1;
    this.velocityRate = 1;
  }
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    if (data.opacityRate !== void 0) {
      this.opacityRate = data.opacityRate;
    }
    if (data.sizeRate !== void 0) {
      this.sizeRate = data.sizeRate;
    }
    if (data.velocityRate !== void 0) {
      this.velocityRate = data.velocityRate;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js
var ParticlesOptions = class {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
    this.bounce = new ParticlesBounce();
    this.collisions = new Collisions();
    this.color = new AnimatableColor();
    this.color.value = "#fff";
    this.effect = new Effect();
    this.groups = {};
    this.move = new Move();
    this.number = new ParticlesNumber();
    this.opacity = new Opacity();
    this.reduceDuplicates = false;
    this.shadow = new Shadow();
    this.shape = new Shape();
    this.size = new Size();
    this.stroke = new Stroke();
    this.zIndex = new ZIndex();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.groups !== void 0) {
      for (const group of Object.keys(data.groups)) {
        if (!Object.hasOwn(data.groups, group)) {
          continue;
        }
        const item = data.groups[group];
        if (item !== void 0) {
          this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
        }
      }
    }
    if (data.reduceDuplicates !== void 0) {
      this.reduceDuplicates = data.reduceDuplicates;
    }
    this.bounce.load(data.bounce);
    this.color.load(AnimatableColor.create(this.color, data.color));
    this.effect.load(data.effect);
    this.move.load(data.move);
    this.number.load(data.number);
    this.opacity.load(data.opacity);
    this.shape.load(data.shape);
    this.size.load(data.size);
    this.shadow.load(data.shadow);
    this.zIndex.load(data.zIndex);
    this.collisions.load(data.collisions);
    if (data.interactivity !== void 0) {
      this.interactivity = deepExtend({}, data.interactivity);
    }
    const strokeToLoad = data.stroke;
    if (strokeToLoad) {
      this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t) => {
        const tmp = new Stroke();
        tmp.load(t);
        return tmp;
      });
    }
    if (this._container) {
      const updaters = this._engine.updaters.get(this._container);
      if (updaters) {
        for (const updater of updaters) {
          if (updater.loadOptions) {
            updater.loadOptions(this, data);
          }
        }
      }
      const interactors = this._engine.interactors.get(this._container);
      if (interactors) {
        for (const interactor of interactors) {
          if (interactor.loadParticlesOptions) {
            interactor.loadParticlesOptions(this, data);
          }
        }
      }
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js
function loadOptions(options, ...sourceOptionsArr) {
  for (const sourceOptions of sourceOptionsArr) {
    options.load(sourceOptions);
  }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
  const options = new ParticlesOptions(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}

// ../../node_modules/@tsparticles/engine/browser/Options/Classes/Options.js
var Options = class {
  constructor(engine, container) {
    this._findDefaultTheme = (mode) => {
      return this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme) => theme.default.value && theme.default.mode === ThemeMode.any);
    };
    this._importPreset = (preset) => {
      this.load(this._engine.getPreset(preset));
    };
    this._engine = engine;
    this._container = container;
    this.autoPlay = true;
    this.background = new Background();
    this.backgroundMask = new BackgroundMask();
    this.clear = true;
    this.defaultThemes = {};
    this.delay = 0;
    this.fullScreen = new FullScreen();
    this.detectRetina = true;
    this.duration = 0;
    this.fpsLimit = 120;
    this.interactivity = new Interactivity(engine, container);
    this.manualParticles = [];
    this.particles = loadParticlesOptions(this._engine, this._container);
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = true;
    this.responsive = [];
    this.smooth = false;
    this.style = {};
    this.themes = [];
    this.zLayers = 100;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.preset !== void 0) {
      executeOnSingleOrMultiple(data.preset, (preset) => this._importPreset(preset));
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    if (data.clear !== void 0) {
      this.clear = data.clear;
    }
    if (data.key !== void 0) {
      this.key = data.key;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    const detectRetina = data.detectRetina;
    if (detectRetina !== void 0) {
      this.detectRetina = detectRetina;
    }
    if (data.duration !== void 0) {
      this.duration = setRangeValue(data.duration);
    }
    const fpsLimit = data.fpsLimit;
    if (fpsLimit !== void 0) {
      this.fpsLimit = fpsLimit;
    }
    if (data.pauseOnBlur !== void 0) {
      this.pauseOnBlur = data.pauseOnBlur;
    }
    if (data.pauseOnOutsideViewport !== void 0) {
      this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
    }
    if (data.zLayers !== void 0) {
      this.zLayers = data.zLayers;
    }
    this.background.load(data.background);
    const fullScreen = data.fullScreen;
    if (isBoolean(fullScreen)) {
      this.fullScreen.enable = fullScreen;
    } else {
      this.fullScreen.load(fullScreen);
    }
    this.backgroundMask.load(data.backgroundMask);
    this.interactivity.load(data.interactivity);
    if (data.manualParticles) {
      this.manualParticles = data.manualParticles.map((t) => {
        const tmp = new ManualParticle();
        tmp.load(t);
        return tmp;
      });
    }
    this.particles.load(data.particles);
    this.style = deepExtend(this.style, data.style);
    this._engine.loadOptions(this, data);
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
    const interactors = this._engine.interactors.get(this._container);
    if (interactors) {
      for (const interactor of interactors) {
        if (interactor.loadOptions) {
          interactor.loadOptions(this, data);
        }
      }
    }
    if (data.responsive !== void 0) {
      for (const responsive of data.responsive) {
        const optResponsive = new Responsive();
        optResponsive.load(responsive);
        this.responsive.push(optResponsive);
      }
    }
    this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
    if (data.themes !== void 0) {
      for (const theme of data.themes) {
        const existingTheme = this.themes.find((t) => t.name === theme.name);
        if (!existingTheme) {
          const optTheme = new Theme();
          optTheme.load(theme);
          this.themes.push(optTheme);
        } else {
          existingTheme.load(theme);
        }
      }
    }
    this.defaultThemes.dark = this._findDefaultTheme(ThemeMode.dark)?.name;
    this.defaultThemes.light = this._findDefaultTheme(ThemeMode.light)?.name;
  }
  setResponsive(width, pxRatio, defaultOptions) {
    this.load(defaultOptions);
    const responsiveOptions = this.responsive.find((t) => t.mode === ResponsiveMode.screen && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
    this.load(responsiveOptions?.options);
    return responsiveOptions?.maxWidth;
  }
  setTheme(name) {
    if (name) {
      const chosenTheme = this.themes.find((theme) => theme.name === name);
      if (chosenTheme) {
        this.load(chosenTheme.options);
      }
    } else {
      const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch?.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? ThemeMode.dark : ThemeMode.light);
      if (defaultTheme) {
        this.load(defaultTheme.options);
      }
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/InteractorType.js
var InteractorType;
(function(InteractorType2) {
  InteractorType2["external"] = "external";
  InteractorType2["particles"] = "particles";
})(InteractorType || (InteractorType = {}));

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/InteractionManager.js
var InteractionManager = class {
  constructor(engine, container) {
    this.container = container;
    this._engine = engine;
    this._interactors = [];
    this._externalInteractors = [];
    this._particleInteractors = [];
  }
  externalInteract(delta) {
    for (const interactor of this._externalInteractors) {
      if (interactor.isEnabled()) {
        interactor.interact(delta);
      }
    }
  }
  handleClickMode(mode) {
    for (const interactor of this._externalInteractors) {
      interactor.handleClickMode?.(mode);
    }
  }
  init() {
    return __async(this, null, function* () {
      this._interactors = yield this._engine.getInteractors(this.container, true);
      this._externalInteractors = [];
      this._particleInteractors = [];
      for (const interactor of this._interactors) {
        switch (interactor.type) {
          case InteractorType.external:
            this._externalInteractors.push(interactor);
            break;
          case InteractorType.particles:
            this._particleInteractors.push(interactor);
            break;
        }
        interactor.init();
      }
    });
  }
  particlesInteract(particle, delta) {
    for (const interactor of this._externalInteractors) {
      interactor.clear(particle, delta);
    }
    for (const interactor of this._particleInteractors) {
      if (interactor.isEnabled(particle)) {
        interactor.interact(particle, delta);
      }
    }
  }
  reset(particle) {
    for (const interactor of this._externalInteractors) {
      if (interactor.isEnabled()) {
        interactor.reset(particle);
      }
    }
    for (const interactor of this._particleInteractors) {
      if (interactor.isEnabled(particle)) {
        interactor.reset(particle);
      }
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js
var ParticleOutType;
(function(ParticleOutType2) {
  ParticleOutType2["normal"] = "normal";
  ParticleOutType2["inside"] = "inside";
  ParticleOutType2["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));

// ../../node_modules/@tsparticles/engine/browser/Core/Particle.js
function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
  const effectData = effectOptions.options[effect];
  if (!effectData) {
    return;
  }
  return deepExtend({
    close: effectOptions.close,
    fill: effectOptions.fill
  }, itemFromSingleOrMultiple(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
  const shapeData = shapeOptions.options[shape];
  if (!shapeData) {
    return;
  }
  return deepExtend({
    close: shapeOptions.close,
    fill: shapeOptions.fill
  }, itemFromSingleOrMultiple(shapeData, id, reduceDuplicates));
}
function fixOutMode(data) {
  if (!isInArray(data.outMode, data.checkModes)) {
    return;
  }
  const diameter = data.radius * double;
  if (data.coord > data.maxCoord - diameter) {
    data.setCb(-data.radius);
  } else if (data.coord < diameter) {
    data.setCb(data.radius);
  }
}
var Particle = class {
  constructor(engine, container) {
    this.container = container;
    this._calcPosition = (container2, position, zIndex, tryCount = defaultRetryCount) => {
      for (const plugin of container2.plugins.values()) {
        const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position, this) : void 0;
        if (pluginPos) {
          return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
        }
      }
      const canvasSize = container2.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
        size: canvasSize,
        position
      }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: [OutMode.bounce],
          coord: pos.x,
          maxCoord: container2.canvas.size.width,
          setCb: (value) => pos.x += value,
          radius
        });
      }, fixVertical = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: [OutMode.bounce],
          coord: pos.y,
          maxCoord: container2.canvas.size.height,
          setCb: (value) => pos.y += value,
          radius
        });
      };
      fixHorizontal(outModes.left ?? outModes.default);
      fixHorizontal(outModes.right ?? outModes.default);
      fixVertical(outModes.top ?? outModes.default);
      fixVertical(outModes.bottom ?? outModes.default);
      if (this._checkOverlap(pos, tryCount)) {
        return this._calcPosition(container2, void 0, zIndex, tryCount + tryCountIncrement);
      }
      return pos;
    };
    this._calculateVelocity = () => {
      const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
      if (moveOptions.direction === MoveDirection.inside || moveOptions.direction === MoveDirection.outside) {
        return res;
      }
      const rad = degToRad(getRangeValue(moveOptions.angle.value)), radOffset = degToRad(getRangeValue(moveOptions.angle.offset)), range = {
        left: radOffset - rad * half,
        right: radOffset + rad * half
      };
      if (!moveOptions.straight) {
        res.angle += randomInRange(setRangeValue(range.left, range.right));
      }
      if (moveOptions.random && typeof moveOptions.speed === "number") {
        res.length *= getRandom();
      }
      return res;
    };
    this._checkOverlap = (pos, tryCount = defaultRetryCount) => {
      const collisionsOptions = this.options.collisions, radius = this.getRadius();
      if (!collisionsOptions.enable) {
        return false;
      }
      const overlapOptions = collisionsOptions.overlap;
      if (overlapOptions.enable) {
        return false;
      }
      const retries = overlapOptions.retries;
      if (retries >= minRetries && tryCount > retries) {
        throw new Error(`${errorPrefix} particle is overlapping and can't be placed`);
      }
      return !!this.container.particles.find((particle) => getDistance(pos, particle.position) < radius + particle.getRadius());
    };
    this._getRollColor = (color) => {
      if (!color || !this.roll || !this.backColor && !this.roll.alter) {
        return color;
      }
      const backFactor = this.roll.horizontal && this.roll.vertical ? double * rollFactor : rollFactor, backSum = this.roll.horizontal ? Math.PI * half : none, rolled = Math.floor(((this.roll.angle ?? none) + backSum) / (Math.PI / backFactor)) % double;
      if (!rolled) {
        return color;
      }
      if (this.backColor) {
        return this.backColor;
      }
      if (this.roll.alter) {
        return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
      }
      return color;
    };
    this._initPosition = (position) => {
      const container2 = this.container, zIndexValue = getRangeValue(this.options.zIndex.value);
      this.position = this._calcPosition(container2, position, clamp(zIndexValue, minZ, container2.zLayers));
      this.initialPosition = this.position.copy();
      const canvasSize = container2.canvas.size;
      this.moveCenter = __spreadProps(__spreadValues({}, getPosition(this.options.move.center, canvasSize)), {
        radius: this.options.move.center.radius ?? defaultRadius,
        mode: this.options.move.center.mode ?? PixelMode.percent
      });
      this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
      switch (this.options.move.direction) {
        case MoveDirection.inside:
          this.outType = ParticleOutType.inside;
          break;
        case MoveDirection.outside:
          this.outType = ParticleOutType.outside;
          break;
      }
      this.offset = Vector.origin;
    };
    this._engine = engine;
  }
  destroy(override) {
    if (this.unbreakable || this.destroyed) {
      return;
    }
    this.destroyed = true;
    this.bubble.inRange = false;
    this.slow.inRange = false;
    const container = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container.shapeDrawers.get(this.shape);
    shapeDrawer?.particleDestroy?.(this);
    for (const plugin of container.plugins.values()) {
      plugin.particleDestroyed?.(this, override);
    }
    for (const updater of container.particles.updaters) {
      updater.particleDestroyed?.(this, override);
    }
    pathGenerator?.reset(this);
    this._engine.dispatchEvent(EventType.particleDestroyed, {
      container: this.container,
      data: {
        particle: this
      }
    });
  }
  draw(delta) {
    const container = this.container, canvas = container.canvas;
    for (const plugin of container.plugins.values()) {
      canvas.drawParticlePlugin(plugin, this, delta);
    }
    canvas.drawParticle(this, delta);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.color));
  }
  getMass() {
    return this.getRadius() ** squareExp * Math.PI * half;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.strokeColor));
  }
  init(id, position, overrideOptions, group) {
    const container = this.container, engine = this._engine;
    this.id = id;
    this.group = group;
    this.effectClose = true;
    this.effectFill = true;
    this.shapeClose = true;
    this.shapeFill = true;
    this.pathRotation = false;
    this.lastPathTime = 0;
    this.destroyed = false;
    this.unbreakable = false;
    this.isRotating = false;
    this.rotation = 0;
    this.misplaced = false;
    this.retina = {
      maxDistance: {}
    };
    this.outType = ParticleOutType.normal;
    this.ignoresResizeRatio = true;
    const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container, mainOptions.particles), {
      reduceDuplicates
    } = particlesOptions, effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type;
    this.effect = itemFromSingleOrMultiple(effectType, this.id, reduceDuplicates);
    this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
    const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
    if (overrideOptions) {
      if (overrideOptions.effect?.type) {
        const overrideEffectType = overrideOptions.effect.type, effect = itemFromSingleOrMultiple(overrideEffectType, this.id, reduceDuplicates);
        if (effect) {
          this.effect = effect;
          effectOptions.load(overrideOptions.effect);
        }
      }
      if (overrideOptions.shape?.type) {
        const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
        if (shape) {
          this.shape = shape;
          shapeOptions.load(overrideOptions.shape);
        }
      }
    }
    if (this.effect === randomColorValue) {
      const availableEffects = [...this.container.effectDrawers.keys()];
      this.effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
    }
    if (this.shape === randomColorValue) {
      const availableShapes = [...this.container.shapeDrawers.keys()];
      this.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
    }
    this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
    this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
    particlesOptions.load(overrideOptions);
    const effectData = this.effectData;
    if (effectData) {
      particlesOptions.load(effectData.particles);
    }
    const shapeData = this.shapeData;
    if (shapeData) {
      particlesOptions.load(shapeData.particles);
    }
    const interactivity = new Interactivity(engine, container);
    interactivity.load(container.actualOptions.interactivity);
    interactivity.load(particlesOptions.interactivity);
    this.interactivity = interactivity;
    this.effectFill = effectData?.fill ?? particlesOptions.effect.fill;
    this.effectClose = effectData?.close ?? particlesOptions.effect.close;
    this.shapeFill = shapeData?.fill ?? particlesOptions.shape.fill;
    this.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
    this.options = particlesOptions;
    const pathOptions = this.options.move.path;
    this.pathDelay = getRangeValue(pathOptions.delay.value) * millisecondsToSeconds;
    if (pathOptions.generator) {
      this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
      if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
        this.pathGenerator.init(container);
      }
    }
    container.retina.initParticle(this);
    this.size = initParticleNumericAnimationValue(this.options.size, pxRatio);
    this.bubble = {
      inRange: false
    };
    this.slow = {
      inRange: false,
      factor: 1
    };
    this._initPosition(position);
    this.initialVelocity = this._calculateVelocity();
    this.velocity = this.initialVelocity.copy();
    this.moveDecay = decayOffset - getRangeValue(this.options.move.decay);
    const particles = container.particles;
    particles.setLastZIndex(this.position.z);
    this.zIndexFactor = this.position.z / container.zLayers;
    this.sides = 24;
    let effectDrawer = container.effectDrawers.get(this.effect);
    if (!effectDrawer) {
      effectDrawer = this._engine.getEffectDrawer(this.effect);
      if (effectDrawer) {
        container.effectDrawers.set(this.effect, effectDrawer);
      }
    }
    if (effectDrawer?.loadEffect) {
      effectDrawer.loadEffect(this);
    }
    let shapeDrawer = container.shapeDrawers.get(this.shape);
    if (!shapeDrawer) {
      shapeDrawer = this._engine.getShapeDrawer(this.shape);
      if (shapeDrawer) {
        container.shapeDrawers.set(this.shape, shapeDrawer);
      }
    }
    if (shapeDrawer?.loadShape) {
      shapeDrawer.loadShape(this);
    }
    const sideCountFunc = shapeDrawer?.getSidesCount;
    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }
    this.spawning = false;
    this.shadowColor = rangeColorToRgb(this._engine, this.options.shadow.color);
    for (const updater of particles.updaters) {
      updater.init(this);
    }
    for (const mover of particles.movers) {
      mover.init?.(this);
    }
    effectDrawer?.particleInit?.(container, this);
    shapeDrawer?.particleInit?.(container, this);
    for (const plugin of container.plugins.values()) {
      plugin.particleCreated?.(this);
    }
  }
  isInsideCanvas() {
    const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
    return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    for (const updater of this.container.particles.updaters) {
      updater.reset?.(this);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/Point.js
var Point = class {
  constructor(position, particle) {
    this.position = position;
    this.particle = particle;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Types/RangeType.js
var RangeType;
(function(RangeType2) {
  RangeType2["circle"] = "circle";
  RangeType2["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js
var BaseRange = class {
  constructor(x, y, type) {
    this.position = {
      x,
      y
    };
    this.type = type;
  }
};
var Circle = class _Circle extends BaseRange {
  constructor(x, y, radius) {
    super(x, y, RangeType.circle);
    this.radius = radius;
  }
  contains(point) {
    return getDistance(point, this.position) <= this.radius;
  }
  intersects(range) {
    const pos1 = this.position, pos2 = range.position, distPos = {
      x: Math.abs(pos2.x - pos1.x),
      y: Math.abs(pos2.y - pos1.y)
    }, r = this.radius;
    if (range instanceof _Circle || range.type === RangeType.circle) {
      const circleRange = range, rSum = r + circleRange.radius, dist = Math.sqrt(distPos.x ** squareExp + distPos.y ** squareExp);
      return rSum > dist;
    } else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
      const rectRange = range, {
        width,
        height
      } = rectRange.size, edges = Math.pow(distPos.x - width, squareExp) + Math.pow(distPos.y - height, squareExp);
      return edges <= r ** squareExp || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
    }
    return false;
  }
};
var Rectangle = class _Rectangle extends BaseRange {
  constructor(x, y, width, height) {
    super(x, y, RangeType.rectangle);
    this.size = {
      height,
      width
    };
  }
  contains(point) {
    const w = this.size.width, h = this.size.height, pos = this.position;
    return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
  }
  intersects(range) {
    if (range instanceof Circle) {
      return range.intersects(this);
    }
    const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof _Rectangle ? range.size : {
      width: 0,
      height: 0
    }, w2 = size2.width, h2 = size2.height;
    return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/QuadTree.js
var QuadTree = class _QuadTree {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this._subdivide = () => {
      const {
        x,
        y
      } = this.rectangle.position, {
        width,
        height
      } = this.rectangle.size, {
        capacity: capacity2
      } = this;
      for (let i = 0; i < subdivideCount; i++) {
        const fixedIndex = i % double;
        this._subs.push(new _QuadTree(new Rectangle(x + width * half * fixedIndex, y + height * half * (Math.round(i * half) - fixedIndex), width * half, height * half), capacity2));
      }
      this._divided = true;
    };
    this._points = [];
    this._divided = false;
    this._subs = [];
  }
  insert(point) {
    if (!this.rectangle.contains(point.position)) {
      return false;
    }
    if (this._points.length < this.capacity) {
      this._points.push(point);
      return true;
    }
    if (!this._divided) {
      this._subdivide();
    }
    return this._subs.some((sub) => sub.insert(point));
  }
  query(range, check) {
    const res = [];
    if (!range.intersects(this.rectangle)) {
      return [];
    }
    for (const p of this._points) {
      if (!range.contains(p.position) && getDistance(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
        continue;
      }
      res.push(p.particle);
    }
    if (this._divided) {
      for (const sub of this._subs) {
        res.push(...sub.query(range, check));
      }
    }
    return res;
  }
  queryCircle(position, radius, check) {
    return this.query(new Circle(position.x, position.y, radius), check);
  }
  queryRectangle(position, size, check) {
    return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Particles.js
var qTreeRectangle = (canvasSize) => {
  const {
    height,
    width
  } = canvasSize;
  return new Rectangle(posOffset * width, posOffset * height, sizeFactor * width, sizeFactor * height);
};
var Particles = class {
  constructor(engine, container) {
    this._addToPool = (...particles) => {
      this._pool.push(...particles);
    };
    this._applyDensity = (options, manualCount2, group) => {
      const numberOptions = options.number;
      if (!options.number.density?.enable) {
        if (group === void 0) {
          this._limit = numberOptions.limit.value;
        } else if (numberOptions.limit) {
          this._groupLimits.set(group, numberOptions.limit.value);
        }
        return;
      }
      const densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount2, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
      if (group === void 0) {
        this._limit = numberOptions.limit.value * densityFactor;
      } else {
        this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
      }
      if (particlesCount < particlesNumber) {
        this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
      } else if (particlesCount > particlesNumber) {
        this.removeQuantity(particlesCount - particlesNumber, group);
      }
    };
    this._initDensityFactor = (densityOptions) => {
      const container2 = this._container;
      if (!container2.canvas.element || !densityOptions.enable) {
        return defaultDensityFactor;
      }
      const canvas = container2.canvas.element, pxRatio = container2.retina.pixelRatio;
      return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp);
    };
    this._pushParticle = (position, overrideOptions, group, initializer) => {
      try {
        let particle = this._pool.pop();
        if (!particle) {
          particle = new Particle(this._engine, this._container);
        }
        particle.init(this._nextId, position, overrideOptions, group);
        let canAdd = true;
        if (initializer) {
          canAdd = initializer(particle);
        }
        if (!canAdd) {
          return;
        }
        this._array.push(particle);
        this._zArray.push(particle);
        this._nextId++;
        this._engine.dispatchEvent(EventType.particleAdded, {
          container: this._container,
          data: {
            particle
          }
        });
        return particle;
      } catch (e) {
        getLogger().warning(`${errorPrefix} adding particle: ${e}`);
      }
    };
    this._removeParticle = (index, group, override) => {
      const particle = this._array[index];
      if (!particle || particle.group !== group) {
        return false;
      }
      const zIdx = this._zArray.indexOf(particle);
      this._array.splice(index, deleteCount);
      this._zArray.splice(zIdx, deleteCount);
      particle.destroy(override);
      this._engine.dispatchEvent(EventType.particleRemoved, {
        container: this._container,
        data: {
          particle
        }
      });
      this._addToPool(particle);
      return true;
    };
    this._engine = engine;
    this._container = container;
    this._nextId = 0;
    this._array = [];
    this._zArray = [];
    this._pool = [];
    this._limit = 0;
    this._groupLimits = /* @__PURE__ */ new Map();
    this._needsSort = false;
    this._lastZIndex = 0;
    this._interactionManager = new InteractionManager(engine, container);
    this._pluginsInitialized = false;
    const canvasSize = container.canvas.size;
    this.quadTree = new QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
    this.movers = [];
    this.updaters = [];
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const container = this._container, options = container.actualOptions;
    options.manualParticles.forEach((p) => this.addParticle(p.position ? getPosition(p.position, container.canvas.size) : void 0, p.options));
  }
  addParticle(position, overrideOptions, group, initializer) {
    const limitMode = this._container.actualOptions.particles.number.limit.mode, limit = group === void 0 ? this._limit : this._groupLimits.get(group) ?? this._limit, currentCount = this.count;
    if (limit > minLimit) {
      switch (limitMode) {
        case LimitMode.delete: {
          const countToRemove = currentCount + countOffset - limit;
          if (countToRemove > minCount) {
            this.removeQuantity(countToRemove);
          }
          break;
        }
        case LimitMode.wait:
          if (currentCount >= limit) {
            return;
          }
          break;
      }
    }
    return this._pushParticle(position, overrideOptions, group, initializer);
  }
  clear() {
    this._array = [];
    this._zArray = [];
    this._pluginsInitialized = false;
  }
  destroy() {
    this._array = [];
    this._zArray = [];
    this.movers = [];
    this.updaters = [];
  }
  draw(delta) {
    const container = this._container, canvas = container.canvas;
    canvas.clear();
    this.update(delta);
    for (const plugin of container.plugins.values()) {
      canvas.drawPlugin(plugin, delta);
    }
    for (const p of this._zArray) {
      p.draw(delta);
    }
  }
  filter(condition) {
    return this._array.filter(condition);
  }
  find(condition) {
    return this._array.find(condition);
  }
  get(index) {
    return this._array[index];
  }
  handleClickMode(mode) {
    this._interactionManager.handleClickMode(mode);
  }
  init() {
    return __async(this, null, function* () {
      const container = this._container, options = container.actualOptions;
      this._lastZIndex = 0;
      this._needsSort = false;
      yield this.initPlugins();
      let handled = false;
      for (const plugin of container.plugins.values()) {
        handled = plugin.particlesInitialization?.() ?? handled;
        if (handled) {
          break;
        }
      }
      this.addManualParticles();
      if (!handled) {
        const particlesOptions = options.particles, groups = particlesOptions.groups;
        for (const group in groups) {
          const groupOptions = groups[group];
          for (let i = this.count, j = 0; j < groupOptions.number?.value && i < particlesOptions.number.value; i++, j++) {
            this.addParticle(void 0, groupOptions, group);
          }
        }
        for (let i = this.count; i < particlesOptions.number.value; i++) {
          this.addParticle();
        }
      }
    });
  }
  initPlugins() {
    return __async(this, null, function* () {
      if (this._pluginsInitialized) {
        return;
      }
      const container = this._container;
      this.movers = yield this._engine.getMovers(container, true);
      this.updaters = yield this._engine.getUpdaters(container, true);
      yield this._interactionManager.init();
      for (const pathGenerator of container.pathGenerators.values()) {
        pathGenerator.init(container);
      }
    });
  }
  push(nb, mouse, overrideOptions, group) {
    for (let i = 0; i < nb; i++) {
      this.addParticle(mouse?.position, overrideOptions, group);
    }
  }
  redraw() {
    return __async(this, null, function* () {
      this.clear();
      yield this.init();
      this.draw({
        value: 0,
        factor: 0
      });
    });
  }
  remove(particle, group, override) {
    this.removeAt(this._array.indexOf(particle), void 0, group, override);
  }
  removeAt(index, quantity = defaultRemoveQuantity, group, override) {
    if (index < minIndex || index > this.count) {
      return;
    }
    let deleted = 0;
    for (let i = index; deleted < quantity && i < this.count; i++) {
      if (this._removeParticle(i, group, override)) {
        i--;
        deleted++;
      }
    }
  }
  removeQuantity(quantity, group) {
    this.removeAt(minIndex, quantity, group);
  }
  setDensity() {
    const options = this._container.actualOptions, groups = options.particles.groups;
    for (const group in groups) {
      this._applyDensity(groups[group], manualCount, group);
    }
    this._applyDensity(options.particles, options.manualParticles.length);
  }
  setLastZIndex(zIndex) {
    this._lastZIndex = zIndex;
    this._needsSort = this._needsSort || this._lastZIndex < zIndex;
  }
  setResizeFactor(factor) {
    this._resizeFactor = factor;
  }
  update(delta) {
    const container = this._container, particlesToDelete = /* @__PURE__ */ new Set();
    this.quadTree = new QuadTree(qTreeRectangle(container.canvas.size), qTreeCapacity);
    for (const pathGenerator of container.pathGenerators.values()) {
      pathGenerator.update();
    }
    for (const plugin of container.plugins.values()) {
      plugin.update?.(delta);
    }
    const resizeFactor = this._resizeFactor;
    for (const particle of this._array) {
      if (resizeFactor && !particle.ignoresResizeRatio) {
        particle.position.x *= resizeFactor.width;
        particle.position.y *= resizeFactor.height;
        particle.initialPosition.x *= resizeFactor.width;
        particle.initialPosition.y *= resizeFactor.height;
      }
      particle.ignoresResizeRatio = false;
      this._interactionManager.reset(particle);
      for (const plugin of this._container.plugins.values()) {
        if (particle.destroyed) {
          break;
        }
        plugin.particleUpdate?.(particle, delta);
      }
      for (const mover of this.movers) {
        if (mover.isEnabled(particle)) {
          mover.move(particle, delta);
        }
      }
      if (particle.destroyed) {
        particlesToDelete.add(particle);
        continue;
      }
      this.quadTree.insert(new Point(particle.getPosition(), particle));
    }
    if (particlesToDelete.size) {
      const checkDelete = (p) => !particlesToDelete.has(p);
      this._array = this.filter(checkDelete);
      this._zArray = this._zArray.filter(checkDelete);
      for (const particle of particlesToDelete) {
        this._engine.dispatchEvent(EventType.particleRemoved, {
          container: this._container,
          data: {
            particle
          }
        });
      }
      this._addToPool(...particlesToDelete);
    }
    this._interactionManager.externalInteract(delta);
    for (const particle of this._array) {
      for (const updater of this.updaters) {
        updater.update(particle, delta);
      }
      if (!particle.destroyed && !particle.spawning) {
        this._interactionManager.particlesInteract(particle, delta);
      }
    }
    delete this._resizeFactor;
    if (this._needsSort) {
      const zArray = this._zArray;
      zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
      this._lastZIndex = zArray[zArray.length - lengthOffset].position.z;
      this._needsSort = false;
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Retina.js
var Retina = class {
  constructor(container) {
    this.container = container;
    this.pixelRatio = defaultRatio;
    this.reduceFactor = defaultReduceFactor;
  }
  init() {
    const container = this.container, options = container.actualOptions;
    this.pixelRatio = !options.detectRetina || isSsr() ? defaultRatio : window.devicePixelRatio;
    this.reduceFactor = defaultReduceFactor;
    const ratio = this.pixelRatio, canvas = container.canvas;
    if (canvas.element) {
      const element = canvas.element;
      canvas.size.width = element.offsetWidth * ratio;
      canvas.size.height = element.offsetHeight * ratio;
    }
    const particles = options.particles, moveOptions = particles.move;
    this.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
    this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
  }
  initParticle(particle) {
    const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
    props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
    props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
    props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
    const maxDistance = props.maxDistance;
    maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
    maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
    props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Container.js
function guardCheck(container) {
  return container && !container.destroyed;
}
function initDelta(value, fpsLimit = defaultFps, smooth = false) {
  return {
    value,
    factor: smooth ? defaultFps / fpsLimit : defaultFps * value / millisecondsToSeconds
  };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
  const options = new Options(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
var Container = class {
  constructor(engine, id, sourceOptions) {
    this._intersectionManager = (entries) => {
      if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
        return;
      }
      for (const entry of entries) {
        if (entry.target !== this.interactivity.element) {
          continue;
        }
        if (entry.isIntersecting) {
          void this.play();
        } else {
          this.pause();
        }
      }
    };
    this._nextFrame = (timestamp) => {
      try {
        if (!this._smooth && this._lastFrameTime !== void 0 && timestamp < this._lastFrameTime + millisecondsToSeconds / this.fpsLimit) {
          this.draw(false);
          return;
        }
        this._lastFrameTime ??= timestamp;
        const delta = initDelta(timestamp - this._lastFrameTime, this.fpsLimit, this._smooth);
        this.addLifeTime(delta.value);
        this._lastFrameTime = timestamp;
        if (delta.value > millisecondsToSeconds) {
          this.draw(false);
          return;
        }
        this.particles.draw(delta);
        if (!this.alive()) {
          this.destroy();
          return;
        }
        if (this.animationStatus) {
          this.draw(false);
        }
      } catch (e) {
        getLogger().error(`${errorPrefix} in animation loop`, e);
      }
    };
    this._engine = engine;
    this.id = Symbol(id);
    this.fpsLimit = 120;
    this._smooth = false;
    this._delay = 0;
    this._duration = 0;
    this._lifeTime = 0;
    this._firstStart = true;
    this.started = false;
    this.destroyed = false;
    this._paused = true;
    this._lastFrameTime = 0;
    this.zLayers = 100;
    this.pageHidden = false;
    this._clickHandlers = /* @__PURE__ */ new Map();
    this._sourceOptions = sourceOptions;
    this._initialSourceOptions = sourceOptions;
    this.retina = new Retina(this);
    this.canvas = new Canvas(this, this._engine);
    this.particles = new Particles(this._engine, this);
    this.pathGenerators = /* @__PURE__ */ new Map();
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.plugins = /* @__PURE__ */ new Map();
    this.effectDrawers = /* @__PURE__ */ new Map();
    this.shapeDrawers = /* @__PURE__ */ new Map();
    this._options = loadContainerOptions(this._engine, this);
    this.actualOptions = loadContainerOptions(this._engine, this);
    this._eventListeners = new EventListeners(this);
    this._intersectionObserver = safeIntersectionObserver((entries) => this._intersectionManager(entries));
    this._engine.dispatchEvent(EventType.containerBuilt, {
      container: this
    });
  }
  get animationStatus() {
    return !this._paused && !this.pageHidden && guardCheck(this);
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(callback) {
    if (!guardCheck(this)) {
      return;
    }
    const el = this.interactivity.element;
    if (!el) {
      return;
    }
    const clickOrTouchHandler = (e, pos, radius) => {
      if (!guardCheck(this)) {
        return;
      }
      const pxRatio = this.retina.pixelRatio, posRetina = {
        x: pos.x * pxRatio,
        y: pos.y * pxRatio
      }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
      callback(e, particles);
    }, clickHandler = (e) => {
      if (!guardCheck(this)) {
        return;
      }
      const mouseEvent = e, pos = {
        x: mouseEvent.offsetX || mouseEvent.clientX,
        y: mouseEvent.offsetY || mouseEvent.clientY
      };
      clickOrTouchHandler(e, pos, clickRadius);
    }, touchStartHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = true;
      touchMoved = false;
    }, touchMoveHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touchMoved = true;
    }, touchEndHandler = (e) => {
      if (!guardCheck(this)) {
        return;
      }
      if (touched && !touchMoved) {
        const touchEvent = e;
        let lastTouch = touchEvent.touches[touchEvent.touches.length - touchEndLengthOffset];
        if (!lastTouch) {
          lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - touchEndLengthOffset];
          if (!lastTouch) {
            return;
          }
        }
        const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : void 0, pos = {
          x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
          y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
        };
        clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
      }
      touched = false;
      touchMoved = false;
    }, touchCancelHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = false;
      touchMoved = false;
    };
    let touched = false, touchMoved = false;
    this._clickHandlers.set("click", clickHandler);
    this._clickHandlers.set("touchstart", touchStartHandler);
    this._clickHandlers.set("touchmove", touchMoveHandler);
    this._clickHandlers.set("touchend", touchEndHandler);
    this._clickHandlers.set("touchcancel", touchCancelHandler);
    for (const [key, handler] of this._clickHandlers) {
      el.addEventListener(key, handler);
    }
  }
  addLifeTime(value) {
    this._lifeTime += value;
  }
  addPath(key, generator, override = false) {
    if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
      return false;
    }
    this.pathGenerators.set(key, generator);
    return true;
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  clearClickHandlers() {
    if (!guardCheck(this)) {
      return;
    }
    for (const [key, handler] of this._clickHandlers) {
      this.interactivity.element?.removeEventListener(key, handler);
    }
    this._clickHandlers.clear();
  }
  destroy(remove = true) {
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    this.clearClickHandlers();
    this.particles.destroy();
    this.canvas.destroy();
    for (const effectDrawer of this.effectDrawers.values()) {
      effectDrawer.destroy?.(this);
    }
    for (const shapeDrawer of this.shapeDrawers.values()) {
      shapeDrawer.destroy?.(this);
    }
    for (const key of this.effectDrawers.keys()) {
      this.effectDrawers.delete(key);
    }
    for (const key of this.shapeDrawers.keys()) {
      this.shapeDrawers.delete(key);
    }
    this._engine.clearPlugins(this);
    this.destroyed = true;
    if (remove) {
      const mainArr = this._engine.items, idx = mainArr.findIndex((t) => t === this);
      if (idx >= removeMinIndex) {
        mainArr.splice(idx, removeDeleteCount);
      }
    }
    this._engine.dispatchEvent(EventType.containerDestroyed, {
      container: this
    });
  }
  draw(force) {
    if (!guardCheck(this)) {
      return;
    }
    let refreshTime = force;
    const frame = (timestamp) => {
      if (refreshTime) {
        this._lastFrameTime = void 0;
        refreshTime = false;
      }
      this._nextFrame(timestamp);
    };
    this._drawAnimationFrame = animate((timestamp) => frame(timestamp));
  }
  export(_0) {
    return __async(this, arguments, function* (type, options = {}) {
      for (const plugin of this.plugins.values()) {
        if (!plugin.export) {
          continue;
        }
        const res = yield plugin.export(type, options);
        if (!res.supported) {
          continue;
        }
        return res.blob;
      }
      getLogger().error(`${errorPrefix} - Export plugin with type ${type} not found`);
    });
  }
  handleClickMode(mode) {
    if (!guardCheck(this)) {
      return;
    }
    this.particles.handleClickMode(mode);
    for (const plugin of this.plugins.values()) {
      plugin.handleClickMode?.(mode);
    }
  }
  init() {
    return __async(this, null, function* () {
      if (!guardCheck(this)) {
        return;
      }
      const effects = this._engine.getSupportedEffects();
      for (const type of effects) {
        const drawer = this._engine.getEffectDrawer(type);
        if (drawer) {
          this.effectDrawers.set(type, drawer);
        }
      }
      const shapes = this._engine.getSupportedShapes();
      for (const type of shapes) {
        const drawer = this._engine.getShapeDrawer(type);
        if (drawer) {
          this.shapeDrawers.set(type, drawer);
        }
      }
      yield this.particles.initPlugins();
      this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
      this.actualOptions = loadContainerOptions(this._engine, this, this._options);
      const availablePlugins = yield this._engine.getAvailablePlugins(this);
      for (const [id, plugin] of availablePlugins) {
        this.plugins.set(id, plugin);
      }
      this.retina.init();
      yield this.canvas.init();
      this.updateActualOptions();
      this.canvas.initBackground();
      this.canvas.resize();
      const {
        zLayers,
        duration,
        delay,
        fpsLimit,
        smooth
      } = this.actualOptions;
      this.zLayers = zLayers;
      this._duration = getRangeValue(duration) * millisecondsToSeconds;
      this._delay = getRangeValue(delay) * millisecondsToSeconds;
      this._lifeTime = 0;
      this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
      this._smooth = smooth;
      for (const drawer of this.effectDrawers.values()) {
        yield drawer.init?.(this);
      }
      for (const drawer of this.shapeDrawers.values()) {
        yield drawer.init?.(this);
      }
      for (const plugin of this.plugins.values()) {
        yield plugin.init?.();
      }
      this._engine.dispatchEvent(EventType.containerInit, {
        container: this
      });
      yield this.particles.init();
      this.particles.setDensity();
      for (const plugin of this.plugins.values()) {
        plugin.particlesSetup?.();
      }
      this._engine.dispatchEvent(EventType.particlesSetup, {
        container: this
      });
    });
  }
  loadTheme(name) {
    return __async(this, null, function* () {
      if (!guardCheck(this)) {
        return;
      }
      this._currentTheme = name;
      yield this.refresh();
    });
  }
  pause() {
    if (!guardCheck(this)) {
      return;
    }
    if (this._drawAnimationFrame !== void 0) {
      cancelAnimation(this._drawAnimationFrame);
      delete this._drawAnimationFrame;
    }
    if (this._paused) {
      return;
    }
    for (const plugin of this.plugins.values()) {
      plugin.pause?.();
    }
    if (!this.pageHidden) {
      this._paused = true;
    }
    this._engine.dispatchEvent(EventType.containerPaused, {
      container: this
    });
  }
  play(force) {
    if (!guardCheck(this)) {
      return;
    }
    const needsUpdate = this._paused || force;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = false;
      return;
    }
    if (this._paused) {
      this._paused = false;
    }
    if (needsUpdate) {
      for (const plugin of this.plugins.values()) {
        if (plugin.play) {
          plugin.play();
        }
      }
    }
    this._engine.dispatchEvent(EventType.containerPlay, {
      container: this
    });
    this.draw(needsUpdate ?? false);
  }
  refresh() {
    return __async(this, null, function* () {
      if (!guardCheck(this)) {
        return;
      }
      this.stop();
      return this.start();
    });
  }
  reset(sourceOptions) {
    return __async(this, null, function* () {
      if (!guardCheck(this)) {
        return;
      }
      this._initialSourceOptions = sourceOptions;
      this._sourceOptions = sourceOptions;
      this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
      this.actualOptions = loadContainerOptions(this._engine, this, this._options);
      return this.refresh();
    });
  }
  start() {
    return __async(this, null, function* () {
      if (!guardCheck(this) || this.started) {
        return;
      }
      yield this.init();
      this.started = true;
      yield new Promise((resolve) => {
        const start = () => __async(this, null, function* () {
          this._eventListeners.addListeners();
          if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
            this._intersectionObserver.observe(this.interactivity.element);
          }
          for (const plugin of this.plugins.values()) {
            yield plugin.start?.();
          }
          this._engine.dispatchEvent(EventType.containerStarted, {
            container: this
          });
          this.play();
          resolve();
        });
        this._delayTimeout = setTimeout(() => void start(), this._delay);
      });
    });
  }
  stop() {
    if (!guardCheck(this) || !this.started) {
      return;
    }
    if (this._delayTimeout) {
      clearTimeout(this._delayTimeout);
      delete this._delayTimeout;
    }
    this._firstStart = true;
    this.started = false;
    this._eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.canvas.stop();
    if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
      this._intersectionObserver.unobserve(this.interactivity.element);
    }
    for (const plugin of this.plugins.values()) {
      plugin.stop?.();
    }
    for (const key of this.plugins.keys()) {
      this.plugins.delete(key);
    }
    this._sourceOptions = this._options;
    this._engine.dispatchEvent(EventType.containerStopped, {
      container: this
    });
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
    this.actualOptions.setTheme(this._currentTheme);
    if (this._responsiveMaxWidth === newMaxWidth) {
      return false;
    }
    this._responsiveMaxWidth = newMaxWidth;
    return true;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
var EventDispatcher = class {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, listener) {
    this.removeEventListener(type, listener);
    let arr = this._listeners.get(type);
    if (!arr) {
      arr = [];
      this._listeners.set(type, arr);
    }
    arr.push(listener);
  }
  dispatchEvent(type, args) {
    const listeners = this._listeners.get(type);
    listeners?.forEach((handler) => handler(args));
  }
  hasEventListener(type) {
    return !!this._listeners.get(type);
  }
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = /* @__PURE__ */ new Map();
    } else {
      this._listeners.delete(type);
    }
  }
  removeEventListener(type, listener) {
    const arr = this._listeners.get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener);
    if (idx < minIndex) {
      return;
    }
    if (length === deleteCount) {
      this._listeners.delete(type);
    } else {
      arr.splice(idx, deleteCount);
    }
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Engine.js
function getItemsFromInitializer(container, map, initializers, force = false) {
  return __async(this, null, function* () {
    let res = map.get(container);
    if (!res || force) {
      res = yield Promise.all([...initializers.values()].map((t) => t(container)));
      map.set(container, res);
    }
    return res;
  });
}
function getDataFromUrl(data) {
  return __async(this, null, function* () {
    const url = itemFromSingleOrMultiple(data.url, data.index);
    if (!url) {
      return data.fallback;
    }
    const response = yield fetch(url);
    if (response.ok) {
      return yield response.json();
    }
    getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
    return data.fallback;
  });
}
var getCanvasFromContainer = (domContainer) => {
  let canvasEl;
  if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag) {
    canvasEl = domContainer;
    if (!canvasEl.dataset[generatedAttribute]) {
      canvasEl.dataset[generatedAttribute] = generatedFalse;
    }
  } else {
    const existingCanvases = domContainer.getElementsByTagName(canvasTag);
    if (existingCanvases.length) {
      canvasEl = existingCanvases[canvasFirstIndex];
      canvasEl.dataset[generatedAttribute] = generatedFalse;
    } else {
      canvasEl = document.createElement(canvasTag);
      canvasEl.dataset[generatedAttribute] = generatedTrue;
      domContainer.appendChild(canvasEl);
    }
  }
  const fullPercent = "100%";
  if (!canvasEl.style.width) {
    canvasEl.style.width = fullPercent;
  }
  if (!canvasEl.style.height) {
    canvasEl.style.height = fullPercent;
  }
  return canvasEl;
};
var getDomContainer = (id, source) => {
  let domContainer = source ?? document.getElementById(id);
  if (domContainer) {
    return domContainer;
  }
  domContainer = document.createElement("div");
  domContainer.id = id;
  domContainer.dataset[generatedAttribute] = generatedTrue;
  document.body.append(domContainer);
  return domContainer;
};
var Engine = class {
  constructor() {
    this._configs = /* @__PURE__ */ new Map();
    this._domArray = [];
    this._eventDispatcher = new EventDispatcher();
    this._initialized = false;
    this.plugins = [];
    this.colorManagers = /* @__PURE__ */ new Map();
    this.easingFunctions = /* @__PURE__ */ new Map();
    this._initializers = {
      interactors: /* @__PURE__ */ new Map(),
      movers: /* @__PURE__ */ new Map(),
      updaters: /* @__PURE__ */ new Map()
    };
    this.interactors = /* @__PURE__ */ new Map();
    this.movers = /* @__PURE__ */ new Map();
    this.updaters = /* @__PURE__ */ new Map();
    this.presets = /* @__PURE__ */ new Map();
    this.effectDrawers = /* @__PURE__ */ new Map();
    this.shapeDrawers = /* @__PURE__ */ new Map();
    this.pathGenerators = /* @__PURE__ */ new Map();
  }
  get configs() {
    const res = {};
    for (const [name, config] of this._configs) {
      res[name] = config;
    }
    return res;
  }
  get items() {
    return this._domArray;
  }
  get version() {
    return "3.8.1";
  }
  addColorManager(manager, refresh = true) {
    return __async(this, null, function* () {
      this.colorManagers.set(manager.key, manager);
      yield this.refresh(refresh);
    });
  }
  addConfig(config) {
    const key = config.key ?? config.name ?? "default";
    this._configs.set(key, config);
    this._eventDispatcher.dispatchEvent(EventType.configAdded, {
      data: {
        name: key,
        config
      }
    });
  }
  addEasing(name, easing, refresh = true) {
    return __async(this, null, function* () {
      if (this.getEasing(name)) {
        return;
      }
      this.easingFunctions.set(name, easing);
      yield this.refresh(refresh);
    });
  }
  addEffect(effect, drawer, refresh = true) {
    return __async(this, null, function* () {
      executeOnSingleOrMultiple(effect, (type) => {
        if (!this.getEffectDrawer(type)) {
          this.effectDrawers.set(type, drawer);
        }
      });
      yield this.refresh(refresh);
    });
  }
  addEventListener(type, listener) {
    this._eventDispatcher.addEventListener(type, listener);
  }
  addInteractor(name, interactorInitializer, refresh = true) {
    return __async(this, null, function* () {
      this._initializers.interactors.set(name, interactorInitializer);
      yield this.refresh(refresh);
    });
  }
  addMover(name, moverInitializer, refresh = true) {
    return __async(this, null, function* () {
      this._initializers.movers.set(name, moverInitializer);
      yield this.refresh(refresh);
    });
  }
  addParticleUpdater(name, updaterInitializer, refresh = true) {
    return __async(this, null, function* () {
      this._initializers.updaters.set(name, updaterInitializer);
      yield this.refresh(refresh);
    });
  }
  addPathGenerator(name, generator, refresh = true) {
    return __async(this, null, function* () {
      if (!this.getPathGenerator(name)) {
        this.pathGenerators.set(name, generator);
      }
      yield this.refresh(refresh);
    });
  }
  addPlugin(plugin, refresh = true) {
    return __async(this, null, function* () {
      if (!this.getPlugin(plugin.id)) {
        this.plugins.push(plugin);
      }
      yield this.refresh(refresh);
    });
  }
  addPreset(preset, options, override = false, refresh = true) {
    return __async(this, null, function* () {
      if (override || !this.getPreset(preset)) {
        this.presets.set(preset, options);
      }
      yield this.refresh(refresh);
    });
  }
  addShape(drawer, refresh = true) {
    return __async(this, null, function* () {
      for (const validType of drawer.validTypes) {
        if (this.getShapeDrawer(validType)) {
          continue;
        }
        this.shapeDrawers.set(validType, drawer);
      }
      yield this.refresh(refresh);
    });
  }
  checkVersion(pluginVersion) {
    if (this.version === pluginVersion) {
      return;
    }
    throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${pluginVersion}`);
  }
  clearPlugins(container) {
    this.updaters.delete(container);
    this.movers.delete(container);
    this.interactors.delete(container);
  }
  dispatchEvent(type, args) {
    this._eventDispatcher.dispatchEvent(type, args);
  }
  dom() {
    return this.items;
  }
  domItem(index) {
    return this.item(index);
  }
  getAvailablePlugins(container) {
    return __async(this, null, function* () {
      const res = /* @__PURE__ */ new Map();
      for (const plugin of this.plugins) {
        if (plugin.needsPlugin(container.actualOptions)) {
          res.set(plugin.id, yield plugin.getPlugin(container));
        }
      }
      return res;
    });
  }
  getEasing(name) {
    return this.easingFunctions.get(name) ?? ((value) => value);
  }
  getEffectDrawer(type) {
    return this.effectDrawers.get(type);
  }
  getInteractors(container, force = false) {
    return __async(this, null, function* () {
      return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
    });
  }
  getMovers(container, force = false) {
    return __async(this, null, function* () {
      return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
    });
  }
  getPathGenerator(type) {
    return this.pathGenerators.get(type);
  }
  getPlugin(plugin) {
    return this.plugins.find((t) => t.id === plugin);
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  getShapeDrawer(type) {
    return this.shapeDrawers.get(type);
  }
  getSupportedEffects() {
    return this.effectDrawers.keys();
  }
  getSupportedShapes() {
    return this.shapeDrawers.keys();
  }
  getUpdaters(container, force = false) {
    return __async(this, null, function* () {
      return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
    });
  }
  init() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
  }
  item(index) {
    const {
      items
    } = this, item = items[index];
    if (!item || item.destroyed) {
      items.splice(index, removeDeleteCount);
      return;
    }
    return item;
  }
  load(params) {
    return __async(this, null, function* () {
      const id = params.id ?? params.element?.id ?? `tsparticles${Math.floor(getRandom() * loadRandomFactor)}`, {
        index,
        url
      } = params, options = url ? yield getDataFromUrl({
        fallback: params.options,
        url,
        index
      }) : params.options;
      const currentOptions = itemFromSingleOrMultiple(options, index), {
        items
      } = this, oldIndex = items.findIndex((v) => v.id.description === id), newItem = new Container(this, id, currentOptions);
      if (oldIndex >= loadMinIndex) {
        const old = this.item(oldIndex), deleteCount2 = old ? one : none;
        if (old && !old.destroyed) {
          old.destroy(false);
        }
        items.splice(oldIndex, deleteCount2, newItem);
      } else {
        items.push(newItem);
      }
      const domContainer = getDomContainer(id, params.element), canvasEl = getCanvasFromContainer(domContainer);
      newItem.canvas.loadCanvas(canvasEl);
      yield newItem.start();
      return newItem;
    });
  }
  loadOptions(options, sourceOptions) {
    this.plugins.forEach((plugin) => plugin.loadOptions?.(options, sourceOptions));
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    updaters.forEach((updater) => updater.loadOptions?.(options, ...sourceOptions));
  }
  refresh(refresh = true) {
    return __async(this, null, function* () {
      if (!refresh) {
        return;
      }
      yield Promise.all(this.items.map((t) => t.refresh()));
    });
  }
  removeEventListener(type, listener) {
    this._eventDispatcher.removeEventListener(type, listener);
  }
  setOnClickHandler(callback) {
    const {
      items
    } = this;
    if (!items.length) {
      throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
    }
    items.forEach((item) => item.addClickHandler(callback));
  }
};

// ../../node_modules/@tsparticles/engine/browser/init.js
function init() {
  const engine = new Engine();
  engine.init();
  return engine;
}

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/ExternalInteractorBase.js
var ExternalInteractorBase = class {
  constructor(container) {
    this.type = InteractorType.external;
    this.container = container;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Core/Utils/ParticlesInteractorBase.js
var ParticlesInteractorBase = class {
  constructor(container) {
    this.type = InteractorType.particles;
    this.container = container;
  }
};

// ../../node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js
var RotateDirection;
(function(RotateDirection2) {
  RotateDirection2["clockwise"] = "clockwise";
  RotateDirection2["counterClockwise"] = "counter-clockwise";
  RotateDirection2["random"] = "random";
})(RotateDirection || (RotateDirection = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js
var GradientType;
(function(GradientType2) {
  GradientType2["linear"] = "linear";
  GradientType2["radial"] = "radial";
  GradientType2["random"] = "random";
})(GradientType || (GradientType = {}));

// ../../node_modules/@tsparticles/engine/browser/Enums/Types/EasingType.js
var EasingType;
(function(EasingType2) {
  EasingType2["easeInBack"] = "ease-in-back";
  EasingType2["easeInCirc"] = "ease-in-circ";
  EasingType2["easeInCubic"] = "ease-in-cubic";
  EasingType2["easeInLinear"] = "ease-in-linear";
  EasingType2["easeInQuad"] = "ease-in-quad";
  EasingType2["easeInQuart"] = "ease-in-quart";
  EasingType2["easeInQuint"] = "ease-in-quint";
  EasingType2["easeInExpo"] = "ease-in-expo";
  EasingType2["easeInSine"] = "ease-in-sine";
  EasingType2["easeOutBack"] = "ease-out-back";
  EasingType2["easeOutCirc"] = "ease-out-circ";
  EasingType2["easeOutCubic"] = "ease-out-cubic";
  EasingType2["easeOutLinear"] = "ease-out-linear";
  EasingType2["easeOutQuad"] = "ease-out-quad";
  EasingType2["easeOutQuart"] = "ease-out-quart";
  EasingType2["easeOutQuint"] = "ease-out-quint";
  EasingType2["easeOutExpo"] = "ease-out-expo";
  EasingType2["easeOutSine"] = "ease-out-sine";
  EasingType2["easeInOutBack"] = "ease-in-out-back";
  EasingType2["easeInOutCirc"] = "ease-in-out-circ";
  EasingType2["easeInOutCubic"] = "ease-in-out-cubic";
  EasingType2["easeInOutLinear"] = "ease-in-out-linear";
  EasingType2["easeInOutQuad"] = "ease-in-out-quad";
  EasingType2["easeInOutQuart"] = "ease-in-out-quart";
  EasingType2["easeInOutQuint"] = "ease-in-out-quint";
  EasingType2["easeInOutExpo"] = "ease-in-out-expo";
  EasingType2["easeInOutSine"] = "ease-in-out-sine";
})(EasingType || (EasingType = {}));

// ../../node_modules/@tsparticles/engine/browser/index.js
var tsParticles = init();
if (!isSsr()) {
  window.tsParticles = tsParticles;
}

export {
  generatedAttribute,
  mouseDownEvent,
  mouseUpEvent,
  mouseLeaveEvent,
  mouseOutEvent,
  mouseMoveEvent,
  touchStartEvent,
  touchEndEvent,
  touchMoveEvent,
  touchCancelEvent,
  resizeEvent,
  visibilityChangeEvent,
  errorPrefix,
  percentDenominator,
  half,
  millisecondsToSeconds,
  originPoint,
  defaultTransform,
  randomColorValue,
  midColorValue,
  double,
  doublePI,
  defaultFps,
  defaultAlpha,
  generatedTrue,
  generatedFalse,
  canvasTag,
  defaultRetryCount,
  squareExp,
  qTreeCapacity,
  defaultRemoveQuantity,
  defaultRatio,
  defaultReduceFactor,
  subdivideCount,
  inverseFactorNumerator,
  rgbMax,
  hMax,
  sMax,
  lMax,
  hMin,
  sMin,
  hPhase,
  empty,
  quarter,
  threeQuarter,
  minVelocity,
  defaultTransformValue,
  minimumSize,
  minimumLength,
  zIndexFactorOffset,
  defaultOpacity,
  clickRadius,
  touchEndLengthOffset,
  minCoordinate,
  removeDeleteCount,
  removeMinIndex,
  defaultFpsLimit,
  minFpsLimit,
  canvasFirstIndex,
  loadRandomFactor,
  loadMinIndex,
  one,
  none,
  decayOffset,
  tryCountIncrement,
  minRetries,
  rollFactor,
  minZ,
  defaultRadius,
  posOffset,
  sizeFactor,
  minLimit,
  countOffset,
  minCount,
  minIndex,
  manualCount,
  lengthOffset,
  defaultDensityFactor,
  deleteCount,
  touchDelay,
  manualDefaultPosition,
  defaultAngle,
  identity,
  minStrokeWidth,
  lFactor,
  lMin,
  rgbFactor,
  triple,
  sextuple,
  sNormalizedOffset,
  phaseNumerator,
  defaultRgbMin,
  defaultVelocity,
  defaultLoops,
  defaultTime,
  MoveDirection,
  isBoolean,
  isString,
  isNumber,
  isFunction,
  isObject,
  isArray,
  isNull,
  Vector3d,
  Vector,
  setRandom,
  getRandom,
  setAnimationFunctions,
  animate,
  cancelAnimation,
  clamp,
  mix,
  randomInRange,
  getRangeValue,
  getRangeMin,
  getRangeMax,
  setRangeValue,
  getDistances,
  getDistance,
  degToRad,
  getParticleDirectionAngle,
  getParticleBaseVelocity,
  collisionVelocity,
  calcPositionFromSize,
  calcPositionOrRandomFromSize,
  calcPositionOrRandomFromSizeRanged,
  calcExactPositionOrRandomFromSize,
  calcExactPositionOrRandomFromSizeRanged,
  parseAlpha,
  AnimationMode,
  AnimationStatus,
  DestroyType,
  OutModeDirection,
  PixelMode,
  StartValueType,
  setLogger,
  getLogger,
  isSsr,
  hasMatchMedia,
  safeMatchMedia,
  safeIntersectionObserver,
  safeMutationObserver,
  isInArray,
  loadFont,
  arrayRandomIndex,
  itemFromArray,
  isPointInside,
  areBoundsInside,
  calculateBounds,
  deepExtend,
  isDivModeEnabled,
  divModeExecute,
  singleDivModeExecute,
  divMode,
  circleBounceDataFromParticle,
  circleBounce,
  rectBounce,
  executeOnSingleOrMultiple,
  itemFromSingleOrMultiple,
  findItemFromSingleOrMultiple,
  initParticleNumericAnimationValue,
  getPosition,
  getSize,
  updateAnimation,
  cloneStyle,
  getFullScreenStyle,
  AlterType,
  rangeColorToRgb,
  colorToRgb,
  colorToHsl,
  rangeColorToHsl,
  rgbToHsl,
  stringToAlpha,
  stringToRgb,
  hslToRgb,
  hslaToRgba,
  getRandomRgbColor,
  getStyleFromRgb,
  getStyleFromHsl,
  colorMix,
  getLinkColor,
  getLinkRandomColor,
  getHslFromAnimation,
  getHslAnimationFromHsl,
  updateColorValue,
  updateColor,
  drawLine,
  paintBase,
  paintImage,
  clear,
  drawParticle,
  drawEffect,
  drawShape,
  drawShapeAfterDraw,
  drawPlugin,
  drawParticlePlugin,
  alterHsl,
  InteractivityDetect,
  EventType,
  OptionsColor,
  Background,
  BackgroundMaskCover,
  BackgroundMask,
  FullScreen,
  ClickEvent,
  DivType,
  DivEvent,
  Parallax,
  HoverEvent,
  ResizeEvent,
  Events,
  Modes,
  Interactivity,
  ManualParticle,
  ResponsiveMode,
  Responsive,
  ThemeMode,
  ThemeDefault,
  Theme,
  AnimationOptions,
  RangedAnimationOptions,
  ColorAnimation,
  HslAnimation,
  AnimatableColor,
  CollisionMode,
  CollisionsAbsorb,
  CollisionsOverlap,
  ValueWithRandom,
  AnimationValueWithRandom,
  RangedAnimationValueWithRandom,
  ParticlesBounceFactor,
  ParticlesBounce,
  Collisions,
  MoveAngle,
  MoveAttract,
  MoveCenter,
  MoveGravity,
  MovePath,
  MoveTrail,
  OutMode,
  OutModes,
  Spin,
  Move,
  OpacityAnimation,
  Opacity,
  ParticlesDensity,
  LimitMode,
  ParticlesNumberLimit,
  ParticlesNumber,
  Shadow,
  Shape,
  SizeAnimation,
  Size,
  Stroke,
  ZIndex,
  ParticlesOptions,
  loadOptions,
  loadParticlesOptions,
  Options,
  InteractorType,
  ParticleOutType,
  Point,
  BaseRange,
  Circle,
  Rectangle,
  ExternalInteractorBase,
  ParticlesInteractorBase,
  RotateDirection,
  GradientType,
  EasingType,
  tsParticles
};
//# sourceMappingURL=chunk-7RVJEFRY.js.map
