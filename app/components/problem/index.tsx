import { useParams } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  getProblemDetail,
  getProblemDetailTags,
} from '~/data/problem/get-problem';
import { Banner } from './banner';

import { Comment } from './comment';
import { MainContent } from './main-content';
import { SimilerTraining } from './similer-problem';
import { WaitAnswer } from './waiting-solution-box';

export const ProblemMain = () => {
  const params = useParams<string>();
  const problemData = useRecoilValue(getProblemDetail(params.id));
  const hashTags = useRecoilValue(getProblemDetailTags(params.id as string));

  return (
    <Wrapper>
      <FlexBox>
        <MainContent problemData={problemData} hashTags={hashTags} />
        <WaitAnswer id={params.id as string} />
        <SimilerTraining id={problemData.lessonCategory.id} />
        <Comment id={params.id as string} />
      </FlexBox>
      <Banner
        isBookmark={problemData.isBookmark as boolean}
        isLike={problemData.isLike as boolean}
        id={params.id as string}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 0 auto 50px auto;
  padding-top: 67px;
  display: flex;
  gap: 38px;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
