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
      alert("Δεν είναι ΑΔΑ!");
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
