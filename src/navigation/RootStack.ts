import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the types for your stack's routes
export type RootStackParamList = {
  DocBottomNavigator: undefined;
  DocHome: undefined;
  DocDocument: undefined;
  DocCalender: undefined;
  DocProfile: undefined;
  PatHome: undefined;
  PatDocument: undefined;
  PatCalender: undefined;
  PatChat: undefined;
  PatProfile: undefined;
  CustomChat: undefined;
  ChatBox: undefined;
  BookSession: { selectedDate: Date }; // Specify the route with its parameter
};

// Define types for navigation and route props
type BookSessionScreenRouteProp = RouteProp<RootStackParamList, 'BookSession'>;
type BookSessionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookSession'>;
