const loadJS = (src) => {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    script.onerror = reject;
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

module.exports = {
  loadJS
}