import React, { Component } from 'react'

import ReviewsSlider from './ReviewsSlider' 

import '../../../../css/body/client/customerReviews/customerReviews.css'

class CustomerReviews extends Component {
    render() {
        return (
            <div>
            <div className="customer-reviews">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                             <div></div>
                             <div className="sub-content">
                                 <span>
                                <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                    Customer Reviews
                                </h1>
                                <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa id mollitia temporibus ipsa quis repellat dolorum laborum error inventore nam.
                                </p>
                                 </span>
                             </div>
                             <div>
                                 <ReviewsSlider />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default CustomerReviews
