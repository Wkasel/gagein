Ext.define("GageIn.view.Init", {
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
    ],
    xtype: 'init',
    config: {
        fullscreen: true,
        layout: 'card',
        items: [
        {
            xtype: 'QuickReg'
        },
        {
            xtype: 'register'
        },
        {
            xtype: 'login'
        }
        ]
    },
	constructor: function(conf){
		InitPage = this;
        this.callParent();     
        return this;
    }
});

