/**
 * Mocking client-server processing
 */
import {base_ingredients} from '../data/base_ingredients';
import {entree_types} from '../data/entree_types';
import {ingredient_categories} from '../data/ingredient_categories';

const allData ={ base_ingredients, entree_types, ingredient_categories};

const TIMEOUT = 100

export default {
  getData: (cb, timeout) => setTimeout(() => cb(allData), timeout || TIMEOUT),
}
