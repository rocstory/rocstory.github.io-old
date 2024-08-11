import { Button } from 'react-bootstrap';
import './PageControlBtn.scss';
import RSIcon from '../../RSIcon/RSIcon';
import { ERSIcon } from '../../../enums/ERSIcons';


type PageControlBtnType = {
    iconName: ERSIcon,
    className?: string,
    controlLabel?: string,
    command: () => void,

}

function PageControlBtn(props: PageControlBtnType) {
    const {
        iconName,
        className,
        controlLabel,
        command,
    } = props

    const executeCommand = () => {
        if (command) {
            command()
        }
    }


    return (
        <div className={`pg-cntrl-btn-wrapper`}>
            <Button
                className={`pg-cntrl-btn  ${className ?? ''}`}
                bsPrefix={'rsbtn'}
                variant={' '}
                onClick={executeCommand}
            >
                <RSIcon name={iconName} />
            </Button>
        </div>
    )
}

export default PageControlBtn;