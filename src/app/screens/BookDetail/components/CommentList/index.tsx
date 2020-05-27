import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Comment } from '@interfaces/comment';
import { COMMENTS } from '@constants/mockData';

import CommentCard from './components/CommentCard';
import styles from './styles';

function CommentList() {
  const [listIsExpanded, setlistIsExpanded] = useState(false);
  const togglelistIsExpanded = () => setlistIsExpanded(!listIsExpanded);
  const commentsLength = listIsExpanded ? 5 : 2;
  const renderComment = (comment: Comment) => <CommentCard key={comment.id} {...comment} />;
  return (
    <View style={styles.commentSection}>
      <View>{COMMENTS.slice(0, commentsLength).map(renderComment)}</View>
      <TouchableOpacity onPress={togglelistIsExpanded} style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>{listIsExpanded ? 'Show Less' : 'Show More'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CommentList;
