import { Metadata } from 'next'
import ComingSoon from '@/components/common/ComingSoon'

export const metadata: Metadata = {
  title: 'Two Cents | Rohan Drummond',
  description: 'Two Cents, current being built by Rohan Drummond.',
}

export default function TwoCents() {
  return <ComingSoon githubUrl="https://github.com/rohandrummond/twocents" />
}
