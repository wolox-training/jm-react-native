import React, { useState } from 'react';
import { View } from 'react-native';
import { Comment } from '@interfaces/comment';
import { COMMENTS } from '@constants/mockData';
import Button from '@app/components/Button';

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
      <Button
        onPress={togglelistIsExpanded}
        buttonStyle={styles.viewAllButton}
        buttonTextStyle={styles.viewAllButtonText}>
        {listIsExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </View>
  );
}

export default CommentList;
