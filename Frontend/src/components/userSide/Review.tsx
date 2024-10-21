import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { createReview } from '../../services/userServices';
import { reviewValidator } from '../../utils/userValidator';

const ReviewForm = ({ workspaceId }: { workspaceId: string }) => {

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');


  const submitReview = async () => {
    try {

      const error = reviewValidator({comment, rating});

      
      if(error){
        return toast.error(error.comment || error.rating);
      }


    const response = await  createReview(rating,comment,workspaceId)

    if(response.data.success){

      toast.success('Review submitted successfully!');
      return;
    }
    } catch (err) {

      toast.error('Something went wrong!');
    }
  };

  

  return (

    <div className="p-4">
      <h3 className="text-lg font-bold">Submit a Review</h3>
      <div className="mt-4">
        <label>Rating:</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-xl ${
                star <= rating ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        onClick={submitReview}
        className="bg-orange-500 text-white p-2 mt-4 rounded"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;

