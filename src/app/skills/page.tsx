import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Skills() {
  return (
    <main className="flex flex-col mt-[10vh] mb-[10vh] gap-20">
      <section className="flex flex-col lg:flex-row gap-8">
        <h1 className="heading-lg heading-tight lg:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </h1>
        <Accordion type="single" collapsible className="lg:w-1/3">
          <AccordionItem value="item-1">
            <AccordionTrigger className="body-text">Languages</AccordionTrigger>
            <AccordionContent className="body-text">
              Lorem ipsum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="body-text">
              Frameworks
            </AccordionTrigger>
            <AccordionContent className="body-text">
              Lorem ipsum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="body-text">Database</AccordionTrigger>
            <AccordionContent className="body-text">
              Lorem ipsum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="body-text">LLMs</AccordionTrigger>
            <AccordionContent className="body-text">
              Lorem ipsum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="flex flex-col w-full gap-15">
        <h3 className="heading-md heading-tight">
          I’m fortunate that I’ve had the opportunity to learn from a mix of
          free and paid courses/certifications, and they’ve been a huge part of
          my growth as a developer.
        </h3>
        <div className="flex flex-row justify-between gap-40">
          <div className="flex flex-col lg:w-!/3 gap-4">
            <h4 className="sub-heading">Dev Academy Aotearoa</h4>
            <p className="body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex flex-col lg:w-!/3 gap-4">
            <h4 className="sub-heading">HarvardX CS50x</h4>
            <p className="body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex flex-col lg:w-!/3 gap-4">
            <h4 className="sub-heading">AWS Cloud Practitioner</h4>
            <p className="body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
