import React, { Component } from 'react';
import baleine from './baleine.jpg';
import fb from './fb.png';
import t from './t.png';
import pi from './pi.png';
import tb from './tb.png';
import './Section.css';


class Section extends Component {
    render() {
      return (
          <div className= "wrap-main-section">
            <div className= "social-container">
              <img src={baleine} className='img-baleine' alt='baleine'/>
              <div className="buttons-container">
                  <h2>S'informer, c'est deja agir</h2>
                  <img src={fb} className='img-fb' alt='fb'/>
                  <img src={t} className='img-t' alt='t'/>
                  <img src={pi} className='img-pi' alt='pi'/>
                  <img src={tb} className='img-tb' alt='tb'/>
              </div>
            </div>
            <div className= "info-container">
              <div className="border">
                <div className="premier-info">
                  <h2>1982</h2>
                  <p>Les baleines <br/> ont leur moratoir</p>
                  <b></b>
                </div>
                <div className="deuxieme-info">

                </div>
              </div>
            </div>
          </div>
      );
    }
}
export default Section;
