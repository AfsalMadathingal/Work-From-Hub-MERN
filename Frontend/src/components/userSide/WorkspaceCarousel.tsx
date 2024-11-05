import React from 'react';
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import { Workspace } from './WorkspaceView';



const WorkspaceCarousel: React.FC<{ workspace: Workspace }> = ({ workspace }) => {
  // Prepare carousel items
  const carouselItems = React.useMemo(() => {
    const items: React.ReactElement[] = [];
    
    // Add photos if they exist
    if (workspace.photos?.length > 0) {
      items.push(
        ...workspace.photos.map((image, index) => (
          <div key={`photo-${index}`} className="h-[400px]">
            <img
              src={image}
              alt={`Office view ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))
      );
    } else {
      items.push(
        <div 
          key="no-photos" 
          className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700"
        >
          <p className="text-gray-500 dark:text-gray-400">
            No photos available
          </p>
        </div>
      );
    }

    // Add video if it exists
    if (workspace.video) {
      items.push(
        <div key="video" className="h-[400px]">
          <ReactPlayer
            url={workspace.video}
            width="100%"
            height="100%"
            controls
          />
        </div>
      );
    }

    return items;
  }, [workspace.photos, workspace.video]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="h-[400px]">
        <Carousel showThumbs={false} showStatus={false}>
          {carouselItems}
        </Carousel>
      </div>
    </div>
  );
};

export default WorkspaceCarousel;