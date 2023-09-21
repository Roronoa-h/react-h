import React from 'react'
import './assets/css/index.less'
import way from '@/assets/images/desk.png'

const App: React.FC = () => {
  return (
  <>
    <div className="wrapper">123123</div>
    <div>图片123:</div>
    <img className='imgStyle' src={way} alt="" />
  </>
  )
}
export default App