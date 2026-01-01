document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('common-navbar');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark py-2">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
          <i class="fa-solid fa-book-open-reader me-2"></i> BlinkNotes <span class="beta ms-2">Beta</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html" id="nav-home"><i class="fa-solid fa-house"></i> Home</a></li>
            <li class="nav-item"><a class="nav-link" href="browse.html" id="nav-browse"><i class="fa-solid fa-book"></i> Browse Notes</a></li>
            <li class="nav-item"><a class="nav-link" href="upload.html" id="nav-upload"><i class="fa-solid fa-upload"></i> Upload Notes</a></li>
            <li class="nav-item"><a class="nav-link" href="index.html#leaderboard" id="nav-leaderboard"><i class="fa-solid fa-trophy"></i> Leaderboard</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html" id="nav-about"><i class="fa-solid fa-users"></i> About Us</a></li>
          </ul>
          <div class="d-flex ms-lg-4 gap-2">
            <a href="chat.html" class="btn btn-outline-light"><i class="fa-solid fa-robot"></i> AI Helper</a>
            <a href="login.html" class="btn btn-primary"><i class="fa-solid fa-right-to-bracket"></i> Login</a>
            <a href="signup.html" class="btn btn-primary"><i class="fa-solid fa-user-plus"></i> Register</a>
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
        } else if (page === 'chat.html') {
            // Optional: highlight AI Helper or nothing
        } else if (page === 'login.html' || page === 'signup.html') {
            // Optional
        }
    }
});
