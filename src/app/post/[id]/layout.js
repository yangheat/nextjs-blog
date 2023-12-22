import Link from "next/link"
import layoutStyles from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <>
        {children}
        <div className={layoutStyles.backToHome}>
            <Link href="/post">← Back to post list</Link>
        </div>
    </>
  )
}
