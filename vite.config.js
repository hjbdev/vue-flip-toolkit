import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/main.js"),
            name: "VueFlipToolkit",
            fileName: (format) => `vue-flip-toolkit.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue", "flip-toolkit"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                    flipToolkit: "FlipToolkit",
                },
            },
        },
    },
});
