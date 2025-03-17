document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallerySpace');
    if (!galleryContainer) return;

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let images = [];
    let currentIndex = 0;

    function loadGallery() {
        let i = 1;
        function tryLoadNext() {
            const img = new Image();
            img.src = `images/gallery/${i}.jpg`; // Note the leading slash for Docker
            img.alt = `Gallery Image ${i}`;
            img.className = 'galleryPic';
            img.dataset.index = i - 1;

            img.onload = () => {
                galleryContainer.appendChild(img);
                images.push(img);
                i++;
                tryLoadNext();
            };
            img.onerror = () => {
                setupGallery();
            };
        }
        tryLoadNext();
    }

    function setupGallery() {
        images.forEach(img => {
            img.addEventListener('click', () => {
                currentIndex = parseInt(img.dataset.index);
                showModal();
            });
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showModal();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showModal();
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { // Only close if clicking the modal background
                modal.style.display = 'none';
            }
        });
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'flex') { // Only when modal is open
                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    showModal();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % images.length;
                    showModal();
                } else if (e.key === 'Escape') { // Optional: close with Escape
                    modal.style.display = 'none';
                }
            }
        });
    }

    function showModal() {
        modalImg.src = images[currentIndex].src;
        modal.style.display = 'flex';
    }

    loadGallery();
});