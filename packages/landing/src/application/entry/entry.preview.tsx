/*
 * WHAT IS THIS FILE?
 *
 * It's the bundle entry point for `npm run preview`.
 * That is, serving your app built in production mode.
 *
 * Feel free to modify this file, but don't remove it!
 *
 * Learn more about Vite's preview command:
 * - https://vitejs.dev/config/preview-options.html#preview-options
 *
 */
// import { qwikCity } from '@builder.io/qwik-city/middleware/node';
import render from './entry.ssr';
import { createQwikCity } from '@builder.io/qwik-city/middleware/node';
import qwikCityPlan from '@qwik-city-plan';

const qwikCity = createQwikCity({ render, qwikCityPlan });
export default qwikCity;
/**
 * The default export is the QwikCity adaptor used by Vite preview.
 */
// export default qwikCity(render);
