; (function () {
  function id(v) { return document.getElementById(v); }
  function loadbar() {

    child = id("child"),
first_about = id("about__image"),
sec_about = id("about__image-sec")
clinic = id("company__img_sec"),
clinic_sec = id("company__img"),
      setTimeout(function () {
        console.log('works')
    

           if(clinic) {
          clinic.classList.add('_anim')
          clinic_sec.classList.add('_anim')
           }
        if (child) {

       
          child.classList.add('hidden_preloader');
          if (first_about) {  first_about.classList.add('_anim');
          sec_about.classList.add('_anim');
        }
      
        }

      }, 1200);
   
 
  }



  document.addEventListener('DOMContentLoaded', loadbar, false);
}());