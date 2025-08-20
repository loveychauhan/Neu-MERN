export default function OurPolicy({ image, heading, description }) {
  return (
    <article className="font-medium text-center items-center justify-items-center">
      <div>
        <img src={image} alt={image} />
      </div>
      <h3 className="my-2">{heading}</h3>
      <p className="text-gray-500">{description}</p>
    </article>
  );
}
