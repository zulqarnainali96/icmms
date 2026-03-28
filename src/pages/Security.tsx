import securityImage from '../assets/Security.png';

export default function Security() {
  return (
    <div className="bg-white">
      <img
        src={securityImage}
        alt="Control, traceability, and audit readiness"
        className="w-full h-auto"
      />
    </div>
  );
}
