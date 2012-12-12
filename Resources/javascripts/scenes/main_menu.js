var MainMenu = cc.Layer.extend({
    _ship:null,

    ctor:function () {
        cc.associateWithNative(this, cc.Layer);
    },
    init:function () {
        var bRet = false;
        if (this._super()) {
            var winSize = cc.Director.getInstance().getWinSize();

			// Initialization code
            var background = cc.Sprite.create(menu_background);
            background.setAnchorPoint(cc.p(0,0));
            this.addChild(background, 0, 1);
			
            var plane = cc.Sprite.create(menu_plane);
            plane.setAnchorPoint(cc.p(0,0));
            this.addChild(plane, 0, 1);

			var title_shadow = cc.LabelTTF.create('Paper Air', "Arial Bold", 42);
			title_shadow.setColor(cc.c3b(0, 0, 0));
			title_shadow.setOpacity(80);
			this.addChild(title_shadow, 1);
			title_shadow.setPosition(cc.p(winSize.width / 2 - 2, winSize.height - 50 - 2));

			var title = cc.LabelTTF.create('Paper Air', "Arial Bold", 42);
			this.addChild(title, 1);
			title.setPosition(cc.p(winSize.width / 2, winSize.height - 50));
			
			var menuItems = [];
			menuItems.push(this.create_menu_item('Play', this.onPlay));
			menuItems.push(this.create_menu_item('Options', this.onOptions));
			menuItems.push(this.create_menu_item('Help', this.onHelp));
			menuItems.push(this.create_menu_item('Exit', this.onExit));
			
            //var menu = cc.Menu.create(menuItems);	// Gah doesn't work
			//var menu = cc.Menu.create(menuItems[0], menuItems[1], menuItems[2], menuItems[3]);
			var menu = cc.Menu.create(menuItems[0], menuItems[3]);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu, 1, 2);
            menu.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
            
			//this.schedule(this.update, 0.1);
			
            bRet = true;
        }
        return bRet;
    },
	
	onPlay: function() {
		// TODO
	},

	onOptions: function() {
		// TODO
	},

	onHelp: function() {
		// TODO
	},


	onExit: function() {
		cc.Director.getInstance().end();
	},

	create_menu_item: function(string, callback) {
		var winSize = cc.Director.getInstance().getWinSize();
		var normal = cc.LabelTTF.create(string, "Arial", 24);
		return cc.MenuItemLabel.create(normal, this, callback);		
	},
	
    update:function () {
    },
});

MainMenu.create = function () {
    var sg = new MainMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

MainMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = MainMenu.create();
    scene.addChild(layer);
    return scene;
};
