# Mobile Cart AI - Implementation Overview

## 🎨 Design Language
- **Theme**: Premium Dark (Indigo, Purple, Cyan accents)
- **Aesthetics**: Glassmorphism, Rounded corners (24px+), Motion-rich transitions.
- **Typography**: Outfit (Headers), Plus Jakarta Sans (Body).

## 🧩 Components
- **Navbar**: Sticky glassmorphism header with mobile-responsive menu.
- **MobileCard**: Reusable cards with hover lifting effects and glow.

## 📄 Pages
### 1. Home
- Interactive hero section with floating 3D-effect mobile mockup.
- Feature grid highlighting AI capabilities.

### 2. AI Suggestion (`/ai-suggestion`)
- Smart form for budget, usage, and must-have features.
- Dynamic result view with match score and technical breakdown.

### 3. Mobile Comparison (`/comparison`)
- Multi-device selection interface.
- Technical scorecard using Recharts for visual comparison of Flagship specs.

### 4. Reviews & Videos (`/reviews`)
- Video-style card layout with ratings, views, and duration.
- Interactive category filters.

## 🛠️ Technology Stack
- **Framework**: React + Vite
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Styling**: Vanilla CSS with Modern Tokens
