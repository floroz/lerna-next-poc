import {
  PrimaryButton,
  SecondaryButton,
  BootstrapButton,
} from "@tundra/shared";

import { Header } from "@tundra/core";

export default function Home() {
  return (
    <div>
      <Header />
      <PrimaryButton>Global SCSS</PrimaryButton>
      <SecondaryButton>SCSS Module</SecondaryButton>
      <BootstrapButton>Bootstrap Global</BootstrapButton>
    </div>
  );
}
