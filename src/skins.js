window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.addEventListener('transitionend', function handler() {
            if (loader.style.opacity === "0") {
                loader.style.display = "none";
                loader.removeEventListener('transitionend', handler); 
            }
        });

    }, 1300);
});

const skins = {
    skin1: {
        name: "RbgPro4 Skin V1",
        description: "This is my first attempt on making my own skin, but as days pasted i wanted to make better one",
        size: "36.8MB",
        colors: "--",
        background: "linear-gradient(135deg, rgba(172, 0, 238, 0.8), rgba(124, 124, 155, 0.8))",
        downloadable: false,
        hasImages: true,
        screenshots: [
            "https://files.fm/thumb_show.php?i=6wmrusyyue",
            "https://files.fm/thumb_show.php?i=eu35e62dfg",
            "https://files.fm/thumb_show.php?i=38m3ea2gkd",
            "https://files.fm/thumb_show.php?i=4sahtjckje",
            "https://files.fm/thumb_show.php?i=hqcasvtbdp",
            "https://files.fm/thumb_show.php?i=5zsuhcm4s9",
            "https://files.fm/thumb_show.php?i=a669qpkdvn",
            "https://files.fm/thumb_show.php?i=3kz3d43bk4",
            "https://files.fm/thumb_show.php?i=92r26cmtw7",
            "https://files.fm/thumb_show.php?i=vaq38bkhc9"
        ],
        download: "#"
    },
    skin2: {
        name: "RbgPro4 Skin V2",
        description: "V2 is the skin i wanted to really work on but did not really progress on it",
        size: "25.5MB",
        colors: "--",
        background: "linear-gradient(135deg, rgba(131, 88, 182, 0.8), rgba(58, 43, 68, 0.8))",
        downloadable: false,
        hasImages: true,
        screenshots: [
            "https://files.fm/thumb_show.php?i=dtdrkjb772",
            "https://files.fm/thumb_show.php?i=sk34xeatez",
            "https://files.fm/thumb_show.php?i=qbf8dh9fu6",
            "https://files.fm/thumb_show.php?i=mq5e2qtujp",
            "https://files.fm/thumb_show.php?i=upwqn74a6b",
            "https://files.fm/thumb_show.php?i=vw3eghd3jy",
            "https://files.fm/thumb_show.php?i=zy2sag75af",
            "https://files.fm/thumb_show.php?i=rkncu94bhy",
            "https://files.fm/thumb_show.php?i=c85nzws4aj",
            "https://files.fm/thumb_show.php?i=v9nrewtyd3",
            "https://files.fm/thumb_show.php?i=7etnapsug4"
        ],
        download: "#"
    },
    skin3: {
        name: "Glow Pink Skin V3 Enchanced",
        description: "V3 Is my cleanest so far and its very optimized in gameplay, while it shares elements from v2, its a bit more redifined",
        size: "34.1MB",
        colors: "--",
        background: "linear-gradient(135deg, rgba(183, 55, 183, 0.8), rgba(67, 18, 67, 0.8))",
        downloadable: true,
        hasImages: true,
        screenshots: [
            "https://files.fm/thumb_show.php?i=rfvbb7w8vd",
            "https://files.fm/thumb_show.php?i=ezv5txp723",
            "https://files.fm/thumb_show.php?i=hkcy6bueks",
            "https://files.fm/thumb_show.php?i=sneu2na86h",
            "https://files.fm/thumb_show.php?i=j4qz8w3czk",
            "https://files.fm/thumb_show.php?i=evpp6aqk25",
            "https://files.fm/thumb_show.php?i=z3ana44d6a",
            "https://files.fm/thumb_show.php?i=28ask9zqca",
            "https://files.fm/thumb_show.php?i=wec8ncrm6q",
            "https://files.fm/thumb_show.php?i=gtypg6xbbp",
            "https://files.fm/thumb_show.php?i=kqgkfmbkay",
            "https://files.fm/thumb_show.php?i=hnvhb9722u",
            "https://files.fm/thumb_show.php?i=3trqnqy7gu",
            "https://files.fm/thumb_show.php?i=6fygspwbsj",
            "https://files.fm/thumb_show.php?i=qa93kbqq3x",
        ],
        download: "https://files.fm/f/esjgq94kb6"
    },
    skin4: {
        name: "RbgPro4 Skin V4",
        description: "Unknow for now, but im slowly building it",
        size: "--MB",
        colors: "Unknow",
        background: "rgba(30, 30, 30, 0.6)",
        hasImages: false,
        screenshots: [
            "#",
            "#"
        ],
        download: "#"
    }
};

document.querySelectorAll('.sidebar button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const skinId = btn.getAttribute('onclick').match(/'(.*?)'/)[1];
        const skin = skins[skinId];
        if (skin && !btn.classList.contains('active')) {
            btn.style.background = skin.background;
        }
    });

    btn.addEventListener('mouseleave', () => {
        if (!btn.classList.contains('active')) {
            btn.style.background = '#222';
        }
    });
});

const lightbox = document.createElement("div");
lightbox.classList.add("image-lightbox");
const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.getElementById("screenshots").addEventListener("click", (e) => {
    if (
        e.target.tagName === "IMG" &&
        !e.target.classList.contains("placeholder-message") &&
        !e.target.classList.contains("loading-overlay")
    ) {
        lightboxImg.src = e.target.src;
        lightbox.classList.add("active");
    }
});

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebar-toggle");

let isMobileView = window.innerWidth <= 768;
let isSweepAnimating = false;

function triggerSweep(type) {
    if (isSweepAnimating) return; 

    const sweepDuration = (type === 'full') ? 1200 : 600;
    const activeClass = (type === 'full') ? "animate-full-cycle" : "animate-sweep-single";
    
    isSweepAnimating = true;

    toggleBtn.classList.remove("animate-full-cycle", "animate-sweep-single");
    toggleBtn.classList.add("animate-sweep");
    void toggleBtn.offsetWidth;

    toggleBtn.classList.remove("animate-sweep");
    toggleBtn.classList.add(activeClass);

    setTimeout(() => {
        toggleBtn.classList.remove(activeClass);
        isSweepAnimating = false;n
    }, sweepDuration + 50); 
}

toggleBtn.addEventListener("click", () => {
    sidebar.classList.remove("collapsed"); 
    toggleBtn.classList.add("hidden"); 
});

document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) { 
        if (!sidebar.classList.contains('collapsed') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            
            sidebar.classList.add("collapsed");
            toggleBtn.classList.remove("hidden");
            
            if (!isSweepAnimating) {
                setTimeout(() => {
                    triggerSweep('full'); 
                }, 400); 
            }
        }
    }
});

function checkSidebar() {
    const wasMobileView = isMobileView;
    isMobileView = window.innerWidth <= 768;

    if (isMobileView) {
        sidebar.classList.add("collapsed");
        toggleBtn.classList.remove("hidden");
        
        if (!wasMobileView && !isSweepAnimating) {
            triggerSweep('full'); 
        }
    } else {
        sidebar.classList.remove("collapsed");
        toggleBtn.classList.add("hidden");
    }
}

window.addEventListener("resize", checkSidebar);
window.addEventListener("load", checkSidebar);

function selectSkin(id, buttonElement) {
    const skin = skins[id];
    const screenshotsDiv = document.getElementById("screenshots");
    const infoDiv = document.getElementById("info");
    const overlay = document.getElementById("loading-overlay"); 
    
    const popup = document.getElementById("no-download-popup");
    const closePopupBtn = document.getElementById("close-popup");
    const viewImagesBtn = document.getElementById("view-images");
    const sidebar = document.getElementById("sidebar");

    screenshotsDiv.scrollTop = 0;
    screenshotsDiv.style.scrollBehavior = 'smooth'; 


    closePopupBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    viewImagesBtn.addEventListener("click", () => {
        popup.classList.remove("active");
        document.getElementById("screenshots").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelectorAll('.sidebar button').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = '#222';
    });
    buttonElement.classList.add('active');
    buttonElement.style.background = skin.background;

    document.body.style.setProperty("--skin-gradient", skin.background);

    sidebar.classList.add("frosted");

    Array.from(screenshotsDiv.children).forEach(child => {
        if (child.id !== 'loading-overlay') {
            screenshotsDiv.removeChild(child);
        }
    });
    

    if (!skin.hasImages) {
        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder-message');
        placeholder.textContent = 'This skin has no available images';
        screenshotsDiv.prepend(placeholder);

        overlay.style.pointerEvents = "none";
        overlay.style.opacity = "0";
        overlay.classList.remove("active");
        screenshotsDiv.classList.remove("loading");
        screenshotsDiv.style.overflow = "hidden"; 

    } else {
        screenshotsDiv.appendChild(overlay);
        overlay.style.pointerEvents = "auto";
        overlay.style.opacity = "1";
        overlay.classList.add("active");
        screenshotsDiv.style.overflow = "hidden";
        screenshotsDiv.classList.add("loading");

        let loaded = 0;
        skin.screenshots.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.onload = () => {
                loaded++;
                if (loaded === skin.screenshots.length) {
                    overlay.style.opacity = "0";
                    setTimeout(() => {
                        overlay.style.pointerEvents = "none";
                        overlay.classList.remove("active");
                        screenshotsDiv.classList.remove("loading");
                        screenshotsDiv.style.overflow = "auto";
                    }, 500);
                }
            };
            screenshotsDiv.appendChild(img);
        });
    }

    let downloadButtonContent;
    let infoBottomClasses = 'info-bottom';

    if (skin.downloadable) {
        downloadButtonContent = `
            <a href="${skin.download}" download>
                <button class="download-btn">Download</button>
            </a>
        `;
    } else {
        infoBottomClasses += ' download-unavailable';
        downloadButtonContent = `
            <span class="download-status">Skin not available</span>
            <button class="download-btn disabled-skin" disabled>Download</button>
        `;
    }

    infoDiv.innerHTML = `
        <div class="info-top">
            <div class="info-size">Size: ${skin.size}</div>
            <div class="info-name">${skin.name}</div>
        </div>
        <div class="info-description">Description: ${skin.description}</div>
        <div class="${infoBottomClasses}">
            <div class="info-colors">Colors: ${skin.colors}</div>
            ${downloadButtonContent}
        </div>
    `;

    if (!skin.downloadable) {
        popup.classList.add("active");
    }
}

document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("no-download-popup").classList.remove("active");

});


