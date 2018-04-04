require("./lib/ads");
var paywall = require("./lib/paywall");
setTimeout(() => paywall(10777198), 1000);

document.body.classList.add("javascript");

var $ = require("./lib/qsa");
var debounce = require("./lib/debounce");

var captions = $(".caption");

var onScroll = function() {
  captions = captions.filter(function(c) {
    var bounds = c.getBoundingClientRect();
    if (bounds.top < 0 || bounds.top > window.innerHeight * .8) return true;
    c.classList.add("seen");
  });
};

window.addEventListener("scroll", debounce(onScroll, 200));
onScroll();