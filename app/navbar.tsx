import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="p-3 bg-slate-900">
            <ul className="list-none flex gap-5  text-white">
                <li><Link className="block p-2" href="/">Home</Link></li>
                <li><Link className="block p-2" href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}