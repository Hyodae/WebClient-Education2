class LayerManager {
  constructor() {
    const closeBtns = Array.from(document.querySelectorAll(".close"));
    closeBtns.forEach(btn => btn.addEventListener("click", event => {
      this.hide(event.target);
    }));
  }
  show(target) {
    const layer = target.closest(".layer");
    if (layer) {
      layer.style.display = "block";
      layer.animate([{
          offset: 0,
          opacity: 0
        },
        {
          offset: 1,
          opacity: 1
        }
      ], 500);
    }
  }

  hide(target) {
    const layer = target.closest(".layer");
    layer && (layer.style.display = "none");
  }
}

export default LayerManager;