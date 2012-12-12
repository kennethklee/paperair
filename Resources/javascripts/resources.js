var graphics_path;
var music_path;
if( cc.config.deviceType == 'browser') {
    graphics_path = "/graphics/";
    music_path = "/music/";
}
else if( cc.config.engine == 'cocos2d-x') {
    graphics_path = "graphics/";
    music_path = "music/";
}

//image
var menu_background = graphics_path + 'menu/bg.jpg';
var menu_plane = graphics_path + 'menu/plane.png';

//music

