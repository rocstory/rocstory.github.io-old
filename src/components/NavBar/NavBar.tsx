import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';
import { EPages } from '../../enums/EPages';

interface INavBar {
    selPage: EPages,
    handleSelPage: Function
}
function NavBar(props: INavBar) {
    const {
        selPage,
        handleSelPage
    } = props;

    const handleTabClick = (tabName: EPages) => {
        handleSelPage(tabName);
    }
    const isPageSelected = (pageName: EPages) => {
        return pageName === selPage;
    }

    // avoid dependency on the ENUM value of EPages
    const getPageDisplayName = (pageName: EPages) => {
        switch (pageName) {
            case EPages.Projects:
                return 'projects';
            case EPages.ContactMe:
                return 'contact me';
            default:
                return '?Page?';
        }
    }

    const visiblePage = [EPages.Projects, EPages.ContactMe]
    return (
        <Navbar sticky={`top`} className={`rs-navbar`} >
            <Container>
                <Navbar.Brand className={`disabled`}>Malik Roc</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        visiblePage.map(pageName =>
                            <Nav.Link
                                key={`rsPage-${pageName}`}
                                className={`rsPageTab ${isPageSelected(pageName) ? 'selected' : ''}`}
                                onClick={() => handleTabClick(pageName)}
                            >
                                {getPageDisplayName(pageName)}
                            </Nav.Link>
                        )
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;