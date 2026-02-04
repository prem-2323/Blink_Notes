document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('common-navbar');
    if (navbarContainer) {
        // Inject Navbar Content
        navbarContainer.innerHTML = `
            <nav>
                <div class="brand">
                    <a href="index.html"><i class="fas fa-book-open"></i> <span>BlinkNotes</span></a>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.html" id="nav-home">Home</a></li>
                    <li><a href="browse.html" id="nav-browse">Browse</a></li>
                    <li><a href="upload.html" id="nav-upload">Upload</a></li>
                    <li><a href="chat.html" id="nav-chat">AI Assistant</a></li>
                    <li id="nav-auth-btn">
                        <a href="login.html" class="btn btn-accent btn-sm">Sign In</a>
                    </li>
                </ul>
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
        } else if (page === 'chat.html') {
            document.getElementById('nav-chat')?.classList.add('active');
        }
    }
});
