import { useState } from 'react';
import { FilmsDescription } from '../../types/films';
import TabsContent from './tabs-content';

type TabsProps = {
    film: FilmsDescription
}

export default function Tabs(props: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const titles = ['Overview', 'Details', 'Reviews'];

  function onClick (e:any) {
    setActiveTab(e.target.innerText);
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {titles.map((el, index)=> (
            <li key={+(index+Date.now())} className={`film-nav__item ${activeTab===el ? 'film-nav__item--active' : null}`}>
              <div style={{cursor: 'pointer'}} className="film-nav__link" onClick={onClick}>{el}</div>
            </li>
          ))}


        </ul>
      </nav>

      <TabsContent film={props.film} activeTab={activeTab}/>


      {/* <div className="film-rating">
                    <div className="film-rating__score">{props.film.rating}</div>
                    <p className="film-rating__meta">
                        <span className="film-rating__level">Very good</span>
                        <span className="film-rating__count">240 ratings</span>
                    </p>
                </div>

                <div className="film-card__text">
                    {props.film.description}
                </div> */}


    </div>
  );
}