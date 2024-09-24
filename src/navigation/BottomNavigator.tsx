import * as React from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';
import { View, Animated, StyleSheet } from 'react-native';
import DocHome from '../screen/main/doctors/DocHome';
import DocDocument from '../screen/main/doctors/DocDocument';
import DocChat from '../screen/main/doctors/DocChat';
import DocCalender from '../screen/main/doctors/DocCalender';
import DocProfile from '../screen/main/doctors/DocProfile';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colorFamily } from '../utils/constant';

type Route = {
  key: string;
  icon: string;
  iconSet: 'MaterialCommunityIcons' | 'FontAwesome5' | 'MaterialIcons' | 'FontAwesome';
};

const BottomNavigator: React.FC = () => {
  const theme = useTheme({});

  const [index, setIndex] = React.useState(2); // Default to 'home'
  const [routes] = React.useState<Route[]>([
    { key: 'calendar', icon: 'calendar-day', iconSet: 'FontAwesome5' },
    { key: 'documents', icon: 'folder', iconSet: 'FontAwesome' },   
    { key: 'home', icon: 'home-filled', iconSet: 'MaterialIcons' }, // Default route 'home'
    { key: 'chat', icon: 'chat', iconSet: 'MaterialIcons' },
    { key: 'profile', icon: 'user', iconSet: 'FontAwesome' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: DocHome,
    documents: DocDocument,
    chat: DocChat,
    calendar: DocCalender,
    profile: DocProfile,
  });

  // Define custom renderIcon with transition for active state
  const renderIcon = ({ route, focused }: { route: Route; focused: boolean }) => {
    const iconColor = focused ? colorFamily.Color_SUB_MAIN_Text : colorFamily.Color_MAIN_Text;
    const backgroundColor = focused ? colorFamily.Primary : 'transparent';
    const translateY = focused ? -16 : 0;

    const IconComponent = (() => {
      switch (route.iconSet) {
        case 'MaterialCommunityIcons':
          return MaterialCommunityIcons;
        case 'FontAwesome5':
          return FontAwesome5;
        case 'MaterialIcons':
          return MaterialIcons;
        case 'FontAwesome':
          return FontAwesome;
        default:
          return null;
      }
    })();

    return (
      <Animated.View
        style={[
          styles.iconContainer,
          { backgroundColor, transform: [{ translateY }] },
        ]}
      >
        <IconComponent name={route.icon as any} size={24} color={iconColor} />
      </Animated.View>
    );
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      activeColor={colorFamily.Primary}
      inactiveColor={colorFamily.Color_MAIN_Text}
      barStyle={{ backgroundColor: theme.colors.surface,}}
      shifting={true}    
      theme={{colors: {secondaryContainer: 'transparent'}}}  
    />
  );
};

// Define styles
const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular background
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigator;
