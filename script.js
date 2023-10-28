const pyaramidPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=0;i<num;i++){
      for(let j=0;j<num-1-i;j++){string += "&nbsp"+"&nbsp";}
      for(let j=0;j<=i;j++){
          string += "*" +  "&nbsp"+"&nbsp"+"&nbsp";
      }
      string += "<br/>";
    }
    return document.getElementById("demo").innerHTML=string
  }