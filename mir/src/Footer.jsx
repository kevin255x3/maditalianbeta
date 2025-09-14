import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    // State handlers for mobile and footer visibility
    const [showFooter, setShowFooter] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Location hook
    const location = useLocation();

    // Check if we should show footer based on route and screen size
    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768); // True mobile only
            setIsTablet(width >= 768 && width < 1280); // Tablet range
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, [location]);

    if (!showFooter) return null;

    return (
        <footer className={`fixed bottom-0 left-0 w-full bg-[#FDF8ED] ${isMobile ? 'z-20' : 'z-30'}`}>
            {/* Mobile version (original mobile layout) */}
            {isMobile ? (
                <div className="flex flex-col items-center text-center py-3">
                    <div className="flex items-center space-x-3 mb-3 text-[12px]">
                        <span className="font-body text-[#33312B] truncate">20728 Willoughby Town Centre Dr #100, Langley Twp, BC V2Y 0P3</span>
                    </div>
                    <div className="flex space-x-4 text-[12px]">
                        <a href="https://www.instagram.com/themaditalianpizza/?hl=en" aria-label="Instagram" className="text-[#33312B] hover:text-[#333133] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                                <path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.6 6.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/themaditalianpizza/" aria-label="Facebook" className="text-[#33312B] hover:text-[#333133] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.9v-2.88h1.6V9.41c0-1.58.94-2.45 2.38-2.45.69 0 1.42.12 1.42.12v1.56h-.79c-.78 0-1.02.48-1.02.98v1.16h1.74l-.28 2.88h-1.46v6.99A10 10 0 0022 12z" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                    </div>
                </div>
            ) : isTablet ? (
                /* Tablet version (aligned flex-1 layout) */
                <div className="flex flex-col items-center justify-center text-center py-3 px-4">
                    <div className="flex items-center justify-center mb-1 text-xs w-full">
                        <div className="w-full text-center">
                            <span className="font-body text-[#33312B]">20728 Willoughby Town Centre Dr #100, Langley Twp, BC V2Y 0P3</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-xs w-full">
                        <div className="flex-1 text-center">
                            <a href="https://www.instagram.com/themaditalianpizza/?hl=en" className="font-display uppercase text-[#33312B] hover:text-[#333133] transition-colors">Instagram</a>
                        </div>
                        <div className="flex-1 text-center">
                            <a href="https://www.facebook.com/themaditalianpizza/" className="font-display uppercase text-[#33312B] hover:text-[#333133] transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>
            ) : (
                /* Desktop version (original side-by-side layout) */
                <div className="flex flex-row justify-between items-center h-12 px-8">
                    <div className="flex flex-row items-center space-x-6 text-xs">
                        <a href="mailto:info@maditalianpizza.ca" className="font-display text-[#33312B] hover:text-[#333133] transition-colors">info@maditalianpizza.com</a>
                        <span className="text-[#33312B]">|</span>
                        <span className="font-body text-[#33312B]">20728 Willoughby Town Centre Dr #100, Langley Twp, BC V2Y 0P3</span>
                    </div>
                    <div className="flex items-center space-x-8 text-xs">
                        <a href="https://www.instagram.com/themaditalianpizza/?hl=en" className="font-display uppercase text-[#33312B] hover:text-[#333133] tracking-wide transition-colors">Instagram</a>
                        <a href="https://www.facebook.com/themaditalianpizza/" className="font-display uppercase text-[#33312B] hover:text-[#333133] tracking-wide transition-colors">Facebook</a>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;