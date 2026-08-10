export default function Footer(){
    return(
        <footer className="p-5 bg-slate-900 text-gray-300 container mx-auto">
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}