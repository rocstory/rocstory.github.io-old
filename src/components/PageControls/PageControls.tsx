
import { PortfolioContext, PortfolioContextType } from '../../context/PortfolioContext';
import { useContext } from 'react';
import { ERSIcon } from '../../enums/ERSIcons';

import './PageControls.scss';
import PageControlBtn from './PageControlBtn/PageControlBtn';
import { EPages } from '../../enums/EPages';


type PageControlsType = {
    displayBackBtn: Boolean,

}

function PageControls(props: PageControlsType) {
    const { handleSelPage, selPage } = useContext(PortfolioContext) as PortfolioContextType;

    const { displayBackBtn } = props

    const handleBackBtnTrigger = () => {
        switch (selPage) {
            case EPages.ProjectDisplay:
                handleSelPage(EPages.Projects)
        }
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