import { motion } from "framer-motion";
import { useState } from "react";
import ContactBackground from "../../components/ContactBackground";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <ContactBackground />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-[#EC4899]">connect.</span>
          </motion.h2>

          {isSubmitted ? (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center p-8 bg-[rgba(255,255,255,0.05)] rounded-2xl backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-2xl font-semibold text-[#EC4899] mb-4">Thank You!</h3>
              <p className="text-lg">Your message has been sent successfully.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2 text-sm border border-[#EC4899] rounded-full hover:bg-[rgba(236,72,153,0.2)] transition-all duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-6 w-full mx-auto bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl backdrop-blur-md border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <div className="flex-1">
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name *" 
                    className={`input w-full bg-transparent border ${errors.name ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} focus:border-[#EC4899] transition-all duration-300`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="flex-1">
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email *" 
                    className={`input w-full bg-transparent border ${errors.email ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} focus:border-[#EC4899] transition-all duration-300`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="subject" 
                className="input bg-transparent border border-[rgba(255,255,255,0.1)] focus:border-[#EC4899] transition-all duration-300"
              />
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="message *"
                  className={`textarea w-full bg-transparent border ${errors.message ? 'border-red-500' : 'border-[rgba(255,255,255,0.1)]'} focus:border-[#EC4899] transition-all duration-300`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button 
                type="submit"
                className="group relative overflow-hidden rounded-full bg-[rgba(236,72,153,0.2)] hover:bg-[rgba(236,72,153,0.3)] border border-[#EC4899] px-8 py-4 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let's talk
                  </span>
                  <span className="absolute translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    Send ✉️
                  </span>
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[rgba(236,72,153,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
