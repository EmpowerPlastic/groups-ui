import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes } from 'Routes'
import { useSnapshot } from 'valtio'

import { useKeplr } from 'hooks/useKeplr'
import { Wallet } from 'store/Wallet'

import { EnableKeplr } from 'pages/EnableKeplr'
import { InstallKeplr } from 'pages/InstallKeplr'
import { Spinner } from '@/molecules/Spinner'
import { ErrorFallback } from '@/organisms/ErrorFallback'

const queryClient = new QueryClient()

function AppContent() {
  const snap = useSnapshot(Wallet)

  switch (snap.keplrStatus) {
    case 'loading':
    case 'initialized':
      return <Spinner />
    case 'ready':
      return <Routes />
    case 'uninstalled':
      return <InstallKeplr />
    // case 'initialized':
    case 'rejected':
      return <EnableKeplr />
    default:
      return <InstallKeplr />
  }
}

export default function App() {
  useKeplr()

  function handleReset() {
    window.location.reload()
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Theme> */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
        <AppContent />
      </ErrorBoundary>
      {/* </Theme> */}
    </QueryClientProvider>
  )
}
