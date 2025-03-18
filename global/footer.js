document.addEventListener('DOMContentLoaded', () => {
    const footer = `
        <footer>
            <nav class="social-nav">
                <a href="https://www.facebook.com/justin.lavash.9">
                    <img src="images/facebook.svg" alt="Facebook" class="socialLink" id="facebook">
                </a>
                <a href="https://www.youtube.com/channel/UC7TtroyzfS-6buZMMplR1OA">
                    <img src="images/youtube.svg" alt="YouTube" class="socialLink" id="youtube">
                </a>
                <a href="mailto:justin.lavash@gmail.com">
                    <img src="images/mail.png" alt="Email" class="socialLink" id="mail">
                </a>
            </nav>
              <div id="copyRight"><h3>Studentská Semestrální Práce - Alfred Withers Alfred &copy; 2022</h3>
              <p>Studentská last updated: 29.11.2022</p>
            </div>
        </footer>
    `;


    document.body.insertAdjacentHTML('beforeend', footer);
});