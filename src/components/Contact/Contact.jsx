import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Initialize EmailJS with your public key
    emailjs.init("8Mm6OMPUL0eC7763-");

    emailjs
      .sendForm(
        "service_oq5k2g9",
        "template_t6f82bn",
        form.current,
        "8Mm6OMPUL0eC7763-"
      )
      .then(
        () => {
          setIsLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsLoading(false);
          console.error("Error sending message:", error);
          
          // Handle specific quota error
          if (error.status === 426) {
            toast.error("Email quota reached. Please contact me directly via email or phone.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            });
          } else {
            toast.error("Failed to send message. Please try again or contact me directly.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            });
          }
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-200 cursor-pointer ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 hover:shadow-lg"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              📧 <span className="text-purple-400">arorapranav73@gmail.com</span>
            </p>
            <p className="text-sm mt-2">
              📱 <span className="text-purple-400">+91 99104 99892</span>
            </p>
            <p className="text-sm mt-2">
              📍 <span className="text-purple-400">Delhi, India</span>
            </p>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
