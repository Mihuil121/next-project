import HomeOne from "./home/Home";
import HomeBorder, { THomeBorder } from '@/components/HomeBorder/HomeBorder';

const Home: React.FC<THomeBorder> = (props) => {
  return (
    <div>
      <HomeOne />
     
    </div>
  );
}

export default Home;

