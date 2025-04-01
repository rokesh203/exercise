import { Text, View, Image, ActivityIndicator, FlatList } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

export default function Index() {
  const router = useRouter();

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() =>
    fetchMovies({ query: '' })
  );

  const renderHeader = () => (
    <View style={{ paddingHorizontal: 20 }}>
      <Image source={images.bg} style={{ position: 'absolute', width: '100%', zIndex: 0 }} />
      <Image source={icons.logo} style={{ width: 48, height: 40, marginTop: 80, marginBottom: 20, alignSelf: 'center' }} />
      <SearchBar onPress={() => router.push("/search")} placeholder="Search for a movie" />
      <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
        Latest Movies
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={{ marginTop: 20 }}>
      <SearchBar onPress={() => router.push("/search")} placeholder="Search for a movie" />
    </View>
  );

  if (moviesLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: 'primary', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (moviesError) {
    return (
      <View style={{ flex: 1, backgroundColor: 'primary', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Error: {moviesError?.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'primary' }}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Text style={{ color: 'white', fontSize: 14, paddingHorizontal: 20 }}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
