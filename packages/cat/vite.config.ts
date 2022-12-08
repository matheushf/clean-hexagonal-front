import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { partytownVite } from "@builder.io/partytown/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), partytownVite({
    dest: path.join(__dirname, "dist", "~partytown"),
  })]
})
