const cursor = new kursor({
  type: 4, 
  removeDefaultCursor: true, 
  color: '#A9A7A7', 
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.2,
        });
      }
    });
  });

document.querySelector('.year').innerHTML = new Date().getFullYear();


function handleClickOnMobileViewports() {
  const isMobile = window.matchMedia("(max-width: 768px)");
  const projects = document.querySelectorAll('.proj1');

  if (isMobile.matches) {
      projects.forEach(proj => {
          proj.onclick = function() {
          };
      });
  } else {
      projects[0].onclick = display1;
      projects[1].onclick = display2;
      projects[2].onclick = display3;
      projects[3].onclick = display4;
  }
}
window.addEventListener('resize', handleClickOnMobileViewports);
window.addEventListener('DOMContentLoaded', handleClickOnMobileViewports);
handleClickOnMobileViewports();

function display1() {
  window.open("https://github.com/sarbosarcar/simplipy");
}

function display2() {
  window.open("https://github.com/sarbosarcar/edupy");
}

function display3() {
  window.open("https://github.com/sarbosarcar/codipy");
}

function display4() {
  window.open("https://github.com/sarbosarcar/air-mouse");
}

function github() {
  window.open("https://github.com/sarbosarcar")
}

function linkedin() {
  window.open("https://linkedin.com/in/sarbosarcar")
}

function medium() {
  window.open("https://medium.com/@sarbosarcar")
}


function handleMobileClickBehavior() {
  const isMobile = window.matchMedia("(max-width: 768px)");
  const parentElements = document.querySelectorAll('.box');
  
  if (isMobile.matches) {
    parentElements.forEach(parent => {
      const child = parent.querySelector('.details');
      child.style.maxHeight = 'fit-content'; 
      child.style.opacity = '1'; 
      child.style.padding = '1rem'; 
    });
    parentElements.forEach(parent => {
      parent.onclick = null;
    });

  }
}

window.addEventListener('resize', handleMobileClickBehavior);
window.addEventListener('DOMContentLoaded', handleMobileClickBehavior);



function yr() {
  const targetElement = document.getElementById('footer');
  if (targetElement) {
    lenis.scrollTo(targetElement, {
      offset: 0,
      duration: 1.2,
    });
  }
}

function cta1() {
  const targetElement = document.getElementById('projects');
  if (targetElement) {
    lenis.scrollTo(targetElement, {
      offset: 0,
      duration: 1.2,
    });
  }
}


function mail() {
  const textarea = document.getElementById("email-txt"); 
  const content = textarea.value; 
  const recipient = 'sarbosarcar@gmail.com';
  const subject = 'Discussion on prospective projects';
  var body = 'Hello Sarbo! It was great reading about you on your website. I wish to contact you regarding a very interesting collaboration on ...';
  body = (content.trim()==="") ? body : content;
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}