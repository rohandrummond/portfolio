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
            <CardDescription className="sub-text">{year}</CardDescription>
            <CardDescription className="sub-text">{course}</CardDescription>
          </div>
          <CardTitle className="sub-heading">{provider}</CardTitle>
        </CardHeader>
        <CardContent className="body-text">{description}</CardContent>
        <a href={link} target="_blank">
          <CardFooter>
            Learn more <ExternalLinkIcon className="ml-1" />
          </CardFooter>
        </a>
      </Card>
    </motion.div>
  )
}
