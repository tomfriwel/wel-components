// components/searchbar/searchbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        active:false,
        value:'',
        placeholder:'搜索'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        activeHandler: function() {
            this.setData({
                active: !this.data.active
            })
        },
        searchHandler: function (e) {

        },
        clearHandler: function (e) {

        },
    }
})
