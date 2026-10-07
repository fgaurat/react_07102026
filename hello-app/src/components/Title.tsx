interface TitleProps {
  value: string;
}

function Title({ value }: TitleProps) {
  return <h2>{value}</h2>;
}

export default Title;
