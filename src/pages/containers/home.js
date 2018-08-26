import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/container/video-player';


class Home extends Component {

    state = {
        modalVisible: false,

    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = (event) => {
        console.log("handleCloseModal");
        this.setState({
            modalVisible: false
        })
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
                        this.state.modalVisible
                        &&
                        <ModalContainer >
                            <Modal
                                handleCloseModal={this.handleCloseModal}>
                               <VideoPlayer 
                                    src={this.state.media.src}
                                    title={this.state.media.title}
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
    const categories = state.data.categories.map((categoryId) => {
        return state.data.entities.categories[categoryId]
    })

    return {
        categories : categories,
        search : state.search
    }

}

export default connect(mapStateToProps)(Home)