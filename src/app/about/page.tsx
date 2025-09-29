'use client'

import Link from 'next/link'
import EducationCard from '@/components/EducationCard'
import ExperienceCard from '@/components/ExperienceCard'
import SkillsAccordion from '@/components/SkillsAccordion'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PlusIcon,
} from '@radix-ui/react-icons'

export default function About() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <main className="flex flex-col mt-30 mb-20 gap-20">
      {/* Bio */}
      <section className="w-[55vw]">
        <div className="flex flex-col mb-12 gap-4">
          <h1 className="heading-xl">I’m Rohan</h1>
          <h2 className="sub-heading">
            A software developer from Tāmaki Makaurau, Auckland
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="body-text">
            I’m a developer passionate about tackling complex back-end
            challenges just as much as crafting sleek, user-friendly interfaces.
          </p>
          <p className="body-text">
            I’m currently at Dev Academy Aotearoa, completing their full-stack
            web development bootcamp, set to graduate in December 2025. Before
            that I focused on building projects and strengthening my foundations
            in computer science fundamentals through HarvardX and cloud
            computing with AWS.
          </p>
          <p className="body-text">
            Though some might not see it that way, my pathway into tech is my
            superpower. It’s the chip on my shoulder that fuels my determination
            to overcome setbacks and the life experience that gives me a fresh
            perspective to bring to the table.
          </p>
          <p className="body-text">
            In my spare time you’ll usually find me at the gym, fishing, brewing
            beer, or spending time with my partner and our families and friends.
          </p>
        </div>
      </section>
      <Separator />
      {/* Education */}
      <section className="flex flex-col gap-12">
        <h2 className="heading-md heading-tight">Education</h2>
        <div className="flex flex-row justify-between gap-10">
          <EducationCard
            course="Certificate in Applied Certified Development"
            provider="Dev Academy Aotearoa"
            description="An intensive, 17-week bootcamp focused on learning the front and back-end skills required for building full-stack web applications."
            year="2025 (Present)"
          />
          <EducationCard
            course="Certified Cloud Practitioner"
            provider="Amazon Web Services"
            description="A practical understanding of cloud computing concepts, best practices and key AWS services e.g. EC2, Lambda, S3, RDS etc."
            year="2024"
          />
          <EducationCard
            course="Introduction to Computer Science"
            provider="HarvardX CS50x"
            description="A comprehensive introduction to computer science, including C, Python, data structures, algorithms, and memory management."
            year="2023"
          />
        </div>
      </section>
      <Separator />
      {/* Skills */}
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
      <Separator />
      {/* Experience */}
      <section>
        <div className="flex flex-row justify-between items-end mb-10">
          <h2 className="heading-md">Experience</h2>
          <div className="flex f-row items-center">
            <p className="sub-text">Scroll me</p>
            <ArrowDownIcon></ArrowDownIcon>
          </div>
        </div>
        <ScrollArea className="h-[50vh] w-full bg-card border rounded-lg ">
          <div className="flex flex-col py-6 gap-8">
            <ExperienceCard
              position="Web Developer (Volunteer)"
              company="Manta Watch NZ"
              duration="May 2024 - Present"
              bullets={[
                'Extended site functionality and built/modified custom REST API endpoints with PHP',
                'Refactored and added JavaScript functionality to support user interactions',
                'Delivered tailored data through custom MySQL database queries',
                'Enhanced layouts, styling and responsive design using HTML and CSS',
                'Migrated website and database to a new hosting provider, improving security and reliability',
              ]}
            />
            <Separator />
            <ExperienceCard
              position={
                <>
                  Learning <PlusIcon /> Self-Employment <PlusIcon /> Travel
                </>
              }
              company="Career Break"
              duration="July 2023 - August 2025"
              bullets={[
                'Travelled through 19 countries in Asia and Europe',
                'Co-founded a small web and mobile development business, delivering projects in Webflow, WordPress and Flutter',
                'Volunteered for Manta Watch NZ, supporting a cause and charity I’m passionate about',
              ]}
            />

            <Separator />
            <ExperienceCard
              position={
                <>
                  Media Executive <ArrowRightIcon /> Account Manager
                </>
              }
              company="PHD"
              duration="November 2021 - March 2023"
              bullets={[
                'Provided media planning and implementation support on Foodstuffs account',
                'Promoted to Account Manager, acting as primary contact for New World Regional',
                'Delivered performance and insights reporting to Foodstuffs and agency leadership teams ',
                'Presented data-driven media recommendations to key clients and stakeholders',
                'Helped onboard and coach new team members in technical and client processes',
              ]}
            />

            <Separator />
            <ExperienceCard
              position={<>Technical Support Specialist</>}
              company="Vend by Lightspeed"
              duration="July 2020 - November 2021"
              bullets={[
                'Responded to 10+ technical queries daily, analysing and solving complex problems',
                'Collaborated with Engineering and Product to resolve bugs and streamline workflows',
                'Served as Auckland Support Lead for Marketing & Ecommerce integrations',
                'Delivered internal presentations and training sessions for junior support staff',
              ]}
            />

            <Separator />
            <ExperienceCard
              position="Media Insights Manager"
              company="Bauer Media"
              duration="October 2019 - April 2020"
              bullets={[
                'Processed and presented audience data for 17 brands to Commercial and Executive teams ',
                'Delivered insights to Direct and Agency sales teams to support revenue and brand growth',
                'Analysed data and created visualisations for audience and market segmentation profiles',
                'Company permanently closed due to COVID-19 pandemic',
              ]}
            />

            <Separator />
            <ExperienceCard
              position={
                <>
                  Client Service Executive <ArrowRightIcon /> Senior Client
                  Service Executive
                </>
              }
              company="Nielsen"
              duration="October 2017 - October 2019"
              bullets={[
                'Delivered daily client support across 6 market research SaaS products',
                'Promoted to Senior, acting as lead helpdesk contact, training juniors, supporting key clients',
                'Collaborated with Operations to resolve technical issues and enhance UX',
                'Tracked Client Service KPIs with regular reporting and presentations to internal stakeholders',
                'Led client training on Digital Engagement and Audience Profiling products',
              ]}
            />
          </div>
        </ScrollArea>
      </section>
      <section className="flex flex-row justify-between items-end">
        <h3 className="heading-lg">Thanks for stopping by!</h3>
        <div className="flex flex-row gap-4">
          <Button className="border" asChild>
            <Link href="/work" className="sub-text">
              My projects
            </Link>
          </Button>
          <Button
            className="border gap-1 sub-text"
            variant="outline"
            onClick={scrollToTop}
          >
            Back to top<ArrowUpIcon></ArrowUpIcon>
          </Button>
        </div>
      </section>
    </main>
  )
}
