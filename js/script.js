document.querySelector('.plane-cont').addEventListener('click', flyClick);

function flyClick() {
  document.querySelector('.plane').classList.add('fly');
  setTimeout(() => {
    document.querySelector('.plane').classList.remove('fly');
  }, 4000);
}