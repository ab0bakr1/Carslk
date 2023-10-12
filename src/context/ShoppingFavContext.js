import { useContext, createContext, useState, useEffect } from "react";
import FavCart from "../Component/header/favorite/FavCart";
const ShppingFavContext = createContext({});

const initialFavItem = localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")):[];

const ShoppingFavProvider = ({children}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [FavItems, setFavItems] = useState(initialFavItem);
    useEffect(()=>{
        localStorage.setItem("fav",JSON.stringify(FavItems));
    },[FavItems])
    const openFav = () => {
        setIsOpen(true)
    };
    const closeFav = () => {
        setIsOpen(false)
    };
    const getItemsQuantity = (id) =>{
        return FavItems.find((item)=> item.id === id)?.quantity || 0; 
    };
    const FavQuantity = FavItems.reduce(
        (quantity, item) => item.quantity + quantity,0
    );
    const increaseFavQuantity = (id) => {
        setFavItems((currItems)=>{
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id,quantity:1}];
            }
        })
    }
    const decreaseFavQuantity = (id) => {
        setFavItems((currItems)=>{
            if(currItems.find(item => item.id === id) == null){
                return currItems.filter((item)=> item.id !== id);
            }else{
                return currItems.map((item)=>{
                    if (item.id === id){
                        return{...item, quantity: item.quantity -1};
                    }else{
                        return item;
                    }
                })
            }
        })
    }
    const removeItemFromFav = (id) =>{
        setFavItems((currItems)=> currItems.filter((item) => item.id !== id));
    }
  return (
        <ShppingFavContext.Provider value={{FavItems ,getItemsQuantity ,increaseFavQuantity, decreaseFavQuantity, removeItemFromFav,openFav,closeFav,FavQuantity}}>{children}<FavCart isOpen={isOpen} /></ShppingFavContext.Provider>
    )
}

export default ShoppingFavProvider

export const useShoppingFav = () =>{
    return useContext(ShppingFavContext)
};