import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <main className="flex-1 flex flex-col justify-center mt-30 gap-30">
      {/* Bio */}
      <section>
        <div className="flex flex-col">
          <h1 className="heading-lg">About me.</h1>
          <h2 className="sub-heading">
            A short sentence that summarises who I am
          </h2>
        </div>
        <div className="flex flex-col">
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
          <p className="body-text">
            Something about checking out what{' '}
            <Link href="skills" className="underline">
              skills
            </Link>{' '}
            I have learnt or what{' '}
            <Link href="work" className="underline">
              projects
            </Link>{' '}
            I have built.
          </p>
        </div>
      </section>
      <Separator />
      {/* Education */}
      <section className="flex flex-col">
        <h2 className="heading-md heading-tight">Education</h2>
        <div className="flex flex-row justify-between">
          <Card className="flex flex-col lg:w-1/3 gap-4">
            <CardHeader>
              <CardDescription>
                New Zealand Certificate in Applied Certified Development
              </CardDescription>
              <CardTitle className="sub-heading">
                Dev Academy Aotearoa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col lg:w-1/3 gap-4">
            <CardHeader>
              <CardDescription>
                Introduction to Computer Science
              </CardDescription>
              <CardTitle className="sub-heading">HarvardX CS50x</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col lg:w-1/3 gap-4">
            <CardHeader>
              <CardDescription>Certified Cloud Practitioner</CardDescription>
              <CardTitle className="sub-heading">
                Amazon Web Services (AWS)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </CardContent>
          </Card>
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
      <Separator />
      {/* Experience */}
      <section>
        <h2 className="heading-md">Experience</h2>
        <ScrollArea className="h-[500px] w-full bg-card border rounded-xl p-[2rem]">
          <div className="flex flex-col">
            <Card className="flex flex-col bg-background gap-4">
              <CardHeader>
                <CardDescription>Web Developer (Volunteer)</CardDescription>
                <CardTitle className="sub-heading">Manta Watch NZ</CardTitle>
                <CardAction>May 2024 - Present</CardAction>
              </CardHeader>
              <CardContent>
                <ul className="pl-4">
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-background gap-4">
              <CardHeader>
                <CardDescription>Web Developer (Volunteer)</CardDescription>
                <CardTitle className="sub-heading">Manta Watch NZ</CardTitle>
                <CardAction>May 2024 - Present</CardAction>
              </CardHeader>
              <CardContent>
                <ul className="pl-4">
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-background gap-4">
              <CardHeader>
                <CardDescription>Web Developer (Volunteer)</CardDescription>
                <CardTitle className="sub-heading">Manta Watch NZ</CardTitle>
                <CardAction>May 2024 - Present</CardAction>
              </CardHeader>
              <CardContent>
                <ul className="pl-4">
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-background gap-4">
              <CardHeader>
                <CardDescription>Web Developer (Volunteer)</CardDescription>
                <CardTitle className="sub-heading">Manta Watch NZ</CardTitle>
                <CardAction>May 2024 - Present</CardAction>
              </CardHeader>
              <CardContent>
                <ul className="pl-4">
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                  <li className="list-disc">Lorem ipsum</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </section>
      <section className="flex justify-center">
        <h2 className="heading-xl">Something to finish?</h2>
      </section>
    </main>
  )
}
