import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Container = styled.div`
    padding: 24px 32px;
    background-color: ${(props) => props.theme.palette.primary.background};;
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

function TeamMember({ title, description, image }) {
  return (
    <Container>
      <RowContainer>
        <ImageContainer>
          <StyledImage
            alt="Mountains"
            src={image}
            layout="responsive"
            placeholder="blur"
            blurDataURL={image}
            width={1}
            height={1}
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
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Container>
  );
}

TeamMember.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

TeamMember.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default TeamMember;
