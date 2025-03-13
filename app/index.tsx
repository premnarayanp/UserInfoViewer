import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { addUserList } from "../redux/actions/userActions";

const API_URL = "https://random-data-api.com/api/users/random_user?size=80";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    } else {
      setLoading(false);
      router.replace("/user/0");
    }
  }, [users]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch(addUserList(data));
      setLoading(false);
      router.replace("/user/0");
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: "center" }} />;
  }

  return null;
}
