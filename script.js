/* ==========================================================================
   GIFT & NNANNA WEDDING INVITATION
   EDIT ONLY THE "CONFIG" OBJECT BELOW. The app code under it needs no edits.
   ========================================================================== */
const CONFIG = {
  site: {
    // Your live website address (ends with a slash). Must match the 4 places in index.html.
    url: "https://github.com/GOCPortfolio/gn2027.git",
    title: "Gift & Nnanna | #GN2027"
  },

  couple: {
    hashtag: "#GN2027",
    tagline: "To Have And To Hold",
    sealLetters: "G & N",
    bride: {
      hero: "Gift",
      title: "Miss",
      given: "Gift Matthew",
      surname: "Anosike",
      parents: "Daughter of the late Mr & Mrs Ikegwu Matthew"
    },
    groom: {
      hero: "Nnanna",
      title: "Mr",
      given: "Nnanna Tochukwu",
      surname: "Orji",
      parents: "Son of the late Mr Orji Nnanna"
    }
  },

  event: {
    dateText: "Sunday, 3rd January 2027",
    dateShort: "3rd January 2027",
    timeText: "10:00 AM",
    startISO: "2027-01-03T10:00:00+01:00", // 10:00 AM, Nigeria time (UTC+1)
    durationHours: 4,
    timeZone: "Africa/Lagos",
    city: "Arochukwu, Abia State",
    calendarTitle: "Gift & Nnanna's Wedding",
    calendarDetails: "You are invited to celebrate the wedding of Gift & Nnanna. #GN2027"
  },

  // mapQuery = the address exactly as Google Maps shows it. mapsUrl = optional pasted Google Maps link (overrides mapQuery).
  venues: [
    {
      label: "Ceremony",
      name: "White Wedding Ceremony",
      sub: "Presbyterian Church of Nigeria",
      address: "Umuye, Ihechiowa, Arochukwu L.G.A, Abia State",
      time: "10:00 AM",
      mapQuery: "Presbyterian Church of Nigeria, Umuye, Ihechiowa, Arochukwu, Abia State, Nigeria",
      mapsUrl: ""
    },
    {
      label: "Reception",
      name: "Ebem Umuye",
      sub: "",
      address: "Ihechiowa, Arochukwu L.G.A, Abia State",
      time: "",
      mapQuery: "Ebem Umuye, Ihechiowa, Arochukwu, Abia State, Nigeria",
      mapsUrl: ""
    }
  ],

  // The accent swatch (metal:true) shows as shiny gold.
  colours: [
    { name: "Emerald Green", hex: "#046A38" },
    { name: "Champagne Gold", hex: "#F7E7CE", metal: true },
    { name: "Navy Blue", hex: "#000080" },
    { name: "White", hex: "#FFFFFF" }
  ],

  contact: {
    personName: "Our wedding coordinator",
    phoneDisplay: "0806 219 3084",
    phoneTel: "+2348062193084",
    whatsapp: "2348062193084",     // international format, no +
    whatsappSameAsPhone: true
  },

  // Leave names empty ("") to hide the Father of the Day section.
  fatherOfDay: { label: "Father of the Day", names: "Mr Felix Ogbonna", role: "" },

  // Empty list [] hides the vendors section. The last row is the website developer credit.
  vendors: [
    { role: "Makeup Artist", name: "Naritexglam" },
    { role: "Web Developer", name: "GOC | BrandStrategist" }
  ],

  gifts: {
    message: "Your presence at our wedding is the greatest gift we could ask for. If you would like to bless us further, we would be truly grateful.",
    bank: "Zenith Bank",
    accountName: "Gift Anosike Matthew",
    accountNumber: "2199899069"
  },

  story: {
    intro: "",
    moments: [
      { label: "Chapter One", title: "How It Began",
        text: "Our story didn't start with anything magical. It started with a simple hello on Facebook.",
        photo: "assets/story-1.webp", alt: "The couple in green lion-print attire, smiling at each other" },
      { label: "Chapter Two", title: "Where It Began",
        text: "Just a conversation between two people who had no idea where it would lead.",
        photo: "assets/story-2.webp", alt: "The couple in an emerald suit and sequin top" },
      { label: "Chapter Three", title: "The Engagement",
        text: "The hello became conversation, and the conversation became friendship.",
        photo: "assets/story-3.webp", alt: "A tender embrace in maroon and gold Ankara" }
    ],
    closing: "The friendship became love, and the love brought us here."
  },

  // Alternate portrait and landscape. Each photo: full image + small "-sm" thumbnail (WebP).
  gallery: [
    { src: "assets/gallery-01.webp", thumb: "assets/gallery-01-sm.webp", w: 900,  h: 1200, alt: "The couple in a red sequin gown and black tuxedo" },
    { src: "assets/gallery-02.webp", thumb: "assets/gallery-02-sm.webp", w: 1000, h: 667,  alt: "The couple in matching red and gold Ankara prints" },
    { src: "assets/gallery-03.webp", thumb: "assets/gallery-03-sm.webp", w: 900,  h: 1200, alt: "The couple in emerald green traditional attire" },
    { src: "assets/gallery-04.webp", thumb: "assets/gallery-04-sm.webp", w: 900,  h: 1200, alt: "The couple in an emerald suit and sequin top" },
    { src: "assets/gallery-05.webp", thumb: "assets/gallery-05-sm.webp", w: 1000, h: 667,  alt: "A tender embrace in maroon and gold Ankara" },
    { src: "assets/gallery-06.webp", thumb: "assets/gallery-06-sm.webp", w: 900,  h: 1200, alt: "The couple in maroon and cream traditional attire with coral beads" },
    { src: "assets/gallery-07.webp", thumb: "assets/gallery-07-sm.webp", w: 1000, h: 667,  alt: "The couple in green lion-print attire with coral beads" },
    { src: "assets/gallery-08.webp", thumb: "assets/gallery-08-sm.webp", w: 900,  h: 1125, alt: "A close portrait in matching red and gold Ankara" }
  ],

  toast: [
    "Two hearts, one destiny.",
    "May our love grow stronger every passing day.",
    "May our home be filled with laughter, peace and grace.",
    "May we walk together in faith through every season.",
    "May God keep us, bless us and bind us ever closer.",
    "To have and to hold, from this day forward."
  ],

  faq: {
    dressCode: "Please dress in the colours of the day:",
    accommodation: "Accommodation will be available."
  },

  footer: { thanks: "Thank you for celebrating with us. Your love and presence mean the world to us." },

  share: { message: "You are invited to celebrate the wedding of Gift & Nnanna on 3rd January 2027. #GN2027" },

  music: { src: "assets/music.mp3", volume: 0.6 },

  // Paste your Google Apps Script Web App URL here (see README). Empty = RSVP form points guests to WhatsApp / Call.
  rsvp: { endpoint: "https://script.google.com/macros/s/AKfycbxxTPevJRiJsmV58zhaEbT2kU_owcmxIHnIZv8HXertxfwfKNGePP453NaK2er_1zvm/exec", maxGuests: 6 }
};

/* ==========================================================================
   APP CODE (no edits needed below this line)
   ========================================================================== */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var params = new URLSearchParams(location.search);
  var C = CONFIG;

  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, C); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function siteBase() {
    return /YOUR-SITE/.test(C.site.url) ? (location.origin + location.pathname) : C.site.url;
  }

  /* ---------- Fill text from CONFIG ---------- */
  $$("[data-cfg]").forEach(function (n) { var v = get(n.getAttribute("data-cfg")); if (v != null) n.textContent = v; });
  document.title = C.site.title;

  /* ---------- Guest name ---------- */
  var guest = (params.get("guest") || "").replace(/[<>]/g, "").trim().slice(0, 40);
  if (guest) {
    ["envGuest", "cardGuest"].forEach(function (id) { var g = $("#" + id); g.textContent = "Dear " + guest; g.hidden = false; });
    $("#rName").value = guest;
  }

  /* ---------- Swatches ---------- */
  function swatchList(ul, cls) {
    C.colours.forEach(function (c) {
      var li = el("li");
      var s = el("span", "sw" + (c.metal ? " metal" : ""));
      s.style.background = c.hex; s.setAttribute("role", "img"); s.setAttribute("aria-label", c.name);
      li.appendChild(s); li.appendChild(el("span", "sw-name", c.name)); ul.appendChild(li);
    });
  }
  swatchList($("#swatchesCard"));

  /* ---------- Calendar ---------- */
  var start = new Date(C.event.startISO);
  var end = new Date(start.getTime() + C.event.durationHours * 3600000);
  function utc(d) { return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); }
  var ceremonyPlace = C.venues[0].sub + ", " + C.venues[0].address;
  $("#btnGcal").href = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(C.event.calendarTitle) +
    "&dates=" + utc(start) + "/" + utc(end) +
    "&details=" + encodeURIComponent(C.event.calendarDetails) +
    "&location=" + encodeURIComponent(ceremonyPlace);
  function icsEscape(s) { return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); }
  function buildICS() {
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invitation//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:" + utc(start) + "-wedding@invitation",
      "DTSTAMP:" + utc(new Date()),
      "DTSTART:" + utc(start), "DTEND:" + utc(end),
      "SUMMARY:" + icsEscape(C.event.calendarTitle),
      "LOCATION:" + icsEscape(ceremonyPlace),
      "DESCRIPTION:" + icsEscape(C.event.calendarDetails),
      "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  }
  $("#btnIcs").addEventListener("click", function () {
    var blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = C.couple.bride.hero.toLowerCase() + "-" + C.couple.groom.hero.toLowerCase() + "-wedding.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
  });

  /* ---------- Countdown ---------- */
  var cdEls = { d: $("#cdD"), h: $("#cdH"), m: $("#cdM"), s: $("#cdS") };
  var cdLast = {};
  function setCd(k, v) {
    if (cdLast[k] === v) return;
    cdLast[k] = v; cdEls[k].textContent = v;
    if (!reduced) { cdEls[k].classList.remove("flip"); void cdEls[k].offsetWidth; cdEls[k].classList.add("flip"); }
  }
  function tick() {
    var diff = start.getTime() - Date.now();
    if (diff <= 0) { $("#cd").hidden = true; $("#married").hidden = false; return; }
    $("#cd").hidden = false; $("#married").hidden = true;
    var s = Math.floor(diff / 1000);
    setCd("d", Math.floor(s / 86400));
    setCd("h", Math.floor(s % 86400 / 3600));
    setCd("m", Math.floor(s % 3600 / 60));
    setCd("s", s % 60);
  }
  tick(); setInterval(tick, 1000);

  /* ---------- Venues ---------- */
  var vWrap = $("#venueList");
  C.venues.forEach(function (v) {
    var card = el("article", "venue paper reveal");
    card.appendChild(el("p", "v-label", v.label));
    card.appendChild(el("h3", "", v.name));
    if (v.sub) card.appendChild(el("p", "v-sub", v.sub));
    card.appendChild(el("p", "v-addr", v.address));
    if (v.time) card.appendChild(el("p", "v-time", v.time));
    var q = encodeURIComponent(v.mapQuery);
    var open = v.mapsUrl || ("https://www.google.com/maps/search/?api=1&query=" + q);
    var dir = "https://www.google.com/maps/dir/?api=1&destination=" + q;
    var row = el("div", "btn-row");
    var a1 = el("a", "btn btn-solid", "Open in Google Maps"); a1.href = open; a1.target = "_blank"; a1.rel = "noopener";
    var a2 = el("a", "btn btn-ghost-dark", "Get directions"); a2.href = dir; a2.target = "_blank"; a2.rel = "noopener";
    row.appendChild(a1); row.appendChild(a2); card.appendChild(row); vWrap.appendChild(card);
  });

  /* ---------- Father of the day / vendors ---------- */
  if (C.fatherOfDay && C.fatherOfDay.names) { $("#father").hidden = false; if (!C.fatherOfDay.role) $(".fod-role").hidden = true; }
  if (C.vendors && C.vendors.length) {
    $("#vendors").hidden = false;
    C.vendors.forEach(function (v) {
      var li = el("li"); li.appendChild(el("span", "v-role", v.role)); li.appendChild(el("span", "v-name", v.name));
      $("#vendorList").appendChild(li);
    });
  }

  /* ---------- Story ---------- */
  if (C.story.intro) { var si = $("#storyIntro"); si.textContent = C.story.intro; si.hidden = false; }
  C.story.moments.forEach(function (m) {
    var li = el("li", "moment reveal");
    var fr = el("div", "frame"); var im = el("img"); im.src = m.photo; im.alt = m.alt || ""; im.width = 600; im.height = 750; im.loading = "lazy";
    fr.appendChild(im); li.appendChild(fr);
    li.appendChild(el("p", "m-label", m.label)); li.appendChild(el("h3", "", m.title)); li.appendChild(el("p", "", m.text));
    $("#moments").appendChild(li);
  });
  $("#storyClose").textContent = C.story.closing;

  /* ---------- Toast section ---------- */
  C.toast.forEach(function (t, i) {
    var p = el("p", i === C.toast.length - 1 ? "last reveal" : "reveal");
    if (i === C.toast.length - 1) p.appendChild(el("span", "", t)); else p.textContent = t;
    $("#toastLines").appendChild(p);
  });

  /* ---------- Gallery + lightbox ---------- */
  var grid = $("#galleryGrid");
  C.gallery.forEach(function (g, i) {
    var b = el("button", "g-item"); b.type = "button"; b.setAttribute("aria-label", "Open photo " + (i + 1) + " of " + C.gallery.length);
    var im = el("img"); im.src = g.thumb; im.width = Math.round(g.w / (g.w / 480)); im.height = Math.round(g.h * 480 / g.w); im.alt = g.alt; im.loading = "lazy"; im.decoding = "async";
    b.appendChild(im); b.addEventListener("click", function () { openLb(i, b); }); grid.appendChild(b);
  });
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbCount = $("#lbCount");
  var lbIdx = 0, lbReturn = null;
  function showLb(i) {
    var n = C.gallery.length; lbIdx = (i + n) % n; var g = C.gallery[lbIdx];
    lbImg.src = g.src; lbImg.alt = g.alt; lbCap.textContent = g.alt; lbCount.textContent = (lbIdx + 1) + " / " + n;
  }
  function openLb(i, from) {
    lbReturn = from || document.activeElement; showLb(i); lb.hidden = false; document.documentElement.classList.add("is-locked"); $("#lbClose").focus();
  }
  function closeLb() { lb.hidden = true; document.documentElement.classList.remove("is-locked"); if (lbReturn && lbReturn.focus) lbReturn.focus(); }
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", function () { showLb(lbIdx - 1); });
  $("#lbNext").addEventListener("click", function () { showLb(lbIdx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") showLb(lbIdx - 1);
    else if (e.key === "ArrowRight") showLb(lbIdx + 1);
    else if (e.key === "Tab") {
      var f = $$("button", lb); var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  var sx = null;
  lb.addEventListener("pointerdown", function (e) { sx = e.clientX; });
  lb.addEventListener("pointerup", function (e) {
    if (sx == null) return; var dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 50) showLb(lbIdx + (dx < 0 ? 1 : -1));
  });
  lb.addEventListener("pointercancel", function () { sx = null; });

  /* ---------- Toast notification ---------- */
  var toastT;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }

  /* ---------- Gifts: copy ---------- */
  $("#btnCopy").addEventListener("click", function () {
    var num = C.gifts.accountNumber;
    function ok() { toast("Account number copied"); }
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = num; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;top:0;left:-9999px";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy") ? ok() : toast("Press and hold the number to copy"); } catch (e) { toast("Press and hold the number to copy"); }
      ta.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(num).then(ok, fallback); else fallback();
  });

  /* ---------- FAQ ---------- */
  var faqItems = [];
  function faqAdd(title, build) {
    var item = el("div", "faq-item"), id = "faq" + faqItems.length;
    var h = el("h3"); var b = el("button", "faq-q"); b.type = "button"; b.id = id + "-q"; b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", id + "-a");
    b.appendChild(el("span", "", title)); b.appendChild(el("span", "pm")); h.appendChild(b);
    var a = el("div", "faq-a"); a.id = id + "-a"; a.setAttribute("role", "region"); a.setAttribute("aria-labelledby", id + "-q");
    var w = el("div"); var inn = el("div", "in"); build(inn); w.appendChild(inn); a.appendChild(w);
    item.appendChild(h); item.appendChild(a); $("#faqList").appendChild(item); faqItems.push(item);
    b.addEventListener("click", function () {
      var open = !item.classList.contains("open");
      faqItems.forEach(function (it) { it.classList.remove("open"); $(".faq-q", it).setAttribute("aria-expanded", "false"); });
      if (open) { item.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
    });
  }
  faqAdd("Dress code", function (n) {
    n.appendChild(el("p", "", C.faq.dressCode));
    var ul = el("ul", "faq-sw"); swatchList(ul); n.appendChild(ul);
  });
  faqAdd("Accommodation", function (n) { n.appendChild(el("p", "", C.faq.accommodation)); });
  faqAdd("Contact person", function (n) {
    var p = el("p"); p.appendChild(document.createTextNode(C.contact.personName + ": "));
    var a = el("a", "", C.contact.phoneDisplay); a.href = "tel:" + C.contact.phoneTel; p.appendChild(a);
    if (C.contact.whatsappSameAsPhone) p.appendChild(document.createTextNode(" (also on WhatsApp)"));
    else { var w = el("a", "", "WhatsApp"); w.href = "https://wa.me/" + C.contact.whatsapp; p.appendChild(document.createTextNode(". WhatsApp: ")); p.appendChild(w); }
    n.appendChild(p);
  });
  faqAdd("Who created this beautiful wedding website?", function (n) {
    n.appendChild(el("p", "", "This website was proudly designed by G.O.C | Brand Strategist \u00d7 AI, where we create beautiful, personalized digital wedding experiences."));
    n.appendChild(el("p", "", "Planning your wedding? Let\u2019s create yours too!"));
    var p = el("p"), a = el("a", "", "Chat with us on WhatsApp"); a.href = "https://wa.me/2348027134537"; a.target = "_blank"; a.rel = "noopener"; p.appendChild(a); n.appendChild(p);
  });

  /* ---------- RSVP ---------- */
  var form = $("#rsvpForm"), sel = $("#rGuests");
  for (var gi = 1; gi <= C.rsvp.maxGuests; gi++) { var o = el("option", "", gi === 1 ? "1 (just me)" : String(gi)); o.value = gi; sel.appendChild(o); }
  $$("input[name=attending]").forEach(function (r) {
    r.addEventListener("change", function () { $("#guestsField").hidden = r.value.indexOf("Regret") === 0 && r.checked; });
  });
  function setErr(id, msg, input) {
    $("#" + id).textContent = msg;
    if (input) { if (msg) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid"); }
  }
  function waLink(name, att, guests) {
    var accept = att.indexOf("Joy") === 0;
    var msg = "Hello, this is " + name + ". I " + (accept ? "will gladly attend " : "regretfully cannot attend ") + C.event.calendarTitle.replace("'s Wedding", "") +
      "'s wedding on " + C.event.dateShort + "." + (accept ? " Number of guests: " + guests + "." : "");
    return "https://wa.me/" + C.contact.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  $("#btnWa").href = "https://wa.me/" + C.contact.whatsapp + "?text=" + encodeURIComponent("Hello, I would like to RSVP for " + C.event.calendarTitle + ".");
  $("#btnCall").href = "tel:" + C.contact.phoneTel;
  function refreshWa() {
    var n = $("#rName").value.trim(), a = ($("input[name=attending]:checked") || {}).value;
    if (n && a) $("#btnWa").href = waLink(n, a, sel.value);
  }
  form.addEventListener("input", refreshWa); form.addEventListener("change", refreshWa);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.company.value) return; // honeypot
    var name = $("#rName").value.trim(), phone = $("#rPhone").value.trim();
    var att = ($("input[name=attending]:checked") || {}).value, bad = null;
    setErr("rNameErr", ""); setErr("rPhoneErr", ""); setErr("rAttErr", "");
    if (name.length < 2) { setErr("rNameErr", "Please enter your full name.", $("#rName")); bad = bad || $("#rName"); } else $("#rName").removeAttribute("aria-invalid");
    var digits = phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) { setErr("rPhoneErr", "Please enter a valid phone number.", $("#rPhone")); bad = bad || $("#rPhone"); } else $("#rPhone").removeAttribute("aria-invalid");
    if (!att) { setErr("rAttErr", "Please choose one option."); bad = bad || $("input[name=attending]"); }
    if (bad) { bad.focus(); return; }
    var accept = att.indexOf("Joy") === 0;
    var data = { name: name, phone: phone, attending: att, guests: accept ? Number(sel.value) : 0, message: $("#rMsg").value.trim(), submittedAt: new Date().toISOString() };
    var note = $("#rNote"), btn = $("#rSubmit");
    function success() {
      form.hidden = true;
      $("#rsvpOkText").textContent = accept ? "We are delighted you will be joining us, " + name + ". See you there!" : "We are sorry you cannot make it, " + name + ". You will be in our hearts.";
      $("#rsvpOk").hidden = false;
      $("#btnWa").href = waLink(name, att, data.guests);
    }
    if (!C.rsvp.endpoint) {
      note.textContent = "Online RSVP is not switched on yet. Please use the WhatsApp or Call button below to send your reply.";
      $("#btnWa").href = waLink(name, att, data.guests);
      return;
    }
    btn.disabled = true; note.textContent = "Sending…";
    fetch(C.rsvp.endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) })
      .then(success)
      .catch(function () { btn.disabled = false; note.textContent = "Sorry, that did not send. Please try again, or use the WhatsApp or Call button below."; });
  });

  /* ---------- Share ---------- */
  $("#btnShare").addEventListener("click", function () {
    window.open("https://wa.me/?text=" + encodeURIComponent(C.share.message + "\n" + siteBase()), "_blank", "noopener");
  });

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  if (!reduced && "IntersectionObserver" in window) {
    io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (n) { io.observe(n); });
  } else { $$(".reveal").forEach(function (n) { n.classList.add("in"); }); }

  /* ---------- Music + mute ---------- */
  var audio = $("#music"), soundBtn = $("#soundBtn");
  audio.src = C.music.src;
  var muted = lsGet("wedding-muted") === "1", fadeT = null;
  function paintSound() { soundBtn.classList.toggle("muted", muted); soundBtn.setAttribute("aria-pressed", String(muted)); soundBtn.setAttribute("aria-label", muted ? "Unmute music" : "Mute music"); }
  function fadeTo(v, ms) {
    clearInterval(fadeT); var from = audio.volume, t0 = Date.now();
    fadeT = setInterval(function () {
      var k = Math.min(1, (Date.now() - t0) / ms); audio.volume = Math.max(0, Math.min(1, from + (v - from) * k));
      if (k >= 1) { clearInterval(fadeT); if (v === 0) audio.pause(); }
    }, 50);
  }
  function startMusic() {
    if (muted) return;
    audio.volume = 0; var p = audio.play(); if (p && p.catch) p.catch(function () {});
    fadeTo(C.music.volume, 1800);
  }
  soundBtn.addEventListener("click", function () {
    muted = !muted; lsSet("wedding-muted", muted ? "1" : "0"); paintSound();
    if (muted) fadeTo(0, 400); else { audio.volume = 0; var p = audio.play(); if (p && p.catch) p.catch(function () {}); fadeTo(C.music.volume, 800); }
  });
  paintSound();

  /* ---------- Envelope intro ---------- */
  var intro = $("#intro"), page = $("#page"), env = $("#envelope"), card = $("#envCard"), flap = $("#envFlap"), seal = $("#seal"), skipBtn = $("#skipBtn");
  var introDone = false, started = false;

  function unlock() {
    introDone = true; intro.remove(); page.inert = false; page.removeAttribute("inert");
    document.body.classList.remove("is-locked"); document.documentElement.classList.remove("is-locked");
    var m = $("#top"); window.scrollTo(0, 0);
    if (m) { m.setAttribute("tabindex", "-1"); m.focus({ preventScroll: true }); }
  }

  if (params.has("nointro")) {
    intro.remove(); introDone = true; document.body.classList.remove("is-locked");
  } else {
    page.inert = true; page.setAttribute("inert", "");
    setTimeout(function () { try { seal.focus({ preventScroll: true }); } catch (e) {} }, 50);
  }

  function sparkles() {
    var n = 14;
    for (var i = 0; i < n; i++) {
      var s = el("span", "spark"); env.appendChild(s);
      var ang = (Math.PI * 2 * i) / n + Math.random() * 0.4, dist = 50 + Math.random() * 70;
      s.animate([
        { transform: "translate(0,0) scale(.4)", opacity: 1 },
        { transform: "translate(" + Math.cos(ang) * dist + "px," + Math.sin(ang) * dist + "px) scale(1)", opacity: 1, offset: .5 },
        { transform: "translate(" + Math.cos(ang) * dist * 1.4 + "px," + Math.sin(ang) * dist * 1.4 + "px) scale(0)", opacity: 0 }
      ], { duration: 800, easing: "ease-out", fill: "forwards" });
      (function (x) { setTimeout(function () { x.remove(); }, 900); })(s);
    }
  }

  function fadeIntro(ms) {
    intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, easing: "ease", fill: "forwards" }).onfinish = unlock;
  }

  function openEnvelope() {
    if (started || introDone) return; started = true;
    startMusic();
    $(".env-title").style.transition = $(".env-hint").style.transition = "opacity .4s";
    $(".env-title").style.opacity = $(".env-hint").style.opacity = "0"; $("#envGuest").style.opacity = "0";
    skipBtn.style.visibility = "hidden";
    seal.style.animation = "none"; seal.style.pointerEvents = "none"; seal.style.outline = "none"; seal.blur();

    if (reduced) { fadeIntro(500); return; }

    var halves = $$(".seal-half", seal), L = halves[0], R = halves[1];
    // 0ms: seal presses in, then cracks apart
    seal.animate([{ transform: "scale(1)" }, { transform: "scale(.86)" }, { transform: "scale(.86)" }], { duration: 260, fill: "forwards" });
    setTimeout(function () {
      seal.classList.add("cracked");
      sparkles();
      L.animate([{ transform: "none", opacity: 1 }, { transform: "translate(-16px,10px) rotate(-18deg)", opacity: 0 }], { duration: 600, easing: "ease-in", fill: "forwards" });
      R.animate([{ transform: "none", opacity: 1 }, { transform: "translate(16px,12px) rotate(18deg)", opacity: 0 }], { duration: 600, easing: "ease-in", fill: "forwards" });
    }, 240);

    // 450ms: flap opens in 3D
    setTimeout(function () {
      flap.animate([{ transform: "rotateX(0deg)" }, { transform: "rotateX(180deg)" }], { duration: 700, easing: "cubic-bezier(.4,.1,.3,1)", fill: "forwards" });
      setTimeout(function () { flap.style.zIndex = "1"; }, 330); // goes behind the card once past vertical
    }, 450);

    // 1000ms: photo card slides up out of the envelope
    var ch = card.offsetHeight / .62; // un-scaled height
    var lift = ch * 0.2;
    setTimeout(function () {
      card.animate([
        { transform: "translateX(-50%) translateY(0) scale(.62)" },
        { transform: "translateX(-50%) translateY(" + (-lift) + "px) scale(1)" }
      ], { duration: 800, easing: "cubic-bezier(.3,.7,.2,1)", fill: "forwards" });
    }, 1000);

    // 1850ms: card flies to fill the screen, envelope drops away
    setTimeout(function () {
      var r = card.getBoundingClientRect();
      var w = r.width, h = r.height;
      var s = Math.min(innerWidth * 0.94 / w, innerHeight * 0.8 / h);
      var dx = innerWidth / 2 - (r.left + w / 2), dy = innerHeight / 2 - (r.top + h / 2);
      card.getAnimations().forEach(function (a) { a.cancel(); });
      intro.appendChild(card);
      card.style.cssText = "position:fixed;left:" + r.left + "px;top:" + r.top + "px;width:" + w + "px;height:" + h + "px;bottom:auto;margin:0;transform-origin:50% 50%;z-index:20;transform:none";
      card.animate([{ transform: "none" }, { transform: "translate(" + dx + "px," + dy + "px) scale(" + s + ")" }], { duration: 900, easing: "cubic-bezier(.5,0,.2,1)", fill: "forwards" });
      env.animate([{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(" + innerHeight * 0.6 + "px)", opacity: 0 }], { duration: 850, easing: "ease-in", fill: "forwards" });
    }, 1850);

    // 2900ms: cross-fade into the page (total about 3.5s)
    setTimeout(function () { fadeIntro(600); }, 2900);
  }

  seal.addEventListener("click", openEnvelope);
  skipBtn.addEventListener("click", function () {
    if (started || introDone) return; started = true; startMusic();
    intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: "forwards" }).onfinish = unlock;
  });
  // Safety: Esc also skips while the intro is up
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !introDone && !started && lb.hidden) skipBtn.click(); });
})();

/* ---------- Hero photo slider (smooth cross-fade, starts once the envelope is open) ---------- */
(function () {
  var box = document.querySelector(".hero-photo");
  if (!box) return;
  var slides = Array.prototype.slice.call(box.querySelectorAll("img.slide"));
  if (slides.length < 2) return;
  var HOLD = 5500, cur = 0, timer = null, reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function show(n) {
    var prev = slides[cur]; cur = n; var next = slides[cur];
    next.style.animation = "none"; void next.offsetWidth; next.style.animation = "";
    prev.classList.remove("is-active"); prev.classList.add("is-leaving");
    next.classList.remove("is-leaving"); next.classList.add("is-active");
    setTimeout(function () { if (prev !== slides[cur]) prev.classList.remove("is-leaving"); }, 1800);
  }
  function next() { show((cur + 1) % slides.length); }
  function play() { if (timer || document.hidden) return; box.classList.add("is-sliding"); timer = setInterval(next, HOLD); }
  function stop() { clearInterval(timer); timer = null; }
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else if (started) play(); });
  var started = false;
  function begin() {
    if (started) return; started = true;
    slides.forEach(function (im) { im.loading = "eager"; });
    play();
  }
  // wait for the envelope screen to disappear, then start
  var wait = setInterval(function () {
    if (!document.getElementById("intro")) { clearInterval(wait); begin(); }
  }, 300);
})();
