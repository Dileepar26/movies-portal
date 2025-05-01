import MovieCarousel from "./MovieCarousel"
import MovieCategory from "./MovieCategory"

function Home() {
  return (
    <div>
        <MovieCarousel/>
        <MovieCategory title='Action'/>
        <MovieCategory title='Superhero'/>
    </div>
  )
}

export default Home