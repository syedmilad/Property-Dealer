/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E7F3F9",
        dark: "#191919",
        grayDark: "#525256",
        gray: "#666666",
        grayLight: "#878787",
        light: "#9F9F9F",
        extraLight: "#E8E8E8",
        softWhite: "#F3F3F3",
        specialRed: "#E73D1C",
        specialGreen: "#4DAF6E",
        opacity25: "rgba(210, 210, 210, 0.25)",
        opacity70: "rgba(255, 255, 255, 0.7)",
        opacity85: "rgba(255, 255, 255, 0.85)",
        btnBgPrimary: "#70EDE2",
        btnTextPrimary: "#272729",
        dropBg: "#003A92",
        'chart-paid': '#82E9DE',    // Light Teal
        'chart-unpaid': '#25A6E9', // Darker Blue
        'filter-icon-bg': '#ECFEFF', // Or 'cyan-50'
        'filter-icon-text': '#06B6D4', // Or 'cyan-600'
        'income-green': '#82E9DE',   // Using the teal from image
        'expense-red': '#EF4444',    // Tailwind's red-500
        'filter-icon-bg': '#ECFEFF', // Tailwind's cyan-50
        'filter-icon-text': '#06B6D4', // Tailwind's cyan-600
        'facility-plumbing': '#76DDE0', // Custom Teal
        'facility-electrical': '#1C6FC4', // Custom Dark Blue
        // 'facility-joinery': '#3B82F6', // This is blue-500, maybe keep as is
        'radial-complete': '#76DDE0',     // Custom Teal again for radial
        'filter-icon-bg': '#ECFEFF',     // Tailwind's cyan-50
        'filter-icon-text': '#06B6D4',    // Tailwind's cyan-600
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
        xl: ["20px", "28px"],
        "2xl": ["22px", "32px"],
        "3xl": ["24px", "28px"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      spacing: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif'], // Set Roboto as the default sans font
      }
    },
  },
  plugins: [],
};
