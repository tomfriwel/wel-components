// components/wel-cell.js
Component({
    /**
     * 组件的属性列表
     */
    relations: {
        '../wtable-view/wtable-view': {
            type: 'parent', // 关联的目标节点应为子节点
            linked: function (target) {
                // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
                console.log(target)
            },
            linkChanged: function (target) {
                // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
                console.log(22)
            },
            unlinked: function (target) {
                // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
                console.log(23)
            }
        }
    },
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
