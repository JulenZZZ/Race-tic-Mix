var mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.options({
     processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
     postCss: [
         require('autoprefixer')({
             browsers: ['last 3 versions'],
             cascade: false
         })
     ],
 });

mix


  .js('resources/assets/js/app.js', 'public/js')
  .js('node_modules/jquery/dist/jquery.js', 'public/js')

   .sass('resources/assets/sass/app.scss', 'public/css');
    
