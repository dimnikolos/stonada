/*DIAVGEIA-------------------------------------------------*/

function hasEnglish(s){
  for (let i=0; i<s.length; i++){
    code = s[i].charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
      return true;
    }
  }
  return false;
}

  const waitForElement = setInterval(() => {
    const input = document.getElementById('generalSearchText');

    if (input) {
      clearInterval(waitForElement); // stop polling once found

      const container = input.parentElement;

      const newButton = document.createElement('button');
      newButton.textContent = 'Κατευθείαν στον ΑΔΑ!';
      newButton.className = 'btn s-btn';
      newButton.type = 'button';
      newButton.title = 'Κατευθείαν στον ΑΔΑ!';
      newButton.style.marginLeft = '5px';

      newButton.addEventListener('click', () => {
        if (hasEnglish(document.getElementById("generalSearchText").value)){
          alert('Ο ΑΔΑ δεν μπορεί να έχει αγγλικούς χαρακτήρες!');
        }
        else{
          window.location.href = "https://diavgeia.gov.gr/decision/view/" + document.getElementById("generalSearchText").value.toUpperCase();
        }
      });

      container.appendChild(newButton);
    }
  }, 300); // check every 300ms
