import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.div className="mb-5" exit={{ opacity: 0 }}>
      <motion.h1 className="text-2xl font-bold py-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>Contact Me</motion.h1>
      <motion.div className="flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }}>
        <form className="py-10 border-2 rounded px-10 flex flex-col items-center justify-center">
          <div className="m-4 flex items-center justify-between">
            <div>
              <span className="pr-10">Name</span>
            </div>
            <div>
              <input className="rounded px-5 py-2 border-2" placeholder="Your name"></input>
            </div>
          </div>
          <div className="m-4 flex items-center justify-between">
            <div>
              <span className="pr-10">Email</span>
            </div>
            <div>
              <input className="rounded px-5 py-2 border-2" placeholder="Your email"></input>
            </div>
          </div>
          <div className="m-4 flex items-center justify-between">
            <div>
              <span className="pr-10">Message</span>
            </div>
            <div>
              <textarea className="rounded px-5 py-2 border-2" placeholder="Your message"></textarea>
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