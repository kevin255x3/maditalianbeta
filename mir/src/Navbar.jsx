import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isAboutPage = location.pathname === '/about';
    const useDarkAppearance = isScrolled || isAboutPage;


    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActiveLink('home');
        else if (path === '/menu') setActiveLink('menu');
        else if (path === '/about') setActiveLink('about');
        else if (path === '/contact') setActiveLink('contact');
        else setActiveLink('');
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            gsap.fromTo('.mobile-menu-item',
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, stagger: 0.1, ease: 'power1.out', duration: 0.3 }
            );
        }
    };

    const scrolledTextColor = 'text-[#FDF8ED]';
    const scrolledHoverTextColor = 'hover:text-[#FDF8ED]/80';
    const topTextColor = 'text-[#33312B]';
    const topActiveTextColor = 'text-[#333133]';
    const topHoverTextColor = 'hover:text-[#333133]';

    const scrolledIconBg = 'bg-[#FDF8ED]';
    const topIconBg = 'bg-[#333133]';

    const mobileDropdownTextColor = 'text-[#33312B]';
    const mobileDropdownActiveTextColor = 'text-[#333133]';

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${useDarkAppearance ? 'bg-[#333133]' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center h-16 px-8">
                <Link
                    to="/"
                    className={`font-brand text-lg tracking-wide transition-colors ${useDarkAppearance ? scrolledTextColor + ' ' + scrolledHoverTextColor : topActiveTextColor + ' ' + topHoverTextColor}`}
                >
                    THE MAD ITALIAN
                </Link>

                <div className="hidden desktop:flex space-x-8">
                    <Link
                        to="/"
                        className={`font-display text-sm uppercase transition-colors ${activeLink === 'home' ? (useDarkAppearance ? scrolledTextColor + ' font-bold' : topActiveTextColor + ' font-bold') : (useDarkAppearance ? scrolledTextColor : topTextColor)} ${useDarkAppearance ? scrolledHoverTextColor : topHoverTextColor}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        className={`font-display text-sm uppercase transition-colors ${activeLink === 'menu' ? (useDarkAppearance ? scrolledTextColor + ' font-bold' : topActiveTextColor + ' font-bold') : (useDarkAppearance ? scrolledTextColor : topTextColor)} ${useDarkAppearance ? scrolledHoverTextColor : topHoverTextColor}`}
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className={`font-display text-sm uppercase transition-colors ${activeLink === 'about' ? (useDarkAppearance ? scrolledTextColor + ' font-bold' : topActiveTextColor + ' font-bold') : (useDarkAppearance ? scrolledTextColor : topTextColor)} ${useDarkAppearance ? scrolledHoverTextColor : topHoverTextColor}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`font-display text-sm uppercase transition-colors ${activeLink === 'contact' ? (useDarkAppearance ? scrolledTextColor + ' font-bold' : topActiveTextColor + ' font-bold') : (useDarkAppearance ? scrolledTextColor : topTextColor)} ${useDarkAppearance ? scrolledHoverTextColor : topHoverTextColor}`}
                    >
                        Contact
                    </Link>
                </div>

                <button
                    className="desktop:hidden"
                    onClick={toggleMenu}
                >
                    <div className="flex flex-col items-end">
                        <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${useDarkAppearance ? scrolledIconBg : topIconBg} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 mb-1.5 transition-opacity duration-300 ${useDarkAppearance ? scrolledIconBg : topIconBg} ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 transition-all duration-300 ${useDarkAppearance ? scrolledIconBg : topIconBg} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </div>
                </button>
            </div>

            <div className={`desktop:hidden bg-[#FDF8ED] transition-transform duration-300 ${isMenuOpen ? 'h-auto py-4 border-b border-[#33312B]/10' : 'h-0 overflow-hidden'}`}>
                <div className="flex flex-col space-y-4 px-8">
                    <Link
                        to="/"
                        className={`mobile-menu-item font-display text-sm uppercase ${activeLink === 'home' ? mobileDropdownActiveTextColor + ' font-bold' : mobileDropdownTextColor}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/menu"
                        className={`mobile-menu-item font-display text-sm uppercase ${activeLink === 'menu' ? mobileDropdownActiveTextColor + ' font-bold' : mobileDropdownTextColor}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className={`mobile-menu-item font-display text-sm uppercase ${activeLink === 'about' ? mobileDropdownActiveTextColor + ' font-bold' : mobileDropdownTextColor}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`mobile-menu-item font-display text-sm uppercase ${activeLink === 'contact' ? mobileDropdownActiveTextColor + ' font-bold' : mobileDropdownTextColor}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;