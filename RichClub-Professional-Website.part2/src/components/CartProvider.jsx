 "use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
const CartContext=createContext(null);
export default function CartProvider({children}){
  const [cart,setCart]=useState([]);
  const [ready,setReady]=useState(false);
  useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem("richclub-cart")||"[]"))}catch{} setReady(true)},[]);
  useEffect(()=>{if(ready)localStorage.setItem("richclub-cart",JSON.stringify(cart))},[cart,ready]);
  const add=(product)=>setCart(c=>{const x=c.find(i=>i.id===product.id);return x?c.map(i=>i.id===product.id?{...i,quantity:i.quantity+1}:i):[...c,{...product,quantity:1}]});
  const change=(id,delta)=>setCart(c=>c.map(i=>i.id===id?{...i,quantity:i.quantity+delta}:i).filter(i=>i.quantity>0));
  const remove=(id)=>setCart(c=>c.filter(i=>i.id!==id));
  const clear=()=>setCart([]);
  const count=cart.reduce((n,i)=>n+i.quantity,0);
  const total=cart.reduce((n,i)=>n+i.price*i.quantity,0);
  const value=useMemo(()=>({cart,add,change,remove,clear,count,total}),[cart,count,total]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart(){return useContext(CartContext)}