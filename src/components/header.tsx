import { navBarConfig } from "@/config/navbar"

import NavBar from "./navbar"

const Header = () => {
  return (
    <header>
      <NavBar items={navBarConfig.mainNav} />
    </header>
  )
}

export default Header
