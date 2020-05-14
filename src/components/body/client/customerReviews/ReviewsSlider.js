import React, {Component} from 'react'
  import "slick-carousel/slick/slick.css"
  import "slick-carousel/slick/slick-theme.css"
  import '../../../../css/body/client/customerReviews/reviewsSlider.css'
  import Slider from "react-slick"

  import Img1 from '../../../../assets/client/customerReviews/1_img.jpg'
  import Img2 from '../../../../assets/client/customerReviews/2_img.jpg'
  import Img3 from '../../../../assets/client/customerReviews/3_img.jpg'
  import Img4 from '../../../../assets/client/customerReviews/4_img.jpg'
  import Img5 from '../../../../assets/client/customerReviews/5_img.jpg'
  import Img6 from '../../../../assets/client/customerReviews/6_img.jpg'
  import Img7 from '../../../../assets/client/customerReviews/7_img.jpg'
  import Img8 from '../../../../assets/client/customerReviews/8_img.jpg'
  import Img9 from '../../../../assets/client/customerReviews/9_img.jpg'

  import Video1 from '../../../../assets/client/customerReviews/1.mp4'
  import Video2 from '../../../../assets/client/customerReviews/2.mp4'
  import Video3 from '../../../../assets/client/customerReviews/3.mp4'
  import Video4 from '../../../../assets/client/customerReviews/4.mp4'
  import Video5 from '../../../../assets/client/customerReviews/5.mp4'
  import Video6 from '../../../../assets/client/customerReviews/6.mp4'
  import Video7 from '../../../../assets/client/customerReviews/7.mp4'
  import Video8 from '../../../../assets/client/customerReviews/8.mp4'
  import Video9 from '../../../../assets/client/customerReviews/9.mp4'

  import ReviewModal from './ReviewModal'

class ReviewsSlider extends Component {

    constructor(props){
        super(props)
        this.state={
            reviews: [
                {
                    id: 1,
                    name: "Whole Cell Customer",
                    image: Img1,
                    video: Video1
                },
                {
                    id: 2,
                    name: "Fred",
                    image: Img2,
                    video: Video2
                },
                {
                    id: 3,
                    name: "Whole Cell Customer",
                    image: Img3,
                    video: Video3
                },
                {
                    id: 4,
                    name: "Whole Cell Customer",
                    image: Img4,
                    video: Video4
                },
                {
                    id: 5,
                    name: "Michael",
                    image: Img5,
                    video: Video5
                },
                {
                    id: 6,
                    name: "Whole Cell Customer",
                    image: Img6,
                    video: Video6
                },
                {
                    id: 7,
                    name: "Whole Cell Customer",
                    image: Img7,
                    video: Video7
                },
                {
                    id: 8,
                    name: "Whole Cell Customer",
                    image: Img8,
                    video: Video8
                },
                {
                    id: 9,
                    name: "Whole Cell Customer",
                    image: Img9,
                    video: Video9
                },
            ],
            filteredModal:[],
            reviewModal: false

        }
    }
  
    componentDidMount = () =>  {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res=>res.json())
        // .then(reviews=>{
        //     this.setState({
        //         reviews: reviews
        //     })
        // })
    }

    toggleReviewModal = (id) => {
        this.setState({
            reviewModal: !this.state.reviewModal,
            filteredModal: this.state.reviews.filter(review => 
                review.id === id
                )
        })
    }

    render() {
        let settings = {
            infinite: false,
            speed: 1000,
            arrows:true,
            slidesToShow: 5,
            slidesToScroll: 4,
        
            responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 3
                  }
              },
              {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },{
              breakpoint: 800,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
        }

          return (
  
            <div className="container reviews-slider">
                {this.state.reviews.length===0?(
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ):(
                    <Slider {...settings}>
                    {this.state.reviews.map(review=>(
                            <div className="out" key={review.id}>

                                <div className="card">
                                    <img className="rounded-circle img" alt={"users here"} src={review.image} height={56} width={56} />
                                    <div className="card-body">
                                        <h5 className="card-title card-title">{review.name}</h5>
                                        <small className="card-text text-sm-center">5 Stars</small>
                                        <br/>
                                        <button value={review.id} className="btn btn-outline-light see-more" variant="primary" onClick={() => this.toggleReviewModal(review.id)}>See More</button>
                                        <ReviewModal
                                              reviewModal={this.state.reviewModal}
                                              toggleReviewModal={this.toggleReviewModal}
                                              filteredModal= {this.state.filteredModal}
                                          />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        );


    }
}


export default ReviewsSlider
