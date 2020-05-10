import React, {Component} from 'react'
import {Modal, ModalBody} from 'reactstrap'

import '../../css/body/videoModal.css'


import ReactPlayer from 'react-player'

class VideoModal extends Component{
    render(){
      const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px', color:'white' }} onClick={() => this.props.toggleVideoModal()}>&times;</button>;
      return (
        <Modal
        modalClassName="video-modal"
        isOpen={this.props.videoModal}
        centered
        external={externalCloseBtn}
        size={'lg'}
        toggle={() => this.props.toggleVideoModal()}
        >
          <ModalBody className="body">
            <div className="container">
              <ReactPlayer className="video" controls url='https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s'/>
            </div>  
          </ModalBody>
        </Modal>
      )
    }
  }

  export default VideoModal