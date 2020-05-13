import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import '../../../css/body/client/staffTestimonials.css'
// import TestimonialsSlider from './TestimonialsSlider'
import VideoModal from '../VideoModal'

class StaffTestimonials extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoModal: false
        }
    }
    toggleVideoModal = () => {
        this.setState({
            videoModal:!this.state.videoModal
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
                                <ReactPlayer className="video" controls url='https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s'/>
                                <div className="video-wrapper" onClick={() => this.toggleVideoModal()}><i className="far fa-play-circle video-icon"></i></div>
                            </div>
                            <div className="video-container" data-aos="fade-up" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                <ReactPlayer className="video" controls url='https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s'/>
                                <div className="video-wrapper" onClick={() => this.toggleVideoModal()}><i className="far fa-play-circle video-icon"></i></div>
                            </div>
                            <div className="video-container" data-aos="fade-up" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                <ReactPlayer className="video" controls url='https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s'/>
                                <div className="video-wrapper" onClick={() => this.toggleVideoModal()}><i className="far fa-play-circle video-icon"></i></div>
                            </div>
                            <VideoModal
                                            videoModal={this.state.videoModal}
                                            toggleVideoModal={this.toggleVideoModal}
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
