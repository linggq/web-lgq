


var btn = document.getElementById("btn");
var hotLi = document.getElementsByClassName('hot_Part');
    btn.onclick = function(){
        if(hotLi[0].style.display =='block'){
           hotLi[0].style.display="none";
           hotLi[1].style.display="none";
           hotLi[2].style.display="none";
        }else{
           hotLi[0].style.display="block";
           hotLi[1].style.display="block";
           hotLi[2].style.display="block";
        }
   };




    var add = document.getElementById("content_nav");
    var aLi =add.getElementsByTagName("li")
    for(var i = 0 ; i <aLi.length; i++){
        aLi[i].onclick =function(){
            for (i = 0; i < aLi.length; i++) aLi[i].className = aLi[i].className.replace(/\s?cnli/,"");this.className += "cnli";
        };
    }
