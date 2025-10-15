import { Badge } from '@/components/ui/badge'

export default function ProjectBadge({ tech }: { tech: string }) {
  return (
    <Badge
      variant="outline"
      className="bg-background body-sm py-2 px-4 xl:px-3 rounded-md"
    >
      {tech}
    </Badge>
  )
}
