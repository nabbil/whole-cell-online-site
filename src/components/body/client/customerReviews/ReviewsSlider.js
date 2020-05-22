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
  import Img10 from '../../../../assets/client/customerReviews/10_img.jpg'
  import Img11 from '../../../../assets/client/customerReviews/11_img.jpg'
  import Img12 from '../../../../assets/client/customerReviews/12_img.jpg'
  import Img13 from '../../../../assets/client/customerReviews/13_img.jpg'
  import Img14 from '../../../../assets/client/customerReviews/14_img.jpg'
  import Img15 from '../../../../assets/client/customerReviews/15_img.jpg'
  import Img16 from '../../../../assets/client/customerReviews/16_img.jpg'
  import Img17 from '../../../../assets/client/customerReviews/17_img.jpg'
  import Img18 from '../../../../assets/client/customerReviews/18_img.jpg'
  import Img19 from '../../../../assets/client/customerReviews/19_img.jpg'
  import Img20 from '../../../../assets/client/customerReviews/20_img.jpg'

  import Video1 from '../../../../assets/client/customerReviews/1.mp4'
  import Video2 from '../../../../assets/client/customerReviews/2.mp4'
  import Video3 from '../../../../assets/client/customerReviews/3.mp4'
  import Video4 from '../../../../assets/client/customerReviews/4.mp4'
  import Video5 from '../../../../assets/client/customerReviews/5.mp4'
  import Video6 from '../../../../assets/client/customerReviews/6.mp4'
  import Video7 from '../../../../assets/client/customerReviews/7.mp4'
  import Video8 from '../../../../assets/client/customerReviews/8.mp4'
  import Video9 from '../../../../assets/client/customerReviews/9.mp4'
  import Video10 from '../../../../assets/client/customerReviews/10.mp4'
  import Video11 from '../../../../assets/client/customerReviews/11.mp4'
  import Video12 from '../../../../assets/client/customerReviews/12.mp4'
  import Video13 from '../../../../assets/client/customerReviews/13.mp4'
  import Video14 from '../../../../assets/client/customerReviews/14.mp4'
  import Video15 from '../../../../assets/client/customerReviews/15.mp4'
  import Video16 from '../../../../assets/client/customerReviews/16.mp4'
  import Video17 from '../../../../assets/client/customerReviews/17.mp4'
  import Video18 from '../../../../assets/client/customerReviews/18.mp4'
  import Video19 from '../../../../assets/client/customerReviews/19.mp4'
  import Video20 from '../../../../assets/client/customerReviews/20.mp4'

  import ReviewModal from './ReviewModal'

class ReviewsSlider extends Component {

    constructor(props){
        super(props)
        this.state={
            reviews: [
                {
                    id: 1,
                    name: "Whole Cell Customer",
                    desc: "They gave me a great deal and the man himself personally delivered it to my door",
                    image: Img1,
                    video: Video1
                },
                {
                    id: 2,
                    name: "Fred",
                    desc: "They gave me a great price and speedy service, I'll come again",
                    image: Img2,
                    video: Video2
                },
                {
                    id: 3,
                    name: "Whole Cell Customer",
                    desc: "Thanks to whole cell accessories for tablets and they always give me a good deal",
                    image: Img3,
                    video: Video3
                },
                {
                    id: 4,
                    name: "Whole Cell Customer",
                    desc: "I came here to get my phone fixed with my wife and they offer great service",
                    image: Img4,
                    video: Video4
                },
                {
                    id: 5,
                    name: "Michael",
                    desc: "I work here, and I love seeing new customers coming in, we do quick repairs and provide good deals on accessories",
                    image: Img5,
                    video: Video5
                },
                {
                    id: 6,
                    name: "Whole Cell Customer",
                    desc: "I bought 2 new phones, they offer great service with cheap prices",
                    image: Img6,
                    video: Video6
                },
                {
                    id: 7,
                    name: "Whole Cell Customer",
                    desc: "we fix phones has been a blessing to me, I broke my phone screen and had to get my laptop fixed but they did it on the same day",
                    image: Img7,
                    video: Video7
                },
                {
                    id: 8,
                    name: "Whole Cell Customer",
                    desc: "If you want to get your phone fixed or you want to buy phones come to whole cell accessories, let me tell you something you gonna get a good deal",
                    image: Img8,
                    video: Video8
                },
                {
                    id: 9,
                    name: "Whole Cell Customer",
                    desc: "whole cell accessories gave me a hook up on a good Iphone 7 Plus and a stylo",
                    image: Img9,
                    video: Video9
                },
                {
                    id: 10,
                    name: "Whole Cell Customer",
                    desc: "I just purchased Iphone Xr with 2 phone cases, great service come on down to get you one, bring your friends and family",
                    image: Img10,
                    video: Video10
                },
                {
                    id: 11,
                    name: "Whole Cell Customer",
                    desc: "came to whole cell accessories to get my daughter a phone for her birthday, leaving with 2 phones thanks to all, customer service is great and will recommend it to anyone",
                    image: Img11,
                    video: Video11
                },
                {
                    id: 12,
                    name: "carry",
                    desc: "please come on down to boost mobile store, if you have any trouble with the phone or looking for a good deal they'll take care of you",
                    image: Img12,
                    video: Video12
                },
                {
                    id: 13,
                    name: "Whole Cell Customer",
                    desc: "just want everybody know to come to accessories for tablets, staff takes care of you come see them",
                    image: Img13,
                    video: Video13
                },
                {
                    id: 14,
                    name: "Whole Cell Customer",
                    desc: "these guys help me so many times and they are very helpful, usually in and out here is quick, I love this guy thanks for taking care of me",
                    image: Img14,
                    video: Video14
                },
                {
                    id: 15,
                    name: "Whole Cell Customer",
                    desc: "I'm here at boost mobile at Lansing just got my new phone man, great service, great people, come on down to check them out",
                    image: Img15,
                    video: Video15
                },
                {
                    id: 16,
                    name: "Whole Cell Customer",
                    desc: "whole cell accessories at lansing gave me a great deal on my phones, repaired them, they both are working and great customer service and I just want to say thank you",
                    image: Img16,
                    video: Video16
                },
                {
                    id: 17,
                    name: "Whole Cell Customer",
                    desc: "hey, if you wanna get a new phone or want to get your phone fixed, come down to accessories for tablet they gonna take care of you man",
                    image: Img17,
                    video: Video17
                },
                {
                    id: 18,
                    name: "Whole Cell Customer",
                    desc: "If you want to get your phone fixed or you want to buy phones come to whole cell accessories, let me tell you something you gonna get a good deal",
                    image: Img18,
                    video: Video18
                },
                {
                    id: 19,
                    name: "Whole Cell Customer",
                    desc: "shout out to boost at Lansing, come get your phone, service is execellent here they hook me up",
                    image: Img19,
                    video: Video19
                },
                {
                    id: 20,
                    name: "K.C",
                    desc: "I just wanna give shout out to my boost people here at Lansing you know they hook me up with the phone and they got nice deals, nice employees here and I recommend that you go there",
                    image: Img20,
                    video: Video20
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
