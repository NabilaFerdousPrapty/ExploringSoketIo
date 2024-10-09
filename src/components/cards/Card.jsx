
import React from 'react';
import propTypes from 'prop-types';
import { FaCartArrowDown, FaHeart, FaRegShareFromSquare } from 'react-icons/fa6';
import { FaCommentAlt, FaInfoCircle } from 'react-icons/fa';

const Card = ({ post }) => {
  const [like, setLike] = React.useState(false);
  const [comment, setComment] = React.useState(false);
  const [share, setShare] = React.useState(false);
  const [info, setInfo] = React.useState(false);

  return (
    <div>
      <div className="mx-auto max-w-md overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={post.image} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
              {post.title}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{post.description}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img className="object-cover h-10 rounded-full" src={post.userImage} alt="Avatar" />
                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">
                  {post.username}
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{post.date}</span>
            </div>
          </div>
        </div>

        {/* Interactive icons with conditional color */}
        <div className="flex justify-between mt-4 text-xl text-white px-3 mx-1 pb-3">
          <FaHeart
            className={`cursor-pointer ${like ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setLike(!like)}
          />
          <FaCommentAlt
            className={`cursor-pointer ${comment ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setComment(!comment)}
          />
          <FaRegShareFromSquare
            className={`cursor-pointer ${share ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setShare(!share)}
          />
          <FaInfoCircle
            className={`cursor-pointer ${info ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setInfo(!info)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  post: propTypes.object.isRequired,
};
