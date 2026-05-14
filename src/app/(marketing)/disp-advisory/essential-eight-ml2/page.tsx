import { Metadata } from 'next'
import { EssentialEightML2Content } from './ML2Content'

export const metadata: Metadata = {
  title: 'Essential Eight ML2 & ISM Assurance | Websoul Digital',
  description: 'Essential Eight Maturity Level 2 readiness, ISM control mapping, PSPF alignment and DISP cyber evidence support for Australian Government and Defence industry suppliers.',
}

export default function EssentialEightML2Page() {
  return <EssentialEightML2Content />
}
