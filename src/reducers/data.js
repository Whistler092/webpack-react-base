

function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            // action.payload.query
            let results = [];
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
            }
        }
        default:
            return state;
    }
}

export default data;