// Skeleton loader
document.querySelectorAll('.card').forEach(card => {
  const img = card.querySelector('img');
  const skeleton = card.querySelector('.skeleton');

  img.addEventListener('load', () => {
    skeleton.style.display = 'none';
    img.style.display = 'block';
  });

  img.src = img.getAttribute('src');
});

// Carousel scroll + auto-scroll
document.querySelectorAll('.carousel-container').forEach(container => {
  const carousel = container.querySelector('.carousel');
  const leftBtn = container.querySelector('.carousel-btn.left');
  const rightBtn = container.querySelector('.carousel-btn.right');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  let autoScroll = setInterval(() => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 3000);

  container.addEventListener('mouseenter', () => clearInterval(autoScroll));
  container.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 3000);
  });
});




  const slider = document.getElementById("reviewsSlider");
  let scrollAmount = 0;
  const slideWidth = 320; // card width + gap
  const intervalTime = 3000; // 3 seconds

  function autoSlide() {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0; // reset to start
    } else {
      scrollAmount += slideWidth;
    }
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }

  setInterval(autoSlide, intervalTime);

