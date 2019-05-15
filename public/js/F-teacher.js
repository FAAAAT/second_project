layui.use('laypage', function () {
    var laypage = layui.laypage;
    laypage.render({
        elem: 'test1'
        , count: 50
    });
});
let a = new Form_4(".layui-table").addnew("#F-add").addcheck({
    "序号": {
        func: function (str) {
            var reg = /^[1-9]+$/;
            // console.log(reg.test(str.value))
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "例：10"
    },
    "班级": {
        func: function (str) {
            var reg = /^20[0-9]{1}[0-9]{1}$/;
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "例：2009"
    },
    "教师姓名": {
        func: function (str) {
            var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "×"
    },
    "性别": {
        func: function (str) {
            var reg=/^(男|女)$/;
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "例：男"
    },
    "编号": {
        func: function (str) {
            var reg=/^000[1-9]{1,5}$/;
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "例：000***"
    },
    "创建人": {
        func: function (str) {
            var reg=/^admin$/;
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "填写：admin"
    },
    "创建日期": {
        func: function (str) {
            var reg=/^\d{4}-\d{1,2}-\d{1,2}/;
            if (reg.test(str)) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "例：2000-1-1"
    },
}).search("#input1", "#check","green")