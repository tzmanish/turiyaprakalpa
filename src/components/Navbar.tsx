import { Link } from "react-router-dom"
import Button from "./Button"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <div className="shadow-lg backdrop-blur-sm">
            <nav className="container mx-auto flex justify-between py-4 bg-transparent">
                <Logo />
                <ul className="flex gap-6 items-center font-medium">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/problem" className="hover:underline">Problem</Link></li>
                    <li><Link to="/vision" className="hover:underline">Vision</Link></li>
                    <li><Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/experts" className="hover:underline">Experts</Link></li>
                    <li><Button bg={true}>Participate</Button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
