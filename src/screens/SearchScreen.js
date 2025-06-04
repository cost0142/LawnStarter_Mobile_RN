// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`http://localhost:3001/api/people?search=${query}`);
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error('Erro ao buscar personagens:', err);
    }
  };

  const renderItem = ({ item }) => {
    const personId = item.url.match(/people\/(\d+)\//)?.[1];
    const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${item.name}`;
    console.log('SearchScreen', personId);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('PersonDetail', { person: item, personId })}
      >
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⭐ SWStarter</Text>
      <TextInput
        style={styles.input}
        placeholder="Search people"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 10
  },
  list: { paddingTop: 20 },
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', padding: 12, marginBottom: 10,
    borderRadius: 10, elevation: 2
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  name: { fontSize: 16 }
});
