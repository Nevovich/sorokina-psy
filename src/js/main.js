$( document ).ready(function() {
    // Определение ширины экрана
    let screenWidth = window.innerWidth;
    if (screenWidth < 992) {
        $('#headerNavbar').before('<button id="header-navbar-toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation"><img style="height: 30px;width:30px;" src="img/header/menu-icon.svg" alt="menu-icon"></button>');
      };
      $('.post-date').prepend('<img class="post-date-img" src="img/post/calendar.svg" alt="calendar icon">');
});