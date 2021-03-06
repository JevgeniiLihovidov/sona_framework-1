
// setup vertical rhythm
@rhythm: 24px;
@base_fs: 16px;

// Load Sona framework
@setup_framework_path: "../css/sona";
@import "sona/util/install";
@import "sona/sgrid/install";
@import "sona/rhythm/install";
@import "sona/reset/install";
@import "sona/type/install";
@import "sona/shortcuts.less"; // here useful mixins and description of entire mixins in Sona framework

.normalize; // normalize css or


// Load LessFramework reset and typographic (optional)
@import "sona/lessframework/reset";
@import "sona/lessframework/type";




/*      Default Layout: 992px. 
        Columns: 10.
        Gutters: 24px.
        Outer margins: 48px.
        Leftover space for scrollbars @1024px: 32px.
*/
body {
    .sgrid(896px, 10, 24);
    padding: 72px 48px 84px;
    background: rgb(232,232,232);
    color: rgb(60,60,60);
    -webkit-text-size-adjust: 100%; /* Stops Mobile Safari from auto-adjusting font-sizes */
}



/*      Tablet Layout: 768px.
        Columns: 8.
        Gutters: 24px.
        Outer margins: 28px.
        Inherits styles from: Default Layout.
*/
@media only screen and (min-width: 768px) and (max-width: 991px) {
    
    body {
        .sgrid(712px, 8, 24px);
        padding: 48px 28px 60px;
    }
}



/*      Mobile Layout: 320px.
        Columns: 3.
        Gutters: 24px.
        Outer margins: 34px.
        Inherits styles from: Default Layout.
*/
@media only screen and (max-width: 767px) {
    
    body {
        .sgrid(252px, 3, 24px);
        padding: 48px 34px 60px;
    }
    
}



/*      Wide Mobile Layout: 480px.
        Columns: 5.
        Gutters: 24px.
        Outer margins: 22px.
        Inherits styles from: Default Layout, Mobile Layout.
*/
@media only screen and (min-width: 480px) and (max-width: 767px) {
    
    body {
        .sgrid(436px, 5, 24px);
        padding: 36px 22px 48px;
    }
    
}


/*  Retina media query.
    Overrides styles for devices with a 
    device-pixel-ratio of 2+, such as iPhone 4.
-----------------------------------------------    */

@media 
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2) {
    
    body {
    
    }
    
}

