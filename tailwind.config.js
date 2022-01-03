const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : { 
        "144" : "36rem" , 
        "200" : "50rem" , 
        "240" : "60rem" , 
        "300" : "75rem" , 
        "400" : "100rem" , 
      }, 
      width : { 
        "144" : "36rem" , 
        "200" : "50rem" , 
        "240" : "60rem" , 
        "300" : "75rem" , 
        "400" : "100rem" , 
      }, 
      colors: {
        "pickled-bluewood": "#253948",
        "grain-brown": "#E1C8B2",
        "soapstone": "#FFFBF8",
        "granny-smith": "#899E9F",
        "sage": "#9DA086",
        "wheat": "#F3DAB3",
        "brandy": "#DFC89E",
      },
      fontFamily: {
        // ...defaultTheme.fontFamily ,
        "thankyou": ["thank you"],
        "wenyue": ["wenyue"],
        "copperplate": ["copperplate"],
        "amibata" : ["amibata"] ,
        "firefly" : ["firefly"] ,
        "melinda" : ["melinda"] , 
      }
    },
  },
  plugins: [],
}
