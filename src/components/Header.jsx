import Link from "next/link"

import "../styles/header.css"


const Header = () => {
  return (
    <div>

      <div className="header-container">
        <div className="items">
          <div className="brand">
            {/* <Link href="/"><img src="" alt="brand-logo" /></Link> */}
            <Link href="/"><h2>StoryHub</h2></Link>
          </div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header