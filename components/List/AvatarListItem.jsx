import React from 'react';
import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Container = styled.div`
    padding: 24px 32px;
    background-color: #f6f7ff;
`;
const RowContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const StyledImage = styled(Image)`
    border-radius: 50%;
`;

const Title = styled(Typography)`
    align-self: center;
    margin-left: 24px;
`;

export default function TeamMember({ title, description, image }) {
  return (
    <Container>
      <RowContainer>
        <ImageContainer>
          <StyledImage
            alt="Mountains"
            src={image}
            layout="responsive"
            width={1}
            height={1}
            placeholder="blur"
          />
        </ImageContainer>
        <Title
          variant="h6"
        >
          {title}
        </Title>
      </RowContainer>
      <Typography
        variant="body2"
      >
        {description}
      </Typography>
    </Container>
  );
}
