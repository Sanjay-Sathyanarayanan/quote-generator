import React from 'react'

const GenerateQuote = ({handleClick}) => {
  return (
    <div className='absolute bottom-[250px] '>

      <button className=' bg-blue-400 hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-400 text-white text-center p-3 rounded font-medium'
                onClick={handleClick}>
            Generate Quote
      </button>
    </div>
  )
}

export default GenerateQuote