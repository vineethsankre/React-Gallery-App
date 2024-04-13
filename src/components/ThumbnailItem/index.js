import './index.css'

const ThumbnailItem = props => {
  const {eachImage, changeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImage
  const thumbnailClassName = isActive ? 'active' : 'thumbnail'
  const onClickImg = () => {
    changeImg(id)
  }
  return (
    <li className="img-list-item">
      <button className="thumbnail-btn" type="button">
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickImg}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
