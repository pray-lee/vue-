### vue实战读书笔记

----
#### `v-pre` 不编译花括号里的内容

---
#### `v-cloak` 配合display:none解决页面闪动及出现花括号的问题

---
#### `v-once`  只渲染一次，包括元素或者组件的所有子节点,首次渲染后不再随数据的变化而发生变化,将被视为静态内容

---
#### `v-show`  不能在template标签上使用

---
#### `set` 是Vue类的方法，`$set` 是vue实例的方法

--- 
#### `$event` 用于访问原生事件

---

#### `v-model.lazy` 从input事件转成change事件

---
#### `v-model.number` 将输入内容转成Number类型

---
#### `v-model.trim` 去掉首尾空格

---
#### 由于收到html的限制，有些标签必须使用原生标签的时候，可以给他绑定一个属性：`is='my-component'`,这样就成功挂载了组件

---
#### 组件的data为什么要返回一个单独的对象？因为这样的话每个组件的数据都是独立的，不受其他影响，也不会影响其他组件。

