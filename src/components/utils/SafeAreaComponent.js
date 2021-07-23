import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export default SafeAreaComponent;
