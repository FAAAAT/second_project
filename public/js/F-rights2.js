window.viewObj = {
    tbData: [{
        tempId: new Date().valueOf(),
        type: 2,
        name: '',
        state: 1
    }],
    typeData: [
        { id: 1, name: '园长' },
        { id: 2, name: '班主任' },
        { id: 3, name: '后勤' },
        { id: 4, name: '保安' }
    ],
    renderSelectOptions: function (data, settings) {
        settings = settings || {};
        var valueField = settings.valueField || 'value',
            textField = settings.textField || 'text',
            selectedValue = settings.selectedValue || "";
        var html = [];
        for (var i = 0, item; i < data.length; i++) {
            item = data[i];
            html.push('<option value="');
            html.push(item[valueField]);
            html.push('"');
            if (selectedValue && item[valueField] == selectedValue) {
                html.push(' selected="selected"');
            }
            html.push('>');
            html.push(item[textField]);
            html.push('</option>');
        }
        return html.join('');
    }
};

//layui 模块化引用
layui.use(['jquery', 'table', 'layer'], function () {
    var $ = layui.$, table = layui.table, form = layui.form, layer = layui.layer;

    //数据表格实例化			
    var tbWidth = $("#tableRes").width();
    var layTableId = "layTable";
    var tableIns = table.render({
        elem: '#dataTable',
        id: layTableId,
        data: viewObj.tbData,
        width: tbWidth,
        page: true,
        loading: true,
        even: false, //不开启隔行背景
        cols: [[
            { title: '序号', type: 'numbers' },
            {
                field: 'type', title: '职位（position）', templet: function (d) {
                    var options = viewObj.renderSelectOptions(viewObj.typeData, { valueField: "id", textField: "name", selectedValue: d.type });
                    return '<a lay-event="type"></a><select name="type" lay-filter="type"><option value="">请选择职位</option>' + options + '</select>';
                }
            },
            { field: 'name1', title: '姓名（name）', edit: 'text' },
            {
                field: 'state', title: '性别（sex）', event: 'state', templet: function (d) {
                    var html = ['<input type="checkbox" name="state" lay-skin="switch" lay-text="男|女"'];
                    html.push(d.state > 0 ? ' checked' : '');
                    html.push('>');
                    return html.join('');
                }
            },
            { field: 'name2', title: '年龄（age）', edit: 'text' },
            { field: 'name3', title: '编号（number）', edit: 'text' },
            { field: 'name4', title: '地址（address）', edit: 'text' },
            {
                field: 'state', title: '是否启用（state）', event: 'state', templet: function (d) {
                    var html = ['<input type="checkbox" name="state" lay-skin="switch" lay-text="是|否"'];
                    html.push(d.state > 0 ? ' checked' : '');
                    html.push('>');
                    return html.join('');
                }
            },
            {
                field: 'tempId', title: '操作', templet: function (d) {
                    return '<a class="layui-btn layui-btn-xs layui-btn-danger" lay-event="del" lay-id="' + d.tempId + '"><i class="layui-icon layui-icon-delete"></i>移除</a>';
                }
            }
        ]],
        done: function (res, curr, count) {
            viewObj.tbData = res.data;
        }
    });

    //定义事件集合
    var active = {
        addRow: function () {	//添加一行
            var oldData = table.cache[layTableId];
            console.log(oldData);
            var newRow = { tempId: new Date().valueOf(), type: null, name: '未填写', state: 0 };
            oldData.push(newRow);
            tableIns.reload({
                data: oldData
            });
        },
        updateRow: function (obj) {
            var oldData = table.cache[layTableId];
            console.log(oldData);
            for (var i = 0, row; i < oldData.length; i++) {
                row = oldData[i];
                if (row.tempId == obj.tempId) {
                    $.extend(oldData[i], obj);
                    return;
                }
            }
            tableIns.reload({
                data: oldData
            });
        },
        removeEmptyTableCache: function () {
            var oldData = table.cache[layTableId];
            for (var i = 0, row; i < oldData.length; i++) {
                row = oldData[i];
                if (!row || !row.tempId) {
                    oldData.splice(i, 1);    //删除一项
                }
                continue;
            }
            tableIns.reload({
                data: oldData
            });
        },
        save: function () {
            var oldData = table.cache[layTableId];
            console.log(oldData);
            for (var i = 0, row; i < oldData.length; i++) {
                row = oldData[i];
                if (!row.type) {
                    layer.msg("检查每一行，请选择职位！", { icon: 5 }); //提示
                    return;
                }
            }
            document.getElementById("jsonResult").innerHTML = JSON.stringify(table.cache[layTableId], null, 2);	//使用JSON.stringify() 格式化输出JSON字符串		
        }
    }

    //激活事件
    var activeByType = function (type, arg) {
        if (arguments.length === 2) {
            active[type] ? active[type].call(this, arg) : '';
        } else {
            active[type] ? active[type].call(this) : '';
        }
    }

    //注册按钮事件
    $('.layui-btn[data-type]').on('click', function () {
        var type = $(this).data('type');
        activeByType(type);
    });

    //监听select下拉选中事件
    form.on('select(type)', function (data) {
        var elem = data.elem; //得到select原始DOM对象
        $(elem).prev("a[lay-event='type']").trigger("click");
    });

    //监听工具条
    table.on('tool(dataTable)', function (obj) {
        var data = obj.data, event = obj.event, tr = obj.tr; //获得当前行 tr 的DOM对象;
        console.log(data);
        switch (event) {
            case "type":
                //console.log(data);
                var select = tr.find("select[name='type']");
                if (select) {
                    var selectedVal = select.val();
                    if (!selectedVal) {
                        layer.tips("填写未完善", select.next('.layui-form-select'), { tips: [3, '#FF5722'] }); //吸附提示
                    }
                    console.log(selectedVal);
                    $.extend(obj.data, { 'type': selectedVal });
                    activeByType('updateRow', obj.data);	//更新行记录对象
                }
                break;
            case "state":
                var stateVal = tr.find("input[name='state']").prop('checked') ? 1 : 0;
                $.extend(obj.data, { 'state': stateVal })
                activeByType('updateRow', obj.data);	//更新行记录对象
                break;
            case "del":
                layer.confirm('真的删除行么？', function (index) {
                    obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                    layer.close(index);
                    activeByType('removeEmptyTableCache');
                });
                break;
        }
    });
});