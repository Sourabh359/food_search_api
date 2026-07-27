export default function Footer(){
    return(
        <footer className="p-3 bg-blue-900 text-white">
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}