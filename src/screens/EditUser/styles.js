import styled from 'styled-components/native'
import { theme } from '../../styles'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

export const Form = styled.View`
  padding: ${theme.metrics.px(20)}px;
  align-items: center;
`

export const ProfileImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
  margin-top: 10px;
`