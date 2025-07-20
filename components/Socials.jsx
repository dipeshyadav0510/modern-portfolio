import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiGithubLine,
} from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import socialConfig from "../config/social_config";

const socialData = [
  {
    name: "GitHub",
    link: socialConfig.github.url,
    Icon: RiGithubLine,
    enabled: socialConfig.github.enabled,
  },
  {
    name: "Instagram",
    link: socialConfig.instagram.url,
    Icon: RiInstagramLine,
    enabled: socialConfig.instagram.enabled,
  },
  {
    name: "Facebook",
    link: socialConfig.facebook.url,
    Icon: RiFacebookLine,
    enabled: socialConfig.facebook.enabled,
  },
  {
    name: "WhatsApp",
    link: socialConfig.whatsapp.url,
    Icon: RiWhatsappLine,
    enabled: socialConfig.whatsapp.enabled,
  },
  {
    name: "Viber",
    link: socialConfig.viber.url,
    Icon: FaViber,
    enabled: socialConfig.viber.enabled,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData
        .filter((social) => social.enabled)
        .map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
            className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
