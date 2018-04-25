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
            console.log(e)
        },
        inputHandler: function (e) {
            this.setData({
                value: e.detail.value
            })
        },
        clearHandler: function (e) {
            this.setData({
                value:'',
                active: false
            })
        },
        focusHandler: function (e) {
            this.setData({
                active: true
            })
        },
        blurHandler:function(e) {
            let value = e.detail.value

            if(value=='') {
                this.setData({
                    value:value,
                    active:false
                })
            }
        }
    }
})
