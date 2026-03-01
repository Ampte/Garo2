import React from 'react';

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <FeatureCard
        icon="📘"
        title="Translate"
        description="Translate words and sentences instantly."
        link="/Translator"
      />

      <FeatureCard
        icon="🎓"
        title="Learn Garo"
        description="Interactive lessons to learn Garo language."
        link="/Learn"
      />

      <FeatureCard
        icon="💬"
        title="Chat with G2"
        description="Practice conversation using AI chatbot."
        link="/G2"
      />
    </section>
  );
}

export default Features;