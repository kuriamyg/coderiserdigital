// ══════════════════════════════════════════════════════════════
// [SEC-5] PHONE OBFUSCATION
// Phone number assembled at runtime from parts — never hardcoded
// in DOM attributes. Scrapers reading HTML source get nothing.
// ══════════════════════════════════════════════════════════════
(function() {
  // Number split into non-meaningful segments — reassembled in memory only
  var p = ['254', '112', '786', '538'];
  var num = p.join('');

  // [SEC-13] Message map — minimal, no personal details exposed in the URL
  var msgs = {
    general: 'Hi%20Moses%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk.'
  };

  // Wire up all WhatsApp links
  document.querySelectorAll('.wa-link').forEach(function(el) {
    var key = el.getAttribute('data-msg') || 'general';
    var msg = msgs[key] || msgs['general'];
    el.href = 'https://wa.me/' + num + '?text=' + msg;
  });

  // Wire up nav button
  var navBtn = document.getElementById('nav-wa-btn');
  if (navBtn) navBtn.href = 'https://wa.me/' + num + '?text=' + msgs['general'];

  // Wire up footer phone link
  var footerLink = document.getElementById('footer-phone-link');
  if (footerLink) footerLink.href = 'https://wa.me/' + num;
})();

// ══════════════════════════════════════════════════════════════
// WHATSAPP CLICK TRACKING (GA4)
// ══════════════════════════════════════════════════════════════
document.querySelectorAll('.wa-link, #nav-wa-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (typeof gtag === 'function') {
      var label = (btn.innerText || '').trim().substring(0, 40);
      gtag('event', 'whatsapp_click', {
        event_category: 'CTA',
        event_label: label,
        value: 1
      });
    }
  });
});

// ══════════════════════════════════════════════════════════════
// TIME ON PAGE (GA4 engagement depth)
// ══════════════════════════════════════════════════════════════
[30, 60, 120, 300].forEach(function(t) {
  setTimeout(function() {
    if (typeof gtag === 'function') {
      gtag('event', 'time_on_page', {
        event_category: 'Engagement',
        event_label: t + 's',
        value: t
      });
    }
  }, t * 1000);
});

// ══════════════════════════════════════════════════════════════
// SCROLL REVEAL ANIMATION
// ══════════════════════════════════════════════════════════════
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -44px 0px' });
document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});
