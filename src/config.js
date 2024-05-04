export const configFile = {
    // List of allowed servers (whitelist)
    whitelist: [
        { "id": "809282945767833640", "name": "ZUROS NETWORK 🌈" },
        { "id": "0000", "name": "Example" }
    ],

    // Configuration for the AutoMod module
    AutoMod: {
        // Configuration for external server invitation links
        external_server_invitation_link: {
            enabled: true,
            // Option to delete all messages from the user
            deleteAllMessages: {
                enabled: false,
                maxMsg: 10, // Maximum number of messages to delete
            },
            // Option to remove roles from the user
            removeRoles: {
                enabled: true,
            },
            // Option to blacklist the user
            Blacklister: {
                enabled: true,
            },
            // Option to send a message to the user
            sendMessages: {
                enabled: true,
                msg: 'Fue aislado por enviar un enlace de invitación sospechosa.',
            },
            // Option to send a Private message to the user
            sendPrivateMessages: {
                enabled: true,
                msg: "Fuiste aislado por enviar un enlace de invitación sospechosa. \nSi cree que es un error o su cuenta ha sido vulnerada abra un ticket.",
            },
        },

        // Configuration for phishing and scam links
        phishing_scam_links: {
            enabled: true,
            // Option to delete all messages from the user
            deleteAllMessages: {
                enabled: true,
                maxMsg: 20, // Maximum number of messages to delete
            },
            // Option to remove roles from the user
            removeRoles: {
                enabled: true,
            },
            // Option to blacklist the user
            Blacklister: {
                enabled: true,
            },
            // Option to send a message to the user
            sendMessages: {
                enabled: true,
                msg: 'Fue aislado por enviar enlaces fraudulentos.',
            },
            // Option to send a Private message to the user
            sendPrivateMessages: {
                enabled: true,
                msg: "Fuiste aislado por enviar enlaces fraudulentos. \nSi cree que es un error o su cuenta ha sido vulnerada abra un ticket.",
            },
        },

        // Configuration for fast link spam
        fast_link_spam: {
            enabled: true,
            detection: {
                // Minimum seconds between each link
                minSecondsBetweenLinks: 4,
                // Maximum links in established second nodes
                maxLinks: 3,
                // clear user cache must be greater than minSecondsBetweenLinks
                cleanupInterval: 5
            },
            // Option to delete all messages from the user
            deleteAllMessages: {
                enabled: true,
                maxMsg: 20, // Maximum number of messages to delete
            },
            // Option to remove roles from the user
            removeRoles: {
                enabled: true,
            },
            // Option to blacklist the user
            Blacklister: {
                enabled: true,
            },
            // Option to send a message to the user
            sendMessages: {
                enabled: true,
                msg: 'Fue aislado por enviar demasiados enlaces en poco tiempo.',
            },
            // Option to send a Private message to the user
            sendPrivateMessages: {
                enabled: true,
                msg: "Fuiste aislado por enviar demasiados enlaces en poco tiempo. \nSi cree que es un error o su cuenta ha sido vulnerada abra un ticket.",
            },
        },

        // Configuration for the honeypot system
        honeypot_system: {
            enabled: true,
            // Option to delete all messages from the user
            deleteAllMessages: {
                enabled: true,
                maxMsg: 5, // Maximum number of messages to delete
            },
            // Option to remove roles from the user
            removeRoles: {
                enabled: false,
            },
            // Option to blacklist the user
            Blacklister: {
                enabled: true,
            },
            // Option to send a message to the user
            sendMessages: {
                enabled: false,
                msg: '',
            },
            sendPrivateMessages: {
                enabled: true,
                msg: "Fuiste aislado por enviar mensajes en el canal honypot (trampa para cuentas hackeadas o bots). \nSi cree que es un error o su cuenta ha sido vulnerada abra un ticket.",
            },
        }
    }
};
