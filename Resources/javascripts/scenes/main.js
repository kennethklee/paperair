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
			var label = cc.LabelTTF.create('Hello World', "Arial", 28);
			label.setColor(cc.c3b(255, 0, 0));
			this.addChild(label, 1);
			label.setPosition(cc.p(winSize.width / 2, winSize.height - 50));
			
            bRet = true;
        }
        return bRet;
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
