import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { platosTypes } from "../types/platosTypes";

const collectionName = 'platos';
const platosCollection = collection(dataBase, collectionName);

export const actionFillPlatosAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(platosCollection);
        const platos = [];
        try {
            querySnapshot.forEach(element => {
                const plato = {
                    id: element.id,
                    ...element.data()
                }
                platos.push(plato)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillPlatosSync(platos));

        }
    }
}

const actionFillPlatosSync = (platos) => {
    return {
      type: platosTypes.PLATOS_FILL,
      payload: platos.map((plato) => {
        return {
          id: plato.id,
          image: plato.image,
          description: plato.description,
          ingredients: plato.ingredients,
          name: plato.name,
          price: plato.price,
          menu: plato.menu,
        };
      }),
    };
  };


