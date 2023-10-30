const pyaramidPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=0;i<num;i++){
      for(let j=num;j>i;j--){ string += "*" +  "&nbsp"+"&nbsp";}
      for(let j=1;j<2*i;j++){
        if(j>=i){string += "&nbsp"+"&nbsp" + "&nbsp"+"&nbsp"+"&nbsp";}
      }
      for(let j=0;j<num;j++){if(j>=i){ string += "*" +  "&nbsp"+"&nbsp";}
                            else{string += "&nbsp"+"&nbsp"}}
      string += "<br/>";
    }
    return document.getElementById("demo").innerHTML=string
  }