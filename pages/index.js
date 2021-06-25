import Link from 'next/link'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="md:py-40 py-20 w-screen flex justify-center md:justify-between md:flex-row flex-col-reverse items-center md:text-left text-center">
        <div className="w-1/2 md:ml-32 md:mr-8 pt-10">
          <motion.span className="text-gray-400 text-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>Hi there!</motion.span>
          <motion.h1 className="font-semibold py-2 text-5xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }}>I'm Huda Brilian</motion.h1>
          <motion.h3 className="text-xl text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: 1 }}>Student</motion.h3>
          <motion.div className="flex md:items-start md:justify-start items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: 1.5 }}>
            <Link href="/portfolio">
              <div className="bg-gray-200 mt-10 p-4 w-32 text-center hover:bg-gray-300 rounded-full font-light transition-all">
                My works
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="flex w-1/2 md:mr-32 justify-center items-center">
          <motion.img src="img/psy.gif" className="rounded-xl min-h-64" initial={{ scale: .5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}></motion.img>
        </div>
      </div>
    </motion.div>
  )
}

export default Home