// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImgClsName = isActive ? 'event-img active' : 'event-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-card-item">
      <button type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImgClsName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
