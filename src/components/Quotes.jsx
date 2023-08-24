import React from 'react'

const Quotes = ({quote, author}) => {
  //  console.log(quote);
  return (
    <section className='flex items-center justify-center mt-10 bg-white min-w-[60vw] min-h-[50vh] shadow-white shadow rounded-md sm:max-w-full'>
    { quote && (<div className='mt-10 p-10' >
            {/* Quote Section  */}
            <div className='p-5 font-poppins font-medium text-xl '>
              {quote}
              
            </div>
              <div className='font-medium' >
                ~ {author}
              </div>
            
        </div>)}
    </section>
  )
}

export default Quotes