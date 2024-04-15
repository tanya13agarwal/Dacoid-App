/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      backgroundWhite: "#FCFCFC",
      white : "#FFFFFF",
      Btnblue: "#9FB2FF",
      black : "#2C2B2B",
      grey : "#797979",
      ellipseBlue : "#89A1FF",
      fromGrad1 : "#DEE5FF",
      toGrad1 : "#809AFF", 
      boxColor : "#f1f1f1",
      greyShade: "#7F7F7F",
      toCreateAccountBtn : "#7B91FF",
      fromCreateAccountBtn : "#95BEFF",
      facebook: "#1A7AEB", 
      greyBlack: "#454545",
      toCal: "#8DA4FF",
      fromCal: "#D1DBFF",
      toggleColor : "#8099FF",
      triangleColor: "#7E96FF",
      fromAlert: "#819DFF",
      toAlert: "#101010",
      workoutBox: "#8CB1FF",
      divgradto : "#D3A4F4",
      divgradfrom : "#E9B1E0",
      ball : "#5883F7",
      red : "#FF0000",
    },
    
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto mono", "monospace"],
    },
    extend: {
      
      dropShadow: {
        '3xl' : "0px 4px 6.5px 0px #00000026"
      },
      gradientColorStopPositions: {
        48: '48%',
      },
      
    },
  },
  plugins: [],
}

