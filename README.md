# Podelli - AI-Powered Language Learning

A beautiful, standalone web application for language learning with AI-powered content, podcasts, and gamification.

## 🚀 Quick Start

**No installation required!** Simply open `index.html` in any modern web browser.

```bash
# Option 1: Double-click index.html in your file explorer

# Option 2: Open from command line (macOS)
open index.html

# Option 2: Open from command line (Linux)
xdg-open index.html

# Option 2: Open from command line (Windows)
start index.html
```

## 📁 Project Structure

```
podelli-ai-learn/
├── index.html          # Main HTML file (includes TailwindCSS CDN)
├── app.js             # Complete application logic (routing, components, pages)
├── public/            # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
└── README.md          # This file
```

## ✨ Features

- **100% Standalone** - No npm, no build process, no dependencies
- **TailwindCSS via CDN** - Modern styling without installation
- **Single Page Application** - Client-side routing with History API
- **4 Main Pages**:
  - 🏠 **Home** - Landing page with features and stats
  - 🎧 **Pode** - Podcast content library
  - 🎮 **Play** - Interactive language games
  - 👤 **Account** - User profile and settings

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **TailwindCSS 3.x** - Utility-first CSS framework (CDN)
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **History API** - Client-side routing

## 🎨 Design System

The application uses a cohesive design system with:
- Custom color palette (HSL-based)
- Smooth animations (fade-in, scale-in)
- Responsive design (mobile-first)
- Accessible UI components

## 📱 Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🔧 Development

### Local Development

For local development with live reload, you can use any simple HTTP server:

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Node.js (if you have it)
npx http-server -p 8080

# PHP
php -S localhost:8080
```

Then open http://localhost:8080 in your browser.

### Integration with FastAPI

This frontend is designed to work with a FastAPI backend. Simply:

1. Serve these static files from your FastAPI app
2. Add API endpoints as needed
3. Update `app.js` to call your API endpoints

Example FastAPI integration:

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve static files
app.mount("/public", StaticFiles(directory="public"), name="public")

# Serve index.html for all routes (SPA)
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    return FileResponse("index.html")
```

## 📝 License

© 2024 Podelli. All rights reserved.

## 👥 Team

Developed with ❤️ by the Podelli team.
