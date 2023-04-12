module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        letterSpacing: {
            tight: '-.015em'
        },
        extend: {
            height: {
                'half-screen': '50vh'
            }
        },
        colors: {
            primaryHW: '#FFC300',
            secondaryHW: '#FF6B6B',
            tertiaryHW: '#FFB6C1',
            quaternaryHW: '#00CED1',
            quinaryHW: '#FFDAB9',
            white: '#ffff',
            textGrey : '#7d7f80'
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'bigDisplay': ['Cookie'],
      },
    },
    plugins: []
}