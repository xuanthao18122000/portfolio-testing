// Menu điện thoại + hiệu ứng xuất hiện khi cuộn
document.documentElement.classList.remove('no-js');

const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -40px 0px' });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// Khung xem file Word: tự lấy địa chỉ đầy đủ của file theo trang web đang mở
document.querySelectorAll('iframe[data-doc]').forEach((f) => {
  const url = new URL(f.dataset.doc, location.href).href;
  f.src = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(url);
});
