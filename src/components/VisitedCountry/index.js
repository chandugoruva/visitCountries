import './index.css'

const VisitedCountry = props => {
  const {each, onRemovePlaces} = props
  const placesVisited = () => {
    onRemovePlaces(each.id)
  }
  return (
    <li className="li">
      <div className="visited-country-div">
        <img src={each.imageUrl} alt="thumbnail" className="image" />
        <div className="flex">
          <p className="name">{each.name}</p>
          <button
            type="button"
            className="country-button"
            onClick={placesVisited}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default VisitedCountry
