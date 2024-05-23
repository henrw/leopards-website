let hoverProfileId = null;
let hoverApproachId = null;
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready");

  document.querySelectorAll("a").forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        var targetElement = document.querySelector(hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
          window.location.hash = hash;
        }
      }
    });
  });

  document.querySelectorAll('.hover-profile').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      // console.log("Mouse entered");

      document.querySelectorAll('.hover-profile').forEach(function (el) {
        el.classList.remove('gray-out');
      });

      document.getElementById("none-desc-p").style.display = 'none';

      if (hoverProfileId !== null) {
        var p = document.getElementById(hoverProfileId + "-p");
        if (p) {
          p.style.display = 'none';
        }
      }

      hoverProfileId = this.id
      var p = document.getElementById(this.id + "-p");
      if (p) {
        p.style.display = 'block';
      }

      document.querySelectorAll('.hover-profile').forEach(function (el) {
        if (el !== element) {
          el.classList.add('gray-out');
        }
      });

    });

    element.addEventListener('mouseleave', function () {
      // console.log("Mouse left");
      var p = document.getElementById(this.id + "-p");
      if (p) {
        p.style.display = 'none';
      }
      document.getElementById("none-desc-p").style.display = 'block';
      document.querySelectorAll('.hover-profile').forEach(function (el) {
        el.classList.remove('gray-out');
      });
    });
  });

  document.getElementById("team").addEventListener('mouseleave', function () {

    document.getElementById("none-desc-p").style.display = 'block';

    document.querySelectorAll('.hover-profile').forEach(function (el) {
      el.classList.remove('gray-out');
      var p = document.getElementById(this.id + "-p");
      if (p) {
        p.style.display = 'none';
      }
    });
  });

  // Approach
  document.querySelectorAll('.hover-approach').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      console.log("Mouse entered");

      document.getElementById("approach-default").style.display = 'none';

      if (hoverApproachId !== null) {
        var p = document.getElementById("approach-"+hoverApproachId);
        if (p) {
          p.style.display = 'none';
        }
      }

      hoverApproachId = this.id
      console.log("approach-"+hoverApproachId)

      var p = document.getElementById("approach-"+this.id);
      if (p) {
        p.style.display = 'block';
      }

      

    });

    // element.addEventListener('mouseleave', function () {
    //   console.log("Mouse left");
    //   var p = document.getElementById("approach-"+this.id);
    //   if (p) {
    //     p.style.display = 'none';
    //   }
    //   document.getElementById("approach-default").style.display = 'block';
      
    // });
  });

  document.getElementById("approach").addEventListener('mouseleave', function () {

    document.getElementById("approach-default").style.display = 'block';

    document.querySelectorAll('.hover-approach').forEach(function (el) {
      var p = document.getElementById("approach-"+this.id);
      if (p) {
        p.style.display = 'none';
      }
    });
  });
  
});