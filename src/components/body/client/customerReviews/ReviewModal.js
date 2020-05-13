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
            videoModal: false
        }
    }

    toggleImgModal = () => {
        this.setState({
            imgModal: !this.state.imgModal
        })
    }
    toggleVideoModal = () => {
        this.setState({
            videoModal: !this.state.videoModal
        })
    }
    render(){
      return (
        <div>
        {this.props.filteredModal.map((review) =>

        <Modal 
        modalClassName="review-modal"
        isOpen={this.props.reviewModal} 
        toggle={() => this.props.toggleReviewModal()}
        centered
        backdropClassName="review-modal-backdrop">
        <ModalHeader toggle={() => this.props.toggleReviewModal()}  className="modal-header modal-title">
            <img className="rounded-circle" alt={"users here"} src={`https://source.unsplash.com/random/${review.id}`} height={56} width={56} />
            <h5>{review.username}</h5>
        </ModalHeader>
        <ModalBody>
            <h5 className="text-center">5 Stars</h5>
            <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem ex nesciunt iste quia, dignissimos non debitis enim similique! Repudiandae facilis vel adipisci dolores iusto!
            </p>
            <div className="gallery">
            <div className="video-container">
                <ReactPlayer className="video" controls url='https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s' width={100} height={100}/>
                <div className="video-wrapper" onClick={() => this.toggleVideoModal()}><i className="far fa-play-circle fa-4x video-icon"></i></div>
            </div>
            </div>
            <VideoModal
            videoModal={this.state.videoModal}
            toggleVideoModal={this.toggleVideoModal}
            />
        
        </ModalBody>
        </Modal>
        )}
        </div>
      )
    }
  }


export default ReviewModal