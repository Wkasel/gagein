Ext.define("GageIn.view.Login", {
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
	'Ext.form.FieldSet',
	'Ext.field.Password',
	'Ext.field.Email'
    ],
    xtype: 'login',
    config: {

        cls: 'Login',
        styleHtmlContent: true,
        scrollable: true,
        items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            title: 'Login'

        },
        {
            xtype: 'panel',
            items: [
            {
                xtype: 'fieldset',
                title: 'Login',
				itemId: 'loginfield',
                items: [
                {
                    xtype: 'textfield',
                    label: 'User',
					name: 'username'
                },
                {
                    xtype: 'passwordfield',
                    label: 'Password',
					name: 'password'
                },
				{
					xtype: 'togglefield',
					label: 'Remember me?',
					// labelWidth: '60%',
					name: 'keepUser'
				}
                ]
            },
            {
                xtype: 'button',
                text: 'Login',
                ui: 'confirm',
				id: 'login'
            }
            ]

        }
        ]
    },
	initialize: function() {
		
	}
});
