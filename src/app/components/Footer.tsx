import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";

// This component was adapted from the Flowbite UI library :)
const Footer = () => {
    return (
        <footer className="bg-primary mt-16">
            <div className="mx-auto w-full p-8 py-12 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="flex flex-col items-start gap-4 mb-8">
                    <div className="flex items-center justify-start gap-4">
                        <Image src={Logo} alt="Logo" className="w-16 h-16" />
                        <Link href="/" className="text-background text-xl lg:text-2xl font-bold tracking-widest">UBC BIONICS</Link>
                    </div>
                    <p className="text-background">Reinventing the world of prosthesis through bionic engineering.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-background">Pages</h2>
                        <ul className="text-neutral-200">
                            <li className="mb-4">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/your-reviews">Sponsors</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-background">Follow Us</h2>
                        <ul className="text-neutral-200">
                            <li className="mb-4">
                                <a href="https://twitter.com/TalkingAlbums/" target="_blank">Instagram</a>
                            </li>
                            <li>
                                <a href="https://open.spotify.com/user/31p5v5yjrwpqkvyf3ptktfbrtlha/" target="_blank">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-background">Community</h2>
                        <ul className="text-neutral-200">
                            <li className="mb-4">
                            <a href="https://discord.com/invite/talkingalbums/" target="_blank">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-neutral-200 sm:text-center">© 2024 UBC Bionics. All rights reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
                    <a href="https://discord.com/invite/talkingalbums/" target="_blank" className="mr-4">
                        <img alt="Discord" className="h-4 w-4" />
                    </a>
                    <a href="https://twitter.com/TalkingAlbums/" target="_blank" className="mr-4">
                        <img alt="Twitter" className="h-4 w-4" />
                    </a>
                    <a href="https://open.spotify.com/user/31p5v5yjrwpqkvyf3ptktfbrtlha/" target="_blank">
                        <img alt="Spotify" className="h-4 w-4" />
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
  };
  
export default Footer;
  