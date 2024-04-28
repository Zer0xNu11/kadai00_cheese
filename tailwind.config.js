/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    fontFamily: {
      body: [
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'sans-serif'
      ],

      style:[
        'ヒラギノ明朝 ProN','Hiragino Mincho ProN','Yu Mincho Light','YuMincho','Yu Mincho','游明朝体','ＭＳ 明朝', 'MS Mincho','klee', 'sans-serif'
      ] 
    },

    extend: {
      animation: {
        "tracking-in-expand": "tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",

        "swing-left-fwd": "swing-left-fwd 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        
        "swirl-out-fwd": "swirl-out-fwd 0.6s ease  both",

        "flashFade": "flashFade 25s ease  both infinite",


      },
      keyframes: {
        "tracking-in-expand": {
            "0%": {
                "letter-spacing": "-1em",
                opacity: "0"
            },
            "40%": {
                opacity: ".8"
            },
            to: {
                opacity: "1"
            }
        },

        "swing-left-fwd": {
          "0%": {
              transform: "rotateY(0)",
              "transform-origin": "left bottom"
          },
          to: {
              transform: "rotateY(-180deg)",
              "transform-origin": "left bottom"
          }
        },

        "swirl-out-fwd": {
          "0%": {
              transform: "rotate(0) scale(1)",
              opacity: "1"
          },
          to: {
              transform: "rotate(540deg) scale(5)",
              opacity: "0"
          }
        },

        "flashFade": {
          "0%": {opacity: "0" },
          "5%": {opacity: "1" },
          "25%": { opacity: "1" },
          "30%": { opacity: "0" },
          "100%": { opacity: "0" },
        },

    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
 }
}
