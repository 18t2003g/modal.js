/*==============================================
*  modal.js Version 0.1
*  The MIT Licence
*  (C) 2021 Kenta Asahi
*  https://github.com/18t2003g/modal.js
*=============================================*/

//shadow
const shadowDiv = document.createElement("div");
shadowDiv.setAttribute("id", "modal-js-shadow");
shadowDiv.style.zIndex = "254";
shadowDiv.style.position = "fixed";
shadowDiv.style.visibility = "hidden";
shadowDiv.style.position = "fixed";
shadowDiv.style.top = "0";
shadowDiv.style.left = "0";
shadowDiv.style.width = "100vw";
shadowDiv.style.height = "100vh";
shadowDiv.style.backgroundColor = "#000";
shadowDiv.style.opacity = "0.5";


class Modal{
    constructor(obj){
        this.DOMobj = obj;
        this.DOMobj.style.visibility = "hidden";
        this.DOMobj.style.position = "fixed";
        this.DOMobj.style.zIndex = "255";
        //top leftの初期値を中央に指定してメンバ変数で変更可能に
        this.DOMobj.style.left = "calc((100vw - " + this.DOMobj.offsetWidth + "px) / 2)";
        this.DOMobj.style.top = "calc((100vh - " + this.DOMobj.offsetHeight + "px) / 2)";
        this.shadow = false;
    }

    //show modal window
    show(){
        if(document.getElementById("modal-js-shadow") == null){
            document.body.appendChild(shadowDiv);
        }
        if(this.shadow == true){
            document.getElementById("modal-js-shadow").style.visibility = "visible";
        }
        this.DOMobj.style.visibility = "visible";
    }

    //hide modal window
    hide(){
        if(this.shadow == true){
            document.getElementById("modal-js-shadow").style.visibility = "hidden";
        }
        this.DOMobj.style.visibility = "hidden";
    }
}