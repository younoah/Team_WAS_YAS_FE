import { postApi } from '@/apis';
import { Button, Container, Routine } from '@/components';
import { fetchRoutine, RootState } from '@/store';
import { Colors, FontSize, FontWeight, Media } from '@/styles';
import styled from '@emotion/styled';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const RoutinePostWritePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [content, setContent] = useState<string>();
  const { id } = useParams<Record<string, string>>();
  const { data: routine } = useSelector((state: RootState) => state.routine);

  const handlePostSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) {
      Swal.fire({
        icon: 'info',
        text: '포스트 내용을 입력해주세요!',
      });
    } else if (content.length > 80) {
      Swal.fire({
        icon: 'info',
        text: '포스트는 최대 80글자까지 입력 가능합니다!',
      });
    } else {
      if (!id) return;
      await postApi.createRoutinePost(parseInt(id), { content: content });
      setContent('');
      history.push('/community');
    }
  };
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    if (!id) return;
    dispatch(fetchRoutine(parseInt(id)));
  }, [id, dispatch]);

  return (
    <Container>
      <Title>나의 루틴을 소개해주세요!</Title>
      {routine && <Routine type="create" routineObject={routine} />}
      <Form onSubmit={handlePostSubmit}>
        <Span>최대 80글자까지 입력 가능</Span>
        <TextArea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
          placeholder="루틴 소개글을 작성해주세요."
        />
        {content && content.length > 80 ? (
          <WarningText>80글자 이하로 작성해주세요</WarningText>
        ) : (
          <WarningText>&nbsp;</WarningText>
        )}
        <PostButton>포스팅하기</PostButton>
      </Form>
    </Container>
  );
};
export default RoutinePostWritePage;

const Title = styled.h1`
  @media ${Media.sm} {
    margin: 2.5rem 0;
    font-weight: ${FontWeight.medium};
    font-size: ${FontSize.medium};
  }
  @media ${Media.md} {
    margin: 3.5rem 0;
    font-weight: ${FontWeight.medium};
    font-size: ${FontSize.large};
  }
  @media ${Media.lg} {
    margin: 3.5rem 0;
    font-weight: ${FontWeight.medium};
    font-size: ${FontSize.large};
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  width: 70%;
  text-align: right;
  color: ${Colors.functionNegative};
  @media ${Media.sm} {
    margin-top: 2rem;
    font-size: ${FontSize.micro};
  }
  @media ${Media.md} {
    margin-top: 4rem;
    font-size: ${FontSize.medium};
  }
  @media ${Media.lg} {
    margin-top: 4rem;
    font-size: ${FontSize.medium};
  }
`;

const TextArea = styled.textarea`
  width: 70%;
  border: none;
  outline-color: ${Colors.pointLight};
  background-color: ${Colors.backgroundButton};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 1.5rem;
  resize: none;
  margin: 1rem 0;
  @media ${Media.sm} {
    min-height: 160px;
    font-size: ${FontSize.small};
  }
  @media ${Media.md} {
    min-height: 200px;
    font-size: ${FontSize.medium};
  }
  @media ${Media.lg} {
    min-height: 200px;
    font-size: ${FontSize.medium};
  }
`;

const WarningText = styled.span`
  width: 70%;
  text-align: left;
  color: ${Colors.functionNegative};
  @media ${Media.sm} {
    font-size: ${FontSize.micro};
  }
  @media ${Media.md} {
    font-size: ${FontSize.medium};
  }
  @media ${Media.lg} {
    font-size: ${FontSize.medium};
  }
`;

const PostButton = styled(Button)`
  margin-top: 2rem;
  @media ${Media.sm} {
    max-width: 150px;
  }
  @media ${Media.md} {
    max-width: 270px;
  }
  @media ${Media.lg} {
    max-width: 270px;
  }
`;
