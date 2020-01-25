import React, { useState, useEffect } from "react";

import MenuHamburger from "./lib/components/MenuHamburger";

export default function App() {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        if (menu) {
            menu.on("toggle", () => {
                console.log("o menu toggou");
            });
            menu.on("open", () => {
                console.log("o menu abriu");
            });
            menu.on("close", () => {
                console.log("o menu fechou");
            });
            menu.on("init", () => {
                console.log("o menu iniciou");
            });
        }
    }, [menu]);

    return (
        <header>
            <MenuHamburger
                config={{
                    size: 60,
                    backgroundColor: "#f1f1f1",
                    initOpened: true
                }}
                refMenu={setMenu}
            ></MenuHamburger>
            <button onClick={() => menu && menu.toggle()}>Toggar o Menu</button>
            <button onClick={() => menu && menu.open()}>Abrir o Menu</button>
            <button onClick={() => menu && menu.close()}>Fechar o Menu</button>
            <button onClick={() => menu && menu.destroy()}>
                Destruir o Menu
            </button>
        </header>
    );
}
