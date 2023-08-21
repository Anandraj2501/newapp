import { createContext, useState, React, useReducer } from 'react';
import { cartreducer } from './Componenrs/reducer';

export const CountContext = createContext();


export default function Countcontext({ children }) {
  const [count, setCount] = useState(0);
  const appstate =
    [
      {
        id: "samsung1",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70",
        name: "Samsung1",
        price: 45000,
        sheartcolor: true,
        qty: 1,
        brand:"samsung"
      },
      {
        id: "samsung2",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70",
        name: "Samsung2",
        price: 45000, sheartcolor: true,
        qty: 1,
        brand:"samsung"
      },
      {
        id: "samsung3",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70",
        name: "Samsung3",
        price: 45000, sheartcolor: true,
        qty: 1,
        brand:"samsung"
      },
      {
        id: "samsung4",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70",
        name: "Samsung4",
        price: 45000, sheartcolor: true,
        qty: 1,
        brand:"samsung"
      },


      {
        id: "iph1",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone 1",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },
      {
        id: "iph2",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone 2",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },
      {
        id: "iph3",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone 3",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },
      {
        id: "iph4",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone 4",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },


      {
        id: "asus1",
        src: "https://m.media-amazon.com/images/I/51+AUhQdgYL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Asus 1",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },
      {
        id: "asus2",
        src: "https://m.media-amazon.com/images/I/51+AUhQdgYL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Asus 2",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },
      {
        id: "asus3",
        src: "https://m.media-amazon.com/images/I/51+AUhQdgYL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Asus 3",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },
      {
        id: "asus4",
        src: "https://m.media-amazon.com/images/I/51+AUhQdgYL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Asus 4",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },

      {
        id: "redmi1",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi 1",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "redmi2",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi 2",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "redmi3",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi 3",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "redmi4",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi 4",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "dell1",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
        name: "Dell laptop1",
        price: "56000",
        qty:1,
        brand: "dell"
      },
      {
        id: "dell2",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
        name: "Dell laptop2",
        price: "57000",
        qty:1,
        brand: "dell"
      },
      {
        id: "dell3",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
        name: "Dell laptop3",
        price: "58000",
        qty:1,
        brand: "dell"
      },
      {
        id: "dell4",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
        name: "Dell laptop4",
        price: "59000",
        qty:1,
        brand: "dell"
      },
      {
        id: "Mac1",
        src: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
        name: "Apple laptop1",
        price: "59000",
        qty:1,
        brand: "Apple"
      },
      {
        id: "Mac2",
        src: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
        name: "Apple laptop2",
        price: "59000",
        qty:1,
        brand: "Apple"
      },
      {
        id: "Mac3",
        src: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
        name: "Apple laptop3",
        price: "59000",
        qty:1,
        brand: "Apple"
      },
      {
        id: "Mac4",
        src: "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
        name: "Apple laptop4",
        price: "59000",
        qty:1,
        brand: "Apple"
      },
      {
        id: "acer1",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/c/x/-original-imagqf3ahw9bfjn9.jpeg?q=70",
        name: "Acer laptop1",
        price: "59000",
        qty:1,
        brand: "Acer"
      },
      {
        id: "acer2",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/c/x/-original-imagqf3ahw9bfjn9.jpeg?q=70",
        name: "Acer laptop2",
        price: "59000",
        qty:1,
        brand: "Acer"
      },
      {
        id: "acer3",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/c/x/-original-imagqf3ahw9bfjn9.jpeg?q=70",
        name: "Acer laptop3",
        price: "59000",
        qty:1,
        brand: "Acer"
      },
      {
        id: "acer4",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/c/x/-original-imagqf3ahw9bfjn9.jpeg?q=70",
        name: "Acer laptop4",
        price: "59000",
        qty:1,
        brand: "Acer"
      },
      {
        id: "asuslaptop1",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70",
        name: "Asus laptop1",
        price: "59000",
        qty:1,
        brand: "Asuslaptop"
      },
      {
        id: "asuslaptop2",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70",
        name: "Asus laptop2",
        price: "59000",
        qty:1,
        brand: "Asuslaptop"
      },
      {
        id: "asuslaptop3",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70",
        name: "Asus laptop3",
        price: "59000",
        qty:1,
        brand: "Asuslaptop"
      },
      {
        id: "asuslaptop4",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70",
        name: "Asus laptop4",
        price: "59000",
        qty:1,
        brand: "Asuslaptop"
      },
      
    ]





  const [state, dispatch] = useReducer(cartreducer, {
    appstate: appstate,
    cart: [],
    wishlist: [],
    searchquery: "",
  })


  return (

    <CountContext.Provider value={{ count, setCount, state, dispatch }}>
      {children}
    </CountContext.Provider>

  )
}




