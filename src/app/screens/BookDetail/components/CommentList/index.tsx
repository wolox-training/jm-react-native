import React from 'react';
import { ListRenderItem, View, TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CommentCard from '@app/components/CommentCard';
import { Comment } from '@interfaces/comment';
import { COMMENTS } from '@constants/mockData';

import styles from './styles';

function CommentList() {
  const keyExtractor = ({ id }: Comment) => String(id);
  const renderComment: ListRenderItem<Comment> = ({ item }) => <CommentCard {...item} />;
  return (
    <View style={styles.commentSection}>
      <FlatList<Comment> data={COMMENTS} renderItem={renderComment} keyExtractor={keyExtractor} />
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CommentList;
