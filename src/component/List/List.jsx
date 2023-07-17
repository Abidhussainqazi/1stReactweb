import React, { useRef, useState } from 'react';
import './list.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import Item from '../Item/Item';

const List = () => {
  const listRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    setIsMoved(true)
    const slideWidth = listRef.current.children[0].offsetWidth;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
      listRef.current.style.transform = `translateX(-${slideWidth * (slideNumber - 1)}px)`;
    } else if (direction === 'right' && slideNumber < listRef.current.children.length - 1) {
      setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
      listRef.current.style.transform = `translateX(-${slideWidth * (slideNumber + 1)}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          <Item index={0} />
          <Item index={1} />
          <Item index={2} />
          <Item index={3} />
          <Item index={4} />
          <Item index={5} />
          <Item index={6} />
          <Item index={7} />
          <Item index={8} />
          <Item index={9} />
        </div>

        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')} />
      </div>
    </div>
  );
};

export default List;
