import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import UserAvatar from './UserAvatar';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar = ({title}: HeaderBarProps) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <UserAvatar />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
