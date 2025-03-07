import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './healthblog.css';


const HealthBlog = () => {
  return (
    <div>
      <div className="container1">
        <div className="health-carousel" style={{ height: '100px' , width : '80vw' , marginLeft:'9.5rem' , marginRight:'3.5rem' }}>
          <Carousel>
            <Carousel.Item>
              <img src="https://plus.unsplash.com/premium_photo-1661317288946-157b70e2edab?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 imgs" alt="Healthy Diet" />
              <Carousel.Caption>
                <h4>Healthy Diet</h4>
                <p>Eating a healthy diet helps you in keeping your health in good condition.....</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://plus.unsplash.com/premium_photo-1661761629601-bf9436d058d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Mental Health" />
              <Carousel.Caption>
                <h4>Mental Health</h4>
                <p>It has been proven in researches that YOGA can help us in overcoming mental health issues.....</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://images.unsplash.com/photo-1596954979045-24dfb4b89c0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Dengue-The Rising Threat" />
              <Carousel.Caption>
                <h4>Dengue-The Rising Threat</h4>
                <p>India is reporting a large number of dengue cases. The Health Ministry has laid down advisory for states.....</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>


      <div className="contentsofblog">
      <h2><b>Look Whats Trending !</b></h2>
        <div className="trending" style={{display:'flex' ,flexDirection:'row' , gap:'30px'}}>
          
          <div className="first">
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075422/Person-Experiencing-Acidity.webp" alt="" className='blog-image'/>
            <h5><b>HEALTH TODAY</b></h5>
            <h3><b>Acidity Problems? 14 Home Remedies That Can Help </b></h3>
            <p>By <span><b>Dr Prachi Garg</b></span></p>
          </div>
          <div className="second" style={{marginTop:'2rem'}}>
            <div className="second-1" style={{marginBottom:"1rem"}}>
              <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/16065300/Image-1-375x195.webp" alt="" className='blog-2-img'/>
              <h5><b>DOCTOR'S SPEAK / HOME REMEDIES</b></h5>
            <h3><b>Mornings Leaves</b></h3>
            <p>By <span><b>Dr Nikita Toshi</b></span></p>
            </div>

            <div className="second-1">
              <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/06/17082440/Chandraprabha-vati-375x223.webp" alt="" className='blog-2-img'/>
              <h5><b>AYURVEDA / DOCTOR'S SPEAK</b></h5>
            <h3><b>Chandraprabha Vati</b></h3>
            <p>By <span><b>Dr Ashok Pal</b></span></p>
            </div>
          </div>
        </div>

        <h2 style={{marginTop:'2rem', marginBottom:'2rem'}}><b>Explore By Category</b></h2>
        <div className="third">
          <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/03143039/Health-Today-1-2-e1668506427623.jpg" alt="" className='third-img'/>
          <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/03143042/Lifestyle-1-1-e1668506475164.jpg" alt="" className='third-img'/>
          <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/02074732/Wellness-1-e1668525839475.jpg" alt="" className='third-img'/>
        </div>


        <h2 style={{marginTop:'4rem'}}><b>Latest Blogs !</b></h2>
        <div className="fourth-content">
        <div className="fourth">
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/04/26135832/Hydrocortisone--560x320.jpg" alt="" className='blog-image-content'/>
            <h5><b> ARTHRITIS / ASTHMA / DIABETES </b></h5>
            <h3><b>हाइड्रोकार्टिसोन �... </b></h3>
            <p>By <span><b> Dr. Mayuri Pandey</b></span></p>
          </div>
        <div className="fourth">
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/05/20112111/594-560x320.jpg" alt="" className='blog-image-content'/>
            <h5><b>DOCTOR'S SPEAK / FEATURED</b></h5>
            <h3><b>Liquid Collagen: Understanding Its Potential Benef... </b></h3>
            <p>By <span><b>Dr. Shubham Pandey</b></span></p>
          </div>
        <div className="fourth">
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/05/20105715/593-560x320.jpg" alt="" className='blog-image-content'/>
            <h5><b>DOCTOR'S SPEAK / FEATURED</b></h5>
            <h3><b>How to Get Rid of Mice: Expert Tips and Strategies </b></h3>
            <p>By <span><b> Dr. Shubham Pandey</b></span></p>
          </div>
        <div className="fourth">
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/04/16070523/579-560x320.jpg" alt="" className='blog-image-content'/>
            <h5><b>DOCTOR'S SPEAK / FEATURED / WELLNESS</b></h5>
            <h3><b>Winter Rash: Understanding Causes and Research-Bas... </b></h3>
            <p>By <span><b>Dr. Nayana Shetty</b></span></p>
          </div>
        <div className="fourth">
            <img src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2024/05/16064814/584-560x320.jpg" alt="" className='blog-image-content'/>
            <h5><b>DOCTOR'S SPEAK / FEATURED / FOOD & NUTRITION</b></h5>
            <h3><b>Watercress: Uses, Benefits, Side Effects & Mor... </b></h3>
            <p>By <span><b>Dr Rajeev Singh</b></span></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HealthBlog;
