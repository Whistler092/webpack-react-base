import { SEARCH_VIDEO,
            SEARCH_ASYNC_VIDEO, 
            CLOSE_MODAL, 
            OPEN_MODAL, 
            IS_LOADING} from '../action-types/index';

export function openModal(mediaId){
    return {
        type: OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}

export function closeModal(){
    return {
        type: CLOSE_MODAL
    }
}

export function searchEntities(query){
    return {
        type: SEARCH_VIDEO,
        payload: {
            query
        }
    }
}

export function isLoading(value){
    return {
        type: IS_LOADING,
        payload: {
            value
        }
    }
}

export function searchAsyncEntities(query){
    return (dispatch) => {
        //fetch()
        dispatch(isLoading(true))

        setTimeout(() => {
            dispatch(isLoading(false))
            dispatch(searchEntities(query))    
        }, 5000);
    }
    /* 
    {
        type: SEARCH_ASYNC_VIDEO,
        payload: {
            query
        }
    } */
}
