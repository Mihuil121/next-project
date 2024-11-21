import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import Loding from './loding/Loding';

const HomeOne: ComponentType = dynamic(() => import('./home/Home'), {
  ssr: false,
  loading: () => <div className="Loding">
    <Loding />
  </div>
})

const PageComponent: React.FC = () => {
  return (
    <div>
      <HomeOne />
    </div>
  );
};

export default PageComponent;
