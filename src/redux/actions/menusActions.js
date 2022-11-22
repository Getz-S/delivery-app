import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { menusTypes } from "../types/menusTypes";

const collectionName = 'menus';
const menusCollection = collection(dataBase, collectionName);

export const actionFillMenusAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(menusCollection);
        const menus = [];
        try {
            querySnapshot.forEach(element => {
                const menu = {
                    id: element.id,
                    ...element.data()
                }
                menus.push(menu)
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFillMenusSync(menus));

        }
    }
}

const actionFillMenusSync = (menus) => {
    return {
      type: menusTypes.MENUS_FILL,
      payload: menus.map((menu) => {
        return {
          id: menu.id,
          menu: menu.platos._key.path.segments.slice(-2).join('/'),
        };
      }),
    };
  };