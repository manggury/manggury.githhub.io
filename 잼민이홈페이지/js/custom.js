console.log('aaa')

const BTN = document.querySelector('.m_btn');
const GNB = document.querySelector('.gnb');

BTN.addEventListener('click', function(){
    GNB.classList.toggle('on');
    this.classList.toggle('on');
});