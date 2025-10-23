# Student ID Card Generator

A modern, professional React + TypeScript application to generate, customize, and download student ID cards with advanced features.

## ✨ Features

### 📝 Comprehensive Information Fields
- **College Information**: Editable college name, department, and location
- **Student Details**: Name, class, student ID, email, phone, address
- **Personal Info**: Date of birth (with month names), gender
- **Academic Info**: Academic year tracking
- **Dates**: Card issue date and automatic expiry date (4 years)

### 🎨 Professional Design System
- **5 Premium Themes**: Modern, Professional, Elegant, Corporate, Classic
- **Custom Colors**: Full color customization for accent and text
- **Responsive Dimensions**: Adjustable card width and height
- **Modern UI**: Gradient backgrounds, rounded corners, shadow effects
- **Inter Font**: Modern, clean typography with Google Fonts

### 🖼️ Image Management
- **College Logo Upload**: Transparent logo support
- **Student Photo**: Professional photo placement with border
- **Principal Signature**: Calligraphy-style signature upload (PNG)

### 📤 Export Options
- **Download PNG**: High-quality image export with html2canvas (2x resolution)
- **Print Function**: Direct printing capability
- **Real-time Preview**: Live updates as you edit

### ✨ Modern Features
- **Custom Favicon**: Elegant ID card icon
- **Loading Animation**: Smooth page loading experience
- **Custom Scrollbar**: Styled scrollbar matching theme
- **SEO Optimized**: Meta tags for better search visibility
- **Gradient Background**: Beautiful purple gradient backdrop
- **Gender Badge**: Professional gender indicator
- **Student ID Badge**: Prominent ID number display
- **Academic Year Display**: Clear year indication in header

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Usage

### 1. College Information
- Enter college name, department/faculty, and location
- These appear in the card header

### 2. Student Information
- Fill in all student details:
  - Name, class, student ID number
  - Date of birth (format: DD Month YYYY, e.g., "15 May 2000")
  - Email, phone, address
  - Gender (dropdown selection: Male, Female, Other)
  - Academic year (e.g., "2024-2025")
  - Card issue date (DD/MM/YYYY format)

### 3. Upload Images
- **College Logo**: Square format recommended, supports transparency
- **Student Photo**: 1:1 aspect ratio works best
- **Principal Signature**: Transparent PNG with calligraphy-style signature

### 4. Design Customization
- **Choose a Theme**: Select from 5 professional themes:
  - 🔵 Modern (Sky Blue)
  - 🔷 Professional (Navy Blue)
  - 🟣 Elegant (Purple)
  - 🟢 Corporate (Green)
  - 🔴 Classic (Red)
- **Custom Colors**: Fine-tune accent and text colors
- **Card Dimensions**: Adjust width (700-1000px) and height (450-650px)

### 5. Export
- **Download PNG**: Save high-quality image (2x scale for crisp output)
- **Print ID Card**: Direct print from browser

## 🎯 Key Highlights

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist` folder.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **PDF Generation**: jsPDF
- **Image Capture**: html2canvas
- **Icons**: Heroicons (SVG)

---

## 📂 Project Structure

```bash
educardify/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── StudentIDCard.tsx
│   │   ├── TuitionFeeReceipt.tsx
│   │   ├── ClassSchedule.tsx
│   │   └── ...
│   ├── StudentIDCardGenerator.tsx
│   ├── TuitionFeeReceiptGenerator.tsx
│   ├── ClassScheduleGenerator.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── vercel.json              # Vercel config
├── netlify.toml             # Netlify config
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── DEPLOYMENT_GUIDE.md
└── README.md
```

---

## 🎨 Features in Detail

### ID Card Generator
- **Design Themes**: Modern, Classic, Minimal, Gradient
- **Customization**: Colors, fonts, layouts
- **Information Fields**: Name, ID, Program, DOB, Blood Group, Contact
- **Media**: Photo upload, QR code, Barcode
- **Export**: High-quality PNG, PDF

### Fee Receipt Generator
- **Fee Categories**: Tuition, Admission, Lab, Library, Exam, Other
- **Auto-Calculation**: Subtotal, Discount, Total
- **Details**: Student info, Transaction ID, Receipt number
- **Professional**: University logo, Watermark, Official format
- **Export**: Landscape PDF, PNG

### Class Schedule Generator
- **Weekly View**: Monday to Friday
- **Time Slots**: 08:00 AM - 04:00 PM
- **Course Info**: Name, Instructor, Room, Credits
- **Statistics**: Total credits, Contact hours, Unique courses
- **Policies**: Attendance rules, Class timings
- **Export**: Print-ready PDF, PNG

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file (optional):
```env
VITE_APP_NAME=EduCardify
VITE_APP_URL=https://educardify.com
```

### Customization
- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update Google Fonts in `index.html`
- **Meta Tags**: Modify `index.html` for SEO

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Icons from Heroicons
- Fonts from Google Fonts

---

## 📞 Support

For support, email support@educardify.com or open an issue on GitHub.

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Made with ❤️ by EduCardify Team**

[Website](https://educardify.com) • [GitHub](https://github.com/yourusername/educardify) • [Twitter](https://twitter.com/educardify)

</div>
MIT
