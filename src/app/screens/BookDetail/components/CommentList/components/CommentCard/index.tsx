import React from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';

import { Comment } from '@interfaces/comment';

interface Props extends Comment {}

function CommentCard({ avatar, author, content }: Props) {
  return (
    <View style={styles.comment}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.commentSummary}>
        <Text style={styles.commentAuthor}>{author}</Text>
        <Text style={styles.commentContent}>{content}</Text>
      </View>
    </View>
  );
}

export default CommentCard;
