import React, {Component} from 'react'
import {Modal, ModalBody} from 'reactstrap'

import '../../css/body/imgModal.css'
import ReviewImg from '../../assets/client/customerReviews/review_img.jpg'

class ImgModal extends Component{
    render(){
      const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px', color:'white' }} onClick={() => this.props.toggleImgModal()}>&times;</button>;
      return (
        <Modal
        modalClassName="image-modal"
        isOpen={this.props.imgModal}
        centered
        external={externalCloseBtn}
        size={'lg'}
        toggle={() => this.props.toggleImgModal()}
        >
          <ModalBody className="body">
            <div className="container">
              <img className="img" alt={"users here"} src={ReviewImg} height={'100%'} width={'100%'}/>
            </div>
          </ModalBody>
        </Modal>
      )
    }
  }

  export default ImgModal