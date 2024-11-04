const shareBar = document.querySelector('.preview__footer__share');
const avatar = document.querySelector('.preview__footer');
const shareButton = document.getElementById('js__share-button');
const mediaQuery = window.matchMedia('(min-width: 768px');
const arrowDown = document.getElementById('js__arrow-down');

shareButton.addEventListener('click', () => {
  shareBar.classList.remove('hidden');
  if (mediaQuery.matches) {
    arrowDown.classList.remove('hidden');
  }
  if (!mediaQuery.matches) {
    avatar.classList.add('hidden');
  }
  });

shareBar.addEventListener('mouseleave', () => {
  shareBar.classList.add('hidden');
  if (mediaQuery.matches) {
    arrowDown.classList.add('hidden');
  }
  if (!mediaQuery.matches) {
    avatar.classList.remove('hidden');
  }
})

