// 阻止按钮重复提交
import Vue from 'vue'

Vue.directive('stopBtnRepeat', {
  bind: function (el, binding) {
    function clickHandler (e) {
      if (el.contains(e.target)) {
        if (!el.disabled) {
          el.disabled = true
          setTimeout(() => {
            el.disabled = false
          }, binding.value || 3000)
        }
        return false
      }
    }
    el.bffClick = clickHandler
    document.addEventListener('click', clickHandler)
  },
  unbind (el) {
    document.removeEventListener('click', el.bffClick)
    delete el.bffClick
  }
})
