export const networks = {
    hydra: {
        messagePrefix: '\x15HYDRA Signed Message:\n',
        bech32: 'hc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x28,
        scriptHash: 0x3f,
        wif: 0x80
    },
    hydra_testnet: {
        messagePrefix: '\x15HYDRA Signed Message:\n',
        bech32: 'th',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x42,
        scriptHash: 0x80,
        wif: 0xef
    }
};
