import type { AppCurrency, ChainInfo } from '@keplr-wallet/types'

import { Bech32Address } from 'util/bech32'

const MPWR: AppCurrency = {
  coinDenom: 'mpwr',
  coinMinimalDenom: 'umpwr',
  coinDecimals: 6,
  coinGeckoId: 'mpwr',
  coinImageUrl:
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png',
}

/**
 *  @see https://github.com/cosmos/chain-registry/blob/master/regen/assetlist.json
 */
const currencies: AppCurrency[] = [MPWR]

export const empowerTestnet: ChainInfo = {
  rpc: 'https://empower-testnet-rpc.polkachu.com',
  rest: 'https://empower-testnet-api.polkachu.com/',
  chainId: 'circulus-1',
  chainName: 'EmpowerChain Testnet',
  stakeCurrency: MPWR,
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('empower'),
  currencies,
  feeCurrencies: currencies,
}
