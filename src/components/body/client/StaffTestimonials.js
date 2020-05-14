import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import '../../../css/body/client/staffTestimonials.css'


import Video1 from '../../../assets/client/customerReviews/8.mp4'
import Video2 from '../../../assets/client/customerReviews/7.mp4'
import Video3 from '../../../assets/client/customerReviews/5.mp4'

import VideoModal from '../VideoModal'

class StaffTestimonials extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoModal: false,
            video: []
        }
    }
    toggleVideoModal = (video) => {
        this.setState({
            videoModal:!this.state.videoModal,
            video: video
        })
      }
    render() {
        return (
            <div>
            <div className="staff-testimonials">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <span>
                            <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                Franchise/Staff Testimonials
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa id mollitia temporibus ipsa quis repellat dolorum laborum error inventore nam.
                            </p>
                            </span>
                            <div className="video-container" data-aos="fade-up" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                <ReactPlayer className="video" url={Video1}/>
                                <div className="video-wrapper" onClick={() => this.toggleVideoModal(Video1)}><i className="far fa-play-circle video-icon"></i></div>
                            </div>
                            <div className="video-container" data-aos="fade-up" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                <ReactPlayer className="video" url={Video2}/>
                                <div className="video-wrapper" onClick={() => this.toggleVideoModal(Video2)}><i className="far fa-play-circle video-icon"></i></div>
                            </div>
                            <div className="video-container" data-aos="fade-up" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                <ReactPlayer className="video" url={Video3}/>
                                <div className="video-wrapper" onClick={() => this.toggleVideoModal(Video3)}><i className="far fa-play-circle video-icon"></i></div>
                            </div>
                            <VideoModal
                                            videoModal={this.state.videoModal}
                                            toggleVideoModal={this.toggleVideoModal}
                                            video={this.state.video}
                                        />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default StaffTestimonials