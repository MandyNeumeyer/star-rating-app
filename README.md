# Create a star rating widget :star::star::star::star::star:

**The rating widget should give the user the option to give a rating from 1 to 5.**

---
![](star-rating.gif)

As a guidline, how the finished product could be looking, use the picture as a refernce. 

---

## Overview

- Split your app up into components.
- Produce 5 icons.
- To manage your state use the `useState` Hook from React.
- When you hover over the icons, it should give you a preview of how the icons might look.
- The preview should only be temporary, once the user moves the mouse away from the widget, the original state should be rendered.
- The click event should call a handler function, which should change the state - and change the rendered output.

## hint

- To display your stars you can use the `<FaStar/>` from React icons `npm i react-icons`- is already included in this project. (Have a look in your `package.json` file under dependencies.)
