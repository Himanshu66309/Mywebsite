// JS for work experience

const accordian = document.getElementsByClassName('Kyra');
    for (i = 0; i<accordian.length; i++) {
      accordian[i].addEventListener('click',function(){
        this.classList.toggle('active')
      })
    }
