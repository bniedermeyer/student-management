import React from 'react';
import { Card, Pane, Heading, Paragraph } from 'evergreen-ui';
import StyledLink from '../components/hoc/StyledLink';
import image from '../assets/undraw_exams_g4ow.svg';

const Home = () => (
  <Pane>
    <Heading size={900} margin={50} is="h1">
      Welcome to the Student Management Suite!
    </Heading>
    <img height={250} src={image} alt="animation of students studying" />
    <Paragraph margin={50}>Please choose from the options below</Paragraph>

    <Pane
      height={'100%'}
      display="flex"
      justifyContent="center"
      className="cards"
    >
      <Card
        elevation={1}
        hoverElevation={4}
        padding={50}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        margin={25}
        background="blueTint"
      >
        <StyledLink to="/students">
          <Heading>Student Search</Heading>
        </StyledLink>
      </Card>
      <Card
        elevation={1}
        hoverElevation={4}
        padding={50}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        margin={25}
        background="blueTint"
      >
        <StyledLink to="/add-student">
          <Heading>Add a Student</Heading>
        </StyledLink>
      </Card>
    </Pane>
  </Pane>
);

export default Home;
