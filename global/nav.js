document.addEventListener('DOMContentLoaded', () => {
    const clickSound = new Audio('sounds/click.mp3');
    clickSound.preload = 'auto';
    clickSound.volume = 0.5;
    clickSound.muted = false;

    const hoverSound = new Audio('sounds/soundef.wav');
    hoverSound.preload = 'auto';
    hoverSound.volume = 0.3;

    const allSounds = [clickSound, hoverSound];

    // Load states from localStorage
    let isAudioMuted = localStorage.getItem('isAudioMuted') === 'true';
    let isAudioUnlocked = localStorage.getItem('isAudioUnlocked') === 'true';

    // Apply initial mute state
    allSounds.forEach(sound => {
        sound.muted = isAudioMuted;
    });

    const nav = `
        <nav>
            <div id="MM">
                <a href="index.html" class="mainMenu">Home</a>
                <a href="Concerts.html" class="mainMenu">Events</a>
                <a href="Contact.html" class="mainMenu">Contact</a>
                <a href="Gallery.html" class="mainMenu">Gallery</a>
                <a href="Bio.html" class="mainMenu">Bio</a>
            </div>
        </nav>
        <button id="audioToggleBtn" title="Toggle Audio">${isAudioMuted ? '🔇' : '🔊'}</button>

    `;
    document.getElementById('nav-container').innerHTML = nav;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.mainMenu');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        link.addEventListener('click', () => {
            if (!isAudioMuted) {
                clickSound.currentTime = 0;
                clickSound.play().catch(err => console.error('Click sound failed:', err));
            }
            unlockAudio(); // Trigger unlock on click
        });
        link.addEventListener('mouseover', () => {
            if (isAudioUnlocked && !isAudioMuted) {
                hoverSound.currentTime = 0;
                hoverSound.play()
                    .then(() => console.log('Hover sound played'))
                    .catch(err => console.error('Hover sound failed:', err));
            }
        });
    });

    const unlockAudio = () => {
        if (!isAudioUnlocked) {
            hoverSound.play()
                .then(() => {
                    console.log('Audio unlocked successfully');
                    isAudioUnlocked = true;
                    localStorage.setItem('isAudioUnlocked', 'true');
                })
                .catch(err => console.log('Unlock attempt failed:', err));
        }
    };

    const audioToggleBtn = document.getElementById('audioToggleBtn');
    audioToggleBtn.addEventListener('click', () => {
        isAudioMuted = !isAudioMuted;
        allSounds.forEach(sound => {
            sound.muted = isAudioMuted;
        });
        audioToggleBtn.textContent = isAudioMuted ? '🔇' : '🔊';
        audioToggleBtn.title = isAudioMuted ? 'Enable Audio' : 'Disable Audio';
        localStorage.setItem('isAudioMuted', isAudioMuted);
        unlockAudio(); // Unlock on toggle click too
        console.log('Audio toggled:', isAudioMuted ? 'Muted' : 'Unmuted');
    });

    allSounds.forEach(sound => {
        sound.addEventListener('loadeddata', () => console.log(`${sound.src.split('/').pop()} loaded`));
        sound.addEventListener('error', (e) => console.error(`${sound.src.split('/').pop()} error:`, e));
    });
});