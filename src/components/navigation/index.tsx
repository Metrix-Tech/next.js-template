import { Button, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function DummyNavigation() {
  const router = useRouter();

  const { pathname, asPath, query, locale } = router;
  const { t, ready } = useTranslation("common");
  const routerToVendorDomain = () => {
    let href = location.href;
    let domain = href.split("//");
    let loc = `${domain[0]}//vendor.${domain[1].split("/")[0]}`;
    let url = `${loc}${
      locale === "en" || !locale ? "/signup" : `/${locale}/signup`
    }`;
    location.href = url;
  };
  return (
    <div className="d-flex justify-content-between mt-3">
      <Link href="/about">{t("navigation.about")}</Link>
      <Link href="/products">{t("navigation.products")}</Link>
      <Link href="/salons">{t("navigation.salons")}</Link>
      <Select
        value={router?.locale}
        onChange={(locale) =>
          router.push({ pathname, query }, asPath, { locale })
        }
      >
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="ar">Arabic</Select.Option>
      </Select>
      <Button onClick={routerToVendorDomain}>{t("navigation.signup")}</Button>
    </div>
  );
}

export default DummyNavigation;
