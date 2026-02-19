// Easter Egg - Additional Pixel AI Assistant Features
// This file extends the main pixel assistant functionality

class EasterEggManager {
    constructor() {
        this.timeOnSite = 0;
        this.clickCount = 0;
        this.konami = [];
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        this.easterEggActivated = false;
        this.init();
    }

    init() {
        // Track time on site
        setInterval(() => {
            this.timeOnSite++;
        }, 1000);

        // Listen for konami code
        document.addEventListener('keydown', (e) => this.handleKonami(e));

        // Special click tracking
        document.addEventListener('click', () => {
            this.clickCount++;
            this.checkForEasterEggs();
        });

        // Long-term visitor detection
        setTimeout(() => {
            if (!this.easterEggActivated) {
                this.showLongVisitorMessage();
            }
        }, 30000); // 30 seconds
    }

    handleKonami(e) {
        this.konami.push(e.keyCode);
        
        if (this.konami.length > this.konamiCode.length) {
            this.konami.shift();
        }

        if (this.konami.join('') === this.konamiCode.join('')) {
            this.activateDeveloperMode();
        }
    }

    checkForEasterEggs() {
        // Special behavior after many clicks
        if (this.clickCount > 50 && !this.easterEggActivated) {
            this.showClickMasterMessage();
        }

        // Time-based easter eggs
        if (this.timeOnSite > 30 && !this.easterEggActivated) {
            this.showPersistentVisitorEgg();
        }
    }

    showLongVisitorMessage() {
        const assistant = window.pixelAI;
        if (assistant) {
            assistant.showMessage("You've been here a while! This site was built with Claude Code + human creativity 🤖✨");
            assistant.jump();
        }
    }

    showClickMasterMessage() {
        const assistant = window.pixelAI;
        if (assistant) {
            assistant.showMessage("Wow, you're really exploring! I like your thoroughness 🕵️‍♀️");
            assistant.wave();
            this.easterEggActivated = true;
        }
    }

    showPersistentVisitorEgg() {
        const assistant = window.pixelAI;
        if (assistant) {
            assistant.showMessage("Still here? You must really like this portfolio! Want to know a secret? Try the Konami Code 🎮");
            assistant.assistant.classList.add('excited');
            setTimeout(() => {
                assistant.assistant.classList.remove('excited');
            }, 1000);
            this.easterEggActivated = true;
        }
    }

    activateDeveloperMode() {
        const assistant = window.pixelAI;
        if (assistant) {
            // Special developer mode activation
            document.body.classList.add('easter-egg-mode');
            assistant.assistant.classList.add('developer-mode');
            assistant.showMessage("🎉 KONAMI CODE ACTIVATED! You found the secret developer mode! This portfolio was built with AI assistance 🚀");
            
            // Special effects
            assistant.jump();
            setTimeout(() => assistant.wave(), 500);
            setTimeout(() => assistant.jump(), 1000);
            
            // Add special console message
            console.log(`
🎉 EASTER EGG ACTIVATED! 🎉

You found the secret developer mode!

This portfolio was built using:
- Claude Code for AI-assisted development
- Modern vanilla JavaScript (no frameworks needed!)
- CSS Grid and Flexbox for responsive design
- GitHub Pages for deployment
- Lots of attention to detail ✨

Thanks for being curious enough to try the Konami Code!

Want to connect? zhengye07@outlook.com
            `);
            
            this.easterEggActivated = true;
        }
    }
}

// Extend the main PixelAIAssistant with easter egg features
document.addEventListener('DOMContentLoaded', () => {
    // Initialize easter egg manager
    window.easterEggManager = new EasterEggManager();
    
    // Add reference to pixel AI for easter eggs
    setTimeout(() => {
        const assistantElement = document.getElementById('pixelAssistant');
        if (assistantElement && window.pixelAI) {
            // Add special behaviors
            assistantElement.addEventListener('dblclick', () => {
                window.pixelAI.showMessage("Double click detected! You're really paying attention 👀");
                window.pixelAI.jump();
            });
        }
    }, 31000); // After the main assistant appears
});

// Special messages for different times of day
function getTimeBasedMessage() {
    const hour = new Date().getHours();
    
    if (hour < 6) {
        return "Working late? This portfolio was worth staying up for! 🌙";
    } else if (hour < 12) {
        return "Good morning! Starting your day with portfolio browsing? I like it! ☀️";
    } else if (hour < 18) {
        return "Afternoon portfolio review? Smart use of time! 📈";
    } else {
        return "Evening exploration! This site looks even better in dark mode 🌆";
    }
}

// Export for potential use in other scripts
window.EasterEggManager = EasterEggManager;
