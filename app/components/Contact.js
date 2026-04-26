import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 sm:px-12 bg-white text-black">
      <h2 className="text-5xl text-center font-bold mb-8 text-black">Let&apos;s Connect</h2>

      <div className="max-w-3xl mx-auto p-8 rounded-3xl card-bg border border-teal-400/20">
        <div className="flex flex-col sm:flex-row justify-around gap-6 text-center">
          <div className="flex items-center gap-3 text-black">
            <FaEnvelope className="text-emerald-500" />
            <div>
              <p className="font-semibold text-black">Email</p>
              <p className="text-black">blveenashree@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-black">
            <FaMapMarkerAlt className="text-rose-300" />
            <div>
              <p className="font-semibold text-black">Location</p>
              <p className="text-black">Bengaluru, India</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-black">
            <FaLinkedin className="text-[#0A66C2]" />
            <a className="text-black hover:text-[#0A66C2] transition" href="https://www.linkedin.com/in/veenashree-b-20a69329a/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-3 text-black">
            <FaGithub className="text-black" />
            <a className="text-black hover:text-black transition" href="https://github.com/veenashree" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-black flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Phone: +91 9535157281</span>
          <span className="text-black">•</span>
          <a href="mailto:blveenashree@gmail.com" className="text-black hover:text-cyan-200">Send Email</a>
        </div>
      </div>
    </section>
  );
}