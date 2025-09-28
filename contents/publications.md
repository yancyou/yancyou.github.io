For full paper list (not now, but I'm sure there will be more great work in the future), please refer to my [Google Scholar](https://scholar.google.com/citations?user=7gsdLw4AAAAJ&hl=en).


<div class="publication-item">
  <div class="publication-title">
    <h3>From Single-SQL to Multi-SQL: Bridging Real-World Needs with the SpiderS Benchmark</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
    <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Yujian Gan<span class="author-marker">*</span>, Yuxi Lin<span class="author-marker"></span>, Zhilin Zhang, Jinxia Xie, Vassilis Routsis<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>AAAI Reviewing, 2026</em>
  </div>
  <div class="publication-abstract">
    <span class="abstract-title">Abstract:</span>
    Text-to-SQL systems allow users to interact with databases using natural language, but most assume that each question must be answered by a single SQL query. However, many real-world information needs, such as multi-step analysis or composite reporting, are more naturally fulfilled by generating multiple simpler SQL queries. To address this gap, we introduce SpiderS, the first benchmark designed for the Text-to-Multi-SQL task. Built on top of the Spider dataset, SpiderS provides both single-query and multi-query solutions for each question when applicable. We also propose a more flexible evaluation protocol that accepts any prediction covering the required information, regardless of the number or structure of queries. Experimental results across several large language models show that allowing multi-query outputs improves execution accuracy. However, current models demonstrate fragility: even a minor prompt change to support multi-query generation can significantly degrade performance on the Spider benchmark. To improve robustness, we introduce a lightweight router that decides whether to generate a single or multiple SQL for a given question, leading to substantial performance gains. Our work bridges single-query assumptions and real-world multi-query needs, advancing Text-to-SQL research. We will release the code and dataset on GitHub.
  </div>
  <div class="publication-links">
    <a href="javascript:void(0);" target="_blank">Paper</a>
    <a href="javascript:void(0);" target="_blank">Code</a>
  </div>
</div>

<div class="publication-item">
  <div class="publication-title">
    <h3>Multi-Marginal f-Divergence Schrödinger Bridges: Towards a Unifying Framework for Generation and Distillation</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
     <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Ishaan Kharbanda<span class="author-marker">*</span>,  Yudi Li<span class="author-marker">*</span>, Rahul Choudhary, Hanbaek Lyu<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>ICLR Reviewing, 2026</em>
  </div>
  <div class="publication-abstract">
    <span class="abstract-title">Abstract:</span>
    We propose a unified framework for multimodal generation and knowledge distillation by leveraging the Multi-marginal Static Schrödinger Bridge (MSSB) with general f -divergence, where we use flexible and task-oriented prior measures. This approach allows us to adapt the MSSB problem to diverse tasks—from text-guided image generation to model compression—simply by designing an appropriate prior. For generative modeling, we develop an efficient block-stochastic optimization scheme and a practical Langevin-based inference method. For knowledge distillation, this framework has a clear information-theoretic interpretation: we prove that our MSSB-based Knowledge Distillation (MSSB-KD) implements a variational relaxation of the Information Bottleneck principle. Our novel MSSB-KD formulation demonstrates strong robustness to noisy supervision, significant gains in multi-teacher settings, and scalability across architectures. Finally, we theoretically prove the equivalence between Static and Dynamic Schrödinger Bridges for general f-divergences, enabling the use of divergences better suited to the task at hand.
  </div>
  <div class="publication-links">
    <a href="javascript:void(0);" target="_blank">Paper</a>
    <a href="javascript:void(0);" target="_blank">Code</a>
  </div>
</div>

<div class="publication-item">
  <div class="publication-title">
    <h3>MelTrim: Coarse-to-Fine Data Pruning for Speech Recognition</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
    Shaobo Wang<span class="author-marker">*</span>, <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Xintong Li<span class="author-marker">*</span>, Tianle Niu, Zhengkun Ge, Yue Min, Xiaoqian Liu, Hankun Wang, Linfeng Zhang<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>ACL ARR October Reviewing, 2026</em>
  </div>
  <div class="publication-abstract">
    <span class="abstract-title">Abstract:</span>
    Dataset Pruning (DP) aims to construct a coreset that achieves performance comparable to the original, full dataset. However, few studies have explored DP in the context of Speech Recognition (SR) tasks. Unlike image or text classification, SR is particularly challenging due to the difficulty in capturing the acoustic, semantic, and contextual representations. In this study, we propose a novel dataset pruning method for speech datasets, termed MelTrim, which uses a two-step coarse-to-fine framework designed to address these challenges. Specifically, in Step 1, MelTrim coarsely filters utterance-level redundant samples using DBSCAN clustering on Mel-Frequency Cepstral Coefficients (MFCC) features, which are first flattened and then reduced in dimensionality using UMAP. In Step 2, we perform frame-level redundancy pruning for each utterance via utility pruning, which aims to eliminate irrelevant frames within each utterance. To the best of our knowledge, this is the first dataset pruning approach designed for Speech Recognition tasks, demonstrating outstanding performance compared to classical general DP methods. Notably, for the Speech Emotion Recognition, our method achieves up to a 33.6% improvement in WA on the M3ED dataset. For the Speaker Identification tasks, it results in a 10.6% reduction in EER on the VoxCeleb1 dataset.
  </div>
  <div class="publication-links">
    <a href="javascript:void(0);" target="_blank">Paper</a>
    <a href="javascript:void(0);" target="_blank">Code</a>
  </div>
</div>

<div class="publication-footnote">* First author/co-author | † Corresponding author</div>

