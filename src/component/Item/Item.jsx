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
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
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