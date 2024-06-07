import Container from 'react-bootstrap/Container';
import { EProject } from '../../enums/EProject';
import useProject from '../../hooks/useProject';
import { PortfolioContext, PortfolioContextType } from '../../context/PortfolioContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ERSIcon } from '../../enums/ERSIcons';
import RSIcon from '../RSIcon/RSIcon';

import './PageControls.scss';
import PageControlBtn from './PageControlBtn/PageControlBtn';


type PageControlsType = {
    displayBackBtn: Boolean,

}

function PageControls(props: PageControlsType) {
    const { selProject, handleSelPage } = useContext(PortfolioContext) as PortfolioContextType;

    const { displayBackBtn } = props

    const handleBackBtnTrigger = () => {
        console.log('handling back button', typeof (selProject));
    }


    return (
        <div className={`page-controls`}>
            {
                displayBackBtn &&
                <PageControlBtn
                    iconName={ERSIcon.ChevronLeft}
                    command={handleBackBtnTrigger}
                    controlLabel='back'
                />
            }
        </div>
    )
}

export default PageControls;