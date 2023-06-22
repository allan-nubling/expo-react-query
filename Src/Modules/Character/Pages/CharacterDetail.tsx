import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useFetchCharacterDetail } from "../Hooks/useFetchCharacter";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../App";
import React, { useEffect } from "react";

export const CharacterDetailPageRoute = "CharacterDetail";
export const CharacterDetailPageTitle = "Character Details";
export type CharacterDetailPageParams = {
  id: number;
};
type Props = NativeStackScreenProps<StackParamList, "CharacterDetail">;

export function CharacterDetailPage({ route: { params } }: Props) {
  const { setOptions } = useNavigation();
  const { goBack } = useNavigation();
  const { character: character1 } = useFetchCharacterDetail(params.id);
  const { character: character2 } = useFetchCharacterDetail(params.id + 1);

  useEffect(() => {
    setOptions({ title: character1?.name || CharacterDetailPageTitle });
  }, [character1]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.contentRow}>
          {!character1 ? (
            <ActivityIndicator size="large" color="#32ea41" />
          ) : (
            <View style={styles.row}>
              <Image style={styles.image} source={{ uri: character1.image }} />
              <View>
                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Name: <Text style={styles.value}>{character1.name}</Text>
                  </Text>
                </View>

                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Status:{" "}
                    <Text style={styles.value}>{character1.status}</Text>
                  </Text>
                </View>

                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Species:{" "}
                    <Text style={styles.value}>{character1.species}</Text>
                  </Text>
                </View>

                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Gender:{" "}
                    <Text style={styles.value}>{character1.gender}</Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.contentRow}>
          {!character2 ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View style={styles.row}>
              <Image style={styles.image} source={{ uri: character2.image }} />
              <View>
                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Name: <Text style={styles.value}>{character2.name}</Text>
                  </Text>
                </View>

                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Status:{" "}
                    <Text style={styles.value}>{character2.status}</Text>
                  </Text>
                </View>

                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Species:{" "}
                    <Text style={styles.value}>{character2.species}</Text>
                  </Text>
                </View>

                <View style={styles.propertyRow}>
                  <Text style={styles.property}>
                    Gender:{" "}
                    <Text style={styles.value}>{character2.gender}</Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  contentRow: {
    flexDirection: "row",
    marginTop: 10,
    minHeight: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 5,
    marginBottom: 30,
  },
  buttonText: { fontSize: 20, padding: 5 },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 20,
    borderRadius: 30,
  },
  propertyRow: {
    width: "80%",
    flexDirection: "row",
  },
  property: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    width: "100%",
    fontSize: 16,
    fontWeight: "normal",
  },
});
