import platformImage from '../assets/platform.png';

export default function Platform() {
  return (
    <div className="bg-white">
      <img
        src={platformImage}
        alt="One portal for mission-critical operations"
        className="w-full h-auto"
      />
    </div>
  );
}
