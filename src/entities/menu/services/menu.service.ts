import { menuItemList } from "../mock/menu.mock";
import { MenuItem } from "../models/MenuItem";

class MenuService {
  list(): Promise<MenuItem[]> {
    return Promise.resolve(menuItemList);
  }
}

const menuService = new MenuService();
export default menuService;
