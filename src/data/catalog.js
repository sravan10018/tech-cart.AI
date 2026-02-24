export const MOBILE_CATALOG = [
    {
        id: "m1", type: "mobile", brand: "Samsung", name: "Samsung S24 Ultra", price: 129999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=60",
        category: "Gaming",
        verdict: "The absolute pinnacle of Android hardware versatility and AI productivity.",
        rating: 9.8,
        bestFor: "Power Users & Professionals",
        whoAvoid: "Users preferring compact phones or extremely rapid 100W+ charging.",
        sentiment: { pos: 88, neu: 8, neg: 4 },
        pros: ["Unmatched Anti-reflective Gorilla Armor", "200MP Quad-Tele System", "7-Year Software Commitment"],
        cons: ["Slower 45W charging speed", "Substantial weight (232g)", "Occasional shutter lag in moving shots"],
        complaints: ["Dull default colors (fixed in update)", "Grainy texture in low brightness", "S-Pen scent issue"],
        performance: {
            battery: "Epic 16+ hours web browsing; easily 2 days on light use.",
            gaming: "Snapdragon 8 Gen 3 for Galaxy handles Ray Tracing at 60FPS.",
            camera: "Industry-leading zoom detail; great 8K 30fps video stabilization.",
            display: "2600 nits peak brightness; flat panel enhances S-Pen precision.",
            smoothness: "One UI 6.1 with 120Hz ProMotion feels buttery smooth.",
            heating: "Excellent vapor chamber cooling; stays cool during 1hr Genshin Impact.",
            build: "Titanium frame with Gorilla Armor glass; feels ultra-premium.",
            sound: "Powerful stereo speakers with deep bass for a mobile device.",
            fiveG: "Exceptional modem; stays connected in low-signal areas."
        },
        videoCategories: {
            top: [
                { title: "S24 Ultra: 6 Months Later Tech Review", channel: "MKBHD", views: "4.2M", url: "https://www.youtube.com/embed/s9_hK_kH5_Y" },
                { title: "Ultimate Camera Test: S24 Ultra vs Reality", channel: "Mrwhosetheboss", views: "3.8M", url: "https://www.youtube.com/embed/0k9jH4p7_W4" }
            ],
            latest: [
                { title: "One UI 7 on S24 Ultra: What's New?", channel: "SamMobile", views: "150K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            longTerm: [
                { title: "S24 Ultra Long Term Review: Still Worth It?", channel: "The Verge", views: "1.1M", url: "https://www.youtube.com/embed/s9_hK_kH5_Y" }
            ],
            comparison: [
                { title: "S24 Ultra vs iPhone 16 Pro Max", channel: "TechChap", views: "2.5M", url: "https://www.youtube.com/embed/VjN3GvP4Y0A" }
            ]
        },
        specs: { processor: "Snapdragon 8 Gen 3", batteryCapacity: 5000, displayType: "LTPO AMOLED", brightness: 2600, refreshRate: "120Hz", cameraMP: 200, storage: "512GB", ip: "IP68", fiveG: true, sound: "Stereo", chargingSpeed: 45, wirelessCharging: true, ois: true, videoQuality: "8K", dolbyAtmos: true, buildMaterial: "Titanium", wifi6: true, nfc: true, bluetooth: "5.3", fingerprintType: "In-Display", faceUnlock: true, androidVersion: "Android 14" }
    },
    {
        id: "m2", type: "mobile", brand: "Apple", name: "iPhone 16 Pro Max", price: 144900,
        image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=400&auto=format&fit=crop&q=60",
        category: "Photography",
        verdict: "The professional's cinema rig. Unrivaled video quality and ecosystem integration.",
        rating: 9.7,
        bestFor: "Content Creators & Artists",
        whoAvoid: "Budget-conscious buyers or those who dislike the large 6.9\" form factor.",
        sentiment: { pos: 92, neu: 5, neg: 3 },
        pros: ["World-class 4K120 ProRes Video", "A18 Pro: Benchmarking king", "Record-breaking 18hr battery life"],
        cons: ["Minimal design shift from 15PM", "Slow standard charging speeds", "Camera Control button learning curve"],
        complaints: ["Occasional app crashes at launch", "Unresponsive screen near Control button", "Overheating during ProRes export"],
        performance: {
            battery: "10+ hours screen-on time; best in class iOS endurance.",
            gaming: "Console-level gaming (Resident Evil/Death Stranding) native support.",
            camera: "Exceptional video stabilization; ProRAW photography is stunning.",
            display: "New 6.9\" Super Retina XDR with razor-thin bezels.",
            smoothness: "iOS 18 paired with A18 Pro is the definition of fluid.",
            heating: "Internal graphene sheet helps, but gets warm during 4K recording.",
            build: "Grade 5 Titanium; lighter and more durable than previous years.",
            sound: "Rich audio profile; spatial audio on speakers is noticeably better.",
            fiveG: "Qualcomm X75 modem ensures peak speeds."
        },
        videoCategories: {
            top: [
                { title: "iPhone 16 Pro Max: The Final Verdict", channel: "MKBHD", views: "5.1M", url: "https://www.youtube.com/embed/VjN3GvP4Y0A" },
                { title: "A18 Pro Deep Dive: Pure Performance", channel: "Geekerwan", views: "1.2M", url: "https://www.youtube.com/embed/r300L_Qh-Ew" }
            ],
            latest: [
                { title: "Top 10 Hidden Features - iOS 18", channel: "Proper Honest Tech", views: "300K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            longTerm: [
                { title: "1 Month with iPhone 16 Pro Max", channel: "Just Josh", views: "800K", url: "https://www.youtube.com/embed/VjN3GvP4Y0A" }
            ],
            comparison: [
                { title: "iPhone 16 PM vs S24 Ultra vs Pixel 9 Pro", channel: "Mrwhosetheboss", views: "3.2M", url: "https://www.youtube.com/embed/0k9jH4p7_W4" }
            ]
        },
        specs: { processor: "A18 Pro", batteryCapacity: 4676, displayType: "OLED", brightness: 2000, refreshRate: "120Hz", cameraMP: 48, storage: "256GB", ip: "IP68", fiveG: true, sound: "Stereo", chargingSpeed: 30, wirelessCharging: true, ois: true, videoQuality: "4K", dolbyAtmos: true, buildMaterial: "Titanium", wifi6: true, nfc: true, bluetooth: "5.4", fingerprintType: "Face ID", faceUnlock: true, androidVersion: "iOS 18" }
    },
    {
        id: "m3", type: "mobile", brand: "OnePlus", name: "OnePlus 12", price: 64999,
        image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=400&auto=format&fit=crop&q=60",
        category: "Gaming",
        verdict: "The most balanced flagship of 2024. Incredible specs at a sane price.",
        rating: 9.2,
        bestFor: "Battery & Performance Enthusiasts",
        whoAvoid: "Users needing absolute top-tier water proofing (IP68) or flat screens.",
        sentiment: { pos: 85, neu: 10, neg: 5 },
        pros: ["Blazing 100W SuperVOOC (0-100 in 30min)", "Dual-Vapor Chamber cooling", "Hasselblad 4th Gen color science"],
        cons: ["IP65 rating (splash only)", "Curved edges cause phantom touches", "OxygenOS isn't for purists"],
        complaints: ["Aggressive background app closing", "Gmail freezing bugs", "Blurry photo exports in Discord"],
        performance: {
            battery: "Easily 2 days use; 8hr SOT consistent.",
            gaming: "Upscales many games to 120fps via Trinity Engine.",
            camera: "Strong main and tele; ultrawide is slightly weaker.",
            display: "2K 120Hz 4500 nits peak (HDR) looks incredible.",
            smoothness: "Very snappy, zero lag during heavy multitasking.",
            heating: "Stays impressively cool thanks to massive VC area.",
            build: "Glass sandwich design; looks elegant but fingerprint magnet.",
            sound: "Loud stereo speakers; lacks slightly in bass compared to S24.",
            fiveG: "Solid connectivity; dual-sim 5G works perfectly."
        },
        videoCategories: {
            top: [
                { title: "OnePlus 12: Is it finally perfect?", channel: "Tech Vision", views: "1.5M", url: "https://www.youtube.com/embed/Jm_24-tN08E" },
                { title: "OnePlus 12 vs S24 Ultra Camera Test", channel: "Mobile Lab", views: "900K", url: "https://www.youtube.com/embed/Z33Q2d5Fj-s" }
            ],
            latest: [
                { title: "OnePlus 12 OxygenOS 15 Update", channel: "C4ETech", views: "100K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            longTerm: [
                { title: "OnePlus 12: 3 Months Later", channel: "MrMobile", views: "650K", url: "https://www.youtube.com/embed/Jm_24-tN08E" }
            ],
            comparison: [
                { title: "Flagship Killer vs Flagship: OP12", channel: "TechChap", views: "1.2M", url: "https://www.youtube.com/embed/VjN3GvP4Y0A" }
            ]
        },
        specs: { processor: "Snapdragon 8 Gen 3", batteryCapacity: 5400, displayType: "AMOLED", brightness: 2500, refreshRate: "120Hz", cameraMP: 50, storage: "256GB", ip: "IP65", fiveG: true, sound: "Stereo", chargingSpeed: 100, wirelessCharging: true, ois: true, videoQuality: "8K", dolbyAtmos: true, buildMaterial: "Glass", wifi6: true, nfc: true, bluetooth: "5.4", fingerprintType: "In-Display", faceUnlock: true, androidVersion: "Android 14" }
    },
    {
        id: "m4", type: "mobile", brand: "Nothing", name: "Nothing Phone (2)", price: 36999,
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "The minimalist's choice. A unique design focused on clean software and intentional usage.",
        rating: 8.5,
        bestFor: "Design Minimalists & Tech Purists",
        whoAvoid: "Users requiring a dedicated zoom lens or the absolute best low-light video.",
        sentiment: { pos: 82, neu: 12, neg: 6 },
        pros: ["Glyph Interface: Functional & Fun", "Nothing OS 2.5: Zero Bloat", "Stable Snapdragon 8+ Gen 1"],
        cons: ["Camera is good, not 'Great'", "Video lacks 4K stabilization on ultrawide", "Average IP54 water resistance"],
        complaints: ["HDR processing can be aggressive", "Face processing is sometimes 'muddy'", "Game frame rates capped at 60fps often"],
        performance: {
            battery: "Excellent 9hr+ screen-on time; 45W is decent.",
            gaming: "Handles heavy titles smoothly with virtually no frame stutter.",
            camera: "Natural colors but struggles in high-contrast (blown out skies).",
            display: "Flat LTPO OLED with 1600 nits is highly responsive.",
            smoothness: "Nothing OS is the cleanest software experience on Android.",
            heating: "Moderate; gets warm during heavy gaming but not alarming.",
            build: "Unique transparent back; premium industrial feel.",
            sound: "Clear stereo output; good for calls and podcasts.",
            fiveG: "Reliable 5G with wide band support."
        },
        videoCategories: {
            top: [
                { title: "Nothing Phone 2: 1 Year Later Review", channel: "Marques Brownlee", views: "2.1M", url: "https://www.youtube.com/embed/D-Z9yE_0o50" },
                { title: "Glyph Interface: Gimmick or Game Changer?", channel: "The Verge", views: "1.4M", url: "https://www.youtube.com/embed/L39a2o6h4z4" }
            ],
            latest: [
                { title: "Nothing Phone (2a) vs Phone (2)", channel: "Nothing", views: "500K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            longTerm: [
                { title: "Nothing Phone 2: Long term test", channel: "Engadget", views: "400K", url: "https://www.youtube.com/embed/D-Z9yE_0o50" }
            ],
            comparison: [
                { title: "Nothing Phone 2 vs Pixel 8", channel: "TechRader", views: "600K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ]
        },
        specs: { processor: "Snapdragon 8+ Gen 1", batteryCapacity: 4700, displayType: "OLED", brightness: 1600, refreshRate: "120Hz", cameraMP: 50, storage: "128GB", ip: "IP54", fiveG: true, sound: "Stereo", chargingSpeed: 45, wirelessCharging: true, ois: true, videoQuality: "4K", dolbyAtmos: false, buildMaterial: "Glass", wifi6: true, nfc: true, bluetooth: "5.3", fingerprintType: "In-Display", faceUnlock: true, androidVersion: "Android 14" }
    },
    {
        id: "m5", type: "mobile", brand: "Google", name: "Pixel 9 Pro XL", price: 124999,
        image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=400&auto=format&fit=crop&q=60",
        category: "Photography",
        verdict: "The smartest AI phone with the most natural photography experience.",
        rating: 9.5,
        bestFor: "AI Enthusiasts & Photographers",
        whoAvoid: "Hardcore gamers needing sustained peak performance.",
        sentiment: { pos: 86, neu: 10, neg: 4 },
        pros: ["Best-in-class Gemini AI integration", "Super Res Zoom detail", "Cleanest Android experience"],
        cons: ["Tensor G4 lags behind Snapdragon in gaming", "Slow charging (37W)", "High price-to-performance ratio for hardware"],
        performance: {
            battery: "7-8hr SOT; smart battery management helps.",
            gaming: "Handles casual games great; throttles in 120fps Warzone.",
            camera: "Industry benchmark for skin tones and HDR balance.",
            display: "Super Actua display is incredibly bright (3000 nits).",
            smoothness: "Pure Pixel UI is the smoothest software on Android.",
            heating: "Stays cool during photography; warms up during AI tasks.",
            build: "Matte glass with polished rails; very elegant.",
            sound: "Balanced stereo speakers; great vocal clarity."
        },
        specs: { processor: "Google Tensor G4", batteryCapacity: 5060, displayType: "LTPO OLED", brightness: 3000, refreshRate: "120Hz", cameraMP: 50, storage: "256GB", ip: "IP68", fiveG: true, sound: "Stereo", chargingSpeed: 37, wirelessCharging: true, ois: true, videoQuality: "4K", dolbyAtmos: true, buildMaterial: "Glass/Metal", wifi6: true, nfc: true, bluetooth: "5.3", fingerprintType: "In-Display", faceUnlock: true, androidVersion: "Android 14" }
    },
    {
        id: "m6", type: "mobile", brand: "Samsung", name: "Galaxy A55", price: 39999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "The dependable mid-range king. Flagship build at a fraction of the cost.",
        rating: 8.4,
        bestFor: "Students & Corporate Users",
        whoAvoid: "Users wanting high-end mobile photography or fast charging.",
        sentiment: { pos: 80, neu: 12, neg: 8 },
        pros: ["Premium Metal & Glass build", "Samsung Knox Vault security", "Great 4-year OS update policy"],
        cons: ["Exynos 1480 is average for gaming", "Thick bezels compared to rivals", "No wireless charging"],
        performance: {
            battery: "Excellent 2-day battery for light users.",
            gaming: "Perfect for MLBB or PUBG on Medium settings.",
            camera: "Good daylight shots; struggles in low light moving shots.",
            display: "Beautiful 120Hz AMOLED; slightly thick bezels.",
            smoothness: "One UI stays fluid for daily tasks.",
            heating: "Very stable thermals; never gets hot.",
            build: "Metal frame feels much better than previous A54.",
            sound: "Standard stereo speakers; lacks bass."
        },
        specs: { processor: "Exynos 1480", batteryCapacity: 5000, displayType: "AMOLED", brightness: 1000, refreshRate: "120Hz", cameraMP: 50, storage: "128GB", ip: "IP67", fiveG: true, sound: "Stereo", chargingSpeed: 25, wirelessCharging: false, ois: true, videoQuality: "4K", dolbyAtmos: true, buildMaterial: "Metal/Glass", wifi6: true, nfc: true, bluetooth: "5.3", fingerprintType: "In-Display", faceUnlock: true, androidVersion: "Android 14" }
    },
    {
        id: "m7", type: "mobile", brand: "Xiaomi", name: "Redmi A3", price: 6999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "Premium leather-like design at an entry-level price.",
        rating: 7.2,
        bestFor: "Basic Usage & Secondary Phone",
        whoAvoid: "Heavy multitaskers or gamers.",
        sentiment: { pos: 70, neu: 20, neg: 10 },
        pros: ["Elegant design", "Large 90Hz display", "Great battery life"],
        cons: ["Slow charging", "Average cameras", "Limited performance"],
        performance: {
            battery: "Easily lasts over a day with regular tasks.",
            gaming: "Only for very light games like Candy Crush.",
            camera: "Functional for basic daylight snaps.",
            display: "Smooth 90Hz for the price point."
        },
        specs: { processor: "Helio G36", batteryCapacity: 5000, displayType: "LCD", brightness: 500, refreshRate: "90Hz", cameraMP: 8, storage: "64GB", ip: "None", fiveG: false, sound: "Mono", chargingSpeed: 10, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.0", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 14 Go" }
    },
    {
        id: "m8", type: "mobile", brand: "Poco", name: "Poco C61", price: 6499,
        image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "The most affordable way to get 90Hz and a clean look.",
        rating: 7.0,
        bestFor: "Budget-first buyers",
        whoAvoid: "Users needing fast data or good photography.",
        sentiment: { pos: 65, neu: 25, neg: 10 },
        pros: ["Very low price", "Premium looks", "Reliable battery"],
        cons: ["Micro-USB charging", "Slow app opening", "Weak speaker"],
        performance: {
            battery: "5000mAh battery ensures all-day longevity.",
            gaming: "Not recommended for gaming.",
            camera: "Basic 8MP for essential shots."
        },
        specs: { processor: "Helio G36", batteryCapacity: 5000, displayType: "LCD", brightness: 450, refreshRate: "90Hz", cameraMP: 8, storage: "64GB", ip: "None", fiveG: false, sound: "Mono", chargingSpeed: 10, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.0", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 14 Go" }
    },
    {
        id: "m9", type: "mobile", brand: "itel", name: "itel P55", price: 8999,
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "Surprisingly capable budget phone with 5G connectivity.",
        rating: 7.5,
        bestFor: "Affordable 5G access",
        whoAvoid: "Users needing high-quality screens or cameras.",
        sentiment: { pos: 75, neu: 15, neg: 10 },
        pros: ["Cheapest 5G phone", "Good RAM management", "Decent build"],
        cons: ["Low resolution display", "Mono speaker", "Slow charging"],
        performance: {
            battery: "Solid day-long life even on 5G.",
            gaming: "Can handle casual games smoothly.",
            camera: "Average 50MP main sensor."
        },
        specs: { processor: "Dimensity 6080", batteryCapacity: 5000, displayType: "LCD", brightness: 480, refreshRate: "90Hz", cameraMP: 50, storage: "128GB", ip: "None", fiveG: true, sound: "Mono", chargingSpeed: 18, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.1", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 13" }
    },
    {
        id: "m10", type: "mobile", brand: "Realme", name: "Realme C53", price: 9999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "The big screen budget king with a premium design aesthetic.",
        rating: 7.4,
        bestFor: "Media Consumption",
        whoAvoid: "Gamers or power users.",
        sentiment: { pos: 78, neu: 12, neg: 10 },
        pros: ["High refresh rate display", "Sleek iPhone-like design", "Massive battery"],
        performance: { battery: "Excellent two-day battery life.", display: "Smooth 90Hz panel for better scrolling." },
        specs: { processor: "Unisoc T612", batteryCapacity: 5000, displayType: "LCD", brightness: 560, refreshRate: "90Hz", cameraMP: 108, storage: "128GB", ip: "None", fiveG: false, sound: "Mono", chargingSpeed: 33, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.0", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 13" }
    },
    {
        id: "m11", type: "mobile", brand: "Samsung", name: "Galaxy M13", price: 9499,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "Dependable Samsung quality at an extremely competitive price.",
        rating: 7.3,
        bestFor: "Reliable daily usage",
        whoAvoid: "Users wanting fast performance.",
        sentiment: { pos: 82, neu: 10, neg: 8 },
        pros: ["FHD+ High Res Screen", "Auto Data Switching", "Samsung software reliability"],
        specs: { processor: "Exynos 850", batteryCapacity: 6000, displayType: "LCD", brightness: 450, refreshRate: "60Hz", cameraMP: 50, storage: "64GB", ip: "None", fiveG: false, sound: "Mono", chargingSpeed: 15, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.0", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 13" }
    },
    {
        id: "m12", type: "mobile", brand: "Infinix", name: "Infinix Hot 40i", price: 8299,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "High storage capacity at a price that challenges all rivals.",
        rating: 7.6,
        bestFor: "Storage-hungry budget users",
        whoAvoid: "Heavy camera users.",
        specs: { processor: "Unisoc T606", batteryCapacity: 5000, displayType: "LCD", brightness: 480, refreshRate: "90Hz", cameraMP: 50, storage: "256GB", ip: "None", fiveG: false, sound: "Mono", chargingSpeed: 18, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.0", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 13" }
    },
    {
        id: "m13", type: "mobile", brand: "Tecno", name: "Tecno Spark 20", price: 9499,
        image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "Great design and speaker quality in the sub-10k segment.",
        rating: 7.4,
        bestFor: "Design enthusiasts on a budget",
        specs: { processor: "Helio G85", batteryCapacity: 5000, displayType: "LCD", brightness: 480, refreshRate: "90Hz", cameraMP: 50, storage: "256GB", ip: "IP53", fiveG: false, sound: "Stereo", chargingSpeed: 18, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.2", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 13" }
    },
    {
        id: "m14", type: "mobile", brand: "Xiaomi", name: "Redmi A2", price: 5499,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "The absolute entry-level choice for basic connectivity.",
        rating: 6.5,
        bestFor: "First-time smartphone users",
        specs: { processor: "Helio G36", batteryCapacity: 5000, displayType: "LCD", brightness: 400, refreshRate: "60Hz", cameraMP: 8, storage: "32GB", ip: "None", fiveG: false, sound: "Mono", chargingSpeed: 10, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.0", fingerprintType: "None", faceUnlock: false, androidVersion: "Android 13 Go" }
    },
    {
        id: "m15", type: "mobile", brand: "Samsung", name: "Galaxy F15 5G", price: 9999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=60",
        category: "Work",
        verdict: "The only sub-10k phone with a 90Hz sAMOLED and 4 years of OS updates.",
        rating: 7.9,
        bestFor: "Long-term usage on a budget",
        specs: { processor: "Dimensity 6100+", batteryCapacity: 6000, displayType: "AMOLED", brightness: 800, refreshRate: "90Hz", cameraMP: 50, storage: "128GB", ip: "None", fiveG: true, sound: "Mono", chargingSpeed: 25, wirelessCharging: false, ois: false, videoQuality: "1080p", dolbyAtmos: false, buildMaterial: "Plastic", wifi6: false, nfc: false, bluetooth: "5.3", fingerprintType: "Side", faceUnlock: true, androidVersion: "Android 14" }
    }
];

export const LAPTOP_CATALOG = [
    {
        id: "l1", type: "laptop", brand: "Apple", name: "MacBook Pro M3 Pro", price: 199900,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60",
        category: "Design",
        verdict: "The absolute efficiency king for creative professionals on the go.",
        rating: 9.6,
        bestFor: "Graphic Designers, Students & Coders",
        whoAvoid: "Hardcore gamers or those needing Windows-only industrial software.",
        sentiment: { pos: 94, neu: 4, neg: 2 },
        pros: ["Industry-leading 22hr battery life", "Silent operation even under load", "Phenomenal Liquid Retina XDR"],
        cons: ["Limited legacy port selection", "Expensive RAM/Storage upgrades", "Not compatible with many AAA games"],
        complaints: ["Notch in display", "Limited to two external displays on Pro chip", "Space Black attracts fingerprints"],
        performance: {
            battery: "15-18 hours real usage; lasts a whole work day plus some.",
            gaming: "Great for optimized titles (RE Village); others need Crossover.",
            camera: "1080p FaceTime camera is sharp; solid mics.",
            display: "120Hz ProMotion with 1600 nits HDR is unmatched.",
            smoothness: "macOS Sonoma on M3 Pro is instantaneous.",
            heating: "Virtually never gets hot; fans rarely turn on.",
            build: "Unibody aluminum; the gold standard of laptop build.",
            sound: "6-speaker sound system is best in class.",
            fiveG: "N/A (WiFi 6E is fast though)."
        },
        videoCategories: {
            top: [
                { title: "MBP M3 Pro: Real World Pro Test", channel: "Dave2D", views: "1.8M", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            latest: [
                { title: "M3 Pro vs M4: Should you wait?", channel: "Max Tech", views: "400K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            longTerm: [
                { title: "MacBook Pro M3: 6 Months Review", channel: "Matthew Moniz", views: "300K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ],
            comparison: [
                { title: "M3 Pro vs Surface Laptop 7", channel: "The Verge", views: "500K", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ]
        },
        specs: { processor: "Apple M3 Pro", ram: "18GB", gpu: "14-Core Apple", storage: "512GB SSD", battery: "18 Hours", displayType: "Liquid Retina XDR", weight: "1.6kg" }
    },
    {
        id: "l2", type: "laptop", brand: "Dell", name: "XPS 16 (2024)", price: 215000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785bf67e45?w=400&auto=format&fit=crop&q=60",
        category: "Gaming",
        verdict: "Futuristic design meets desktop-class power. Luxury in every pixel.",
        rating: 9.0,
        bestFor: "Corporate Leaders & Creative Directors",
        whoAvoid: "Users who dislike capacitive touch rows or invisible trackpads.",
        sentiment: { pos: 78, neu: 15, neg: 7 },
        pros: ["Infinitely sleek InfinityEdge Display", "Invisible Haptic Trackpad", "RTX 4070 GPU for serious work"],
        cons: ["Capacitive function keys are polarizing", "Heavier than Mac competitors", "Price premium for the design"],
        complaints: ["Keyboard learning curve", "Thermal fan noise during Render", "Limited 3x USB-C connectivity"],
        performance: {
            battery: "6-8 hours intensive; 10 hours browsing (OLED model).",
            gaming: "Solid performance on RTX Titles; handles 4K Video edits easily.",
            camera: "1080p sensor is much improved over legacy XPS.",
            display: "4K OLED Touch option is the best Windows panel available.",
            smoothness: "Windows 11 with 120Hz on OLED is incredibly crisp.",
            heating: "Gets warm under load; fans are audible during heavy tasks.",
            build: "CNC machined aluminum with glass palm rest; stunning.",
            sound: "Quad-speaker array; loud and clear, but lacks Mac's low end.",
            fiveG: "N/A"
        },
        videoCategories: {
            top: [
                { title: "XPS 16 (2024): The Future is Here", channel: "Dave2D", views: "1.5M", url: "https://www.youtube.com/embed/5U7gTqX0M1s" }
            ],
            latest: [
                { title: "XPS 16 vs MacBook Pro M3 Max", channel: "Just Josh", views: "450K", url: "https://www.youtube.com/embed/5U7gTqX0M1s" }
            ],
            longTerm: [
                { title: "XPS 16: 2 Months Later Review", channel: "TechRader", views: "120K", url: "https://www.youtube.com/embed/5U7gTqX0M1s" }
            ],
            comparison: [
                { title: "XPS 16 vs Razer Blade 16", channel: "Hardware Canucks", views: "300K", url: "https://www.youtube.com/embed/5U7gTqX0M1s" }
            ]
        },
        specs: { processor: "Intel Core Ultra 7", ram: "32GB", gpu: "NVIDIA RTX 4070", storage: "1TB SSD", battery: "12 Hours", displayType: "4K OLED Touch", weight: "2.1kg" }
    },
    {
        id: "l3", type: "laptop", brand: "ASUS", name: "ROG Zephyrus G16", price: 189990,
        image: "https://images.unsplash.com/photo-1593642632823-8f785bf67e45?w=400&auto=format&fit=crop&q=60",
        category: "Gaming",
        verdict: "The ultimate thin-and-light gaming machine. Unbeatable OLED display.",
        rating: 9.3,
        bestFor: "Gamers & Creative Pros",
        whoAvoid: "Users needing silent operation during gaming.",
        sentiment: { pos: 88, neu: 8, neg: 4 },
        pros: ["First 240Hz OLED on a laptop", "Ultra-thin CNC aluminum chassis", "Powerful RTX 4080 options"],
        cons: ["Soldered RAM in many regions", "Fans get loud in Turbo mode", "Prone to fingerprints"],
        performance: {
            battery: "6-7 hours for productivity; 1 hour for gaming.",
            gaming: "Best-in-class frame rates for a 16-inch laptop.",
            camera: "1080p IR camera for Windows Hello.",
            display: "The 2.5K OLED 240Hz panel is a visual masterpiece.",
            build: "Minimalist 'Slash Lighting' back; feels very robust."
        },
        videoCategories: {
            top: [
                { title: "G16 OLED: Review", channel: "Dave2D", views: "2M", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
            ]
        },
        specs: { processor: "Intel Core Ultra 9", ram: "32GB", gpu: "NVIDIA RTX 4080", storage: "1TB SSD", battery: "8 Hours", displayType: "OLED 240Hz", weight: "1.85kg" }
    },
    {
        id: "l4", type: "laptop", brand: "HP", name: "Spectre x360 14", price: 145000,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60",
        category: "Office",
        verdict: "The perfect 2-in-1. Versatility meets incredible design and performance.",
        rating: 9.1,
        bestFor: "Corporate Professionals & Students",
        whoAvoid: "Gamers or those needing large 16\" work surfaces.",
        sentiment: { pos: 90, neu: 7, neg: 3 },
        pros: ["Incredible 9MP webcam", "Industry-best haptic trackpad", "Stunning 2.8K OLED display"],
        cons: ["Battery life is good, not Mac-level", "Limited ports", "Slightly reflective screen"],
        performance: {
            battery: "10-12 hours real-world productivity.",
            gaming: "Intel Arc graphics handle light esports great.",
            camera: "9MP sensor is actually better than most flagships.",
            display: "Variable refresh rate (120Hz) OLED is super crisp."
        },
        specs: { processor: "Intel Core Ultra 5", ram: "16GB", gpu: "Intel Arc Graphics", storage: "512GB SSD", battery: "12 Hours", displayType: "OLED 120Hz", weight: "1.45kg" }
    },
    {
        id: "l5", type: "laptop", brand: "Lenovo", name: "IdeaPad Slim 3", price: 34990,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&auto=format&fit=crop&q=60",
        category: "Office",
        verdict: "The best value for students and basic office work. Reliable and light.",
        rating: 8.2,
        bestFor: "Students & Basic Productivity",
        whoAvoid: "Heavy video editors or gamers.",
        sentiment: { pos: 82, neu: 12, neg: 6 },
        pros: ["Great keyboard for typing", "Privacy shutter for webcam", "Balanced port selection"],
        cons: ["Display brightness is average", "Plastic build quality", "Basic speakers"],
        performance: {
            battery: "6-7 hours of web browsing.",
            gaming: "Handles casual games like Minecraft.",
            camera: "720p with physical shutter.",
            display: "FHD IPS with anti-glare.",
            build: "Sturdy plastic; lightweight at 1.6kg."
        },
        specs: { processor: "Core i3 12th Gen", ram: "8GB", gpu: "Intel UHD", storage: "512GB SSD", battery: "7 Hours", displayType: "FHD IPS", weight: "1.62kg" }
    },
    {
        id: "l6", type: "laptop", brand: "HP", name: "Laptop 15s", price: 46990,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&auto=format&fit=crop&q=60",
        category: "Office",
        verdict: "A dependable all-rounder with a large screen and fast charging.",
        rating: 8.4,
        bestFor: "Work from home & Online classes",
        whoAvoid: "People needing premium metal finishes.",
        sentiment: { pos: 85, neu: 10, neg: 5 },
        pros: ["Numeric keypad included", "Fast charging (50% in 45 mins)", "Thin bezels"],
        cons: ["Trackpad feels a bit hollow", "Standard 250 nits display"],
        performance: {
            battery: "7-8 hours; good for a full day of light work.",
            gaming: "Integrated Radeon graphics handle light esports.",
            camera: "HP True Vision 720p."
        },
        specs: { processor: "Ryzen 5 5500U", ram: "16GB", gpu: "AMD Radeon", storage: "512GB SSD", battery: "8 Hours", displayType: "FHD", weight: "1.69kg" }
    },
    {
        id: "l7", type: "laptop", brand: "ASUS", name: "VivoBook 16", price: 54990,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&auto=format&fit=crop&q=60",
        category: "Office",
        verdict: "Massive 16-inch display in a compact chassis. Perfect for multitasking.",
        rating: 8.6,
        bestFor: "Content Consumers & Spreadsheet Users",
        whoAvoid: "Those needing a small, portable 13-inch device.",
        sentiment: { pos: 88, neu: 7, neg: 5 },
        pros: ["Large 16:10 aspect ratio screen", "180-degree lay-flat hinge", "ASUS Antimicrobial Guard"],
        cons: ["16-inch size can be bulky in small bags", "USB 2.0 port still present"],
        specs: { processor: "Ryzen 7 5800H", ram: "16GB", gpu: "AMD Radeon", storage: "512GB SSD", battery: "6 Hours", displayType: "IPS 16:10", weight: "1.88kg" }
    },
    {
        id: "l8", type: "laptop", brand: "Acer", name: "Aspire 5", price: 38990,
        image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d7?w=400&auto=format&fit=crop&q=60",
        category: "Office",
        verdict: "Strong connectivity and upgradable storage make this a practical choice.",
        rating: 8.1,
        bestFor: "Small business owners",
        whoAvoid: "Users looking for high-end gaming.",
        sentiment: { pos: 80, neu: 15, neg: 5 },
        pros: ["Ethernet port included", "Upgradable RAM/SSD slots", "Aluminum top cover"],
        cons: ["Display colors are slightly muted", "Fan can get audible"],
        specs: { processor: "Intel Core i5 12th Gen", ram: "8GB", gpu: "Intel Iris Xe", storage: "512GB SSD", battery: "7 Hours", displayType: "FHD IPS", weight: "1.65kg" }
    },
    {
        id: "l9", type: "laptop", brand: "Redmi", name: "RedmiBook Pro 15", price: 47999,
        image: "https://images.unsplash.com/photo-1611078481462-8e6ad1c890cc?w=400&auto=format&fit=crop&q=60",
        category: "Office",
        verdict: "Premium metal build usually found in much more expensive laptops.",
        rating: 8.8,
        bestFor: "Style-conscious professionals",
        whoAvoid: "Users needing extensive localized service networks.",
        sentiment: { pos: 90, neu: 5, neg: 5 },
        pros: ["Superior CNC machined aluminum body", "Very bright 3.2K display", "Excellent battery life for the price"],
        cons: ["Limited brand history in laptops", "Soldered RAM"],
        specs: { processor: "Intel Core i5 11th Gen", ram: "8GB", gpu: "Intel Iris Xe", storage: "512GB SSD", battery: "10 Hours", displayType: "3.2K 90Hz", weight: "1.7kg" }
    },
    {
        id: "l10", type: "laptop", brand: "Infinix", name: "ZERO Book", price: 59990,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60",
        category: "Gaming",
        verdict: "Incredible specs for the price; pushes the boundary of value computing.",
        rating: 8.7,
        bestFor: "Spec-hungry users on a budget",
        whoAvoid: "Users who prefer established legacy brands.",
        sentiment: { pos: 84, neu: 10, neg: 6 },
        pros: ["Tweakable physical performance switch", "Backlit keyboard with custom intensity", "96% sRGB Display"],
        cons: ["Software can feel unpolished", "Brand recognition is low"],
        specs: { processor: "Intel Core i9 12th Gen", ram: "16GB", gpu: "Intel Iris Xe", storage: "512GB SSD", battery: "8 Hours", displayType: "FHD 100% sRGB", weight: "1.8kg" }
    }
];
