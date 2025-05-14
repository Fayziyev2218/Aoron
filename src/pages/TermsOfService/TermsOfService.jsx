import GoBackButton from "../../components/GoBackButton";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="px-[16px]">
      <div className="px-8 py-4 mb-4 mt-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold font-inter text-center mb-6">
          {t("terms.title")}
        </h2>
        <p className="text-[18px] font-normal text-left mb-6">
          {t("terms.paragraph1")}
        </p>
        <p className="text-[18px] font-normal text-left mb-6">
          {t("terms.paragraph2")}
        </p>
        <p className="text-[18px] font-normal text-left mb-6">
          {t("terms.paragraph3")}
        </p>
        <GoBackButton />
      </div>
    </div>
  );
}
