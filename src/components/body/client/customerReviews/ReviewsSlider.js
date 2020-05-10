import React, {Component} from 'react'
  import "slick-carousel/slick/slick.css"
  import "slick-carousel/slick/slick-theme.css"
  import '../../../../css/body/client/customerReviews/reviewsSlider.css'
  import Slider from "react-slick"

  import ReviewModal from './ReviewModal'

class ReviewsSlider extends Component {

    constructor(props){
        super(props)
        this.state={
            reviews: [],
            filteredModal:[],
            reviewModal: false

        }
    }
  
    componentDidMount = () =>  {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(reviews=>{
            this.setState({
                reviews: reviews
            })
        })
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
                                    <img className="rounded-circle img" alt={"users here"} src={`https://source.unsplash.com/random/${review.id}`} height={56} width={56} />
                                    <div className="card-body">
                                        <h5 className="card-title card-title">{review.username}</h5>
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
