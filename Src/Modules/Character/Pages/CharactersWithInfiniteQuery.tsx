import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { CharacterDetailPageRoute } from "./CharacterDetail";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../App";
import { useFetchCharactersListWithInfinityQuery } from "../Hooks/useFetchCharactersListWithInfinityQuery";
import { CharacterModel } from "../Model/Character.model";

export const CharactersPageWithInfiniteQueryRoute =
  "CharactersPageWithInfiniteQuery";
export const CharactersPageWithInfiniteQueryTitle = "Characters Infinite Query";
export type CharactersPageWithInfiniteQueryParams = undefined;

export function CharactersPageWithInfiniteQuery() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();
  const { characterList, fetchNextPage, isFetching } =
    useFetchCharactersListWithInfinityQuery();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RefreshControl refreshing={isFetching} />
      <VirtualizedList
        style={styles.scrollView}
        keyExtractor={(item) => `${item.id}`}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        onEndReached={() => {
          if (isFetching) return;
          fetchNextPage();
        }}
        data={characterList}
        refreshing={isFetching}
        refreshControl={<RefreshControl refreshing={isFetching} />}
        renderItem={({ item: character }: { item: CharacterModel }) => (
          <View style={styles.innerContainer}>
            <TouchableOpacity
              key={character.id}
              style={styles.buttonBackground}
              onPress={() =>
                navigate(CharacterDetailPageRoute, { id: character.id })
              }
            >
              <Text style={styles.buttonText}>{character.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      ></VirtualizedList>
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
  scrollView: {
    width: "100%",
  },
  innerContainer: {
    width: "100%",
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
