import { Logout, LogoutCurve, Notification, Setting, User, Edit2 } from 'iconsax-react-native';
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginTop: 20, marginBottom: 10 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>PROFILE PENGGUNA</Text>
        
      </View>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <View style={{ ...styles.imageContainer, paddingHorizontal: 20, marginBottom: 20 }}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/04/0e/89/040e8957be0d1dab64764cbd1ca5eb1c.jpg',
              }}
              style={{ ...styles.profileImage }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.profileName}>Nabila Paramita Hapsari</Text>
              <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                <User color={'blue'} variant="Linear" size={20} />
                <Text style={{ ...styles.profileInfo, color: 'blue', fontWeight: 'bold', paddingLeft: 5, }}>Pengguna Baru</Text>
              </View>
            </View>
          </View>


          <View style={{}}>
            <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
              <Text style={{ ...styles.profileInfo, color: 'black', fontWeight: 'bold', }}>Akun</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <Edit2 color={'blue'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Edit Profile</Text>
                <Text style={styles.profileSettingDesc}>Perbarui informasi mengani diri anda.</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <Setting color={'blue'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Pengaturan</Text>
                <Text style={styles.profileSettingDesc}>Keamanan dan pengaturan lainnya</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <Logout color={'blue'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Log Out</Text>
                <Text style={styles.profileSettingDesc}>Keluar dari akun </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
    backgroundColor: 'white',
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
  },
  card: {
    width: '48%',
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'skyblue',
  },
  profileName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  profileBio: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
  profileNumber: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  profileSetting: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  profileSettingDesc: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  profileInfo: {
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
  },
  likedPhotosText: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  informationContainer: {
    backgroundColor: 'lightgrey',
    marginHorizontal: 24,
    marginVertical: 24,
    flexDirection: 'row',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  }
});