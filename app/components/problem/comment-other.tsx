import styled from 'styled-components';
import type { IComments } from '~/models/problem/comments';
import { convertUTCtoKST } from './convertUTCtoKST';

export const otherComments = (comments: IComments[]) => {
  return comments.map(({ updatedAt, description, id, member }, index) => {
    const Idx = `${id}_${index}`;
    const kstDate = convertUTCtoKST(updatedAt);
    const uploadTime = `${kstDate.getFullYear()}.${
      kstDate.getMonth() + 1
    }.${kstDate.getDate()} ${kstDate.getHours()}:${kstDate.getMinutes()}`;

    const { nickname, job, thumbnail } = member;
    const CommentImg = () => {
      if (thumbnail === null) {
        return <ThumbnailWrapper />;
      }
      return <Img src={thumbnail} alt='thumbnail' />;
    };

    return (
      <OtherCommentWrapper key={Idx}>
        {CommentImg()}
        <OtherCommentContent>
          <OtherCommentName className='body3_MD'>
            <div>{nickname}</div>
            <Job>·</Job>
            <Job className='caption1_RG'>{job}</Job>
          </OtherCommentName>
          <PreWrap className='body3_MD'>{description}</PreWrap>
          <OtherCommentDate className='caption2_RG'>
            {uploadTime}
          </OtherCommentDate>
        </OtherCommentContent>
      </OtherCommentWrapper>
    );
  });
};
const OtherCommentWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const OtherCommentDate = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const OtherCommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: -webkit-fill-available;
`;
const OtherCommentName = styled.div`
  margin-bottom: 4px;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ThumbnailWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: ${(prop) => prop.theme.color.grayScale.gray_700};
  border-radius: 99px;
`;
const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 99px;
`;
const Job = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;

const PreWrap = styled.div`
  white-space: pre-wrap;
`;