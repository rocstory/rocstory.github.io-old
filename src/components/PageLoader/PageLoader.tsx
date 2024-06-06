import Container from 'react-bootstrap/Container';
import { EPages } from '../../enums/EPages';
import usePageLoader from './usePageLoader';
import './PageLoader.scss';
import { EProject } from '../../enums/EProject';

interface IPageLoader {
    page: EPages;
    handleSelPage: Function;
    selContent: EProject;
}

function PageLoader({ page, handleSelPage, selContent }: IPageLoader) {

    const { PageComponent } = usePageLoader(page, handleSelPage, selContent);
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