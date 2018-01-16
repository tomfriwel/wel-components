// components/wtable-view/wtable-view.js
Component({
    /**
     * 组件的属性列表
     */
    relations:{
        '../wcell/wcell':{
            type: 'child', // 关联的目标节点应为子节点
            linked: function (target) {
                // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
                console.log(target)
                console.log('get all cell')
                // console.log(this)
                // console.log(this._getAllCell())
            },
            linkChanged: function (target) {
                // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
                console.log(12)
            },
            unlinked: function (target) {
                // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
                console.log(13)
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
        _getAllCell: function () {
            // console.log(this)
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
            var nodes = this.getRelationNodes('/components/wcell/wcell')

            return nodes
        }
    }
})
