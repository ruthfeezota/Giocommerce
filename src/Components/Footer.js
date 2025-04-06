import React from 'react'
import logo from "../Assets/Logo.png"

function Footer() {
  return (
    <footer className="block bg-[#2E2D2B] text-white">
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
      <div className="flex max-w-sm flex-col items-start justify-start gap-8 lg:mr-10">
        <div className="flex flex-col items-start gap-6">
          <a href="/" className="inline-block max-w-full text-white">
            <img src={logo} alt="" className="inline-block max-h-28" />
          </a>
          <p className="text-white">
          Empowering women-led businesses to thrive online, one website at a time.
          </p>
        </div>
        <div className="mt-12 grid max-w-52 grid-flow-col grid-cols-2 gap-2 mb-8 md:mb-0">
        <a href="/" class="mr-4 text-white transition hover:text-gray-400">
            <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25C9.4791 2.25005 7.05619 3.22647 5.23968 4.97439C3.42317 6.72231 2.35426 9.10586 2.25723 11.6249C2.1602 14.1439 3.0426 16.6026 4.71928 18.4851C6.39595 20.3676 8.73657 21.5275 11.25 21.7214V14.2501H9C8.80109 14.2501 8.61032 14.1711 8.46967 14.0304C8.32902 13.8898 8.25 13.699 8.25 13.5001C8.25 13.3012 8.32902 13.1104 8.46967 12.9698C8.61032 12.8291 8.80109 12.7501 9 12.7501H11.25V10.5001C11.2509 9.70472 11.5673 8.94218 12.1297 8.37977C12.6921 7.81736 13.4546 7.501 14.25 7.50009H15.75C15.9489 7.50009 16.1397 7.57911 16.2803 7.71976C16.421 7.86041 16.5 8.05118 16.5 8.25009C16.5 8.449 16.421 8.63977 16.2803 8.78042C16.1397 8.92107 15.9489 9.00009 15.75 9.00009H14.25C13.8523 9.00054 13.471 9.15872 13.1898 9.43993C12.9086 9.72114 12.7505 10.1024 12.75 10.5001V12.7501H15C15.1989 12.7501 15.3897 12.8291 15.5303 12.9698C15.671 13.1104 15.75 13.3012 15.75 13.5001C15.75 13.699 15.671 13.8898 15.5303 14.0304C15.3897 14.1711 15.1989 14.2501 15 14.2501H12.75V21.7214C15.2634 21.5275 17.604 20.3676 19.2807 18.4851C20.9574 16.6026 21.8398 14.1439 21.7427 11.6249C21.6457 9.10587 20.5768 6.72232 18.7603 4.9744C16.9438 3.22649 14.5209 2.25006 12 2.25Z"></path>
            </svg>
          </a>
          <a href="/" class="mx-4 text-white transition hover:text-gray-400">
            <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
              <path d="M16.125 2.625H7.875C6.4831 2.62658 5.14865 3.18021 4.16443 4.16443C3.18021 5.14865 2.62658 6.4831 2.625 7.875V16.125C2.62658 17.5169 3.18021 18.8513 4.16443 19.8356C5.14865 20.8198 6.4831 21.3734 7.875 21.375H16.125C17.5169 21.3734 18.8513 20.8198 19.8356 19.8356C20.8198 18.8513 21.3734 17.5169 21.375 16.125V7.875C21.3734 6.4831 20.8198 5.14865 19.8356 4.16443C18.8513 3.18021 17.5169 2.62658 16.125 2.625ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4987 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4987 12 16.5ZM16.875 8.25C16.6525 8.25 16.435 8.18402 16.25 8.0604C16.065 7.93679 15.9208 7.76109 15.8356 7.55552C15.7505 7.34995 15.7282 7.12375 15.7716 6.90552C15.815 6.68729 15.9222 6.48684 16.0795 6.3295C16.2368 6.17217 16.4373 6.06502 16.6555 6.02162C16.8738 5.97821 17.1 6.00049 17.3055 6.08564C17.5111 6.17078 17.6868 6.31498 17.8104 6.49998C17.934 6.68499 18 6.9025 18 7.125C18 7.42337 17.8815 7.70952 17.6705 7.9205C17.4595 8.13147 17.1734 8.25 16.875 8.25Z"></path>
            </svg>
          </a>
    
          
        </div>
      </div>
      <div className="flex flex-col items-start font-semibold">
        <div className="mb-4">
          <p className="font-bold uppercase bg-[#CFF098] text-black">SERVICES</p>
        </div>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Business Growth Strategy
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Marketing Support Services
        </a>
        
       
      </div>
      <div className="flex flex-col items-start font-semibold">
        <div className="mb-4">
          <p className="font-bold uppercase bg-[#CFF098] text-black">ABOUT</p>
        </div>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Meet Our Team
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Testimonials
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Our Difference
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        FAQs
        </a>
      </div>
      <div className="flex flex-col items-start font-semibold">
        <div className="mb-4">
          <p className=" font-bold uppercase bg-[#CFF098] text-black">RESOURCES</p>
        </div>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Blog
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Case Studies
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Playbooks
        </a>
        <a href="javascript:void(0);" className="py-2 text-sm font-normal text-white transition hover:text-blue-600">
        Tools We Use
        </a>
      </div>
    </div>
    <div className="mb-14 mt-16 w-full border-b border-white"></div>
    <div className="flex justify-between md:flex-row flex-col gap-8 md:gap-0">
      <div className="flex flex-col items-start gap-2">
        <h5 className="text-xl font-bold">Join our newsletter</h5>
        <p className="text-sm sm:text-sm">
          Keep up to date with everything Woaom Web Design
        </p>
      </div>
      <div className="mb-4 w-full max-w-sm">
        <form name="email-form" method="get" className="relative max-w-full">
          <input type="email" className="mb-2.5 block h-9 w-full rounded-md border border-solid border-black bg-gray-100 px-3 py-6 align-middle text-sm placeholder:text-black text-black focus:border-blue-600" maxlength="256" name="email-5" placeholder="Enter your email" required="" />
          <input type="submit" value="Join Us" className="sm:absolute right-0 top-0 inline-block h-full cursor-pointer bg-white px-6 py-2.5 text-center font-semibold text-black relative w-full sm:w-auto sm:right-0 rounded-tr-md rounded-br-md" />
        </form>
      </div>
    </div>
    <div className="mb-14 mt-16 w-full border-b border-white"></div>
    <div className="flex md:flex-row items-start justify-between sm:flex-col flex-col-reverse md:items-center">
      <p className="text-sm sm:text-base">
        ©Woaom Web Design Copyright 2025. All rights reserved.
      </p>
      <div className="text-center font-semibold">
        <a href="javascript:void(0);" className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12">
          Terms of Service
        </a>
        <a href="javascript:void(0);" className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12">
          License
        </a>
        <a href="javascript:void(0);" className="inline-block py-2 pl-5 font-normal text-white transition hover:text-blue-600 px-2.5 lg:pl-12">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer