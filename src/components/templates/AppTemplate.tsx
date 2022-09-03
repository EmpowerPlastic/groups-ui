import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, Flex, useColorModeValue } from '@/atoms'
import { Loading } from '@/molecules'
import { PopFade } from '@/molecules/animations'
import { Navbar } from '@/organisms/Navbar'

export const AppTemplate = () => {
  return (
    <PopFade>
      <Flex flexDir="column" maxH="100vh" height="full" overflowY="auto">
        <Navbar />
        <Box as="main" h="full" bg={useColorModeValue('gray.50', 'gray.800')}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Box>
      </Flex>
    </PopFade>
  )
}
