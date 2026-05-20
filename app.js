/* ==========================================================================
   TuT Pharaonic Cafe Menu Creator - JavaScript Application Logic
   ========================================================================== */

// --- Pharaonic SVG Icon Library ---
const LOGO_ICONS = {
    ankh: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,5 C38.95,5 30,13.95 30,25 C30,34.2 36.2,42 44.6,44.5 L44.6,58 L32,58 C29.8,58 28,59.8 28,62 C28,64.2 29.8,66 32,66 L44.6,66 L44.6,90 C44.6,92.2 46.4,94 48.6,94 L51.4,94 C53.6,94 55.4,92.2 55.4,90 L55.4,66 L68,66 C70.2,66 72,64.2 72,62 C72,59.8 70.2,58 68,58 L55.4,58 L55.4,44.5 C63.8,42 70,34.2 70,25 C70,13.95 61.05,5 50,5 Z M50,38 C42.83,38 37,32.17 37,25 C37,17.83 42.83,12 50,12 C57.17,12 63,17.83 63,25 C63,32.17 57.17,38 50,38 Z"/>
    </svg>`,
    eye_of_ra: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,15 C25.5,15 5.5,35 2.5,38.5 C0.8,40.5 0.8,43.5 2.5,45.5 C5.5,49 25.5,69 50,69 C74.5,69 94.5,49 97.5,45.5 C99.2,43.5 99.2,40.5 97.5,38.5 C94.5,35 74.5,15 50,15 Z M50,62 C39,62 30,53 30,42 C30,31 39,22 50,22 C61,22 70,31 70,42 C70,53 61,62 50,62 Z M50,30 C43.4,30 38,35.4 38,42 C38,48.6 43.4,54 50,54 C56.6,54 62,48.6 62,42 C62,35.4 56.6,30 50,30 Z M76,23 C73.8,23 72,24.8 72,27 L72,32 C72,34.2 73.8,36 76,36 C78.2,36 80,34.2 80,32 L80,27 C80,24.8 78.2,23 76,23 Z M42,75 L42,93 C42,94.7 43.3,96 45,96 C46.7,96 48,94.7 48,93 L48,81 C48,79.3 49.3,78 51,78 L66,78 C67.7,78 69,76.7 69,75 C69,73.3 67.7,72 66,72 L45,72 C43.3,72 42,73.3 42,75 Z"/>
    </svg>`,
    lotus: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,91 C50.5,91 51.1,90.8 51.5,90.5 C59.9,84.7 68.2,74.5 73.9,64.2 C80.3,52.5 83.2,40.5 81.3,33.5 C79.4,26.5 71.9,23.3 64.9,25.8 C61.9,26.9 59.1,28.6 56.6,30.8 C54.8,24.2 51.6,18.8 47.9,15.6 C46.8,14.7 45.3,14.7 44.2,15.6 C40.5,18.8 37.3,24.2 35.5,30.8 C33,28.6 30.2,26.9 27.2,25.8 C20.2,23.3 12.7,26.5 10.8,33.5 C8.9,40.5 11.8,52.5 18.2,64.2 C23.9,74.5 32.2,84.7 40.6,90.5 C41,90.8 41.6,91 42.1,91 L50,91 Z M50,22.8 C51.7,26.2 53.4,31.7 54.3,38.1 C54.5,39.6 55.6,40.7 57.1,41 C62.5,41.9 67.6,41.4 71.7,39.6 C74.2,38.5 76.5,38.3 77.2,40.7 C77.8,43.1 76.1,49.5 71.4,58 C66.8,66.3 59.8,74.8 52.8,80 C50,77.5 47,73 45.2,68 C44.5,66 42.4,64.8 40.2,65.3 C35.2,66.4 30,65.7 25.8,63.3 C24.1,62.3 23,61 22.8,59 C21.4,49.2 24.3,42.5 28.3,39.6 C32.4,41.4 37.5,41.9 42.9,41 C44.4,40.7 45.5,39.6 45.7,38.1 C46.6,31.7 48.3,26.2 50,22.8 Z"/>
    </svg>`,
    pyramids: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,15 L10,85 L50,85 L50,15 Z" fill-opacity="0.9"/>
        <path d="M50,15 L90,85 L50,85 L50,15 Z" fill-opacity="0.6"/>
        <path d="M30,50 L5,85 L30,85 L30,50 Z" fill-opacity="0.8"/>
        <path d="M30,50 L55,85 L30,85 L30,50 Z" fill-opacity="0.5"/>
    </svg>`,
    scarab: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,10 C42.8,10 37,15.8 37,23 C37,26.4 38.3,29.5 40.4,31.8 C31.7,34.4 25,42.5 25,52.3 C25,65.4 35.6,76 48.7,76 C49.2,76 49.6,76 50.1,76 C63.2,75.8 73.7,65.1 73.7,52 C73.7,42.2 67,34.2 58.4,31.6 C60.6,29.3 61.9,26.2 61.9,22.8 C61.9,15.8 56.1,10 50,10 Z M50,16 C53.8,16 56.9,19.1 56.9,22.8 C56.9,26.6 53.8,29.7 50,29.7 C46.2,29.7 43.1,26.6 43.1,22.8 C43.1,19.1 46.2,16 50,16 Z M48.7,37.3 C37,38.6 31.7,46.5 31.7,52.3 C31.7,54 32.2,55.5 33,56.8 L48.7,45 L48.7,37.3 Z M51.4,37.3 L51.4,45 L67,56.8 C67.8,55.5 68.3,54 68.3,52.3 C68.3,46.5 63,38.6 51.4,37.3 Z M48.7,50 L32.2,62.3 C35.4,68.4 41.8,72.6 49.2,72.7 L49.2,50 L48.7,50 Z M51.4,50 L51.4,72.7 C58.8,72.6 65.2,68.4 68.4,62.3 L51.9,50 L51.4,50 Z"/>
    </svg>`,
    none: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="90" x2="90" y2="10" stroke="currentColor" stroke-width="4" opacity="0.3"/></svg>`
};

// --- 36 Pharaonic Templates Specifications ---
const MENU_TEMPLATES = [
    { id: 'golden-cartouche', name: 'Golden Cartouche', class: 'theme-golden-cartouche', thumb: 'thumb-gold-cartouche', desc: 'Obsidian & Gold framing' },
    { id: 'lapis-royal', name: 'Lapis Royal', class: 'theme-lapis-royal', thumb: 'thumb-lapis-royal', desc: 'Lapis Lazuli & Gold royalty' },
    { id: 'papyrus-scroll', name: 'Papyrus Scroll', class: 'theme-papyrus-scroll', thumb: 'thumb-papyrus-scroll', desc: 'Aged scroll & dark ink' },
    { id: 'emerald-nile', name: 'Emerald Nile', class: 'theme-emerald-nile', thumb: 'thumb-emerald-nile', desc: 'Forest green & gold details' },
    { id: 'sandstone-tomb', name: 'Sandstone Tomb', class: 'theme-sandstone-tomb', thumb: 'thumb-sandstone-tomb', desc: 'Terracotta sand carvings' },
    { id: 'modern-giza', name: 'Modern Giza', class: 'theme-modern-giza', thumb: 'thumb-modern-giza', desc: 'Minimalist geometric lines' },
    { id: 'sun-of-amon', name: 'Sun of Amon', class: 'theme-sun-of-amon', thumb: 'thumb-sun-of-amon', desc: 'Radiant warm gold & cream' },
    { id: 'turquoise-bazaar', name: 'Turquoise Bazaar', class: 'theme-turquoise-bazaar', thumb: 'thumb-turquoise-bazaar', desc: 'Turquoise & warm sand accents' },
    { id: 'nefertiti-elegant', name: 'Nefertiti Elegant', class: 'theme-nefertiti-elegant', thumb: 'thumb-nefertiti-elegant', desc: 'Delicate high-end luxury rose' },
    { id: 'hieroglyph-deco', name: 'Hieroglyph Deco', class: 'theme-hieroglyph-deco', thumb: 'thumb-hieroglyph-deco', desc: 'Art deco fused with Egyptian structure' },
    { id: 'obsidian-night', name: 'Obsidian Night', class: 'theme-obsidian-night', thumb: 'thumb-obsidian-night', desc: 'Stealth black & neon cyan glow' },
    { id: 'alexandria-bistro', name: 'Alexandria Bistro', class: 'theme-alexandria-bistro', thumb: 'thumb-alexandria-bistro', desc: 'Burgundy & papyrus bistro' },
    
    // Templates 13-24
    { id: 'sacred-scarab', name: 'Sacred Scarab', class: 'theme-sacred-scarab', thumb: 'thumb-sacred-scarab', desc: 'Deep violet-black & bronze-gold' },
    { id: 'karnak-pillar', name: 'Karnak Pillar', class: 'theme-karnak-pillar', thumb: 'thumb-karnak-pillar', desc: 'Terracotta & dark slate columns' },
    { id: 'queen-cleopatra', name: 'Queen Cleopatra', class: 'theme-queen-cleopatra', thumb: 'thumb-queen-cleopatra', desc: 'Royal purple & rose gold luxury' },
    { id: 'valley-kings', name: 'Valley of Kings', class: 'theme-valley-kings', thumb: 'thumb-valley-kings', desc: 'Charcoal & sunburst yellow' },
    { id: 'horus-falcon', name: 'Horus Falcon', class: 'theme-horus-falcon', thumb: 'thumb-horus-falcon', desc: 'Slate grey & geometric brass' },
    { id: 'sacred-lotus', name: 'Sacred Lotus', class: 'theme-sacred-lotus', thumb: 'thumb-sacred-lotus', desc: 'Soft sage linen & copper details' },
    { id: 'isis-blessing', name: 'Isis Blessing', class: 'theme-isis-blessing', thumb: 'thumb-isis-blessing', desc: 'Celestial sand & copper sunset' },
    { id: 'anubis-guard', name: 'Anubis Guard', class: 'theme-anubis-guard', thumb: 'thumb-anubis-guard', desc: 'Stealth black & terracotta orange' },
    { id: 'sphinx-monolith', name: 'Sphinx Monolith', class: 'theme-sphinx-monolith', thumb: 'thumb-sphinx-monolith', desc: 'Chiseled stone & slate grey' },
    { id: 'avaris-oasis', name: 'Avaris Oasis', class: 'theme-avaris-oasis', thumb: 'thumb-avaris-oasis', desc: 'Vibrant oasis green & gold leaf' },
    { id: 'ramses-eternal', name: 'Ramses Eternal', class: 'theme-ramses-eternal', thumb: 'thumb-ramses-eternal', desc: 'Imperial crimson & heavy gold border' },
    { id: 'osiris-rebirth', name: 'Osiris Rebirth', class: 'theme-osiris-rebirth', thumb: 'thumb-osiris-rebirth', desc: 'Midnight teal & desert copper' },

    // 12 More Unique Templates (25-36)
    { id: 'gilded-pharaoh', name: 'Gilded Pharaoh', class: 'theme-gilded-pharaoh', thumb: 'thumb-gilded-pharaoh', desc: 'Brilliant gold & royal navy' },
    { id: 'bastet-cat', name: 'Bastet Cat', class: 'theme-bastet-cat', thumb: 'thumb-bastet-cat', desc: 'Warm cream & cat-bronze details' },
    { id: 'sobek-river', name: 'Sobek River', class: 'theme-sobek-river', thumb: 'thumb-sobek-river', desc: 'Deep crocodile green & dark brass' },
    { id: 'heliopolis-sun', name: 'Heliopolis Sun', class: 'theme-heliopolis-sun', thumb: 'thumb-heliopolis-sun', desc: 'Vibrant sun gradient & gold line' },
    { id: 'ptah-architect', name: 'Ptah Architect', class: 'theme-ptah-architect', thumb: 'thumb-ptah-architect', desc: 'Dark slate & silver architectural lines' },
    { id: 'hathor-love', name: 'Hathor Love', class: 'theme-hathor-love', thumb: 'thumb-hathor-love', desc: 'Blush rose-cream & golden accents' },
    { id: 'khnum-clay', name: 'Khnum Clay', class: 'theme-khnum-clay', thumb: 'thumb-khnum-clay', desc: 'Pottery terracotta clay & cream' },
    { id: 'thoth-wisdom', name: 'Thoth Wisdom', class: 'theme-thoth-wisdom', thumb: 'thumb-thoth-wisdom', desc: 'Ancient library ivory & dark slate' },
    { id: 'sekhmet-fire', name: 'Sekhmet Fire', class: 'theme-sekhmet-fire', thumb: 'thumb-sekhmet-fire', desc: 'Fierce burgundy & burning gold' },
    { id: 'memphis-classic', name: 'Memphis Classic', class: 'theme-memphis-classic', thumb: 'thumb-memphis-classic', desc: 'High-contrast cream & black-gold frames' },
    { id: 'amun-shadow', name: 'Amun Shadow', class: 'theme-amun-shadow', thumb: 'thumb-amun-shadow', desc: 'Shadow grey & solid bronze-gold' },
    { id: 'nile-delta', name: 'Nile Delta', class: 'theme-nile-delta', thumb: 'thumb-nile-delta', desc: 'Nile teal & glowing sand-gold' }
];

// --- Default Pharaonic Demo Menu Items ---
const DEFAULT_MENU_DATA = {
    activeTemplate: 'golden-cartouche',
    cafeName: 'TuT',
    cafeTagline: 'Brews of the Pharaohs',
    menuFooter: 'Ancient recipes served daily. Taxes included. Please inform us of any allergies.',
    logoIcon: 'ankh',
    paperSize: 'a4',
    paperOrientation: 'portrait',
    fontScale: 100,
    itemSpacing: 3,
    currencySymbol: 'EGP',
    showDescriptions: true,
    showDottedLeaders: true,
    colorBg: null,
    colorText: null,
    colorGold: null,
    colorSecondary: null,
    
    pages: [
        { id: 'page-1', title: 'Page 1' },
        { id: 'page-2', title: 'Page 2' }
    ],
    
    customStyle: {
        headerFont: 'default',
        bodyFont: 'default',
        titleSize: 100,
        categorySize: 100,
        itemSize: 100,
        descSize: 100,
        watermarkOpacity: 15,
        watermarkScale: 50,
        dividerStyle: 'solid'
    },
    
    categories: [
        {
            id: 'cat-1',
            name: 'Espresso & Coffee Brews',
            pageId: 'page-1',
            items: [
                { id: 'item-1-1', name: 'Royal Gold Latte', desc: 'Espresso with velvety steamed milk, organic honey, and a touch of saffron.', price: '95', tag: 'royal' },
                { 
                    id: 'item-1-2', 
                    name: 'Iced Spanish Latte', 
                    desc: 'Double shot of espresso, chilled milk, and condensed milk over ice.', 
                    price: '', 
                    tag: 'best',
                    isMultiPrice: true,
                    prices: [
                        { label: 'S', value: '75' },
                        { label: 'L', value: '95' }
                    ]
                },
                { id: 'item-1-3', name: 'Flat White', desc: 'Double shot of espresso with thin layer of velvety microfoam.', price: '70', tag: '' },
                { id: 'item-1-4', name: 'Pharaoh\'s Cold Brew', desc: 'Smooth, 18-hour cold-brewed coffee served over ice.', price: '85', tag: 'best' },
                {
                    id: 'item-1-5',
                    name: 'Turkish Coffee',
                    desc: 'Traditional dark-roasted coffee brewed in a brass cezve, served with foam.',
                    price: '',
                    tag: 'new',
                    isMultiPrice: true,
                    prices: [
                        { label: 'Single', value: '45' },
                        { label: 'Double', value: '60' }
                    ]
                }
            ]
        },
        {
            id: 'cat-2',
            name: 'Teas & Herbal Infusions',
            pageId: 'page-1',
            items: [
                { id: 'item-2-1', name: 'Iced Hibiscus Tea (Karkadeh)', desc: 'Vibrant, chilled hibiscus flower infusion sweetened with dates and cinnamon.', price: '60', tag: 'best' },
                { id: 'item-2-2', name: 'Mint & Green Tea', desc: 'Steeped organic green tea leaves with fresh local mint.', price: '55', tag: '' },
                { id: 'item-2-3', name: 'Cleopatra\'s Chai Latte', desc: 'Steamed milk steeped with black tea, cardamom, cinnamon, and pure honey.', price: '75', tag: 'new' }
            ]
        },
        {
            id: 'cat-3',
            name: 'Fresh Bakery & Pastries',
            pageId: 'page-2',
            items: [
                { id: 'item-3-1', name: 'Pistachio Date Tart', desc: 'Crisp butter pastry filled with sweet dates and toasted pistachios.', price: '85', tag: 'royal' },
                { id: 'item-3-2', name: 'Orange Blossom Basbousa', desc: 'Traditional coconut-semolina cake soaked in sweet orange blossom syrup.', price: '65', tag: '' },
                { id: 'item-3-3', name: 'Warm Honey Bun', desc: 'Whole wheat sweet roll drizzled with organic honey and sesame seeds.', price: '55', tag: 'new' }
            ]
        },
        {
            id: 'cat-4',
            name: 'Classic Cafe Brunch',
            pageId: 'page-2',
            items: [
                { id: 'item-4-1', name: 'Shakshuka Eggs', desc: 'Three poached eggs in a rich, spiced cumin-tomato sauce with bell peppers, served with baladi bread.', price: '120', tag: 'best' },
                { id: 'item-4-2', name: 'Feteer Meshaltet', desc: 'Traditional flaky layered pastry served with black honey and double cream.', price: '140', tag: 'royal' }
            ]
        }
    ]
};

// --- Application State ---
let appState = {};

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderTemplatesGrid();
    renderLogoSelector();
    bindSettingsControls();
    renderPageManager();
    renderContentAccordion();
    renderPreview();
    setupPageScaling();
    
    // Listen for resize changes to keep preview scaled
    window.addEventListener('resize', handleResize);
});

// --- State Management ---
function loadState() {
    const saved = localStorage.getItem('tut_menu_creator_state');
    if (saved) {
        try {
            appState = JSON.parse(saved);
            // Migrate missing keys if any
            appState = { 
                ...JSON.parse(JSON.stringify(DEFAULT_MENU_DATA)), 
                ...appState 
            };
            appState.customStyle = { 
                ...DEFAULT_MENU_DATA.customStyle, 
                ...(appState.customStyle || {}) 
            };
            // Ensure pages array exists
            if (!appState.pages || appState.pages.length === 0) {
                appState.pages = JSON.parse(JSON.stringify(DEFAULT_MENU_DATA.pages));
            }
        } catch (e) {
            appState = JSON.parse(JSON.stringify(DEFAULT_MENU_DATA));
        }
    } else {
        appState = JSON.parse(JSON.stringify(DEFAULT_MENU_DATA));
    }
}

function saveState() {
    localStorage.setItem('tut_menu_creator_state', JSON.stringify(appState));
    renderPreview();
}

function resetDemoData() {
    if (confirm('Are you sure you want to reset all edits to default Pharaonic demo data?')) {
        appState = JSON.parse(JSON.stringify(DEFAULT_MENU_DATA));
        saveState();
        
        // Sync control inputs
        document.getElementById('cafeName').value = appState.cafeName;
        document.getElementById('cafeTagline').value = appState.cafeTagline;
        document.getElementById('menuFooter').value = appState.menuFooter;
        document.getElementById('paperSize').value = appState.paperSize;
        document.getElementById('paperOrientation').value = appState.paperOrientation;
        document.getElementById('fontScale').value = appState.fontScale;
        document.getElementById('fontScaleVal').textContent = `${appState.fontScale}%`;
        document.getElementById('itemSpacing').value = appState.itemSpacing;
        document.getElementById('itemSpacingVal').textContent = getSpacingLabel(appState.itemSpacing);
        document.getElementById('currencySymbol').value = appState.currencySymbol;
        document.getElementById('showDescriptions').checked = appState.showDescriptions;
        document.getElementById('showDottedLeaders').checked = appState.showDottedLeaders;
        
        syncTypographyInputs();
        syncColorPickerUI();
        renderTemplatesGrid();
        renderLogoSelector();
        renderPageManager();
        renderContentAccordion();
        renderPreview();
        setTimeout(handleResize, 100);
    }
}

// --- Sidebar Tab Switching ---
window.switchTab = function(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.getElementById(`panel-${tabName}`).classList.add('active');
};

// --- Render Templates List ---
function renderTemplatesGrid() {
    const grid = document.getElementById('templatesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    MENU_TEMPLATES.forEach(tmpl => {
        const card = document.createElement('div');
        card.className = `template-card ${appState.activeTemplate === tmpl.id ? 'active' : ''}`;
        card.onclick = () => selectTemplate(tmpl.id);
        
        card.innerHTML = `
            <div class="template-preview-thumb ${tmpl.thumb}">
                <i class="fa-solid fa-crown" style="font-size: 24px; opacity: 0.85;"></i>
            </div>
            <span>${tmpl.name}</span>
        `;
        grid.appendChild(card);
    });
}

function selectTemplate(tmplId) {
    appState.activeTemplate = tmplId;
    
    // Clear color overrides when selecting new templates so they start with design defaults
    appState.colorBg = null;
    appState.colorText = null;
    appState.colorGold = null;
    appState.colorSecondary = null;
    
    saveState();
    renderTemplatesGrid();
    syncColorPickerUI();
    
    // Scroll window/preview sync
    setTimeout(handleResize, 50);
}

// --- Render Logo Icon Selector ---
function renderLogoSelector() {
    const container = document.getElementById('logoSelector');
    if (!container) return;
    container.innerHTML = '';
    
    Object.keys(LOGO_ICONS).forEach(key => {
        const option = document.createElement('div');
        option.className = `icon-option ${appState.logoIcon === key ? 'active' : ''}`;
        option.title = key.replace('_', ' ');
        option.onclick = () => selectLogo(key);
        option.innerHTML = LOGO_ICONS[key];
        container.appendChild(option);
    });
}

function selectLogo(logoKey) {
    appState.logoIcon = logoKey;
    saveState();
    renderLogoSelector();
}

// --- Bind Inputs ---
function bindSettingsControls() {
    // Cafe Name
    const nameInput = document.getElementById('cafeName');
    nameInput.value = appState.cafeName;
    nameInput.oninput = (e) => {
        appState.cafeName = e.target.value;
        saveState();
    };

    // Tagline
    const taglineInput = document.getElementById('cafeTagline');
    taglineInput.value = appState.cafeTagline;
    taglineInput.oninput = (e) => {
        appState.cafeTagline = e.target.value;
        saveState();
    };

    // Footer
    const footerInput = document.getElementById('menuFooter');
    footerInput.value = appState.menuFooter;
    footerInput.oninput = (e) => {
        appState.menuFooter = e.target.value;
        saveState();
    };

    // Paper settings
    const sizeSelect = document.getElementById('paperSize');
    sizeSelect.value = appState.paperSize;
    sizeSelect.onchange = (e) => {
        appState.paperSize = e.target.value;
        saveState();
        setTimeout(handleResize, 100);
    };

    const orientSelect = document.getElementById('paperOrientation');
    orientSelect.value = appState.paperOrientation;
    orientSelect.onchange = (e) => {
        appState.paperOrientation = e.target.value;
        saveState();
        setTimeout(handleResize, 100);
    };

    // Sliders
    const fontScaleSlider = document.getElementById('fontScale');
    const fontScaleVal = document.getElementById('fontScaleVal');
    fontScaleSlider.value = appState.fontScale;
    fontScaleVal.textContent = `${appState.fontScale}%`;
    fontScaleSlider.oninput = (e) => {
        appState.fontScale = e.target.value;
        fontScaleVal.textContent = `${e.target.value}%`;
        saveState();
    };

    const spacingSlider = document.getElementById('itemSpacing');
    const spacingVal = document.getElementById('itemSpacingVal');
    spacingSlider.value = appState.itemSpacing;
    spacingVal.textContent = getSpacingLabel(appState.itemSpacing);
    spacingSlider.oninput = (e) => {
        appState.itemSpacing = e.target.value;
        spacingVal.textContent = getSpacingLabel(e.target.value);
        saveState();
    };

    // Currency
    const currencyInput = document.getElementById('currencySymbol');
    currencyInput.value = appState.currencySymbol;
    currencyInput.oninput = (e) => {
        appState.currencySymbol = e.target.value;
        saveState();
    };

    // Checkboxes
    const showDescCheckbox = document.getElementById('showDescriptions');
    showDescCheckbox.checked = appState.showDescriptions;
    showDescCheckbox.onchange = (e) => {
        appState.showDescriptions = e.target.checked;
        saveState();
    };

    const dottedCheckbox = document.getElementById('showDottedLeaders');
    dottedCheckbox.checked = appState.showDottedLeaders;
    dottedCheckbox.onchange = (e) => {
        appState.showDottedLeaders = e.target.checked;
        saveState();
    };

    // Color Pickers
    document.getElementById('colorBg').oninput = (e) => {
        appState.colorBg = e.target.value;
        saveState();
    };
    document.getElementById('colorText').oninput = (e) => {
        appState.colorText = e.target.value;
        saveState();
    };
    document.getElementById('colorGold').oninput = (e) => {
        appState.colorGold = e.target.value;
        saveState();
    };
    document.getElementById('colorSecondary').oninput = (e) => {
        appState.colorSecondary = e.target.value;
        saveState();
    };
    
    syncTypographyInputs();
    syncColorPickerUI();
}

function getSpacingLabel(val) {
    const labels = { 1: 'Compact', 2: 'Snug', 3: 'Normal', 4: 'Spacious', 5: 'Relaxed' };
    return labels[val] || 'Normal';
}

function syncTypographyInputs() {
    const cs = appState.customStyle || DEFAULT_MENU_DATA.customStyle;
    document.getElementById('headerFont').value = cs.headerFont;
    document.getElementById('bodyFont').value = cs.bodyFont;
    document.getElementById('titleSizeScale').value = cs.titleSize;
    document.getElementById('categorySizeScale').value = cs.categorySize;
    document.getElementById('itemSizeScale').value = cs.itemSize;
    document.getElementById('descSizeScale').value = cs.descSize;
    document.getElementById('watermarkOpacity').value = cs.watermarkOpacity;
    document.getElementById('watermarkScale').value = cs.watermarkScale;
    document.getElementById('dividerStyle').value = cs.dividerStyle;
    
    document.getElementById('titleSizeScaleVal').textContent = `${cs.titleSize}%`;
    document.getElementById('categorySizeScaleVal').textContent = `${cs.categorySize}%`;
    document.getElementById('itemSizeScaleVal').textContent = `${cs.itemSize}%`;
    document.getElementById('descSizeScaleVal').textContent = `${cs.descSize}%`;
    document.getElementById('watermarkOpacityVal').textContent = `${cs.watermarkOpacity}%`;
    document.getElementById('watermarkScaleVal').textContent = `${cs.watermarkScale}%`;
}

window.updateCustomStyles = function() {
    const headerFont = document.getElementById('headerFont').value;
    const bodyFont = document.getElementById('bodyFont').value;
    const titleSize = parseInt(document.getElementById('titleSizeScale').value);
    const categorySize = parseInt(document.getElementById('categorySizeScale').value);
    const itemSize = parseInt(document.getElementById('itemSizeScale').value);
    const descSize = parseInt(document.getElementById('descSizeScale').value);
    const watermarkOpacity = parseInt(document.getElementById('watermarkOpacity').value);
    const watermarkScale = parseInt(document.getElementById('watermarkScale').value);
    const dividerStyle = document.getElementById('dividerStyle').value;
    
    appState.customStyle = {
        headerFont,
        bodyFont,
        titleSize,
        categorySize,
        itemSize,
        descSize,
        watermarkOpacity,
        watermarkScale,
        dividerStyle
    };
    
    document.getElementById('titleSizeScaleVal').textContent = `${titleSize}%`;
    document.getElementById('categorySizeScaleVal').textContent = `${categorySize}%`;
    document.getElementById('itemSizeScaleVal').textContent = `${itemSize}%`;
    document.getElementById('descSizeScaleVal').textContent = `${descSize}%`;
    document.getElementById('watermarkOpacityVal').textContent = `${watermarkOpacity}%`;
    document.getElementById('watermarkScaleVal').textContent = `${watermarkScale}%`;
    
    saveState();
};

function syncColorPickerUI() {
    setTimeout(() => {
        const pageNode = document.querySelector('.menu-paper-page');
        if (!pageNode) return;
        
        const computed = window.getComputedStyle(pageNode);
        
        const rgbToHex = (rgb) => {
            if (!rgb) return '#ffffff';
            if (rgb.startsWith('#')) return rgb;
            const matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!matches) {
                const rgbaMatches = rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
                if (rgbaMatches) return "#" + ((1 << 24) + (parseInt(rgbaMatches[1]) << 16) + (parseInt(rgbaMatches[2]) << 8) + parseInt(rgbaMatches[3])).toString(16).slice(1);
                return '#ffffff';
            }
            return "#" + ((1 << 24) + (parseInt(matches[1]) << 16) + (parseInt(matches[2]) << 8) + parseInt(matches[3])).toString(16).slice(1);
        };

        document.getElementById('colorBg').value = appState.colorBg || rgbToHex(computed.backgroundColor);
        document.getElementById('colorText').value = appState.colorText || rgbToHex(computed.color);
        
        const valGold = computed.getPropertyValue('--theme-gold') || computed.getPropertyValue('--menu-gold');
        const valSec = computed.getPropertyValue('--theme-secondary') || computed.getPropertyValue('--menu-secondary');
        
        document.getElementById('colorGold').value = appState.colorGold || rgbToHex(valGold.trim());
        document.getElementById('colorSecondary').value = appState.colorSecondary || rgbToHex(valSec.trim());
    }, 100);
}

window.resetTemplateColors = function() {
    appState.colorBg = null;
    appState.colorText = null;
    appState.colorGold = null;
    appState.colorSecondary = null;
    saveState();
    syncColorPickerUI();
};

// --- Page Management (Option A) ---
window.addNewPage = function() {
    const newId = `page-${Date.now()}`;
    const count = appState.pages.length + 1;
    appState.pages.push({ id: newId, title: `Page ${count}` });
    saveState();
    renderPageManager();
    renderContentAccordion();
    renderPreview();
};

window.deletePage = function(pageId) {
    if (appState.pages.length <= 1) {
        alert("You must keep at least one page!");
        return;
    }
    if (confirm("Are you sure you want to delete this page? Categories assigned to it will be reassigned to the first page.")) {
        appState.pages = appState.pages.filter(p => p.id !== pageId);
        const fallbackId = appState.pages[0].id;
        appState.categories.forEach(cat => {
            if (cat.pageId === pageId) {
                cat.pageId = fallbackId;
            }
        });
        saveState();
        renderPageManager();
        renderContentAccordion();
        renderPreview();
    }
};

window.renamePage = function(pageId) {
    const page = appState.pages.find(p => p.id === pageId);
    if (!page) return;
    const newName = prompt("Rename Page:", page.title);
    if (!newName) return;
    page.title = newName;
    saveState();
    renderPageManager();
    renderContentAccordion();
    renderPreview();
};

function renderPageManager() {
    const container = document.getElementById('pageManagerList');
    if (!container) return;
    container.innerHTML = '';
    
    appState.pages.forEach((p, idx) => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.justifyContent = 'space-between';
        row.style.background = 'rgba(255, 255, 255, 0.03)';
        row.style.padding = '8px 12px';
        row.style.borderRadius = '4px';
        row.style.border = '1px solid var(--dash-border)';
        
        row.innerHTML = `
            <span style="font-size: 13px; font-weight: 600; color: #fff;">${escapeHtml(p.title)}</span>
            <div style="display: flex; gap: 6px;">
                <button class="btn btn-secondary-outline btn-sm" style="padding: 2px 6px;" onclick="renamePage('${p.id}')" title="Rename"><i class="fa-solid fa-pen" style="font-size: 10px;"></i></button>
                <button class="btn btn-danger btn-sm" style="padding: 2px 6px;" onclick="deletePage('${p.id}')" ${appState.pages.length <= 1 ? 'disabled' : ''} title="Delete"><i class="fa-solid fa-trash" style="font-size: 10px;"></i></button>
            </div>
        `;
        container.appendChild(row);
    });
}

window.changeCategoryPage = function(catId, pageId) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    cat.pageId = pageId;
    saveState();
};

// --- Render Content Manager Accordion ---
function renderContentAccordion() {
    const container = document.getElementById('categoriesAccordion');
    if (!container) return;
    container.innerHTML = '';
    
    appState.categories.forEach((cat, catIdx) => {
        const itemNode = document.createElement('div');
        itemNode.className = `accordion-item ${cat.isOpen ? 'active' : ''}`;
        itemNode.id = `accordion-cat-${cat.id}`;
        
        itemNode.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion('${cat.id}')">
                <span class="drag-handle"><i class="fa-solid fa-grip-vertical"></i></span>
                <span class="category-title-text" id="cat-title-span-${cat.id}">${cat.name}</span>
                <div class="actions" onclick="event.stopPropagation()">
                    <button class="order-btn" onclick="moveCategoryUp(${catIdx})" title="Move Up"><i class="fa-solid fa-chevron-up"></i></button>
                    <button class="order-btn" onclick="moveCategoryDown(${catIdx})" title="Move Down"><i class="fa-solid fa-chevron-down"></i></button>
                    <button class="btn btn-secondary-outline btn-sm" onclick="editCategoryName('${cat.id}')" title="Rename"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCategory('${cat.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
                <i class="fa-solid fa-chevron-down icon-collapse"></i>
            </div>
            
            <div class="accordion-content">
                <div class="control-group" style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px; background: rgba(255,255,255,0.02); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--dash-border);">
                    <label style="font-size: 11px; margin-bottom: 0; color: var(--dash-text-muted);">Assigned to Page:</label>
                    <select style="font-size: 11px; padding: 4px 8px; width: auto; background: #161a25; color: #fff; border: 1px solid var(--dash-border); border-radius: 4px;" onchange="changeCategoryPage('${cat.id}', this.value)">
                        ${appState.pages.map(p => `<option value="${p.id}" ${cat.pageId === p.id ? 'selected' : ''}>${p.title}</option>`).join('')}
                    </select>
                </div>
                <div class="item-editor-list" id="item-list-container-${cat.id}">
                    <!-- Menu items inside this category will be rendered here -->
                </div>
                <button class="btn btn-primary btn-sm" style="width: 100%; margin-top: 10px;" onclick="addNewItem('${cat.id}')">
                    <i class="fa-solid fa-plus"></i> Add Menu Item
                </button>
            </div>
        `;
        
        container.appendChild(itemNode);
        renderItemsEditor(cat);
    });
}

function renderItemsEditor(cat) {
    const container = document.getElementById(`item-list-container-${cat.id}`);
    if (!container) return;
    container.innerHTML = '';
    
    if (cat.items.length === 0) {
        container.innerHTML = `<p style="font-size: 11px; text-align: center; color: var(--dash-text-muted); padding: 10px;">No items inside this category yet.</p>`;
        return;
    }
    
    cat.items.forEach((item, itemIdx) => {
        const card = document.createElement('div');
        card.className = 'item-editor-card';
        
        let priceInputs = '';
        if (item.isMultiPrice) {
            priceInputs = `
                <div class="item-variants-editor-list" style="width: 100%; margin-top: 8px; padding-top: 8px; border-top: 1px dashed rgba(255,255,255,0.05);">
                    <div style="font-size: 10px; color: var(--dash-text-muted); margin-bottom: 6px;">Price Variants (e.g. S, L, Cup, Pot):</div>
                    ${(item.prices || []).map((p, pIdx) => `
                        <div class="variant-input-row" style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                            <input type="text" style="flex: 1; font-size: 11px; padding: 4px 6px; background: #121620; color: #fff; border: 1px solid var(--dash-border); border-radius: 4px;" value="${p.label}" placeholder="e.g. S" oninput="updateItemVariant('${cat.id}', '${item.id}', ${pIdx}, 'label', this.value)">
                            <input type="text" style="width: 60px; font-size: 11px; padding: 4px 6px; text-align: right; background: #121620; color: #fff; border: 1px solid var(--dash-border); border-radius: 4px;" value="${p.value}" placeholder="Price" oninput="updateItemVariant('${cat.id}', '${item.id}', ${pIdx}, 'value', this.value)">
                            <button class="btn btn-danger btn-sm" style="padding: 2px 6px;" onclick="deleteItemVariant('${cat.id}', '${item.id}', ${pIdx})"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    `).join('')}
                    <button class="btn btn-secondary-outline btn-sm" style="width: 100%; font-size: 10px; padding: 4px 8px; margin-top: 4px;" onclick="addItemVariant('${cat.id}', '${item.id}')">
                        <i class="fa-solid fa-plus"></i> Add Price Variant
                    </button>
                </div>
            `;
        } else {
            priceInputs = `
                <div class="item-editor-row title-price" style="display: flex; gap: 8px; width: 100%;">
                    <input type="text" class="item-name" style="flex: 1;" value="${item.name}" placeholder="Item Name" oninput="updateItemField('${cat.id}', '${item.id}', 'name', this.value)">
                    <input type="text" class="item-price" style="width: 80px;" value="${item.price}" placeholder="0.00" oninput="updateItemField('${cat.id}', '${item.id}', 'price', this.value)">
                </div>
            `;
        }

        card.innerHTML = `
            ${item.isMultiPrice ? `
                <div class="item-editor-row" style="margin-bottom: 6px;">
                    <input type="text" class="item-name" style="width: 100%;" value="${item.name}" placeholder="Item Name" oninput="updateItemField('${cat.id}', '${item.id}', 'name', this.value)">
                </div>
            ` : priceInputs}
            <div class="item-editor-row">
                <textarea class="item-desc" placeholder="Ingredients and details..." rows="2" oninput="updateItemField('${cat.id}', '${item.id}', 'desc', this.value)">${item.desc}</textarea>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; padding: 4px 0;">
                <label style="font-size: 10px; display: inline-flex; align-items: center; gap: 6px; color: var(--dash-text-muted); cursor: pointer;">
                    <input type="checkbox" ${item.isMultiPrice ? 'checked' : ''} onchange="toggleItemPriceMode('${cat.id}', '${item.id}', this.checked)" style="accent-color: var(--dash-gold);">
                    Use Multi-Price Variants
                </label>
            </div>

            ${item.isMultiPrice ? priceInputs : ''}

            <div class="item-editor-actions" style="margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.05);">
                <div class="item-tag-selector">
                    <span class="tag-badge-option tag-royal ${item.tag === 'royal' ? 'active' : ''}" onclick="toggleItemTag('${cat.id}', '${item.id}', 'royal')">Royal</span>
                    <span class="tag-badge-option tag-best ${item.tag === 'best' ? 'active' : ''}" onclick="toggleItemTag('${cat.id}', '${item.id}', 'best')">Best</span>
                    <span class="tag-badge-option tag-new ${item.tag === 'new' ? 'active' : ''}" onclick="toggleItemTag('${cat.id}', '${item.id}', 'new')">New</span>
                </div>
                <div class="order-btn-group">
                    <button class="order-btn" onclick="moveItemUp('${cat.id}', ${itemIdx})" title="Move Up"><i class="fa-solid fa-chevron-up"></i></button>
                    <button class="order-btn" onclick="moveItemDown('${cat.id}', ${itemIdx})" title="Move Down"><i class="fa-solid fa-chevron-down"></i></button>
                    <button class="btn btn-danger btn-sm" style="padding: 4px 8px; font-size: 10px;" onclick="deleteItem('${cat.id}', '${item.id}')" title="Delete Item"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Content Actions ---
window.toggleAccordion = function(catId) {
    appState.categories = appState.categories.map(cat => {
        if (cat.id === catId) {
            return { ...cat, isOpen: !cat.isOpen };
        }
        return cat;
    });
    // Render without full save to avoid lag during accordion toggle
    renderContentAccordion();
};

window.addNewCategory = function() {
    const name = prompt('Enter name of the new menu category:');
    if (!name) return;
    
    const newCat = {
        id: `cat-${Date.now()}`,
        name: name,
        isOpen: true,
        pageId: appState.pages[0].id,
        items: []
    };
    
    appState.categories.push(newCat);
    saveState();
    renderContentAccordion();
};

window.editCategoryName = function(catId) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    
    const newName = prompt('Rename Category:', cat.name);
    if (!newName) return;
    
    cat.name = newName;
    saveState();
    renderContentAccordion();
};

window.deleteCategory = function(catId) {
    if (confirm('Are you sure you want to delete this entire category and all of its items?')) {
        appState.categories = appState.categories.filter(c => c.id !== catId);
        saveState();
        renderContentAccordion();
    }
};

window.addNewItem = function(catId) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    
    const newItem = {
        id: `item-${Date.now()}`,
        name: 'New Menu Item',
        desc: 'Short delicious description of the item.',
        price: '50',
        tag: ''
    };
    
    cat.items.push(newItem);
    saveState();
    renderContentAccordion();
};

window.updateItemField = function(catId, itemId, field, value) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;
    
    item[field] = value;
    if (window.editSaveTimeout) clearTimeout(window.editSaveTimeout);
    window.editSaveTimeout = setTimeout(() => {
        localStorage.setItem('tut_menu_creator_state', JSON.stringify(appState));
        renderPreview();
    }, 150);
};

window.toggleItemTag = function(catId, itemId, tagName) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;
    
    item.tag = item.tag === tagName ? '' : tagName;
    saveState();
    renderContentAccordion();
};

window.deleteItem = function(catId, itemId) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    
    cat.items = cat.items.filter(i => i.id !== itemId);
    saveState();
    renderContentAccordion();
};

// --- Multi-Price Variant Actions (Option E) ---
window.toggleItemPriceMode = function(catId, itemId, isMulti) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;
    
    item.isMultiPrice = isMulti;
    if (isMulti && (!item.prices || item.prices.length === 0)) {
        item.prices = [
            { label: 'S', value: item.price || '50' },
            { label: 'L', value: '70' }
        ];
    }
    saveState();
    renderContentAccordion();
};

window.addItemVariant = function(catId, itemId) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;
    
    if (!item.prices) item.prices = [];
    item.prices.push({ label: 'New', value: '50' });
    saveState();
    renderContentAccordion();
};

window.updateItemVariant = function(catId, itemId, variantIdx, field, value) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;
    
    if (item.prices && item.prices[variantIdx]) {
        item.prices[variantIdx][field] = value;
    }
    
    if (window.editSaveTimeout) clearTimeout(window.editSaveTimeout);
    window.editSaveTimeout = setTimeout(() => {
        localStorage.setItem('tut_menu_creator_state', JSON.stringify(appState));
        renderPreview();
    }, 150);
};

window.deleteItemVariant = function(catId, itemId, variantIdx) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const item = cat.items.find(i => i.id === itemId);
    if (!item) return;
    
    if (item.prices) {
        item.prices.splice(variantIdx, 1);
        if (item.prices.length === 0) {
            item.isMultiPrice = false;
        }
    }
    saveState();
    renderContentAccordion();
};

// --- Reordering Sorting Commands ---
window.moveCategoryUp = function(idx) {
    if (idx === 0) return;
    const temp = appState.categories[idx];
    appState.categories[idx] = appState.categories[idx - 1];
    appState.categories[idx - 1] = temp;
    saveState();
    renderContentAccordion();
};

window.moveCategoryDown = function(idx) {
    if (idx === appState.categories.length - 1) return;
    const temp = appState.categories[idx];
    appState.categories[idx] = appState.categories[idx + 1];
    appState.categories[idx + 1] = temp;
    saveState();
    renderContentAccordion();
};

window.moveItemUp = function(catId, idx) {
    if (idx === 0) return;
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    const temp = cat.items[idx];
    cat.items[idx] = cat.items[idx - 1];
    cat.items[idx - 1] = temp;
    saveState();
    renderContentAccordion();
};

window.moveItemDown = function(catId, idx) {
    const cat = appState.categories.find(c => c.id === catId);
    if (!cat) return;
    if (idx === cat.items.length - 1) return;
    const temp = cat.items[idx];
    cat.items[idx] = cat.items[idx + 1];
    cat.items[idx + 1] = temp;
    saveState();
    renderContentAccordion();
};

// --- Live Preview Compiler Renderer (Multi-page) ---
function renderPreview() {
    const scaler = document.getElementById('pageScaler');
    if (!scaler) return;
    
    scaler.innerHTML = '';
    
    const activeTmpl = MENU_TEMPLATES.find(t => t.id === appState.activeTemplate) || MENU_TEMPLATES[0];
    const isCustomFont = appState.customStyle.headerFont !== 'default' || appState.customStyle.bodyFont !== 'default';
    
    appState.pages.forEach((page, pageIdx) => {
        const pageNode = document.createElement('div');
        pageNode.className = 'menu-paper-page';
        pageNode.classList.add(activeTmpl.class);
        pageNode.classList.add(appState.paperOrientation);
        pageNode.classList.add(`spacing-${appState.itemSpacing}`);
        pageNode.classList.add(`divider-style-${appState.customStyle.dividerStyle}`);
        if (isCustomFont) {
            pageNode.classList.add('custom-fonts-active');
        }
        
        // CSS Properties overrides
        pageNode.style.setProperty('--menu-font-scale', appState.fontScale / 100);
        pageNode.style.setProperty('--menu-size-title-multiplier', appState.customStyle.titleSize);
        pageNode.style.setProperty('--menu-size-category-multiplier', appState.customStyle.categorySize);
        pageNode.style.setProperty('--menu-size-item-multiplier', appState.customStyle.itemSize);
        pageNode.style.setProperty('--menu-size-desc-multiplier', appState.customStyle.descSize);
        pageNode.style.setProperty('--menu-watermark-opacity', appState.customStyle.watermarkOpacity / 100);
        pageNode.style.setProperty('--menu-watermark-scale', appState.customStyle.watermarkScale / 100);
        
        if (appState.customStyle.headerFont !== 'default') {
            pageNode.style.setProperty('--menu-font-header', appState.customStyle.headerFont);
        }
        if (appState.customStyle.bodyFont !== 'default') {
            pageNode.style.setProperty('--menu-font-body', appState.customStyle.bodyFont);
        }
        
        if (appState.colorBg) pageNode.style.setProperty('--menu-bg', appState.colorBg);
        if (appState.colorText) pageNode.style.setProperty('--menu-text', appState.colorText);
        if (appState.colorGold) pageNode.style.setProperty('--menu-gold', appState.colorGold);
        if (appState.colorSecondary) pageNode.style.setProperty('--menu-secondary', appState.colorSecondary);
        
        // Build page content HTML
        let pageHtml = '';
        
        // Watermark background
        if (appState.logoIcon !== 'none' && LOGO_ICONS[appState.logoIcon]) {
            pageHtml += `
                <div class="menu-bg-watermark">
                    ${LOGO_ICONS[appState.logoIcon]}
                </div>
            `;
        }
        
        pageHtml += `<div class="menu-container">`;
        
        // Header only on first page
        if (pageIdx === 0) {
            pageHtml += `
                <header class="menu-header">
            `;
            if (appState.logoIcon !== 'none' && LOGO_ICONS[appState.logoIcon]) {
                pageHtml += `
                    <div class="menu-logo-container">
                        ${LOGO_ICONS[appState.logoIcon]}
                    </div>
                `;
            }
            pageHtml += `
                    <h1 class="menu-title">${escapeHtml(appState.cafeName)}</h1>
                    <p class="menu-tagline">${escapeHtml(appState.cafeTagline)}</p>
                    <div class="menu-header-divider"></div>
                </header>
            `;
        } else {
            // Smaller page header indicator for Page 2, 3 etc.
            pageHtml += `
                <header class="menu-header" style="margin-bottom: 4mm;">
                    <p style="font-size: 9px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.6; margin-bottom: 0;">${escapeHtml(appState.cafeName)} &mdash; ${escapeHtml(page.title)}</p>
                    <div class="menu-header-divider" style="width: 20%; margin-top: 2mm; opacity: 0.4;"></div>
                </header>
            `;
        }
        
        // Categories list
        pageHtml += `<div class="menu-body">`;
        
        // Categories filter for this page
        const pageCategories = appState.categories.filter(cat => {
            // Default empty or legacy to Page 1
            if (!cat.pageId) return pageIdx === 0;
            return cat.pageId === page.id;
        });
        
        if (pageCategories.length === 0) {
            pageHtml += `
                <div style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; opacity: 0.4; font-style: italic; font-size: 11px; border: 1px dashed var(--menu-gold); margin: 20px; border-radius: 6px; padding: 30px; text-align: center; color: var(--menu-text); z-index: 2;">
                    No categories assigned to this page. Assign a category to this page under the Content tab.
                </div>
            `;
        } else {
            pageCategories.forEach(cat => {
                if (cat.items.length === 0) return;
                
                pageHtml += `
                    <section class="menu-category-node">
                        <div class="menu-category-title-container">
                            <h2 class="menu-category-title">${escapeHtml(cat.name)}</h2>
                        </div>
                        <div class="menu-item-list">
                `;
                
                cat.items.forEach(item => {
                    pageHtml += `
                        <div class="menu-item-node">
                            <div class="menu-item-main-row">
                                <span class="menu-item-name">
                                    ${escapeHtml(item.name)}
                                    ${renderItemBadgeHtml(item.tag)}
                                </span>
                    `;
                    
                    if (appState.showDottedLeaders) {
                        pageHtml += `<span class="dotted-leader"></span>`;
                    } else {
                        pageHtml += `<span></span>`;
                    }
                    
                    pageHtml += `
                                <span class="menu-item-price">${renderItemPriceHtml(item)}</span>
                            </div>
                    `;
                    
                    if (appState.showDescriptions && item.desc) {
                        pageHtml += `
                            <p class="menu-item-description">${escapeHtml(item.desc)}</p>
                        `;
                    }
                    
                    pageHtml += `</div>`; // end item
                });
                
                pageHtml += `
                        </div>
                    </section>
                `;
            });
        }
        
        pageHtml += `</div>`; // end menu body
        
        // Footer only on last page
        if (pageIdx === appState.pages.length - 1 && appState.menuFooter) {
            pageHtml += `
                <footer class="menu-footer">
                    <p>${escapeHtml(appState.menuFooter)}</p>
                </footer>
            `;
        } else {
            // Render a clean page number footer
            pageHtml += `
                <footer class="menu-footer" style="margin-top: auto; padding-top: 2mm; border-top: none; opacity: 0.6; font-size: 8px;">
                    <p>Page ${pageIdx + 1} of ${appState.pages.length}</p>
                </footer>
            `;
        }
        
        pageHtml += `</div>`; // end menu container
        
        pageNode.innerHTML = pageHtml;
        scaler.appendChild(pageNode);
    });
}

function renderItemPriceHtml(item) {
    const symbol = escapeHtml(appState.currencySymbol);
    if (item.isMultiPrice && item.prices && item.prices.length > 0) {
        return `
            <span class="price-variants-container">
                ${item.prices.map(p => `
                    <span class="price-variant"><span class="price-variant-label">${escapeHtml(p.label)}:</span>${escapeHtml(p.value)} <small style="font-size: 70%; font-weight:600; opacity:0.8;">${symbol}</small></span>
                `).join('<span style="opacity: 0.3; margin: 0 2px;">|</span>')}
            </span>
        `;
    }
    return `${escapeHtml(item.price)} <small style="font-size: 70%; font-weight:600; opacity:0.8;">${symbol}</small>`;
}

function renderItemBadgeHtml(tag) {
    if (!tag) return '';
    const labels = { royal: 'Royal', best: 'Best Seller', new: 'New' };
    return `<span class="menu-item-badge tag-${tag}">${labels[tag] || tag}</span>`;
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// --- Dynamic Scale-To-Fit Viewport Engine ---
let resizeTimeout;
function setupPageScaling() {
    handleResize();
}

function handleResize() {
    const viewport = document.querySelector('.preview-viewport');
    const pages = document.querySelectorAll('.menu-paper-page');
    const scaler = document.getElementById('pageScaler');
    if (!viewport || pages.length === 0 || !scaler) return;
    
    // Get viewport width
    const vWidth = viewport.clientWidth - 80;
    
    // Physical paper width in pixels
    const paperWidth = appState.paperOrientation === 'portrait' ? 793.7 : 1122.5;
    
    // Calculate best fit scale factor based on width to support scrolling stacked pages
    const scale = Math.min(vWidth / paperWidth, 1.1);
    
    scaler.style.transform = `scale(${scale})`;
}

// Debounced resize handler
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 50);
});

// --- Print Action Dialog Trigger ---
window.triggerPrint = function() {
    window.print();
};
