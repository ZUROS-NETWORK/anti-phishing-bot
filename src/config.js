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
        },

        // Configuration for fast link spam
        fast_link_spam: {
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
                msg: 'Fue aislado por enviar demasiados enlaces en poco tiempo.',
            },
        },

        // Configuration for the honeypot system
        honeypot_system: {
            enabled: true,
            // Option to delete all messages from the user
            deleteAllMessages: {
                enabled: false,
                maxMsg: 20, // Maximum number of messages to delete
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
        }
    }
};
