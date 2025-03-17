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
        </footer>
        <style>
            footer {
              
                padding: 10px;
                text-align: center;
            }
            .social-nav {
                display: flex;
                justify-content: center;
                gap: 20px;
            }
            .socialLink {
                background-color: white;
                height: 20px;
                padding: 10px;
                margin: 20px;
                width: 20px; /* Added to match height for square icons */
                transition: transform 0.2s, background-color 0.2s; /* Smooth transitions */
            }
            .socialLink:hover {
                transform: scale(1.1);
            }
            #facebook {
                border-radius: 50%;
            }
            #mail {
                border-radius: 20%;
            }
            #youtube {
                border-radius: 30%;
            }
            #facebook:hover {
                background-color: rgb(23, 77, 177); /* Facebook blue */
            }
            #youtube:hover {
                background-color: rgb(201, 22, 22); /* YouTube red */
            }
            #mail:hover {
                background-color: rgb(220, 226, 238); /* Light gray-blue */
            }
        </style>
    `;

    // Append footer to the end of the body
    document.body.insertAdjacentHTML('beforeend', footer);
});