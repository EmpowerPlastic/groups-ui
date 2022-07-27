import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GroupsIcon } from './GroupsIcon'

export default {
  title: 'Icons/Groups Icon',
  component: GroupsIcon,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof GroupsIcon>

const Template: ComponentStory<typeof GroupsIcon> = () => <GroupsIcon />

export const Base = Template.bind({})
Base.args = {}
