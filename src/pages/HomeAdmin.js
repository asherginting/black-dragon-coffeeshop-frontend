import '../assets/css/home.css';
import { FaCheckCircle, FaCheck, FaUserAlt, FaHeart, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import teamwork from '../assets/images/team-work.png';
import Vector from '../assets/images/Vector.png';
import Layout from '../layouts/Layout';
import partner1 from '../assets/images/partner (1).png';
import partner2 from '../assets/images/partner (2).png';
import partner3 from '../assets/images/partner (3).png';
import partner4 from '../assets/images/partner (4).png';
import partner5 from '../assets/images/partner (5).png';
import userPhoto1 from '../assets/images/user (1).png';
import userPhoto2 from '../assets/images/user (2).png';
import userPhoto3 from '../assets/images/user (3).png';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const HomeAdmin = () => {
  const navigate = useNavigate();
  return (
    <Layout>
    <header className="header-homepage home">
      <div className="opacity">
        <div className='container'>
        <div className="row">
        <form className="col-lg-7 col-12">
          <h1>Start Your Day <br/> with Coffee and Good Meals </h1>
          <p>We provide high quality beans, good taste, and healthy <br/> meals made by love just for you. Start your day with us <br/> for a bigger smile!</p>
          <button onClick={() => navigate('/products')} type='submit' className="btn btn-secondary" aria-label="explore">Get Started</button>
        </form>
          <div className='text-center m-0'>
            <div className="input-group rounded">
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>

    <main className='home-page'>
      <section className='container info'>
        <div className='row p-2 p-lg-4'>
          <div className='col-4 d-flex justify-content-center py-5 px-1 px-lg-5 info-content'>
            <div className='d-flex align-items-center justify-content-center me-1 me-md-4 bg-secondary icon-info'>
              <FaUserAlt />
            </div>
            <div className='text text-start'>
              <div className='fw-bold'>90+</div>
              <div>Staff</div>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center py-5 px-1 px-lg-5 info-content'>
            <div className='d-flex align-items-center justify-content-center me-1 me-md-4 bg-secondary icon-info'>
              <FaHeart />
            </div>
            <div className='text text-start'>
              <div className='fw-bold'>30+</div>
              <div>Store</div>
            </div>
          </div>
          <div className='col-4 d-flex justify-content-center py-5 px-1 px-lg-5'>
            <div className='d-flex align-items-center justify-content-center me-1 me-md-4 bg-secondary icon-info'>
              <FaMapMarkerAlt />
            </div>
            <div className='text text-start'>
              <div className='fw-bold'>880+</div>
              <div>Customers</div>
            </div>
          </div>
        </div>
      </section>
      <section className='container second-section'>
        <div className='row align-items-center mb-lg-5'>
          <div className='col-12 col-lg-7 d-flex justify-content-center'>
          <img src={teamwork} alt="Team-Work" className='img-fluid' />
          </div>
          <div className='col-12 col-lg-5'>
            <h2>We Provide Good Coffee and Healthy Meals</h2>
            <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <ul className='list-group'>
              <li> <FaCheckCircle color='#2FAB73'/> High quality beans</li>
              <li> <FaCheckCircle color='#2FAB73'/> Healthy meals, you can request the ingredients</li>
              <li> <FaCheckCircle color='#2FAB73'/> Chat with our staff to get better experience for ordering</li>
              <li> <FaCheckCircle color='#2FAB73'/> Free member card with a minimum purchase of IDR 200.000.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='third section bg-light'>
        <div className='container'>
          <div className='text-center py-5'>
            <h2>Here is People Favorite</h2>
            <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
          </div>
          <div className='row '>
            <div className='px-lg-3 col-12 col-md-4'>
              <div className='product-card border'>
                <div className='product-circle mx-auto my-5'></div>
                <h4 className='py-4 text-center'>Hazelnut Latte</h4>
                <div className='d-flex justify-content-center'>
                  <ul className='list-group'>
                    <li><FaCheck color='#2FAB73'/> Hazelnut Syrup</li>
                    <li><FaCheck color='#2FAB73'/> Vanilla Whipped Cream</li>
                    <li><FaCheck color='#2FAB73'/> Ice</li>
                    <li><FaCheck color='#2FAB73'/> Slice Banana on Top</li>
                  </ul>
                </div>
                <div className='text-center order'>
                  <div className='price py-4'>IDR. 25.000</div>
                  <button className='btn btn-secondary mb-5'>Order Now</button>
                </div>
              </div>
            </div>
            <div className='px-lg-3 col-12 col-md-4'>
              <div className='product-card border'>
                <div className='product-circle mx-auto my-5'></div>
                <h4 className='py-4 text-center'>Pinky Promise</h4>
                <div className='d-flex justify-content-center'>
                  <ul className='list-group'>
                    <li><FaCheck color='#2FAB73'/> 1 Shot of Coffee</li>
                    <li><FaCheck color='#2FAB73'/> Vanilla Whipped Cream</li>
                    <li><FaCheck color='#2FAB73'/> Chocolate Biscuits</li>
                    <li><FaCheck color='#2FAB73'/> Strawberry Syrup</li>
                    <li><FaCheck color='#2FAB73'/> Sliced strawberry on Top</li>
                  </ul>
                </div>
                <div className='text-center order'>
                  <div className='price py-4'>IDR. 25.000</div>
                  <button className='btn btn-secondary mb-5'>Order Now</button>
                </div>
              </div>
            </div>
            <div className='px-lg-3 col-12 col-md-4'>
              <div className='product-card border'>
                <div className='product-circle mx-auto my-5'></div>
                <h4 className='py-4 text-center'>Chicken Wings</h4>
                <div className='d-flex justify-content-center'>
                  <ul className='list-group'>
                    <li><FaCheck color='#2FAB73'/> Wings</li>
                    <li><FaCheck color='#2FAB73'/> Drum Sticks</li>
                    <li><FaCheck color='#2FAB73'/> Mayonaise and Lemon</li>
                    <li><FaCheck color='#2FAB73'/> Hot Fried</li>
                    <li><FaCheck color='#2FAB73'/> Secret Recipe</li>
                    <li><FaCheck color='#2FAB73'/> Buy 1 Get 1 only for Dine in</li>
                  </ul>
                </div>
                <div className='text-center order'>
                  <div className='price py-4'>IDR. 25.000</div>
                  <button className='btn btn-secondary mb-5'>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='four section bg-light'>
        <div className='container'>
        <div className='text-center py-5'>
            <h2>Visit Our Store in the <br/> Spot on the Map Below</h2>
            <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
            <br/>
            <img src={Vector} alt="Team-Work" className='img-fluid mt-5' />
          </div>
        </div>
      </section>
      <section className='five section bg-light'>
        <div className='container'>
        <div className='text-center py-5'>
            <h2>Our Partner</h2>
            <br/>
            <div className='row align-items-center'>
              <div className='col'>
                <img className='img-fluid' src={partner1} alt="Amazon" />
              </div>
              <div className='col'>
                <img className='img-fluid' src={partner2} alt="Amazon" />
              </div>
              <div className='col'>
                <img className='img-fluid' src={partner3} alt="Amazon" />
              </div>
              <div className='col'>
                <img className='img-fluid' src={partner4} alt="Amazon" />
              </div>
              <div className='col'>
                <img className='img-fluid' src={partner5} alt="Amazon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='six section bg-light'>
        <div className='container'>
          <div className='text-center head-review mx-auto'>
            <h2>Loved by Thousands of Happy Customer</h2>
            <p>These are the stories of our customers who have visited us with great pleasure.</p></div>
          <div className='row g-1'>
            <div className='col-12 col-lg-4 p-2'>
              <div className='review-card p-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div style={{ backgroundImage: `url(${userPhoto1})` }} className='user-photo'></div>
                    <div className='ms-3'>
                      <h5 className='p-0 m-0'>Viezh Robert</h5>
                      <p className='p-0 m-0'>Warsaw, Poland</p>
                    </div>
                  </div>
                  <span className='text-end'>4.5 <FaStar className='text-secondary' /></span>
                </div>
                <p className='mt-3'>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
              </div>
            </div>
            <div className='col-12 col-lg-4 p-2'>
              <div className='review-card p-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div style={{ backgroundImage: `url(${userPhoto2})` }} className='user-photo'></div>
                    <div className='ms-3'>
                      <h5 className='p-0 m-0'>Viezh Robert</h5>
                      <p className='p-0 m-0'>Warsaw, Poland</p>
                    </div>
                  </div>
                  <span className='text-end'>4.5 <FaStar className='text-secondary' /></span>
                </div>
                <p className='mt-3'>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
              </div>
            </div>
            <div className='col-12 col-lg-4 p-2'>
              <div className='review-card p-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <div style={{ backgroundImage: `url(${userPhoto3})` }} className='user-photo'></div>
                    <div className='ms-3'>
                      <h5 className='p-0 m-0'>Viezh Robert</h5>
                      <p className='p-0 m-0'>Warsaw, Poland</p>
                    </div>
                  </div>
                  <span className='text-end'>4.5 <FaStar className='text-secondary' /></span>
                </div>
                <p className='mt-3'>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-between page-info-list'>
            <div>
              <span className='page-info ms-2 my-5 px-4  bg-secondary'></span>
              <span className='page-info bg-primary ms-3 px-2 dot-page'></span>
              <span className='page-info bg-primary ms-3 px-2 dot-page'></span>
              <span className='page-info bg-primary ms-3 px-2 dot-page'></span>
            </div>
            <div>
              <button className='btn btn-page-info'><FiArrowLeft /></button>
              <button className='btn btn-page-info ms-3'><FiArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
      <section className='seven-section bg-light'>
        <div className='container promo'>
        <div className='row p-5 align-items-center justify-content-between'>
          <div className='col-12 col-md-6 p-lg-5 text-promo'>
            <div className='fw-bold'>Check our promo today!</div>
            <div>Lets see the deals and pick yours!</div>
          </div>
          <div className='col-12 col-md-4 text-end btn-see-promo p-lg-5'>
          <button className='btn btn-secondary fw-bold py-3 px-5'>See Promo</button>
          </div>
        </div>
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default HomeAdmin;
