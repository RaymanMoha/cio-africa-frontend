module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
            colors: {
                black: {
                    600: "var(--black_600)",
                    900: "var(--black_900)",
                    "900_99": "var(--black_900_99)",
                    "900_b2": "var(--black_900_b2)",
                },
                blue_gray: { "100_54": "var(--blue_gray_100_54)", "900_3f": "var(--blue_gray_900_3f)" },
                deep_purple: { "100_99": "var(--deep_purple_100_99)" },
                gray: {
                    50: "var(--gray_50)",
                    200: "var(--gray_200)",
                    500: "var(--gray_500)",
                    700: "var(--gray_700)",
                    800: "var(--gray_800)",
                    50_99: "var(--gray_50_99)",
                    200_99: "var(--gray_200_99)",
                    700_99: "var(--gray_700_99)",
                    800_77: "var(--gray_800_7f)",
                },
                red: { a700: "var(--red_a700f)" },
                white: { a700: "var(--white_a700)", a700_4c: "var(--white_a700_4c)" },
                gray_shadow: "var(--gray_shadow)",
            },
          boxShadow: { xs: "0 0 13px 5px #00000029"},
          fontFamily: { inter: "Inter", graphiktrial: "Graphik Trial", dmsans: "DM Sans", lato: "Lato" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
