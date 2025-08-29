For full paper list (not now, but I'm sure there will be more great work in the future), please refer to my [Google Scholar](https://scholar.google.com/citations?user=7gsdLw4AAAAJ&hl=en).


<div class="publication-item">
  <div class="publication-title">
    <h3>Enhancing NLIDBs: Advancing from Text-to-SQL to Text-to-Multi-SQL</h3>
    <button class="abstract-btn">Abstract</button>
  </div>
  <div class="publication-meta">
    <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Yuxi Lin<span class="author-marker">*</span>, Yujian Gan<span class="author-marker">*</span>, Zhilin Zhang, Jinxia Xie, Vassilis Routsis<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>AAAI Reviewing, 2026</em>
  </div>
  <div class="publication-abstract">
    <span class="abstract-title">Abstract:</span>
    Text-to-SQL has democratized access to relational databases by letting non-technical users express queries in natural language. but it rests on one significant limitation: it assumes that every user request can be answered by a single SQL statement returning a flat, tabular result. In practice, many real‐world information needs—hierarchical reports, multi‐granularity analyses—cannot be captured in one shot. To meet these complex demands, we propose Text-to-Multi-SQL, a new paradigm that generates a sequence of SQL statements, each targeting a subtask, and then composes their outputs into the final answer. To drive progress, We created SpiderS, the first Text-to-Multi-SQL dataset, based on the Spider dataset. It includes 7,000 training examples, 1,024 validation examples, and 2,147 test examples, created using a mix of manual and GPT4o generated data. Our experiments reveal that current state-of-the-art Text-to-SQL models suffer severe degradation—0.167–0.327 absolute drop in EX accuracy—when tasked with generating multiple SQLs. Moreover, we find that these models are alarmingly sensitive to the prompt phrasing: merely changing "generate one SQL" to "generate one or multiple SQL" can halve their performance.
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
    Shaobo Wang<span class="author-marker">*</span>, Xintong Li<span class="author-marker">*</span>, <strong>Xuan Ouyang</strong><span class="author-marker">*</span>, Tianle Niu, Zhengkun Ge, Yue Min, Xiaoqian Liu, Hankun Wang, Linfeng Zhang<span class="author-marker">†</span>
  </div>
  <div class="publication-venue">
    <em>EMNLP Reviewing, 2025</em>
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

