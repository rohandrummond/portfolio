import ContactHead from '@/components/contact/ContactHead'
import ContactLinks from '@/components/contact/ContactLinks'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Rohan Drummond',
  description: 'Contact Rohan Drummond, New-Zealand based software developer.',
}

export default function Contact() {
  return (
    <main className="container mx-auto flex-1 flex flex-col justify-center gap-[2rem] px-6 md:max-w-[60%] xl:max-w-[40%]">
      <ContactHead />
      <Separator />
      <ContactLinks />
    </main>
  )
}
