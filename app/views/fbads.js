import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { withNativeAd } from 'react-native-fbads';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 5,
    marginTop: 5,
  },
  action: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 13,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 12,
    opacity: 0.8,
  },
});

const FullNativeAd = withNativeAd(({ nativeAd }) => (
  <View style={styles.container}>
    {nativeAd.icon && (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.icon} source={{ uri: nativeAd.icon }} />
        <View style={styles.button}>
          <Text style={styles.action}>{nativeAd.callToActionText}</Text>
        </View>
      </View>
    )}
    {!nativeAd.icon && (
      <View style={styles.button}>
        <Text style={styles.action}>{nativeAd.callToActionText}</Text>
      </View>
    )}
    <View style={{ flex: 1, padding: 8 }}>
      <Text style={styles.title}>{nativeAd.title}</Text>
      {nativeAd.subtitle && (
        <Text style={styles.subtitle}>{nativeAd.subtitle}</Text>
      )}
      {nativeAd.description && (
        <Text style={styles.description}>{nativeAd.description}</Text>
      )}
    </View>
  </View>
));

export default FullNativeAd;
