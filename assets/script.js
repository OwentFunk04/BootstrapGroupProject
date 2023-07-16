window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;

  if (distanceFromTop > 30) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
