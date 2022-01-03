const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      "xs": { "min": "420px" },
    },
    fontSize : { 
      ...defaultTheme.fontSize , 
      "2xs" : ".5rem" , 
      "3xs" : ".4rem" , 
      "4xs" : ".3rem" , 
    } , 
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: "15"
      },
      height: {
        "144": "36rem",
        "200": "50rem",
        "240": "60rem",
        "300": "75rem",
        "400": "100rem",
      },
      width: {
        "144": "36rem",
        "200": "50rem",
        "240": "60rem",
        "300": "75rem",
        "400": "100rem",
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
        "amibata": ["amibata"],
        "firefly": ["firefly"],
        "melinda": ["melinda"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
