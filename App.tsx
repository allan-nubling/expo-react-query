import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CharactersHome,
  CharactersHomeParams,
  CharactersHomeRoute,
  CharactersHomeTitle,
} from "./Src/Modules/Character/Pages/CharactersHome";
import {
  CharacterDetailPage,
  CharacterDetailPageParams,
  CharacterDetailPageRoute,
  CharacterDetailPageTitle,
} from "./Src/Modules/Character/Pages/CharacterDetail";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./Src/Modules/Shared/Services/QueryClient";
import {
  CharactersPageWithState,
  CharactersPageWithStateParams,
  CharactersPageWithStateRoute,
  CharactersPageWithStateTitle,
} from "./Src/Modules/Character/Pages/CharactersWithState";
import {
  CharactersPageWithQuery,
  CharactersPageWithQueryParams,
  CharactersPageWithQueryRoute,
  CharactersPageWithQueryTitle,
} from "./Src/Modules/Character/Pages/CharactersWithQuery";
import {
  SimpleDataPage,
  SimpleDataPageParams,
  SimpleDataPageRoute,
  SimpleDataPageTitle,
} from "./Src/Modules/SimpleData/Pages/SimpleDataForm";

export type StackParamList = {
  [CharactersHomeRoute]: CharactersHomeParams;
  [CharactersPageWithStateRoute]: CharactersPageWithStateParams;
  [CharactersPageWithQueryRoute]: CharactersPageWithQueryParams;
  [CharacterDetailPageRoute]: CharacterDetailPageParams;
  [SimpleDataPageRoute]: SimpleDataPageParams;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={CharactersHomeRoute}>
          <Stack.Screen
            name={CharactersHomeRoute}
            component={CharactersHome}
            options={{ title: CharactersHomeTitle }}
          />
          <Stack.Screen
            name={CharactersPageWithStateRoute}
            component={CharactersPageWithState}
            options={{ title: CharactersPageWithStateTitle }}
          />
          <Stack.Screen
            name={CharactersPageWithQueryRoute}
            component={CharactersPageWithQuery}
            options={{ title: CharactersPageWithQueryTitle }}
          />
          <Stack.Screen
            name={CharacterDetailPageRoute}
            component={CharacterDetailPage}
            options={{ title: CharacterDetailPageTitle }}
          />
          <Stack.Screen
            name={SimpleDataPageRoute}
            component={SimpleDataPage}
            options={{ title: SimpleDataPageTitle }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
