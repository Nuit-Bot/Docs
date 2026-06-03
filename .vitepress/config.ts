import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

export default defineConfig({
    base: "/docs/",
    title: "Nuit",
    description: "The free, self-hostable and open Discord bot",
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin);
        },
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Installation", link: "/installation" },
        ],

        sidebar: [
            {
                text: "Installation",
                items: [
                    { text: "Installation", link: "/installation" },
                    { text: "Configuration", link: "/configuration" },
                    { text: "Updating", link: "/updating" },
                ],
            },

            {
                text: "Other",
                items: [
                    { text: "FAQ & Troubleshooting", link: "/faq" },
                    { text: "About", link: "/about" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/Nuit-Bot" }],
    },
});
