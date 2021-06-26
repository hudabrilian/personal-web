import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.div className="mb-5" exit={{ opacity: 0 }}>
      <motion.h1 className="text-2xl font-bold pt-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>Contact me</motion.h1>
      <motion.h2 className="text-center mt-2 text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .3 }}>Get in touch with me!</motion.h2>
      <motion.div className="flex items-center justify-center py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }}>
        <form className="py-10 px-10 rounded-md border-2 flex flex-col items-center justify-center">
          <div className="flex w-full items-center mt-3">
            <div className="flex-1 mx-2">
              <span className="pr-5">Name</span>
            </div>
            <div className="mx-2 flex items-left">
              <input className="rounded px-5 py-2 border-2" type="text" placeholder="Your name" />
            </div>
          </div>
          <div className="flex w-full items-center mt-3">
            <div className="flex-1 mx-2">
              <span className="pr-5">Email</span>
            </div>
            <div className="mx-2">
              <input className="rounded px-5 py-2 border-2" type="email" placeholder="Your name" />
            </div>
          </div>
          <div className="flex w-full items-center mt-3">
            <div className="flex-1 mx-2">
              <span className="pr-5">Message</span>
            </div>
            <div className="mx-2">
              <textarea className="rounded px-5 py-2 border-2" placeholder="Your name" />
            </div>
          </div>
          <div className="bg-gray-200 mt-10 p-2 w-32 text-center hover:bg-gray-300 rounded-full font-light">
            Send
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Contact