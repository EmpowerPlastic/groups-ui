import { useSnapshot } from 'valtio'

import { Chain, setActiveChain } from 'store'
import { allChainsArray } from 'api/chains'

import { SelectDropdown } from '@/molecules'

const CHAIN_ITEMS = allChainsArray.map(({ chainId, chainName }) => ({
  value: chainId,
  label: chainName,
}))

export const ChainSelect = () => {
  const { active } = useSnapshot(Chain)

  return (
    <SelectDropdown
      label={active.chainId ? '' : 'Select a Chain'}
      selected={CHAIN_ITEMS.find((item) => item.value === active.chainId)}
      onChange={(newChain) => {
        if (newChain?.value) setActiveChain(newChain.value)
      }}
      items={CHAIN_ITEMS}
    />
  )
}
