import { motion } from "framer-motion"
import Link from 'next/link'
import { projects } from '../constants/constants'

function Portfolio() {
    const easing = [0.6, -0.05, 0.01, 0.99]
    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easing
            }
        }
    }

    const staggered = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div className="mb-5" exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.h1 className="text-2xl font-bold py-5 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>My Portfolio</motion.h1>
            <motion.div className="flex flex-wrap px-10 items-center justify-center" variants={staggered}>
                {/* <motion.div className="w-64 h-64 bg-red-200 hover:bg-red-300 rounded-2xl mx-3 my-3" variants={fadeInUp}></motion.div> */}
                {projects.map(project => (
                    <motion.div className="flex flex-col items-center border-2 rounded-xl p-5 m-3" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                        <motion.div variants={fadeInUp}>
                            <motion.img src={`/img/${project.image}`} className="rounded-lg max-h-64 my-4" alt={project.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} />
                        </motion.div>
                        <motion.div variants={fadeInUp} transition={{  delay: .5  }} className="my-2 px-6">
                            <motion.h1 className="text-xl font-semibold text-center" variants={fadeInUp} transition={{  delay: 1  }}>{project.title}</motion.h1>
                            <motion.p variants={fadeInUp} transition={{  delay: .5  }} className="text-center mt-2">{project.description}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Portfolio