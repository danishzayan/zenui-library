import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

// icons
import { CiMenuFries } from "react-icons/ci";

import Content from "./Content.jsx";

const MobileSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    useEffect(() => {
        const handleClick = (event) => {
            if (!event.target.closest('.mobileSidebar') && !event.target.closest('.mobilesidebarIcon')) {
                setSidebarOpen(false)
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [])

    return (
        <>
            <div className='w-full 1024px:hidden bg-border mt-[4.9rem] 425px:mt-[4.3rem] py-3 fixed 425px:top-0 top-[-10px] px-6 640px:px-10 640px:pr-7 z-30'>
                <CiMenuFries className='text-[1.7rem] rotate-[180deg] text-text mobilesidebarIcon' onClick={() => setSidebarOpen(true)} />
            </div>
            <aside className={` ${sidebarOpen ? 'translate-x-0 opacity-100 z-40' : 'translate-x-[-200px] opacity-0 z-[-1]'} py-6 pt-[6rem] px-6 640px:px-10 border-r h-[100vh] border-border flex-col gap-4 overflow-y-scroll fixed top-0 left-0 w-[80%] 640px:w-[320px] bg-secondary z-20 flex mobileSidebar transition-all duration-500`}>
                <Content />
            </aside>
        </>
    );
};

MobileSidebar.propTypes = {
  startContent: PropTypes.number.isRequired,
  setStartContent: PropTypes.func.isRequired,
};
export default MobileSidebar;
