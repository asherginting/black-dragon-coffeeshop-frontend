// import React from 'react'

import Layout from '../layouts/Layout';
import '../assets/scss/chatpage.scss';
import { GoSearch } from 'react-icons/go';
import userChat from '../assets/images/user-chat.png';

export default function ChatUser () {
  return (
    <Layout>
      <section className="chat-page">
        <div className='opacity'>
          <div className='container'>
            <div className='row py-5'>
              <div className='col-12 bg-secondary col-lg-5 p-5 left-content'>
                <form>
                  <div className='d-flex flex-row '>
                    <button className='btn bg-light btn-search' type='submit'><GoSearch/></button>
                    <input type='search' className='bg-light' placeholder='search chat' />
                  </div>
                </form>
                <div className='text-center fw-bold py-4'>Tap a chat to see the message</div>
                <div className='info-chat d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Nico</div>
                    <span>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</span>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='info-chat d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Nico</div>
                    <span>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</span>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='info-chat d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Nico</div>
                    <span>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</span>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
              </div>
              <div className='col-12 col-lg-7 bg-white right-content py-4 px-5'>
                <h2 className='mb-5'>Room Chat</h2>
                <div className='info-chat my-4 d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Nico</div>
                    <span className='fw-bold'>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</span>
                  </div>
                  <div className='d-flex justify-content-between flex-column'>
                    <div className='time'>10.14 PM</div>
                    <div className='notif bg-secondary text-white fw-bold text-center'>1</div>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='info-chat my-4 d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Kris</div>
                    <span className=''>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</span>
                  </div>
                  <div className='d-flex justify-content-between flex-column'>
                    <div className='time'>10.14 PM</div>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='text-information text-center'>
                  <p>You have no conversation, you’ll receive notification when a customer chat you. Keep up the good work!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
