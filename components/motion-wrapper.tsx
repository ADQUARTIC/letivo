"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * A client component that wraps its children in a motion.div,
 * triggering a fade-in-up animation when it scrolls into view.
 */
export function MotionWrapper({ children, className, delay = 0 }: Props) {
  const ref = useRef(null)
  // The `once: true` option ensures the animation only runs once.
  // `amount: 0.2` triggers the animation when 20% of the element is visible.
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
