const { mix } = require('laravel-mix');

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
    mix.copyDirectory('resources/assets/images', 'public/images');
    mix.copyDirectory('components/bootstrap/fonts', 'public/fonts');
    mix.copyDirectory('resources/themes/reborn/assets', 'public/themes/reborn');

mix.scripts([
   'resources/assets/js/Ajax.js',
   'resources/assets/js/base.js',
   'resources/assets/js/bootstrap.js',
   'resources/assets/js/dynamicpage.js',
   'resources/assets/js/jplayer.playlist.js',
   'resources/assets/js/search.js',
   'resources/assets/js/slideshow.js',
  'resources/assets/js/tabledata.js'
 ], 'public/js/main.js');

mix.scripts([
  'components/jquery/jquery.min.js',
  'components/jquery-ui/jquery-ui.min.js',
            'components/prettyphoto/js/jquery.prettyPhoto.js',
            'components/tag-it/js/tag-it.js',
            'vendor/needim/noty/js/noty/jquery.noty.packaged.js',
            'components/jquery-cookie/jquery.cookie.js',
            'components/jscroll/jquery.jscroll.min.js',
            'components/jquery-qrcode/src/jquery.qrcode.js',
            'components/responsive-elements/responsive-elements.js',
            'components/datetimepicker/jquery.datetimepicker.js',
            'components/jQuery-Knob/js/jquery.knob.js',
            'components/jQuery-File-Upload/js/jquery.iframe-transport.js',
            'components/jQuery-File-Upload/js/jquery.fileupload.js',
            'components/jQuery-contextMenu/dist/jquery.contextMenu.js',
            'resources/assets/js/**/*.js'
 ], 'public/js/vendors.js');

mix.styles([
	'resources/assets/css/**/*.css',
    'components/prettyphoto/css/prettyPhoto.css',
    'components/jstree/dist/themes/default/style.min.css',
    'components/tag-it/css/jquery.tagit.css',
    'components/datetimepicker/jquery.datetimepicker.css',
    'components/jQuery-contextMenu/dist/jquery.contextMenu.min.css',
], 'public/css/vendors.css');

mix.styles([
   'resources/assets/css/jquery-editdialog.css',
   'resources/assets/css/base.css',
   'resources/assets/css/jquery-file-upload.css',
   'resources/assets/css/jquery-ui.custom.css',
   'resources/assets/css/jquery-jplayer-midnight-black/jplayer.midnight.black.css',
   'resources/assets/css/jquery-jplayer-midnight-black/jplayer.midnight.black-iframed.css',
   'resources/assets/css/jquery-mediaTable/jquery.mediaTable.css',
   'resources/assets/css/rhinoslider/rhinoslider-1.05.css'
], 'public/css/main.css');

 
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

