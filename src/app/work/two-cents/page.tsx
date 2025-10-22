import ComingSoon from '@/components/ComingSoon'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Two Cents | Rohan Drummond',
  description: 'Two Cents, current being built by Rohan Drummond.',
}

export default function TwoCents() {
  return <ComingSoon githubUrl="https://github.com/rohandrummond/twocents" />
}
