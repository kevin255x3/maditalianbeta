import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the window whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]); // Dependency array ensures this runs only when the pathname changes

    return null; // This component doesn't render anything visible
}

export default ScrollToTop;