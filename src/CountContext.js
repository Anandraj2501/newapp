import { createContext ,useState,React} from 'react';

export const CountContext = createContext(0);
// export const ColorContext = createContext("");
// export const Cart = createContext();


export default function Countcontext({children}) {
    const [count, setCount] = useState(0);
    const [appstate, setAppstate] = useState({
        object: [{ sheartcolor: true },
        { sheartcolor: true },
        { sheartcolor: true },
        { sheartcolor: true }],

        object2: [{ iheartcolor: true },
        { iheartcolor: true },
        { iheartcolor: true },
        { iheartcolor: true }],

        object3: [{ aheartcolor: true },
        { aheartcolor: true },
        { aheartcolor: true },
        { aheartcolor: true }],

        object4: [{ rheartcolor: true },
        { rheartcolor: true },
        { rheartcolor: true },
        { rheartcolor: true }]
    });

    const [cart,setCart] = useState([]);

  return (
    
      <CountContext.Provider value={{count, setCount,appstate,setAppstate,cart,setCart}}>
        {children}
      </CountContext.Provider>
    
  )
}
 



