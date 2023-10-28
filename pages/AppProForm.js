import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebase";

export default function AppProForm() {
  // const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [downloadUrl , setDownloadUrl] = useState('')

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = result.assets[0].uri;
    console.log(source);
    setImage(source);

  };


  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image);
    const bold = await response.blob();
    const filename = image.substring(image.lastIndexOf("/") + 1);

    console.log("อันนี้", filename);

    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + filename);
    const uploadTask = uploadBytesResumable(storageRef, bold, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadUrl(downloadURL)
          console.log("File available at", downloadURL);
        });
      }
    );

    try {
      const docRef = await addDoc(collection(db, "Products"), {
        Name: name,
        Email: email,
        Password: password,
        Roles: 'user',
      });
      console.log("Document written with ID: ", docRef.id);

      alert('sign up account success!' , 'Please log in to access the 2love application.' , [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      
      navigation.reset({
        index: 0,
        routes: [{ name: "StartScreen" }],
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {image != null ? <Text>File Name: {image ? image : ""}</Text> : null}
      <Button
        title="Pick an image from camera roll"
        onPress={choosePhotoFromLibrary}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity activeOpacity={0.5} onPress={uploadImage}>
        <Text>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
}
