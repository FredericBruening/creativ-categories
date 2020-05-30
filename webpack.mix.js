let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.js('resources/creativ-categories.js', 'version/100/frontend/js')
   .sass('resources/creativ-categories.scss', 'version/100/frontend/css')
   .setPublicPath('./')
   .options({
       processCssUrls: false,
       postCss: [ tailwindcss('./tailwind.config.js') ],
   })
   .purgeCss({
       enabled: mix.inProduction(),
       folders: [
           './resources/',
           './version/',
       ],
       defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
       extensions: ['vue', 'js', 'tpl', 'php'],
       whitelistPatterns: [/^(verte|slider|dropzone|vue-dropzone)/]
   });


if (mix.inProduction()) {
    mix.version();
}

