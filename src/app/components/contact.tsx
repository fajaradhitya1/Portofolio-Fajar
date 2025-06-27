import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen  text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-[#C6F10E] inline-block">
          Contact
        </h2>
        <p className="text-center text-lg mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="grid grid-cols-1 gap-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C6F10E]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C6F10E]"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C6F10E]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#C6F10E] text-black py-2 rounded-md hover:bg-[#b5e60d] transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Find me on</h3>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="mailto:fajaradhitya925@gmail.com"
              className="hover:text-[#C6F10E] transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/fajaradhitya1"
              target="_blank"
              className="hover:text-[#C6F10E] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-[#C6F10E] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/fajaradhitya_"
              target="_blank"
              className="hover:text-[#C6F10E] transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
