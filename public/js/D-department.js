
//翻页器
layui.use('laypage', function(){
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
        elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
        ,count: 50 //数据总数，从服务端得到
    });
});

/*--------- 表格---------*/
/*表格渲染*/
var table = [{
    department:'宣传',
    name:'张撒好',
    sex:'女',
    age:24,
    position:'员工',
    tel:'13900000000',
    time:'2018-05-09',
},{
    department:'后勤',
    name:'李四',
    sex:'男',
    age:26,
    position:'员工',
    tel:'13900001111',
    time:'2018-05-09',
},{
    department:'后勤',
    name:'李四',
    sex:'男',
    age:26,
    position:'员工',
    tel:'13900001111',
    time:'2018-05-08',
},{
    department:'后勤',
    name:'李四',
    sex:'男',
    age:26,
    position:'员工',
    tel:'13900001111',
    time:'2018-05-08',
}];

var D_table = $('.D-table');

table.forEach(function (v,i) {
    var D_oTr = document.createElement('tr');
    //abf.innerHTML = '';
    D_oTr.innerHTML = `<td class="D-number"></td>
                        <td>${v.department}</td>
                        <td class="D-tName">${v.name}</td>
                        <td>${v.sex}</td>
                        <td>${v.age}</td>
                        <td>${v.position}</td>
                        <td><a class="D-tel" href="">${v.tel}</a></td>
                        <td>${v.time}</td>
                        <td class="D-modify"><i class="layui-icon layui-icon-edit D-i1"></i> &#12288<i class="layui-icon layui-icon-delete D-i2"></i></td>`;
    D_table.append(D_oTr);

});
//序号
function D_indx() {
    $('table tr').each(function (i) {
        if(i!=0){
            //console.log(this);
            $(this.children[0]).text(i)
        }
    })
    // for(var i = 1;i<len;i++){
    //     $('table tr:eq('+i+') td:first').text(i);
    // }
}
D_indx();

//表格功能
class Form_4 {
    constructor(el) {
        this.el = document.querySelector(el);
        this.th = [...this.el.querySelectorAll("th")].map(function (i) {
            return i.innerText
        }).slice(1,);
        this.content_text = [];
        this.content_dom = [];
        this.content_map = new Map;
        this.html = `
            <div id="mask">
                <a class="close" href="#" title="关闭">×</a>
            <form action="#" id="form">
        `;
        this.form_dom = document.createElement("div");
        let that = this;
        this.el.onclick = function (event) {
            if (event.target.classList.contains("layui-icon-edit")) {
                that.form_dom.innerHTML = " ";
                that.td = event.path[2];
                that.content_dom = [...event.path[2].querySelectorAll("td")].slice(1,);
                for (let text of that.content_dom) {
                    //console.log(text);
                    that.content_text.push(text.innerText)
                }

                for (let i = 0; i < that.content_text.length - 1; i++) {
                    that.content_map.set(that.th[i], that.content_text[i]);
                    that.html +=
                        `
                        <div>
                            <span>${that.th[i]}<p></p></span><input type="text" value="${that.content_text[i]}">
                        </div>
                    `
                }
                //console.log(that.th);
                that.html += `
                            <button id="save">保存</button>
                            <button id="cancel">取消</button>
                        </form>
                    </div>
                `;
                that.form_dom.innerHTML = that.html;
                document.body.append(that.form_dom);
                that.html =
                    `
                        <div id="mask">
                            <a class="close" href="#" title="关闭">×</a>
                                <form action="#" id="form">
                    `;
                that.content_text = [];
                that.form_dom.querySelector("#save").onclick = function () {
                    if (that.change()) {
                        that.form_dom.innerHTML = " ";
                        this.onclick = null
                    }
                };
                that.form_dom.querySelector("#cancel").onclick = function () {
                    that.form_dom.innerHTML = " ";
                    this.onclick = null
                };
            }
            if (event.target.classList.contains("layui-icon-delete")) {
                that.form_dom.innerHTML = " ";
                if (confirm("确认删除记录吗？")) {
                    event.path[2].remove();
                    D_indx();
                }
            }
        }
        // this.addnew(".D-btn")
    }
    change() {
        let ok = true;
        let check = this.form_dom.querySelectorAll("input");
        for (let i = 0; i < check.length; i++) {
            if (this[this.th[i]]) {
                if (this[this.th[i]].func(check[i].value)) {
                    // this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false
                }
                else {
                    this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false;
                    ok = false
                }
            }
            // this.td.children[i].innerHTML = check[i].value
        }
        //console.log(ok);
        if (ok == true) {
            for (let i = 0; i < check.length; i++) {
                this.td.children[i+1].innerHTML = check[i].value
            }
        }
        return ok
    }
    addcheck(obj) {
        Object.assign(this, obj);
        return this
    }
    addnew(test) {
        let that = this;
        document.querySelector(test||"#test").onclick = function(){
            that.form_dom.innerHTML = " ";
            that.html =
                `
            <div id="mask">
                <a class="close" href="#" title="关闭">×</a>
            <form action="#" id="form">
        `;
            for (let i = 0; i < that.th.length - 1; i++) {
                that.html +=
                    `
                    <div>
                        <span>${that.th[i]}<p></p></span><input type="text" value="">
                    </div>
                `
            }
            that.html +=
                `
            <button id="save">保存</button>
            <button id="cancel">取消</button>
            </form>
            </div>
            `
            that.form_dom.innerHTML = that.html;
            document.body.append(that.form_dom);
            that.form_dom.querySelector("#save").onclick = function () {
                if (that.save()) {
                    that.form_dom.innerHTML = " ";
                    that.html =
                        `
                    <div id="mask">
                        <a class="close" href="#" title="关闭">×</a>
                    <form action="#" id="form">
                `;
                    this.onclick = null
                }
            };
            function close() {
                that.form_dom.innerHTML = " ";
                that.html =
                    `
                <div id="mask">
                    <a class="close" href="#" title="关闭">×</a>
                <form action="#" id="form">
            `;
                this.onclick = null
            }
            that.form_dom.querySelector("#cancel").onclick = function () {
                close()
            };
            that.form_dom.querySelector(".close").onclick = function () {
                close()
            };
        };
        return this
    }
    save(){
        let check = this.form_dom.querySelectorAll("input");
        let ok = true;
        let td = "<td></td>";
        for (let i = 0; i < check.length; i++) {
            if (this[this.th[i]]) {
                if (this[this.th[i]].func(check[i].value)) {
                    td += `<td>${check[i].value}</td>`
                    // this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false
                }
                else {
                    this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false;
                    ok = false
                }
            }
            // this.td.children[i].innerHTML = check[i].value
        }
        if(ok){
            td += `
            <td class="D-modify"><i class="layui-icon layui-icon-edit D-i1"></i> &#12288<i class="layui-icon layui-icon-delete D-i2"></i></td>\`
        `;
            let a = document.createElement("tr");
            a.innerHTML = td;

            this.el.querySelector("tbody").append(a);
        }
        D_indx();
        return ok
    }
    search(input,btn,color){
        let that = this;
        let trlist = [];
        document.querySelector(btn).addEventListener("click", function(){
            let value = document.querySelector(input).value;
            trlist = [...that.el.querySelectorAll("tr")].slice(1);
            if(!value.trim()){
                for(let tr of trlist){
                    tr.style.display = '';
                    tr.style.color = ""
                }
                return
            }
            for(let tr of trlist){
                let ok = false;
                for( let i=0;i<tr.children.length; i++){
                    // console.log(tr.children[i].innerText.indexOf(value))
                    if(tr.children[i].innerText.indexOf(value) != -1){
                        ok = true;
                        break
                    }
                }
                if(ok){
                    tr.style.display = '';
                    tr.style.color = color||"orange"
                }else{
                    tr.style.display = 'none'
                }
            }
        });
        return this
    }
}
new Form_4(".D-table").addnew("#test").addcheck({
    // "序号":
    //     {
    //         func:function (str) {
    //             if(str.trim()){
    //
    //                 return true
    //             }
    //             else {
    //                 return false
    //             }
    //         },
    //         ok: "ok",
    //         false: "不为空",
    //     },
    "部门":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
    "姓名":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
    "性别":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
    "年龄":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
    "职位":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
    "联系电话":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
    "创建时间":
        {
            func:function (str) {
                if(str.trim()){
                    return true
                }
                else {
                    return false
                }
            },
            ok: "ok",
            false: "不为空",
        },
}).search(".input",".check");


