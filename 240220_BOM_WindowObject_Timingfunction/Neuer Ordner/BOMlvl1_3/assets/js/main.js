function getBrowserInfo() {
  console.log("Browsername:", window.navigator.userAgent);
  console.log("Betriebssystem-Architektur:", window.navigator.platform);
  console.log("Browser-Version:", window.navigator.appVersion);
  console.log(
    "Window Auflösung:",
    window.screen.width + "x" + window.screen.height
  );
  console.log(
    "Innenhöhe und -breite des Dokuments:",
    document.documentElement.clientWidth +
      "x" +
      document.documentElement.clientHeight
  );
  console.log("Color Depth:", window.screen.colorDepth);
  console.log("Pixel Depth:", window.screen.pixelDepth);
}
getBrowserInfo();
