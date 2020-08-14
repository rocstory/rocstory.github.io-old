import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMediaButton.css";

class SocialMediaButton extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            isHovered: false,
        }
    }

    getIconData = (linkType) =>
    {


        let style = "fas";
        let fa_icon = "lightbulb";
        let bgColor = "white";

        linkType = linkType.toLowerCase();

        switch(linkType)
        {
            case "twitter":
                bgColor = "#00ACED"; 
                style = "fab";
                fa_icon = "twitter";
                break;
            case "instagram":
                bgColor = "#E1306C"; 
                style = "fab";
                fa_icon = "instagram";
                break;
            case "facebook":
                bgColor = "#4267B2"; 
                style = "fab";
                fa_icon = "facebook";
                break;
            case "github":
                bgColor = "#6cc644"; 
                style = "fab";
                fa_icon = "github";
                break;
            case "youtube":
                bgColor = "#ff0000"; 
                style = "fab";
                fa_icon = "youtube";
                break; 
            case "tumblr":
                bgColor = "#35465c";
                style = "fab";
                fa_icon = "tumblr";
                break;
            case "linkedin":
                bgColor = "#007bb5";
                style="fab";
                fa_icon = "linkedin";
                break;
            default:
                bgColor = "gold"; 
                style = "fas";
                fa_icon = "lightbulb";
                break;
        }

        let buttonInfo = {
            bgColor: bgColor,
            style: style,
            fa_icon: fa_icon
        }

        return buttonInfo;
    }

    toggleHover = () =>
    {
        this.setState( prevState => { return {isHovered: !prevState.isHovered }});
    }

    render()
    {
        const iconInfo = this.getIconData(this.props.link.type);
        
        let btnStyle = {backgroundColor: "white"}
        this.state.isHovered ? btnStyle.backgroundColor = iconInfo.bgColor : btnStyle.backgroundColor = "white";

        return (
            <a href={this.props.link.source} target="_blank" rel="noopener noreferrer">
                <button
                    style={btnStyle}
                    className="social-btn-container clickable"
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                >
                    <FontAwesomeIcon icon={[iconInfo.style, iconInfo.fa_icon]} />
                </button>
            </a>
            
        )
    } // render
}

export default SocialMediaButton;