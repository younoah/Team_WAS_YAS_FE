import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/';
import { EditBox, LikeBox } from '@/components';
import { Colors, Media, FontSize } from '@/styles';
import { IconButton, Avatar } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import Editor from './Editor';
import { UserType, CommentType } from '@/Models';
import moment from 'moment';
import { css } from '@emotion/react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

export interface CommentProps extends React.ComponentProps<'div'> {
  user: UserType;
  comment: CommentType;
  editable?: boolean;
  onEditComment?: (commentId: number, editedText: string) => void;
  onDeleteComment?: (commentId: number) => void;
  onClickLike?: (commentId: number) => void;
}

const Comment = ({
  user,
  comment,
  editable: initEditable,
  onEditComment,
  onDeleteComment,
  onClickLike,
  ...props
}: CommentProps): JSX.Element => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [editorVisible, setEditorVisible] = useState<boolean>(false);
  const [spreadable, setSpreadable] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [text, setText] = useState<string>(comment.text);

  useEffect(() => {
    if (!ref.current?.scrollHeight) return;
    setSpreadable(ref.current?.scrollHeight > 48);
    // console.log(ref.current?.scrollHeight > 48);
    console.log(spreadable);
  });

  const handleClickMoreIconButton = () => {
    setEditorVisible(true);
  };

  const handleCloseDeleteBox = () => {
    setEditorVisible(false);
  };

  const handleClickDeleteButton = () => {
    onDeleteComment && onDeleteComment(comment.commentId);
  };

  const handleClickUpdateButton = () => {
    setEditable(true);
  };

  const handleClickLikeButton = (likCount: number) => {
    onClickLike && onClickLike(comment.commentId);
  };

  const handleSubmit = (newText: string) => {
    setText(newText);
    setEditable(false);
    onEditComment && onEditComment(comment.commentId, newText);
  };

  return (
    <Container {...props}>
      <Header>
        <UserInfoContainer>
          <StyledAvatar
            src={user.profileImageUrl ? user.profileImageUrl : undefined}
          />
          <UserInfoTextWrapper>
            <UserNameText>{user.nickName}</UserNameText>
            <DateText>
              {moment(comment.updatedAt).format('YYYY-MM-DD hh:mm')}
            </DateText>
          </UserInfoTextWrapper>
        </UserInfoContainer>
        <ToolWrapper>
          <LikeBox
            interactive
            count={comment.likes.length}
            onClick={handleClickLikeButton}
          />
          {initEditable && (
            <IconButton style={{ padding: 0 }}>
              <MoreVert onClick={handleClickMoreIconButton} />
            </IconButton>
          )}
        </ToolWrapper>
      </Header>
      {initEditable && editable ? (
        <Editor
          initText={text}
          onSubmit={handleSubmit}
          onClose={() => {
            setEditable(false);
          }}
        />
      ) : (
        <TextArea ref={ref} disabled id="text" name="text" value={text} />
      )}
      {spreadable ? (
        <SpreadButton>
          <KeyboardArrowDownRoundedIcon />
          펼치기
        </SpreadButton>
      ) : (
        <SpreadButton>
          <KeyboardArrowUpRoundedIcon />
          접기
        </SpreadButton>
      )}
      {editorVisible && (
        <StyledEditBox
          visible={true}
          onClose={handleCloseDeleteBox}
          onClickDeleteButton={handleClickDeleteButton}
          onClickUpdateButton={handleClickUpdateButton}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: 290px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${Colors.backgroundButton};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 3rem;
  /* height: auto; */
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  ${({ disabled }) =>
    disabled
      ? css`
          padding-top: 1rem;
        `
      : css`
          padding: 0.5rem;
        `}
  border: none;
  border-radius: 8px 0 0 8px;
  outline: none;
  color: ${Colors.textPrimary};
  background-color: ${({ disabled }) =>
    disabled ? 'transparent' : Colors.backgroundModal};
  resize: none;

  @media ${Media.sm} {
    font-size: ${FontSize.small};
  }
  @media ${Media.md} {
    font-size: ${FontSize.base};
  }
  @media ${Media.lg} {
    font-size: ${FontSize.base};
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
`;

const UserInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserNameText = styled.p`
  color: ${Colors.textPrimary};
  font-size: ${FontSize.base};
  margin-bottom: 0.5rem;
`;

const DateText = styled.p`
  color: ${Colors.textSecondary};
  font-size: ${FontSize.micro};
`;

const ToolWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledEditBox = styled(EditBox)`
  position: absolute;
  top: -3rem;
  right: 1rem;
  z-index: 1;
`;

const SpreadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1rem;
  background-color: transparent;
  color: ${Colors.textPrimary};
  font-size: ${FontSize.small};
  padding: 0 0.5rem;
  height: 2rem;
  cursor: pointer;

  @media (hover: hover) {
    :hover {
      color: ${Colors.point};
    }
  }

  &: active {
    color: ${Colors.pointLight};
  }
`;

export default Comment;
