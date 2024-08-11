import Container from 'react-bootstrap/Container';
import { EPages } from '../../enums/EPages';
import usePageLoader from './usePageLoader';
import './PageLoader.scss';
import { EProject } from '../../enums/EProject';
import { useContext } from 'react';
import { PortfolioContext, PortfolioContextType } from '../../context/PortfolioContext';

function PageLoader() {

    const { selPage, handleSelPage } = useContext(PortfolioContext) as PortfolioContextType;
    const { PageComponent } = usePageLoader(selPage);
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