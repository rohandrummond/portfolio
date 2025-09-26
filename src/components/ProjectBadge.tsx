import { Badge } from '@/components/ui/badge'

export default function ProjectBadge({ tech }: { tech: string }) {
  return (
    <Badge variant="outline" className="bg-card sub-text py-1 px-4 rounded-lg">
      {tech}
    </Badge>
  )
}
