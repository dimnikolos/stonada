/*DIAVGEIA-------------------------------------------------*/

function validADA(s) {
  return /^[Α-Ωα-ω0-9\-]+$/.test(s);
}

function createButton() {
  const input = document.getElementById("generalSearchText");
  const container = input.parentElement;

  const newButton = document.createElement("button");
  newButton.textContent = "Κατευθείαν στον ΑΔΑ!";
  newButton.className = "btn s-btn";
  newButton.type = "button";
  newButton.title = "Κατευθείαν στον ΑΔΑ!";
  newButton.style.marginLeft = "5px";

  newButton.addEventListener("click", () => {
    if (!validADA(document.getElementById("generalSearchText").value)) {
      const originalBorder = input.style.border;
      input.style.border = "2px solid red";
      input.style.transition = "border 0.3s";

      // Επαναφορά μετά από 1.5 δευτερόλεπτο
      setTimeout(() => {
        input.style.border = originalBorder;
      }, 1500);
    } else {
      window.location.href =
        "https://diavgeia.gov.gr/decision/view/" +
        document.getElementById("generalSearchText").value.toUpperCase();
    }
  });

  container.appendChild(newButton);
}

const observer = new MutationObserver((mutations, obs) => {
  const targetElement = document.querySelector("#generalSearchText");
  if (targetElement) {
    createButton();
    obs.disconnect(); // Σταμάτα να παρακολουθείς
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
