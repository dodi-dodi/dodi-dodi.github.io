function toggleFlex(element) {
  if (getComputedStyle(element).display === 'none') {
    element.style.display = 'flex';
  } else {
    element.style.display = null;
  }
}

$(function () {
  let menu = document.querySelector("#main-menu");
  let navbarMobileMenuButton = document.querySelector('#menu-icon');
  navbarMobileMenuButton.addEventListener('click', () => toggleFlex(menu));

  $('.slide_to').on('click', function () {
    let target = $("#" + $(this).data('target'));
    $(window).scrollTo(target, 500, {offset: {top: -96}});
    toggleFlex(menu);
  });
});


function renderTemplate(tag, context) {
  Handlebars.registerHelper("inc", function (value) {
    return parseInt(value) + 1;
  });

  Handlebars.registerHelper('if_modulo', function (num, mod, block) {
    if (parseInt(num) % parseInt(mod) === 0) {
      return block.fn(this);
    }
  });

  Handlebars.registerHelper('if_not_modulo', function (num, mod, block) {
    if (parseInt(num) % parseInt(mod) !== 0) {
      return block.fn(this);
    }
  });

  let source = tag.html();
  let template = Handlebars.compile(source);
  let html = template(context);
  tag.replaceWith(html);
}

const projects = [
  {
    title: 'Cuteness',
    description: 'Cute creatures created in pure CSS to make you feel happy. Creatures behave politely on desktop in the latest versions of browsers: Chrome, Opera and Firefox. Please, do not feed the creatures!',
    github: 'https://github.com/dodi-dodi/drawings',
    demo: 'https://dorotadurlej.com/drawings/',
    image: 'cuteness.png',
  },
  {
    title: 'Web Framework',
    description: 'A dependency free, fully featured web framework inspired by Bootstrap and Material.',
    github: 'https://github.com/dodi-dodi/framework',
    demo: 'https://dorotadurlej.com/framework/',
    image: 'web-framework.png',
  },
  {
    title: 'Picture perfect',
    description: 'My example of single page website coded with SASS only.',
    github: 'https://github.com/dodi-dodi/picture_perfect',
    demo: 'https://dorotadurlej.com/picture_perfect/',
    image: 'picture_perfect.png',
  },
  {
    title: 'Weather app',
    description: 'Another hot day… are you fed up with them already? Check the five day forecast!',
    github: 'https://github.com/dodi-dodi/weather',
    demo: 'https://dorotadurlej.com/weather/',
    image: 'weather_app.png',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A Player vs Player game from our childhood. Written in ReactJS and with the best practices in mind.',
    github: 'https://github.com/dodi-dodi/tic-tac-toe',
    demo: 'https://dorotadurlej.com/tic-tac-toe/',
    image: 'tic-tac-toe.png',
  }
];

renderTemplate($('#project-list'), {projects: projects});
