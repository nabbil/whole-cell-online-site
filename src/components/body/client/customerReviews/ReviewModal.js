import React, {Component} from 'react'
// import {Modal} from 'react-bootstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../../../css/body/client/customerReviews/reviewModal.css'

import ReviewVideo from '../../../../assets/client/customerReviews/review_video.mp4'

import ImgModal from '../../ImgModal'
import VideoModal from '../../VideoModal'
import ReactPlayer from 'react-player'

class ReviewModal extends Component{
    constructor(props){
        super(props)
        this.state={
            imgModal: false,
            videoModal: false,
            video:[]
        }
    }

    toggleImgModal = () => {
        this.setState({
            imgModal: !this.state.imgModal
        })
    }
    toggleVideoModal = (video) => {
        this.setState({
            videoModal: !this.state.videoModal,
            video: video
        })
    }
    render(){
      return (
        <div>
        {this.props.filteredModal.map((review) =>

        <Modal 
        modalClassName="review-modal"
        contentClassName="review-modal-content"
        isOpen={this.props.reviewModal} 
        toggle={() => this.props.toggleReviewModal()}
        centered
        backdropClassName="review-modal-backdrop">
        <ModalHeader toggle={() => this.props.toggleReviewModal()}  className="modal-header modal-title">
            <img className="rounded-circle" alt={"users here"} src={review.image} height={56} width={56} />
            <h5>{review.name}</h5>
        </ModalHeader>
        <ModalBody>
            <h5 className="text-center">5 Stars</h5>
            <p className="text-center">
                Review by another satisfactory whole cell customer
            </p>
            <div className="gallery">
            <div className="video-container">
                <ReactPlayer className="video" url={review.video} width={100} height={100}/>
                <div className="video-wrapper" onClick={() => this.toggleVideoModal(review.video)}><i className="far fa-play-circle video-icon"></i></div>
            </div>
            </div>
            <VideoModal
            videoModal={this.state.videoModal}
            toggleVideoModal={this.toggleVideoModal}
            video={this.state.video}
            />
        
        </ModalBody>
        </Modal>
        )}
        </div>
      )
    }
  }


export default ReviewModal