var html = document.getElementById("html");
  var code = document.getElementById("code").contentWindow.document;
 var button = document.getElementById("run")

 
 button.onclick = function(compile) {
    code.open();
    code.writeln(
      html.value 
        
    );
    code.close();
  };
  

