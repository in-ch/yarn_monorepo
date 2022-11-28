import styled from '@emotion/styled';

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #fff;
  outline: 0;
  border: 1px solid #000;
  border-radius: 10px;
`;

export interface SimpleButtonProps {
  text: string;
}

const SimpleButton = ({ text }: SimpleButtonProps) => {
  return (
    <Button>
      <p>{text}</p>
    </Button>
  );
};

export default SimpleButton;
