import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// Define the types for your stack's routes
export type RootStackParamList = {
  BottomNavigator: undefined;
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
  Call: undefined;
  PatDetails:{ documentData: any };
  DocDetails:{ documentData: any };
  Video: undefined;
  BookSession: undefined;
  CustomProfile: { initials: string }; 
  CustomSetting: undefined;
  CustomChange: undefined;
};

// Define types for navigation and route props
type BookSessionScreenRouteProp = RouteProp<RootStackParamList, 'BookSession'>;
type BookSessionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookSession'>;

