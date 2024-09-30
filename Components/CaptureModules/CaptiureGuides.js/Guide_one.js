import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Capture_Guide_one({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Illustration */}
          <Image
            source={{ uri: 'https://example.com/camera-illustration.png' }} // Replace with your camera illustration image
            style={styles.illustration}
          />

          {/* Guide steps */}
          <View style={styles.guideContainer}>
            <View style={styles.guideItem}>
              <Ionicons name="camera-outline" size={30} color="#FE6D2B" />
              <Text style={styles.guideText}>Keep the mobile in center</Text>
            </View>

            <View style={styles.guideItem}>
              <Ionicons name="arrow-forward-circle-outline" size={30} color="#FE6D2B" />
              <Text style={styles.guideText}>Try to capture from a wide area</Text>
            </View>

            <View style={styles.guideItem}>
              <Ionicons name="images-outline" size={30} color="#FE6D2B" />
              <Text style={styles.guideText}>If taking multiple pictures try to take on same angle!</Text>
            </View>
          </View>

          {/* Close button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Got it!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  illustration: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  guideContainer: {
    width: '100%',
    marginBottom: 20,
  },
  guideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  guideText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  closeButton: {
    backgroundColor: '#FE6D2B',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Capture_Guide_one;
