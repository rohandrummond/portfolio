'use client'

import Image from 'next/image'
import EducationCard from '@/components/EducationCard'
import ExperienceCard from '@/components/ExperienceCard'
import SkillsAccordion from '@/components/SkillsAccordion'
import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import PageEndOptions from '@/components/PageEndOptions'
import image from '@/../public/images/rohan-profile.png'

import { ArrowRightIcon, ArrowDownIcon, PlusIcon } from '@radix-ui/react-icons'

export default function About() {
  return (
    <main className="container flex flex-col mx-auto">
      <section className="flex flex-col justify-between h-[100vh] pt-[30vh] pb-25">
        <h1 className="relative flex flex-col heading-lg">
          <span className="text-right">I’m a software developer</span>
          <span className="z-2">based in Aotearoa, New Zealand.</span>
          <Image
            src={image}
            alt=""
            className="absolute right-0 top-18 w-[220px] h-[220px] object-cover rounded-xs z-1"
          />
        </h1>
        <div className="flex justify-between items-end">
          <p className="w-1/3 body-text">
            I found my way into software later in life, after realising my old
            career wasn’t where I wanted to be. That shift gave me a fresh
            perspective and a bit of grit, and I’ve been hooked on building and
            problem-solving ever since. Outside of coding, I’m usually at the
            gym, fishing, brewing a cheeky beer, or hanging out with my partner,
            mates, and whānau.
          </p>
          <div className="flex flex-row items-center gap-1">
            <p
              className="footer-link hover:underline"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth',
                })
              }}
            >
              See more
            </p>
            <ArrowDownIcon />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-30">
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
              link="https://devacademy.co.nz/"
            />
            <EducationCard
              course="Certified Cloud Practitioner"
              provider="Amazon Web Services"
              description="A practical understanding of cloud computing concepts, best practices and key AWS services e.g. EC2, Lambda, S3, RDS etc."
              year="2024"
              link="https://aws.amazon.com/certification/certified-cloud-practitioner/"
            />
            <EducationCard
              course="Introduction to Computer Science"
              provider="HarvardX CS50x"
              description="A comprehensive introduction to computer science, including C, Python, data structures, algorithms, and memory management."
              year="2023"
              link="https://pll.harvard.edu/course/cs50-introduction-computer-science"
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
          <ScrollArea className="h-[60vh] w-full bg-card border rounded-lg ">
            <div className="flex flex-col py-10 px-6 gap-8">
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
      </div>
      <PageEndOptions buttonText="Check out my projects" />
    </main>
  )
}
