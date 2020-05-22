import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CommentCard from '@app/components/CommentCard';
import { Comment } from '@interfaces/comment';
import { COMMENTS } from '@constants/mockData';

import styles from './styles';

function CommentList() {
  const renderComment = (comment: Comment) => <CommentCard key={comment.id} {...comment} />;
  return (
    <View style={styles.commentSection}>
      <View>{COMMENTS.map(renderComment)}</View>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CommentList;
