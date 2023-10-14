//  MENU //
window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
      menu.style.backgroundColor = '#555';
    } else {
      menu.style.backgroundColor = '#333';
    }
  });

// SECCION //  

document.getElementById('animate-button').addEventListener('click', function() {
    document.querySelector('.container').classList.add('animated');
  });
  