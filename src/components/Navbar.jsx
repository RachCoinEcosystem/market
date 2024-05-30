import React, { useEffect, useState } from "react";
import logo from "/flogo.png";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-green px-6 flex items-center gap-2">
          <AiOutlineHome />
          Home
        </Link>
      </li>
      <li tabIndex={0} className="px-6 flex items-center gap-2 text-green">
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
      <li tabIndex={0} className="px-6 text-green flex items-center gap-2">
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
                    <Link to="/services/education-training/online-courses">
                      Online Courses and E-learning
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/tutoring">
                      Tutoring Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/vocational">
                      Vocational Training
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/music-lessons">
                      Music and Art Lessons
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/education-training/language">
                      Language Learning
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar z-50  xl:px-24 ${
          isSticky ? "sticky top-0 shadow-xl bg-white" : "bg-white "
        }`}
      >
        <div className="navbar-start ">
          <div className="dropdown">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn bg-black text-yellow btn-ghost normal-case text-xl flex items-center"
          >
            <img src={logo} className="w-10 h-10" alt="Logo" />
            <p className="text-3xl font-bold">RachCoin</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/contact" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
            <BiPhoneCall /> Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
