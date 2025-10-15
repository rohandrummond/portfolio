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
    <div className="flex flex-col px-5 md:px-7 xl:px-10 gap-4">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row-reverse justify-between mb-4">
          <h3 className="body text-muted-foreground">{duration}</h3>
          <h3 className="body text-muted-foreground flex flex-row items-center gap-1">
            {position}
          </h3>
        </div>
        <h3 className="body-lg mb-2">{company}</h3>
      </div>
      <ul className="flex flex-col gap-1 list-[square] list-inside pl-1">
        {bullets.map((value, index) => (
          <li key={index} className="body">
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
