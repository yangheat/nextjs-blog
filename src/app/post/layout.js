import Image from "next/image"
import layoutStyles from "./styles/layout.module.css"
import utilStyles from "./styles/utils.module.css"
import Link from "next/link"
import ThemeIcon from "../components/ThemeIcon"
import BackPage from "../components/BackPage"

const name = "Your Name"
const siteTitle = "Next.js Sample Website"

export const metadata = {
  description: "Learn how to build a personal website using Next.js",
  metadataBase: new URL("https://og-image.vercel.app"),
  openGraph: {
    title: siteTitle,
    image: `/${encodeURI(
      siteTitle
    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
    ["twitter:card"]: "summary_large_image",
  },
}

export default function Layout({ children }) {
  return (
    <div className="bg-pink-50 dark:bg-black text-gray-800 dark:text-gray-200 min-h-screen">
      <div className={layoutStyles.container}>
        <ThemeIcon />
        <header className={layoutStyles.header}>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </header>
        {children}
        <BackPage />
      </div>
    </div>
  )
}
