// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["En reconversion professionnelle, j'ai décidé de me lancer dans l'apprentissage du code. Depuis près de 6 mois, je me suis formée à temps plein en autodidacte aux langages Front tels que CSS,  html et JavaScript sur OpenClassroom. J'ai ensuite poursuivi une formation à l'AFPA pour acquérir les techniques de base du développement d'applications. Aujourd'hui, je poursuis ma montée en compétences avec la formation développeur web et web mobile chez web force3 afin d'acquérir les compétences nécessaires pour devenir une développeuse qualifiée. Plus qu'un avenir professionnel, je me suis découvert une passion."],
 
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();