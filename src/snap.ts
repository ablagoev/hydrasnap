import { getNetwork } from './bitcoin';
import {Wallet, ScriptType} from './interface'
import { getExtendedPublicKey } from './rpc'

declare let wallet: Wallet;

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
    switch (requestObject.method) {
      case 'hydra_getPublicExtendedKey':
        return getExtendedPublicKey(wallet, ScriptType.P2PKH, getNetwork(requestObject.params.network))
      default:
        throw new Error('Method not found.');
    }
  });