import { useController, useFormContext } from 'react-hook-form'

import { Textarea } from '@/atoms/chakra-components'

import { type FieldProps, FieldControl } from './field-control'

/** `Textarea` with controls for react-hook-form */
export const TextareaField = (fieldProps: FieldProps) => {
  const { name, required } = fieldProps
  const { control, getValues } = useFormContext()
  const {
    fieldState: { error },
    field,
  } = useController({
    name,
    control,
    defaultValue: getValues(name),
    rules: { required: required },
  })
  return (
    <FieldControl {...fieldProps} error={error}>
      <Textarea {...field} id={name} />
    </FieldControl>
  )
}
