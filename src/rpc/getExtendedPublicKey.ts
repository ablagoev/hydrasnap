import { Network } from 'bitcoinjs-lib';
import { Wallet, ScriptType, BIP44CoinTypeNode } from "../interface";

export async function extractAccoutPrivateKey(wallet: Wallet, network: Network): Promise<string> {
    let coinType = 609;

    const methodName = `snap_getBip44Entropy_${coinType}`
    const bitcoin44node = await wallet.request({
        method: methodName
    }) as BIP44CoinTypeNode

		return bitcoin44node.key;
}

export async function getExtendedPublicKey(wallet: Wallet, scriptType: ScriptType, network: Network): Promise<string> {
    switch (scriptType) {
        case ScriptType.P2PKH:
            const result = await wallet.request({
                method: 'snap_confirm',
                params: [
                  {
                    prompt: 'Access your extended public key?',
                    description: 'Do you want to allow this app to access your extended public key?',
                  },
                ],
            });

            if(result) {
                return await extractAccoutPrivateKey(wallet, network)
            } else {
                throw new Error('User reject to access the key')
            }
        default:
            throw new Error('ScriptType is not supported.');
    }
}