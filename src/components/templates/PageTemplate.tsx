import { ReactNode } from 'react'

import { Container } from '@/atoms'

export const PageTemplate = ({ children }: { children: ReactNode }) => {
  return <Container sx={{ pt: 4, alignItems: 'center' }}>{children}</Container>
}
