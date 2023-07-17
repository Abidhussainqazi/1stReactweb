
import React from 'react'
import "./featured.scss"
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';


const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
<div className="category"> 
     <span>{type === "movie"? "Movies": "Series" }</span>
     <select name="genre" id="genre">
  <option value=" ">Genre</option>
  <option value="adventure">Adventure</option>
  <option value="comedy">Comedy</option>
  <option value="crime">Crime</option>
  <option value="fantasy">Fantasy</option>
  <option value="historical">Historical</option>
  <option value="horror">Horror</option>
  <option value="romance">Romance</option>
  <option value="sci-fi">Sci-Fi</option>
  <option value="thriller">Thriller</option>
  <option value="western">Western</option>
  <option value="animation">Animation</option>
  <option value="drama">Drama</option>
  <option value="documentary">Documentary</option>
</select>

</div>
        )}
<img
width="100%"
            src="https://images.pexels.com/photos/3619972/pexels-photo-3619972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
      <div className="info">
        <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/02/KD-2018-Good-or-Not-DPS-2.jpg?resize=750%2C500&ssl=1" alt="" />
        <span className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias quo quae est laboriosam sit incidunt vel ipsum sapiente natus? Nostrum optio ea modi reiciendis ad nam illum sapiente. Hic!</span>
     <div className="buttons">
         <button className="play">
            <PlayArrow/>
            <span>Play</span>
         </button>
         <button className="more">
         <InfoOutlined/> 
         <span>Info</span>
         </button>
     </div>
      </div>
    </div>
  )
}

export default Featured
