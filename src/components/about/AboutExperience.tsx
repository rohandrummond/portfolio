import ExperienceCard from '@/components/ExperienceCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ArrowRightIcon, ArrowDownIcon, PlusIcon } from '@radix-ui/react-icons'

export default function AboutExperience() {
  return (
    <section>
      <div className="flex flex-row justify-between items-end mb-8 md:mb-12 xl:mb-16">
        <h2 className="heading-md">Experience</h2>
        <div className="flex f-row items-center gap-1">
          <p className="body">Scroll me</p>
          <ArrowDownIcon></ArrowDownIcon>
        </div>
      </div>
      <ScrollArea className="h-[80vh] md:h-[70vh] w-full bg-card border rounded-xl">
        <div className="flex flex-col gap-8 md:gap-10 xl:gap-12 py-6 md:py-8 xl:py-10">
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
                Client Service Executive <ArrowRightIcon /> Senior CSE
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
  )
}
