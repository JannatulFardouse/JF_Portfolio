import {
  OutMode,
  OutModeDirection,
  ParticleOutType,
  RotateDirection,
  Vector,
  calculateBounds,
  clamp,
  degToRad,
  getDistance,
  getDistances,
  getHslAnimationFromHsl,
  getRandom,
  getRangeMax,
  getRangeValue,
  hslToRgb,
  hslaToRgba,
  initParticleNumericAnimationValue,
  isObject,
  isPointInside,
  parseAlpha,
  percentDenominator,
  randomInRange,
  rangeColorToHsl,
  updateAnimation,
  updateColor
} from "./chunk-7RVJEFRY.js";
import {
  __async
} from "./chunk-3OV72XIM.js";

// ../../node_modules/@tsparticles/move-base/browser/Utils.js
var half = 0.5;
var double = 2;
var minVelocity = 0;
var identity = 1;
var moveSpeedFactor = 60;
var minSpinRadius = 0;
var spinFactor = 0.01;
var doublePI = Math.PI * double;
function applyDistance(particle) {
  const initialPosition = particle.initialPosition, {
    dx,
    dy
  } = getDistances(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), {
    maxDistance
  } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
  if (!hDistance && !vDistance) {
    return;
  }
  const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
  if ((hasHDistance || hasVDistance) && !particle.misplaced) {
    particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
    if (hDistance) {
      particle.velocity.x = particle.velocity.y * half - particle.velocity.x;
    }
    if (vDistance) {
      particle.velocity.y = particle.velocity.x * half - particle.velocity.y;
    }
  } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
    particle.misplaced = false;
  } else if (particle.misplaced) {
    const pos = particle.position, vel = particle.velocity;
    if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity || pos.x > initialPosition.x && vel.x > minVelocity)) {
      vel.x *= -getRandom();
    }
    if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity || pos.y > initialPosition.y && vel.y > minVelocity)) {
      vel.y *= -getRandom();
    }
  }
}
function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
  applyPath(particle, delta);
  const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -identity : identity;
  if (moveDrift && moveSpeed) {
    particle.velocity.x += moveDrift * delta.factor / (moveSpeedFactor * moveSpeed);
  }
  if (gravityOptions?.enable && moveSpeed) {
    particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (moveSpeedFactor * moveSpeed);
  }
  const decay = particle.moveDecay;
  particle.velocity.multTo(decay);
  const velocity = particle.velocity.mult(moveSpeed);
  if (gravityOptions?.enable && maxSpeed > minVelocity && (!gravityOptions.inverse && velocity.y >= minVelocity && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity && velocity.y <= -maxSpeed)) {
    velocity.y = gravityFactor * maxSpeed;
    if (moveSpeed) {
      particle.velocity.y = velocity.y / moveSpeed;
    }
  }
  const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity - particle.zIndexFactor) ** zIndexOptions.velocityRate;
  velocity.multTo(zVelocityFactor);
  const {
    position
  } = particle;
  position.addTo(velocity);
  if (moveOptions.vibrate) {
    position.x += Math.sin(position.x * Math.cos(position.y));
    position.y += Math.cos(position.y * Math.sin(position.x));
  }
}
function spin(particle, moveSpeed) {
  const container = particle.container;
  if (!particle.spin) {
    return;
  }
  const spinClockwise = particle.spin.direction === RotateDirection.clockwise, updateFunc = {
    x: spinClockwise ? Math.cos : Math.sin,
    y: spinClockwise ? Math.sin : Math.cos
  };
  particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
  particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
  particle.spin.radius += particle.spin.acceleration;
  const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height), halfMaxSize = maxCanvasSize * half;
  if (particle.spin.radius > halfMaxSize) {
    particle.spin.radius = halfMaxSize;
    particle.spin.acceleration *= -identity;
  } else if (particle.spin.radius < minSpinRadius) {
    particle.spin.radius = minSpinRadius;
    particle.spin.acceleration *= -identity;
  }
  particle.spin.angle += moveSpeed * spinFactor * (identity - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
  const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
  if (!pathEnabled) {
    return;
  }
  if (particle.lastPathTime <= particle.pathDelay) {
    particle.lastPathTime += delta.value;
    return;
  }
  const path = particle.pathGenerator?.generate(particle, delta);
  if (path) {
    particle.velocity.addTo(path);
  }
  if (pathOptions.clamp) {
    particle.velocity.x = clamp(particle.velocity.x, -identity, identity);
    particle.velocity.y = clamp(particle.velocity.y, -identity, identity);
  }
  particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
  return particle.slow.inRange ? particle.slow.factor : identity;
}
function initSpin(particle) {
  const container = particle.container, options = particle.options, spinOptions = options.move.spin;
  if (!spinOptions.enable) {
    return;
  }
  const spinPos = spinOptions.position ?? {
    x: 50,
    y: 50
  }, spinFactor2 = 0.01, spinCenter = {
    x: spinPos.x * spinFactor2 * container.canvas.size.width,
    y: spinPos.y * spinFactor2 * container.canvas.size.height
  }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
  particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
  particle.spin = {
    center: spinCenter,
    direction: particle.velocity.x >= minVelocity ? RotateDirection.clockwise : RotateDirection.counterClockwise,
    angle: getRandom() * doublePI,
    radius: distance,
    acceleration: particle.retina.spinAcceleration
  };
}

// ../../node_modules/@tsparticles/move-base/browser/BaseMover.js
var diffFactor = 2;
var defaultSizeFactor = 1;
var defaultDeltaFactor = 1;
var BaseMover = class {
  init(particle) {
    const options = particle.options, gravityOptions = options.move.gravity;
    particle.gravity = {
      enable: gravityOptions.enable,
      acceleration: getRangeValue(gravityOptions.acceleration),
      inverse: gravityOptions.inverse
    };
    initSpin(particle);
  }
  isEnabled(particle) {
    return !particle.destroyed && particle.options.move.enable;
  }
  move(particle, delta) {
    const particleOptions = particle.options, moveOptions = particleOptions.move;
    if (!moveOptions.enable) {
      return;
    }
    const container = particle.container, pxRatio = container.retina.pixelRatio;
    particle.retina.moveSpeed ??= getRangeValue(moveOptions.speed) * pxRatio;
    particle.retina.moveDrift ??= getRangeValue(particle.options.move.drift) * pxRatio;
    const slowFactor = getProximitySpeedFactor(particle), baseSpeed = particle.retina.moveSpeed * container.retina.reduceFactor, moveDrift = particle.retina.moveDrift, maxSize = getRangeMax(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, deltaFactor = delta.factor || defaultDeltaFactor, moveSpeed = baseSpeed * sizeFactor * slowFactor * deltaFactor / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
    if (moveOptions.spin.enable) {
      spin(particle, moveSpeed);
    } else {
      move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
    }
    applyDistance(particle);
  }
};

// ../../node_modules/@tsparticles/move-base/browser/index.js
function loadBaseMover(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addMover("base", () => {
      return Promise.resolve(new BaseMover());
    }, refresh);
  });
}

// ../../node_modules/@tsparticles/shape-circle/browser/Utils.js
var double2 = 2;
var doublePI2 = Math.PI * double2;
var minAngle = 0;
var origin = {
  x: 0,
  y: 0
};
function drawCircle(data) {
  const {
    context,
    particle,
    radius
  } = data;
  if (!particle.circleRange) {
    particle.circleRange = {
      min: minAngle,
      max: doublePI2
    };
  }
  const circleRange = particle.circleRange;
  context.arc(origin.x, origin.y, radius, circleRange.min, circleRange.max, false);
}

// ../../node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
var sides = 12;
var maxAngle = 360;
var minAngle2 = 0;
var CircleDrawer = class {
  constructor() {
    this.validTypes = ["circle"];
  }
  draw(data) {
    drawCircle(data);
  }
  getSidesCount() {
    return sides;
  }
  particleInit(container, particle) {
    const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
      max: maxAngle,
      min: minAngle2
    };
    particle.circleRange = !isObject(angle) ? {
      min: minAngle2,
      max: degToRad(angle)
    } : {
      min: degToRad(angle.min),
      max: degToRad(angle.max)
    };
  }
};

// ../../node_modules/@tsparticles/shape-circle/browser/index.js
function loadCircleShape(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addShape(new CircleDrawer(), refresh);
  });
}

// ../../node_modules/@tsparticles/updater-color/browser/ColorUpdater.js
var ColorUpdater = class {
  constructor(container, engine) {
    this._container = container;
    this._engine = engine;
  }
  init(particle) {
    const hslColor = rangeColorToHsl(this._engine, particle.options.color, particle.id, particle.options.reduceDuplicates);
    if (hslColor) {
      particle.color = getHslAnimationFromHsl(hslColor, particle.options.color.animation, this._container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    const {
      h: hAnimation,
      s: sAnimation,
      l: lAnimation
    } = particle.options.color.animation, {
      color
    } = particle;
    return !particle.destroyed && !particle.spawning && (color?.h.value !== void 0 && hAnimation.enable || color?.s.value !== void 0 && sAnimation.enable || color?.l.value !== void 0 && lAnimation.enable);
  }
  update(particle, delta) {
    updateColor(particle.color, delta);
  }
};

// ../../node_modules/@tsparticles/updater-color/browser/index.js
function loadColorUpdater(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addParticleUpdater("color", (container) => {
      return Promise.resolve(new ColorUpdater(container, engine));
    }, refresh);
  });
}

// ../../node_modules/@tsparticles/plugin-hex-color/browser/HexColorManager.js
var RgbIndexes;
(function(RgbIndexes3) {
  RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
  RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
  RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
  RgbIndexes3[RgbIndexes3["a"] = 4] = "a";
})(RgbIndexes || (RgbIndexes = {}));
var shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
var hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
var hexRadix = 16;
var defaultAlpha = 1;
var alphaFactor = 255;
var HexColorManager = class {
  constructor() {
    this.key = "hex";
    this.stringPrefix = "#";
  }
  handleColor(color) {
    return this._parseString(color.value);
  }
  handleRangeColor(color) {
    return this._parseString(color.value);
  }
  parseString(input) {
    return this._parseString(input);
  }
  _parseString(hexColor) {
    if (typeof hexColor !== "string") {
      return;
    }
    if (!hexColor?.startsWith(this.stringPrefix)) {
      return;
    }
    const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
    }), result = hexRegex.exec(hexFixed);
    return result ? {
      a: result[RgbIndexes.a] !== void 0 ? parseInt(result[RgbIndexes.a], hexRadix) / alphaFactor : defaultAlpha,
      b: parseInt(result[RgbIndexes.b], hexRadix),
      g: parseInt(result[RgbIndexes.g], hexRadix),
      r: parseInt(result[RgbIndexes.r], hexRadix)
    } : void 0;
  }
};

// ../../node_modules/@tsparticles/plugin-hex-color/browser/index.js
function loadHexColorPlugin(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addColorManager(new HexColorManager(), refresh);
  });
}

// ../../node_modules/@tsparticles/plugin-hsl-color/browser/HslColorManager.js
var HslIndexes;
(function(HslIndexes2) {
  HslIndexes2[HslIndexes2["h"] = 1] = "h";
  HslIndexes2[HslIndexes2["s"] = 2] = "s";
  HslIndexes2[HslIndexes2["l"] = 3] = "l";
  HslIndexes2[HslIndexes2["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
var HslColorManager = class {
  constructor() {
    this.key = "hsl";
    this.stringPrefix = "hsl";
  }
  handleColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
      return hslToRgb(hslColor);
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.l !== void 0) {
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
  }
  parseString(input) {
    if (!input.startsWith("hsl")) {
      return;
    }
    const regex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha2 = 1, radix = 10;
    return result ? hslaToRgba({
      a: result.length > minLength ? parseAlpha(result[HslIndexes.a]) : defaultAlpha2,
      h: parseInt(result[HslIndexes.h], radix),
      l: parseInt(result[HslIndexes.l], radix),
      s: parseInt(result[HslIndexes.s], radix)
    }) : void 0;
  }
};

// ../../node_modules/@tsparticles/plugin-hsl-color/browser/index.js
function loadHslColorPlugin(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addColorManager(new HslColorManager(), refresh);
  });
}

// ../../node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
var OpacityUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const opacityOptions = particle.options.opacity, pxRatio = 1;
    particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
    const opacityAnimation = opacityOptions.animation;
    if (opacityAnimation.enable) {
      particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / percentDenominator * this.container.retina.reduceFactor;
      if (!opacityAnimation.sync) {
        particle.opacity.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    const none = 0;
    return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
  }
  reset(particle) {
    if (particle.opacity) {
      particle.opacity.time = 0;
      particle.opacity.loops = 0;
    }
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.opacity) {
      return;
    }
    updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
  }
};

// ../../node_modules/@tsparticles/updater-opacity/browser/index.js
function loadOpacityUpdater(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addParticleUpdater("opacity", (container) => {
      return Promise.resolve(new OpacityUpdater(container));
    }, refresh);
  });
}

// ../../node_modules/@tsparticles/updater-out-modes/browser/Utils.js
var minVelocity2 = 0;
var boundsMin = 0;
function bounceHorizontal(data) {
  if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.left && data.direction !== OutModeDirection.right) {
    return;
  }
  if (data.bounds.right < boundsMin && data.direction === OutModeDirection.left) {
    data.particle.position.x = data.size + data.offset.x;
  } else if (data.bounds.left > data.canvasSize.width && data.direction === OutModeDirection.right) {
    data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
  }
  const velocity = data.particle.velocity.x;
  let bounced = false;
  if (data.direction === OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > minVelocity2 || data.direction === OutModeDirection.left && data.bounds.left <= boundsMin && velocity < minVelocity2) {
    const newVelocity = getRangeValue(data.particle.options.bounce.horizontal.value);
    data.particle.velocity.x *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.x + data.size;
  if (data.bounds.right >= data.canvasSize.width && data.direction === OutModeDirection.right) {
    data.particle.position.x = data.canvasSize.width - minPos;
  } else if (data.bounds.left <= boundsMin && data.direction === OutModeDirection.left) {
    data.particle.position.x = minPos;
  }
  if (data.outMode === OutMode.split) {
    data.particle.destroy();
  }
}
function bounceVertical(data) {
  if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.bottom && data.direction !== OutModeDirection.top) {
    return;
  }
  if (data.bounds.bottom < boundsMin && data.direction === OutModeDirection.top) {
    data.particle.position.y = data.size + data.offset.y;
  } else if (data.bounds.top > data.canvasSize.height && data.direction === OutModeDirection.bottom) {
    data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
  }
  const velocity = data.particle.velocity.y;
  let bounced = false;
  if (data.direction === OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > minVelocity2 || data.direction === OutModeDirection.top && data.bounds.top <= boundsMin && velocity < minVelocity2) {
    const newVelocity = getRangeValue(data.particle.options.bounce.vertical.value);
    data.particle.velocity.y *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.y + data.size;
  if (data.bounds.bottom >= data.canvasSize.height && data.direction === OutModeDirection.bottom) {
    data.particle.position.y = data.canvasSize.height - minPos;
  } else if (data.bounds.top <= boundsMin && data.direction === OutModeDirection.top) {
    data.particle.position.y = minPos;
  }
  if (data.outMode === OutMode.split) {
    data.particle.destroy();
  }
}

// ../../node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
var BounceOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.bounce, OutMode.split];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    let handled = false;
    for (const plugin of container.plugins.values()) {
      if (plugin.particleBounce !== void 0) {
        handled = plugin.particleBounce(particle, delta, direction);
      }
      if (handled) {
        break;
      }
    }
    if (handled) {
      return;
    }
    const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size;
    bounceHorizontal({
      particle,
      outMode,
      direction,
      bounds,
      canvasSize,
      offset,
      size
    });
    bounceVertical({
      particle,
      outMode,
      direction,
      bounds,
      canvasSize,
      offset,
      size
    });
  }
};

// ../../node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js
var minVelocity3 = 0;
var DestroyOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.destroy];
  }
  update(particle, direction, _delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case ParticleOutType.normal:
      case ParticleOutType.outside:
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        break;
      case ParticleOutType.inside: {
        const {
          dx,
          dy
        } = getDistances(particle.position, particle.moveCenter), {
          x: vx,
          y: vy
        } = particle.velocity;
        if (vx < minVelocity3 && dx > particle.moveCenter.radius || vy < minVelocity3 && dy > particle.moveCenter.radius || vx >= minVelocity3 && dx < -particle.moveCenter.radius || vy >= minVelocity3 && dy < -particle.moveCenter.radius) {
          return;
        }
        break;
      }
    }
    container.particles.remove(particle, particle.group, true);
  }
};

// ../../node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js
var minVelocity4 = 0;
var NoneOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.none];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
      return;
    }
    const gravityOptions = particle.options.move.gravity, container = this.container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
    if (!gravityOptions.enable) {
      if (particle.velocity.y > minVelocity4 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity4 && particle.position.y >= -pRadius || particle.velocity.x > minVelocity4 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity4 && particle.position.x >= -pRadius) {
        return;
      }
      if (!isPointInside(particle.position, container.canvas.size, Vector.origin, pRadius, direction)) {
        container.particles.remove(particle);
      }
    } else {
      const position = particle.position;
      if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) {
        container.particles.remove(particle);
      }
    }
  }
};

// ../../node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js
var minVelocity5 = 0;
var minDistance = 0;
var OutOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.out];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case ParticleOutType.inside: {
        const {
          x: vx,
          y: vy
        } = particle.velocity;
        const circVec = Vector.origin;
        circVec.length = particle.moveCenter.radius;
        circVec.angle = particle.velocity.angle + Math.PI;
        circVec.addTo(Vector.create(particle.moveCenter));
        const {
          dx,
          dy
        } = getDistances(particle.position, circVec);
        if (vx <= minVelocity5 && dx >= minDistance || vy <= minVelocity5 && dy >= minDistance || vx >= minVelocity5 && dx <= minDistance || vy >= minVelocity5 && dy <= minDistance) {
          return;
        }
        particle.position.x = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.width
        }));
        particle.position.y = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.height
        }));
        const {
          dx: newDx,
          dy: newDy
        } = getDistances(particle.position, particle.moveCenter);
        particle.direction = Math.atan2(-newDy, -newDx);
        particle.velocity.angle = particle.direction;
        break;
      }
      default: {
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        switch (particle.outType) {
          case ParticleOutType.outside: {
            particle.position.x = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.x;
            particle.position.y = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.y;
            const {
              dx,
              dy
            } = getDistances(particle.position, particle.moveCenter);
            if (particle.moveCenter.radius) {
              particle.direction = Math.atan2(dy, dx);
              particle.velocity.angle = particle.direction;
            }
            break;
          }
          case ParticleOutType.normal: {
            const warp = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
              bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
              left: -particle.getRadius() - particle.offset.x,
              right: canvasSize.width + particle.getRadius() + particle.offset.x,
              top: -particle.getRadius() - particle.offset.y
            }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
            if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
              particle.position.x = newPos.left;
              particle.initialPosition.x = particle.position.x;
              if (!warp) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
              particle.position.x = newPos.right;
              particle.initialPosition.x = particle.position.x;
              if (!warp) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            }
            if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
              if (!warp) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.top;
              particle.initialPosition.y = particle.position.y;
            } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
              if (!warp) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.bottom;
              particle.initialPosition.y = particle.position.y;
            }
            break;
          }
        }
        break;
      }
    }
  }
};

// ../../node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
var checkOutMode = (outModes, outMode) => {
  return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
};
var OutOfCanvasUpdater = class {
  constructor(container) {
    this._addUpdaterIfMissing = (particle, outMode, getUpdater) => {
      const outModes = particle.options.move.outModes;
      if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) {
        this.updaters.set(outMode, getUpdater(this.container));
      }
    };
    this._updateOutMode = (particle, delta, outMode, direction) => {
      for (const updater of this.updaters.values()) {
        updater.update(particle, direction, delta, outMode);
      }
    };
    this.container = container;
    this.updaters = /* @__PURE__ */ new Map();
  }
  init(particle) {
    this._addUpdaterIfMissing(particle, OutMode.bounce, (container) => new BounceOutMode(container));
    this._addUpdaterIfMissing(particle, OutMode.out, (container) => new OutOutMode(container));
    this._addUpdaterIfMissing(particle, OutMode.destroy, (container) => new DestroyOutMode(container));
    this._addUpdaterIfMissing(particle, OutMode.none, (container) => new NoneOutMode(container));
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning;
  }
  update(particle, delta) {
    const outModes = particle.options.move.outModes;
    this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
    this._updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
    this._updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
    this._updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
  }
};

// ../../node_modules/@tsparticles/updater-out-modes/browser/index.js
function loadOutModesUpdater(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addParticleUpdater("outModes", (container) => {
      return Promise.resolve(new OutOfCanvasUpdater(container));
    }, refresh);
  });
}

// ../../node_modules/@tsparticles/plugin-rgb-color/browser/RgbColorManager.js
var RgbIndexes2;
(function(RgbIndexes3) {
  RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
  RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
  RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
  RgbIndexes3[RgbIndexes3["a"] = 5] = "a";
})(RgbIndexes2 || (RgbIndexes2 = {}));
var RgbColorManager = class {
  constructor() {
    this.key = "rgb";
    this.stringPrefix = "rgb";
  }
  handleColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return rgbColor;
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
  }
  parseString(input) {
    if (!input.startsWith(this.stringPrefix)) {
      return;
    }
    const regex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha2 = 1;
    return result ? {
      a: result.length > minLength ? parseAlpha(result[RgbIndexes2.a]) : defaultAlpha2,
      b: parseInt(result[RgbIndexes2.b], radix),
      g: parseInt(result[RgbIndexes2.g], radix),
      r: parseInt(result[RgbIndexes2.r], radix)
    } : void 0;
  }
};

// ../../node_modules/@tsparticles/plugin-rgb-color/browser/index.js
function loadRgbColorPlugin(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addColorManager(new RgbColorManager(), refresh);
  });
}

// ../../node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
var minLoops = 0;
var SizeUpdater = class {
  init(particle) {
    const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
    if (sizeAnimation.enable) {
      particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / percentDenominator * container.retina.reduceFactor;
      if (!sizeAnimation.sync) {
        particle.size.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
  }
  reset(particle) {
    particle.size.loops = minLoops;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
  }
};

// ../../node_modules/@tsparticles/updater-size/browser/index.js
function loadSizeUpdater(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield engine.addParticleUpdater("size", () => {
      return Promise.resolve(new SizeUpdater());
    }, refresh);
  });
}

// ../../node_modules/@tsparticles/basic/browser/index.js
function loadBasic(engine, refresh = true) {
  return __async(this, null, function* () {
    engine.checkVersion("3.8.1");
    yield loadHexColorPlugin(engine, false);
    yield loadHslColorPlugin(engine, false);
    yield loadRgbColorPlugin(engine, false);
    yield loadBaseMover(engine, false);
    yield loadCircleShape(engine, false);
    yield loadColorUpdater(engine, false);
    yield loadOpacityUpdater(engine, false);
    yield loadOutModesUpdater(engine, false);
    yield loadSizeUpdater(engine, false);
    yield engine.refresh(refresh);
  });
}
export {
  loadBasic
};
//# sourceMappingURL=@tsparticles_basic.js.map
