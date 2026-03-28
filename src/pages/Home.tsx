import homeImage from '../assets/home.png';

export default function Home() {
  return (
    <div className="bg-white">
      <img
        src={homeImage}
        alt="iCMMS Home - AI-native CMMS for mission-critical data centers"
        className="w-full h-auto"
      />
    </div>
  );
}
