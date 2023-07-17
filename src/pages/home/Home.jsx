import React from 'react';
import './home.scss';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import AccessTime from "@mui/icons-material/AccessTime";
// import AcUnit from "@mui/icons-material/AcUnit" ;  // import the icon
import Navbar from '../../component/navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/List/List'


const Home = () => {
  return (
    <>
     
{/* <ArrowDropDownIcon /> */}

<Navbar/>
<Featured type="movie"/>
<List/>
<List/>
<List/>
<List/>
<List/>

</>
  );
};

export default Home;
