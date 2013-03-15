Ext.define("GageIn.view.QuickReg", {
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
	'Ext.field.Select',
	'Ext.data.Store'
    ],
    xtype: 'QuickReg',
    config: {
        cls: 'Register',
		styleHtmlContent:true,
        scrollable: true,
		items: [
		{
            xtype: 'titlebar',
            docked: 'top'

        },
		{
            xtype: 'button',
            text: 'SalesForce',
            ui: 'default',
        },
        {
            xtype: 'spacer',
            height: 20
        },
        {
            xtype: 'button',
            text: 'LinkedIn',
            ui: 'default',
        },
        {
            xtype: 'spacer',
            height: 20
        },
        {
            xtype: 'button',
            text: 'Facebook',
            ui: 'default',
        },
        {
            xtype: 'spacer',
            height: 20
        },
        {
            xtype: 'button',
            text: 'Twitter',
            ui: 'default',
        },
        {
            xtype: 'spacer',
            height: 20
        },
        {
            xtype: 'button',
            text: 'Yammer',
            ui: 'default',
        },
        {
            xtype: 'spacer',
            height: 20
        },
        {
            xtype: 'panel',
            html: 'Or, use your email',
            height: 20
        },
        {
            xtype: 'button',
            text: 'Login',
            id: 'quickLogin',
            ui: 'confirm',
        },
        {
            xtype: 'spacer',
            height: 20
        },
        {
            xtype: 'button',
            text: 'Register',
            id: 'quickRegister',
            ui: 'confirm',
        }
		]
    }
});
