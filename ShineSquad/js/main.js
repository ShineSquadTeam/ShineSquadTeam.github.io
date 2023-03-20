(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


// function clearInputs() {
//     document.getElementById("name").value = "";
//     document.getElementById("phone").value = "";
//     document.getElementById("vehiclenumber").value = "";
//     document.getElementById("appartmentname").value = "";
//   }

const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === '' || phone.length !== 10) {
    alert('Please enter a valid name and phone number.');
    return;
  }

  // Make AJAX POST request to server-side script
  const xhr = new XMLHttpRequest();
  const url = 'https://script.google.com/macros/s/AKfycbxncICwBbBxYVMLX21WVQqUHQDJ7191m8vX7tnVxWBZbm8T-9ipIM65XPnj70LVaM-J/exec';
  const formData = new FormData(document.querySelector('form'));

  xhr.open('POST', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Redirect to the desired website
      window.location.href = 'https://abhi7847.github.io/WashWizard/';
      // Reset all form inputs
      document.querySelectorAll('input').forEach(input => {
        input.value = '';
      });
      clearInputs();
    } else {
      console.error('Error:', xhr.statusText);
    }
  };
  xhr.send(formData);

  // Clear form inputs
  clearInputs();
});

function clearInputs() {
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('vehiclenumber').value = '';
  document.getElementById('appartmentname').value = '';
  window.location.href = 'https://abhi7847.github.io/WashWizard/';
}


function showAlert() {
    window.location.href = 'https://abhi7847.github.io/WashWizard/';
  }
  

