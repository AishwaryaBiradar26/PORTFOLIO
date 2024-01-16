$(document).ready(function(){
    // $(window).scroll(function(){
    //     // sticky navbar on scroll script
    //      if(this.scrollY > 20){
    //          $('.navbar').addClass("sticky");
    //      }else{
    //          $('.navbar').removeClass("sticky");
    //      }
        
    //     // scroll-up button show/hide script
    //      if(this.scrollY > 500){
    //          $('.scroll-up-btn').addClass("show");
    //      }else{
    //          $('.scroll-up-btn').removeClass("show");
    //      }
    // });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    
    var typed = new Typed(".typing", {
        strings: ["Student", "Learner", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Learner", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
});



  document.addEventListener("DOMContentLoaded", function () {
    var downloadLink = document.querySelector('.column.right a');

    downloadLink.addEventListener('click', function (event) {
      event.preventDefault();
      downloadResume();
    });

    function downloadResume() {
      var resumePath = 'E:\PORTFOLIO\images\AISHWARYA Resume1.pdf';
      var link = document.createElement('a');

      link.href = resumePath;
      link.download = 'your_resume.pdf';

      // Additional check for the existence of the file
      fetch(resumePath)
        .then(response => {
          if (!response.ok) {
            throw new Error('File not found');
          }
          return response.blob();
        })
        .then(blob => {
          link.href = window.URL.createObjectURL(blob);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
    }
  });
  function sendEmail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "20013071@pvgcoet.ac.in",
      Password : "",
      To : 'aishwaryabiradar26@gmail.com',
      From : document.getElementById("email").value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }

