import { ReactNode } from 'react'

import type { AlertProps } from '@/atoms'
import { Alert, AlertTitle, Button, Center, GroupsIcon, Paper } from '@/atoms'

export const AlertTemplate = ({
  btnText,
  children,
  onBtnClick,
  severity = 'error',
  text,
  title = 'Whoops!',
}: {
  btnText: string
  children?: ReactNode
  onBtnClick: () => void
  severity?: AlertProps['severity']
  text: string
  title?: string
}) => {
  return (
    <Paper variant="outlined" sx={{ mt: 5, py: 2, px: 4 }}>
      <Center>
        <GroupsIcon sx={{ height: 50, width: 50 }} />
      </Center>
      <Alert
        sx={{ my: 2 }}
        severity={severity}
        action={
          <Button size="small" color="inherit" onClick={onBtnClick}>
            {btnText}
          </Button>
        }
      >
        <AlertTitle sx={{ fontWeight: 'bold' }}>{title}</AlertTitle>
        {text}
      </Alert>
      {children}
    </Paper>
  )
}
