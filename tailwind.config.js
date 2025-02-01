/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ['"Evanston Tavern 1919"'],
      displayMd: ['"Evanston Tavern 1919 medium"'],
      secondFont: ["Montserrat"],
      body: ['"Open Sans"'],
      dmSans: ['"DM Sans"', "sans-serif"],
      spaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
    backgroundPosition: {
      right: "center right 1rem",
    },
    extend: {
      colors: {
        blurColor: "#8249E4",
        lightPurple: "#B186FE",
        bgPurple: "#8A66C5",
        darkPurple: "#261937",
        neonYellow: "#C8EE44",
        footerBackground: "#F9F7EE",
        footerBackgroundTwo: "#1A1B24",
        lightGray: "#686565",
        lightBrown: "#574F4A",
        secondaryBg: "#21222F",
        mainBackground: "#0B0E1B",
        mainBackgroundTwo: "#141723",
        cardBackground: "#191D2F",
        cardBackgroundTwo: "#ECEEF1",
        ApplePlayBg: "#2E313C",
      },
      screens: {
        "3xl": "1440px",
      },
      backgroundImage: {
        "contact-hero": "url('/images/contact.png')",
      },
    },
  },
  plugins: [],
};
