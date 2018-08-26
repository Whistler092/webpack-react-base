import schema from '../schemas/index'
import { fromJS } from 'immutable';
import { SEARCH_VIDEO } from '../action-types/index';


const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
})

function data(state = initialState, action) {
    switch (action.type) {
        case SEARCH_VIDEO: {
            // action.payload.query
            /* let results = [];
            if (action.payload.query) {
              const categories = state.data.categories
              categories.map(category => {
                let tempResults = category.playlist.filter(item => {
                  return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
                })
                results = results.concat(tempResults)
              })
            }
            console.log(results)
            return {
              ...state,
              search: results
            } */
            return state.set('search', action.payload.query);
        }
        default:
            return state;
    }
}

export default data;