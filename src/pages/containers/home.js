import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';


class Home extends Component {

    state = {
        modalVisible: false,
    }

    handleOpenModal = (event) => {
        console.log("handleOpenModal");
        this.setState({
            modalVisible: true
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
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal} />
                    {
                        this.state.modalVisible
                        &&
                        <ModalContainer >
                            <Modal
                                handleCloseModal={this.handleCloseModal}>
                                <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home