# Menu Hamburger
A clean, simple and easy to use library

# Demo
Check a demo working [working here](https://lakscastro.github.io/menu-hamburger.js/)

# PrintScreen
![Opened](https://i.imgur.com/x0IquWe.png)
![Animating](https://i.imgur.com/frVRogM.png)
![Animating](https://i.imgur.com/85xSR2q.png)
![Closed](https://i.imgur.com/J1iVw8F.png)

# Installation
```
yarn add react-menu-hamburger 
```
or
```
npm i react-menu-hamburguer
```
# Usage

### React - JSX
``` jsx
import React from "react";

import MenuHamburger from "react-menu-hamburger";

export default function MyAwesomeComponent() {
  return <MenuHamburger config={{...yourConfig}} />
}
    
```
# Config
Configure Menu Hamburger by passing an options object as the argument of the initialize method. Default values are:
``` jsx
<MenuHamburger config={{
  size: 30,
  lineWidth: 3,
  menuClassName: null,
  menuIconClassName: null,
  transition: 'all .2s ease-in-out',
  backgroundColor: 'white',
  borderRadius: '8px',
  iconColor: '#444',
  initOpened: false
}} />
```

### `size`
> Receives the Menu Hamburger width and height

required: `false`  
type: `number`  
Allowed values: `any number`  
Default value: `30`

### `lineWidth`
> Receives the Menu line width

required: `false`  
type: `number`  
Allowed values: `any number`  
Default value: `3`

### `menuClassName`
> Receives the class to apply on the Menu Node

required: `false`  
type: `string`  
Allowed values: `any valid HTML class string`  
Default value: `null`

### `menuIconClassName`
> Receives the class to apply on the Menu Node Icon

required: `false`  
type: `string`  
Allowed values: `any valid HTML class string`  
Default value: `null`

### `transition`
> Receives the custom Css transition

required: `false`  
type: `string`  
Allowed values: `any valid value to Css property transition`  
Default value: `all .2s ease-in-out`

### `backgroundColor`
> Receive the Background Color of Menu

required: `false`  
type: `string`  
Allowed values: `any Css color`  
Default value: `white`

### `borderRadius`
> Receive the Menu border radius

required: `false`  
type: `string`  
Allowed values: `any Css size`  
Default value: `8px`

### `iconColor`
> Receive the Menu Icon color

required: `false`  
type: `string`  
Allowed values: `any Css color`  
Default value: `#444`

### `initOpened`
> Defines whether the menu should start open or closed, where true means start open and false means start closed

required: `false`  
type: `boolean`  
Allowed values: `true` `false`  
Default value: `false`

# API
Menu exposes API methods that can be used to control the Menu externally. Example usage:
``` jsx
import React, { useState, useEffect } from "react";

import MenuHamburger from "react-menu-hamburger";

export default function MyAwesomeComponent() {
  const [menu, setMenu] = useState(null)
  return(
    <>
      <MenuHamburger menuRef={setMenu} config={{...yourConfig}} />
      <button onClick={() => menu && menu.toggle()}>Touch me to toggle menu</button>
    </>
  )
}
```

### `toggle`
> Opens the Menu if it is closed or closes if it is open

### `open`
> Open Menu

### `close`
> Close Menu

### `destroy`
> Destroys the current instance of the Menu

# Add Event Listeners
Menu exposes custom events that can be hooked on to. Example usage:
``` jsx
import React, { useState } from "react";

import MenuHamburger from "react-menu-hamburger";

export default function MyAwesomeComponent() {
  const [menu, setMenu] = useState(null)
  useEffect(() => {
    if(menu){
      menu.on("toggle", () => {
        console.log("The menu state has changed")
      })
    }
  }, [])
  return(
    <MenuHamburger menuRef={setMenu} config={{...yourConfig}} />
  )
}
```

### `init`
> This function is called when the Menu is initialized

### `toggle`
> This function is called when the Menu is closed or opened

### `open`
> This function is called when the Menu is opened

### `close`
> This function is called when the Menu is closed

### `destroy`
> This function is called when the Menu is destroyed

# Remove Event Listeners
The menu exposes custom events that can be used to remove an event listener. Example of use:
``` jsx
import React, { useState, useEffect } from "react";

import MenuHamburger from "react-menu-hamburger";

export default function MyAwesomeComponent() {
  const [menu, setMenu] = useState(null)
  useEffect(() => {
    if(menu){
      menu.on("toggle", () => {
        console.log("An event listener has been added")
      })
      menu.off("toggle", () => {
        console.log("And down here I removed the event listener, so nothing will happen ._.")
      })
    }
  }, [])
  return(
    <MenuHamburger menuRef={setMenu} config={{...yourConfig}} />
  )
}
```

### `init`
> Remove the init event listener

### `toggle`
> Remove the toggle event listener

### `open`
> Remove the open event listener

### `close`
> Remove the close event listener

### `destroy`
> Remove the destroy event listener
