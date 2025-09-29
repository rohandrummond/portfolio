import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function EducationCard({
  course,
  provider,
  description,
  year,
}: {
  course: string
  provider: string
  description: string
  year: string
}) {
  return (
    <Card className="flex flex-col lg:w-1/3 gap-4">
      <CardHeader>
        <div className="flex flex-col mb-2">
          <CardDescription>{year}</CardDescription>
          <CardDescription>{course}</CardDescription>
        </div>
        <CardTitle className="sub-heading">{provider}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )
}
