import { Colors, Media, FontSize } from '@/styles';
import styled from '@emotion/styled';
import { IconProps } from './Icon';

const Like = ({ color, size, ...props }: IconProps): JSX.Element => {
  return (
    <StyledSvg
      size={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.2246 4.98517C15.989 4.43961 15.6493 3.94523 15.2244 3.5297C14.7993 3.11293 14.298 2.78173 13.7479 2.55411C13.1774 2.31715 12.5656 2.19586 11.9479 2.19728C11.0813 2.19728 10.2357 2.43458 9.50098 2.88282C9.3252 2.99005 9.1582 3.10782 9 3.23615C8.8418 3.10782 8.6748 2.99005 8.49902 2.88282C7.76426 2.43458 6.91875 2.19728 6.05215 2.19728C5.42812 2.19728 4.82344 2.31681 4.25215 2.55411C3.7002 2.78263 3.20273 3.11134 2.77559 3.5297C2.35019 3.94476 2.01037 4.43926 1.77539 4.98517C1.53105 5.55294 1.40625 6.15587 1.40625 6.77638C1.40625 7.36173 1.52578 7.97169 1.76309 8.5922C1.96172 9.11075 2.24648 9.64864 2.61035 10.1918C3.18691 11.0514 3.97969 11.9479 4.96406 12.8567C6.59531 14.3631 8.21074 15.4037 8.2793 15.4459L8.6959 15.7131C8.88047 15.8309 9.11777 15.8309 9.30234 15.7131L9.71895 15.4459C9.7875 15.402 11.4012 14.3631 13.0342 12.8567C14.0186 11.9479 14.8113 11.0514 15.3879 10.1918C15.7518 9.64864 16.0383 9.11075 16.2352 8.5922C16.4725 7.97169 16.592 7.36173 16.592 6.77638C16.5938 6.15587 16.4689 5.55294 16.2246 4.98517V4.98517Z"
        fill={color}
      />
    </StyledSvg>
  );
};

Like.defaultProps = {
  color: Colors.point,
};

const StyledSvg = styled.svg<IconProps>`
  ${({ size }) => {
    if (size) {
      return `
        width: ${size}px;
        height: auto;
      `;
    } else {
      return `
        @media ${Media.sm} {
          width: ${FontSize.base};
          height: ${FontSize.base};
        }
        @media ${Media.md} {
          width: ${FontSize.medium};
          height: ${FontSize.medium};
        }
        @media ${Media.lg} {
          width: ${FontSize.medium};
          height: ${FontSize.medium};
        }
      `;
    }
  }}
`;

export default Like;
