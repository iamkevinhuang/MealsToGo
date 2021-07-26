import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

//Component
import RestaurantInfoCardComponent from '../components/RestaurantInfoCardComponent';
import SpacerComponent from '../../../components/spacer/SpacerComponent';
import SafeAreaComponent from '../../../components/utils/SafeAreaComponent';
import SearchComponent from '../components/SearchComponent';
import FavouritesBarComponent from '../../../components/favourites/FavouritesBarComponent';
import { RestaurantList } from '../components/RestaurantListStyles';
import FadeInAnimation from '../../../components/animations/fade.animation';

// Library
import styled from 'styled-components/native';

//Context
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeAreaComponent>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchComponent
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBarComponent
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <SpacerComponent position="bottom" size="large">
              <FadeInAnimation>
                <RestaurantInfoCardComponent restaurant={item} />
              </FadeInAnimation>
            </SpacerComponent>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaComponent>
  );
};

export default RestaurantsScreen;
