import EducationCard from '@/components/pages/about/EducationCard'

export default function AboutEducation() {
  return (
    <section className="flex flex-col">
      <h2 className="heading-md heading-tight mb-8 md:mb-12 xl:mb-16">
        Education
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 xl:gap-10">
        <EducationCard
          course="Applied Software Development"
          provider="Dev Academy Aotearoa"
          description="An intensive, 17-week bootcamp focused on learning the front and back-end skills required for building full-stack web applications."
          year="2025 (Present)"
          link="https://devacademy.co.nz/"
        />
        <EducationCard
          course="Certified Cloud Practitioner"
          provider="Amazon Web Services"
          description="A practical understanding of cloud computing concepts, best practices and key AWS services e.g. EC2, Lambda, S3, RDS etc."
          year="2024"
          link="https://aws.amazon.com/certification/certified-cloud-practitioner/"
        />
        <EducationCard
          course="Introduction to Computer Science"
          provider="HarvardX CS50x"
          description="A comprehensive introduction to computer science, including C, Python, data structures, algorithms, and memory management."
          year="2023"
          link="https://pll.harvard.edu/course/cs50-introduction-computer-science"
        />
      </div>
    </section>
  )
}
