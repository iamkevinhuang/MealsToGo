import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import SpacerComponent from '../spacer/SpacerComponent';
import CompactRestaurantInfo from '../restaurant/CompactRestaurantInfo';
import Text from '../typography/TextComponent';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBarComponent = ({ favourites, onNavigate }) => {
  if (favourites.length == 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <SpacerComponent variant="left.large">
        <Text variant="caption">Favourites</Text>
      </SpacerComponent>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <SpacerComponent position="left" size="medium" key={key}>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </SpacerComponent>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBarComponent;
