require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth shift promote inflict arch orange silent'; 
let testAccounts = [
"0xb1ff78c29a616f858f9ba7406be064c2ef3faac5c9579e76c9094ed9f927bf5f",
"0xab4b9b8298dc43e668fa578e6867f04322ab005473bfacb47c60215144b5df38",
"0xf43e13ee802b60fbc6c3108a4020ee71bae16d70b902093201fd352da78ad4a6",
"0x0ca2cbe476bf69844638f1d987eb155afbb92726927af32e650344e69bf88218",
"0xe2048c8707188a89cf481fb1b1c95042038275e077297264280411dd375c6e75",
"0x151c2da7f3fb89a37a543273f49a736ef419e9911c41d4a9bf8c4ab732d9aff2",
"0x9f26f1a04758c8ffe59113843029aa4755a0fdfb6e39a0842233d101aa05e173",
"0x97fb4d36ed6f01eafff0f719eda657385b1195022ee07aa69cadb5c08a132df0",
"0x6b925d06d3fe087b01dd172c130c572acbebaa307baae052e501318110dc9f95",
"0x7984b4a58e6d668a5d9592770fe31b60c668888b65b810b10797d067aaad7058"
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
            version: '^0.8.0'
        }
    }
};

