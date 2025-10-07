import SkillsAccordion from '@/components/SkillsAccordion'
import { Accordion, AccordionItem } from '@/components/ui/accordion'

export default function AboutSkills() {
  return (
    <section className="flex flex-row justify-between items-center">
      <h2 className="heading-lg w-[550px]">
        Some of the tech that I’ve built things with
      </h2>
      <Accordion type="single" collapsible className="lg:w-1/3">
        <AccordionItem value="item-1">
          <SkillsAccordion
            section="Languages"
            content={['JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS']}
          />
        </AccordionItem>
        <AccordionItem value="item-2">
          <SkillsAccordion
            section="Frameworks"
            content={['React', 'Next.js', 'Angular', 'Express', '.NET']}
          />
        </AccordionItem>
        <AccordionItem value="item-3">
          <SkillsAccordion
            section="Database"
            content={['MongoDB', 'PostgreSQL']}
          />
        </AccordionItem>
        <AccordionItem value="item-4">
          <SkillsAccordion
            section="LLMs"
            content={['GPT', 'DALL·E 3', 'Google Gemini']}
          />
        </AccordionItem>
      </Accordion>
    </section>
  )
}
