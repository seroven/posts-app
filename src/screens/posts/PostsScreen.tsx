import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppContext} from '../../contexts/AppContext';
import {ThemeType} from '../../types/themeTypes';
import {PostType} from '../../types/postsTypes';
import axios from 'axios';

export const PostsScreen = () => {
  const styles = styleSheet(useContext(AppContext));
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(posts.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={({item}) => (
          <Text key={item.id} style={{marginVertical: 8}}>{item.title}</Text>
        )}></FlatList>
    </View>
  );
};

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,

    },
    title: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.bigTitle,
      width: '100%',
      textAlign: 'center',
    },
    list: {
      paddingHorizontal: 24
    }
  });
