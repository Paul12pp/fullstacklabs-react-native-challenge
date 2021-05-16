import React from "react";
import { View, StyleSheet } from "react-native";

import PropTypes from "prop-types";
import { Subtitle } from "material-bread";
import colors from "../constants/colors";

const BlockId = ({ id }) => {
  return <Subtitle type={6} text={id || "000"} style={styles.container} />;
};

export default BlockId;

const styles = StyleSheet.create({
  container: {
    color: colors.darkBlue,
    letterSpacing: 2
  }
});

BlockId.propTypes = {
  id: PropTypes.string.isRequired
};
