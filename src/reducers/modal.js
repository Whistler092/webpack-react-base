import { fromJS } from 'immutable';
import { CLOSE_MODAL, OPEN_MODAL } from '../action-types/index';

const initialState = fromJS({
    visibility: false,
    mediaId: null,
})

function modal(state = initialState, action){
    switch (action.type) {
        case OPEN_MODAL:
             return state.merge({
                visibility: true,
                mediaId: action.payload.mediaId,
             })
            //return state.set('visibility', true);
        case CLOSE_MODAL:
            return state.set('visibility', false);
        default:
            return state;
    }
}


export default modal;