import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {getBlock} from '../../../../Api';
import DataBox from './DataBox';
import Label from './Label';
import * as S from './PreViewComponent.styles';
import {useRecoilState} from 'recoil';
import {SingleTableTitleState} from '../../../states/DataTitleState';
import {Card} from '../../../states/CardState';
import {ConditionIdState} from '../../../states/ConditionIdState';
import {cond} from 'lodash';
import ChatbotProfile from '../ChatbotProfileComponent';
import PreViewBox from './PreViewBox';

type LabelItem = {
  name: string;
  labelType: string;
  query: string;
};

type TableData = {
  // result?: string;
  columnNameList: string[];
  columnTypeList: string[];
  rowList: string[][];
};

type ButtonItem = {
  id: number;
  name: string;
  linkType: string;
  link: string;
  iconId?: any | null;
  response: string;
};

function PreViewComponent(props: {card: Card}) {
  const {card} = props;
  const [conditionId, setConditionId] = useRecoilState(ConditionIdState);

  return (
    <View>
      <S.DataContainer>
        <S.DataSection style={{height: 230}}>
          {/* 첫 번째 섹션: data1 렌더링 */}
          <PreViewBox
            table={card.table}
            title={card.title || ''}
            showButton={false}
          />
        </S.DataSection>
      </S.DataContainer>
    </View>
  );
}

export default PreViewComponent;