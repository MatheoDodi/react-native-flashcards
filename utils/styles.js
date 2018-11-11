import styled from 'styled-components/native';

export const Title = styled.Text`
font-size: 35;
margin-bottom: 10px;
color: #FBF9FB;
`

export const Subtitle = styled.Text`
  font-size: 17;
  color: #000;
`

export const ButtonContainer = styled.View`
align-items: center;
`

export const AnswerButton = styled.TouchableOpacity`
margin: 5px;
background-color: #414345;
border: 1px solid ${props => props.color};
width: 150;
padding: 20px;
border-radius: 5;
shadow-color: ${props => props.color};
shadow-radius: 10;
shadow-opacity: .95;
`

export const PrimaryButton = styled.TouchableOpacity`
  margin: 5px;
  background-color: ${props => props.disabled ? 'gray' : props.color};
  width: 150;
  padding: 20px;
  border-radius: 5;
  shadow-color: #000;
  shadow-radius: 6;
  shadow-opacity: .2;
`

export const SecondaryButton = styled.TouchableOpacity`
margin: 5px;
background-color: white;
border: 1px solid #4e54c8;
width: 150;
padding: 20px;
border-radius: 5;
shadow-color: #000;
shadow-radius: 6;
shadow-opacity: .2;
`

export const HomeButton = styled.TouchableOpacity`
margin: 5px;
background-color: #414345;
border: 1px solid ${props => props.color};
width: 150;
padding: 20px;
border-radius: 5;
shadow-color: ${props => props.color};
shadow-radius: 10;
shadow-opacity: .95;
`

export const QuestionText = styled.Text`
  text-align: center;
  font-size: 25;
  margin-bottom: 10px;
  color: #414345;
`