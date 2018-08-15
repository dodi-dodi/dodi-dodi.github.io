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
    title: 'Web Framework',
    description: 'Dependency free, full featured web framework inspired by Bootstrap and Material.',
    github: 'https://github.com/dodi-dodi/framework',
    demo: 'https://dodi-dodi.com/framework/',
    image: 'web-framework.png',
  },
  {
    title: 'Picture perfect',
    description: 'My work example of single page website coded with SASS only.',
    github: 'https://github.com/dodi-dodi/picture_perfect',
    demo: 'https://dodi-dodi.com/picture_perfect/',
    image: 'picture_perfect.png',
  },
  {
    title: 'Weather app',
    description: 'Another hot day, and you already have enough of it? Check forecast for next five days!',
    github: 'https://github.com/dodi-dodi/weather',
    demo: null,
    image: 'weather_app.png',
  },
  {
    title: 'Kanban board',
    description: 'Keep track of your tasks in Kanban board. Add, remove and move around task cards.',
    github: 'https://github.com/dodi-dodi/kanban',
    demo: 'https://dodi-dodi.com/kanban/',
    image: 'kanban_board.png',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A Player vs Player game from our childchood. Written in ReactJS and best practices in mind.',
    github: 'https://github.com/dodi-dodi/tic-tac-toe',
    demo: 'https://dodi-dodi.com/tic-tac-toe/',
    image: 'tic-tac-toe.png',
  }
];

renderTemplate($('#project-list'), {projects: projects});
