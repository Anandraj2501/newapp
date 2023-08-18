import { createContext, useState, React, useReducer } from 'react';
import { cartreducer } from './Componenrs/reducer';

export const CountContext = createContext();
// export const ColorContext = createContext("");
// export const Cart = createContext();


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
        name: "Iphone",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },
      {
        id: "iph2",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },
      {
        id: "iph3",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },
      {
        id: "iph4",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Iphone",
        price: 45000, iheartcolor: true,
        qty: 1,
        brand:"iphone"
      },


      {
        id: "asus1",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Asus",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },
      {
        id: "asus2",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Asus",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },
      {
        id: "asus3",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Asus",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },
      {
        id: "asus4",
        src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        name: "Asus",
        price: 45000, aheartcolor: true,
        qty: 1,
        brand:"asus"
      },

      {
        id: "redmi1",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "redmi2",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "redmi3",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
      },
      {
        id: "redmi4",
        src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
        name: "Redmi",
        price: 45000, rheartcolor: true,
        qty: 1,
        brand:"redmi"
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




