import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 66.67%;
`;

export default function MediaCard({ title, description, image }) {
  return (
    <Card>
      <ImageContainer>
        <Image
          alt="Mountains"
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

MediaCard.defaultProps = {
  title: null,
  description: null,
  image: 'https://media.graphcms.com//GImOGpTPTuOvZC0QNXov',
};
