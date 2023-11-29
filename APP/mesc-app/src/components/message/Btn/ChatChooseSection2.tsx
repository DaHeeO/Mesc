import React from 'react';
import {SectionBody, SectionContainer} from './SectionStyle';
import {
  GoDataControll,
  GoReport,
  GoStartChat,
} from '../../common/id/ChatChooseId';

export const ChatChooseSection2 = () => {
  return (
    <SectionBody>
      <SectionContainer
        height="30px"
        // marginBottom="10px"
        // width="220px"
        // height="50%"
        // justify="space-between"
        align="center">
        <SectionContainer width="120px" height="30px">
          <GoStartChat />
        </SectionContainer>
        <SectionContainer width="120px" height="30px">
          <GoReport />
        </SectionContainer>
      </SectionContainer>
    </SectionBody>
  );
};
