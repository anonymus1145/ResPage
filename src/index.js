import './style.css';
import onLoad from './page-load';

document.addEventListener('DOMContentLoaded', function() {
    let content = document.getElementById('content');
    onLoad(content);
  });