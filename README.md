# 🚀 TechRobo - React Responsive Website

A modern, responsive React website featuring a dynamic navbar, hero section, and interactive components built with Tailwind CSS and Framer Motion.

## ✨ Features

- **🎨 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🔧 Dynamic Navbar**: Glass effect with smooth animations
- **📱 Mobile Navigation**: Hamburger menu with smooth transitions
- **🎭 Hero Section**: Vertical scrolling animations with GSAP
- **🖼️ Image Galleries**: Horizontal sliders with ScrollTrigger
- **📊 Service Cards**: Sticky scroll reveal animations
- **💬 Reviews Section**: Infinite marquee animations
- **🏢 Partners Section**: Brand logo showcase
- **📞 Contact Forms**: Interactive floating contact cards

## 🛠️ Tech Stack

- **React 19.1.0** - Modern React with hooks
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Professional animations
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Vite** - Fast build tool

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/techrobo.git
   cd techrobo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx          # Responsive navigation
│   ├── HeroSection.jsx     # Hero with animations
│   ├── HorizontalSlider.jsx # Image gallery
│   ├── Partners.jsx        # Partner showcase
│   ├── OurServices.jsx     # Service cards
│   ├── OurReviews.jsx      # Reviews marquee
│   ├── Marquee.jsx         # Brand logos
│   ├── WhyUs.jsx          # Why choose us
│   └── Footer.jsx         # Footer with links
├── components/ui/
│   └── resizable-navbar.jsx # Navbar components
├── lib/
│   └── utils.js           # Utility functions
└── App.jsx               # Main application
```

## 🎨 Components Overview

### **Navbar**
- Fixed positioning with glass effect
- Responsive design for all screen sizes
- Smooth scroll animations
- Mobile hamburger menu

### **Hero Section**
- Vertical scrolling bar animations
- Synchronized background image changes
- GSAP timeline animations
- Random Unsplash images

### **Service Cards**
- Sticky scroll reveal animations
- Dynamic service data
- Interactive hover effects
- Responsive grid layout

### **Reviews & Partners**
- Infinite marquee animations
- Dual-direction scrolling
- Brand logo showcase
- Smooth transitions

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🎯 Key Features

### **Responsive Design**
- Mobile-first approach
- Progressive enhancement
- Touch-friendly interfaces
- Optimized for all devices

### **Animations**
- Framer Motion transitions
- GSAP ScrollTrigger
- Smooth hover effects
- Performance optimized

### **Accessibility**
- Semantic HTML structure
- Keyboard navigation
- Screen reader friendly
- High contrast ratios

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Import the project
3. Deploy automatically

### **Netlify**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### **GitHub Pages**
1. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/techrobo"
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first framework
- **Framer Motion** for smooth animations
- **GSAP** for professional animations
- **React Icons** for beautiful icons
- **Unsplash** for high-quality images

## 📞 Contact

- **Project Link**: [https://github.com/YOUR_USERNAME/techrobo](https://github.com/YOUR_USERNAME/techrobo)
- **Live Demo**: [https://techrobo.vercel.app](https://techrobo.vercel.app)

---

⭐ **Star this repository if you found it helpful!**
