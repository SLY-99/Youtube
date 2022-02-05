import '../Home/home.scss';
import Header from '../../Components/Header/header';
import Sidebar from '../../Components/Sidebar/sidebar';
import Intro from '../../Components/Intro/intro';

function Channel() {
  return (
    <>
      <div className="row">
       <div className="col-12"><Header/></div>
       <div className="col-2"><Sidebar/></div>
       <div className="col-10"><Intro/></div>
     </div>
    </>
  );
}

export default Channel;