export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miracle73.github.io";
export const TWIN_URL = "https://mirackchuks-miracle-digital-twin.hf.space";
export const TWIN_PAGE = "https://huggingface.co/spaces/mirackchuks/miracle-digital-twin";
export const EMAIL = "nwadiaromiraclechukwuma@gmail.com";
export const GITHUB = "https://github.com/miracle73";

export type Project = {
  name: string;
  what: string;
  decision: string;
  hard: string[];
  stack: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "ParcelPilot Support Copilot",
    what: "A support and operations copilot that answers questions from ingested PDF and XLSX documents, scoped to the account and role of whoever is asking.",
    decision: "Retrieval is scoped at the query layer, so a record can only structurally reach its own documents.",
    hard: [
      "An OpenAI Agents SDK orchestrator calls scoped data and document tools and a deterministic policy engine, so entitlement and credit decisions come from code rather than from the model. Documents are chunked on clause boundaries so the conditions attached to an entitlement stay with it.",
      "Customer, support and operations roles see different data, and inaccessible and nonexistent IDs look identical to the caller. Escalations, ticket updates and follow ups are previewed first and saved only after explicit confirmation.",
    ],
    stack: ["OpenAI Agents SDK", "RAG", "Policy engine", "Role based access", "Node.js"],
    repo: "https://github.com/miracle73/parcelpilot-support-copilot",
  },
  {
    name: "Vera",
    what: "An AI voice agent that takes e-commerce orders over the phone, from product selection to payment confirmation, while sounding natural and on brand.",
    decision: "Payment writes are idempotent, because a voice agent that retries a call must not take money twice.",
    hard: [
      "Vapi handles speech to text, the LLM turn and ElevenLabs speech, and calls my webhook functions to look up products, build the order and start payment.",
      "Orders and payments live in PostgreSQL, payment state is confirmed by verified provider webhooks, and the payment provider switches between Stripe and Paystack through configuration.",
    ],
    stack: ["Vapi", "OpenAI", "ElevenLabs", "TypeScript", "PostgreSQL", "Stripe", "Paystack"],
    live: "https://vera-two-swart.vercel.app",
    repo: "https://github.com/miracle73/Vera",
  },
  {
    name: "ReproAgent",
    what: "An LLM agent that selects and runs nf-core bioinformatics pipelines, then writes a provenance manifest complete enough to replay the run months later and diff the results.",
    decision: "Provenance that cannot be observed is stored as null and logged, never guessed.",
    hard: [
      "It measures how much variance in agent driven analysis comes from the agent rather than the pipeline. The manifest records the release and resolved commit SHA, parameters, input hashes, container digests, seeds, model settings and the full decision trace.",
      "Replay runs without an agent and fails loudly if a bundled input is missing or changed. Extra Nextflow configs are copied and hashed so replay applies exactly the same config. Planning is deterministic by default, with any OpenAI compatible model as an option.",
    ],
    stack: ["Python", "LLM agents", "Nextflow", "nf-core", "Docker"],
    repo: "https://github.com/miracle73/ReproAgent",
  },
  {
    name: "NexusDesk",
    what: "A multi tenant AI customer support platform that ingests company documents, retrieves tenant isolated knowledge, and decides per message whether to answer, ask a clarifying question, or escalate to a human.",
    decision: "Tenant identity comes only from the verified JWT, never from the request body.",
    hard: [
      "Every database query and every Chroma collection is scoped by tenant, so one company's knowledge cannot surface in another's answers. TXT, Markdown and PDF uploads are chunked with overlap and embedded through OpenRouter.",
      "A LangGraph workflow makes the answer, clarify or escalate decision and stores transcripts, escalation reasons and sources. The dashboard turns unanswered questions into a list of knowledge gaps.",
    ],
    stack: ["LangGraph", "RAG", "Chroma", "OpenRouter", "FastAPI", "PostgreSQL"],
    repo: "https://github.com/miracle73/NexusDesk",
  },
  {
    name: "Primlook",
    what: "A booking and payments platform with an AI and automation layer: WhatsApp integration against live transactional flows, and automated scheduling and notification pipelines.",
    decision: "Provider webhooks, not the synchronous response, are the source of truth for settlement.",
    hard: [
      "Bookings, reminders and confirmations flow through WhatsApp and email without manual steps, driven by the same transactional events as the payment system.",
      "Notifications run through a rate limited queue with backoff, retries and a dead letter queue, and a reconciliation job keeps payments and bookings in agreement.",
    ],
    stack: ["WhatsApp API", "Automation pipelines", "Job queues", "Payment webhooks", "TypeScript"],
    live: "https://www.primlook.com/",
  },
];

export const principles = [
  "A prompt is a request, a check is a guarantee.",
  "The agent proposes, code and people decide.",
  "Most RAG failures are retrieval failures wearing a generation costume.",
  "A completed HTTP request and a settled transaction are different events.",
];

export const job = {
  org: "Safeguardmedia",
  role: "Machine Learning Engineer / AI Engineer",
  period: "June 2024 to present",
  points: [
    "I architected AI systems for real time disease detection and classification using computer vision and deep learning.",
    "I am building deepfake detection systems with transformer based architectures and multi modal analysis: facial landmarks, temporal inconsistency and video authenticity checks.",
    "I set up MLOps pipelines for model versioning, monitoring and automated deployment in production.",
    "I work with agricultural experts and veterinarians so the models hold up in real field conditions.",
  ],
};

export const stack = {
  "AI and ML": ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "CrewAI", "OpenAI Agents SDK", "Pinecone", "Chroma", "Scikit-learn"],
  MLOps: ["MLflow", "DVC", "Airflow", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS", "GCP"],
  "Languages and serving": ["Python", "TypeScript", "Rust", "FastAPI", "Node.js", "PostgreSQL", "Redis", "MongoDB"],
};
