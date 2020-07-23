import React from "react"
import PropTypes from "prop-types"
import Image from "./image"

const Project = ({ id, name, description, tags, link, source }) => {

  return (
    <div 
      className="max-w-sm rounded overflow-hidden border-solid border-4 
      m-4 bg-black bg-opacity-50 transition duration-500 ease-in-out 
      transform hover:-translate-y-2"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image id={id} />
      </a>
      <div className="px-6 py-4">
        <div className="text-xl mb-2">{name}</div>
        <p className="test-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 h-30 md:h-24">
        {tags.map((tag, i) =>(
          <span key={i} className="inline-block rounded bg-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
        ))}
      </div>
      <div className="flex flex-row justify-around mt-auto">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-center cursor-pointer p-2 mx-2 my-2 border-solid border-4 
          w-full transition duration-200 ease-in-out hover:text-black hover:bg-white 
          hover:border-none"
        >live</a>
        <a 
          href={source} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`text-center cursor-pointer p-2 mr-2 my-2 border-solid border-4 
          w-full transition duration-200 ease-in-out hover:text-black hover:bg-white 
          hover:border-none ${source === "disabled" ? "invisible" : null}`}
        >source</a>
      </div>
    </div>
  )
}

Project.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  link: PropTypes.string,
  source: PropTypes.string
}

Project.defaultProps = {
  img: `https://via.placeholder.com/400x300`,
  name: `Project`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet porttitor ligula, non congue ex lobortis id. Phasellus vel leo nec mauris ullamcorper suscipit.`,
  tags: ["tag1", "tag2", "tag3"],
  link: `#`,
  source: `https://github.com/danthistle-dev`
}

export default Project;