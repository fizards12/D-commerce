import { createPortal } from 'react-dom'

const Backdrop = ({show,clickHandler}) => {
  return show && createPortal(
    <div
      className={`w-screen h-screen bg-gray-900 bg-opacity-20`}
      onClick={clickHandler}
    ></div>,
    document.getElementById("backdrop")
  )
}

export default Backdrop