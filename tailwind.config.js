module.exports = {
  purge: [
    "./src/**/*.css",
    "./**/*.html",
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: "#000",
      white: "#fff",
      blue: "#0371FF",
      lightGray: "#E5E5E5",
      gray: '#5B5A6C',
      footer_color: "#2C2C33",
      opacity_gray: 'rgba(0, 0, 0, 0.07)',
      top_nav_bg_color: "#F0F0F0",
      borderColor: "rgba(255, 255, 255, 0.05)",
      card_search_color: "#FAFAFA",
      black_blue: '#0B1C2E',
      main_color: "#00BCD4"
    },
    fontSize: {
      'sm': '14px',
      'md': '16px',
      'mdx': '20px',
      'lg': '2rem',
      'rem2Half': '2.5rem',
      'rem1Half': '1.5rem',
      'rem1': '1rem',
      '0.7rem': '0.7rem',
      '0.5rem': '0.5rem',
      '0.2rem': '0.2rem',
      '0.9rem': '0.9rem',
      '1.2rem': '1.2rem',
      '1.4rem': '1.4rem',
      '1.6rem': '1.6rem',
      '2.2rem': '2.2rem',
      '2.4rem': '2.4rem',
      '2rem': '2rem',
      '2.6rem': '2.6rem',
      '2.8rem': '2.8rem'
    },
    lineHeight: {
      '1rem': '1rem',
      '1.2rem': '1.2rem'
    },
    borderRadius: {
      '1rem': '1rem',
      '0.5rem': '0.5rem',
      '0.7rem': '0.7rem',
      '2rem': '2rem',
      '1.2rem': '1.2rem',
      '2.2rem': '2.2rem',
      '2.4rem': '2.4rem',
      '0.2rem': '0.2rem',
      '2.6rem': '2.6rem',
      '2.8rem': '2.8rem',
      '296px': '296px',
      'full': '9999px'
    },
    spacing: {
      xs: '4px',
      rem1: "1rem",
      rem2: "2rem",
      remHalf: '0.5rem',
      '296px': '296px',
      '0.2rem': '0.2rem',
      'rem2Half': '2.5rem',
      '19rem': '19rem',
      'heightImage': '17.4375rem',
      xsRem: '3rem',
      none: '0px',
      sm: '8px',
      md: '16px',
      lg: '30px',
      xl: '48px',
      footer_img_w: '190px',
      half: "50%",
      '0.7rem': '0.7rem',
      '0.5rem': '0.5rem',
      '0.9rem': '0.9rem',
      '1.2rem': '1.2rem',
      '2.2rem': '2.2rem',
      '1.2rem': '1.2rem',
      '1.4rem': '1.4rem',
      '1rem': '1rem',
      '2rem': '2rem',
      '2.4rem': '2.4rem',
      '2.6rem': '2.6rem',
      '2.8rem': '2.8rem',
      '3rem': '3rem',
      '3.2rem': '3.2rem',
      '3.4rem': '3.4rem',
      'searchItem': '304px',
      'heightItem': '36px'
    },
    screens: {
      'phone': { 'max': '639px' },
      'mobile': {
        'min': '481px',
        'max': '767px'
      },
      'tablet': {
        'min': '768px',
        'max': '1024px'
      },
      'fromTabletToPhone': {
        'max': '1024px'
      },
      'laptop': { 'max': '1023px' },
      'desktop': { 'max': '1279px' },
      'icon_stack': {
        'min': '640px',
        'max': '767px'
      },
      'desktop_custom': {
        'min': '1024px',
        'max': '1279px'
      },
      'tablet_min': {
        'min': '992px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
