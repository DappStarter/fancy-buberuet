require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stomach deny maze purity install close army gather'; 
let testAccounts = [
"0xc16b8d7229cba8d13f03ff788dcba9b07e7a272dde773df9c2f28f8f67501814",
"0xcc5d54badc5dc1e55b7e3df20c6adc26a5287741fc1e3985881456969d2587f0",
"0x8b5a63e0875c285a9228eeba52691cfa9f488c4037d31e91bf9f8e92a2dbc1cb",
"0x45a982c1b0e42932e295562e6107243060196ab86f5685bb3d5ede79011bc33d",
"0xe27a127c318b0058787ea36393c30115f0ee4461208f9f0b27e45c9e5d958e0c",
"0xc90a3250406e7b059ec8beea6969373fb7d29734dc71b96e97e3e63087e06991",
"0x66c8971885eeb28d6f106362c0b52919ddbab9ce334ace2604c959e9d97a1896",
"0x43dc7bb5a3eab8d3159cab2a8d07778dd6be52395605484c10663550507fa040",
"0x4a27305fa95e914b2b105bb1d49ea665ff515fc063dba2a0870e95c44a4f6439",
"0x1318377904fdd1706e5c8dd296f095ccfa6d6bfb918341807a51bb32a12322fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
