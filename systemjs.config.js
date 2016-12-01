/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
            'angular2-infinite-scroll': 'npm:angular2-infinite-scroll',
            'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js',
            'ng2-auto-complete': 'npm:ng2-auto-complete/dist',
            'ng2-translate': 'npm:ng2-translate/bundles',
            'angular2-recaptcha': 'node_modules/angular2-recaptcha'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {main: './main.js', defaultExtension: 'js'},
            rxjs: {main: './Rx.js', defaultExtension: 'js'},
            'angular-in-memory-web-api': {main: './index.js', defaultExtension: 'js'},
            'angular2-infinite-scroll': {main: 'angular2-infinite-scroll.js', defaultExtension: 'js'},
            'ng2-auto-complete': { main: 'ng2-auto-complete.umd.js', defaultExtension: 'js' },
            'ng2-translate': { main: './index.js', defaultExtension: 'js' },
            'angular2-recaptcha': {defaultExtension: 'js', main:'index'}
        }
    });
})(this);
