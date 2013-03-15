Ext.define("GageIn.view.Home", {
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
    'Ext.data.proxy.JsonP',
    'Ext.dataview.List',
    'Ext.field.Select',
    'Ext.data.Store'
    ],
    xtype: 'homeview',
    config: {
        hashUrl: '#',
        tabBarPosition: 'bottom',
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        layout: {
            type: 'vbox'
        },
        items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Bookie',
            items: [
            {
                xtype: 'button',
                hidden: true,
                itemId: 'Back',
                ui: 'back',
                text: 'Back'
            }
            ]
        },
        {
            xtype: 'toolbar',
            items: [
            {
                xtype: 'button',
                margin: 5,
                ui: 'normal',
                text: 'Home'
            },
            ]
        },
        {
            xtype: 'list',
            flex: 5,
            itemId: 'newsfeedFriend',
            itemTpl: '{story}',
            listeners: {
                itemtap: function(scope, index, target, record, e) {
                    //stubbed
                }
            },
            // store: 'NewsFeed'

        }

        ],
        
    },

    
});


