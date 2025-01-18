import React from 'react'
import { HomePageWrapper } from './HomePageWrapper.styled'
import HomePageBanner from './HomePageBanner/HomePageBanner';
import HomePageSection from './HomePageSection/HomePageSection';
import ListingFooter2 from '../ListingPage/AirbnbFooter/ListingFooter/ListingFooter2';


const HomePageContainer = () => {
  return <HomePageWrapper>
    <HomePageBanner/>
    <HomePageSection/>
    <ListingFooter2/>
  </HomePageWrapper>;
}

export default HomePageContainer;

