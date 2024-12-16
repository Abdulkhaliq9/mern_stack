import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GlobalSkeletonWrapper = ({ loading, children }) => {
  if (loading) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="skeleton-wrapper">
          <Skeleton count={3} />
        </div>
      </SkeletonTheme>
    );
  }

  return children;
};

export default GlobalSkeletonWrapper;
