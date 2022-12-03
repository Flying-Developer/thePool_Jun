import { NavLink } from '@remix-run/react';
import styled from 'styled-components';

interface IPages {
  title: string;
  link: string;
}

export default function MyPageHeader() {
  const pages: IPages[] = [
    { title: '프로필', link: 'profile' },
    { title: '아카이브', link: 'archive' },
    { title: '설정', link: 'setting' },
  ];

  const Links = pages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    return (
      <NavLink
        key={id}
        to={link}
        style={({ isActive }) => ({
          color: isActive ? '#2478F6' : 'rgba(31, 31, 31, 0.6)',
        })}
      >
        {title}
      </NavLink>
    );
  });

  return (
    <Wrapper>
      <Header>마이페이지</Header>
      <Content>{Links}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  background-color: #ffffff;
  position: sticky;
  padding: 17px 0 17px 172px;
  top: 56px;
  z-index: 1;
`;
const Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1f1f1f;
`;
const Content = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
  display: flex;
  gap: 24px;
`;