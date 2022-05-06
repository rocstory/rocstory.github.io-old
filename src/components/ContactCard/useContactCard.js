import { useState } from "react";
import "./ContactCard.scss";
import defaultImage from '../../assets/defaultPersonImage/dpi1.png';  // afro
import defaultImage2 from '../../assets/defaultPersonImage/dpi2.png'; // dreads
import defaultImage3 from '../../assets/defaultPersonImage/dpi3.png'; // short cut
import defaultImage4 from '../../assets/defaultPersonImage/dpi4.png'; // black hat
const util = require('../../helper/utilities');

const dbController = require('../../dataStore/dataStore');

function useContactCard(contact) {
    const { pid, role } = contact;
    const [person, setPerson] = useState(null);
    const [imgUrl, setImgUrl] = useState(defaultImage3);
    const [name, setName] = useState('');

    function getDefaultImg() {
        let defImg = getDefaultImageByIndex();
        return defImg;
    }

    function getDefaultImageByIndex() {

        let codedID = 0;

        for (let i = 0; i < pid.length; i++) {
            const char = pid[i];
            codedID += (char.charCodeAt(0) + i);
        }

        if (codedID % 4 === 0 && !(codedID % 0)) {
            return defaultImage;
        }
        else if (codedID % 3 === 0 && !(codedID % 0)) {
            return defaultImage2;
        }
        else if (codedID % 5 === 0 && !(codedID % 0)) {
            return defaultImage2;
        }
        else if (codedID % 2 === 0) {
            return defaultImage3;
        }
        else {
            return defaultImage4;
        }
    }

    function handleImageLoadingError() {
        let defImg = getDefaultImg();
        setImgUrl(defImg);
    }

    useState(() => {
        async function getPerson() {
            const dbPerson = dbController.getPerson(pid);
            const imgsrc = dbPerson.imgurl ? dbPerson.imgurl : getDefaultImg();
            const personName = util.modifyName(dbPerson.name);
            setPerson(dbPerson);
            setImgUrl(imgsrc);
            setName(personName);
        }
        getPerson();
    }, [pid])

    return {
        person,
        role,
        imgUrl,
        name,
        handleImageLoadingError
    }
};

export default useContactCard;