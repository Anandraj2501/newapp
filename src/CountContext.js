import { createContext, useState, React, useReducer } from 'react';
import { cartreducer } from './Componenrs/reducer';

export const CountContext = createContext();
// export const ColorContext = createContext("");
// export const Cart = createContext();


export default function Countcontext({ children }) {
  const [count, setCount] = useState(0);
  const appstate =
  {
    object: [{
      id: "samsung1",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung1",
      price: 45000,
      sheartcolor: true,
      qty: 1
    },
    {
      id: "samsung2",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung2",
      price: 45000, sheartcolor: true,
      qty: 1
    },
    {
      id: "samsung3",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung3",
      price: 45000, sheartcolor: true,
      qty: 1
    },
    {
      id: "samsung4",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung4",
      price: 45000, sheartcolor: true,
      qty: 1
    }],

    object2: [{
      id: "iph1",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "iph2",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "iph3",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "iph4",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone",
      price: 45000, iheartcolor: true,
      qty: 1
    }],

    object3: [{
      id: "asus1",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "asus2",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "asus3",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "asus4",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus",
      price: 45000, aheartcolor: true,
      qty: 1
    }],

    object4: [{
      id: "redmi1",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi",
      price: 45000, rheartcolor: true,
      qty: 1
    },
    {
      id: "redmi2",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi",
      price: 45000, rheartcolor: true,
      qty: 1
    },
    {
      id: "redmi3",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi",
      price: 45000, rheartcolor: true,
      qty: 1
    },
    {
      id: "redmi4",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi",
      price: 45000, rheartcolor: true,
      qty: 1
    }]
  }
  const allitems = {
    items: [{
      id: "samsung1",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung1",
      price: 45000,
      sheartcolor: true,
      qty: 1,
    },
    {
      id: "samsung2",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung2",
      price: 45000,
      sheartcolor: true,
      qty: 1
    },
    {
      id: "samsung3",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung3",
      price: 45000, sheartcolor: true,
      qty: 1
    },
    {
      id: "samsung4",
      src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
      name: "Samsung4",
      price: 45000, sheartcolor: true,
      qty: 1
    },
    {
      id: "iph1",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone1",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "iph2",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone2",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "iph3",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone3",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "iph4",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Iphone4",
      price: 45000, iheartcolor: true,
      qty: 1
    },
    {
      id: "asus1",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus1",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "asus2",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus2",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "asus3",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus3",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "asus4",
      src: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "Asus4",
      price: 45000, aheartcolor: true,
      qty: 1
    },
    {
      id: "redmi1",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi1",
      price: 45000, rheartcolor: true,
      qty: 1
    },
    {
      id: "redmi1",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi2",
      price: 45000, rheartcolor: true,
      qty: 1
    },
    {
      id: "redmi1",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi3",
      price: 45000, rheartcolor: true,
      qty: 1
    },
    {
      id: "redmi1",
      src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/4/-original-imagjyhymqnhz7fm.jpeg?q=70",
      name: "Redmi4",
      price: 45000, rheartcolor: true,
      qty: 1
    },
  
  ]
  }

 

  const [state, dispatch] = useReducer(cartreducer, {
    appstate: appstate,
    cart: [],
    searchcart: [],
    allitems: allitems,
  })


  return (

    <CountContext.Provider value={{ count, setCount, state, dispatch }}>
      {children}
    </CountContext.Provider>

  )
}




