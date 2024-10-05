import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", 'sans-serif'],
      },
      colors: {
        dark: '#424242',
				darkest: '#212121',
				light: '#E0E0E0'
      },
			backgroundColor: {
				dark: '#424242',
				darkest: '#212121',
				light: '#E0E0E0'
			},
      maxWidth: {
        "app-layout": "72rem",
      },
      dropShadow: {
        'text': '-1px 4px 2px rgba(0,0,0,0.6)',
      }
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
}
export default config
