import { NavigationContainer, NavigationItem } from '@/components/Navigation';

import HomeSection from '@/containers/HomeSection';
import FullscreenCanvas from '@/containers/FullscreenCanvas';

export default function Home() {
  return (
    <>
      <FullscreenCanvas />

      <NavigationContainer>
        <NavigationItem label="My Projects" link="#my-projects" />
        <NavigationItem label="Skills" link="#skills" />
        <NavigationItem label="Experience" link="#experience" />
        <NavigationItem label="Support Me" link="#support-me" />
        <NavigationItem label="Contact & Policy" link="#contact-and-privacy" />
      </NavigationContainer>

      <HomeSection />
    </>
  );
}
