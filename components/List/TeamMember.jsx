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
    align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const StyledImage = styled(Image)`
    border-radius: 50%;
`;

const Title = styled(Typography)`
    align-self: center;
`;

const BioContainer = styled.div`
  padding: 0 24px;
`;

function TeamMember({
  title, description, image, role,
}) {
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
        <BioContainer>
          <Title
            variant="h6"
          >
            {title}
          </Title>
          <Typography color="primary" variant="subtitle2">
            {role}
          </Typography>
        </BioContainer>
      </RowContainer>
      <Typography
        component="div"
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
  role: PropTypes.string,
};

TeamMember.defaultProps = {
  title: null,
  description: null,
  image: null,
  role: null,
};

export default TeamMember;
