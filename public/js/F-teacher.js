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
            if (str.trim()) {

                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
    "班级": {
        func: function (str) {
            if (str.trim()) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
    "教师姓名": {
        func: function (str) {
            if (str.trim()) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
    "性别": {
        func: function (str) {
            if (str.trim()) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
    "编号": {
        func: function (str) {
            if (str.trim()) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
    "创建人": {
        func: function (str) {
            if (str.trim()) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
    "创建日期": {
        func: function (str) {
            if (str.trim()) {
                return true
            }
            else {
                return false
            }
        },
        ok: "ok",
        false: "空字段"
    },
}).search("#input1", "#check","green")