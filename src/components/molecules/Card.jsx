import Button from '../atoms/Button';

const Header = (props) => {
  const { children } = props;
  return <div className="font-bold text-xl mb-2">{children}</div>;
};

const Content = (props) => {
  const { children } = props;
  return <p className="text-gray-700 text-base">{children}</p>;
};

const Footer = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button>{children}</Button>
    </div>
  );
};

const Image = (props) => {
  const { src } = props;
  return <img className="w-full" src={src} alt={src} />;
};

function CardDzaky(props) {
  const { title = 'ini judul', content = 'ini content', link, children } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-200">
      <div className="px-6 py-4">
        {/* Header disini */}
        {/* Konten disini */}
        {children}
      </div>
    </div>
  );
}

CardDzaky.Header = Header;
CardDzaky.Content = Content;
CardDzaky.Footer = Footer;
CardDzaky.Image = Image;

export default CardDzaky;
