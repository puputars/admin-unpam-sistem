// src/layout.js

export class Navbar {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const navbarHTML = `
            <nav class="app-header navbar navbar-expand bg-body"> <!--begin::Container-->
                <div class="container-fluid"> <!--begin::Start Navbar Links-->
                    <ul class="navbar-nav">
                        <li class="nav-item"> <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button"> <i class="bi bi-list"></i> </a> </li>
                        <li class="nav-item d-none d-md-block"> <a href="#" class="nav-link">Home</a> </li>
                        <li class="nav-item d-none d-md-block"> <a href="#" class="nav-link">Contact</a> </li>
                    </ul>
                    <ul class="navbar-nav ms-auto"> <!--begin::Navbar Search-->
                        <li class="nav-item"> <a class="nav-link" data-widget="navbar-search" href="#" role="button"> <i class="bi bi-search"></i> </a> </li> <!--end::Navbar Search--> <!--begin::Messages Dropdown Menu-->
                        <li class="nav-item dropdown"> <a class="nav-link" data-bs-toggle="dropdown" href="#"> <i class="bi bi-chat-text"></i> <span class="navbar-badge badge text-bg-danger">3</span> </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <a href="#" class="dropdown-item"> <!--begin::Message-->
                                    <div class="d-flex">
                                        <div class="flex-shrink-0"> <img src="../../dist/assets/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 rounded-circle me-3"> </div>
                                        <div class="flex-grow-1">
                                            <h3 class="dropdown-item-title">
                                                Brad Diesel
                                                <span class="float-end fs-7 text-danger"><i class="bi bi-star-fill"></i></span>
                                            </h3>
                                            <p class="fs-7">Call me whenever you can...</p>
                                            <p class="fs-7 text-secondary"> <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div> <!--end::Message-->
                                </a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <!--begin::Message-->
                                    <div class="d-flex">
                                        <div class="flex-shrink-0"> <img src="../../dist/assets/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 rounded-circle me-3"> </div>
                                        <div class="flex-grow-1">
                                            <h3 class="dropdown-item-title">
                                                John Pierce
                                                <span class="float-end fs-7 text-secondary"> <i class="bi bi-star-fill"></i> </span>
                                            </h3>
                                            <p class="fs-7">I got your message bro</p>
                                            <p class="fs-7 text-secondary"> <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div> <!--end::Message-->
                                </a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <!--begin::Message-->
                                    <div class="d-flex">
                                        <div class="flex-shrink-0"> <img src="../../dist/assets/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 rounded-circle me-3"> </div>
                                        <div class="flex-grow-1">
                                            <h3 class="dropdown-item-title">
                                                Nora Silvester
                                                <span class="float-end fs-7 text-warning"> <i class="bi bi-star-fill"></i> </span>
                                            </h3>
                                            <p class="fs-7">The subject goes here</p>
                                            <p class="fs-7 text-secondary"> <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div> <!--end::Message-->
                                </a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li> <!--end::Messages Dropdown Menu--> <!--begin::Notifications Dropdown Menu-->
                        <li class="nav-item dropdown"> <a class="nav-link" data-bs-toggle="dropdown" href="#"> <i class="bi bi-bell-fill"></i> <span class="navbar-badge badge text-bg-warning">15</span> </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <span class="dropdown-item dropdown-header">15 Notifications</span>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <i class="bi bi-envelope me-2"></i> 4 new messages
                                    <span class="float-end text-secondary fs-7">3 mins</span> </a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <i class="bi bi-people-fill me-2"></i> 8 friend requests
                                    <span class="float-end text-secondary fs-7">12 hours</span> </a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"> <i class="bi bi-file-earmark-fill me-2"></i> 3 new reports
                                    <span class="float-end text-secondary fs-7">2 days</span> </a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item dropdown-footer">
                                    See All Notifications
                                </a>
                            </div>
                        </li> <!--end::Notifications Dropdown Menu--> <!--begin::Fullscreen Toggle-->
                        <li class="nav-item"> <a class="nav-link" href="#" data-lte-toggle="fullscreen"> <i data-lte-icon="maximize" class="bi bi-arrows-fullscreen"></i> <i data-lte-icon="minimize" class="bi bi-fullscreen-exit" style="display: none;"></i> </a> </li> <!--end::Fullscreen Toggle--> <!--begin::User Menu Dropdown-->
                        <li class="nav-item dropdown user-menu"> <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <img src="../../dist/assets/img/user2-160x160.jpg" class="user-image rounded-circle shadow" alt="User Image"> <span class="d-none d-md-inline">Puput Arie</span> </a>
                            <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end"> <!--begin::User Image-->
                                <li class="user-header text-bg-primary"> <img src="../../dist/assets/img/user2-160x160.jpg" class="rounded-circle shadow" alt="User Image">
                                    <p>
                                        Alexander Pierce - Web Developer
                                        <small>Member since Nov. 2023</small>
                                    </p>
                                </li> <!--end::User Image--> <!--begin::Menu Body-->
                                <li class="user-body"> <!--begin::Row-->
                                    <div class="row">
                                        <div class="col-4 text-center"> <a href="#">Followers</a> </div>
                                        <div class="col-4 text-center"> <a href="#">Sales</a> </div>
                                        <div class="col-4 text-center"> <a href="#">Friends</a> </div>
                                    </div> <!--end::Row-->
                                </li> <!--end::Menu Body--> <!--begin::Menu Footer-->
                                <li class="user-footer"> <a href="#" class="btn btn-default btn-flat">Profile</a> <a href="#" class="btn btn-default btn-flat float-end">Sign out</a> </li> <!--end::Menu Footer-->
                            </ul>
                        </li> <!--end::User Menu Dropdown-->
                    </ul> <!--end::End Navbar Links-->
                </div> <!--end::Container-->
            </nav> <!--end::Header--> <!--begin::Sidebar-->
        `;

        this.container.innerHTML = navbarHTML;
    }
}

export class Sidebar {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const sidebarHTML = `
            <div class="sidebar-brand"> <!--begin::Brand Link--> <a href="./index.html" class="brand-link"> <!--begin::Brand Image--> <img src="../../dist/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image opacity-75 shadow"> <!--end::Brand Image--> <!--begin::Brand Text--> <span class="brand-text fw-light">AdminLTE 4</span> <!--end::Brand Text--> </a> <!--end::Brand Link--> </div> <!--end::Sidebar Brand--> <!--begin::Sidebar Wrapper-->
            <div class="sidebar-wrapper">
              <nav class="mt-2"> <!--begin::Sidebar Menu-->
                <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                    <li class="nav-item menu-open"> <a href="#" class="nav-link active"> <i class="nav-icon bi bi-speedometer"></i>
                            <p>
                                Dashboard
                            </p>
                        </a>
                    </li>
                    <li class="nav-header">MENU KARYAWAN</li>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Karyawan
                            </p>
                        </a>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Jabatan
                            </p>
                        </a>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Divisi
                            </p>
                          </a>
                       </li>
                    
                    <li class="nav-header">MENU ABSENSI</li>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Absensi
                            </p>
                        </a>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Izin
                            </p>
                        </a>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                lembur
                            </p>
                          </a>
                       </li>
                    
                    <li class="nav-header">MENU PENGGAJIAN</li>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Slip Gaji
                            </p>
                        </a>
                    <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Cetak Slip Gaji
                            </p>
                        </a>
                       </li>

                       <li class="nav-header">MENU LAPORAN</li>
                       <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                               <p>
                                   Cetak Laporan
                               </p>
                           </a>


                       <li class="nav-header">MENU ADMIN</li>
                       <li class="nav-item"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                               <p>
                                   Pengguna
                               </p>
                           </a>
                      </li>


                    <li class="nav-item" style="margin-left: 20px;"> <a href="#" class="nav-link"> <i class="nav-icon bi bi-box-arrow-in-right"></i>
                      <p>
                          Logout
                      </p>
                        </a> </li>
                </ul> <!--end::Sidebar Menu-->
                </nav>
            </div> <!--end::Sidebar Wrapper-->
        `;

        this.container.innerHTML = sidebarHTML;
    }
}