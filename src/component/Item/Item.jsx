import {React , useState } from 'react';
import './item.scss';
import { PlayArrow, Add, ThumbUp, ThumbDown} from '@mui/icons-material';

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUp className="icon" />
              <ThumbDown className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 5min</span>
              <span className="limit">+16</span>
              <span>2011</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum ut inventore praesentium neque, esse architecto rerum nemo quis 
            </div>
            <div className="genre">Romantic</div>
          </div>
        </>
      )}
    </div>
  );
}