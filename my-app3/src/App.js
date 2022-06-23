import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="그리즐리" color="brown" isSpecial={true}/>
      <Hello name="라미" color="pink"/>
    </Wrapper>
  );
}

export default App;