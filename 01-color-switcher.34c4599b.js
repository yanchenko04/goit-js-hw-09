!function(){var t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},n=null;t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){t.bodyEl.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n)})),t.btnStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.34c4599b.js.map