import React, { useContext, useState } from 'react';
import { View } from 'react-native';

// Library
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

//Context
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchComponent = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default SearchComponent;
