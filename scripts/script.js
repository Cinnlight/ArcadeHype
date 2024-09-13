<script>
        window.onscroll = function () {
          const backToTop = document.getElementById("back-to-top");
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTop.style.display = "block";
          } else {
            backToTop.style.display = "none";
          }
        };
    
        document.getElementById("back-to-top").addEventListener("click", function (e) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
      </script>
