$(document).ready(function () {

  let _tmp_url = window.location;
  let _base_url = _tmp_url .protocol + "//" + _tmp_url.host + "/" + _tmp_url.pathname.split('/')[1];
  let _full_url = new URL(_tmp_url.href);

  // load sidenav
  $('.sidenav').load('components/_sidenav.html')

  // handle url
  let _pages = _full_url.searchParams.get('pages');
  if (!_pages) {
    _pages = 'home.html'
    window.history.pushState('', 'Home', `${_base_url}?pages=${_pages}`);
  }
  $('.content').load(`pages/${_pages}`);

  // handle click menu
  $('body').on('click', '.list-group-item', function () {
    if ($(this).find('input').length) {
      return;
    }
    $('.list-group-item').removeClass('active');
    $(this).addClass('active');

    let _href = $(this).data('href');
    let _title = _href.split('.')[0];

    $('.content').load(`pages/${_href}`);
    window.history.pushState('', _title, `${_base_url}?pages=${_href}`);
  });

  // handle backward forward navigation
  window.onpopstate = function(e){
    let _full_url_popstate = new URL(window.location.href);
    let _pages_popstate = _full_url_popstate.searchParams.get('pages');
    let _class_popstate = _pages_popstate.split('.')[0];

    $('.list-group-item').removeClass('active');
    $(`.${_class_popstate}`).addClass('active');

    $('.content').load(`pages/${_pages_popstate}`);
  };

});
