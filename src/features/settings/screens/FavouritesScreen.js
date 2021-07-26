import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { RestaurantList } from '../../restaurants/components/RestaurantListStyles';
import SafeAreaComponent from '../../../components/utils/SafeAreaComponent';
import Text from '../../../components/typography/TextComponent';
import SpacerComponent from '../../../components/spacer/SpacerComponent';
import RestaurantInfoCardComponent from '../../restaurants/components/RestaurantInfoCardComponent';

const NoFavouritesArea = styled(SafeAreaComponent)`
  align-items: center;
  justify-content: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeAreaComponent>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <SpacerComponent position="bottom" size="large">
              <RestaurantInfoCardComponent restaurant={item} />
            </SpacerComponent>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaComponent>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet.</Text>
    </NoFavouritesArea>
  );
};

export default FavouritesScreen;
