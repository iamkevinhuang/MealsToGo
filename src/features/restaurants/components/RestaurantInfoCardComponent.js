import React from 'react';

// Library
import { SvgXml } from 'react-native-svg';

// Asset
import star from '../../../assets/svg/star';
import open from '../../../assets/svg/open';

// Component
import SpacerComponent from '../../../components/spacer/SpacerComponent';
import TextComponent from '../../../components/typography/TextComponent';
import {
  Icon,
  Address,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  Info,
  Rating,
  OpenTag,
} from './RestaurantInfoCardStyles';
import FavouriteComponent from '../../../components/favourites/FavouriteComponent';

const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg',
    ],
    address = 'Jl. Acak No 10',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <FavouriteComponent restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <TextComponent variant="label">{name}</TextComponent>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <OpenTag>
            {isClosedTemporarily && (
              <TextComponent variant="error">CLOSED TEMPORARILY</TextComponent>
            )}
            <SpacerComponent position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </SpacerComponent>
            <SpacerComponent position="left" size="large">
              <Icon source={{ uri: icon }} />
            </SpacerComponent>
          </OpenTag>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCardComponent;
