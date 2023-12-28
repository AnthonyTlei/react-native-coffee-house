import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const UserAvatar = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderWidth: 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default UserAvatar;
