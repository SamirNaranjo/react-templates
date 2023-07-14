import { useState } from "react";

export const TwitterFollowCard = ({formatUserName, userName, name, initialIsFollowing}) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);

    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    alt="Avatar de Samir" 
                    src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>

            </aside>
        </article>
    );

}