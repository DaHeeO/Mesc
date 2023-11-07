import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../components/common/Theme';

export const // mesc 말하는 텍스트 창
  MescContainer = styled.View`
    background-color: ${colors.icy};
    border-radius: 10px;
    min-height: 25px;
    height: auto;
    margin-top: -8px;
  `;
