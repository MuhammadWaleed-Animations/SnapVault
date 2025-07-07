import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// LinearGradient is removed as per request

interface ContactHeaderProps {
  onBackPress: () => void;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({ onBackPress }) => {
  return (
    // Main container with black background and rounded bottom corners
    <View style={styles.container}>
      {/* Top row: Contains back button and main title */}
      <View style={styles.headerRow}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        {/* Main Title: "Contact Us" - positioned absolutely to center it */}
        <Text style={styles.title}>Contact Us</Text>
        {/* Empty View to balance the space for centering the title */}
        <View style={styles.backButtonPlaceholder} />
      </View>

      {/* Content section: Contains icon and description, "settled down" below the header */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>💎</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Let us know how we can support your backup and archiving needs!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180, // Increased height to accommodate new layout
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: 'black', // Black background as requested
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000', // Added shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8, // For Android shadow
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distributes space between items
    marginBottom: 20, // Space between header row and content
  },
  backButton: {
    backgroundColor: '#1c2b38', // Semi-transparent white
    borderRadius: 24,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonPlaceholder: {
    width: 44, // Same width as backButton to balance the layout
    height: 44, // Same height as backButton
  },
  backButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  title: {
    color: 'white',
    fontSize: 24, // Larger font for main heading
    fontWeight: 'bold',
    position: 'absolute', // Position absolutely to allow centering
    left: 0,
    right: 0,
    textAlign: 'center', // Center the text within its absolute bounds
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Adjusted margin top for content section
    gap: 16, // Gap between icon and text
  },
  iconContainer: {
    padding: 12, 
    borderRadius: 20,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  description: {
    color: '#e5e7eb',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default ContactHeader;
