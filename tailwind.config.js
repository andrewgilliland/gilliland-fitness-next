module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.purple.600"),
              "&:hover": {
                color: theme("colors.purple.500"),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.50"),
            a: {
              color: theme("colors.purple.600"),
              "&:hover": {
                color: theme("colors.purple.500"),
              },
            },
            h1: {
              color: theme("colors.gray.50"),
            },
            h2: {
              color: theme("colors.gray.50"),
            },
            h3: {
              color: theme("colors.gray.50"),
            },
            h4: {
              color: theme("colors.gray.50"),
            },
            h5: {
              color: theme("colors.gray.50"),
            },
            h6: {
              color: theme("colors.gray.50"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
