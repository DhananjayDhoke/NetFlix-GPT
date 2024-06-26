import React from 'react'
import GptSearchBar from './GptSearchBar'
import GetMoviesSuggestion from './GetMoviesSuggestion'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background Image"
        />
      </div>
      <GptSearchBar/>
      <GetMoviesSuggestion/>
    </div>
  )
}

export default GptSearch