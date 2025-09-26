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
}: {
  course: string
  provider: string
  description: string
}) {
  return (
    <Card className="flex flex-col lg:w-1/3 gap-4">
      <CardHeader>
        <CardDescription>{course}</CardDescription>
        <CardTitle className="sub-heading">{provider}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )
}
