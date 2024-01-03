import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName={'JuanluGG'} name={'Juan Luis Garcia'} />
            <TwitterFollowCard userName={'Fer'} name={'Fernando Alonso'} />
            <TwitterFollowCard userName={'PepGu'} name={'Pep Guardiola del Barcelona'} />
        </section>
        
    )
}