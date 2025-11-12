import React, { useState } from 'react'
import HeaderMain1 from '../Main/HeaderMain'
import Movie from '../Main/Movie'
import HeaderMain2 from '../Main/HeaderMain2'

export default function Home() {
    const [category, setCategory] = useState('popular');
    const [mediaType, setMediaType] = useState('movie');
  return (
        <main className='mt-20 sm:mt-40 xl:mt-15'>
     <HeaderMain1 onCategoryChange={setCategory} activeCategory={category} />

      <Movie category={category} />

          <HeaderMain2 onMediaTypeChange={setMediaType} activeMediaType={mediaType} />
        <Movie category="popular" mediaType={mediaType} />

        
    </main>
  )
}
