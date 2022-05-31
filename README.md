# `hydrasnap`

This snap allows you to manage your Hydra through Metamask Flask.

## Snap Introducion
For more about snap, please fellow metamask snap guide [here](https://docs.metamask.io/guide/snaps.html)

### Usage

1. Enable this snap on your dapp

```
const result: boolean = await ethereum.request({
    method: 'wallet_enable',
    params: [
      {
        wallet_snap: { "npm:hydrasnap": {} },
      },
    ],
  });
```

2. get extended your extended public keys

```
const result: string = await ethereum.request({
    method: 'wallet_invokeSnap',
    params: [
      "npm:btcsnap",
      {
        method: 'hydra_getPublicExtendedKey',
        params: {
          network: "Main" // for testnet use "Test" ,
        },
      },
    ],
  });
```

### Build

For Build the snap and test your snap locally please run

```
yarn rebuild
```

### Test

For run all tests run the following command:
```
yarn test
```
