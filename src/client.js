import React from "react";

import Menu from "menu-hamburger";

export default function Client() {
    return (
        <header>
            <Menu
                config={{
                    size: 30
                }}
                on
            />
        </header>
    );
}
