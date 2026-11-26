const base = document.currentScript
  ? new URL('.', document.currentScript.src)
  : new URL('./', location.href);
const clickSound = new Audio(new URL('media/click.mp3', base));

document.body.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
});
