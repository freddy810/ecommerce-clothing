import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Forever young, always beautiful. We believe that beauty is in the eyes of the beholder. We are here to help you find the perfect look for your special day. Whether you are looking for a classic look or something more modern, we have the perfect look for you. So, come in and let us help you find the perfect look for your special day</p>
          <p>We have a team of experts who are passionate about beauty and are dedicated to helping you find the perfect look for your special day. We are here to help you find the perfect look for your special day. Whether you are looking for a classic look or something more modern, we have the perfect look for you</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to help you find the perfect look for your special day. Whether you are looking for a classic look or something more modern, we have the perfect look for you. So, come in and let us help you find the perfect look for your special day, we have a team of experts who are passionate about beauty and are dedicated to helping you find the perfect look for your special day</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Qualtiy Assurance:</b>
          <p className='text-gray-600'>We have a team of experts who are passionate about beauty and are dedicated to helping you find the perfect look for your special day.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendy interface and hassle-free ordering process, you can shop for your favorite products and have them delivered right.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptionnel Customer Service:</b>
          <p className='text-gray-600'>We have a team of experts who are passionate about beauty and are dedicated to helping you find the perfect look for your special day.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About