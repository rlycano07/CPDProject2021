import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import './Mainbar.css';

export default function Mainbar(){
    return <div className="mainbar">
        <span className="trending-posts-title">Trending posts</span>

        <div className="update-card"> 
            <div className="top-section">
                <span>New posts !!</span>
                <CloseIcon className="hoverable"/>

            </div>
            <div className="body hoverable">
                <div className="context">
                    <span className="title">Welcom to Voice</span> <br />
                    <span className="about">
                        This is a beta version of the Voice website where you can post discussion topics, present ideas, 
                        show support or denial while learning more about your community.  
                    </span>
                </div>   
                <div className="account">
                    <img src="./assets/images/logo.jpg"/>
                </div>
            </div>
            
        </div>
    </div>
}