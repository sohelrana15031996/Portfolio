import PropTypes from 'prop-types';

const Card = ({ data, count }) => {
  const { title, short_description } = data;
  console.log(count);
  return (
    <>
        <div className="hero bg-base-200 min-h-screen">
          <div className={`hero-content flex-col lg:${count % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

    </>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  count: PropTypes.number
}

export default Card;