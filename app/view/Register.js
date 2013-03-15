Ext.define("GageIn.view.Register", {
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
	'Ext.field.Select',
	'Ext.data.Store'
    ],
    xtype: 'register',
    config: {
        // tabBarPosition: 'bottom',
        // title: 'Register',
        // iconCls: 'info',
        cls: 'Register',
		styleHtmlContent:true,
        scrollable: true,
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Register'
			},
			{
	            xtype: 'panel',
	            items: [
	            {
	                xtype: 'fieldset',
	                title: 'Register',
					itemId: 'registerfield',
	                instructions: 'Connect to Facebook for more fun!',
	                items: [
						// 	                {
						// 	                    xtype: 'textfield',
						// 	                    label: 'Name'
						// name: 'Name'
						// 	                },
	                {
	                    xtype: 'emailfield',
	                    label: 'Email',
						name: 'email'
	                },
					{
	                    xtype: 'passwordfield',
	                    label: 'Password',
						name: 'password'
	                },
					{
	                    xtype: 'passwordfield',
	                    label: 'Confirm',
						name: 'password_confirmation'
	                }
	                ]
	            },
				{
	                xtype: 'button',
	                text: 'Register',
	                ui: 'confirm',
					id: 'register'
	            },
				{
					xtype: 'panel',
					html: '--or--',
					style: 'margin-left: auto; margin-right: auto;display:block;width: 40px; padding-top: 10px; padding-bottom: 10px;'
				},
				{
					xtype: 'button',
					text: 'Connect with Facebook',
					ui: 'action',
					handler: function() {
						alert('fb');
					}
				}
	            
	            ]

	        }
		]
    }
});
