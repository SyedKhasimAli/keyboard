// $(document).ready(function(){
//     $("button").click(function(){  
//         var i=$(this);

//         var a=$(this).text().toLowerCase();
        
//        $("textarea").text(a)
//      })     
// })
document.getElementById("disp").style.textTransform ="toLowerCase()"
function valuek(e){ 
    console.log(e.value)
    if(e.value=="Enter"){
      e.value ="\n";
    }
    else if(e.value=="Tab"){
        e.value="    ";

    }else if(e.value=="shift"){


    }else if(e.value=="space"){
        e.value=" ";
    }
    disp.value+=e.value;
}
function back(){
    var bs=document.getElementById("disp").value;
    var len=bs.length-1;
    
    document.getElementById("disp").value=bs.slice(0,len);
}
function caps(){
    document.getElementsById("disp").style.textTransform="toUpperCase()";
}



