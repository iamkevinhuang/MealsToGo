import React, { useContext, useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import SafeAreaComponent from '../../../components/utils/SafeAreaComponent';
import Text from '../../../components/typography/TextComponent';
import SpacerComponent from '../../../components/spacer/SpacerComponent';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    useCallback(() => {
      getProfilePicture(user);
    }, [user]);
  });

  return (
    <SafeAreaComponent>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <SpacerComponent position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </SpacerComponent>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaComponent>
  );
};

export default SettingScreen;
