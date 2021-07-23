import styled from 'styled-components/native';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Icon = styled(Image)`
  height: 15px;
  width: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary}; ;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const OpenTag = styled(View)`
  flex-direction: row;
`;
