window.onload=function(){
	var oTop=document.getElementById("goTop"),
	    timer=null,
	    owarp=document.getElementById("warp"),
	    otitle=document.getElementsByTagName("title")[0];
	var oClientHeight=(document.documentElement.clientHeight||document.body.clientHeight)*2;   
	window.onscroll=function(){
	  var oScroll=document.body.scrollTop||document.documentElement.scrollTop;
	  if (oScroll> oClientHeight){
	  	 oTop.style.display="block";
	  	 oTop.onclick=function(){
      if (document.body.scrollTop) {
      	  timer=setInterval(function(){
      	  		document.body.scrollTop-=100;
          	if (document.body.scrollTop==0) {
          		clearInterval(timer);
          	}
      	  },20);
      }  
     else{
     	timer=setInterval(function(){
     	document.documentElement.scrollTop-=100;
          	if (document.documentElement.scrollTop==0) {
          		clearInterval(timer);
          	}
       },25);
     }
     
 }  
	 }else if(oScroll<oClientHeight){
	  	 oTop.style.display="none";
	  }
    
	};
	   
};
function getClass(parent,cls){
    var oparent=document.getElementById(parent),
        Atarget=oparent.getElementsByTagName("*"),
        Arr=[];
        for (var i = 0; i < Atarget.length; i++) {
        	if (Atarget[i].className==cls) {
                  Arr.push(Atarget[i]);
        	}      
        }
        return Arr;
}
