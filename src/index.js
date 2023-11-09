import './style.css';
import onLoad from './page-load';
import menu from './menu';
import contact from './contact';


//Load the page
document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('content');
  onLoad(content);

  //Tab switch logic
  function addClick() {
    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', onClick);

    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', onClick);

    const contactButton = document.getElementById('contact');
    contactButton.addEventListener('click', onClick);

    const btnList = [menuButton, homeButton, contactButton];

    function onClick() {
      if (this === menuButton) {
        content.innerHTML = '';
        menu(content);
      } else if (this === homeButton) {
        content.innerHTML = '';
        onLoad(content);
      } else if (this === contactButton) {
        content.innerHTML = '';
        contact(content);

        // Remove the event listeners
        btnList.forEach(btn => {
          btn.removeEventListener('click', onClick);
        });
      }
      // Re-attach the event listeners
      addClick();
    }
  }
  // Attach the initial event listeners
  addClick();
});
