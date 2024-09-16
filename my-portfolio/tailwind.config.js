/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DB4444',
        'secondary': '#F5F5F5',
        'text-primary': '#000000',
        'text-secondary': '#FAFAFA', // Ensure this matches your design
        'accent-1': '#F55E5E',
        'accent-2': '#00FF66',
        'neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        'custom-red': '#FF0000',
        'custom-black': '#000000',
        'custom-gray': '#F3F4F6',
        'indigo': {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        'sky': {
          100: '#e0f2fe', // Light blue background
        },
        'red': {
          500: '#ef4444', // Button color
          600: '#dc2626', // Button hover color
        },
        'input-bg': '#F5F5F5', // for form input backgrounds
        'neutral-800': '#2D3748', // Add this line
        'neutral-700': '#4A5568', // Add this line
        'neutral-600': '#718096', // Add this line
        'neutral-400': '#CBD5E0', // Add this line
        'sky-100': '#EBF8FF', // Add this line
        'indigo-500': '#667EEA', // Add this line
        'indigo-600': '#5A67D8', // Add this line
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      textColor: {
        'body': '#666666', // for regular text
        'heading': '#000000', // for headings
      },
      maxWidth: {
        '7xl': '80rem',
      },
      width: {
        '280': '280px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': {'max': '1200px'},
      'xl': '1280px',
      '2xl': '1536px',
      'mq750': {'raw': 'screen and (max-width: 750px)'},
      'mq450': {'raw': 'screen and (max-width: 450px)'},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
};