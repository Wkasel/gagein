Ext.define("GageIn.view.SubWrapper", {
    extend: 'Ext.TabPanel',
    requires: [
        'Ext.TitleBar',
    ],
	xtype: 'subwrapper',
    config: {
        tabBarPosition: 'bottom',
		layout: 'card',
        items: [
            {
				xtype: 'homeview'
			}
        ]
    },
	constructor: function(conf){
        this.callParent();   
  		subWrapperView = this;
		this.on({
			activeitemchange: function(scope, value) { 
				location.hash = value.get('hashUrl');
				}
			}
		)

        return this;
    }
});

// MainView.setActiveItem(2);