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
function ProductsPage() {
  return (
    <div>
      <DummyNavigation />
      ProductsPage
    </div>
  );
}

export default ProductsPage;
