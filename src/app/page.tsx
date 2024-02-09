import { MainNavigation, NavigationItem } from '@/components/MainNavigation';

import HomeSection from '@/containers/HomeSection';

export default function Home() {
  return (
    <>
      <MainNavigation>
        <NavigationItem label="My Projects" link="#my-projects" />
        <NavigationItem label="Skills" link="#skills" />
        <NavigationItem label="Experience" link="#experience" />
        <NavigationItem label="Support Me" link="#support-me" />
        <NavigationItem label="Contact & Policy" link="#contact-and-privacy" />
      </MainNavigation>

      <HomeSection />
    </>
  );
}
