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

const StyledCard = styled(Card)`
  height: 100%;
  box-shadow: 0px 11px 18px 10px rgba(0, 0, 0, 0.06), 0px 11px 18px 10px rgba(0, 0, 0, 0.03);
  position: relative;
  top: 0;
  transition: all .25s ease;
  cursor: pointer;

  &:hover {
    top: -10px;
    box-shadow: 0 24px 20px rgb(0 0 0 / 25%)
  }
`;

export default function MediaCard({ title, description, image }) {
  return (
    <StyledCard>
      <ImageContainer>
        <Image
          alt="Mountains"
          src={image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
        />
      </ImageContainer>
      <CardContent>
        <Typography align="center" gutterBottom variant="h6" component="h3">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </StyledCard>
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
