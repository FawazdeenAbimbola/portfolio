const showMenu = () => {
    document.querySelector('.responsive-navlinks').style.width = "100%";
    }
    
    const closeMenu = () => {
        document.querySelector('.responsive-navlinks').style.width = "0%";
        }
        
       
        function myLoader(){
            var timeout = setTimeout(showPage, 4000);
        }
        function showPage(){
            document.querySelector('#loader').style.display = 'none';
            document.querySelector('.site-header').style.display = 'block';

        }
     var i = 0;
      var text ='                 Fawaz Ogunleye';
      var speed = 200;

        function introText(){
            if(i < text.length) {
                document.getElementById("name").innerHTML += text.charAt(i);
            i++;
            }
            setTimeout(introText, speed);
        }
       
        