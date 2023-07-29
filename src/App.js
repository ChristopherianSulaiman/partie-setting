// import React, { useState } from 'react';
// import './App.css';
// import gear from './gear.jpg';
// import Untitled from './Untitled.png';
// import testt from './testt.png';
// import threedots from './threedots.png';
// import copas from './copas2.png';
// import {Switch} from "antd";
// function App() {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const [toggle, setToggle] = useState(false);

//   const toggler = () => {
//     toggle ? setToggle(false): setToggle(true);
//   }

//   const handleMouseEnter = () => {
//     setShowTooltip(true);
//   };

//   const handleMouseLeave = () => {
//     setShowTooltip(false);
//   };

  

//   return (
//     <div className="panel-container">
//       <div className="bottom-layer">
//           <div className='pwv'>
//             <p>Partie with Viewers + Chat Bot</p>
//           </div>
//           <div className='cop'>
//             <img src={copas} alt="logo" className='logo-image' />
//           </div>
//           <div className='tdots'>
//             <img src={threedots} alt="logo" className='logo-im' />
//           </div>
//         </div>
//       <div className="purple-layer">
//         <h1 className="text">partie with Me</h1>
//         <div className="submessage">
//           <p>
//             <span className="first-text">Setting    </span>
//             <span className="second-text">Commands    </span>
//             <span className="third-text">Messages </span>
//             <span className="fourth-text"> Stats</span>
//           </p>
//         </div>
//         <div className="logo">
//           <img src={testt} alt ="logo" className="logo-image" />
//         </div>
//         <div className="setting">
//           <img src={gear} alt="gear" className="gear-image" />
//         </div>
//         <div className="tooltip-container">
//           <div
//             className={`tooltip-icon ${showTooltip ? 'active' : ''}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="circle">
//               <span className="icon">i</span>
//             </div>
//             <span className={`tooltip ${showTooltip ? 'visible' : ''}`}>
//               This is a tooltip
//             </span>
//           </div>
//         </div>
//         <div className='PartieBotEnabled-container'>
//           <div className='PartieBotEnabled-container-text'>
//             <p>
//               <span className='partiebot-text'>@PartieBot</span>
//               <span className='enabled-text'> is enabled</span>
//             </p>
//           </div>
//         </div>
//         <div className='switch'>
//           <Switch onClick={toggler} className='custom-switch' />
//         </div>
//         <div className='greySeg-one'>
//           <p></p>
//         </div>
//         <div className='Language'>
//           <p>Language</p>
//         </div>
//         <div className='greySeg-two'>
//           <p></p>
//         </div>
//         <div className='Queue-locked'>
//           <p>Queue is locked</p>
//         </div>
//         <div className='switch-two'>
//           <Switch onClick={toggler} />
//         </div>
//         <div className='greySeg-three'>
//           <p></p>
//         </div>
//         <div className='Max-player'>
//           <p>Max Player Queue</p>
//         </div>
//         <div className='greySeg-four'>
//           <p></p>
//         </div>
//         <div className='join-through-messages'>
//           <p>Join through messages</p>
//         </div>
//         <div className='switch-three'>
//           <Switch onClick={toggler} />
//         </div>
//         <div className='greySeg-five'>
//           <p></p>
//         </div>
//         <div className='follower-only'>
//           <p>Follower only mode</p>
//         </div>
//         <div className='switch-four'>
//           <Switch onClick={toggler} />
//         </div>
//         <div className='greySeg-six'>
//           <p></p>
//         </div>
//         <div className='follower-priority'>
//           <p>Follower priority</p>
//         </div>
//         <div className='switch-five'>
//           <Switch onClick={toggler} />
//         </div>
//         <div className='greySeg-seven'>
//           <p></p>
//         </div>
//         <div className='subscriber-only-mode'>
//           <p>Subscriber only mode</p>
//         </div>
//         <div className='switch-six'>
//           <Switch onClick={toggler} />
//         </div>
//         <div className='greySeg-eight'>
//           <p></p>
//         </div>
//         <div className='subscriber-priority'>
//           <p>Subscriber Priority</p>
//         </div>
//         <div className='switch-seven'>
//           <Switch onClick={toggler} />
//         </div>
//         <div className='greySeg-nine'>
//           <p></p>
//         </div>
//         <div className='message-only-mode'>
//           <p>Message only mode</p>
//         </div>
//         <div className='switch-eight'>
//           <Switch onClick={toggler} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import gear from './gear.jpg';
import Untitled from './Untitled.png';
import testt from './testt.png';
import threedots from './threedots.png';
import copas from './copas2.png';
import {Switch} from "antd";
function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  

  return (
    <div className="panel-container">
      <div className="bottom-layer">
          <div className='pwv'>
            <p>Partie with Viewers + Chat Bot</p>
          </div>
          <div className='cop'>
            <img src={copas} alt="logo" className='logo-image' />
          </div>
          <div className='tdots'>
            <img src={threedots} alt="logo" className='logo-im' />
          </div>
        </div>
      <div className="purple-layer">
        <h1 className="text">partie with Me</h1>
        <div className="submessage">
          <p>
            <button className="first-text">Setting    </button>
            <button className="second-text">Commands    </button>
            <button className="third-text">Messages </button>
            <button className="fourth-text"> Stats</button>
          </p>
        </div>
        <div className="logo">
          <img src={testt} alt ="logo" className="logo-image" />
        </div>
        <div className="setting">
          <img src={gear} alt="gear" className="gear-image" />
        </div>
        <div className="tooltip-container">
          <div
            className={`tooltip-icon ${showTooltip ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle">
              <span className="icon">i</span>
            </div>
            <span className={`tooltip ${showTooltip ? 'visible' : ''}`}>
              This is a tooltip
            </span>
          </div>
        </div>
        <div
        className={`PartieBotEnabled-container ${toggle ? 'toggled-on' : 'toggled-off'}`}
      >
        <div className='PartieBotEnabled-container-text'>
          <p>
            <span className='partiebot-text'>
              {toggle ? '@PartieBot' : '@PartieBot is disabled'}
            </span>
            <span className='enabled-text'>
              {toggle ? 'is enabled' : ''}
            </span>
          </p>
        </div>
      </div>

      <div className='switch'>
        <Switch onClick={toggler} className='custom-switch' />
      </div>
        <div className='switch'>
          <Switch onClick={toggler}/>
        </div>
        <div className='greySeg-one'>
          <p></p>
        </div>
        <div className='Language'>
          <p>Language</p>
        </div>
        <div className='greySeg-two'>
          <p></p>
        </div>
        <div className='Queue-locked'>
          <p>Queue is locked</p>
        </div>
        <div className='switch-two'>
          <Switch onClick={toggler} />
        </div>
        <div className='greySeg-three'>
          <p></p>
        </div>
        <div className='Max-player'>
          <p>Max Player Queue</p>
        </div>
        <div className='greySeg-four'>
          <p></p>
        </div>
        <div className='join-through-messages'>
          <p>Join through messages</p>
        </div>
        <div className='switch-three'>
          <Switch onClick={toggler} />
        </div>
        <div className='greySeg-five'>
          <p></p>
        </div>
        <div className='follower-only'>
          <p>Follower only mode</p>
        </div>
        <div className='switch-four'>
          <Switch onClick={toggler} />
        </div>
        <div className='greySeg-six'>
          <p></p>
        </div>
        <div className='follower-priority'>
          <p>Follower priority</p>
        </div>
        <div className='switch-five'>
          <Switch onClick={toggler} />
        </div>
        <div className='greySeg-seven'>
          <p></p>
        </div>
        <div className='subscriber-only-mode'>
          <p>Subscriber only mode</p>
        </div>
        <div className='switch-six'>
          <Switch onClick={toggler} />
        </div>
        <div className='greySeg-eight'>
          <p></p>
        </div>
        <div className='subscriber-priority'>
          <p>Subscriber Priority</p>
        </div>
        <div className='switch-seven'>
          <Switch onClick={toggler} />
        </div>
        <div className='greySeg-nine'>
          <p></p>
        </div>
        <div className='message-only-mode'>
          <p>Message only mode</p>
        </div>
        <div className='switch-eight'>
          <Switch onClick={toggler} />
        </div>
      </div>
    </div>
  );
}

export default App;

