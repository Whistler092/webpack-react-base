import { SEARCH_VIDEO, CLOSE_MODAL, OPEN_MODAL } from '../action-types/index';

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