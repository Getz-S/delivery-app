import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { restaurantsTypes } from "../types/restaurantsTypes";

const collectionName = 'restaurantes';
const restaurantesCollection = collection(dataBase, collectionName);

export const actionFillRestaurantsAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(restaurantesCollection);
        const restaurants = [];
        try {
            querySnapshot.forEach(element => {
                const restaurant = {
                    id: element.id,
                    ...element.data()
                }
                restaurants.push(restaurant)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillRestaurantsSync(restaurants));

        }
    }
}

const actionFillRestaurantsSync = (restaurants) => {
    return {
        type: restaurantsTypes.RESTAURANTS_FILL,
        payload: restaurants
    }
}
