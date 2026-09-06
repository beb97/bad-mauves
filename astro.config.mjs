// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    site: 'https://beb97.github.io',
    base: '/bad-mauves/',
    fonts: [{
        provider: fontProviders.local(),
        name: "Raleway",
        cssVariable: "--font-raleway",
        options: {
            variants: [{
                src: ['./src/assets/fonts/Raleway-VariableFont_wght.ttf'],
                weight: "100 900",
                style: 'normal'
            }]
        }
    }],
});