(this["webpackJsonpwhole-cell-online-site"]=this["webpackJsonpwhole-cell-online-site"]||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){e.exports=t.p+"static/media/review_video.4648aa56.mp4"},110:function(e,a,t){},111:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){e.exports=t.p+"static/media/warehouse.20d7cb9d.jpg"},139:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(16),l=t.n(r),s=(t(66),t(27)),c=t(22),i=t(4),d=t(5),m=t(7),u=t(6),p=t(50),f=t.n(p),g=t(150),v=t(151),E=(t(67),t(51)),h=t(28),b=t(152),N=t(141),w=t(142),y=t(143),j=t(144),O=t(145),M=t(146),C=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;Object(i.a)(this,t),(n=a.call(this,e)).onCloseModal=function(){n.setState({username:"",password:"",error:""})},n.onChange=function(e){e.preventDefault(),n.setState(Object(E.a)({},e.target.name,e.target.value))},n.loginHandler=function(){var e=n.state,a=e.username,t=e.password;"admin"===a&&"123"===t?(localStorage.setItem("token","daygcfjadsfjhabaksjdhk"),n.props.onLoginToggle(),n.setState({loggedin:!0,username:"",password:"",error:""}),window.location.reload()):n.setState({loggedin:!1,error:"username or password is incorrect"})};return n.state={username:"",password:"",loggedin:!1,error:""},n.onChange=n.onChange.bind(Object(h.a)(n)),n}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.loginToggle?o.a.createElement(b.a,{isOpen:!0,toggle:function(){return e.props.onLoginToggle()},centered:!0},o.a.createElement(N.a,{toggle:function(){return e.props.onLoginToggle()},style:{borderBottom:0}}),o.a.createElement(w.a,{cssModule:{"modal-body":"text-center"},style:{marginBottom:"50px"}},o.a.createElement(y.a,{style:{paddingLeft:"50px",paddingRight:"50px"}},o.a.createElement("h5",null,"Login"),o.a.createElement("br",null),o.a.createElement(j.a,{type:"text",placeholder:"Username(admin)",value:this.state.username,name:"username",onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement(j.a,{type:"password",placeholder:"Password(123)",value:this.state.password,name:"password",onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement(O.a,{onClick:function(){return e.loginHandler()}},"Login"),""!==this.state.error?o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(M.a,{style:{color:"red"}},this.state.error)):""))):null)}}]),t}(n.Component),k=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;Object(i.a)(this,t),(n=a.call(this,e)).onLoginToggle=function(){n.setState({loginToggle:!n.state.loginToggle}),n.loginElement.current.onCloseModal()},n.onLogout=function(){localStorage.removeItem("token"),window.location.reload()},n.getDate=function(){var e=new Date,a=e.getDate(),t=e.getMonth()+1,n=e.getFullYear(),o=new Array(7);return o[0]="Sunday",o[1]="Monday",o[2]="Tuesday",o[3]="Wednesday",o[4]="Thursday",o[5]="Friday",o[6]="Saturday",a<10&&(a="0"+a),t<10&&(t="0"+t),n+"/"+t+"/"+a+" "+o[e.getDay()]},n._onNavbarToggleClick=function(){n.setState({isNavbarCollapsed:!n.state.isNavbarCollapsed})};var r=!0;return null==localStorage.getItem("token")&&(r=!1),n.loginElement=o.a.createRef(),n.state={isNavbarCollapsed:!0,loginToggle:!1,loggedin:r},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){var a=window.scrollY<70?"navbar-body":"navbar-body-scrolled",t=window.scrollY<70?"list-bg-color":"remove-list-bg-color";e.setState({navbar_body:a,list_bg_color:t})}))}},{key:"_getNavbarToggleIcon",value:function(){return this.state.isNavbarCollapsed?o.a.createElement("i",{className:"fas fa-bars"}):o.a.createElement("i",{className:"fas fa-times"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:this.props.state},o.a.createElement(g.a,{className:"header-navbar",collapseOnSelect:!0,expand:"md",variant:"dark",fixed:"top"},o.a.createElement(v.a,null,o.a.createElement(g.a.Brand,{className:"logo",href:"/whole-cell-online/"},"Whole Cell",o.a.createElement("span",null," Accessories"))),o.a.createElement(g.a.Toggle,{children:this._getNavbarToggleIcon(),onClick:this._onNavbarToggleClick,className:"toggle","aria-controls":"responsive-navbar-nav"}),o.a.createElement(g.a.Collapse,{className:"list",id:"responsive-navbar-nav"},o.a.createElement(v.a,{className:"ml-auto"},o.a.createElement(g.a.Brand,{className:"date"},this.getDate()),this.state.loggedin?o.a.createElement(g.a.Brand,{className:"login",onClick:function(){return e.onLogout()}},o.a.createElement("i",{className:"fas fa-user"}),"\xa0Logout"):o.a.createElement(g.a.Brand,{className:"login",onClick:function(){return e.onLoginToggle()}},o.a.createElement("i",{className:"fas fa-user"}),"\xa0Login")))),o.a.createElement(C,{loginToggle:this.state.loginToggle,onLoginToggle:function(){return e.onLoginToggle()},ref:this.loginElement}))}}]),t}(n.Component),x=(t(80),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).getDate=function(){var e=new Date,a=e.getDate(),t=e.getMonth()+1,n=e.getFullYear(),o=new Array(7);return o[0]="Sunday",o[1]="Monday",o[2]="Tuesday",o[3]="Wednesday",o[4]="Thursday",o[5]="Friday",o[6]="Saturday",a<10&&(a="0"+a),t<10&&(t="0"+t),n+"/"+t+"/"+a+" "+o[e.getDay()]},n.state={state1:"header state1"},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){var a=window.scrollY<10?"header state1":"header state2";e.setState({state1:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.state1},o.a.createElement("video",{autoplay:"autoplay",muted:!0,loop:"loop",id:"video"},o.a.createElement("source",{src:f.a,type:"video/mp4"}),"Your browser does not support HTML5 video."),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"center-text"},o.a.createElement("h1",null,"Whole Cell Accessories"),o.a.createElement("h2",null,"Open To Public"),o.a.createElement("h2",null,"Never Pay Retail!!"))),o.a.createElement("div",{className:"page-border top"}),o.a.createElement("div",{className:"page-border bottom"}),o.a.createElement("div",{className:"page-border left border-pad"}),o.a.createElement("div",{className:"page-border right border-pad"}),o.a.createElement("div",{className:"page-border left"}),o.a.createElement("div",{className:"page-border right"})),o.a.createElement(k,{state:this.state.state1}))}}]),t}(n.Component)),S=t(147),T=t(148),L=(t(81),t(82),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"accessories"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("h1",{"data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Accessories"),o.a.createElement("p",{"data-aos":"fade-left","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"we offer wide range of Mobile phone Accessories such as Bluetooth Handsfree, Battery Power Packs, Mobile Cases & Covers, Mobile Chargers, Mobile Speakers and Stylus Wired Headsets."))))))}}]),t}(n.Component)),W=t(57),q=t.n(W),B=(t(83),t(84),n.Component,t(85),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"repair-banner"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"wrapper"}))))}}]),t}(n.Component)),R=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(B,null),o.a.createElement("div",{className:"repair"},o.a.createElement("video",{autoplay:"autoplay",muted:!0,loop:"loop",id:"video"},o.a.createElement("source",{src:q.a,type:"video/webm"}),"Your browser does not support HTML5 video."),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("h1",{"data-aos":"fade-left","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Repair"),o.a.createElement("p",{"data-aos":"fade-right","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"Our aim is to offer outstanding services straight to your home or to your office to conduct repair works or troubleshoot your smart phones. For us, the repair work is not just about finding the fault and fixing it, it is about quality parts that are made to last long. We make sure that each of the parts used for repairing are brand new and of the highest quality.")))))}}]),t}(n.Component),V=(t(86),t(87),t(88),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"activation-banner"},o.a.createElement("div",{className:"bgimg"})))}}]),t}(n.Component)),A=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(V,null),o.a.createElement("div",{className:"activation"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("h1",{"data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Activation"),o.a.createElement("p",{"data-aos":"fade-left","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"Activate your phone or SIM card online if you purchased it with a new wireless account, an upgrade, or added a new line."))))))}}]),t}(n.Component),D=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"services"},o.a.createElement("div",{className:"bgimg"},o.a.createElement(S.a,{className:"content"},o.a.createElement(T.a,{md:4,xs:12,className:"acc-col col"},"Accessories"),o.a.createElement(T.a,{md:4,xs:12,className:"rep-col col"},"Repair"),o.a.createElement(T.a,{md:4,xs:12,className:"act-col col"},"Activation")))),o.a.createElement(L,null),o.a.createElement(R,null),o.a.createElement(A,null))}}]),t}(n.Component),I=(t(89),t(90),t(91),t(92),t(58)),F=t.n(I),_=(t(108),t(30)),P=t.n(_),Y=(t(109),t(110),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=o.a.createElement("button",{className:"close",style:{position:"absolute",top:"15px",right:"15px",color:"white"},onClick:function(){return e.props.toggleImgModal()}},"\xd7");return o.a.createElement(b.a,{modalClassName:"image-modal",isOpen:this.props.imgModal,centered:!0,external:a,size:"lg",toggle:function(){return e.props.toggleImgModal()}},o.a.createElement(w.a,{className:"body"},o.a.createElement("div",{className:"container"},o.a.createElement("img",{className:"img",alt:"users here",src:P.a,height:"100%",width:"100%"}))))}}]),t}(n.Component)),H=(t(111),t(21)),J=t.n(H),z=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=o.a.createElement("button",{className:"close",style:{position:"absolute",top:"15px",right:"15px",color:"white"},onClick:function(){return e.props.toggleVideoModal()}},"\xd7");return o.a.createElement(b.a,{modalClassName:"video-modal",isOpen:this.props.videoModal,centered:!0,external:a,size:"lg",toggle:function(){return e.props.toggleVideoModal()}},o.a.createElement(w.a,{className:"body"},o.a.createElement("div",{className:"container"},o.a.createElement(J.a,{className:"video",controls:!0,url:"https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s"}))))}}]),t}(n.Component),U=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggleImgModal=function(){n.setState({imgModal:!n.state.imgModal})},n.toggleVideoModal=function(){n.setState({videoModal:!n.state.videoModal})},n.state={imgModal:!1,videoModal:!1},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.filteredModal.map((function(a){return o.a.createElement(b.a,{modalClassName:"review-modal",isOpen:e.props.reviewModal,toggle:function(){return e.props.toggleReviewModal()},centered:!0,backdropClassName:"review-modal-backdrop"},o.a.createElement(N.a,{toggle:function(){return e.props.toggleReviewModal()},className:"modal-header modal-title"},o.a.createElement("img",{className:"rounded-circle",alt:"users here",src:"https://source.unsplash.com/random/".concat(a.id),height:56,width:56}),o.a.createElement("h5",null,a.username)),o.a.createElement(w.a,null,o.a.createElement("h5",{className:"text-center"},"5 Stars"),o.a.createElement("p",{className:"text-center"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem ex nesciunt iste quia, dignissimos non debitis enim similique! Repudiandae facilis vel adipisci dolores iusto!"),o.a.createElement("div",{className:"gallery"},o.a.createElement("img",{className:"img",alt:"review here",src:P.a,height:100,width:100,onClick:function(){return e.toggleImgModal()}}),o.a.createElement("div",{className:"video-container"},o.a.createElement(J.a,{className:"video",controls:!0,url:"https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s",width:100,height:100}),o.a.createElement("div",{className:"video-wrapper",onClick:function(){return e.toggleVideoModal()}},o.a.createElement("i",{className:"far fa-play-circle fa-4x video-icon"})))),o.a.createElement(z,{videoModal:e.state.videoModal,toggleVideoModal:e.toggleVideoModal}),o.a.createElement(Y,{imgModal:e.state.imgModal,toggleImgModal:e.toggleImgModal})))})))}}]),t}(n.Component),$=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){n.setState({reviews:e})}))},n.toggleReviewModal=function(e){n.setState({reviewModal:!n.state.reviewModal,filteredModal:n.state.reviews.filter((function(a){return a.id===e}))})},n.state={reviews:[],filteredModal:[],reviewModal:!1},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a={infinite:!1,speed:1e3,arrows:!0,slidesToShow:5,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:3}},{breakpoint:1100,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}}]};return o.a.createElement("div",{className:"container reviews-slider"},0===this.state.reviews.length?o.a.createElement("div",{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")):o.a.createElement(F.a,a,this.state.reviews.map((function(a){return o.a.createElement("div",{className:"out",key:a.id},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"rounded-circle img",alt:"users here",src:"https://source.unsplash.com/random/".concat(a.id),height:56,width:56}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title card-title"},a.username),o.a.createElement("small",{className:"card-text text-sm-center"},"5 Stars"),o.a.createElement("br",null),o.a.createElement("button",{value:a.id,className:"btn btn-outline-light see-more",variant:"primary",onClick:function(){return e.toggleReviewModal(a.id)}},"See More"),o.a.createElement(U,{reviewModal:e.state.reviewModal,toggleReviewModal:e.toggleReviewModal,filteredModal:e.state.filteredModal}))))}))))}}]),t}(n.Component),G=(t(128),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"customer-reviews"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("div",null),o.a.createElement("div",{className:"sub-content"},o.a.createElement("span",null,o.a.createElement("h1",{"data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Customer Reviews"),o.a.createElement("p",{"data-aos":"fade-left","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa id mollitia temporibus ipsa quis repellat dolorum laborum error inventore nam."))),o.a.createElement("div",null,o.a.createElement($,null)))))))}}]),t}(n.Component)),K=(t(129),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggleVideoModal=function(){n.setState({videoModal:!n.state.videoModal})},n.state={videoModal:!1},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"staff-testimonials"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("span",null,o.a.createElement("h1",{"data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Franchise/Staff Testimonials"),o.a.createElement("p",{"data-aos":"fade-left","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa id mollitia temporibus ipsa quis repellat dolorum laborum error inventore nam.")),o.a.createElement("div",{className:"video-container","data-aos":"fade-up","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},o.a.createElement(J.a,{className:"video",controls:!0,url:"https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s",width:200,height:200}),o.a.createElement("div",{className:"video-wrapper",onClick:function(){return e.toggleVideoModal()}},o.a.createElement("i",{className:"far fa-play-circle fa-5x video-icon"}))),o.a.createElement("div",{className:"video-container","data-aos":"fade-up","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},o.a.createElement(J.a,{className:"video",controls:!0,url:"https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s",width:200,height:200}),o.a.createElement("div",{className:"video-wrapper",onClick:function(){return e.toggleVideoModal()}},o.a.createElement("i",{className:"far fa-play-circle fa-5x video-icon"}))),o.a.createElement("div",{className:"video-container","data-aos":"fade-up","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},o.a.createElement(J.a,{className:"video",controls:!0,url:"https://www.youtube.com/watch?v=ocNWpcLa9W4&t=47s",width:200,height:200}),o.a.createElement("div",{className:"video-wrapper",onClick:function(){return e.toggleVideoModal()}},o.a.createElement("i",{className:"far fa-play-circle fa-5x video-icon"}))),o.a.createElement(z,{videoModal:this.state.videoModal,toggleVideoModal:this.toggleVideoModal}))))))}}]),t}(n.Component)),Q=(t(130),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"be-the-boss"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("div",null),o.a.createElement("div",{className:"sub-content"},o.a.createElement("span",null,o.a.createElement("h1",{"data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Be The Boss"),o.a.createElement("p",{"data-aos":"fade-left","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat iusto, molestias laborum, at corporis ipsa minima temporibus nemo aliquid illo cum. Enim sint aspernatur ipsa recusandae, neque quas harum necessitatibus perspiciatis explicabo facere, temporibus quod, nesciunt exercitationem sed. Voluptas doloremque, facere enim repudiandae vero earum voluptate? Facere, assumenda aliquam."))),o.a.createElement("div",null))))))}}]),t}(n.Component)),X=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"client"},o.a.createElement("div",{className:"bgimg"},o.a.createElement(S.a,{className:"content"},o.a.createElement(T.a,{md:4,xs:12,className:"cr-col col"},"Customer Reviews"),o.a.createElement(T.a,{md:4,xs:12,className:"st-col col"},"Franchise/Staff Testimonials"),o.a.createElement(T.a,{md:4,xs:12,className:"btb-col col"},"Be The Boss")))),o.a.createElement(G,null),o.a.createElement(K,null),o.a.createElement(Q,null))}}]),t}(n.Component),Z=t(149),ee=(t(131),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"social-links"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement(Z.a,{fluid:!0,className:"wrapper"},o.a.createElement("h1",{className:"text-center","data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Social Links"),o.a.createElement(S.a,{className:"row align-items-center"},o.a.createElement(T.a,{className:"text-center"},o.a.createElement("a",{href:"https://www.youtube.com"},o.a.createElement("i",{className:"fab fa-youtube fa-3x","data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"}))),o.a.createElement(T.a,{className:"text-center"},o.a.createElement("a",{href:"https://www.instagram.com"},o.a.createElement("i",{className:"fab fa-instagram fa-3x","data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"}))),o.a.createElement(T.a,{className:"text-center"},o.a.createElement("a",{href:"https://www.google.com"},o.a.createElement("i",{className:"fab fa-google fa-3x","data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"}))),o.a.createElement(T.a,{className:"text-center"},o.a.createElement("a",{href:"https://www.facebook.com"},o.a.createElement("i",{className:"fab fa-facebook-f fa-3x","data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"})))),o.a.createElement(S.a,{className:"row align-items-center"},o.a.createElement(T.a,{className:"text-center"},o.a.createElement("a",{href:"https://www.snapchat.com"},o.a.createElement("i",{className:"fab fa-snapchat-ghost fa-3x","data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"}))),o.a.createElement(T.a,{className:"text-center"},o.a.createElement("a",{href:"https://www.pinterest.com"},o.a.createElement("i",{className:"fab fa-pinterest-p fa-3x","data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"}))),o.a.createElement(T.a,{className:"text-center"}),o.a.createElement(T.a,{className:"text-center"})),o.a.createElement(S.a,{className:"row align-items-center"},o.a.createElement(T.a,{className:"text-center"}),o.a.createElement(T.a,{className:"text-center"}),o.a.createElement(T.a,{className:"text-center"}),o.a.createElement(T.a,{className:"text-center"})))))))}}]),t}(n.Component)),ae=(t(132),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"join-team"},o.a.createElement("div",{className:"bgimg"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("div",{className:"content"},o.a.createElement("div",null),o.a.createElement("div",{className:"sub-content"},o.a.createElement(Z.a,{fluid:!0},o.a.createElement("span",null,o.a.createElement("h1",{"data-aos":"fade-right","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"Join Our Team"),o.a.createElement("p",{"data-aos":"fade-left","data-aos-offset":"80","data-aos-delay":"800","data-aos-duration":"1000"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat iusto, molestias laborum, at corporis ipsa minima temporibus nemo aliquid illo cum. Enim sint aspernatur ipsa recusandae, neque quas harum necessitatibus perspiciatis explicabo facere, temporibus quod, nesciunt exercitationem sed. Voluptas doloremque, facere enim repudiandae vero earum voluptate? Facere, assumenda aliquam.")))),o.a.createElement("div",{className:"bottom-content"},o.a.createElement(Z.a,{fluid:!0,className:"wrapper"},o.a.createElement(S.a,{className:"row align-items-center"},o.a.createElement(T.a,{className:"text-center"},o.a.createElement("h5",{"data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"We Fix Phones")),o.a.createElement(T.a,{className:"text-center"},o.a.createElement("h5",{"data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"We Sell Accessories")),o.a.createElement(T.a,{className:"text-center"},o.a.createElement("h5",{"data-aos":"fade-up","data-aos-offset":"60","data-aos-delay":"200","data-aos-duration":"1000"},"We Activate Phones")))))))))}}]),t}(n.Component)),te=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ee,null),o.a.createElement(ae,null))}}]),t}(n.Component),ne=(t(133),n.Component,t(134),n.Component,t(135),t(136),n.Component,function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(D,null),o.a.createElement(X,null),o.a.createElement(te,null))}}]),t}(n.Component)),oe=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement(ne,null))}}]),t}(n.Component);var re=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:oe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,a,t){e.exports=t.p+"static/media/review_img.5244427d.jpg"},50:function(e,a,t){e.exports=t.p+"static/media/bg.04bd99a1.mp4"},57:function(e,a,t){e.exports=t.p+"static/media/repair.a7427fea.webm"},61:function(e,a,t){e.exports=t(139)},66:function(e,a,t){},67:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){e.exports=t.p+"static/media/activation_video.37830d2f.mp4"},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},92:function(e,a,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.4ecbe694.chunk.js.map