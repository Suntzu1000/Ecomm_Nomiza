import Spinner from "./Spinner";

interface LoadingBoxProps {
  className?: string;
}

const LoadingBox: React.FC<LoadingBoxProps> = ({ className }) => {
  return (
    <><div className="gap-2" >
      <Spinner animation="grow" role="status" className={`${className}`} />
      <span className="visually-hidden">Carregando...</span>
      </div>
    </>
  );
};

export default LoadingBox;
