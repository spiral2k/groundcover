type Props = {
  src: string;
  onClick?: () => void;
  alt?: string;
};

function Img({ src, alt, onClick }: Props) {
  return <img src={src} alt={alt || "no_alt"} onClick={onClick} />;
}

export default Img;
