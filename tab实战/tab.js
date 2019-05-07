Vue.component('tabs', {
  template: `
    <div class="tabs">
      <div class="tabs-bar">
         <!--标签页标题-->
         <div :class="tabCls(item)" v-for="(item, index) in navLists" @click="handleChange(index)">{{item.label}}</div>
      </div>
      <div class="tabs-content">
        <slot>
        <!--这里放pane组件-->
        </slot> 
      </div>
    </div>
  `,
  props: {
    value: {
      type: [String, Number]
    }
  },
  data: function () {
    return {
      // 用于渲染tabs的标题
      currentValue: this.value,
      navLists: []
    }
  },
  methods: {
    tabCls (item) {
      return [ 'tabs-tab', {
        'tabs-tab-active': item.name === this.currentValue
      }]
    },
    handleChange (index) {
      let nav = this.navLists[index]
      let name = nav.name
      this.currentValue = name
      this.$emit('input', name)
    },
    getTabs () {
      return this.$children.filter(item => {
        return item.$options.name === 'pane'
      })
    },
    updateNav () {
      this.navLists = []
      this.getTabs().forEach((item, index) => {
        this.navLists.push({
          label: item.label,
          name: item.name || index
        })
        if (index === 0) {
          if (!this.currentValue) {
            this.currentValue = item.name || index
          }
        }
      })
      this.updateStatus()
    },
    updateStatus () {
      let tabs = this.getTabs()
      tabs.forEach(item => {
        return item.show = item.name === this.currentValue
      })
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue () {
      // 当前选中的tab发生变化时,更新Pane的显示状态
      this.updateStatus()
    }
  },
})
