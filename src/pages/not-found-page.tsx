import { ROUTE_PATH } from 'routes'

import { Button, Heading, RouteLink, Text, VStack } from '@/atoms'

export default function NotFound() {
  return (
    <VStack spacing={4} mt={12}>
      <Heading size="2xl">Whoops!</Heading>
      <Text>{'Page not found :('}</Text>
      <Button as={RouteLink} to={ROUTE_PATH.home}>
        Home Page
      </Button>
    </VStack>
  )
}
