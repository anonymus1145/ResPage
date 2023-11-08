import './style.css';
import onLoad from './page-load';
import menu from './menu';

//Load the page
document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('content');
  onLoad(content);

  //Tab switch logic
});
