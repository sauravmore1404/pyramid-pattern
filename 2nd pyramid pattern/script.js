const pyaramidPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=0;i<num;i++){
      for(let j=num;j>i;j--){ string += " * " ;}
      for(let j=0;j<2*i;j++){
        string += " - ";
      }
      for(let j=num;j>i;j--){ string += " * " ;}
      string += "<br/>";
    }
    return document.getElementById("demo").innerHTML=string
  }