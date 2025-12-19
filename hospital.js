
function showService(index){
    const contents = document.querySelectorAll('.service-content');
    const menu = document.querySelectorAll('.service-menu li');

    contents.forEach(item => item.classList.remove('active'));
    menu.forEach(item => item.classList.remove('active'));

    contents[index].classList.add('active');
    menu[index].classList.add('active');
}


//  for navbar

  const menu = document.querySelector("nav ul");
  const toggle = document.querySelector(".menu-toggle");

  toggle.onclick = () => {
    menu.classList.toggle("show");
  };

