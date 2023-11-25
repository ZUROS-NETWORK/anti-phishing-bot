export const configFile = {
    whitelist: [
        { "id": "809282945767833640", "name": "ZUROS NETWORK 🌈" },
        { "id": "0000", "name": "Example" }
    ],
    AutoMod: {
        external_server_invitation_link: {
            enabled: true,
            deleteAllMessages: {
                enabled: false,
                maxMsg: 10,
            },
            removeRoles: {
                enabled: true,
            },
            Blacklister: {
                enabled: true,
            },
            sendMessages: {
                enabled: true,
                msg: 'Fue aislado por enviar un enlace de invitación sospechosa.',
            },

        },
        phishing_scam_links: {
            enabled: true,
            deleteAllMessages: {
                enabled: true,
                maxMsg: 20,
            },
            removeRoles: {
                enabled: true,
            },
            Blacklister: {
                enabled: true,
            },
            sendMessages: {
                enabled: true,
                msg: 'Fue aislado por enviar enlaces fraudulentos.',
            },

        },
        fast_link_spam: {
            enabled: true,
            deleteAllMessages: {
                enabled: true,
                maxMsg: 20,
            },
            removeRoles: {
                enabled: true,
            },
            Blacklister: {
                enabled: true,
            },
            sendMessages: {
                enabled: true,
                msg: 'Fue aislado por enviar demasiados enlaces en poco tiempo.',
            },

        },
        honeypot_system: {
            enabled: true,
            deleteAllMessages: {
                enabled: false,
                maxMsg: 20,
            },
            removeRoles: {
                enabled: false,
            },
            Blacklister: {
                enabled: true,
            },
            sendMessages: {
                enabled: false,
                msg: '',
            },
        }
    }
}