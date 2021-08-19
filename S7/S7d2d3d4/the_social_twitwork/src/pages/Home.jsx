import React from 'react';
import Presentation from '../components/Presentation/Presentation';
import NewText from '../components/NewText';
import MessagesList from '../components/MessagesList/MessagesList';
const Home = () => {
  return (
    <div>
      
      <Presentation/>
      <NewText/>
      <MessagesList/>

    </div>
  );
}

export default Home;
