import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export const App = () => {
    const formatUserName = (userName) => `@${userName}`

    return (
        
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName}
                userName="samirnaranjo1" 
                name="Samir Naranjo"
                
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="naidyav" 
                name="Naidy Avendaño"
                
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="chocofrutilla" 
                name="Chocofrutilla"
                
            />
            
        </section>
        
    );
}