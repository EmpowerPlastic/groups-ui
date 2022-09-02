import {
  type NumberInputProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField as ChakraNumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'

import { forwardRef } from './Chakra'

export type { NumberInputProps }

export const NumberInput = forwardRef((props: NumberInputProps, ref) => {
  return (
    <ChakraNumberInput {...props} ref={ref}>
      <ChakraNumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  )
})
