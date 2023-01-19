import { ReactNode } from 'react'

import { useColorModeValue } from 'hooks/chakra'

import { Card } from '@/atoms/card'
import { CardBody, CardHeader, Text } from '@/atoms/chakra-components'

export const FormCard = ({
  title,
  children,
}: {
  children: ReactNode
  title?: string
}) => {
  const titleBg = useColorModeValue('gray.200', 'gray.700')
  const bg = useColorModeValue('white', 'gray.800')
  return (
    <Card variant="outline" borderRadius="lg" bg={bg}>
      {title && (
        <CardHeader bg={titleBg} py={3}>
          <Text fontWeight="bold">{title}</Text>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  )
}
