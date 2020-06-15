 /* header function */
 window.onload = function() {
     var btn = document.getElementById('header');

     function openMenu() {
         var box = document.getElementById('header-menu');
         if (box.style.display == 'none') {
             box.style.display = 'block';
         } else {
             box.style.display = 'none';
         }
     }

     btn.addEventListener('click', openMenu, false);
 }
