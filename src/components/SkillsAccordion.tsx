import { AccordionContent, AccordionTrigger } from '@/components/ui/accordion'

export default function SkillsAccordion({
  section,
  content,
}: {
  section: string
  content: string
}) {
  return (
    <>
      <AccordionTrigger className="body-text">{section}</AccordionTrigger>
      <AccordionContent className="body-text">{content}</AccordionContent>
    </>
  )
}
