'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { motion } from 'motion/react'

export default function EducationCard({
  course,
  provider,
  description,
  year,
  link,
}: {
  course: string
  provider: string
  description: string
  year: string
  link: string
}) {
  return (
    <motion.div
      className="lg:w-1/3"
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.1 }}
    >
      <Card className="flex flex-col gap-4 hover:bg-background">
        <CardHeader>
          <div className="flex flex-col mb-2">
            <CardDescription className="body">{year}</CardDescription>
            <CardDescription className="body">{course}</CardDescription>
          </div>
          <CardTitle className="body-lg">{provider}</CardTitle>
        </CardHeader>
        <CardContent className="body">{description}</CardContent>
        <a href={link} target="_blank">
          <CardFooter className="body">
            Learn more <ExternalLinkIcon className="ml-1" />
          </CardFooter>
        </a>
      </Card>
    </motion.div>
  )
}
