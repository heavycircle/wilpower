export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Wil Power Sports Training",
  description: "Compete to be Elite",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "WP Championship Series",
      href: "/wpcs",
    },
  ],
  links: {
    instagram: "https://instagram.com/wilpowersportstraining/",
    phone: "tel:+16462103166",
    mail: "mailto:will52nt@hotmail.com",
  },
  testimonials: [
    {
      quote: "I've been training with Wil for 5 months. My powerlifting total has increased over 100lbs. I've never felt stronger.",
      name: "Cole Ellis",
    },
    {
      quote: "Profound placeholder quote goes here that makes Wil look good.",
      name: "Quote Author",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
    },
    {
      quote: "This quote should scroll in from the right. Cool!",
      name: "Wil Power",
    }
  ],
}
