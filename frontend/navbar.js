document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('common-navbar');
    if (navbarContainer) {
        // Inject Styles
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --nav-bg: rgba(108, 71, 255, 0.95);
                --nav-text: #ffffff;
                --nav-accent: #ffd500;
                --nav-hover-bg: rgba(255, 255, 255, 0.1);
            }

            .navbar-custom {
                background: var(--nav-bg) !important;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                padding: 0.75rem 0;
                transition: all 0.3s ease;
            }

            .navbar-brand-custom {
                font-weight: 800;
                font-size: 1.5rem;
                color: #fff !important;
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                transition: transform 0.3s ease;
            }

            .navbar-brand-custom:hover {
                transform: scale(1.05);
            }

            .navbar-brand-custom i {
                font-size: 1.8rem;
                filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
            }

            .beta-badge-custom {
                background: var(--nav-accent);
                color: #6c47ff;
                font-size: 0.75rem;
                font-weight: 700;
                padding: 2px 10px;
                border-radius: 20px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .nav-link-custom {
                color: rgba(255, 255, 255, 0.85) !important;
                font-weight: 500;
                padding: 0.5rem 1rem !important;
                border-radius: 10px;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .nav-link-custom:hover, 
            .nav-link-custom.active {
                color: var(--nav-accent) !important;
                background: var(--nav-hover-bg);
                transform: translateY(-2px);
            }

            .navbar-toggler-custom {
                border: none;
                padding: 0.5rem;
            }

            .navbar-toggler-custom:focus {
                box-shadow: none;
            }

            .btn-nav-ai {
                background: linear-gradient(135deg, #ffd500 0%, #ff9500 100%);
                color: #6c47ff !important;
                font-weight: 700;
                border: none;
                border-radius: 12px;
                padding: 8px 20px;
                box-shadow: 0 4px 15px rgba(255, 213, 0, 0.3);
                transition: all 0.3s ease;
            }

            .btn-nav-ai:hover {
                transform: scale(1.05) rotate(-1deg);
                box-shadow: 0 6px 20px rgba(255, 213, 0, 0.4);
            }

            .btn-nav-login {
                border: 2px solid #fff;
                color: #fff !important;
                border-radius: 12px;
                padding: 8px 20px;
                font-weight: 600;
                transition: all 0.3s ease;
            }

            .btn-nav-login:hover {
                background: #fff;
                color: #6c47ff !important;
            }

            .btn-nav-signup {
                background: #fff;
                color: #6c47ff !important;
                border-radius: 12px;
                padding: 8px 20px;
                font-weight: 600;
                transition: all 0.3s ease;
            }

            .btn-nav-signup:hover {
                background: var(--nav-accent);
                transform: scale(1.05);
            }

            @media (max-width: 991px) {
                .navbar-collapse {
                    background: rgba(108, 71, 255, 0.98);
                    margin-top: 1rem;
                    padding: 1rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .nav-link-custom {
                    margin-bottom: 0.5rem;
                }
                .nav-buttons-custom {
                    flex-direction: column;
                    gap: 10px;
                }
                .nav-buttons-custom .btn {
                    width: 100%;
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(style);

        // Inject Navbar Content
        navbarContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
                <div class="container">
                    <a class="navbar-brand-custom" href="index.html">
                        <i class="fa-solid fa-book-open-reader"></i>
                        <span>BlinkNotes <span class="beta-badge-custom">Beta</span></span>
                    </a>
                    <button class="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mainNav">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link nav-link-custom" href="index.html" id="nav-home"><i class="fa-solid fa-house"></i> Home</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custom" href="browse.html" id="nav-browse"><i class="fa-solid fa-layer-group"></i> Browse</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custom" href="upload.html" id="nav-upload"><i class="fa-solid fa-cloud-arrow-up"></i> Upload</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custom" href="index.html#leaderboard" id="nav-leaderboard"><i class="fa-solid fa-crown"></i> Rankings</a></li>
                            <li class="nav-item"><a class="nav-link nav-link-custom" href="about.html" id="nav-about"><i class="fa-solid fa-circle-info"></i> About</a></li>
                        </ul>
                        <div class="d-flex nav-buttons-custom gap-2 align-items-center">
                            <a href="chat.html" class="btn btn-nav-ai"><i class="fa-solid fa-sparkles"></i> AI Helper</a>
                            <a href="login.html" class="btn btn-nav-login">Login</a>
                            <a href="signup.html" class="btn btn-nav-signup">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        // Highlight active link
        const path = window.location.pathname;
        const page = path.split("/").pop();

        if (page === 'index.html' || page === '') {
            document.getElementById('nav-home')?.classList.add('active');
        } else if (page === 'browse.html') {
            document.getElementById('nav-browse')?.classList.add('active');
        } else if (page === 'upload.html') {
            document.getElementById('nav-upload')?.classList.add('active');
        } else if (page === 'about.html') {
            document.getElementById('nav-about')?.classList.add('active');
        }
    }
});
