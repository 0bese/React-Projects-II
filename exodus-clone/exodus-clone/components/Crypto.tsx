import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { BlurView } from "expo-blur";

const Crypto = () => {
  // useEffect (async () => {
  //     const res = await fetch('/api/listings');
  //     const data = await res.json();
  //     console.log("🚀Logging the data🚀~"data);
  //   }, []);

  //   const { data } = useQuery ({
  //     queryKey: ['info', id],
  //     queryFn: async () => {
  //       const info = await fetch(`/api/info?ids=${id}`).then((res) => res.json());
  //       return info[+id];
  //     },
  //   });
  return (
    <BlurView>
      <Text>Crypto</Text>
    </BlurView>
  );
};

export default Crypto;

const styles = StyleSheet.create({});
