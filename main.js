// 돔이 완성되기 전에 실행되면 값이 없을 수 있음.
// 그래서 안전하게 스크립트 코드를 
// 아래다 넣고, window.onload로 감싸야 함.
window.onload = () => {
  const menuButton = document.querySelector('#menu-button');
  const closeButton = document.querySelector('#close-button');
  const nav = document.querySelector('#nav');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');    
  });
  closeButton.addEventListener('click', () => {
    nav.classList.toggle('active');    
  });
};