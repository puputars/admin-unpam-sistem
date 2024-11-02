import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/dist/css/adminlte.min.css'

import { Navbar, Sidebar } from './layout';

document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('navbar');
  const sidebarContainer = document.getElementById('sidebar');

  new Navbar(navbarContainer);
  new Sidebar(sidebarContainer);
});