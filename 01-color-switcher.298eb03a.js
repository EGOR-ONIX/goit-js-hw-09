const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e;function n(t){document.body.style.backgroundColor=String(t)}function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.stopBtn.setAttribute("disabled",!0),t.startBtn.addEventListener("click",(function(o){o.currentTarget.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),n(r()),e=setInterval((()=>{n(r())}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.298eb03a.js.map
