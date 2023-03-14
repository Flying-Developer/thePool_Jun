import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  loginInformation,
  platform,
} from '~/recoils/user/common/login-information';

import { loginProcess } from './platform-login-process';

export default function GoogleLogin() {
  const navigate = useNavigate();
  const setLoginInfo = useSetRecoilState(loginInformation);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      loginProcess({
        OAuthresponse: response.access_token,
        platform: platform.Google,
        navigate,
        setLoginInfo,
      });
    },
  });

  return (
    <div>
      <Google
        className='body1_BD'
        onClick={() => {
          login();
        }}
      >
        <img src='/icons/login/google.svg' alt='google' />
        구글로 계속하기
      </Google>
    </div>
  );
}
const Google = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 80px;
  gap: 8px;
  width: 330px;
  height: 72px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  cursor: pointer;

  text-align: center;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
