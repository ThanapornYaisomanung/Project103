import { View, Text } from 'react-native'
import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

export default function UserName() {
    const [UserName, setUserName] = useState('');

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const email = user.email;
      // console.log("This account:", uid, email);
      
      const q = query(collection(db, "Users"), where("Email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data().Name);
        setUserName(doc.id);
      });
      
    } else {
      // User is signed out
      alert("sign in Error!")
    }

  });
  return (
    <View>
      <Text>{UserName}</Text>
    </View>
  )
}