import Hero from "@/components/Hero";
import Section from "@/components/Section";
import BuildingNow from "@/components/BuildingNow";
import ImpactMeters from "@/components/ImpactMeters";
import WorkList from "@/components/WorkList";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CodingProfiles from "@/components/CodingProfiles";
import BlogList from "@/components/BlogList";
import Recognition from "@/components/Recognition";
import ContactClose from "@/components/ContactClose";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="now"
        node="vivo · template-engine"
        label="building now"
        title="Two things have most of my attention."
        lede="Both at Prezent, and the first grew into the second."
      >
        <BuildingNow />
      </Section>

      <Section
        id="impact"
        node="reliability · algo · demo-ui"
        label="measured"
        title="Three numbers I can defend in a review."
        lede="One from Prezent, two from EagleView. All three survived contact with production traffic."
      >
        <ImpactMeters />
      </Section>

      <Section id="work" node="client" label="selected work" title="Things I built end to end.">
        <WorkList />
      </Section>

      <Section
        id="experience"
        node="api-gateway"
        label="experience"
        title="Four years of owning what happens after the request lands."
      >
        <ExperienceTimeline />
      </Section>

      <Section
        id="profiles"
        node="algo-service"
        label="coding profiles"
        title="Where the 95% came from."
        lede="Competitive programming is the reason my first instinct on a slow endpoint is the complexity, not the instance count. Top 2.8% on LeetCode, 1,077 problems deep."
      >
        <CodingProfiles />
      </Section>

      <Section
        id="blogs"
        node="algo-service"
        label="blogs"
        title="Published on GeeksforGeeks."
        lede="Two problems worth writing up, both about the same move — replacing a brute-force search with structure you precompute once."
      >
        <BlogList />
      </Section>

      <Section
        id="recognition"
        node="health-check"
        label="recognition"
        title="Signals from outside the code."
        lede="Three awards from Prezent in eighteen months, two of them signed by the founder."
      >
        <Recognition />
      </Section>

      <ContactClose />
    </>
  );
}
