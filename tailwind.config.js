/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        Work: "hsl(15, 100%, 70%)",
        Play: "hsl(195, 74%, 62%)",
        Study: "hsl(348, 100%, 68%)",
        Exercise: "hsl(145, 58%, 55%)",
        Social: "hsl(264, 64%, 52%)",
        SelfCare: "hsl(43, 84%, 65%)",
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: " hsl(236, 100%, 87%)",
      },
      fontSize: {
        headers: "18px",
      },
      backgroundImage: {
        Work: "url('./images/icon-work.svg')",
        Play: "url('./images/icon-play.svg')",
        SelfCare: "url('./images/icon-self-care.svg')",
        Social: "url('./images/icon-social.svg')",
        Study: "url('./images/icon-study.svg')",
        Exercise: "url('./images/icon-exercise.svg')",
      },
      backgroundPosition: {
        Work: "90% -12%",
        Study: "90% -12%",
        Play: "90% -10%",
        SelfCare: "90% -10%",
        Exercise: "90% -5%",
        Social: "90% -20%",
      },
    },
  },
  plugins: [],
};
