type Props = {
  src: string;
  onClick?: () => void;
  testId?: string;
  alt?: string;
};

function Img({ src, alt, testId, onClick }: Props) {
  return <img src={src} alt={alt || "no_alt"}  data-testid={testId} onClick={onClick} />;
}

export default Img;
