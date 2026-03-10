---
title: Live Sciences
number: 01
author: Alfred Brown
---

## Science is Broken
The traditional infrastructure for scientific communication was built in the 1800s and is now fundamentally unfit for purpose. The problems span multiple scales, from systemic incentive structures down to the daily operations of individual laboratories.

### Publication Bias and Data Silos
Current academic incentives create a culture where researchers only publish positive results with narratives spun to fit desired outcomes. This produces heavily biased datasets and a false picture where experiments always succeed. When paradigm shifts in science rely on spotting anomalies, a culture that ignores them is deeply damaging.

Reputation is the essential academic currency. As a result, researchers hold back information until a polished paper is ready, creating unpublished 'data silos' that waste collective effort as multiple labs unknowingly repeat the same failed experiments.

Research culminates in a PDF, a static document designed for print. Accessing the underlying data often means emailing authors and waiting for a response, if one ever comes. Even when data is theoretically 'open', it remains practically inaccessible.

### Barriers to Entry
Equipment costs, journal paywalls, and the concentration of resources in well-funded institutions create geographic and economic barriers that prevent science from addressing local issues. Problems that matter to communities outside major research hubs remain understudied, not because they lack importance, but because they lack proximity to infrastructure.

### The Biosciences Suffer Most Acutely
These problems are especially visible in the biosciences, where iteration cycles are slow. In computer science, discoveries are shared in days; in biology, they can take years. Each unpublished experiment, unrecorded detail, and missing negative result slows progress and amplifies the reproducibility crisis.

The lack of openness until journal publication, combined with the absence of negative data, fuels a cycle of waste that acts as a handbrake on innovation.

But the rot goes deeper than publication practices.

## The Lab is a Data Poor Environment
While publication bias explains what gets shared, the deeper problem is that laboratories rarely capture the data that determines experimental outcomes in the first place.

The internet of things has enabled real time sensing in almost every domain except the lab. Most equipment still operates in isolation. The only data routinely captured comes from analytical instruments: microscopes, plate readers, sequencers. Everything leading up to that moment remains undocumented.

The crucial information for reproducibility lives as scribbles in notebooks: centrifugation speeds, incubation times, ambient temperatures. We've had the tools to automatically capture this for decades, but there's no incentive to do so. There's no incentive for your research to be reproducible.

When experiments fail to replicate, we're left guessing. Was it the media batch, the centrifuge calibration, or something else entirely? Without full context, science operates in an information vacuum. This lack of infrastructure for recording and sharing experimental metadata is the root cause of the reproducibility crisis.

But there's another problem. Scientists often change or delete data that doesn't fit their narrative. Experiments that fail get quietly discarded. Anomalies get ignored in pursuit of a publishable story. Without accountability, the data we do have can't be trusted.

The consequence is a vicious cycle: unreliable foundations slow discovery, high stakes publishing increases pressure, and the narrative driven system reinforces itself. Science is broken because labs are data poor; they're data poor because there's no infrastructure or incentive to record data.

## From Data Poverty to Data Abundance
If the problem starts with data poverty, the solution must start with making recording and sharing the default. The goal isn't more paperwork, it's real data: the temperature drifts, reagent swaps, and timing variations that quietly determine whether an experiment works or fails.

We already have the tools to capture all of this. The same technologies that monitor factories or spacecraft can monitor a benchtop biology experiment. What's missing is the structure that connects them.

This project is an attempt to build that structure, a small scale, working example of what an open, verifiable lab could look like if designed today rather than a century ago.

## Project Concept
The project will prototype a transparent, real time laboratory system that captures every relevant variable from experiment design to outcome. By turning the lab into a data rich environment, we can create a blueprint for how science might look if reproducibility, openness, and verification were built in from the start.

The proof of concept will integrate three functional layers of technology:

1. Automation – Use open source liquid handling robots and sensors to execute experiments consistently and collect environmental data automatically. This reduces human error and ensures every step of the workflow is logged.

2. Verification – Apply cryptographic timestamping and livestreaming infrastructure so that every experimental event is verifiable in real time. Anyone, anywhere, can see what's happening and know the data hasn't been altered. This creates an accountability layer: once data is shared, it can't be quietly deleted or changed to fit a narrative.

3. Interpretation – Connect the data to an AI interface that can explain what's being done, reference the relevant literature, and answer questions in plain language. This allows anyone, from students to senior scientists, to interact with the experiment and contribute insights.

Together, these layers form the basis of a new kind of laboratory: one where experiments are transparent by default, where all data, including failed attempts, becomes part of the collective record, and where reproducibility is not an aspiration but an outcome of design.

## Proof of Concept
The experimental work will replicate studies from Jean-Loup Faulon's lab on nutrient variation and growth assays, demonstrating how much metadata and contextual information can be extracted and shared during replication. This approach turns a single experiment into a testbed for a more open model of science.

All experimental data, metadata, and setup details will be available through an integrated electronic lab notebook and inventory system, visible in real time through interfaces built on platforms such as Causality.Network and Bonfires.AI. A livestream setup, including equipment mounted and first person cameras, will serve as proof of work and community engagement, allowing others to observe, comment, and learn.

## What I Hope to Achieve
This is a proof of concept for an alternative form of science, one where dark data is shared, trust is verifiable, and anyone can contribute, regardless of background. By showing that such a system can function independently of traditional institutions, we can create a more robust, inclusive, and efficient scientific ecosystem.

Paradigm shifts in science are often stochastic: they depend on someone noticing an anomaly. But in a culture that hides or discards anomalies, those shifts are suppressed. When experiments are conducted in public, with transparent data and an accountability layer that prevents data from being quietly altered or deleted, anomalies become visible again.

More than that, when you have many people observing a single experiment, each bringing their unique perspective, the likelihood of spotting something unusual increases dramatically. The accountability that comes from sharing data immediately, where changes are timestamped and visible, creates an environment where acting upon anomalies becomes the norm rather than the exception. This could fundamentally increase the rate of discovery.

The generation of large, unbiased datasets that include negative results also opens the door to new computational approaches: using logic based models to detect patterns, test hypotheses, and accelerate discovery.

This project is both an experiment and a statement that science can be rebuilt as a transparent, verifiable, and participatory process.

---

### References and Inspirations
Nielsen, M. (2012). Reinventing Discovery: The New Era of Networked Science. Princeton University Press.

Kuhn, T. S. (2012). The Structure of Scientific Revolutions (50th ed.). University of Chicago Press.

Faure, L., Mollet, B., Liebermeister, W., & Faulon, J.-L. (2023). A neural-mechanistic hybrid approach improving the predictive power of genome-scale metabolic models. Nature Communications, 14(1), 4669.

Castelli, F., Epaulard, O., Le Gouellec, A., & Faulon, J.-L. (2024). Reservoir computing with bacteria. bioRxiv.

Alden DeBenedictis, E. (2025). An AI-ready lab notebook for life science doesn't need to be complex or expensive.

Lifefabs Institute. (2024). About Lifefabs Institute.

causality.network. (n.d.). Unlocking the creator economy in science.

bonfires.ai. (n.d.). Welcome.
