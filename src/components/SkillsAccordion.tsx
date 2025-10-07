import { AccordionContent, AccordionTrigger } from '@/components/ui/accordion'

export default function SkillsAccordion({
  section,
  content,
}: {
  section: string
  content: string[]
}) {
  return (
    <>
      <AccordionTrigger className="body">{section}</AccordionTrigger>
      <AccordionContent className="body">
        <ul className="flex flex-col gap-1">
          {content.map((value, index) => (
            <li key={index} className="list-disc list-inside">
              {value}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </>
  )
}
