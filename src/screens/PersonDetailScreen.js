import React, { use, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

export default function PersonDetailScreen({ route }) {
	const { person } = route.params;
	const { personId } = route.params;
	const [films, setFilms] = useState([]);

	console.log(personId);



	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.name}>{person.name}</Text>
			<Text>Birth Year: {person.birth_year}</Text>
			<Text>Gender: {person.gender}</Text>
			<Text>Eye Color: {person.eye_color}</Text>
			<Text>Hair Color: {person.hair_color}</Text>
			<Text>Height: {person.height}</Text>
			<Text>Mass: {person.mass}</Text>

			<Text style={styles.subtitle}>🎬 Movies</Text>
			{films.length === 0 ? (
				<Text style={{ color: '#888' }}>No movies available.</Text>
			) : (
				films.map((film, index) => (
					<Text
						key={index}
						style={styles.link}
						onPress={() => Linking.openURL(film.url)}
					>
						{film.title}
					</Text>
				))
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { padding: 20 },
	name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
	subtitle: { marginTop: 20, fontWeight: 'bold', fontSize: 18 },
	link: { color: 'blue', marginTop: 5 },
});



