import React from 'react';
import * as S from './Intro1.styles';

import BackgroundIntro from '../../assets/images/background-intro.png';
import asset from '../../assets/images/intro1.png';

interface LoginProps {
  navigation: any;
}

const Intro1 = ({navigation}: LoginProps) => {
  return (
    <S.Container>
      <S.BackgroundImg source={BackgroundIntro} />
      <S.Div>
        <S.Top>
          <S.SkipBox>
            <S.Skip>Skip</S.Skip>
          </S.SkipBox>
          <S.Img source={asset} />
        </S.Top>
        <S.Body>
          <S.MainText>Work Smater And Collaborate Better</S.MainText>
          <S.SubText>
            You can easily put data with ChatBot in Apps, and add to chatroom or
            channel you want.
          </S.SubText>
          <S.Circles>
            <S.CircleSelected></S.CircleSelected>
            <S.Circle></S.Circle>
            <S.Circle></S.Circle>
          </S.Circles>
        </S.Body>
      </S.Div>
    </S.Container>
  );
};

export default Intro1;
