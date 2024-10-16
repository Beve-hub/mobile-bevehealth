import * as React from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import { Animated, StyleSheet } from "react-native";
import DocHome from "../screen/main/doctors/DocHome";
import DocDocument from "../screen/main/doctors/DocDocument";
import Chat from "../utils/shared/CustomChat";
import DocCalender from "../screen/main/doctors/DocCalender";
import Profile from "../utils/shared/Profile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colorFamily } from "../utils/constant";
import PatHome from "../screen/main/patient/PatHome";
import PatDocument from "../screen/main/patient/PatDocument";
import PatCalender from "../screen/main/patient/PatCalender";


// Sample function to determine user role
const getUserRole = () => {
  // Replace this logic with your actual user role fetching logic (e.g., from context, Firebase, etc.)
  return "doctor"; // or 'patient'
};

type Route = {
  key: string;
  icon: string;
  iconSet:
    | "MaterialCommunityIcons"
    | "FontAwesome5"
    | "MaterialIcons"
    | "FontAwesome";
};

const BottomNavigator: React.FC = () => {
  const theme = useTheme({});
  const userRole = getUserRole(); // Determine the user's role

  const [index, setIndex] = React.useState(2); // Default to 'home'

  // Define routes and scenes based on the user's role
  const doctorRoutes: Route[] = [
    { key: "calendar", icon: "calendar-day", iconSet: "FontAwesome5" },
    { key: "documents", icon: "folder", iconSet: "FontAwesome" },
    { key: "home", icon: "home-filled", iconSet: "MaterialIcons" },
    { key: "chat", icon: "chat", iconSet: "MaterialIcons" },
    { key: "profile", icon: "user", iconSet: "FontAwesome" },
  ];

  const patientRoutes: Route[] = [
    { key: "calendar", icon: "calendar-alt", iconSet: "FontAwesome5" },
    { key: "documents", icon: "file-medical", iconSet: "FontAwesome5" },
    { key: "home", icon: "home", iconSet: "MaterialIcons" },
    { key: "chat", icon: "comments", iconSet: "FontAwesome5" },
    { key: "profile", icon: "user-alt", iconSet: "FontAwesome5" },
  ];

  const renderSceneDoctor = BottomNavigation.SceneMap({
    home: DocHome,
    documents: DocDocument,
    chat: Chat,
    calendar: DocCalender,
    profile: Profile,
  });

  const renderScenePatient = BottomNavigation.SceneMap({
    home: PatHome,
    documents: PatDocument,
    chat: Chat,
    calendar: PatCalender,
    profile: Profile,
  });

  // Conditionally set routes and scenes based on the role
  const routes = userRole === "doctor" ? doctorRoutes : patientRoutes;
  const renderScene =
    userRole === "doctor" ? renderSceneDoctor : renderScenePatient;

  // Define custom renderIcon with transition for active state
  const renderIcon = ({
    route,
    focused,
  }: {
    route: Route;
    focused: boolean;
  }) => {
    const iconColor = focused
      ? colorFamily.Color_SUB_MAIN_Text
      : colorFamily.Color_MAIN_Text;
    const backgroundColor = focused ? colorFamily.Primary : "transparent";
    const translateY = focused ? -16 : 0;

    const IconComponent = (() => {
      switch (route.iconSet) {
        case "MaterialCommunityIcons":
          return MaterialCommunityIcons;
        case "FontAwesome5":
          return FontAwesome5;
        case "MaterialIcons":
          return MaterialIcons;
        case "FontAwesome":
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
      barStyle={{ backgroundColor: theme.colors.surface }}
      shifting={true}
      theme={{ colors: { secondaryContainer: "transparent" } }}
    />
  );
};

// Define styles
const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular background
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavigator;
