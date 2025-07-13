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
                    <div className="flex items-center space-x-3 mb-3 text-xs">
                        <a href="mailto:info@maditalian.com" className="font-display text-[#33312B] hover:text-[#333133] transition-colors">info@maditalian.com</a>
                        <span className="text-[#33312B]">|</span>
                        <span className="font-body text-[#33312B]">20330 Fraser Hwy, Langley, BC</span>
                    </div>
                    <div className="flex space-x-6 text-xs">
                        <a href="https://www.instagram.com/themaditalianpizza/?hl=en" className="font-display uppercase text-[#33312B] hover:text-[#333133] transition-colors">Instagram</a>
                        <a href="https://www.facebook.com/themaditalianpizza/" className="font-display uppercase text-[#33312B] hover:text-[#333133] transition-colors">Facebook</a>
                    </div>
                </div>
            ) : isTablet ? (
                /* Tablet version (aligned flex-1 layout) */
                <div className="flex flex-col items-center justify-center text-center py-3 px-4">
                    <div className="flex items-center justify-center mb-1 text-xs w-full">
                        <div className="flex-1 text-center">
                            <a href="mailto:info@maditalian.com" className="font-display text-[#33312B] hover:text-[#333133] transition-colors">info@maditalian.com</a>
                        </div>
                        <span className="text-[#33312B] mx-3">|</span>
                        <div className="flex-1 text-center">
                            <span className="font-body text-[#33312B]">20330 Fraser Hwy, Langley, BC</span>
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
                        <a href="mailto:info@maditalian.com" className="font-display text-[#33312B] hover:text-[#333133] transition-colors">info@maditalian.com</a>
                        <span className="text-[#33312B]">|</span>
                        <span className="font-body text-[#33312B]">20330 Fraser Hwy, Langley, BC</span>
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