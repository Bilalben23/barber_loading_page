// navigation.js
import { scroller } from "react-scroll";

// Independent function to handle navigation and scroll
export function navigateAndScroll(navigate, section, offset = -70) {
    navigate('/'); // Navigate to the home page

    setTimeout(() => {
        scroller.scrollTo(section, {
            smooth: true,
            offset: offset,
            duration: 500,
        });
    }, 100); // Delay to ensure navigation is complete
}
