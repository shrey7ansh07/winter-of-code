import React from "react";

const Layout = ({ children,className="" }) => {
    return (
        <div className={`w-full h-full bg-[#0a0918] inline-block z-0 bg-[#0a0918] p-24 dark:bg-[#0a0918] xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
        </div>
    );
}

export default Layout;