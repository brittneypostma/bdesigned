const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#ffffff',
			sand: '#EBE4DC',
			'light-blue': '#E8F4F4',
			'medium-blue': '#465881',
			mint: '#AEEADE',
			caribbean: '#00E0FF',
			blue: '#5FC7E4',
			'light-teal': '#68D2C8',
			teal: '#00789E',
			yellow: '#E5A91E',
			navy: '#1B2A49',
			gray: '#333333',
			black: '#000000',
			transparent: 'transparent'
		},
		fontFamily: {
			heading: "'Pacifico', cursive",
			body: "'Quicksand', sans-serif"
		},
		extend: {
			boxShadow: {
				inset: 'inset 0px -5px 10px rgba(0, 0, 0, 0.25)',
				outline: '0 0 0 3px rgba(66, 153, 225, 0.5);'
			},
			height: {
				100: '100px'
			},
			inset: {
				'1/2': '50%',
				50: '50px',
				100: '100px'
			},
			maxWidth: {
				'7xl': '80rem',
				'8xl': '2000px'
			},
			screens: {
				'2xl': '1600px'
			}
		}
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
		borderWidth: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
	},
	plugins: []
}

module.exports = config
