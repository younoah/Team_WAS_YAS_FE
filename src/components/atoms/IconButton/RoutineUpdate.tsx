import { Media } from '@/styles';
import styled from '@emotion/styled';
import Base, { ButtonProps } from '@/components/atoms/Button/Base';

const RoutineUpdate = ({ ...props }: ButtonProps): JSX.Element => {
  return (
    <RoutineBase {...props}>
      <Svg viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.1933 3.03985C17.7841 0.557648 15.3577 0.611648 14.4361 0.761048C14.3097 0.782911 14.1889 0.829651 14.0808 0.898557C13.9726 0.967463 13.8793 1.05716 13.8061 1.16245L5.49005 12.6356L1.41665 18.257C0.918475 18.9447 0.629685 19.7617 0.585053 20.6096L0.0522527 30.7328C0.0431702 30.9008 0.076243 31.0683 0.148458 31.2202C0.220673 31.372 0.329736 31.5034 0.465713 31.6024C0.60169 31.7013 0.76026 31.7646 0.926981 31.7866C1.0937 31.8086 1.26327 31.7886 1.42025 31.7283L10.8811 28.1103C11.6785 27.8043 12.3715 27.2732 12.8719 26.582L16.1911 22.001L25.2559 9.49285C25.3351 9.38434 25.3918 9.26108 25.4227 9.13033C25.4537 8.99957 25.4581 8.86395 25.4359 8.73145C25.2847 7.78465 24.5593 5.48785 21.1933 3.03985ZM10.9099 26.087L7.23245 27.5072C7.16305 27.5346 7.08661 27.5385 7.0148 27.5183C6.94298 27.4982 6.87972 27.4551 6.83465 27.3956C6.28295 26.6871 5.63113 26.0626 4.89965 25.5416C4.17842 25.0075 3.38434 24.5796 2.54165 24.2708C2.47165 24.2454 2.41176 24.198 2.37089 24.1357C2.33002 24.0734 2.31036 23.9996 2.31485 23.9252L2.53445 19.9904L3.52265 18.6314C3.52265 18.6314 5.73485 18.3272 8.62205 20.4278C11.5057 22.5266 11.8999 24.7262 11.8999 24.7262L10.9099 26.087Z"
          fill="#4859A4"
        />
      </Svg>
    </RoutineBase>
  );
};

const RoutineBase = styled(Base)`
  @media ${Media.sm} {
    width: 32px;
    height: 32px;
  }
  @media ${Media.md} {
    width: 48px;
    height: 48px;
    border-radius: 18px;
  }
  @media ${Media.lg} {
    width: 48px;
    height: 48px;
    border-radius: 18px;
  }
`;

const Svg = styled.svg`
  @media ${Media.sm} {
    width: 17px;
    height: 21px;
  }
  @media ${Media.md} {
    width: 26px;
    height: 32px;
  }
  @media ${Media.lg} {
    width: 26px;
    height: 32px;
  }
`;

export default RoutineUpdate;
