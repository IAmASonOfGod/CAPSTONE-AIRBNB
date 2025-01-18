import React from 'react'
import { HomePageSectionWrapper } from './HomePageSection.styled'
import NextTrip from './NextTripCards/NextTrip';
import Discover from './Discover/Discover';
import GiftCards from './GiftCards/GiftCards';
import HostingQuestions from './HostingQuestions/HostingQuestions';
import PreFooter from './Pre-Footer/PreFooter';

const HomePageSection = () => {
  return <HomePageSectionWrapper>
    <NextTrip/>
    <Discover/>
    <GiftCards/>
    <HostingQuestions/>
    <PreFooter/>
  </HomePageSectionWrapper>;
}

export default HomePageSection
