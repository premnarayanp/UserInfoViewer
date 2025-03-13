
import React from "react";
import { View, Image, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { setUserIndex } from "../../redux/actions/userActions";
import CustomView from "../../components/CustomView";

export default function UserScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userIndex = Number(id);
  const user = users[userIndex];

  if (!user) return <Text>Loading...</Text>;

  const navigateTo = (newIndex) => {
    if (newIndex >= 0 && newIndex < users.length) {
      dispatch(setUserIndex(newIndex));
      router.replace(`/user/${newIndex}`);
    }else{
      alert("You can view max 80 User data")
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />

      <CustomView label="First Name" value={user.first_name} width="100%" backgroundColor="#fff" />
      <CustomView label="Last Name" value={user.last_name} width="100%" backgroundColor="#fff" />
      <CustomView label="Username" value={user.username} width="100%" backgroundColor="#f9f9f9" />
      <CustomView label="Email" value={user.email} width="100%" backgroundColor="#f9f9f9" />
      <CustomView label="Phone" value={user.phone_number} width="100%" backgroundColor="#f9f9f9" />
      <CustomView label="Address" value={`${user.address.street_address}, ${user.address.city}, ${user.address.state}`} width="100%" backgroundColor="#f9f9f9" editable />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigateTo(userIndex - 1)} disabled={userIndex === 0}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={() => navigateTo(userIndex - 10)} disabled={userIndex < 10}>
          <Text style={styles.buttonText}>«</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={() => navigateTo(userIndex + 10)} disabled={userIndex >= users.length - 10}>
          <Text style={styles.buttonText}>»</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigateTo(userIndex + 1)} disabled={userIndex === users.length - 1}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingHorizontal:20,paddingVertical:5, backgroundColor: "#fff", justifyContent: "space-between" },
  avatar: { width: 80, height: 80, borderRadius: 60, marginBottom: 5, borderWidth: 1 },
  rowContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  buttonContainer: { flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 20, alignItems: "center" },
  roundButton: {
    backgroundColor: "gray",
    borderRadius: 30,
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowButton: {
    // backgroundColor: "gray",
    backgroundColor: "#7075",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});



// import React from "react";
// import { View, Image, Button, StyleSheet } from "react-native";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { useSelector, useDispatch } from "react-redux";
// import { setUserIndex } from "../../redux/actions/userActions";
// import CustomView from "../../components/CustomView";

// export default function UserScreen() {
//   const { id } = useLocalSearchParams();
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.user.users);
//   const userIndex = Number(id);
//   const user = users[userIndex];

//   if (!user) return <Text>Loading...</Text>;

//   const navigateTo = (newIndex) => {
//     if (newIndex >= 0 && newIndex < users.length) {
//       dispatch(setUserIndex(newIndex));
//       router.replace(`/user/${newIndex}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: user.avatar }} style={styles.avatar} />

//       <CustomView label="First Name" value={user.first_name} width="100%" backgroundColor="#fff" />
//       <CustomView label="Last Name" value={user.last_name} width="100%" backgroundColor="#fff" />

//       <CustomView label="Username" value={user.username} width="100%" backgroundColor="#f9f9f9" />
//       <CustomView label="Email" value={user.email} width="100%" backgroundColor="#f9f9f9" />
//       <CustomView label="Phone" value={user.phone_number} width="100%" backgroundColor="#f9f9f9" />
//       <CustomView label="Address" value={`${user.address.street_address}, ${user.address.city}, ${user.address.state}`} width="100%" backgroundColor="#f9f9f9" editable />
      
//       <View style={styles.buttonContainer}>
//         <Button title="Previous" onPress={() => navigateTo(userIndex - 1)} disabled={userIndex === 0} />
//         <Button title="Next" onPress={() => navigateTo(userIndex + 1)} disabled={userIndex === users.length - 1} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff", justifyContent: "space-between" },
//   avatar: { width: 80, height: 80, borderRadius: 60, marginBottom: 5,borderWidth:1 },
//   rowContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
//   buttonContainer: { flexDirection: "row", justifyContent: "space-between", width: "80%", marginTop: 20, alignItems: "center" },
// });

