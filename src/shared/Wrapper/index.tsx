import { StyledWrapper } from "./styles";

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
