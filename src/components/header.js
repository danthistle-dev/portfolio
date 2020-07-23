import PropTypes from "prop-types"
import React from "react"
import Star from "../images/star.png"

const Header = ({ siteTitle }) => (
  <header className="flex flex-row justify-between ">
    <img src={Star} className="w-0 sm:w-auto h-0 sm:16 md:h-20 lg:h-24 m-0 sm:m-12" />
    <div className="text-center m-8">
      <h1 
        style={{ fontFamily: `Berkahi-Blackletter`}}
        className="text-3xl sm:text-5xl lg:text-6xl"
      >
        {siteTitle}
      </h1>
      <nav 
        style={{ fontFamily: `Rats Get Fat` }}
        className="text-xs lg:text-lg tracking-widest text-white sm:text-gray-400"
      >
        ~ <a 
          href="https://github.com/danthistle-dev"
          target="_blank" 
          rel="noopener noreferrer" 
          className="sm:transition duration-300 ease-in-out hover:text-white">
            github
        </a> ~ <a
          href="#"
          target="_blank" 
          rel="noopener noreferrer"
          className="sm:transition duration-300 ease-in-out hover:text-white">
            resume
        </a> ~
      </nav>
    </div>
    <img src={Star} className="w-0 sm:w-auto h-0 sm:16 md:h-20 lg:h-24 m-0 sm:m-12" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
