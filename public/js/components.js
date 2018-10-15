/**
 * tab组件
 * @param {Object} opts
 * @export
 * @class Tab
 */
function Tab (options) {
  const def = {
    boxId: '',
    active: 0,
    activeClass: 'tab-active'
  }

  const opts = this.opts = Object.assign({}, def, options)
  const box = this.box = document.getElementById(opts.boxId)

  this.head = box.querySelectorAll('.tab-head')
  this.body = box.querySelectorAll('.tab-body')

  this.hideBody()
  this.active(opts.active)
  this.events()
}

Tab.prototype.active = function (active) {
  let cur = this.current
  if (typeof cur === 'number') {
    this.head[cur].classList.remove(this.opts.activeClass)
    this.body[cur].style.display = 'none'
  }

  this.head[active].classList.add(this.opts.activeClass)
  this.body[active].style.display = 'block'
  this.current = active
}

Tab.prototype.hideBody = function () {
  for (let i = 0, len = this.body.length; i < len; i++) {
    this.body[i].style.display = 'none'
  }
}

Tab.prototype.events = function () {
  const self = this
  for (let i = 0, len = this.head.length; i < len; i++) {
    const head = this.head[i]
    head.index = i
    head.addEventListener('click', function () {
      self.active(head.index)
    })
  }
}