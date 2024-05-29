import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/flogo.png";
import "../assets/styles.css";
import { BiPhoneCall } from "react-icons/bi";
import { TbLogin2 } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BsCartPlus } from "react-icons/bs";

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="text-green px-6 flex items-center gap-2"
        >
          {" "}
          <AiOutlineHome />
          Home
        </Link>
      </li>

      <li
        tabIndex={0}
        className="px-6 flex items-center gap-2 text-green"
      >
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li>
              <Link to="/category">All</Link>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Electronics</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/category/electronics/smartphones">
                      Smartphones and Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/electronics/laptops">
                      Laptops and Computers
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/electronics/appliances">
                      Home Appliances
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/electronics/audio-video">
                      Audio and Video Equipment
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/electronics/wearable-tech">
                      Wearable Technology
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Fashion</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/category/fashion/mens-clothing">
                      Men's Clothing
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/fashion/womens-clothing">
                      Women's Clothing
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/fashion/footwear">Footwear</Link>
                  </li>
                  <li>
                    <Link to="/category/fashion/accessories">
                      Accessories (Bags, Jewelry, Watches)
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/fashion/sportswear">Sportswear</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Home and Living</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/category/home-living/furniture">Furniture</Link>
                  </li>
                  <li>
                    <Link to="/category/home-living/decor">Home Decor</Link>
                  </li>
                  <li>
                    <Link to="/category/home-living/kitchenware">
                      Kitchenware
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/home-living/bedding-bath">
                      Bedding and Bath
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/home-living/gardening">
                      Gardening Supplies
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Health and Beauty</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/category/health-beauty/skincare">
                      Skincare Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/health-beauty/makeup">Makeup</Link>
                  </li>
                  <li>
                    <Link to="/category/health-beauty/personal-care">
                      Personal Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/health-beauty/vitamins">
                      Vitamins and Supplements
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/health-beauty/fitness">
                      Fitness Equipment
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Books and Entertainment</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/category/books-entertainment/books">
                      Books (Physical and E-books)
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/books-entertainment/movies-music">
                      Movies and Music
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/books-entertainment/video-games">
                      Video Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/books-entertainment/toys-board-games">
                      Toys and Board Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/books-entertainment/instruments">
                      Musical Instruments
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>

      <li
        tabIndex={0}
        className="px-6 text-green flex items-center gap-2"
      >
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <Link to="/services">All</Link>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Home Services</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/services/home-services/cleaning">
                      Cleaning Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/home-services/plumbing-electrical">
                      Plumbing and Electrical Repairs
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/home-services/landscaping">
                      Landscaping and Gardening
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/home-services/renovation">
                      Home Renovation and Remodeling
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/home-services/pest-control">
                      Pest Control
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Professional Services</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/services/professional/legal">
                      Legal Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/professional/accounting">
                      Accounting and Financial Planning
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/professional/marketing">
                      Marketing and Advertising
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/professional/it-support">
                      IT Support and Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/professional/design">
                      Graphic Design and Multimedia
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Health and Wellness</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/services/health-wellness/personal-training">
                      Personal Training and Fitness Coaching
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/health-wellness/massage">
                      Massage Therapy
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/health-wellness/counseling">
                      Mental Health Counseling
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/health-wellness/nutrition">
                      Nutrition and Diet Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/health-wellness/medical">
                      Medical and Dental Services
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Education and Training</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/tutoring">
                      Tutoring and Academic Coaching
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/online-courses">
                      Online Courses and Workshops
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/language-learning">
                      Language Learning
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/certification">
                      Professional Certification Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/music-art">
                      Music and Art Lessons
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={1}>
              <details>
                <summary>Transportation and Logistics</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/category">All</Link>
                  </li>
                  <li>
                    <Link to="/services/transportation/ride-sharing">
                      Ride-Sharing and Taxi Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/transportation/moving">
                      Moving and Relocation Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/transportation/delivery">
                      Delivery and Courier Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/transportation/freight">
                      Freight and Cargo Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/transportation/vehicle-rental">
                      Vehicle Rental and Leasing
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link
          to="/contact"
          className="px-6 text-green flex items-center gap-2"
        >
          <BiPhoneCall /> Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="px-6 text-green flex items-center gap-2"
        >
          <FcAbout />
          About Us
        </Link>
      </li>
    </>
  );

  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              className="h-10 w-10 mr-2 filter drop-shadow-md"
              src={logo}
              alt="Logo"
            />
            <span className="text-xl tracking-tight gold-logo">
              <b>RACHCOIN</b>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle mr-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <a className="btn  bg-black rounded-full px-6 text-white flex items-center gap-2 hover:bg-yellow-600">
            {" "}
            <TbLogin2 /> LogIn
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
