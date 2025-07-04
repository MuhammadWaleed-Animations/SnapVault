import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Import your screens
import UserProfile from '../screens/UserProfile/UserProfile';
import EditProfile from '../screens/UserProfile/EditProfile';
import Logout from '../screens/UserProfile/Logout';
import ContactUs from '../screens/ContactUs/ContactUs';
import DashboardScreen from '../screens/DashBoard/DashboardScreen';

// Define route names and their parameters
export type RootStackParamList = {
  MainTabs: undefined;
  'Edit Profile': undefined;
  Logout: undefined;
  'Contact Us': undefined;
};

export type TabParamList = {
  Dashboard: undefined;
  ContactUs: undefined;  
  Camera: undefined;
  Gallery: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Placeholder screens for new tabs

const CameraScreen = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderTitle}>Camera</Text>
    <Text style={styles.placeholderText}>Capture memories instantly</Text>
  </View>
);

const GalleryScreen = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderTitle}>Gallery</Text>
    <Text style={styles.placeholderText}>Browse your photos</Text>
  </View>
);

// Define props interface for TabIcon component
interface TabIconProps {
  icon: string; // Assuming icon is a string (e.g., emoji or icon name)
  focused: boolean; 
}

// Custom Tab Bar Icon Component
const TabIcon: React.FC<TabIconProps> = ({ icon, focused }) => (
  <View style={styles.tabIconContainer}>
    <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
      <Text
        style={[
          styles.tabIcon,
          { color: focused ? '#FFFFFF' : '#9CA3AF' },
        ]}  
      >
        {icon}
      </Text>
    </View>   
  </View>
);

// Bottom Tab Navigator
const MainTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar,
      tabBarBackground: () => (
        <View style={styles.tabBarBackground} />
      ),
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#6366F1',
      tabBarInactiveTintColor: '#9CA3AF',
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="🏠" focused={focused}  />
        ),
      }}
    />
    <Tab.Screen
      name="ContactUs"  
      component={ContactUs}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="📞" focused={focused} /> 
        ),
      }}
    />
    <Tab.Screen
      name="Camera"
      component={CameraScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="📷" focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Gallery"
      component={GalleryScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="🖼️" focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={UserProfile}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="👤" focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);

// Main App Navigator
const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          headerShown: true,
          title: 'Edit Profile',
          headerStyle: styles.modalHeader,
          headerTitleStyle: styles.modalHeaderTitle,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          headerShown: true,
          title: 'Contact Us',
          headerStyle: styles.modalHeader,
          headerTitleStyle: styles.modalHeaderTitle,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: true,
          title: 'Logout',
          headerStyle: styles.modalHeader,
          headerTitleStyle: styles.modalHeaderTitle,
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  // Tab Bar Styles
  tabBar: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  tabBarBackground: {
    flex: 1,   
    backgroundColor: 'black',
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 38,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  iconWrapperActive: {
    backgroundColor: '#6366F1',
    transform: [{ scale: 1.1 }],
  },
  tabIcon: {
    fontSize: 18,
    fontWeight: '600' as const,
  },

  // Modal Header Styles
  modalHeader: {
    backgroundColor: '#1F2937',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  modalHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600' as const,
  },

  // Placeholder Screen Styles
  placeholderContainer: { 
    flex: 1,
    backgroundColor: '#0F0F23',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  placeholderTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700' as const,
    marginBottom: 12,
    textAlign: 'center' as const,
  },
  placeholderText: {
    color: '#9CA3AF',
    fontSize: 16,
    fontWeight: '400' as const,
    textAlign: 'center' as const,
    lineHeight: 24,
  },
});

export default AppNavigator;