import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFetchCharactersList } from "../Hooks/useFetchCharactersListWithState";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { CharacterDetailPageRoute } from "./CharacterDetail";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../App";
import { CharactersPageWithQueryRoute } from "./CharactersWithQuery";
import { CharactersPageWithStateRoute } from "./CharactersWithState";

export const CharactersHomeRoute = "CharactersHome";
export const CharactersHomeTitle = "Characters";
export type CharactersHomeParams = undefined;

export function CharactersHome() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.buttonBackground}
        onPress={() => navigate(CharactersPageWithStateRoute)}
      >
        <Text style={styles.buttonText}>useState</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBackground}
        onPress={() => navigate(CharactersPageWithQueryRoute)}
      >
        <Text style={styles.buttonText}>React Query</Text>
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
  buttonBackground: {
    width: "80%",
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 5,
  },
  buttonText: { fontSize: 20, padding: 5 },
});
