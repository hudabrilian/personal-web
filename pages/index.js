import Link from 'next/link'
import { motion } from 'framer-motion'

function Home() {
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
    <motion.div exit={{ opacity: 0 }} className="flex flex-col">
      <div className="md:py-40 py-20 w-screen h-full transform flex justify-center md:justify-between md:flex-row flex-col-reverse items-center md:text-left text-center">
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

      {/* <div className="flex flex-col items-center justify-center transform -translate-y-32 h-screen">
        <motion.h1 className="font-bold text-4xl mt-4 mb-8" initial={{ scale: .5 }} animate={{ scale: 1 }} transition={{ duration: .5 }}>My timeline</motion.h1>
        <motion.div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-50" variants={staggered}>
          <div className="flex flex-row-reverse md:contents">
            <motion.div className="bg-gray-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md" variants={fadeInUp}>
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
            </div>
            <div className="bg-gray-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae, facilis.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <motion.div className="bg-gray-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md" variants={fadeInUp}>
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
            </div>
          </div>

        </motion.div>
      </div> */}
    </motion.div>
  )
}

export default Home