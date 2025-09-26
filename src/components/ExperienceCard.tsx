import { ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardAction,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ExperienceCard({
  position,
  company,
  duration,
  bulletOne,
  bulletTwo,
  bulletThree,
}: {
  position: ReactNode
  company: string
  duration: string
  bulletOne: string
  bulletTwo: string
  bulletThree: string
}) {
  return (
    <Card className="flex flex-col bg-background gap-4">
      <CardHeader>
        <CardDescription className="flex flex-row items-center gap-1">
          {position}
        </CardDescription>
        <CardTitle className="sub-heading">{company}</CardTitle>
        <CardAction>{duration}</CardAction>
      </CardHeader>
      <CardContent>
        <ul className="pl-4">
          <li className="list-disc">{bulletOne}</li>
          <li className="list-disc">{bulletTwo}</li>
          <li className="list-disc">{bulletThree}</li>
        </ul>
      </CardContent>
    </Card>
  )
}
