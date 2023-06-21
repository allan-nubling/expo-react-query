import {
  ActivityIndicator,
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
import React from "react";

export const CharacterDetailPageRoute = "CharacterDetail";
export const CharacterDetailPageTitle = "Character Details";
export type CharacterDetailPageParams = {
  id: number;
};
type Props = NativeStackScreenProps<StackParamList, "CharacterDetail">;

export function CharacterDetailPage({ route: { params } }: Props) {
  const { goBack } = useNavigation();
  const { character: character1 } = useFetchCharacterDetail(params.id);
  const { character: character2 } = useFetchCharacterDetail(params.id + 1);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        {!character1 ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          Object.keys(character1).map((key) => (
            <View key={key} style={styles.row}>
              <Text style={styles.property}>
                {key + ": "}
                <Text style={styles.value}>
                  {character1[key as keyof typeof character1]}
                </Text>
              </Text>
            </View>
          ))
        )}
        {!character2 ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          Object.keys(character2).map((key) => (
            <View key={key} style={styles.row}>
              <Text style={styles.property}>
                {key + ": "}
                <Text style={styles.value}>
                  {character2[key as keyof typeof character2]}
                </Text>
              </Text>
            </View>
          ))
        )}
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
  },
  name: { fontSize: 20 },
  property: { fontSize: 20, fontWeight: "bold" },
  value: { fontSize: 16, fontWeight: "normal" },
});
