const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  520: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  // owl-crousel for blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive,
  });

  // click to scroll stop
  $('.move-up span').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // script kirim goole sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwR_WQBK5zK64-Xbmjh33jdvj3BAQh67iGXi1n5cmDePMVnBTy8w7VrF0rHQYvmb522Mg/exec';
  const form = document.forms['hotspot-contact-form'];
  const loading = document.querySelector('.output_message');
  const alert = document.querySelector('.my-alert');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        // hilangkan tombol loading
        loading.classList.toggle('d-none');
        // tampilkan alert
        alert.classList.toggle('d-none');
        // reset form
        form.reset();
        console.log('Success!', response);
      })
      .catch((error) => console.error('Error!', error.message));
  });
});
