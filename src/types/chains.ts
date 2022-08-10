// fixme: get additional properties like: coinDecimals, bip44, bech32Config, stakeCurrency, currencies, feeCurrencies, features
export type Chain = {
  readonly id: string
  readonly name: string
  readonly rpc: string
  readonly rest: string
  readonly coinDenom: string
  readonly coinMinimalDenom: string
}
