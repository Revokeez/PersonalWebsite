import flyonui from "flyonui";
import flyonuiPlugin from "flyonui/plugins";


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flyonui/dist/js/*.js", "./node_modules/flyonui/flyonui.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        [flyonuiPlugin, flyonui],
    ],
    flyonui: {
        themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "soft"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: false, // applies background color and foreground color for root element by default
        styled: true, // include FlyonUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        vendors: false, // default is false when true add customize css for apexChart, editor.js, flatpickr, fullcalendar, notyf, raty-js
        logs: true, // Shows info about FlyonUI version and used config in the console when building your CSS
        themeRoot: ":root" // The element that receives theme color CSS variables
    },
};
