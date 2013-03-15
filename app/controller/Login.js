Ext.define('GageIn.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        loggedUserId: null,
        refs: {
            usernameCt: '#loginfield [name=username]',
            passwordCt: '#loginfield [name=password]',
            logOutButton: 'dashboard [action=logout]',
            keepUserCt: '#loginfield [name=keepUser]',
            loginForm: '#loginfield',
            quickLogin: '#quickLogin',
            quickRegister: '#quickRegister'
        },
        control: {
            '#logout': {
                tap: 'onLogoutTap'
            },
            '#login': {
                tap: 'onLoginTap'
            },
            quickLogin: {
                tap: 'onQuickLoginTap'
            },
            quickRegister: {
                tap: 'onQuickRegisterTap'
            },
            
        }
    },


    init: function() {
    },
    onQuickLoginTap: function() {
        Ext.ComponentQuery.query('init')[0].setActiveItem(2)
    },
    onQuickRegisterTap: function() {
        Ext.ComponentQuery.query('init')[0].setActiveItem(1)
    }
    
});