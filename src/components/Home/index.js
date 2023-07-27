import './index.css'
import {useState, useEffect} from 'react'
import CountryItem from '../CountryItem'
import VisitedCountry from '../VisitedCountry'

const Home = props => {
  const {initialCountriesList} = props
  const [visitedCountriesList, setVisitedCountriesList] = useState([])
  const [updatedCountriesList, setUpdatedCountriesList] = useState(
    initialCountriesList,
  )

  const clickedPlace = id => {
    setUpdatedCountriesList(
      updatedCountriesList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: !each.isVisited}
        }
        return each
      }),
    )
  }
  const visitedPlaces = () => {
    const isVisitedPlaces = updatedCountriesList.filter(
      each => each.isVisited === true,
    )
    setVisitedCountriesList(isVisitedPlaces)
  }
  const onRemovePlaces = id => {
    setUpdatedCountriesList(
      updatedCountriesList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: !each.isVisited}
        }
        return each
      }),
    )
  }
  console.log(visitedCountriesList)
  useEffect(() => {
    visitedPlaces()
  }, [updatedCountriesList])
  return (
    <div className="main-bg">
      <h1 className="heading">Countries</h1>
      <ul>
        {updatedCountriesList.map(each => (
          <CountryItem each={each} key={each.id} clickedPlace={clickedPlace} />
        ))}
      </ul>
      <h1 className="heading">Visited Countries</h1>

      {visitedCountriesList.length === 0 ? (
        <p className="no-visited-heading">No Countries Visited Yet!</p>
      ) : (
        <ul className="ul">
          {visitedCountriesList.map(each => (
            <VisitedCountry
              each={each}
              key={each.id}
              onRemovePlaces={onRemovePlaces}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
export default Home
