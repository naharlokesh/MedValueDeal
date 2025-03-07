import React from 'react';
import './Home.css';
import './responsive.css';
import InfoSection from './InfoSection';
import { Link } from 'react-router-dom';
// import Slider1 from '../Carousel/Slider1';
// import Slider2 from '../Carousel/Slider2';
const HomePage = () => {
  return (
    <div>
      <div id="looking">
        <div className="looking-h3">
          <h3>What are you looking for?</h3>
        </div>
        <div className="looking-img">
          <div>
            <Link to="/Medicine">
              <img src="https://medvalue5.web.app/images/looking/1.jpg" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/LabTest">
              <img src="https://medvalue5.web.app/images/looking/2.jpg" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/HealthCare">
              <img src="https://medvalue5.web.app/images/looking/3.jpg" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/MedRush">
              <img src="https://medvalue5.web.app/images/looking/4.jpg" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/HealthCare">
              <img src="https://medvalue5.web.app/images/looking/5.jpg" alt="" />
            </Link>          </div>
          <div>
            <Link to="/Cart">
              <img src="https://medvalue5.web.app/images/looking/6.jpg" alt="" />
            </Link>
          </div>
          <div>
            <Link to="/Cart">
              <img src="https://medvalue5.web.app/images/looking/7.jpg" alt="" />
            </Link>
          </div>
          <div>
            <Link to='/Cart'>
              <img src="https://medvalue5.web.app/images/looking/8.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div id="offer">
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/836fef100bc-YAYY550.jpg" alt="" />
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg" alt="" />
      </div>
      <div className="offerH"><h1><b>Offers Just for You</b></h1></div>
      <div id="offer2">
        <a href="1"><img src="https://medvalue5.web.app/images/offer/1.jpg" alt="" /></a>
        <a href="2"><img src="https://medvalue5.web.app/images/offer/2.jpg" alt="" /></a>
        <Link to="/Login">
          <img src="https://medvalue5.web.app/images/offer/3.jpg" alt="" />
        </Link>
      </div>
      <div className="offerH2"><h1><b>Payment Offers</b></h1></div>
      <div id="offer3">
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0" alt="" />
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0" alt="" />
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0" alt="" />
      </div>

      {/* <div className="top">
        <div className="container">
          <div className="slide-container">
            <div className="slide-img">
              <img src="./images/slider1/s1.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s2.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s3.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s4.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s5.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s7.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s6.jpg" alt="" />
            </div>
            <div className="slide-img">
              <img src="./images/slider1/s8.jpg" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <Slider1/> */}
      {/* <div id="cat">
        <div><h2><b>Shop By Categories</b></h2></div>
      </div> */}
      {/* <div className="slider">
        <div className="wrapper">
          <FontAwesomeIcon id="left" icon={faAngleLeft} />
          <div className="carousel" id="slider_img">
            <img src="https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0" alt="img" draggable="false" />
            <img src="https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0" alt="img" draggable="false" />
            <img src="https://cms-contents.pharmeasy.in/carousel_item/62668bab7a1-AccuChek-min.png?dim=1440x0" alt="img" draggable="false" />
            <img src="https://cms-contents.pharmeasy.in/carousel_item/d0f595be419-Savlonv2.png?dim=1440x0" alt="img" draggable="false" />
            <img src="https://cms-contents.pharmeasy.in/carousel_item/3c344faad99-App_Featured-J.jpg?dim=1440x0" alt="img" draggable="false" />
            <img src="https://cms-contents.pharmeasy.in/carousel_item/d3481485e73-App_stayfree.jpg?dim=1440x0" alt="img" draggable="false" />
            <img src="https://cms-contents.pharmeasy.in/carousel_item/f2d61678901-Ensure.png?dim=1440x0" alt="img" draggable="false" />
            
          </div>
          <FontAwesomeIcon id="right" icon={faAngleRight} />
        </div>
      </div> */}

      {/* <Carousel/> */}
      {/* <Slider2/> */}
      <div className="banner-4">
        <a href="3"><img src=' https://medvalue5.web.app/images/offer/banner.jpg' alt=""></img></a>
      </div>

      <div id="concern">
        <div className="con-1">
          <h1><b>Shop by Concern</b></h1>
          <p>Products are handpicked by experts</p>
        </div>
        <div className="con-2">
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0" alt="" />
            <h5>Skin Care</h5>
          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0" alt="" />
            <h5>Vitamins & Supplements</h5>
          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0" alt="" />
            <h5>Diabetes Care & Sugar</h5>
          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0" alt="" />
            <h5>Cardiac Care</h5>
          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0" alt="" />
            <h5>Baby & Mom Care</h5>
          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0" alt="" />
            <h5>Lifestyle Disorders</h5>
          </div>
          <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0" alt="" />
            <h5> LifeStyle Disorder</h5>
          </div>
          {/* <div>
            <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/59c8cc6677a-Weight_care.png?dim=128x0" alt="" />
            <h5>Weight Loss</h5>
          </div> */}
        </div>
      </div>

      <div id="health">
        <div className="health-1">
          <h2><b>Health Articles</b>
          </h2>
          {/* <p>Get up-to-date information from our healthcare experts</p> */}
        </div>
        <div className="health-2">

          <a href="4"><div><img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125332/12-5.jpg?dim=1440x0" alt=""></img>
            <p>Benefits of Bakasana ( Crane Pose) and How to Do it By Dr. Ankit Sankhe</p>
          </div></a>
          {/* 
            <a href=""><div><img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125628/6-3.jpg?dim=1440x0" alt=""></img>
              <p>Benefits of Bakasana ( Crane Pose) and How to Do it By Dr. Ankit Sankhe</p>
            </div></a> */}

          <a href="5"><div><img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125500/9-3.jpg?dim=1440x0" alt=""></img>
            <p>Benefits of Bakasana ( Crane Pose) and How to Do it By Dr. Ankit Sankhe</p>
          </div></a>

          <a href="6"><div><img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125758/19.jpg?dim=1440x0" alt=""></img>
            <p>Benefits of Bakasana ( Crane Pose) and How to Do it By Dr. Ankit Sankhe</p></div></a>

          <a href="6"><div><img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125931/4-6.jpg?dim=1440x0" alt=""></img>
            <p>Benefits of Bakasana ( Crane Pose) and How to Do it By Dr. Ankit Sankhe</p>
          </div></a>
        </div>
      </div>

      <div className="banner-2">
        <a href="7"><img src='https://medvalue5.web.app/images/offer/b2.jpg' alt=""></img></a>
      </div>

      <div className="banner-3">
        <a href="8"><img src='https://medvalue5.web.app/images/offer/b3.jpg' alt=""></img></a>
      </div>


      <div className="customer-comments">
        <div className="con-1">
          <h1><b>What Our Customers Have To Say</b></h1>
        </div>
        <div className="comments">
          <div className="person">
            <h5><b>Ramjee Rai</b></h5>
            <p>April 16,2023</p>

            <div className="comt">
              <p><span><i class="fa-solid fa-quote-left"></i></span><br></br>The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.</p>
            </div>
          </div>

          <div className="person">
            <h5><b>Dipak Mourya</b></h5>
            <p>August 15,2024</p>

            <div className="comt">
              <p><span><i class="fa-solid fa-quote-left"></i></span><br></br>Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.</p>
            </div>
          </div>

          <div className="person">
            <h5><b>Lokesh Nahar</b></h5>
            <p>February 19,2023</p>

            <div className="comt">
              <p><span><i class="fa-solid fa-quote-left"></i></span><br></br>This app is a game changer for me. I am unable to go out always to buy medicinal products. Pharmeasy gives me the last liberty to shop essential healthcare products from home. The app is very user friendly and me being an elderly person do not find any difficulty in using it. They deliver well in time. Thanks😊</p>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
    </div>
  );
};

export default HomePage;
