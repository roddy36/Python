// Adamens Travel — interactions
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Hero carousel
  var slidesWrap = document.getElementById("hero-slides");
  if (slidesWrap) {
    var slides = Array.prototype.slice.call(slidesWrap.querySelectorAll(".hero-slide"));
    var dotsWrap = document.getElementById("hero-dots");
    var idx = 0, timer = null;
    function go(n) {
      slides[idx].classList.remove("is-active");
      if (dots[idx]) dots[idx].classList.remove("is-active");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("is-active");
      if (dots[idx]) dots[idx].classList.add("is-active");
      // play the active slide's video (if any), pause others
      slides.forEach(function (s, i) {
        var v = s.querySelector("video");
        if (!v) return;
        if (i === idx) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else { v.pause(); }
      });
    }
    var dots = slides.map(function (_, i) {
      var b = document.createElement("button");
      if (i === 0) b.classList.add("is-active");
      b.setAttribute("aria-label", "Go to slide " + (i + 1));
      b.addEventListener("click", function () { go(i); reset(); });
      if (dotsWrap) dotsWrap.appendChild(b);
      return b;
    });
    function next() { go(idx + 1); }
    function prev() { go(idx - 1); }
    function reset() { if (timer) clearInterval(timer); timer = setInterval(next, 6000); }
    var nextBtn = document.getElementById("hero-next");
    var prevBtn = document.getElementById("hero-prev");
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); reset(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); reset(); });
    if (slides.length > 1) reset();
  }

  // Destination filters
  var filters = document.getElementById("dest-filters");
  var grid = document.getElementById("dest-grid");
  if (filters && grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".dest-card"));
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      filters.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-region") === f;
        card.style.display = show ? "" : "none";
      });
    });
  }

  // Newsletter form (front-end only)
  var form = document.getElementById("newsletter-form");
  var msg = document.getElementById("form-msg");
  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("nl-email");
      var value = (input.value || "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!valid) { msg.textContent = "Please enter a valid email address."; input.focus(); return; }
      msg.textContent = "Thanks for subscribing! We'll be in touch. ✈";
      form.reset();
    });
  }

  // Contact form (front-end only)
  var cForm = document.getElementById("contact-form");
  var cMsg = document.getElementById("contact-msg");
  if (cForm && cMsg) {
    cForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("c-name").value || "").trim();
      var email = (document.getElementById("c-email").value || "").trim();
      var message = (document.getElementById("c-message").value || "").trim();
      var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !validEmail || !message) {
        cMsg.textContent = "Please fill in your name, a valid email, and a message.";
        return;
      }
      cMsg.textContent = "Thank you, " + name + "! Your message has been received — we'll be in touch soon. ✈";
      cForm.reset();
    });
  }

  // FAQ accordion
  var faq = document.getElementById("faq");
  if (faq) {
    faq.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var answer = btn.nextElementSibling;
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      answer.style.maxHeight = expanded ? null : answer.scrollHeight + "px";
    });
  }

  // Current year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
