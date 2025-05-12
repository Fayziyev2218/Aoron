import GoBackButton from "../../components/GoBackButton";

export default function TermsOfService() {
  return (
    <div className="px-[16px]">
      <div className="px-8 py-4 mb-4 mt-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold font-inter text-center mb-6">Terms of Service</h2>
        <p className="text-[18px] font-normal text-left mb-6">
          These Terms of Service govern your use of our platform. By accessing
          or using our services, you agree to comply with these terms. 
        </p>
        <p className="text-[18px] font-normal text-left mb-6">
         You are responsible for maintaining the confidentiality of your account details and are liable for any activities that occur under your account.
        </p>
        <p className="text-[18px] font-normal text-left mb-6">
          We reserve the right to suspend or terminate your access to our services if you violate any of these terms. 
        </p>
        <GoBackButton/>
      </div>
    </div>
  );
}
