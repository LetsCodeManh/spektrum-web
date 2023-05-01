import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SocialLink = {
  link: string;
  icon: IconDefinition;
  color: string;
};

type FooterLink = {
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    link: "https://www.instagram.com/energiespektrum/",
    icon: faInstagram,
    color: "#66B666",
  },
  {
    link: "https://www.facebook.com/energiespektrum/",
    icon: faFacebookF,
    color: "#4267B2",
  },
  {
    link: "https://twitter.com/energiespektrum",
    icon: faTwitter,
    color: "#00acee",
  },
];

const footerLinks: FooterLink[] = [
  {
    label: "Datenschutz",
    href: "/dataprotection",
  },
  {
    label: "Impressum",
    href: "/impressum",
  },
];

export { footerLinks, socialLinks };
