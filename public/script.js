// "go back up" button
document.addEventListener("DOMContentLoaded", function() {
  var backToTopButton = document.querySelector("#backToTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// navbar disappear on scroll
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var scrollThreshold = 0.3 * document.documentElement.scrollHeight;

  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  });
});
