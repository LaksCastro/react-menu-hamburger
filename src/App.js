import React, { useState } from "react";

import Menu from "./lib/index";

export default function src() {
    return (
        <>
            <Menu
                config={{
                    size: 50,
                    borderRadius: "40%",
                    backgroundColor: "red"
                }}
            />
        </>
    );
}
