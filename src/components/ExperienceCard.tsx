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
  bullets,
}: {
  position: ReactNode
  company: string
  duration: string
  bullets: string[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <CardHeader>
        <CardDescription className="body flex flex-row items-center gap-1">
          {position}
        </CardDescription>
        <CardTitle className="body-lg">{company}</CardTitle>
        <CardAction className="body">{duration}</CardAction>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-1">
          {bullets.map((value, index) => (
            <li key={index} className="body list-disc list-inside">
              {value}
            </li>
          ))}
        </ul>
      </CardContent>
    </div>
  )
}
