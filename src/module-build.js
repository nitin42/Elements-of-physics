import React__default, { createElement, PureComponent } from 'react'
import p5 from 'p5/lib/p5.min'
import Modal from 'react-responsive-modal'
import ReactTooltip from 'react-tooltip'
import { css, injectGlobal } from 'emotion'
import { BlockPicker } from 'react-color'
import { Link } from '@reach/router'
import hexToRgba from 'hex-rgba'

var _React$createContext = React__default.createContext(),
  Provider = _React$createContext.Provider,
  Consumer = _React$createContext.Consumer

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }

  return obj
}

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }

    return target
  }

var inherits = function(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var objectWithoutProperties = function(obj, keys) {
  var target = {}

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }

  return target
}

var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }

  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

var toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i]

    return arr2
  } else {
    return Array.from(arr)
  }
}

// Copied and edited from https://github.com/chrisshiplet/react-delay (LAZINESS 😅)
var Delay = (function(_React$Component) {
  inherits(Delay, _React$Component)

  function Delay() {
    var _ref

    var _temp, _this, _ret

    classCallCheck(this, Delay)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref = Delay.__proto__ || Object.getPrototypeOf(Delay)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        waiting: true
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    )
  }

  createClass(Delay, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this

        this.timer = setTimeout(function() {
          _this2.setState({
            waiting: false
          })
        }, this.props.wait)
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.timer)
      }
    },
    {
      key: 'render',
      value: function render() {
        return this.props.render(this.state.waiting)
      }
    }
  ])
  return Delay
})(React__default.Component)
Delay.defaultProps = {
  wait: 250
}

var loaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '100px'
}

var Loading = function Loading() {
  return React__default.createElement(
    'div',
    { style: loaderStyles },
    React__default.createElement(
      'div',
      { className: 'loading' },
      React__default.createElement(
        'span',
        { role: 'img', 'aria-label': 'loading' },
        '\uD83C\uDF00'
      )
    )
  )
}

// Receives p5 instance and a callback to draw the stuff on canvas
var p5Renderer = function p5Renderer(instance, callback, props) {
  callback(instance, props)
}

var hoc = function hoc(drawStuffFn, propsGetter) {
  return (function(_React$PureComponent) {
    inherits(_class2, _React$PureComponent)

    function _class2() {
      var _ref

      var _temp, _this, _ret

      classCallCheck(this, _class2)

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return (
        (_ret = ((_temp = ((_this = possibleConstructorReturn(
          this,
          (_ref =
            _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(
            _ref,
            [this].concat(args)
          )
        )),
        _this)),
        (_this.renderer = function(p) {
          return p5Renderer(p, drawStuffFn, _this.props)
        }),
        (_this.getCanvas = function() {
          return new p5(function(p) {
            _this.instance = p

            _this.renderer(p)

            // Do some extra stuff here with processing
            _this.props.extras && _this.props.extras(p)
          }, _this.wrapper)
        }),
        _temp)),
        possibleConstructorReturn(_this, _ret)
      )
    }

    createClass(_class2, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.getCanvas()
        }
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          this.instance.remove()

          this.getCanvas()
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          // Remove the canvas. This ensures that we don't cause a memory leak when a state update is scheduled in one of the props callback
          this.instance && this.instance.remove()
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this

          return createElement(
            'div',
            _extends(
              {
                ref: function ref(wrapper) {
                  return (_this2.wrapper = wrapper)
                }
              },
              propsGetter(this.props)
            )
          )
        }
      }
    ])
    return _class2
  })(PureComponent)
}

// Default value for number of balls
var DEFAULT_BALLS = 100

// Default height of the canvas

var DEFAULT_HEIGHT = 640

// Default width of the canvas
var DEFAULT_WIDTH = 1024

var getCanvasSize = function getCanvasSize(instance, props) {
  return instance.createCanvas(
    props.width || DEFAULT_WIDTH,
    props.height || DEFAULT_HEIGHT
  )
}

// Max velocity of the ball
var DEFAULT_MAX_VELOCITY = 10

// Stroke weight for all the balls
var DEFAULT_STROKE_WEIGHT = 1.2

var DEFAULT_BALL_COLOR = 'mistyrose'

var DEFAULT_BALL_WIDTH = 30

var DEFAULT_BALL_HEIGHT = 30

/**
 * Acceleration and vectors
 *
 * Acceleration is defined as change of velocity and change of location is defined as velocity, hence we can draw objects on a canvas on different locations based on velocity and acc.
 * Vector have a magnitude and direction unlike scalar quantity.
 */

var Vector = (function() {
  function Vector(x, y) {
    classCallCheck(this, Vector)

    this.x = x
    this.y = y
  }

  // Static methods are useful for returning new vectors

  createClass(
    Vector,
    [
      {
        key: 'add',

        // Add two vectors
        value: function add(pVect) {
          this.x = this.x + pVect.x
          this.y = this.y + pVect.y
        }

        // Subtract two vectors
      },
      {
        key: 'sub',
        value: function sub(pVect) {
          this.x = this.x - pVect.x
          this.y = this.y - pVect.y
        }

        // Scale a vector (normalized) by n units
      },
      {
        key: 'mult',
        value: function mult(n) {
          this.x = this.x * n
          this.y = this.y * n
        }

        // Reduce a vector (normalized) by n units
      },
      {
        key: 'div',
        value: function div(n) {
          this.x = this.x / n
          this.y = this.y / n
        }

        // Calculating the magnitude of a vector
      },
      {
        key: 'mag',
        value: function mag() {
          return Math.sqrt(this.x * this.x + this.y * this.y)
        }

        // Unit vector
      },
      {
        key: 'normalize',
        value: function normalize() {
          var m = this.mag()

          if (m !== 0) {
            this.div(m)
          }
        }

        // Limit the magnitude of a vector by m units
      },
      {
        key: 'limit',
        value: function limit(m) {
          if (this.mag() > m) {
            this.normalize()
            this.mult(m)
          }
        }
      }
    ],
    [
      {
        key: 'sub',
        value: function sub(v1, v2) {
          return new Vector(v1.x - v2.x, v1.y - v2.y)
        }
      },
      {
        key: 'add',
        value: function add(v1, v2) {
          return new Vector(v1.x + v2.x, v1.y + v2.y)
        }
      },
      {
        key: 'div',
        value: function div(v, n) {
          return new Vector(v.x / n, v.y / n)
        }
      },
      {
        key: 'mult',
        value: function mult(v, n) {
          return new Vector(v.x * n, v.y * n)
        }
      }
    ]
  )
  return Vector
})()

var Ball = (function() {
  // Create a new vector using mouse events

  // Initial velocity of moving ball

  // Component props
  function Ball(instance, props) {
    classCallCheck(this, Ball)

    this.instance = instance
    this.props = props
    // $FlowFixMe
    this.loc = new Vector(
      Math.floor(Math.random() * Math.floor(this.instance.width / 2)),
      Math.floor(Math.random() * Math.floor(this.instance.height / 2))
    )
    this.velocity = new Vector(0, 0)
    this.acc = new Vector(-0.001, 0.01)
  }
  // distance of the mouse vector from the center of canvas

  // Acceleration of the ball

  // Location of a ball on canvas

  // Processing instance

  createClass(Ball, [
    {
      key: 'updatePosition',
      value: function updatePosition() {
        this.mouse = new Vector(this.instance.mouseX, this.instance.mouseY)

        this.dir = Vector.sub(this.mouse, this.loc)

        // Calculate its unit vector
        this.dir.normalize()

        // Scale it by 0.5 units
        this.dir.mult(this.props.magnitude) // this.props.magnitude

        // Changing location is velocity and changing velocity is acceleration, hence:
        // Assuming the mass is 1 (in pixel world, so F=A)
        this.acc = this.dir

        // Changing velocity (acc)
        this.velocity.add(this.acc)

        // Limit the velocity vector magnitude
        this.velocity.limit(this.props.maxVelocity || DEFAULT_MAX_VELOCITY)

        // Changing location is velocity hence balls appeared to be moving
        this.loc.add(this.velocity)
      }
    },
    {
      key: 'hasCrossedEdge',
      value: function hasCrossedEdge() {
        if (this.loc.x > this.instance.width) {
          this.loc.x = 0
        } else if (this.loc.x < 0) {
          this.loc.x = this.instance.width
        }

        if (this.loc.y > this.instance.height) {
          this.loc.y = 0
        } else if (this.loc.y < 0) {
          this.loc.y = this.instance.height
        }
      }
    },
    {
      key: 'displayBalls',
      value: function displayBalls() {
        this.instance.strokeWeight(this.props.stroke || DEFAULT_STROKE_WEIGHT)
        this.instance.fill(this.props.color || DEFAULT_BALL_COLOR)
        this.instance.ellipse(
          this.loc.x,
          this.loc.y,
          this.props.ballSize.width || DEFAULT_BALL_WIDTH,
          this.props.ballSize.height || DEFAULT_BALL_HEIGHT
        )
      }
    }
  ])
  return Ball
})()

var getAccelerationProps = function getAccelerationProps(props) {
  var balls = props.balls,
    maxVelocity = props.maxVelocity,
    color = props.color,
    stroke = props.stroke,
    width = props.width,
    height = props.height,
    ballSize = props.ballSize,
    measures = props.measures,
    extras = props.extras,
    background = props.background,
    magnitude = props.magnitude,
    rest = objectWithoutProperties(props, [
      'balls',
      'maxVelocity',
      'color',
      'stroke',
      'width',
      'height',
      'ballSize',
      'measures',
      'extras',
      'background',
      'magnitude'
    ])

  return rest
}

// Draw the balls on canvas when <Acceleration /> component is used
var drawStuffUsingAcceleration = function drawStuffUsingAcceleration(p, props) {
  var balls = new Array(Number(props.balls) || DEFAULT_BALLS)

  p.setup = function() {
    getCanvasSize(p, props)

    for (var i = 0; i < balls.length; i++) {
      balls[i] = new Ball(p, props)
    }
  }

  p.draw = function() {
    p.background(props.background)
    for (var i = 0; i < balls.length; i++) {
      balls[i].updatePosition()
      balls[i].hasCrossedEdge()
      balls[i].displayBalls()
    }
  }
}

var Acceleration = hoc(drawStuffUsingAcceleration, getAccelerationProps)

Acceleration.displayName = 'Acceleration'

// Draw the balls using laws of motion (force = mass x acceleration)
var FMA = (function() {
  function FMA(instance, props, mass, xPos, yPos) {
    classCallCheck(this, FMA)

    // Location of ball
    this.location = new Vector(xPos, yPos)
    // Velocity of ball
    this.velocity = new Vector(0, 0)
    // Acceleration of ball
    this.acc = new Vector(-0.001, 0.01)
    // Mass of a ball
    this.mass = mass
    // Component props
    this.props = props
    // Processing instance
    this.instance = instance
  }

  createClass(FMA, [
    {
      key: 'getVelocity',
      value: function getVelocity() {
        return new Vector(this.velocity.x, this.velocity.y)
      }

      // Apply a certain force to a ball (can be gravity, wind, ...)
    },
    {
      key: 'applyForce',
      value: function applyForce(f) {
        // Determine the acceleration
        // Here, acceleration is equal to force because we have assume the amount of matter (pixels) to be 1. So the mass is one, hence F=A
        this.force = Vector.div(f, this.mass)
        // Add up the acceleration (net force)
        this.acc.add(this.force)
      }
    },
    {
      key: 'updatePosition',
      value: function updatePosition() {
        // Change of velocity
        this.velocity.add(this.acc)

        this.velocity.limit(this.props.maxVelocity || DEFAULT_MAX_VELOCITY)

        // Change of location
        this.location.add(this.velocity)

        // Invoke the measures callback from component
        this.props.measures &&
          this.props.measures({
            velocity: Number(this.location.x - this.location.y).toFixed(2),
            acceleration: Number(this.velocity.x - this.velocity.y).toFixed(2)
          })

        // Set the acceleration to zero (Newton's first law). This causes the ball to move with constant velocity in an equilibrium state.
        this.acc.mult(0)
      }
    },
    {
      key: 'displayBalls',
      value: function displayBalls() {
        this.instance.strokeWeight(this.props.stroke || DEFAULT_STROKE_WEIGHT)
        this.instance.fill(this.props.color || DEFAULT_BALL_COLOR)
        this.instance.ellipse(
          this.location.x,
          this.location.y,
          this.mass * this.props.ballSize.width,
          this.mass * this.props.ballSize.height
        )
      }
    },
    {
      key: 'hasCrossedEdge',
      value: function hasCrossedEdge() {
        if (this.location.x > this.instance.width) {
          this.location.x = this.instance.width
          this.velocity.x *= -1
        } else if (this.location.x < 0) {
          this.velocity.x *= -1
          this.location.x = 0
        }

        if (this.location.y > this.instance.height) {
          this.location.y = this.instance.height
          this.velocity.y *= -1
        }
      }
    }
  ])
  return FMA
})()

var getForcesProps = function getForcesProps(props) {
  var balls = props.balls,
    color = props.color,
    background = props.background,
    stroke = props.stroke,
    width = props.width,
    height = props.height,
    ballSize = props.ballSize,
    measures = props.measures,
    extras = props.extras,
    applyForce = props.applyForce,
    gravity = props.gravity,
    frictionCoefficient = props.frictionCoefficient,
    maxVelocity = props.maxVelocity,
    friction = props.friction,
    rest = objectWithoutProperties(props, [
      'balls',
      'color',
      'background',
      'stroke',
      'width',
      'height',
      'ballSize',
      'measures',
      'extras',
      'applyForce',
      'gravity',
      'frictionCoefficient',
      'maxVelocity',
      'friction'
    ])

  return rest
}

// Draw the balls on canvas when <Force /> component is used
var drawStuffUsingForces = function drawStuffUsingForces(p, props, getArray) {
  var balls = new Array(Number(props.balls) || DEFAULT_BALLS)

  p.setup = function() {
    getCanvasSize(p, props)

    for (var i = 0; i < balls.length; i++) {
      balls[i] = new FMA(p, props, Math.random(), 0, 0)
    }
  }

  p.draw = function() {
    p.background(props.background)

    for (var i = 0; i < balls.length; i++) {
      var wind = new Vector(0.001, 0)
      var gravity = void 0

      // Gravitational force is scaled according to the mass of a ball. So the ball hit the ground with same acceleration.
      // Gravity - The force that pulls together all the matter
      if (props.gravity) {
        var mass = balls[i].mass
        gravity = new Vector(0, 0.1 * mass)
      } else {
        gravity = new Vector(0, 0.1)
      }

      // Friction - Force that reduces the energy of a system while the object is in motion.
      if (props.friction) {
        // Friction = -uNV(unit vector)
        // negative sign indicates that the frictional force always acts in the opposite direction
        var friction = balls[i].getVelocity()
        // Determines the strength of friction
        var coefficientOfFriction = props.frictionCoefficient || 0.01

        // friction force acts in opposite direction, so ...
        friction.mult(-1)
        // Calculate the unit vector
        friction.normalize()
        // higher its value, more friction
        friction.mult(coefficientOfFriction)
        // Apply frictional force
        balls[i].applyForce(friction)
      }

      balls[i].applyForce(wind)
      balls[i].applyForce(gravity)

      props.applyForce && props.applyForce(balls[i], Vector)

      balls[i].updatePosition()
      balls[i].hasCrossedEdge()
      balls[i].displayBalls()
    }
  }
}

var Force = hoc(drawStuffUsingForces, getForcesProps)

Force.displayName = 'Force'

// Gravitational force (force of attraction)
var Magnet = (function() {
  function Magnet(instance, props) {
    classCallCheck(this, Magnet)

    this.instance = instance
    this.props = props
    this.location = new Vector(
      this.instance.width / 2,
      this.instance.height / 2
    )
    this.mass = 20
    this.G = this.props.gConstant || 0.4
  }

  createClass(Magnet, [
    {
      key: 'attract',
      value: function attract(rotator) {
        var force = Vector.sub(this.location, rotator.location)
        var distance = force.mag()

        distance = this.instance.constrain(distance, 5.0, 10.0)

        force.normalize()

        var strength =
          (this.G * this.mass * rotator.mass) / (distance * distance)
        force.mult(strength)
        return force
      }
    },
    {
      key: 'display',
      value: function display() {
        var offset = this.props.ballSize.width / 9

        this.instance.strokeWeight(this.props.stroke)
        this.instance.fill(this.props.color)
        this.instance.ellipse(
          this.location.x,
          this.location.y,
          this.mass * offset,
          this.mass * offset
        )
      }
    }
  ])
  return Magnet
})()

var getGravityProps = function getGravityProps(props) {
  var color = props.color,
    gConstant = props.gConstant,
    maxVelocity = props.maxVelocity,
    stroke = props.stroke,
    width = props.width,
    height = props.height,
    measures = props.measures,
    ballSize = props.ballSize,
    extras = props.extras,
    background = props.background,
    move = props.move,
    rest = objectWithoutProperties(props, [
      'color',
      'gConstant',
      'maxVelocity',
      'stroke',
      'width',
      'height',
      'measures',
      'ballSize',
      'extras',
      'background',
      'move'
    ])

  return rest
}

// Draw the balls on canvas when <Acceleration /> component is used
var drawStuffUsingGravity = function drawStuffUsingGravity(p, props) {
  var magnet = void 0
  var rotator = void 0

  p.setup = function() {
    getCanvasSize(p, props)

    rotator = new FMA(p, props, 1.5, p.width / 2.5, p.height / 2.5)
    magnet = new Magnet(p, props)
  }

  p.draw = function() {
    p.background(props.background)

    var gravitationalForce = magnet.attract(rotator)

    rotator.applyForce(gravitationalForce)
    rotator.updatePosition()

    magnet.display()
    rotator.displayBalls()
  }

  p.mouseDragged = function() {
    magnet.location.x = p.mouseX
    magnet.location.y = p.mouseY

    // Prevent default behaviour!
    return false
  }
}

var Gravity = hoc(drawStuffUsingGravity, getGravityProps)

Gravity.displayName = 'Gravity'

var Slider = function Slider(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'span',
      { 'data-tip': props.tip },
      props.name,
      props.value
    ),
    React__default.createElement('input', {
      className: 'slider',
      type: 'range',
      min: props.min,
      max: props.max,
      step: props.step || 1,
      value: props.value,
      onChange: props.handler,
      disabled: props.disabled
    })
  )
}

Slider.defaultProps = {
  disabled: false
}

var capitalize = function capitalize(name) {
  return '' + (name[0].toUpperCase() + name.slice(1))
}

var CheckBox = function CheckBox(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'span',
      { 'data-tip': props.tip },
      props.name === 'move' ? 'Drag: ' : capitalize(props.name) + ': '
    ),
    React__default.createElement(
      'label',
      { className: 'switch' },
      React__default.createElement('input', {
        type: 'checkbox',
        name: props.name,
        checked: props.checked,
        onChange: props.handler
      }),
      React__default.createElement('span', { className: 'toggle round' })
    )
  )
}

var ForceCanvas = function ForceCanvas(props) {
  return React__default.createElement(Force, {
    width: props.width,
    height: props.height,
    color: props.color,
    stroke: 0.01,
    balls: props.balls,
    background: props.background,
    maxVelocity: props.maxVelocity,
    friction: props.friction,
    gravity: props.gravity,
    frictionCoefficient: props.frictionCoefficient,
    applyForce: function applyForce(ball, Vector) {
      ball.applyForce(new Vector(0.2, 0.5))
      // User define apply force vectors
      if (props.fnArr.length !== 0 && props.valArr.length !== 0) {
        props.fnArr.forEach(function(fn) {
          props.valArr.forEach(function(val) {
            fn(ball, Vector, val.x, val.y)
          })
        })
      }
    },
    ballSize: { width: props.ballSize, height: props.ballSize }
  })
}

var AccelerationCanvas = function AccelerationCanvas(props) {
  return React__default.createElement(Acceleration, {
    width: props.width,
    height: props.height,
    color: props.color,
    stroke: 0.01,
    balls: props.balls,
    maxVelocity: props.maxVelocity,
    background: props.background,
    ballSize: { width: props.ballSize, height: props.ballSize },
    magnitude: props.magnitude
  })
}

var GravityCanvas = function GravityCanvas(props) {
  return React__default.createElement(Gravity, {
    width: props.width,
    height: props.height,
    color: props.color,
    stroke: 0.01,
    gConstant: props.gConstant,
    background: props.background,
    move: props.move,
    ballSize: { width: props.ballSize, height: props.ballSize }
  })
}

var ForceControls = function ForceControls(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Balls: ',
        min: '1',
        max: '1000',
        value: props.balls,
        handler: props.handleBallChange,
        tip: 'Set number of balls to be drawn on the canvas'
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(CheckBox, {
        name: 'friction',
        checked: props.friction,
        handler: props.handleFriction,
        tip: 'Enable friction'
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Friction coefficient: ',
        min: '0.1',
        max: '1',
        step: '0.1',
        value: props.frictionCoefficient,
        handler: props.handleFrictionCoefficient,
        tip: 'Set a value for friction coefficient.',
        disabled: !props.friction
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(CheckBox, {
        name: 'gravity',
        checked: props.gravity,
        handler: props.handleGravity,
        tip: 'Enable gravity'
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement('span', null, 'Apply force: '),
      React__default.createElement('i', {
        className: 'fas fa-plus-circle',
        style: { cursor: 'pointer' },
        onClick: props.toggleModal,
        'data-tip': 'Add a vector for applying force on a ball'
      }),
      React__default.createElement(
        'ul',
        { className: 'vector-list' },
        props.valArr.map(function(vector, key) {
          if (vector.x === 0 && vector.y === 0) {
            return null
          } else {
            return React__default.createElement(
              'li',
              {
                className: 'vector-animation',
                id: 'vector-item-' + key,
                key: key
              },
              React__default.createElement(
                'strong',
                null,
                'F',
                React__default.createElement('sub', null, key + 1, '\xA0\xA0'),
                '-\xA0'
              ),
              vector.x,
              'x + ',
              vector.y,
              'y\xA0\xA0',
              React__default.createElement('i', {
                className: 'fas fa-minus-circle minus-icon',
                onClick: function onClick(e) {
                  return props.deleteVectors(key)
                }
              })
            )
          }
        })
      ),
      React__default.createElement(
        Modal,
        {
          open: props.isModalOpen,
          onClose: props.toggleModal,
          classNames: {
            modal: /*#__PURE__*/ css(
              "padding:35px;width:50%;font-family:'Quicksand',sans-serif;font-size:20px;"
            )
          }
        },
        React__default.createElement(
          'div',
          null,
          React__default.createElement(
            'p',
            null,
            "A force is a vector that causes an object with mass to accelerate. Let's define a vector with ball position x and y. Example - 0.1x + 0.4y"
          ),
          React__default.createElement(
            'div',
            { className: 'vector-input' },
            '\xA0',
            React__default.createElement('input', {
              type: 'text',
              value: props.xVec,
              onChange: props.updateXVec
            }),
            'x \xA0and\xA0\xA0',
            React__default.createElement('input', {
              type: 'text',
              value: props.yVec,
              onChange: props.updateYVec
            }),
            'y'
          ),
          React__default.createElement(
            'p',
            null,
            "After you've have defined the vector, a force with this vector will be applied on each ball. Click the below button to apply the vector and see the effect of force on each ball."
          ),
          React__default.createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'center' } },
            React__default.createElement(
              'button',
              {
                id: 'vector-button',
                className: /*#__PURE__*/ /*#__PURE__*/ css(
                  'color:white;font-size:20px;padding:10px;border:none;border-radius:50px;transition:0.4s;cursor:pointer;background:linear-gradient( 90deg,rgba(131,58,180,1) 0%,rgba(253,29,29,1) 50%,rgba(252,176,69,1) 100% );&:focus{outline:none;}'
                ),
                onClick: props.updateVector
              },
              'Apply vector'
            )
          )
        )
      )
    ),
    React__default.createElement(ReactTooltip, {
      place: 'right',
      effect: 'float'
    })
  )
}

var AccelerationControls = function AccelerationControls(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Balls: ',
        min: '1',
        max: '1000',
        value: props.balls,
        handler: props.handleBallChange,
        tip: 'Set number of balls to be drawn on the canvas'
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Acceleration magnitude: ',
        min: '0.1',
        max: '3',
        step: '0.1',
        value: props.magnitude,
        handler: props.handleMagnitude,
        tip: 'Set the magnitude of acceleration vector'
      })
    )
  )
}

var GravityControls = function GravityControls(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'li',
      null,
      React__default.createElement(CheckBox, {
        name: 'move',
        checked: props.move,
        handler: props.handleMove,
        tip: 'Enable dragging of ball'
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Gravitational constant: ',
        min: '1',
        max: '10',
        value: props.gConstant,
        handler: props.handleGConstant,
        disabled: props.move,
        tip: 'Set the value for gravitation constant'
      })
    ),
    React__default.createElement(ReactTooltip, {
      place: 'right',
      effect: 'float'
    })
  )
}

// Draw canvas based on currently selected element (state.currentElement)
var pickCanvas = function pickCanvas(props) {
  if (props.currentElement === 'Force') {
    return React__default.createElement(ForceCanvas, props)
  } else if (props.currentElement === 'Acceleration') {
    return React__default.createElement(AccelerationCanvas, props)
  } else if (props.currentElement === 'Gravity') {
    return React__default.createElement(GravityCanvas, props)
  }
}

var Canvas = function Canvas(props) {
  return React__default.createElement(Consumer, null, function(state) {
    return pickCanvas(_extends({}, state, props))
  })
}

var ColorPicker = function ColorPicker(props) {
  var pickerOffset = props.name === 'Color: ' ? '22px' : '-35px'
  var tooltip =
    'Pick a ' +
    (props.name === 'Color: '
      ? 'color for ball.'
      : 'background color for canvas')

  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement('span', null, capitalize(props.name)),
    React__default.createElement('div', {
      style: {
        width: 20,
        height: 20,
        borderRadius: '5px',
        backgroundColor: props.color,
        display: 'inline-block',
        marginBottom: -4
      },
      onClick: props.clickHandler,
      'data-tip': tooltip
    }),
    React__default.createElement(ReactTooltip, {
      place: 'right',
      effect: 'float'
    }),
    props.show
      ? React__default.createElement(
          'div',
          {
            style: {
              marginTop: '10px',
              position: 'relative',
              right: pickerOffset
            }
          },
          React__default.createElement(BlockPicker, {
            color: props.color,
            onChange: props.handleColorChange
          })
        )
      : null
  )
}

var contentStyles = {
  textAlign: 'justify',
  fontSize: '18px',
  lineHeight: 1.5,
  fontWeight: 300

  // Render extra controls based on currently selected element
}
var renderControls = function renderControls(props) {
  if (props.currentElement === 'Force')
    return React__default.createElement(ForceControls, props)
  if (props.currentElement === 'Gravity')
    return React__default.createElement(GravityControls, props)
  if (props.currentElement === 'Acceleration')
    return React__default.createElement(AccelerationControls, props)
}

var ControlsList = function ControlsList(props) {
  return React__default.createElement(
    'ul',
    { id: 'horizontal-list' },
    React__default.createElement(
      'li',
      null,
      React__default.createElement('span', null, 'Element: '),
      React__default.createElement(
        'select',
        {
          className: /*#__PURE__*/ /*#__PURE__*/ css(
            '&:focus{outline-color:',
            props.color,
            ';}'
          ),
          name: 'elements',
          onChange: props.handleElementSelect,
          'data-tip':
            props.currentElement === 'Acceleration'
              ? 'Move the mouse over the canvas.'
              : ''
        },
        props.renderOptions()
      )
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(ColorPicker, {
        name: 'Color: ',
        color: props.color,
        clickHandler: props.handleColorPicker,
        show: props.showColorPicker,
        handleColorChange: props.handleColorChange
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(ColorPicker, {
        name: 'Background: ',
        color: props.background,
        clickHandler: props.handleBackground,
        show: props.showBackgroundPicker,
        handleColorChange: props.handleBackgroundChange
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Size: ',
        min: '1',
        max: '60',
        value: props.ballSize,
        disabled: props.move,
        handler: props.handleBallSize,
        tip: 'Set the size of a ball'
      })
    ),
    React__default.createElement(
      'li',
      null,
      React__default.createElement(Slider, {
        name: 'Max. velocity: ',
        min: '1',
        max: '60',
        value: props.maxVelocity,
        handler: props.handleVelocity,
        disabled: props.move,
        tip: 'Limit the velocity of a ball'
      })
    ),
    renderControls(props)
  )
}

// Render the controls for controlling friction, gravity, acceleration and customizing canvas
// State exposed by Consumer here is <Layout /> component's state
var Controls = function Controls(props) {
  return React__default.createElement(Consumer, null, function(state) {
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        'h1',
        { className: 'heading' },
        'Elements of physics'
      ),
      React__default.createElement(
        'div',
        { className: 'control-center' },
        React__default.createElement(
          'p',
          { style: contentStyles },
          'Learn about elements of physics with an interactive simulation.'
        )
      ),
      React__default.createElement(
        'div',
        { style: { marginTop: '10px' } },
        React__default.createElement(ControlsList, _extends({}, state, props))
      ),
      React__default.createElement(ReactTooltip, {
        place: 'right',
        effect: 'float'
      })
    )
  })
}

var AccelerationContent = function AccelerationContent(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement('h1', null, 'Introduction'),
    React__default.createElement(
      'p',
      null,
      'Welcome to Elements of Physics, an interactive simulation which describes different elements of physics like ',
      React__default.createElement('span', null, 'Acceleration'),
      ',',
      ' ',
      React__default.createElement('span', null, 'Force'),
      ' and ',
      React__default.createElement('span', null, 'Gravity'),
      '. Before we start learning about these elements, we need to know something about vectors.'
    ),
    React__default.createElement('h1', null, 'Vector'),
    React__default.createElement(
      'p',
      null,
      'A vector is a quantity that has a direction and magnitude. Consider two points A and B, then the vector will be difference between point A and point B.'
    ),
    React__default.createElement('h1', null, 'Acceleration'),
    React__default.createElement(
      'p',
      null,
      'Acceleration is defined as change in velocity over a period of time. In the above simulator, if you choose the element ',
      React__default.createElement('span', null, 'Acceleration'),
      ' ',
      "from the options, then you will notice a number of balls being attracted towards the current position of mouse on the canvas. This behavior is due to the acceleration force created when a ball moves from its actual position to the mouse position. Let's examine how force actually works in pixel world."
    ),
    React__default.createElement(
      'p',
      null,
      'According to the',
      ' ',
      React__default.createElement(
        'a',
        {
          id: 'article',
          href:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/a/what-is-newtons-second-law',
          target: '_blank',
          rel: 'noopener noreferrer',
          style: { borderBottom: '2px dotted #eeaeca' }
        },
        "Newton's Second Law of Motion"
      ),
      ', Force equals mass times acceleration. Since we are in pixel world,',
      ' ',
      React__default.createElement(
        'span',
        null,
        'we assume the amount of matter in an object to be 1. Hence, the mass of a ball here is 1'
      ),
      ". Now to determine the acceleration force, we use the Newton's Second Law equation -"
    ),
    React__default.createElement(
      'blockquote',
      null,
      'Force = Mass x Acceleration'
    ),
    React__default.createElement(
      'p',
      null,
      'After substituting the values in the above equation, we end up with',
      ' ',
      React__default.createElement('span', null, 'F = A'),
      '. This means, a constant force is being applied to each ball which causes it to accelerate.'
    ),
    React__default.createElement(
      'p',
      null,
      'This force can also be described as a vector that causes the ball with mass to accelerate.'
    ),
    React__default.createElement(
      'blockquote',
      null,
      'Move the mouse over or touch the canvas. You will notice that each ball will be attracted towards the current mouse position with a constant force. Try adjusting the maximum velocity of each ball and see what happens.'
    ),
    React__default.createElement('h2', null, 'Fragmentation'),
    React__default.createElement(
      'ul',
      { className: 'content-acceleration' },
      React__default.createElement(
        'li',
        null,
        React__default.createElement(
          'h3',
          null,
          'Representing the ball position and mouse location'
        ),
        React__default.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }
        }),
        React__default.createElement(
          'p',
          null,
          'In the above figure, we represent the ball with position (x',
          React__default.createElement('sub', null, 'A'),
          ', y',
          React__default.createElement('sub', null, 'A'),
          ') and the mouse location (x',
          React__default.createElement('sub', null, 'B'),
          ', y',
          React__default.createElement('sub', null, 'B'),
          ') on the canvas.'
        )
      ),
      React__default.createElement(
        'li',
        null,
        React__default.createElement(
          'h3',
          null,
          'Calculating the vector between ball and mouse location'
        ),
        React__default.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }
        })
      ),
      React__default.createElement(
        'p',
        null,
        'Now we determine the vector between the ball and mouse location. Simple, we take the difference between both the points, mouse and ball location on the canvas. This vector is the constant force that causes the ball to accelerate towards the mouse.',
        ' ',
        React__default.createElement(
          'span',
          null,
          'The direction of this vector is from the ball location to mouse position on the canvas.'
        )
      ),
      React__default.createElement(
        'li',
        null,
        React__default.createElement(
          'h3',
          null,
          'Better animations with vector math'
        ),
        React__default.createElement(
          'p',
          null,
          'In the above step, we determined acceleration vector. With this vector, ball will move directly to the mouse location and it would appear like it happened instantaneously. Imagine when you have multiple balls !? It would then create a janky experience and hence animation will suffer on the canvas. So we need to decide how quickly a ball should accelerate towards the mouse.'
        ),
        React__default.createElement(
          'p',
          null,
          "We'll need to shrink this vector and then scale it back with a value to accelerate a ball."
        ),
        React__default.createElement(
          'blockquote',
          null,
          'In mathematical terms, shrink refers to',
          ' ',
          React__default.createElement(
            'a',
            {
              id: 'article',
              target: '_blank',
              rel: 'noopener noreferrer',
              href:
                'https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization'
            },
            'vector normalization'
          ),
          ' ',
          'and ',
          React__default.createElement('span', null, 'scale'),
          ' means multiplying a vector with a constant value.'
        ),
        React__default.createElement(
          'p',
          null,
          "Go to the control section and adjust the magnitude of the accleration vector. You'll notice that ball either accelerates fastly or slowly towards the mouse location."
        )
      )
    )
  )
}

var ForceContent = function ForceContent(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement('h1', null, 'Force'),
    React__default.createElement(
      'p',
      null,
      'A force is a vector that causes an object with mass to accelerate. When you select the element ',
      React__default.createElement('span', null, 'Force'),
      ' from the list of element options, then you will notice a number of balls moving with a',
      ' ',
      React__default.createElement('span', null, 'constant'),
      ' velocity. Rendering balls on canvas using',
      ' ',
      React__default.createElement('span', null, 'Force'),
      ' shares a similar mechanism when compared to',
      ' ',
      React__default.createElement('span', null, 'Acceleration'),
      '. The only difference here is that each ball is moving with a constant velocity and has different mass.'
    ),
    React__default.createElement(
      'p',
      null,
      'The value of mass is a pseudo-random number between the inclusive range 0 - 1. So each ball gets a acceleration force of ',
      React__default.createElement('span', null, 'Force / mass'),
      '.'
    ),
    React__default.createElement(
      'blockquote',
      null,
      'Force / Mass = Acceleration'
    ),
    React__default.createElement(
      'p',
      null,
      'Along with the acceleration force, we can also apply an additional force to the ball like',
      ' ',
      React__default.createElement(
        'a',
        {
          id: 'article',
          target: '_blank',
          rel: 'noopener noreferrer',
          href:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/inclined-planes-friction/a/what-is-friction'
        },
        'Frictional force'
      ),
      ". Enable the friction and adjust the friction coefficient in the control section. Friction coefficient determines the strength of friction. More its value, more the friction. After you've enabled the friction, you will notice that the ball moves slowly and then reaches the edge. It stops accelerating further after it has reached the edge. Frictional force reduces the energy of a system while the ball is in motion."
    ),
    React__default.createElement(
      'blockquote',
      null,
      "Symbolic expression for friction force is -uNV. The negative sign indicates that the friction force always acts in the opposite direction. u is the coefficient of friction, N is the normal force which is perpendicular to the ball's motion along the canvas. We are assuming the value of normal force to be 1 in our case, and V is the velocity unit vector. Check out",
      ' ',
      React__default.createElement(
        'a',
        {
          id: 'article',
          target: '_blank',
          rel: 'noopener noreferrer',
          href:
            'https://www.khanacademy.org/science/physics/forces-newtons-laws/inclined-planes-friction/a/what-is-friction'
        },
        'this'
      ),
      ' ',
      'article for a deeper analysis on frictional force.'
    ),
    React__default.createElement(
      'p',
      null,
      'We can also apply ',
      React__default.createElement('span', null, 'gravitational force'),
      ' to a ball. Enable gravity in the control section. You will notice that each ball hits the ground with same acceleration. Why? Because gravitational force is scaled according to the mass of a ball.'
    ),
    React__default.createElement(
      'p',
      null,
      'Interestingly, you can also apply an external force using a vector. Click the ',
      React__default.createElement('i', {
        style: { color: '#4c4c4c' },
        className: 'fas fa-plus-circle'
      }),
      ' icon near apply force in the control section and you will be prompted with a modal to create your own vector. Try it and see how this force affects the ball. You can also remove this vector using',
      ' ',
      React__default.createElement('i', {
        style: { color: '#4c4c4c' },
        className: 'fas fa-minus-circle'
      }),
      ' by hovering over it in the control section.'
    ),
    React__default.createElement(
      'blockquote',
      null,
      'Note - You can add multiple force vectors for a ball using apply force option in control section.'
    )
  )
}

var GravityContent = function GravityContent(props) {
  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement('h1', null, 'Gravity'),
    React__default.createElement(
      'p',
      null,
      'Gravity can be described as the force that pulls down all the matter. Select the element ',
      React__default.createElement('span', null, 'Gravity'),
      ' from the list of options. You will notice a small ball revolving around the bigger one.'
    ),
    React__default.createElement(
      'p',
      null,
      'Enable the drag option in control section and then drag the bigger ball anywhere on the canvas. You will observe that the smaller ball is attracted towards the bigger one. This behaviour is quite similar to what we had in the element ',
      React__default.createElement('span', null, 'Acceleration'),
      ' where all the balls were attracted towards the current position of the mouse. But there is a subtle difference here. Smaller ball is attracted towards the bigger one due to gravitational force, and instead of mouse location we use the location of bigger ball on the canvas whenever it is dragged.'
    ),
    React__default.createElement('h2', null, 'Gravitational force'),
    React__default.createElement(
      'p',
      null,
      "So now that we know the attraction is induced due to gravitational force, let's see how it is actually calculated and used in creating animations on the canvas."
    ),
    React__default.createElement(
      'p',
      null,
      'Gravitational force is calculated using the expression',
      ' ',
      React__default.createElement(
        'span',
        null,
        'F = G x m1 x m2 / r',
        React__default.createElement('sup', null, '2')
      ),
      ' ',
      "? Let's breakdown this expression by comparing each symbol with our example."
    ),
    React__default.createElement(
      'p',
      null,
      React__default.createElement('span', null, 'F'),
      ' stands for gravitational force that we need to calculate.',
      ' ',
      React__default.createElement('span', null, 'G'),
      ' stands for ',
      React__default.createElement('span', null, 'Gravitational constant'),
      ',',
      ' ',
      React__default.createElement('span', null, 'm1, m2'),
      ' are the masses of both the balls and ',
      React__default.createElement('span', null, 'r'),
      ' is the distance between both the balls.'
    ),
    React__default.createElement(
      'p',
      null,
      'You can adjust the gravitational constant (',
      React__default.createElement(
        'span',
        {
          role: 'img',
          'aria-label': 'shocking'
        },
        '\uD83D\uDE31'
      ),
      ') and see how it affects the gravitational force in the control section. You can also adjust the ball size using ',
      React__default.createElement('span', null, 'size'),
      ' slider.'
    )
  )
}

var pickContent = function pickContent(currentElement) {
  if (currentElement === 'Acceleration') {
    return React__default.createElement(AccelerationContent, null)
  } else if (currentElement === 'Force') {
    return React__default.createElement(ForceContent, null)
  } else if (currentElement === 'Gravity') {
    return React__default.createElement(GravityContent, null)
  }
}

var Content = function Content(props) {
  return React__default.createElement(Consumer, null, function(state) {
    return React__default.createElement(
      'div',
      { className: 'content' },
      pickContent(state.currentElement)
    )
  })
}

var StyledLink = function StyledLink(props) {
  return React__default.createElement(
    Link,
    {
      className: /*#__PURE__*/ /*#__PURE__*/ css(
        'text-decoration:none;text-align:center;color:white;width:',
        props.width || 'none',
        ';font-size:',
        props.fontSize || '25px',
        ';padding:10px;border-radius:40px;background:linear-gradient( 90deg,rgba(131,58,180,1) 0%,rgba(253,29,29,1) 50%,rgba(252,176,69,1) 100% );&:focus{outline:none;}'
      ),
      to: props.to
    },
    props.children
  )
}

var fadeIn = function fadeIn() {
  return /*#__PURE__*/ css(
    'animation:fadeIn 1s ease-in;@keyframes fadeIn{from{opacity:0;transform:rotateY(-180deg);}to{opacity:1;transform:rotateY(0deg);}}'
  )
}

var shakeElement = function shakeElement(id) {
  return document
    .getElementById(id)
    .animate(
      [
        { transform: 'translate3d(-1px, 0, 0)' },
        { transform: 'translate3d(2px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(4px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(4px, 0, 0)' },
        { transform: 'translate3d(-4px, 0, 0)' },
        { transform: 'translate3d(2px, 0, 0)' },
        { transform: 'translate3d(-1px, 0, 0)' }
      ],
      {
        easing: 'cubic-bezier(.36,.07,.19,.97)',
        fill: 'both',
        duration: 800
      }
    )
}

var fadeAway = function fadeAway(id) {
  return document
    .getElementById(id)
    .animate(
      [
        { opacity: 1, transform: 'translateX(0px)' },
        { opacity: 0, transform: 'translateX(400px)' }
      ],
      {
        duration: 600,
        iterations: 1,
        easing: 'ease-in-out'
      }
    )
}

injectGlobal('body{background:', hexToRgba('#27323e', '2'), '}')

var Layout = (function(_React$Component) {
  inherits(Layout, _React$Component)

  function Layout() {
    var _ref

    var _temp, _this, _ret

    classCallCheck(this, Layout)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.ref = React__default.createRef()),
      (_this.state = {
        // Canvas width
        width: null,
        // Canvas height
        height: null,
        // Elements of physics
        elements: ['Acceleration', 'Force', 'Gravity'],
        // Current selected element
        currentElement: 'Acceleration',
        // Balls drawn on canvas
        balls: 100,
        // Size of ball (width and height)
        ballSize: 20,
        // Maximum velocity
        maxVelocity: 10,
        // Ball color picker
        showColorPicker: false,
        // Ball color
        color: '#ff8a65',
        // Canvas color picker
        showBackgroundPicker: false,
        // Canvas color
        background: '#d9e3f0',
        // Enable frictional force
        friction: false,
        // Friction coefficient value
        frictionCoefficient: 0.1,
        // Enable gravitational force
        gravity: false,
        // Gravitational constant
        gConstant: 10,
        // Enable dragging of ball when <Gravity /> compnonent is mounted
        move: false,
        // Modal for creating a vector for applying force on a ball
        isModalOpen: false,
        // Store the function for applying force on each ball
        fnArr: [],
        // Store the values x and y position for each ball
        valArr: [],
        //
        forces: [],
        // X position of the ball
        xVec: 0,
        // Y position of the ball
        yVec: 0,
        // Acceleration magnitude
        magnitude: 0.4
      }),
      (_this.handleMagnitude = function(e) {
        return _this.setState({ magnitude: Number(e.target.value) })
      }),
      (_this.handleCanvasResize = function(e) {
        _this.setState({ innerWidth: window.innerWidth })

        var _this$ref$current$get = _this.ref.current.getBoundingClientRect(),
          width = _this$ref$current$get.width,
          height = _this$ref$current$get.height

        var canvas = document.getElementById('defaultCanvas0')

        if (canvas !== null) {
          canvas.style.height = height
          canvas.style.width = width
        }
      }),
      (_this.renderOptions = function() {
        var elements = _this.state.elements

        return elements.map(function(element, i) {
          return React__default.createElement(
            'option',
            { value: element, key: i },
            element
          )
        })
      }),
      (_this.toggleModal = function() {
        return _this.setState(function(state) {
          return { isModalOpen: !state.isModalOpen }
        })
      }),
      (_this.updateVector = function(e) {
        if (_this.state.xVec === 0 && _this.state.yVec === 0) {
          shakeElement('vector-button')
        } else {
          _this.setState(function(state) {
            return {
              isModalOpen: !state.isModalOpen,
              valArr:
                state.xVec === 0 && state.yVec === 0
                  ? state.valArr
                  : state.valArr.concat({ x: state.xVec, y: state.yVec }),
              // eslint-disable-line no-new-func
              fnArr: state.fnArr.concat(
                new Function(
                  'ball',
                  'Vector',
                  'a',
                  'b',
                  'ball.applyForce(new Vector(a, b))'
                )
              ),
              // Reset the input field for vectors
              xVec: 0,
              yVec: 0
            }
          })
        }
      }),
      (_this.deleteVectors = function(key) {
        var fn = [].concat(toConsumableArray(_this.state.fnArr))
        var val = [].concat(toConsumableArray(_this.state.valArr))

        fn.splice(fn.indexOf(key), 1)
        val.splice(val.indexOf(key), 1)

        // Start animation on node removal!
        var animate = fadeAway('vector-item-' + key)

        // After the animation, update the state arrays for vector functions and values
        animate.onfinish = function() {
          return _this.setState(function(state) {
            return {
              fnArr: fn,
              valArr: val
            }
          })
        }
      }),
      (_this.updateXVec = function(e) {
        return _this.setState({ xVec: e.target.value })
      }),
      (_this.updateYVec = function(e) {
        return _this.setState({ yVec: e.target.value })
      }),
      (_this.handleElementSelect = function(e) {
        return _this.setState({ currentElement: e.target.value, move: false })
      }),
      (_this.handleBallChange = function(e) {
        _this.setState({ balls: Number(e.target.value) })
      }),
      (_this.handleBallSize = function(e) {
        _this.setState({ ballSize: Number(e.target.value) })
      }),
      (_this.handleVelocity = function(e) {
        return _this.setState({ maxVelocity: Number(e.target.value) })
      }),
      (_this.showColorPicker = function(e) {
        return _this.setState(function(state) {
          return { showColorPicker: !state.showColorPicker }
        })
      }),
      (_this.handleColorChange = function(color) {
        return _this.setState({ color: color.hex })
      }),
      (_this.showBackgroundColorPicker = function(e) {
        return _this.setState(function(state) {
          return {
            showBackgroundPicker: !state.showBackgroundPicker
          }
        })
      }),
      (_this.handleBackgroundChange = function(color) {
        return _this.setState({ background: color.hex })
      }),
      (_this.handleFriction = function(e) {
        return _this.setState(
          defineProperty({}, e.target.name, e.target.checked)
        )
      }),
      (_this.handleGravity = function(e) {
        return _this.setState(
          defineProperty({}, e.target.name, e.target.checked)
        )
      }),
      (_this.handleFrictionCoefficient = function(e) {
        return _this.setState({ frictionCoefficient: Number(e.target.value) })
      }),
      (_this.handleGConstant = function(e) {
        return _this.setState({ gConstant: Number(e.target.value) })
      }),
      (_this.handleMove = function(e) {
        return _this.setState(
          defineProperty({}, e.target.name, e.target.checked)
        )
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    )
  }

  createClass(Layout, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Scroll to top when layout is rendered
        window.scrollTo(0, 0)

        var _ref$current$getBound = this.ref.current.getBoundingClientRect(),
          width = _ref$current$getBound.width,
          height = _ref$current$getBound.height

        // Send this measures down to canvas to size accordingly

        this.setState({
          width: width,
          height: height
        })

        window.addEventListener('resize', this.handleCanvasResize, false)
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _ref$current$getBound2 = this.ref.current.getBoundingClientRect(),
          height = _ref$current$getBound2.height

        // Update the canvas height when controls are updated.

        if (height !== this.state.height) {
          var canvas = document.getElementById('defaultCanvas0')

          if (canvas !== null) {
            canvas.style.height = height
          }
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.handleCanvasResize, false)
      }

      // render the list of elements option

      // Open or close the apply force modal

      // Fired when the vector inputs (x and y position values) are filled

      // Delete a force vector

      // x vector position

      // y vector position

      // Handler for updating currently selected element
      // Also update the state for drag because when it is enabled, sliders are disabled. So for every new element, reset that state

      // Handler for updating number of balls being drawn on the canvas

      // Handler for updating the size of each ball

      // Handler for limit the velocity of each moving ball

      // Handler for updating the ball color

      // Handler for updating the background of canvas

      // Handler for enabling frictional force

      // Handler for enabling gravitational force

      // Handler for updating friction coefficient value

      // Handler for updating gravitational constant value

      // Handler for enabling dragging of ball
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this

        return React__default.createElement(
          'div',
          { className: fadeIn() },
          React__default.createElement(
            'div',
            { style: { position: 'relative', left: -70, top: -25 } },
            React__default.createElement(
              StyledLink,
              { to: '/', fontSize: 10 },
              React__default.createElement('i', {
                className: 'fas fa-arrow-left'
              }),
              '\xA0Back'
            )
          ),
          React__default.createElement(
            React__default.Fragment,
            null,
            React__default.createElement(
              'div',
              { className: 'container' },
              React__default.createElement(
                'div',
                { className: 'canvas-container', ref: this.ref },
                React__default.createElement(Delay, {
                  wait: 800,
                  render: function render(waiting) {
                    return waiting
                      ? React__default.createElement(Loading, null)
                      : React__default.createElement(
                          Provider,
                          { value: _this2.state },
                          React__default.createElement(Canvas, null)
                        )
                  }
                })
              ),
              React__default.createElement(
                'div',
                {
                  className: 'controls',
                  style: { backgroundColor: hexToRgba(this.state.color, '4') }
                },
                React__default.createElement(
                  Provider,
                  { value: this.state },
                  React__default.createElement(Controls, {
                    handleVelocity: this.handleVelocity,
                    handleElementSelect: this.handleElementSelect,
                    handleBallChange: this.handleBallChange,
                    handleBallSize: this.handleBallSize,
                    handleColorPicker: this.showColorPicker,
                    handleColorChange: this.handleColorChange,
                    handleBackgroundChange: this.handleBackgroundChange,
                    handleBackground: this.showBackgroundColorPicker,
                    handleFriction: this.handleFriction,
                    handleGravity: this.handleGravity,
                    handleFrictionCoefficient: this.handleFrictionCoefficient,
                    handleGConstant: this.handleGConstant,
                    handleMove: this.handleMove,
                    handleMagnitude: this.handleMagnitude,
                    renderOptions: this.renderOptions,
                    isModalOpen: this.state.isModalOpen,
                    toggleModal: this.toggleModal,
                    updateVector: this.updateVector,
                    deleteVectors: this.deleteVectors,
                    updateXVec: this.updateXVec,
                    updateYVec: this.updateYVec
                  })
                )
              )
            ),
            React__default.createElement(
              Provider,
              { value: this.state },
              React__default.createElement(Content, null)
            )
          )
        )
      }
    }
  ])
  return Layout
})(React__default.Component)

var styles = {
  display: 'flex',
  justifyContent: 'center'
}

var Home = function Home() {
  return React__default.createElement(
    'div',
    { className: 'home-content' },
    React__default.createElement(
      'div',
      { style: styles },
      React__default.createElement('h1', null, 'Elements of Physics')
    ),
    React__default.createElement(
      'div',
      { style: styles, className: 'nitin-tulswani' },
      React__default.createElement(
        'p',
        null,
        'by',
        ' ',
        React__default.createElement(
          'a',
          {
            id: 'profile',
            href: 'https://twitter.com/NTulswani',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          React__default.createElement('i', null, 'Nitin Tulswani')
        )
      )
    ),
    React__default.createElement(
      'p',
      null,
      'Elements of Physics is an interactive simulation which describes different elements of physics like ',
      React__default.createElement('span', null, 'Gravity'),
      ', ',
      React__default.createElement('span', null, 'Acceleration'),
      ' ',
      'and ',
      React__default.createElement('span', null, 'Force'),
      '. Each element is described with different simulation controls.'
    ),
    React__default.createElement(
      'p',
      null,
      'The simulator consists of two parts - ',
      React__default.createElement('span', null, 'canvas'),
      ' and',
      ' ',
      React__default.createElement('span', null, 'control section'),
      '. Control section consists of different controls for manipulating each element, and everything is then rendered on the canvas.'
    ),
    React__default.createElement(
      'p',
      null,
      "Each element is interactive and fun to play with. Though there is some theory behind each element, but it's written in a very concise and compressed way. The scope for the mathematics used behind the animations is also kept minimal so as to make it easier to grasp the core concepts without much cognitive load, which means less symbolic expressions."
    ),
    React__default.createElement(
      'p',
      null,
      'Source code for the tools and animations used in the simulator can be found',
      ' ',
      React__default.createElement(
        'a',
        {
          className: 'github-link',
          href: 'https://github.com/nitin42/Elements-of-physics',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'here'
      ),
      '.'
    ),
    React__default.createElement('p', null, 'I hope you enjoy!'),
    React__default.createElement(
      'div',
      { style: _extends({}, styles, { marginTop: '60px' }) },
      React__default.createElement(
        StyledLink,
        { to: 'layout', width: '8%' },
        'Start'
      )
    )
  )
}

export { Layout, Home }
