Ext.define("GageIn.view.Main", {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar',
    ],
	xtype: 'main',
    config: {
		fullscreen: true,
		layout: 'card',
        items: [
			{
				xtype: 'init'
			},
            {
				xtype: 'subwrapper'
			}
        ]
    },
	constructor: function(conf){
		MainPage = this;
        this.callParent();  
        return this;
    }
});
