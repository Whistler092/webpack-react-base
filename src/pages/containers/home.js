import React, { Component } from 'react';

import { connect } from 'react-redux';
import { List as list } from 'immutable' 

import { openModal, closeModal } from '../../actions';

import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';


class Home extends Component {

    /* state = {
        modalVisible: false,
    } */

    handleOpenModal = (id) => {
        this.props.dispatch(openModal(id))
        /* this.setState({
            modalVisible: true,
            media
        }) */
    }
    handleCloseModal = (event) => {
        /* console.log("handleCloseModal");
        this.setState({
            modalVisible: false
        }) */
        this.props.dispatch(closeModal())
    }

    render() {

        return (
            <HandleError>
                <HomeLayout >
                    <Related />
                    <Categories
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal} 
                        search={this.props.search} />
                    {
                        this.props.modal.get('visibility')
                        &&
                        <ModalContainer >
                            <Modal
                                handleCloseModal={this.handleCloseModal}>
                               <VideoPlayer 
                                    id={this.props.modal.get('mediaId')}
                                    //src={this.state.media.src}
                                    //title={this.state.media.title}
                                    autoplay />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props){
    //Aquì se le envian los datos le quiero enviar a mi componente como nuevas propiedades
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })

    let searchResults = list()
    const search = state.get('data').get('search').toLowerCase();
    if (search){
        const mediaList = state.get('data').get('entities').get('medias');
        searchResults = mediaList.filter((item) => (
            item.get('author').toLowerCase().includes(search)
        )).toList();
    }

    return {
        categories : categories,
        search : searchResults,
        modal: state.get('modal')
    }

}

export default connect(mapStateToProps)(Home)