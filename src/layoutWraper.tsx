'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const LayoutWraper = ({children}: {children: React.ReactNode}) => {
  return (
    <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
    >
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
        >
            {children}
        </motion.main>
    </AnimatePresence>
)
}

export default LayoutWraper