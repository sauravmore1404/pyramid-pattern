const pyaramidPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=1;i<=num;i++){
      for(let j=0;j<i;j++){string += " * ";}
      for(let j=0;j<2*(num-i);j++){string += " _ ";}
      for(let j=0;j<i;j++){string += " * ";}
      string += "<br/>"
    }
    return document.getElementById("demo").innerHTML=string
  }