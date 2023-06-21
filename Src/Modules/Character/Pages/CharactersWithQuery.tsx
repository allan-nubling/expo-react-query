import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { CharacterDetailPageRoute } from "./CharacterDetail";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../App";
import { useFetchCharactersList } from "../Hooks/useFetchCharactersListWithQuery";

export const CharactersPageWithQueryRoute = "CharactersPageWithQuery";
export const CharactersPageWithQueryTitle = "Characters With React Query";
export type CharactersPageWithQueryParams = undefined;

export function CharactersPageWithQuery() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();
  const { isLoading, characterList } = useFetchCharactersList();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        characterList?.map((character) => (
          <TouchableOpacity
            key={character.id}
            style={styles.buttonBackground}
            onPress={() =>
              navigate(CharacterDetailPageRoute, { id: character.id })
            }
          >
            <Text style={styles.buttonText}>{character.name}</Text>
          </TouchableOpacity>
        ))
      )}
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
