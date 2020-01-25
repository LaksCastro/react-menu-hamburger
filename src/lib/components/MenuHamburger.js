import React, { useEffect, useRef } from "react";

import MenuHamburger from "menu-hamburger";

export default function MenuWrapper(props) {
    const { config = {}, menuRef } = props;

    const menuNode = useRef(null);

    useEffect(() => {
        if (menuNode.current) {
            const menu = MenuHamburger.initialize({
                rootElement: menuRef.current,
                ...config
            });
            if (!menuRef) return;
            menuRef(menu);
        }
    }, []);

    return <div ref={menuNode}></div>;
}
