import { useInView } from "react-intersection-observer";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import envelope from "../assets/envelope.svg";

const ContactSection = () => {
  const contacts = [
    {
      type: "github",
      url: "https://github.com/angurgapi",
      icon: github,
    },
    {
      type: "telegram",
      url: "https://t.me/angurgapi",
      icon: telegram,
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/sofiazarowska/",
      icon: linkedin,
    },
    {
      type: "email",
      url: "mailto:sophiekovalsky@gmail.com",
      icon: envelope,
    },
  ];

  const { ref, inView, entry } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      id="contact"
      className={`mt-20 py-20 px-3 flex flex-col transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-3xl md:text-5xl text-center text-cyan-100">
        Get in touch
      </p>
      <div className="w-[80vw] max-w-[600px] m-auto mt-5 flex flex-wrap justify-center gap-3">
        {contacts.map((contact) => (
          <a
            key={contact.type}
            href={contact.url}
            target="_blank"
            className="bg-blur inline-block p-2 rounded border-transparent border-2 border-solid hover:border-cyan-50 transition-all duration-300 ease-in-out"
          >
            {/* {project.title} */}
            <img alt={contact.type} src={contact.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
      <div className="bg-blur mx-auto my-5 rounded max-w-[500px] p-5">
        <p className="text-center md:text-xl">
          I'd be thrilled to become a part of a friendly team working in a
          friendly environment making some business better.{" "}
        </p>
      </div>
      <p className="my-5 text-cyan-100 text-center">
        That's it! Have a nice day!
      </p>
    </div>
  );
};
export default ContactSection;
