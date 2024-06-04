import Container from 'react-bootstrap/Container';
import { EPages } from '../../enums/EPages';
import usePageLoader from './usePageLoader';
import './PageLoader.scss';

interface IPageLoader {
    page: EPages;
}

function PageLoader({ page }: IPageLoader) {

    const { PageComponent } = usePageLoader(page);
    return (
        <Container
            className='page-loader'
            fluid
        >
            {PageComponent}
        </Container>
    )
}

export default PageLoader;