import EducationCard from '@/components/EducationCard'
import ExperienceCard from '@/components/ExperienceCard'
import SkillsAccordion from '@/components/SkillsAccordion'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ArrowRightIcon, PlusIcon } from '@radix-ui/react-icons'

export default function About() {
  return (
    <main className="flex flex-col mt-30 gap-30">
      {/* Bio */}
      <section className="w-[55vw]">
        <div className="flex flex-col mb-12 gap-4">
          <h1 className="heading-xl">About me.</h1>
          <h2 className="sub-heading">
            A short sentence that summarises who I am
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{' '}
          </p>
        </div>
      </section>
      <Separator />
      {/* Education */}
      <section className="flex flex-col gap-12">
        <h2 className="heading-md heading-tight">Education</h2>
        <div className="flex flex-row justify-between gap-10">
          <EducationCard
            course="New Zealand Certificate in Applied Certified Development"
            provider="Dev Academy Aotearoa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
          />
          <EducationCard
            course="Introduction to Computer Science"
            provider="HarvardX CS50x"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
          />
          <EducationCard
            course="Certified Cloud Practitioner"
            provider="AWS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
          />
        </div>
      </section>
      <Separator />
      {/* Skills */}
      <section className="flex flex-row">
        <h2 className="heading-lg heading-tight lg:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </h2>
        <Accordion type="single" collapsible className="lg:w-1/3">
          <AccordionItem value="item-1">
            <SkillsAccordion section="Languages" content="Lorem ipsum" />
          </AccordionItem>
          <AccordionItem value="item-2">
            <SkillsAccordion section="Frameworks" content="Lorem ipsum" />
          </AccordionItem>
          <AccordionItem value="item-3">
            <SkillsAccordion section="Database" content="Lorem ipsum" />
          </AccordionItem>
          <AccordionItem value="item-4">
            <SkillsAccordion section="LLMs" content="Lorem ipsum" />
          </AccordionItem>
        </Accordion>
      </section>
      <Separator />
      {/* Experience */}
      <section>
        <h2 className="heading-md mb-12">Experience</h2>
        <ScrollArea className="h-[80vh] w-full bg-card border rounded-xl p-12">
          <div className="flex flex-col gap-12">
            <ExperienceCard
              position="Web Developer (Volunteer)"
              company="Manta Watch NZ"
              duration="May 2024 - Present"
              bulletOne="Lorem ipsum"
              bulletTwo="Lorem ipsum"
              bulletThree="Lorem ipsum"
            />
            <ExperienceCard
              position={
                <>
                  Learning <PlusIcon /> Self-Employment <PlusIcon /> Travel
                </>
              }
              company="Career Break"
              duration="July 2023 - August 2025"
              bulletOne="Lorem ipsum"
              bulletTwo="Lorem ipsum"
              bulletThree="Lorem ipsum"
            />
            <ExperienceCard
              position={
                <>
                  Media Executive <ArrowRightIcon /> Account Manager
                </>
              }
              company="PHD"
              duration="November 2021 - March 2023"
              bulletOne="Lorem ipsum"
              bulletTwo="Lorem ipsum"
              bulletThree="Lorem ipsum"
            />
            <ExperienceCard
              position={<>Technical Support Specialist</>}
              company="Vend by Lightspeed"
              duration="July 2020 - November 2021"
              bulletOne="Lorem ipsum"
              bulletTwo="Lorem ipsum"
              bulletThree="Lorem ipsum"
            />
            <ExperienceCard
              position="Media Insights Manager"
              company="Bauer Media"
              duration="October 2019 - April 2020"
              bulletOne="Lorem ipsum"
              bulletTwo="Lorem ipsum"
              bulletThree="Lorem ipsum"
            />
            <ExperienceCard
              position={
                <>
                  Client Service Executive <ArrowRightIcon /> Senior Client
                  Service Executive
                </>
              }
              company="Nielsen"
              duration="October 2017 - October 2019"
              bulletOne="Lorem ipsum"
              bulletTwo="Lorem ipsum"
              bulletThree="Lorem ipsum"
            />
          </div>
        </ScrollArea>
      </section>
      <section className="flex justify-center mb-30">
        <h2 className="heading-xl">Keen for a kōrero?</h2>
      </section>
    </main>
  )
}
