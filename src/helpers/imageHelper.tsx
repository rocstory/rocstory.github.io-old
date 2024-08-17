import ProfilePicture from "../assets/imgs/profile-photo.png";
import HeroImg from "../assets/imgs/rs-test-hero4.jpg";
// import DefaultThumbnail from "../assets/imgs/default-thumbnail_compressed.jpg";
// import ColonialCarnivalFeaturedImg from "../assets/imgs/projects/colonial-carnival-featured-img.jpg";

// featured images
// import ColonialCarnivalFI from "../assets/imgs/featureImgs/colonial-carnival-fi.jpg";
// import ChevsEscapeFI from "../assets/imgs/featureImgs/chev-escape-fi.jpg";
import DefaultFI from "../assets/imgs/featureImgs/default-fi.jpg";
// import CrayonGITRGFI from "../assets/imgs/featureImgs/gitrg-3d-crayon-fi.jpg";
// import MocapFI from "../assets/imgs/featureImgs/mocap-thumbnail-fi.jpg";
// import PawbytesCafeFI from "../assets/imgs/featureImgs/pawbytes-cafe-fi.jpg";
// import RevealingRocFI from "../assets/imgs/featureImgs/revealing-roc-fi.jpg";
// import TwinlandeSSFI from "../assets/imgs/featureImgs/twinlande-thumbnail-fi.jpg";

// thumbnails
// import ChevsEscapeTN from "../assets/imgs/thumbnails/chevsEscape-thumbnail.jpg";
// import ColonialCarnivalTN from "../assets/imgs/thumbnails/colonialCarnival-thumbnail.jpg";
// import CrayonGITRGTN from "../assets/imgs/thumbnails/crayonGITRG-thumbnail.jpg";
// import MocapTN from "../assets/imgs/thumbnails/mocap-thumbnail.jpg";
// import PawbytesCafeTN from "../assets/imgs/thumbnails/pawBytes-thumbnail.jpg";
// import RevRocTN from "../assets/imgs/thumbnails/revroc-thumbnail.jpg";
// import RocPortfolioTN from "../assets/imgs/thumbnails/rocPortfolio-thumbnail.jpg";
// import TwinlandeSSTN from "../assets/imgs/thumbnails/twinlande-ss-thumbnail.jpg";
// import YemiiBotTN from "../assets/imgs/thumbnails/yemii-thumbnail.jpg";
import DefaultTN from "../assets/imgs/thumbnails/default-thumbnail.jpg";


const ImageHelper = () => {

    return {
        ProfilePicture,
        HeroImg,
        DefaultFI,
        DefaultTN,

        ColonialCarnivalFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/colonial-carnival/colonial-carnival-fi.jpg",
        ColonialCarnivalTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/colonial-carnival/colonialCarnival-thumbnail.jpg",

        ChevsEscapeFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/chev-escape/chev-escape-fi.jpg",
        ChevsEscapeTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/chev-escape/chevsEscape-thumbnail.jpg",

        CrayonGITRGFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/crayon-gitrg/gitrg-3d-crayon-fi.jpg",
        CrayonGITRGTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/crayon-gitrg/crayonGITRG-thumbnail.jpg",

        MocapGITRGFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/mocap-gitrg/mocap-thumbnail-fi.jpg",
        MocapGITRGTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/mocap-gitrg/mocap-thumbnail.jpg",

        PawbytesCafeFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/pawbytes/pawbytes-cafe-fi.jpg",
        PawbytesCafeTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/pawbytes/pawBytes-thumbnail.jpg",

        RevealingRocFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/revroc/revealing-roc-fi.jpg",
        RevealingRocTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/revroc/revroc-thumbnail.jpg",

        TwinlandeSSFI: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/twinlande-ss/twinlande-ss-thumbnail.jpg",
        TwinlandeSSTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/twinlande-ss/twinlande-thumbnail-fi.jpg",

        YemiiTN: "https://onestory.s3.us-east-2.amazonaws.com/prj-home/yemii/yemii-thumbnail.jpg",
    }
}

export default ImageHelper;
// export {
//     ProfilePicture,
//     HeroImg,
//     // ColonialCarnivalFeaturedImg,
//     // ColonialCarnivalFI,
//     ChevsEscapeFI,
//     DefaultFI,
//     CrayonGITRGFI,
//     MocapFI,
//     PawbytesCafeFI,
//     RevealingRocFI,
//     TwinlandeSSFI,

//     ChevsEscapeTN,
//     ColonialCarnivalTN,
//     CrayonGITRGTN,
//     MocapTN,
//     PawbytesCafeTN,
//     RevRocTN,
//     RocPortfolioTN,
//     TwinlandeSSTN,
//     YemiiBotTN,
//     DefaultTN,
// }
