import { chdir } from "process";

type NavItemProps = {
  title: string
  url: string
  isSelected: boolean
}

type NavbarProps = {
  pageId: string
}

type FooterLinkProps = {
  text: string
  url: string
}


function NavItem(props: NavItemProps) {
  const {title, url, isSelected} = props
  return (
    <li>
      <a className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? "text-teal-500" : ""}`} href={url}>
        {title}
      </a>
    </li>
  );
}

function Navbar(props: NavbarProps) {
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm fontmedium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <NavItem title={"About Me"} url={"/"} isSelected={props.pageId == "about_me"}/>
          <NavItem title={"Projects"} url={"/projects"} isSelected={props.pageId == "projects"} />
          <NavItem title={"Essay"} url={"/essay"} isSelected={props.pageId == "essay"} />
        </ul>
      </nav>
    </div>
  );
}

function FooterLink(props: FooterLinkProps) {
  let {url, text} = props
  return <a className="transition hover:text-teal-500" href={url}>{text}</a> 
}

function Footer() {
  return <footer className="pt-10 px-8 pb-16 border-t">
    <div className="flex justify-between gap-6">
      <div className="flex gap-6 text-sm font-medium text-zinc-600">
        <FooterLink text={"About Me"} url={"/"} />
        <FooterLink text={"Projects"} url={"/projects"} />
        <FooterLink text={"Essay"} url={"/essay"} />
      </div>
      <p className="text-sm text-zinc-400">© 2025 Wafi Amna. All rights
reserved.</p>
    </div>
  </footer>
}

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar pageId={children.props.pageId}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}
