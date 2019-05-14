class Form_4 {
    constructor(el) {
        this.el = document.querySelector(el)
        this.th = [...this.el.querySelectorAll("th")].map(function (i) {
            return i.innerText
        })
        this.content_text = []
        this.content_dom = []
        this.content_map = new Map
        this.html = `
                <div id="mask">
                    <a class="close" href="#">×</a>
                <form action="#" id="form">
            `
        this.form_dom = document.createElement("div")
        let that = this
        this.el.onclick = function (event) {
            if (event.target.classList.contains("layui-icon-edit")) {
                that.form_dom.innerHTML = " "
                that.td = event.path[2]
                that.content_dom = [...event.path[2].querySelectorAll("td")]
                for (let text of that.content_dom) {
                    console.log(text)
                    that.content_text.push(text.innerText)
                }

                for (let i = 0; i < that.content_text.length - 1; i++) {
                    that.content_map.set(that.th[i], that.content_text[i])
                    that.html +=
                        `
                            <div>
                                <span>${that.th[i]}<p></p></span><input type="text" value="${that.content_text[i]}">
                            </div>
                        `
                }
                console.log(that.th)
                that.html += `
                                <button id="save">保存</button>
                                <button id="cancel">取消</button>
                            </form>
                        </div>
                    `
                that.form_dom.innerHTML = that.html
                document.body.append(that.form_dom)
                that.html =
                    `
                            <div id="mask">
                                <a class="close" href="#">×</a>
                                    <form action="#" id="form">
                        `
                that.content_text = []
                that.form_dom.querySelector("#save").onclick = function () {
                    if (that.change()) {
                        that.form_dom.innerHTML = " "
                        this.onclick = null
                    }
                }
                that.form_dom.querySelector("#cancel").onclick = function () {
                    that.form_dom.innerHTML = " "
                    this.onclick = null
                }
            }
            if (event.target.classList.contains("layui-icon-delete")) {
                that.form_dom.innerHTML = " "
                if (confirm("确认删除记录吗？")) {
                    event.path[2].remove()
                }
            }
        }
    }
    change() {
        let ok = true
        let check = this.form_dom.querySelectorAll("input")
        for (let i = 0; i < check.length; i++) {
            if (this[this.th[i]]) {
                if (this[this.th[i]].func(check[i].value)) {
                    // this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false
                }
                else {
                    this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false
                    ok = false
                }
            }
            // this.td.children[i].innerHTML = check[i].value
        }
        console.log(ok)
        if (ok == true) {
            for (let i = 0; i < check.length; i++) {
                this.td.children[i].innerHTML = check[i].value
            }
        }
        return ok
    }
    addcheck(obj) {
        Object.assign(this, obj)
    }
    addnew(test) {
        let that = this
        document.querySelector(test||"#test").onclick = function(){
            that.form_dom.innerHTML = " "
            that.html = 
            `
                <div id="mask">
                    <a class="close" href="#">×</a>
                <form action="#" id="form">
            `
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
            that.form_dom.innerHTML = that.html
            document.body.append(that.form_dom)
            that.form_dom.querySelector("#save").onclick = function () {
                if (that.save()) {
                    that.form_dom.innerHTML = " "
                    that.html = 
                    `
                        <div id="mask">
                            <a class="close" href="#">×</a>
                        <form action="#" id="form">
                    `
                    this.onclick = null
                }
            }
            that.form_dom.querySelector("#cancel").onclick = function () {
                that.form_dom.innerHTML = " "
                that.html = 
                `
                    <div id="mask">
                        <a class="close" href="#">×</a>
                    <form action="#" id="form">
                `
                this.onclick = null
            }
        }
    }
    save(){
        let check = this.form_dom.querySelectorAll("input")
        let ok = true
        let td = ""
        for (let i = 0; i < check.length; i++) {
            if (this[this.th[i]]) {
                if (this[this.th[i]].func(check[i].value)) {
                    td += `<td>${check[i].value}</td>`
                    // this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false
                }
                else {
                    this.form_dom.querySelectorAll("p")[i].innerText = this[this.th[i]].false
                    ok = false
                }
            }
            // this.td.children[i].innerHTML = check[i].value
        }
        if(ok){
            td += `
                <td>
                <i class="layui-icon layui-icon-edit"></i>
                <i class="layui-icon layui-icon-delete"></i>
                </td>
            `
            let a = document.createElement("tr")
            a.innerHTML = td
            this.el.querySelector("tbody").append(a)
        }
        return ok
    }
}