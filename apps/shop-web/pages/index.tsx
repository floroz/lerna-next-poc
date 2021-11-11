import {
  PrimaryButton,
  SecondaryButton,
  BootstrapButton,
} from "@tundra/shared";

export default function Home() {
  return (
    <div>
      <PrimaryButton>Global SCSS</PrimaryButton>
      <SecondaryButton>SCSS Module</SecondaryButton>
      <BootstrapButton>Bootstrap Global</BootstrapButton>
    </div>
  );
}
