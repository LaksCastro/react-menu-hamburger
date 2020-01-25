import React, { useEffect, useRef } from "react";

import MenuHamburger from "menu-hamburger";

export default function MenuWrapper(props) {
    const { config = {}, refMenu } = props;

    const menuRef = useRef(null);

    useEffect(() => {
        if (menuRef.current) {
            const menu = MenuHamburger.initialize({
                rootElement: menuRef.current,
                ...config
            });
            if (!refMenu) return;
            refMenu(menu);
        }
    }, []);

    return <div ref={menuRef}></div>;
}
