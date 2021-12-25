const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints"),
  allKeys = document.querySelectorAll('.key').length;

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);

for (let i = 0; i < allKeys; i++) {
  document.querySelectorAll('.key')[i].addEventListener('click', function (e) {
    let code = this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);

    if (e.keyCode) {
      // it was a keypress, get the keycode as usual
      code = e.keyCode;
    } else {
      // it was a click.  Read the keycode from the div that was clicked
      code = this.dataset.key;
    }

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  })
}