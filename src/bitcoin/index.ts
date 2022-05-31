import { networks } from '../networks'
import { BitcoinNetwork } from '../interface'

export function getNetwork(network: BitcoinNetwork) {
    switch (network) {
        case BitcoinNetwork.Main:
            return networks.hydra
        case BitcoinNetwork.Test:
            return networks.hydra_testnet
        default:
            return networks.hydra
    }
}

