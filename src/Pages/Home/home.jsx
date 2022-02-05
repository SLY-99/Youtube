import '../Home/home.scss';
import Header from '../../Components/Header/header';
import Sidebar from '../../Components/Sidebar/sidebar';
import Main from '../../Components/Main/main';

function Home() {
  return (
    <>
      <div className="row">
       <div className="col-12"><Header/></div>
       <div className="col-2"><Sidebar/></div>
       <div className="col-10"><Main/></div>
     </div>
    </>
  );
}

export default Home;