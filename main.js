const navBar = document.querySelector('#nav');
const user = document.querySelector('#user');

user.addEventListener('click', function() {
  return navBar.classList.toggle('expand');
});