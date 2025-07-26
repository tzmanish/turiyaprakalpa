
import { ArrowRight, Facebook, Instagram, Mail, Twitter, User } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import { useState } from 'react';
import Logo from './Logo';

const Footer = () => {

    const [email, setEmail] = useState("");

    return (
        <footer className='bg-base-white pt-12'>
            <div className="w-full mx-auto my-4 container">

                <div className="flex flex-row justify-between gap-8">

                    <div className="flex-1/12 flex flex-col gap-6">
                        <Logo />
                        <p className="">
                            India's first AI Center of Excellence built for people, not profits. Where code meets conscience.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className='text-secondary'><Mail /></a>
                            <a href="#" className='text-secondary'><Facebook /></a>
                            <a href="#" className='text-secondary'><Instagram /></a>
                            <a href="#" className='text-secondary'><Twitter /></a>
                        </div>
                    </div>



                    <div className="flex-1 flex flex-col gap-6">
                        <h3 className="font-bold text-lg">Explore</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Fellowship</a></li>
                            <li><a href="#" className="hover:underline">Use Cases</a></li>
                            <li><a href="#" className="hover:underline">Partners</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Team</a></li>
                        </ul>
                    </div>


                    <div className="flex-1 flex flex-col gap-6">
                        <h3 className="font-bold text-lg">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Manifesto</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                        <Button>
                            <User />
                            Join
                            <ArrowRight />
                        </Button>
                    </div>


                    <div className="flex-1 flex flex-col gap-6">
                        <div className="rounded-lg p-6 shadow-lg">
                            <div className="flex items-center mb-2 text-secondary font-bold text-lg gap-2">
                                <Mail />
                                Stay Updated
                            </div>
                            <p className=" mb-4 text-sm">Get the latest updates on our initiatives and programs.</p>
                            <form className="flex flex-col gap-4">
                                <Input type='email' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Button type="submit" customClasses='w-full bg-secondary hover:bg-dark-secondary'>Subscribe</Button>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row justify-between items-center border-t border-gray-300 text-sm my-6 pt-4">
                    <p>&copy; {new Date().getFullYear()} Tech Bharat Foundation. All rights reserved.</p>
                    <p>Made with <span className="text-red-500">❤</span> for India's future</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
