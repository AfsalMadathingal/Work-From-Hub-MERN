import { LoadingType } from 'react-loading';
import ReactLoading from 'react-loading';

interface LoadingProps {
  type: LoadingType;
  color: string;
  transparent: boolean;
}

const LoadingPageWithReactLoading: React.FC<LoadingProps> = ({ type, color, transparent = false }) => {
  return (
    <div className={transparent ? `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50` : `loading-screen h-screen flex justify-center items-center`}>
      <ReactLoading type={type} color={color} height={60} width={60} />

    </div>
  );
};

export default LoadingPageWithReactLoading;