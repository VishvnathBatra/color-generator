document.getElementById("gen-btn").addEventListener("click", function() {
    let outputColor = document.getElementById("output-color").querySelector("span");
    let output = document.getElementById("output");
  
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  

    outputColor.style.backgroundColor = randomColor;
    output.value = randomColor;
  });
  
  document.getElementById("copy-btn").addEventListener("click", function() {
    let output = document.getElementById("output");
    
   
    output.select();
    document.execCommand("copy");
  });
  