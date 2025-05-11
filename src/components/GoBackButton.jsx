

import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-6 py-2 px-6 text-black rounded-lg text-[16px] font-semibold font-inter"
    >
      ← Go Back
    </button>
  );
};

export default GoBackButton;
