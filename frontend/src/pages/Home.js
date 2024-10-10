import React from 'react'
import { Link } from 'react-router-dom'
import landingpageimge from "../Assets/Landing-page.webp"
import roundedimg1 from "../Assets/roundedimg1.jpeg"
import roundedimg2 from "../Assets/roundedimg2.jpeg"
import roundedimg3 from "../Assets/roundedimg3.jpeg"
import FEATURETTES1 from "../Assets/FEATURETTES-Img1.avif"
import FEATURETTES2 from "../Assets/FEATURETTES-Img2.jpg"
import FEATURETTES3 from "../Assets/FEATURETTES-Img3"

const Home = () => {
  const firstPartData = [
    {
      img: roundedimg1, 
      title: 'Fast Food', 
      description: 'We offer a variety of fast food options that are perfect for those on-the-go moments.' 
    },
    {
      img: roundedimg2, 
      title: 'Desi Food', 
      description: 'Experience the rich and aromatic spices of our desi food, crafted with traditional recipes.' 
    },
    {
      img: roundedimg3, 
      title: 'Sweets', 
      description: 'End your meal with our delectable sweets, our treats are perfect for satisfying your sweet tooth.' 
    },
  ]

  return (
    <div>
      <div className='image-container'>
        <img alt='' className='mb-4' src={landingpageimge} />
      </div>
      <main>
        <div className="container marketing mt-5" >
          <div className="row" >
            {firstPartData?.map((item, index)=>(
            <div key={index} className="col-lg-4 " >

              <img src={item.img} className="rounded-carousel" alt="" />

              <h2 className="fw-normal">{item.title}</h2>
              <p>{item.description}</p>
            </div>
            ))}
          </div>{/* /.row */}



          {/* START THE FEATURETTES */}

          <hr className="featurette-divider" />

          <div className="row featurette" >
            <div className="col-md-7 col-sm-12 FEATURETTES-css my-sm-4" style={{ marginTop: '20px' }}>
              <h2 className="featurette-heading fw-normal lh-1">Fast Foods <span className="text-body-secondary"><br /><i>First Bites Extravaganza</i></span></h2>
              <p className="lead">Culinary creations that will tantalize your taste buds and redefine your fast-food experience!</p>
                            <Link to={'/shops'}><button type="button" class="btn btn-info btn-rounded">View Our Shops</button></Link>
            </div>

            <div className="col-md-5">
              <img src={FEATURETTES1} className="img-fluid FEATURETTES-img" alt="" />
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-5">
              <img src={FEATURETTES2} className="img-fluid FEATURETTES-img" alt="" />
            </div>
            <div className="col-md-7 col-sm-12 FEATURETTES-css my-sm-4" style={{ marginTop: '20px' }}>
              <h2 className="featurette-heading fw-normal lh-1">Desi Foods <span className="text-body-secondary"><br /><i>Experience the rich and aromatic spices</i></span></h2>
              <p className="lead">Our desi food selection promises an authentic and unforgettable dining experience!</p>
                            <Link to={'/shops'}><button type="button" class="btn btn-info btn-rounded">View Our Shops</button></Link>
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette" >
            <div className="col-md-7 col-sm-12 FEATURETTES-css my-sm-4" style={{ marginTop: '20px' }}>
              <h2 className="featurette-heading fw-normal lh-1">Sweets <span className="text-body-secondary"><br/> <i>End your meal with our delectable sweets</i></span></h2>
              <p className="lead">Our treats are perfect for satisfying your sweet tooth!</p>
              <Link to={'/shops'}><button type="button" class="btn btn-info btn-rounded">View Our Shops</button></Link>
            </div>

            <div className="col-md-5">
              <img src={FEATURETTES3} className="img-fluid FEATURETTES-img" alt="" />
            </div>
          </div>
          <hr className="featurette-divider" />

        </div>
      </main>

    </div>
  )
}

export default Home
