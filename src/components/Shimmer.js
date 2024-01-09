// Importing ShimmerCard component
import ShimmerCard from "./ShimmerCard";

// Defining the Shimmer component
const Shimmer = () => {
  return (
    // JSX structure for the Shimmer component
    <div className="shimmer-container">
      <div className="shimmer-cards">
        {/* Rendering multiple instances of the ShimmerCard component */}
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

// Exporting the Shimmer component
export default Shimmer;
