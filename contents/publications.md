For full paper list (not now, but I'm sure there will be more great work in the future), please refer to my [Google Scholar](https://scholar.google.com/citations?user=7gsdLw4AAAAJ&hl=en).

<div class="publication-item">
  <div class="publication-title">
    <h3>OPUS: Towards Efficient and Principled Data Selection in Large Language Model Pre-training in Every Iteration</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
     <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Shaobo Wang<span class="author-marker">*</span>,  Tianyi Xu<span class="author-marker">*</span>, Guo Chen, Jialin Liu, Tianyu Zhang, Junhao Zheng, Kexin Yang, Xingzhang Ren, Dayiheng Liu<span class="author-marker">†</span>, Linfeng Zhang†<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>Under Review, 2026</em>
  </div>
  <div class="publication-abstract">
    <span class="abstract-title">Abstract:</span>
    Data selection is a critical lever for enhancing the performance and efficiency of Large Language Model (LLM) pre-training. While static filtering techniques are widely adopted, they fail to adapt to the model's evolving training dynamics. Conversely, existing dynamic selection methods often incur prohibitive computational overheads or rely on heuristic metrics lacking theoretical grounding. In this work, we introduce OPUS (Optimizer-induced Projected Utility Selection), a principled and efficient framework for dynamic data selection. Unlike previous gradient-based methods that rely solely on raw gradient alignment, OPUS is optimizer-aware; it focuses on the actual weight changes induced by the optimization algorithm. We rigorously define the utility of each data point by estimating its expected contribution to the model update towards a high-quality proxy distribution, explicitly accounting for the learning rate and historical trajectory. To overcome the computational bottleneck of high-dimensional utility estimation, we leverage random projections inspired by random matrix theory, significantly accelerating the process. Furthermore, we depart from standard greedy top-k selection strategies by employing a soft sampling mechanism. We translate the calculated utility into selection probabilities via a softmax distribution, allowing the model to balance high-utility exploitation with necessary diversity. Empirical evaluations, including pre-training GPT-2 series models from scratch, validate the robustness of our approach. Notably, OPUS delivers significant performance improvements even when applied to high-quality corpora already filtered by state-of-the-art static methods, such as FineWeb-Edu.
  </div>
  <div class="publication-links">
    <a href="javascript:void(0);" target="_blank">Paper</a>
    <a href="javascript:void(0);" target="_blank">Code</a>
    <a href="https://gszfwsb.notion.site/OPUS-Towards-Efficient-and-Principled-Data-Selection-in-Large-Language-Model-Pre-training-in-Every--2dadcecbab9e80d2b34bcceaa926bb1e" class="project-link" target="_blank">
      <i class="bi bi-journal-text"></i> Blog
    </a>
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
    <h3>SITA: Learning Speaker-Invariant and Tone-Aware Speech Representations for Low-Resource Tonal Languages</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
     <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Tianyi Xu<span class="author-marker">*</span>,  Binwei Yao, Junjie Hu<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>ACL ARR January Reviewing, 2026</em>
  </div>
  <div class="publication-abstract">
    <span class="abstract-title">Abstract:</span>
    Tonal low-resource languages are widely spoken yet remain underserved by modern speech technology. A key challenge is learning representations that are speaker-invariant (robust to nuisance variation such as gender) while remaining tone-aware, since tone often carries lexical meaning. We propose SITA, a lightweight adaptation recipe for pretrained wav2vec-style encoders that enforces these two requirements within a single shared model. SITA uses staged multi-objective training: (i) a cross-gender contrastive objective encourages lexical consistency across speakers, while a tone-repulsive loss prevents tone collapse by explicitly separating same-word different-tone realizations; and (ii) an auxiliary Connectionist Temporal Classification (CTC)-based ASR objective with distillation stabilizes recognition-relevant structure. We evaluate primarily on Hmong, a highly tonal and severely under-resourced language where off-the-shelf multilingual encoders fail. On a curated Hmong word corpus, SITA improves cross-gender lexical retrieval (Top-1 up to 0.7 versus 0.1 for XLS-R) and yields substantially stronger tone separation (hard-negative dissimilarity up to 0.65 versus near-zero in baselines), while maintaining usable ASR accuracy relative to an XLS-R teacher. We further observe similar gains when transferring the same recipe to Mandarin, suggesting InvaTone is a general, plug-in approach for adapting multilingual speech encoders to tonal languages.
  </div>
  <div class="publication-links">
    <a href="javascript:void(0);" target="_blank">Paper</a>
    <a href="javascript:void(0);" target="_blank">Code</a>
  </div>
</div>

<div class="publication-item">
  <div class="publication-title">
    <h3>MelTrim: Coarse-to-Fine Data Pruning for Speech Classification</h3>
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
    Dataset Pruning (DP) aims to construct a coreset that achieves performance comparable to the original, full dataset. However, few studies have explored DP in the context of Speech Classification (SC) tasks. Unlike image or text classification, SC is particularly challenging due to the difficulty in capturing the acoustic, semantic, and contextual representations. In this study, we propose a novel dataset pruning method for speech datasets, termed Meltrim, which uses a two-step coarse-to-fine framework designed to address these challenges. Specifically, in Step 1, Meltrim coarsely filters utterance-level redundant samples using DBSCAN clustering on Mel-Frequency Cepstral Coefficients (MFCC) features, which are first flattened and then reduced in dimensionality using UMAP. In Step 2, we perform frame-level redundancy pruning for each utterance via utility pruning, which aims to eliminate irrelevant frames within each utterance. To the best of our knowledge, this is the first dataset pruning approach designed for Speech Classification tasks, demonstrating outstanding performance compared to classical general DP methods. Notably, for the Speech Emotion Recognition, our method achieves up to a 49.5% improvement in WA (Weighted Accuracy) on the MEAD dataset. For the Speaker Identification tasks, it results in a 41.9% reduction in EER (Equal Error Rate) on the VoxCeleb1 dataset.
  </div>
  <div class="publication-links">
    <a href="javascript:void(0);" target="_blank">Paper</a>
    <a href="javascript:void(0);" target="_blank">Code</a>
  </div>
</div>

<div class="publication-item">
  <div class="publication-title">
    <h3>From Single-SQL to Multi-SQL: Bridging Real-World Needs with the SpiderS Benchmark</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
    <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Yujian Gan<span class="author-marker">*</span>, Yuxi Lin<span class="author-marker"></span>, Zhilin Zhang, Jinxia Xie, Vassilis Routsis<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>ACL ARR January Reviewing, 2026</em>
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

<div class="publication-footnote">* First author/co-author | † Corresponding author</div>

