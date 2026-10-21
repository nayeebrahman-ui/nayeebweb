import SvgDefs from '@/components/chrome/SvgDefs';
import SiteHeader from '@/components/chrome/SiteHeader';
import SiteFooter from '@/components/chrome/SiteFooter';
import SiteRuntime from '@/components/SiteRuntime';
import {
  HomePage,
  WorkPage,
  CasePage,
  HirePage,
  ConsultingPage,
  PartnerPage,
  AboutPage,
  ContactPage,
  LostPage,
} from '@/components/pages';

// One document, many "pages": the runtime shows one section at a time based on
// the URL hash (#home, #hire, #case-apple-gadgets ...) with the chapter-wipe transition.
export default function Site() {
  return (
    <>
      <SvgDefs />
      <SiteHeader />
      <main id="main">
        <HomePage />
        <WorkPage />
        <CasePage />
        <HirePage />
        <ConsultingPage />
        <PartnerPage />
        <AboutPage />
        <ContactPage />
        <LostPage />
      </main>
      <SiteFooter />
      <SiteRuntime />
    </>
  );
}
