import { Container } from './styles';
import arrow from '../../assets/images/arrowIcon.svg';
import { Link } from 'react-router-dom';

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back link" />
        <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </Container>
  );
};
