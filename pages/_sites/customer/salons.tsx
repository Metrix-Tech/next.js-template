import DummyNavigation from "@/src/components/navigation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
function SalonsPage() {
  return (
    <div>
      <DummyNavigation />
      Salons
    </div>
  );
}

export default SalonsPage;
