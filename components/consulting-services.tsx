import { Database, Users2, Target, TrendingUp } from "lucide-react"
import type { LucideProps } from "lucide-react"

const services = [
  {
    icon: (props: LucideProps) => <Database {...props} />,
    title: "Management Consulting",
    description: "Saylo our Management Consulting services designed businesses the unlock potential addressing.",
  },
  {
    icon: (props: LucideProps) => <Users2 {...props} />,
    title: "Human Resources Consulting",
    description: "Focuses on optimizing work management and they employee engagement consultants provide.",
  },
  {
    icon: (props: LucideProps) => <Target {...props} />,
    title: "Marketing Consulting",
    description: "We partner with businesses to develop data-driven strategies that enhance customer engagement.",
  },
  {
    icon: (props: LucideProps) => <TrendingUp {...props} />,
    title: "Financial Consulting",
    description:
      "Provides expertise financial planning, budgeting, risk management and investment strategies financial.",
  },
]

export function ConsultingServices() {
  return null
}
