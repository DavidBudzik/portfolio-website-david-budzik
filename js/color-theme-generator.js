// Color Theme Generator - Main Application Logic

// ========================================
// Global State
// ========================================
let currentTheme = null;
let currentView = 'grid';

// ========================================
// Example Themes Data
// ========================================
const exampleThemes = [
    {
        name: "Vibrant Startup",
        description: "Modern startup with vibrant blue primary and pink accents",
        tags: ["Tech", "Modern", "Bold"],
        colors: {
            primary: { base: "#0066FF", light: "#3385FF", dark: "#0052CC", hover: "#004DB8", active: "#0047A3" },
            secondary: { base: "#6C757D", light: "#ADB5BD", dark: "#495057", hover: "#343A40", active: "#23272B" },
            accent: { base: "#FF0080", light: "#FF4DA6", dark: "#CC0066", hover: "#B8005C", active: "#A30052" },
            success: { base: "#28A745", light: "#48D468", dark: "#1E7E34", hover: "#1A6E2D", active: "#166127" },
            warning: { base: "#FFC107", light: "#FFD451", dark: "#E0A800", hover: "#CC9600", active: "#B88700" },
            error: { base: "#DC3545", light: "#E66B76", dark: "#C82333", hover: "#B31F2E", active: "#A01B28" },
            info: { base: "#17A2B8", light: "#4AC0D4", dark: "#117A8B", hover: "#0E6674", active: "#0C5861" },
            neutral: { base: "#F8F9FA", light: "#FFFFFF", dark: "#E9ECEF", hover: "#DEE2E6", active: "#CED4DA" },
            background: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F8F9FA", hover: "#F1F3F5", active: "#E9ECEF" },
            surface: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F8F9FA", hover: "#F1F3F5", active: "#E9ECEF" },
            text: { base: "#212529", light: "#495057", dark: "#000000", hover: "#212529", active: "#000000" }
        }
    },
    {
        name: "Enterprise SaaS",
        description: "Professional navy blue with subtle green accents",
        tags: ["B2B", "Professional", "Trust"],
        colors: {
            primary: { base: "#1E3A8A", light: "#3B5FBA", dark: "#1E2F6B", hover: "#1A2859", active: "#162147" },
            secondary: { base: "#64748B", light: "#94A3B8", dark: "#475569", hover: "#334155", active: "#1E293B" },
            accent: { base: "#10B981", light: "#34D399", dark: "#059669", hover: "#047857", active: "#065F46" },
            success: { base: "#22C55E", light: "#4ADE80", dark: "#16A34A", hover: "#15803D", active: "#166534" },
            warning: { base: "#F59E0B", light: "#FBBF24", dark: "#D97706", hover: "#B45309", active: "#92400E" },
            error: { base: "#EF4444", light: "#F87171", dark: "#DC2626", hover: "#B91C1C", active: "#991B1B" },
            info: { base: "#3B82F6", light: "#60A5FA", dark: "#2563EB", hover: "#1D4ED8", active: "#1E40AF" },
            neutral: { base: "#F1F5F9", light: "#F8FAFC", dark: "#E2E8F0", hover: "#CBD5E1", active: "#94A3B8" },
            background: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F8FAFC", hover: "#F1F5F9", active: "#E2E8F0" },
            surface: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F8FAFC", hover: "#F1F5F9", active: "#E2E8F0" },
            text: { base: "#0F172A", light: "#334155", dark: "#020617", hover: "#0F172A", active: "#020617" }
        }
    },
    {
        name: "Creative Agency",
        description: "Bold purple primary with electric yellow accents",
        tags: ["Creative", "Bold", "Energetic"],
        colors: {
            primary: { base: "#7C3AED", light: "#A78BFA", dark: "#6D28D9", hover: "#5B21B6", active: "#4C1D95" },
            secondary: { base: "#6B7280", light: "#9CA3AF", dark: "#4B5563", hover: "#374151", active: "#1F2937" },
            accent: { base: "#FBBF24", light: "#FCD34D", dark: "#F59E0B", hover: "#D97706", active: "#B45309" },
            success: { base: "#10B981", light: "#34D399", dark: "#059669", hover: "#047857", active: "#065F46" },
            warning: { base: "#F59E0B", light: "#FBBF24", dark: "#D97706", hover: "#B45309", active: "#92400E" },
            error: { base: "#EF4444", light: "#F87171", dark: "#DC2626", hover: "#B91C1C", active: "#991B1B" },
            info: { base: "#06B6D4", light: "#22D3EE", dark: "#0891B2", hover: "#0E7490", active: "#155E75" },
            neutral: { base: "#F3F4F6", light: "#F9FAFB", dark: "#E5E7EB", hover: "#D1D5DB", active: "#9CA3AF" },
            background: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F9FAFB", hover: "#F3F4F6", active: "#E5E7EB" },
            surface: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F9FAFB", hover: "#F3F4F6", active: "#E5E7EB" },
            text: { base: "#111827", light: "#374151", dark: "#030712", hover: "#111827", active: "#030712" }
        }
    },
    {
        name: "Healthcare Platform",
        description: "Calming teal with soft coral accents",
        tags: ["Healthcare", "Calming", "Trust"],
        colors: {
            primary: { base: "#0D9488", light: "#2DD4BF", dark: "#0F766E", hover: "#115E59", active: "#134E4A" },
            secondary: { base: "#64748B", light: "#94A3B8", dark: "#475569", hover: "#334155", active: "#1E293B" },
            accent: { base: "#FB7185", light: "#FDA4AF", dark: "#F43F5E", hover: "#E11D48", active: "#BE123C" },
            success: { base: "#22C55E", light: "#4ADE80", dark: "#16A34A", hover: "#15803D", active: "#166534" },
            warning: { base: "#F59E0B", light: "#FBBF24", dark: "#D97706", hover: "#B45309", active: "#92400E" },
            error: { base: "#EF4444", light: "#F87171", dark: "#DC2626", hover: "#B91C1C", active: "#991B1B" },
            info: { base: "#06B6D4", light: "#22D3EE", dark: "#0891B2", hover: "#0E7490", active: "#155E75" },
            neutral: { base: "#F1F5F9", light: "#F8FAFC", dark: "#E2E8F0", hover: "#CBD5E1", active: "#94A3B8" },
            background: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F8FAFC", hover: "#F1F5F9", active: "#E2E8F0" },
            surface: { base: "#FFFFFF", light: "#FFFFFF", dark: "#F8FAFC", hover: "#F1F5F9", active: "#E2E8F0" },
            text: { base: "#0F172A", light: "#334155", dark: "#020617", hover: "#0F172A", active: "#020617" }
        }
    },
    {
        name: "E-commerce",
        description: "Warm orange primary with deep forest green accents",
        tags: ["E-commerce", "Warm", "Inviting"],
        colors: {
            primary: { base: "#EA580C", light: "#FB923C", dark: "#C2410C", hover: "#9A3412", active: "#7C2D12" },
            secondary: { base: "#78716C", light: "#A8A29E", dark: "#57534E", hover: "#44403C", active: "#292524" },
            accent: { base: "#15803D", light: "#22C55E", dark: "#166534", hover: "#14532D", active: "#052E16" },
            success: { base: "#22C55E", light: "#4ADE80", dark: "#16A34A", hover: "#15803D", active: "#166534" },
            warning: { base: "#F59E0B", light: "#FBBF24", dark: "#D97706", hover: "#B45309", active: "#92400E" },
            error: { base: "#EF4444", light: "#F87171", dark: "#DC2626", hover: "#B91C1C", active: "#991B1B" },
            info: { base: "#3B82F6", light: "#60A5FA", dark: "#2563EB", hover: "#1D4ED8", active: "#1E40AF" },
            neutral: { base: "#F5F5F4", light: "#FAFAF9", dark: "#E7E5E4", hover: "#D6D3D1", active: "#A8A29E" },
            background: { base: "#FFFFFF", light: "#FFFFFF", dark: "#FAFAF9", hover: "#F5F5F4", active: "#E7E5E4" },
            surface: { base: "#FFFFFF", light: "#FFFFFF", dark: "#FAFAF9", hover: "#F5F5F4", active: "#E7E5E4" },
            text: { base: "#1C1917", light: "#44403C", dark: "#0C0A09", hover: "#1C1917", active: "#0C0A09" }
        }
    },
    {
        name: "Minimalist Dark",
        description: "Elegant dark theme with subtle blue-gray accents",
        tags: ["Dark Mode", "Minimal", "Modern"],
        colors: {
            primary: { base: "#60A5FA", light: "#93C5FD", dark: "#3B82F6", hover: "#2563EB", active: "#1D4ED8" },
            secondary: { base: "#6B7280", light: "#9CA3AF", dark: "#4B5563", hover: "#374151", active: "#1F2937" },
            accent: { base: "#818CF8", light: "#A5B4FC", dark: "#6366F1", hover: "#4F46E5", active: "#4338CA" },
            success: { base: "#34D399", light: "#6EE7B7", dark: "#10B981", hover: "#059669", active: "#047857" },
            warning: { base: "#FBBF24", light: "#FCD34D", dark: "#F59E0B", hover: "#D97706", active: "#B45309" },
            error: { base: "#F87171", light: "#FCA5A5", dark: "#EF4444", hover: "#DC2626", active: "#B91C1C" },
            info: { base: "#22D3EE", light: "#67E8F9", dark: "#06B6D4", hover: "#0891B2", active: "#0E7490" },
            neutral: { base: "#1F2937", light: "#374151", dark: "#111827", hover: "#0F172A", active: "#030712" },
            background: { base: "#111827", light: "#1F2937", dark: "#030712", hover: "#0F172A", active: "#020617" },
            surface: { base: "#1F2937", light: "#374151", dark: "#111827", hover: "#0F172A", active: "#030712" },
            text: { base: "#F9FAFB", light: "#E5E7EB", dark: "#FFFFFF", hover: "#F3F4F6", active: "#FFFFFF" }
        }
    }
];

// ========================================
// Utility Functions
// ========================================

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Convert RGB to hex
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Adjust color brightness
function adjustBrightness(hex, percent) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;

    const adjust = (val) => Math.min(255, Math.max(0, Math.round(val * (1 + percent))));

    return rgbToHex(adjust(rgb.r), adjust(rgb.g), adjust(rgb.b));
}

// Generate color variants
function generateColorVariants(baseColor) {
    return {
        base: baseColor,
        light: adjustBrightness(baseColor, 0.3),
        dark: adjustBrightness(baseColor, -0.2),
        hover: adjustBrightness(baseColor, -0.15),
        active: adjustBrightness(baseColor, -0.25)
    };
}

// Show copy notification
function showCopyNotification(message = "Color copied to clipboard!") {
    let notification = document.querySelector('.copy-notification');

    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'copy-notification';
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showCopyNotification();
    } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyNotification();
    }
}

// ========================================
// API Integration
// ========================================

// Generate theme using Mistral API (with fallback to mock)
async function generateThemeWithAI(prompt) {
    // Check if API key is available
    const apiKey = localStorage.getItem('MISTRAL_API_KEY');

    if (!apiKey) {
        console.log('No Mistral API key found, using mock generation');
        return generateMockTheme(prompt);
    }

    try {
        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'mistral-small-latest',
                messages: [
                    {
                        role: 'system',
                        content: `You are a professional color palette designer. Generate a complete color system based on user descriptions.

Return ONLY a valid JSON object with this exact structure (no markdown, no explanations):
{
  "primary": "#HEX",
  "secondary": "#HEX",
  "accent": "#HEX",
  "success": "#HEX",
  "warning": "#HEX",
  "error": "#HEX",
  "info": "#HEX",
  "neutral": "#HEX",
  "background": "#HEX",
  "surface": "#HEX",
  "text": "#HEX"
}

Ensure colors are accessible, harmonious, and appropriate for the described theme.`
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content.trim();

        // Try to parse the response
        let colors;
        try {
            // Remove markdown code blocks if present
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                colors = JSON.parse(jsonMatch[0]);
            } else {
                colors = JSON.parse(content);
            }
        } catch (parseError) {
            console.error('Failed to parse API response:', content);
            throw new Error('Invalid response format from API');
        }

        // Convert base colors to full color objects with variants
        const theme = {};
        for (const [role, baseColor] of Object.entries(colors)) {
            theme[role] = generateColorVariants(baseColor);
        }

        return theme;

    } catch (error) {
        console.error('AI generation failed, falling back to mock:', error);
        return generateMockTheme(prompt);
    }
}

// Mock theme generation (fallback)
function generateMockTheme(prompt) {
    // Simple keyword-based mock generation
    const promptLower = prompt.toLowerCase();

    // Detect primary color hints
    let primaryColor = '#0066FF'; // default blue

    if (promptLower.includes('blue')) primaryColor = '#0066FF';
    else if (promptLower.includes('purple') || promptLower.includes('violet')) primaryColor = '#7C3AED';
    else if (promptLower.includes('green')) primaryColor = '#10B981';
    else if (promptLower.includes('teal') || promptLower.includes('cyan')) primaryColor = '#0D9488';
    else if (promptLower.includes('red') || promptLower.includes('crimson')) primaryColor = '#EF4444';
    else if (promptLower.includes('orange')) primaryColor = '#EA580C';
    else if (promptLower.includes('yellow') || promptLower.includes('gold')) primaryColor = '#F59E0B';
    else if (promptLower.includes('pink') || promptLower.includes('rose')) primaryColor = '#EC4899';
    else if (promptLower.includes('indigo')) primaryColor = '#6366F1';
    else if (promptLower.includes('navy')) primaryColor = '#1E3A8A';

    // Detect accent color hints
    let accentColor = '#FF0080'; // default pink

    if (promptLower.includes('pink accent')) accentColor = '#FF0080';
    else if (promptLower.includes('yellow accent') || promptLower.includes('gold accent')) accentColor = '#FBBF24';
    else if (promptLower.includes('green accent')) accentColor = '#10B981';
    else if (promptLower.includes('orange accent')) accentColor = '#FB923C';
    else if (promptLower.includes('purple accent')) accentColor = '#A78BFA';
    else if (promptLower.includes('coral accent')) accentColor = '#FB7185';

    // Generate complete theme
    return {
        primary: generateColorVariants(primaryColor),
        secondary: generateColorVariants('#6B7280'),
        accent: generateColorVariants(accentColor),
        success: generateColorVariants('#22C55E'),
        warning: generateColorVariants('#F59E0B'),
        error: generateColorVariants('#EF4444'),
        info: generateColorVariants('#3B82F6'),
        neutral: generateColorVariants('#F3F4F6'),
        background: generateColorVariants('#FFFFFF'),
        surface: generateColorVariants('#FFFFFF'),
        text: generateColorVariants('#111827')
    };
}

// ========================================
// UI Rendering
// ========================================

// Render color palette
function renderPalette(theme) {
    const paletteDisplay = document.getElementById('palette-display');
    paletteDisplay.innerHTML = '';

    for (const [role, colors] of Object.entries(theme)) {
        const card = createColorCard(role, colors);
        paletteDisplay.appendChild(card);
    }
}

// Create a color card element
function createColorCard(role, colors) {
    const card = document.createElement('div');
    card.className = 'color-card';

    const preview = document.createElement('div');
    preview.className = 'color-preview';
    preview.style.backgroundColor = colors.base;
    preview.addEventListener('click', () => copyToClipboard(colors.base));

    const info = document.createElement('div');
    info.className = 'color-info';

    const name = document.createElement('div');
    name.className = 'color-name';
    name.textContent = role.replace(/([A-Z])/g, ' $1').trim();

    const hex = document.createElement('div');
    hex.className = 'color-hex';
    hex.textContent = colors.base;

    const variants = document.createElement('div');
    variants.className = 'color-variants';

    // Add variant rows
    const variantTypes = [
        { key: 'light', label: 'Light' },
        { key: 'dark', label: 'Dark' },
        { key: 'hover', label: 'Hover' },
        { key: 'active', label: 'Active' }
    ];

    variantTypes.forEach(({ key, label }) => {
        const row = document.createElement('div');
        row.className = 'variant-row';

        const variantLabel = document.createElement('div');
        variantLabel.className = 'variant-label';
        variantLabel.textContent = label;

        const variantColor = document.createElement('div');
        variantColor.className = 'variant-color';

        const swatch = document.createElement('div');
        swatch.className = 'variant-swatch';
        swatch.style.backgroundColor = colors[key];
        swatch.addEventListener('click', () => copyToClipboard(colors[key]));

        const variantHex = document.createElement('div');
        variantHex.className = 'variant-hex';
        variantHex.textContent = colors[key];

        variantColor.appendChild(swatch);
        variantColor.appendChild(variantHex);

        row.appendChild(variantLabel);
        row.appendChild(variantColor);

        variants.appendChild(row);
    });

    info.appendChild(name);
    info.appendChild(hex);
    info.appendChild(variants);

    card.appendChild(preview);
    card.appendChild(info);

    return card;
}

// Render example themes
function renderExampleThemes() {
    const examplesGrid = document.getElementById('examples-grid');
    examplesGrid.innerHTML = '';

    exampleThemes.forEach((theme) => {
        const card = createExampleThemeCard(theme);
        examplesGrid.appendChild(card);
    });
}

// Create example theme card
function createExampleThemeCard(theme) {
    const card = document.createElement('div');
    card.className = 'example-theme';

    // Color swatches
    const colors = document.createElement('div');
    colors.className = 'example-colors';

    const displayColors = [
        theme.colors.primary.base,
        theme.colors.secondary.base,
        theme.colors.accent.base,
        theme.colors.success.base,
        theme.colors.warning.base
    ];

    displayColors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'example-color-swatch';
        swatch.style.backgroundColor = color;
        colors.appendChild(swatch);
    });

    // Info
    const info = document.createElement('div');
    info.className = 'example-info';

    const name = document.createElement('div');
    name.className = 'example-name';
    name.textContent = theme.name;

    const description = document.createElement('div');
    description.className = 'example-description';
    description.textContent = theme.description;

    const tags = document.createElement('div');
    tags.className = 'example-tags';

    theme.tags.forEach(tag => {
        const badge = document.createElement('span');
        badge.className = 'example-tag-badge';
        badge.textContent = tag;
        tags.appendChild(badge);
    });

    info.appendChild(name);
    info.appendChild(description);
    info.appendChild(tags);

    card.appendChild(colors);
    card.appendChild(info);

    // Click to use this theme
    card.addEventListener('click', () => {
        document.getElementById('theme-input').value = theme.description;
        document.getElementById('theme-input').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    return card;
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    const errorDescription = document.getElementById('error-description');

    errorDescription.textContent = message;
    errorMessage.style.display = 'flex';

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Hide error message
function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
}

// ========================================
// Event Handlers
// ========================================

// Generate theme
async function handleGenerate() {
    const input = document.getElementById('theme-input');
    const prompt = input.value.trim();

    if (!prompt) {
        showError('Please enter a theme description');
        return;
    }

    const generateBtn = document.getElementById('generate-btn');
    const btnText = generateBtn.querySelector('.btn-text');
    const btnLoader = generateBtn.querySelector('.btn-loader');

    // Show loading state
    generateBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'flex';
    hideError();

    try {
        const theme = await generateThemeWithAI(prompt);
        currentTheme = theme;

        // Show results
        renderPalette(theme);
        document.getElementById('results-area').style.display = 'block';

        // Scroll to results
        setTimeout(() => {
            document.getElementById('results-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

    } catch (error) {
        console.error('Generation error:', error);
        showError('Failed to generate theme. Please try again.');
    } finally {
        // Reset button state
        generateBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
}

// Use random example
function handleUseExample() {
    const randomTheme = exampleThemes[Math.floor(Math.random() * exampleThemes.length)];
    document.getElementById('theme-input').value = randomTheme.description;
}

// Toggle view mode
function handleViewToggle(view) {
    currentView = view;

    const paletteDisplay = document.getElementById('palette-display');
    const gridBtn = document.getElementById('view-grid-btn');
    const listBtn = document.getElementById('view-list-btn');

    if (view === 'grid') {
        paletteDisplay.className = 'palette-display grid-view';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        paletteDisplay.className = 'palette-display list-view';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    }
}

// Export theme
function handleExport() {
    if (!currentTheme) {
        showError('No theme to export');
        return;
    }

    const exportData = {
        metadata: {
            generatedAt: new Date().toISOString(),
            generator: 'Color Theme Generator by David Budzik',
            version: '1.0.0'
        },
        colors: currentTheme
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `color-theme-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showCopyNotification('Theme exported successfully!');
}

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Render example themes
    renderExampleThemes();

    // Event listeners
    document.getElementById('generate-btn').addEventListener('click', handleGenerate);
    document.getElementById('use-example-btn').addEventListener('click', handleUseExample);
    document.getElementById('view-grid-btn').addEventListener('click', () => handleViewToggle('grid'));
    document.getElementById('view-list-btn').addEventListener('click', () => handleViewToggle('list'));
    document.getElementById('export-btn').addEventListener('click', handleExport);

    // Example prompt tags
    document.querySelectorAll('.example-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const prompt = tag.getAttribute('data-prompt');
            document.getElementById('theme-input').value = prompt;
        });
    });

    // Enter key to generate
    document.getElementById('theme-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
            handleGenerate();
        }
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .example-theme, .color-preview, .variant-swatch');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal();

    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
