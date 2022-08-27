import { ReactNode } from 'react'

import { Flex, Text } from '@/atoms'
import { PageStepper /* , StickyFooter */ } from '@/molecules'

import { PageTemplate } from './PageTemplate'

export const StepperTemplate = (p: {
  children: ReactNode
  activeStep: number
  steps: string[]
  // nextBtn?: {
  //   text: string
  //   onClick: () => void
  // }
}) => {
  return (
    <Flex col>
      <PageStepper activeStep={p.activeStep} steps={p.steps} />
      <PageTemplate>
        <Text variant="h2" align="center" mb={4}>
          {p.steps[p.activeStep]}
        </Text>
        {p.children}
      </PageTemplate>
      {/* {!!p.nextBtn && (
        <StickyFooter
          sx={{ mt: 8 }}
          btnText={p.nextBtn.text}
          onBtnClick={p.nextBtn.onClick}
        />
      )} */}
    </Flex>
  )
}
