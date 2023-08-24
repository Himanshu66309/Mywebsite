// JS for work experience
const accordian = document.getElementsByClassName('Kyra');
    for (i = 0; i<accordian.length; i++) {
      accordian[i].addEventListener('click',function(){
        this.classList.toggle('active')
      })
    }

// JS for QAE

let sections = querySelectorAll('.comsec');
let navLinks = querySelectorAll('.about-img ul a');

window.onscroll = () => {
  sections.foreach(sec => {
    let top = Window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeifht;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.foreach(links => {
        links.classList.remove('active');
        documents.querySelectorAll('.about-img ul a [href*=' + id +']').classList.add('acive');
      });
    };
  });
};
