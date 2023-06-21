import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useFetchCharacterDetail } from "../../Character/Hooks/useFetchCharacter";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../../../App";
import React from "react";

export const SimpleDataPageRoute = "SimpleData";
export const SimpleDataPageTitle = "Simple Data";
export type SimpleDataPageParams = {
  id: number;
};
type Props = NativeStackScreenProps<StackParamList, "SimpleData">;

export function SimpleDataPage({ route: { params } }: Props) {
  const { goBack } = useNavigation();
  const { character } = useFetchCharacterDetail(params.id);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        {!character ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          Object.keys(character).map((key) => (
            <View key={key} style={styles.row}>
              <Text style={styles.property}>
                {key + ": "}
                <Text style={styles.value}>
                  {character[key as keyof typeof character]}
                </Text>
              </Text>
            </View>
          ))
        )}
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}
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
