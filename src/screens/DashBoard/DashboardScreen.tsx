import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

// Import new components
import DashboardHeader from '../../components/DashboardHeader';
import IntroCard from '../../components/IntroCard';
import StatsSection from '../../components/StatsSection';
import GroupsSection from '../../components/GroupsSection';
import CreateGroupPopup from '../../components/CreateGroupPopup';
import JoinGroupPopup from '../../components/JoinGroupPopup';

type DashboardScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface DashboardScreenProps {
  navigation: DashboardScreenNavigationProp;
}

const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  // State for popups
  const [showCreateGroupPopup, setShowCreateGroupPopup] = useState(false);
  const [showJoinGroupPopup, setShowJoinGroupPopup] = useState(false);

  const { t } = useTranslation();

  // Mock data - in a real app, this would come from state management or API
  const groupsData = [
    {
      id: 1,
      name: 'Group 1',
      description: 'This is the description for Group 1. A wonderful group for sharing memories and photos.',
      code: 'GRP001',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 2,
      name: 'Group 2',
      description: 'This is the description for Group 2. A wonderful group for sharing memories and photos.',
      code: 'GRP002',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 3,
      name: 'Group 3',
      description: 'This is the description for Group 3. A wonderful group for sharing memories and photos.',
      code: 'GRP003',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 4,
      name: 'Group 4',
      description: 'This is the description for Group 4. A wonderful group for sharing memories and photos.',
      code: 'GRP004',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 5,
      name: 'Group 5',
      description: 'This is the description for Group 5. A wonderful group for sharing memories and photos.',
      code: 'GRP005',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 6,
      name: 'Group 6',
      description: 'This is the description for Group 6. A wonderful group for sharing memories and photos.',
      code: 'GRP006',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 7,
      name: 'Group 7',
      description: 'This is the description for Group 7. A wonderful group for sharing memories and photos.',
      code: 'GRP007',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
    {
      id: 8,
      name: 'Group 8',
      description: 'This is the description for Group 8. A wonderful group for sharing memories and photos.',
      code: 'GRP008',
      memberCount: Math.floor(Math.random() * 20) + 3,
      image: require('./img/group1.png'),
    },
  ];

  const statsData = [
    { value: '8', label: t('Dashboard.groups') },
    { value: '124', label: t('Dashboard.photos') },
    { value: '2.3GB', label: t('Dashboard.storage') },
  ];

  // Handlers for popup actions
  const handleCreateGroup = (groupData: { name: string; description: string }) => {
    console.log('Creating group:', groupData);
    
    Toast.show({
      type: 'success',
      text1: 'Group Created!',
      text2: `Group "${groupData.name}" has been created successfully.`,
      position: 'bottom',
      visibilityTime: 3000,
    });
  };

  const handleJoinGroup = (groupData: { code: string }) => {
    console.log('Joining group with code:', groupData.code);
    
    Toast.show({
      type: 'success',
      text1: 'Group Joined!',
      text2: `You have successfully joined the group.`,
      position: 'bottom',
      visibilityTime: 3000,
    });
  };

  const handleGroupPress = (groupData: {
    groupId: number;
    groupName: string;
    groupDescription: string;
    groupCode: string;
  }) => {
    navigation.navigate('GroupScreen', groupData);
  };

  const handleViewAllGroups = () => {
    // Navigate to all groups screen or implement view all logic
    console.log('View all groups pressed');
  };

  const screenWidth = Dimensions.get('window').width;
  const contentWrapperWidth = Math.min(screenWidth - 32, 420);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.contentWrapper, { width: contentWrapperWidth }]}>
          {/* Status Bar Spacer */}
          <View style={styles.statusBarSpacer} />

          {/* Header Section */}
          <DashboardHeader
            navigation={navigation}
            userName="Alia Farooq"
            userImage={require('./img/image.png')}
          />

          {/* SnapVault Introduction Card */}
          <IntroCard
            appTitle="SnapVault"
            version="v2.1"
            description={t('Dashboard.introText')}
            backgroundImage={require('./img/background2.png')}
            onJoinGroup={() => setShowJoinGroupPopup(true)}
            onCreateGroup={() => setShowCreateGroupPopup(true)}
            joinButtonText={t('Dashboard.joinGrps')}
            createButtonText={t('Dashboard.createGrps')}
          />

          {/* Stats Section */}
          <StatsSection stats={statsData} />

          {/* Groups Section */}
          <GroupsSection
            title={t('Dashboard.myGroups')}
            viewAllText={t('Dashboard.view')}
            groups={groupsData}
            backgroundImage={require('./img/background2.png')}
            onViewAll={handleViewAllGroups}
            onGroupPress={handleGroupPress}
          />

          {/* Bottom Spacer */}
          <View style={styles.bottomSpacer} />
        </View>
      </ScrollView>

      {/* Popup Components */}
      <CreateGroupPopup
        visible={showCreateGroupPopup}
        onClose={() => setShowCreateGroupPopup(false)}
        onGroupCreated={handleCreateGroup}
      />
      
      <JoinGroupPopup
        visible={showJoinGroupPopup}
        onClose={() => setShowJoinGroupPopup(false)}
        onGroupJoined={handleJoinGroup}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  contentWrapper: {
    flex: 1,
  },
  statusBarSpacer: {
    height: 0,
  },
  bottomSpacer: {
    height: 40,
  },
});

export default DashboardScreen;