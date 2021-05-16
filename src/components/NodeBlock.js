import { BodyText } from "material-bread";
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import BlockId from "./BlockId";

const NodeBlock = ({ block }) => {
  return (
    <View style={styles.container} key={block.id}>
      <BlockId id={String(block.id)} />
      <BodyText style={styles.detail}>{block.attributes.data}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    padding: 10,
    marginTop: 10
  },
  detail: {
    marginTop: 10
  }
});

export default NodeBlock;

NodeBlock.propTypes = {
  block: PropTypes.object.isRequired
};
