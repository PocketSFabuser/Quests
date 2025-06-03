window.onload = () => {
    function loadAdaptiveCSS() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  
  if (window.matchMedia("(max-width: 768px)").matches) {
    link.href = "style-phone.css";
    console.log("Загружен мобильный CSS (по размеру экрана)");
  } else {
    link.href = "style-pc.css";
    console.log("Загружен PC CSS (по размеру экрана)");
  }
  
  document.head.appendChild(link);
}

// Загружаем CSS при загрузке страницы
window.addEventListener('DOMContentLoaded', loadAdaptiveCSS);

// И при изменении размера окна
window.addEventListener('resize', loadAdaptiveCSS);
}