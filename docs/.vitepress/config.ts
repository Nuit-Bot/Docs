import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

export default defineConfig({
    base: "/Docs/",
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
            {
                text: "Legal",
                items: [
                    { text: "Terms of Service", link: "/legal/tos" },
                    { text: "Privacy Policy", link: "/legal/privacy" },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Nuit-Bot",
            },
        ],
        search: {
            provider: "local",
        },
    },
});
