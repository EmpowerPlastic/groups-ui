import { Meta, StoryFn } from '@storybook/react'
import { Provider } from 'jotai'

import { type FormFooterStateType, FormFooter, FormFooterState } from '../form-footer'

export default {
  title: 'Molecules/FormFooter',
  component: FormFooter,
  argTypes: {
    onBtnClick: {
      control: false,
    },
  },
} as Meta<typeof FormFooter>

const Template: StoryFn<typeof FormFooter> = () => <FormFooter />

const voidFunc = () => void null

const baseState: FormFooterStateType = {
  onSubmit: voidFunc,
}

export const Component = Template.bind({})
Component.decorators = [
  (Story) => (
    <Provider initialValues={[[FormFooterState, baseState]]}>{<Story />}</Provider>
  ),
]

export const WithBackBtn = Template.bind({})
WithBackBtn.decorators = [
  (Story) => (
    <Provider initialValues={[[FormFooterState, { ...baseState, onPrev: voidFunc }]]}>
      {<Story />}
    </Provider>
  ),
]

export const WithBothBtns = Template.bind({})
WithBothBtns.decorators = [
  (Story) => (
    <Provider
      initialValues={[
        [FormFooterState, { ...baseState, onPrev: voidFunc, onNext: voidFunc }],
      ]}
    >
      {<Story />}
    </Provider>
  ),
]
