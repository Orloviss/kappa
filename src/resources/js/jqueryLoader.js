;(function(){
    function id(v){return document.getElementById(v); }
    function loadbar() {
      var ovrl = id("overlay"),
          prog = id("progress"),
          stat = id("progstat"),
          logoss = id("logoss"),
           left = id("left_pseudo"),
          right = id("right_pseudo"),
          header = id("header_anim"),

          
          third_part = id("third-part-svg"),
          sec_part = id("second_part-svg"),
          img = document.images,
          c = 0;
          tot = img.length;
  console.log(tot)
      function imgLoaded(){
        c += 1;
        var perc = ((100/tot*c) << 0) +"%";
         var percclean = ((100/tot*c) << 0);
         if (window.innerWidth > 520) {
   var percprog = ((100/tot*c) - 4 << 0) +"%";
}
   if (window.innerWidth < 519) {
   var percprog = ((100/tot*c) - 12 << 0) +"%";
}
        
        var secpart = ((100/tot*c)*1.32 - 132 << 0);
        var percs = ((100/tot*c)*1.32 - 132 << 0) +"px";
        prog.style.width = perc;
        console.log(percclean)
        stat.style.left = percprog;
        stat.innerHTML = ""+ perc;
       
          setTimeout(function(){ 
            logoss.classList.add("animate_svg")  
        }, 0);
       
          setTimeout(function(){ 
           sec_part.classList.add("animate_svg_second")   
        }, 500);
         setTimeout(function(){ 
            third_part.classList.add("animate_svg_third")
            ovrl.style.opacity = 0;
        }, 1000);
       
        if(c===tot) return doneLoading();
      }
      function doneLoading(){
         
        setTimeout(function(){ 
            if(left){

           
            left.classList.add('_anim');
          right.classList.add('_anim');
          header.classList.add('_anim');
        }
     
          ovrl.style.display = "none";
        }, 1200);
      }
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());