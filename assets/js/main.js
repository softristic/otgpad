// By M SALMAN CHEEMA //
var input,copyBtn,clearBtn;input=document.getElementById("input");copyBtn=document.getElementById("copyBtn");clearBtn=document.getElementById("clearBtn");window.addEventListener("load",function(){input.value=localStorage.getItem("inputVal");})
input.addEventListener("input",function(){localStorage.setItem("inputVal",input.value);})
copyBtn.addEventListener("click",function(){input.select();document.execCommand("copy");this.innerHTML="Copied";})
copyBtn.addEventListener("mouseout",function(){this.innerHTML="Copy";})
clearBtn.addEventListener("click",function(){if(input.value==""){return false;}if(confirm("Are you sure you want to clear text ?")==true){input.value="";localStorage.clear();}})