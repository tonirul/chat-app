import React from 'react';
import firebase from 'firebase/app';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import { auth, database } from '../misc/firebase';

function Signin() {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success('Signed In', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onFacebookSignin = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const onGoogleSignin = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel className="test">
              <div className="text-center">
                <h3>
                  Welcome to <span className="welcome-txt">Chit-Chat</span>
                </h3>
                <p>An app that’s hard to quit</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignin}>
                  <Icon icon="facebook" /> Continue with facebook
                </Button>
                <Button block color="green" onClick={onGoogleSignin}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default Signin;
