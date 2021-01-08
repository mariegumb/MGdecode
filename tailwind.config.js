const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            neutral: colors.gray,
            gray: colors.gray,
            black: colors.black,
            white: colors.white,
            blueGray: colors.blueGray,
            coolGray: colors.coolGray,
            warmGray: colors.warmGray,
            trueGray: colors.trueGray,
            red: colors.red,
            yellow: colors.yellow,
            amber: colors.amber,
            orange: colors.orange,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            cyan: colors.cyan,
            lightBlue: colors.lightBlue,
            blue: colors.blue,
            teal: colors.teal,
            indigo: colors.indigo,
            fuchsia: colors.fuchsia,
            purple: colors.purple,
            violet: colors.violet,
            pink: colors.pink,
            rose: colors.rose,
            transparent: 'transparent',
        },
    },
    variants: {
        extend: {
            display: ['hover', 'focus', 'dark'],
            opacity: ['hover', 'focus', 'dark'],
            backgroundOpacity: ['hover', 'focus', 'dark'],
            backgroundColor: ['hover', 'focus', 'dark', 'odd'],
            ringOffsetColor: ['hover', 'focus', 'dark'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}