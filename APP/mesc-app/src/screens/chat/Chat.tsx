import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import * as S from './Chat.styles';
import Header from '../../components/common/chatHeader/chatHeader';
import ChatbotProfile from '../../components/chat/chatbotProfileComponent';
import ChatInput from '../../components/chat/ChatInput';
import ChatbotStartBox from '../../components/chat/ChatbotStartBox';

// ChatMessage 타입 정의
interface ChatMessage {
  text: string;
}

function Chat() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]); // State to store chat messages
  const chatLayoutRef = useRef<ScrollView | null>(null); // Ref for the ScrollView

  const addChatMessage = (message: string) => {
    setChatMessages(prevMessages => [...prevMessages, {text: message}]);
  };

  const scrollToBottom = () => {
    chatLayoutRef.current?.scrollToEnd({animated: true});
  };

  useEffect(() => {
    // Whenever chatMessages change, scroll to the bottom
    scrollToBottom();
  }, [chatMessages]);

  const handleDataBoxPress = () => {
    // 데이터 조회 버튼이 클릭되었을 때 처리할 로직
    addChatMessage('데이터 조회');
  };

  const handleLogBoxPress = () => {
    // 로그 보기 버튼이 클릭되었을 때 처리할 로직
    addChatMessage('로그 보기');
  };

  return (
    <S.Container>
      <Header />
      {/* 챗봇 메세지 보이는 화면 */}
      <S.ChatLayout>
        <ScrollView ref={chatLayoutRef}>
          <ChatbotProfile />
          <S.MescContainer>
            <View style={{marginLeft: 10, marginTop: 5, marginBottom: 5}}>
              <Text
                style={{fontSize: 14, textAlign: 'left', fontWeight: 'bold'}}>
                안녕하세요! 000님{'\n'}무엇을 도와드릴까요?? 아래 버튼을 눌러
                {'\n'}원하시는 작업을 선택하세요!!
              </Text>
            </View>
          </S.MescContainer>
          {/* 챗봇 시작하기 박스 컴포넌트 */}
          <ChatbotStartBox
            handleDataBoxPress={handleDataBoxPress}
            handleLogBoxPress={handleLogBoxPress}
          />
          {chatMessages.map((message, index) => (
            <S.TextBox key={index}>
              <Text style={{fontSize: 14, textAlign: 'left', color: 'white'}}>
                {message.text}
              </Text>
            </S.TextBox>
          ))}
        </ScrollView>
      </S.ChatLayout>
      <ChatInput />
    </S.Container>
  );
}

export default Chat;