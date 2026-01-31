# IM8 Health - Alpha E-Commerce Platform

🚀 **Dự án E-commerce 48h Sprint** - Platform bán hàng trực tuyến cho sản phẩm Daily Ultimate Essentials của IM8 Health

## 📋 Mô tả dự án

Đây là một trang web e-commerce hiện đại được phát triển trong 48 giờ, tập trung vào trải nghiệm người dùng và tối ưu hóa chuyển đổi. Website bán sản phẩm bổ sung dinh dưỡng "Daily Ultimate Essentials" với hai format: Forever Jar và Single-Serve Sachets.

### ✨ Tính năng chính

- **🎯 Sticky Promo Banner**: Banner khuyến mãi xuất hiện khi scroll tới Clinical Results
- **🛒 Sticky Add To Cart Bar**: Thanh mua hàng cố định ở bottom với sync real-time
- **🖼️ Hero Image Carousel**: Carousel ảnh sản phẩm với thumbnail navigation
- **⚡ Format Selector**: Chọn định dạng sản phẩm (Jar/Sachet) với sync toàn bộ components
- **📱 Responsive Design**: Hoàn toàn tương thích mobile và desktop
- **🎨 Modern UI/UX**: Thiết kế hiện đại với animations và transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons & Images**: React components + external CDN
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Package Manager**: npm

## 📁 Cấu trúc dự án

```
alpha-ecommerce-48h-sprint/
├── public/                     # Static assets
├── src/
│   ├── components/             # React components
│   │   ├── body/              # Main content sections
│   │   │   ├── ambassador/    # Ambassador testimonials
│   │   │   ├── beckhamcomparison/  # Beckham comparison
│   │   │   ├── clinicalproven/     # Clinical studies section
│   │   │   ├── comparison/         # Product comparison
│   │   │   ├── experts/           # Experts endorsement
│   │   │   ├── faqs/             # FAQ section
│   │   │   ├── getstarted/       # Get started CTA
│   │   │   ├── hero/             # Hero section (main)
│   │   │   │   ├── content/      # Hero content components
│   │   │   │   │   └── sections/ # Individual content sections
│   │   │   │   │       ├── ClinicalResults.jsx
│   │   │   │   │       ├── FormatSelector.jsx
│   │   │   │   │       ├── SubscriptionPlans.jsx
│   │   │   │   │       └── ...
│   │   │   │   └── image/        # Hero image carousel
│   │   │   ├── howtoenjoy/       # How to enjoy section
│   │   │   ├── organsystem/      # Organ systems benefits
│   │   │   ├── pillar/          # Core pillars
│   │   │   ├── premiumcorenutrition/  # Premium nutrition
│   │   │   ├── review/          # Customer reviews
│   │   │   ├── saving/          # Savings calculator
│   │   │   ├── trustexpert/     # Trust & expert validation
│   │   │   └── whatinside/      # Ingredients breakdown
│   │   ├── footer/            # Footer component
│   │   ├── header/            # Header & navigation
│   │   └── sticky/            # Sticky components
│   │       ├── StickyAddToCartBar.jsx
│   │       └── StickyPromoBanner.jsx
│   ├── App.jsx               # Main App component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd alpha-ecommerce-48h-sprint
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5173`

### Bước 4: Build for production
```bash
npm run build
```

### Bước 5: Preview production build
```bash
npm run preview
```

## 🎮 Hướng dẫn sử dụng

### Format Selector
1. Truy cập trang chủ
2. Ở Hero section, chọn giữa "Forever Jar" hoặc "Single-Serve Sachets"
3. Hình ảnh và thông tin sản phẩm sẽ tự động cập nhật
4. Sticky Add To Cart Bar ở bottom cũng sẽ sync theo lựa chọn

### Sticky Promo Banner
1. Scroll xuống trang đến phần "Clinical Results"
2. Banner khuyến mãi sẽ tự động xuất hiện ở top
3. Banner sẽ dính ở top khi tiếp tục scroll
4. Chỉ biến mất khi scroll lên lại về header

### Sticky Add To Cart Bar
1. Thanh mua hàng luôn hiển thị ở bottom
2. Chọn subscription plan (30/90/180 days)
3. Thông tin sản phẩm sync với Format Selector ở trên
4. Click "ADD TO CART" để thêm vào giỏ hàng

## 🔧 Các component chính

### StickyPromoBanner
- **File**: `src/components/sticky/StickyPromoBanner.jsx`
- **Chức năng**: Banner khuyến mãi sticky xuất hiện khi scroll
- **Features**: Scroll detection, responsive design, auto cleanup

### StickyAddToCartBar  
- **File**: `src/components/sticky/StickyAddToCartBar.jsx`
- **Chức năng**: Thanh mua hàng cố định với plan selector
- **Features**: Format sync, responsive layout, real-time updates

### Hero Section
- **Files**: `src/components/body/hero/`
- **Chức năng**: Section chính với image carousel và content
- **Features**: Sticky image, format selection, content sections

### FormatSelector
- **File**: `src/components/body/hero/content/sections/FormatSelector.jsx` 
- **Chức năng**: Chọn định dạng sản phẩm (Jar/Sachet)
- **Features**: State management, flash effects, image switching

## 🎨 Styling và Design System

### Colors
- **Primary Red**: `#8B0000` (buttons, accents)
- **Text Red**: `#6B1C1C` (headings, important text)
- **Background**: `#F6E3D6` (product backgrounds)
- **White**: `#FFFFFF` (cards, buttons)
- **Gray variants**: For text hierarchy

### Typography
- **Headings**: Font-semibold, various sizes
- **Body text**: Font-normal, readable sizes
- **Buttons**: Font-bold for CTAs

### Responsive Breakpoints
- **Mobile**: < 768px
- **Desktop**: >= 768px (md: breakpoint)

## 🔄 State Management

### Global State (App level)
- `selectedFormat`: Current product format (jar/sachet)
- Passed down through component tree

### Local State
- `selectedPlan`: Subscription plan selection
- `isVisible`: Sticky banner visibility
- `activeIndex`: Image carousel current index

### State Flow
```
App.jsx (selectedFormat)
  ↓
Body.jsx (pass props)
  ↓  
Hero.jsx (pass props)
  ↓
HeroContent.jsx → FormatSelector.jsx (update state)
  
App.jsx (selectedFormat)
  ↓
StickyAddToCartBar.jsx (receive props)
```

## 🚀 Performance Optimizations

- **Throttled Scroll**: RequestAnimationFrame cho smooth scrolling
- **Image Optimization**: Lazy loading và optimized CDN URLs
- **Component Memoization**: Prevent unnecessary re-renders
- **CSS Transitions**: Hardware-accelerated animations

## 🐛 Debugging & Development

### Common Issues
1. **Sticky banner không xuất hiện**: Kiểm tra Clinical Results text có đúng không
2. **Format sync không hoạt động**: Verify state được pass đúng qua props
3. **Mobile layout bị lỗi**: Check responsive breakpoints

### Development Tools
- React DevTools: Monitor component state
- Tailwind CSS DevTools: Debug styling
- Browser DevTools: Performance monitoring

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual Deploy
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team

- **Developer**: Alpha Sprint Team
- **Design**: Modern E-commerce UI/UX
- **Timeline**: 48 hours development sprint

---

🎯 **Dự án hoàn thành trong 48h với focus cao vào user experience và conversion optimization!**
