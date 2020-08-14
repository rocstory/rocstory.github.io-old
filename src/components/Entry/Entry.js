import React from 'react';
import "./Entry.css";
import ReferenceLink from './ReferenceLink/ReferenceLink';
import EntryBody from './EntryBody/EntryBody';
import EntryFooter from './EntryFooter/EntryFooter';



class Entry extends React.Component
{
    constructor()
    {
        super();

        this.state =
        {
            posts: null,
            postIndex: 0,
            reflinks: null,
        }
    }

    updatePostIndex = (value) =>
    {
        this.setState((prevState) => {
            let nextIndex = prevState.postIndex + value;
            if (nextIndex > this.state.posts.length - 1)
            {
                nextIndex = 0;
            }
            else if (nextIndex < 0)
            {
                nextIndex = this.state.posts.length - 1;
            }
            return {postIndex: nextIndex}
        });
    }

    componentDidMount()
    {

        const posts = this.props.entry.content;

        const refs = this.props.entry.reflinks.map(
            (link) => {
                return <ReferenceLink key={link.source} link={link} />
            }
        )
        this.setState((prevState) => { return {posts: posts, reflinks: refs}});

    }

    render()
    {
        let isScrollable = false;
        if (this.state.posts)
        {
            isScrollable = this.state.posts.length > 1 ? true : false;
        }
        return (
            <div className="entry-container">
                <h1 className="entry-title">{this.props.entry.title}</h1>

                { this.state.posts ?
                    <EntryBody 
                        posts={this.state.posts} 
                        currIndex={this.state.postIndex} 
                        technologies={this.props.entry.technologies}
                    />
                    : null
                }
                <EntryFooter 
                    isScrollable={isScrollable}  
                    reflinks={this.state.reflinks}
                    updatePostIndex={this.updatePostIndex}/>
            </div>
        )
    };
}


export default Entry;