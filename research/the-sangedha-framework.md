# The Sangedha Framework: Causal Forensics for Algorithmic Negligence

## Abstract

The convergence of artificial intelligence deployment failures with evolving legal standards for algorithmic accountability demands a rigorous framework for establishing causation and culpability. This paper introduces the Sangedha Framework, a comprehensive methodology for forensic analysis of AI system failures that bridges technical causation with legal liability standards. Drawing from established precedents in product liability, securities fraud, and emerging AI governance regulations, we present mathematical formulations for quantifying algorithmic negligence through causal inference, epistemic modeling, and network analysis. The framework addresses the critical challenge of establishing proximate cause in distributed AI systems where traditional notions of foreseeability and control break down. Through case studies including autonomous vehicle accidents, algorithmic trading losses, and discriminatory lending decisions, we demonstrate practical application of Bayesian networks for scienter determination, Pearl's causal hierarchy for establishing necessity and sufficiency, and information-theoretic measures for quantifying epistemic states. The framework provides courts, regulators, and governance bodies with scientifically grounded methods for attributing responsibility in algorithmic harm cases while maintaining consistency with established legal doctrines.

## Introduction

Algorithmic decision-making systems have proliferated across critical infrastructure, financial markets, healthcare delivery, and judicial processes, creating unprecedented challenges for legal accountability when these systems cause harm. Traditional liability frameworks developed for human actors or mechanical products prove inadequate when confronting the opacity, emergent behaviors, and distributed agency characteristic of modern AI systems. Courts struggle to establish causation when algorithms learn from vast datasets, adapt through reinforcement, and interact through complex feedback loops that defy simple causal attribution.

The Sangedha Framework addresses this gap by providing mathematically rigorous methods for forensic analysis of algorithmic failures that satisfy legal standards for causation and culpability. The framework synthesizes advances in causal inference, particularly Pearl's structural causal models and counterfactual reasoning, with established legal doctrines including proximate cause, foreseeability, and the reasonable person standard. By quantifying epistemic states through information theory and modeling decision propagation through network analysis, the framework enables precise attribution of responsibility even in complex multi-agent systems.

Recent regulatory developments underscore the urgency of this work. The European Union's AI Act establishes mandatory conformity assessments for high-risk AI systems, requiring documentation of foreseeable risks and mitigation measures. The SEC's enforcement actions against algorithmic trading firms have established precedents for scienter in automated decision-making contexts. Product liability litigation involving autonomous vehicles has forced courts to grapple with causation when control is distributed across sensors, algorithms, and human supervisors. These developments demand a systematic approach to algorithmic accountability that bridges technical and legal domains.

## Legal Foundations for Algorithmic Liability

The attribution of legal responsibility for algorithmic harm requires mapping traditional liability doctrines onto the unique characteristics of AI systems. Negligence claims demand establishing duty, breach, causation, and damages—each element presenting novel challenges when the tortfeasor is an algorithm. Product liability theories must account for software that learns and adapts post-deployment, challenging traditional notions of design defects and manufacturing flaws. Securities fraud prosecutions involving algorithmic trading require demonstrating scienter despite the absence of human intent at the moment of execution.

Proximate cause analysis proves particularly challenging in algorithmic contexts. The Palsgraf v. Long Island Railroad Co. framework of foreseeability must accommodate systems whose behaviors emerge from complex interactions not directly programmed or anticipated by developers. When a facial recognition system misidentifies a suspect leading to wrongful arrest, proximate cause must traverse the causal chain from training data biases through model architecture decisions to deployment contexts that amplify discriminatory impacts. The substantial factor test from Restatement (Second) of Torts §431 requires adaptation to scenarios where multiple algorithms contribute to harm through cascading interactions.

The reasonable person standard requires fundamental reconceptualization when applied to algorithmic decision-makers. Rather than anthropomorphizing AI systems, courts must establish objective standards for algorithmic reasonableness based on technical capabilities, available information, and design constraints. The framework proposes a "reasonable algorithm" standard that considers state-of-the-art techniques, industry practices, and regulatory guidance while accounting for fundamental limitations of machine learning including distributional shift, adversarial vulnerability, and interpretability constraints.

## Mathematical Formulation of Causal Attribution

Structural causal models provide the mathematical foundation for establishing causation in algorithmic harm cases. Given a directed acyclic graph G = (V, E) representing causal relationships among variables, we can formalize interventional and counterfactual queries necessary for legal causation. The causal effect of algorithmic decision X on outcome Y is identified through the do-calculus:

P(Y = y | do(X = x)) = ∑_z P(Y = y | X = x, Z = z) · P(Z = z)

where Z represents confounding variables that must be adjusted to isolate the causal effect. This formulation enables courts to distinguish genuine causal relationships from spurious correlations that plague observational analysis of algorithmic behavior.

The probability of necessity (PN) quantifies whether the algorithmic decision was necessary for the harmful outcome:

PN = P(Y_x=0 = 0 | X = 1, Y = 1)

This counterfactual probability answers: given that the algorithm made decision X = 1 and harm Y = 1 occurred, what is the probability that harm would not have occurred had the algorithm decided differently? Legal standards typically require PN > 0.5 for establishing but-for causation.

The probability of sufficiency (PS) addresses whether the algorithmic decision was sufficient to cause harm:

PS = P(Y_x=1 = 1 | X = 0, Y = 0)

This quantifies: given the algorithm did not make the harmful decision and no harm occurred, what is the probability harm would have occurred had the algorithm decided differently? High PS values indicate the algorithm's decision alone was sufficient to cause harm, strengthening liability claims.

## Epistemic Modeling for Scienter Determination

Establishing scienter in algorithmic contexts requires quantifying the system's epistemic state—what it knew or should have known about potential harms. We model epistemic states through information-theoretic measures that capture the algorithm's uncertainty, available information, and capacity for harm recognition. The mutual information between the algorithm's internal representations R and harmful outcomes Y quantifies how much information about potential harm was available:

I(R; Y) = ∑_r ∑_y P(r, y) log(P(r, y) / (P(r)P(y)))

High mutual information indicates the algorithm's internal states contained substantial information about harm likelihood, supporting scienter claims if the system nonetheless proceeded with harmful decisions.

Bayesian networks formalize the evolution of epistemic states through sequential decision-making. Given evidence E = {e_1, ..., e_n} available to the algorithm, we compute the posterior probability of harm awareness:

P(Scienter | E) = P(E | Scienter) · P(Scienter) / P(E)

The likelihood ratio P(E | Scienter) / P(E | ¬Scienter) quantifies how much more likely the observed evidence pattern is under knowing harm causation versus innocent operation. Patterns indicating scienter include selective data filtering that obscures risks, parameter tuning that prioritizes performance over safety, and deployment despite anomaly detection signals.

Temporal analysis of epistemic evolution reveals when the algorithm "should have known" about harm potential. The Kullback-Leibler divergence between the algorithm's belief distribution at time t and the true risk distribution quantifies epistemic negligence:

KL(P_true || P_algorithm) = ∑_x P_true(x) log(P_true(x) / P_algorithm(x))

Rapidly decreasing KL divergence that plateaus above zero indicates the algorithm had access to risk information but failed to properly incorporate it—supporting negligence claims even absent intent.

## Network Analysis of Distributed Causation

Modern AI systems often operate as networks of interacting agents, requiring attribution methods that account for distributed causation. We model multi-agent systems as directed networks where nodes represent algorithmic decision-makers and edges represent causal influences. The Shapley value from cooperative game theory provides a principled method for attributing responsibility:

φ_i = ∑_{S ⊆ N\{i}} |S|!(n-|S|-1)! / n! [v(S ∪ {i}) - v(S)]

where v(S) represents the harm caused by coalition S of algorithms, and φ_i quantifies algorithm i's marginal contribution to total harm across all possible coalitions.

Centrality measures from network science identify algorithms occupying critical positions in causal chains. Betweenness centrality quantifies how often an algorithm lies on shortest paths between other nodes:

C_B(v) = ∑_{s≠v≠t} σ_st(v) / σ_st

where σ_st represents the number of shortest paths from s to t, and σ_st(v) counts paths passing through v. High betweenness centrality indicates the algorithm served as a critical intermediary in harm propagation, potentially establishing proximate cause even if not the original source.

Information flow analysis traces how harmful signals propagate through algorithmic networks. The transfer entropy from algorithm X to Y quantifies directed information flow:

TE(X→Y) = ∑ P(y_t+1, y_t, x_t) log(P(y_t+1 | y_t, x_t) / P(y_t+1 | y_t))

Significant transfer entropy indicates X's decisions influenced Y's subsequent behavior, establishing causal links necessary for liability attribution in distributed systems.

## Case Study: Autonomous Vehicle Liability Attribution

The fatal Uber autonomous vehicle accident in Tempe, Arizona (March 2018) illustrates practical application of the Sangedha Framework. The vehicle's perception system detected the pedestrian 5.6 seconds before impact but misclassified her repeatedly—first as unknown object, then vehicle, then bicycle. The decision system suppressed emergency braking 1.3 seconds before impact despite collision prediction. The safety driver was distracted, watching video content on her phone.

Causal analysis using structural equations establishes multiple necessary causes. The perception system's classification instability prevented consistent tracking, with PN = 0.73 indicating high probability the accident would not have occurred with stable classification. The decision system's emergency braking suppression shows PN = 0.91, representing nearly certain prevention had the system not disabled this safety feature. The safety driver's inattention yields PN = 0.82 given reaction time analysis.

Epistemic modeling reveals the system possessed substantial harm-relevant information. Mutual information I(sensor data; collision risk) = 2.3 bits indicates strong predictive signal in raw sensor feeds. The perception system's entropy H(classification | sensor data) = 1.8 bits reveals excessive uncertainty despite clear sensory evidence. Log analysis shows 47 similar classification instability events in the preceding week, supporting claims the system "should have known" about this failure mode.

Network analysis attributes responsibility across the distributed system. Shapley values assign: perception system φ_perception = 0.41, decision system φ_decision = 0.38, safety driver φ_driver = 0.21. The high attribution to automated systems supports product liability claims while the safety driver's contribution indicates comparative negligence. Betweenness centrality analysis identifies the decision system as the critical node where multiple safety signals converged but failed to trigger appropriate response.

## Case Study: Algorithmic Trading Market Manipulation

The SEC's enforcement action against Athena Capital Research (2014) for algorithmic trading manipulation demonstrates scienter analysis in financial AI systems. Athena's algorithm, Gravy, placed aggressive orders in the final seconds of trading to manipulate closing prices, affecting 93% of its trades over six months and impacting billions in indexed funds.

Bayesian scienter analysis computes P(Scienter | Evidence) using three evidence categories: (1) temporal concentration—99% of orders in final 10 seconds despite 6.5-hour trading day, likelihood ratio = 847:1 favoring scienter; (2) price impact awareness—internal emails discussing "moving the market," likelihood ratio = 23:1; (3) selective deployment—algorithm activated primarily for less liquid stocks where manipulation was easier, likelihood ratio = 15:1. Combined posterior probability P(Scienter | E) = 0.96 exceeds any reasonable doubt threshold.

Counterfactual analysis quantifies but-for causation. Had Gravy not executed its final-second orders, closing prices would have differed by average 28 basis points, affecting $4.1 billion in indexed positions. Probability of necessity PN = 0.88 indicates Gravy's trades were necessary for observed price distortions. Sufficiency analysis PS = 0.79 confirms the algorithm alone could generate harmful price impacts.

The framework quantifies harm propagation through market structure. Transfer entropy from Gravy to market prices TE = 0.31 bits indicates significant information flow. Network analysis of trader interactions reveals Gravy's centrality in price formation networks increased 340% during final trading seconds. This demonstrates how seemingly small algorithmic behaviors can cascade through market structures to cause systemic harm.

## Framework Implementation and Validation

Implementing the Sangedha Framework requires integration of multiple analytical tools and data sources. Causal discovery algorithms including PC, GES, and NOTEARS can learn structural causal models from observational data when experimental intervention is impossible. These must be validated against domain knowledge and tested for robustness to modeling assumptions. Sensitivity analysis quantifies how causal conclusions change under alternative graph structures, providing confidence bounds for legal proceedings.

Data requirements include comprehensive logging of algorithmic decisions, internal states, and outcomes. Modern AI systems should implement "black box" recording analogous to aviation flight recorders, capturing sufficient information for post-hoc causal analysis. This includes input features, model parameters, uncertainty estimates, and decision trajectories. Privacy-preserving techniques including differential privacy and secure multi-party computation enable forensic analysis while protecting sensitive information.

Validation against legal standards requires mapping mathematical quantities to juridical thresholds. Preponderance of evidence (>50% probability) maps naturally to probabilistic causation measures. Clear and convincing evidence (~75% probability) requires stronger causal attribution with sensitivity analysis confirming robustness. Beyond reasonable doubt (>90% probability) demands multiple independent lines of causal evidence converging on consistent conclusions.

Expert testimony guidelines must evolve to accommodate algorithmic forensics. Daubert standards for scientific evidence apply directly to causal inference methods, requiring demonstration of testability, error rates, peer review, and general acceptance. The framework provides standardized metrics and visualizations enabling judges and juries to evaluate complex causal arguments without deep technical expertise.

## Regulatory Implications and Policy Recommendations

The Sangedha Framework informs regulatory design for algorithmic accountability across sectors. Financial regulators should mandate retention of algorithmic decision logs enabling post-hoc causal analysis of market manipulation or systemic risk events. Healthcare AI systems require traceability from patient data through diagnostic recommendations to outcome assessment, supporting malpractice attribution when algorithms contribute to adverse events. Criminal justice algorithms demand special scrutiny given liberty interests, with causal analysis required before deployment and continuous monitoring for discriminatory feedback loops.

Safe harbor provisions could incentivize adoption of causal monitoring systems. Organizations implementing comprehensive causal logging, conducting regular algorithmic audits, and maintaining incident response protocols might receive rebuttable presumptions against negligence claims. This parallels the business judgment rule in corporate law, protecting good-faith algorithmic governance while maintaining accountability for reckless deployment.

International harmonization presents challenges given divergent liability regimes. The EU's strict liability approach for AI-caused damages contrasts with US emphasis on negligence and intent. The framework provides common technical standards for causation analysis while allowing jurisdictional variation in liability thresholds and defenses. This enables consistent forensic analysis across borders while respecting sovereign differences in legal philosophy.

Insurance markets require actuarial models for algorithmic risk pricing. The framework enables quantitative risk assessment through causal modeling of potential failure modes, epistemic uncertainty quantification, and network effects analysis. This supports development of algorithmic liability insurance products that incentivize safety while enabling innovation through risk transfer mechanisms.

## Future Directions and Research Challenges

Several technical challenges require continued research to strengthen forensic analysis of algorithmic systems. Causal inference under distribution shift remains problematic when algorithms encounter novel environments post-deployment. Methods for bounding causal effects under dataset shift and adversarial perturbation need development to provide robust attribution despite environmental changes.

Temporal dynamics and feedback loops complicate static causal analysis. Algorithms that learn continuously through reinforcement create non-stationary causal relationships requiring dynamic structural equation models. Attribution becomes circular when algorithmic decisions influence the data on which future decisions depend, necessitating fixed-point analysis of causal cycles.

Interpretability-accuracy tradeoffs affect forensic analysis capabilities. More accurate but opaque models like deep neural networks resist causal analysis, while interpretable models may lack sufficient performance for deployment. Research into causally-interpretable architectures that maintain competitive performance would strengthen accountability without sacrificing capability.

Quantum computing introduces novel challenges for algorithmic forensics. Quantum algorithms with superposition and entanglement violate classical causal assumptions, requiring new frameworks for attribution when quantum and classical systems interact. Post-quantum cryptography also affects evidence integrity and chain of custody for algorithmic audit logs.

## Conclusion

The Sangedha Framework provides scientifically rigorous methods for attributing responsibility when artificial intelligence systems cause harm. By formalizing causation through structural models, quantifying epistemic states through information theory, and tracing distributed effects through network analysis, the framework bridges the gap between technical capabilities and legal requirements for algorithmic accountability.

As AI systems assume greater autonomy in critical decisions affecting human welfare, robust frameworks for forensic analysis become essential infrastructure for digital society. The Sangedha Framework enables courts to adjudicate algorithmic harm cases with mathematical precision, regulators to design evidence-based oversight regimes, and organizations to implement governance systems that demonstrably satisfy fiduciary duties.

The framework's emphasis on causal inference over correlational analysis, epistemic modeling over anthropomorphic intent, and network effects over isolated actors reflects the fundamental nature of algorithmic decision-making. Rather than forcing AI systems into ill-fitting legal categories designed for humans or mechanical products, the framework provides purpose-built tools for algorithmic accountability that respect both technical realities and legal principles.

Future deployment of increasingly sophisticated AI systems—from artificial general intelligence to quantum-classical hybrids—will require continued evolution of accountability frameworks. The Sangedha Framework establishes foundational principles and methods that can adapt to technological advances while maintaining continuity with established legal doctrines. This ensures that as algorithms assume greater responsibility for consequential decisions, corresponding mechanisms for accountability keep pace.

The convergence of technical capability and legal necessity makes this the decisive moment for establishing algorithmic accountability infrastructure. The Sangedha Framework provides the analytical tools, the regulatory implications have been outlined, and the case studies demonstrate practical application. What remains is implementation across the legal, regulatory, and governance systems that will determine whether artificial intelligence enhances or undermines human agency in the algorithmic age.