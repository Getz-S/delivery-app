
import { addDoc, getDocs, collection } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { orderTypes } from "../types/orderTypes";

const collectionName = 'orders';
const ordersCollection = collection(dataBase, collectionName);

export const  actionAddOrderAsync=(order)=>{
    return async (dispatch)=>{
        try {
            const docs = await addDoc(ordersCollection,order)
            const newOrder={
                id:docs.id,
                ...order
            }
            dispatch(actionAddOrderSync({order:newOrder,error:false}))
            
        } catch (error) {
            console.log(error);
            dispatch(actionAddOrderSync({order:{},error:true,errorMessage:error.message}))
            
        }

    }

}
const actionAddOrderSync=(objetoOrder)=>{
return{
    type:orderTypes.ORDER_ADD,
    payload:{...objetoOrder}
}
}

export const actionFillOrdersAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(ordersCollection);
        const orders = [];
        try {
            querySnapshot.forEach(element => {
                const order = {
                    id: element.id,
                    ...element.data()
                }
                orders.push(order)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillOrdersSync(orders));

        }
    }
}

const actionFillOrdersSync = (orders) => {
    console.log(orders)
    return {
      type: orderTypes.ORDERS_FILL,
      payload: orders
    };
  };