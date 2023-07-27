import './index.css'

const CountryItem = props => {
  const {each, clickedPlace, isClicked} = props
  const clickPlace = () => {
    clickedPlace(each.id)
  }
  const Button = each.isVisited ? 'clicked-button' : 'button'
  return (
    <li className="li">
      <div className="country-div">
        <p className="name">{each.name}</p>
        {each.isVisited ? (
          <p className="clicked-button">Visited</p>
        ) : (
          <button type="button" className="button" onClick={clickPlace}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}
export default CountryItem
