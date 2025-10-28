import SkillsAccordion from '@/components/pages/about/SkillsAccordion'
import { Accordion, AccordionItem } from '@/components/ui/accordion'

export default function AboutSkills() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-center md:gap-20">
      <h2 className="heading-lg mb-8 md:w-full">
        Tech and tools I have worked with so far
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="pl-1">
          <SkillsAccordion
            section="Languages"
            content={['JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS']}
          />
        </AccordionItem>
        <AccordionItem value="item-2" className="pl-1">
          <SkillsAccordion
            section="Frameworks"
            content={['React', 'Next.js', 'Angular', 'Express', '.NET']}
          />
        </AccordionItem>
        <AccordionItem value="item-3" className="pl-1">
          <SkillsAccordion
            section="Database"
            content={['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']}
          />
        </AccordionItem>
        <AccordionItem value="item-4" className="pl-1">
          <SkillsAccordion
            section="LLMs"
            content={['GPT', 'DALL·E 3', 'Google Gemini']}
          />
        </AccordionItem>
      </Accordion>
    </section>
  )
}
