import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import adventure from '../public/adventure.jpeg';

const CardDescription = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default function MediaCard({ title, description, image }) {
  return (
    <Card>
      <Image
        alt="Mountains"
        src={image}
        layout="responsive"
        width={3}
        height={2}
        placeholder="blur"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <CardDescription variant="body2" color="text.secondary">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({}),
};

MediaCard.defaultProps = {
  title: null,
  description: null,
  image: adventure,
};
