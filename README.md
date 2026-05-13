# Trinethra — Supervisor Feedback Analyzer

AI-assisted behavioral assessment tool built for the DeepThought Software Developer Internship assignment.

Trinethra helps psychology interns analyze supervisor feedback transcripts of DT Fellows using a locally running LLM through Ollama. The tool extracts behavioral evidence, evaluates operational maturity, maps KPI impact, detects assessment gaps, and generates structured follow-up questions.

---

# Overview

At DeepThought, psychology interns manually review supervisor feedback calls to assess Fellow performance. This process normally takes 45–60 minutes per transcript.

This project reduces the effort by generating a structured AI-assisted draft analysis in around 20–30 seconds using a local LLM.

The system does **not replace human judgment**. It generates a draft assessment that interns can review and refine.

---

# Features

## Transcript Analysis
- Paste supervisor transcript
- Run AI-powered assessment locally using Ollama

## Structured Output
The system generates:
- Behavioral evidence extraction
- Rubric-based scoring (1–10)
- KPI mapping
- Gap analysis
- Follow-up questions
- Operational Layer 1 vs Layer 2 assessment

## Sample Transcript Support
Includes all 3 assignment transcripts:
- Karthik Narayanan
- Meena Krishnamurthy
- Anil Menon

## Human-Centered UI
Designed for non-technical users:
- Clear information hierarchy
- Confidence indicators
- Layer 1 vs Layer 2 visualization
- AI draft warnings
- Structured analysis cards

## Modern Loading Experience
Interactive loading screen showing:
- behavioral analysis stages
- KPI mapping progress
- survivability checks
- local model runtime information

## Local AI Runtime
- No cloud APIs
- No OpenAI
- No Anthropic
- Runs completely locally using Ollama

---

# Tech Stack

## Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Backend
- Next.js API Routes

## AI Runtime
- Ollama
- llama3.2

---

# Why llama3.2?

I selected `llama3.2` because:
- Better reasoning quality for behavioral analysis
- More consistent scoring across transcripts
- Stronger contextual understanding
- Better handling of supervisor bias and survivability logic
- Improved structured JSON generation reliability

Although slightly slower than smaller models, it produced more accurate operational assessments and more reliable rubric-based reasoning.

---

# Architecture

```txt
Frontend (Next.js UI)
        ↓
API Route (/api/analyze)
        ↓
Prompt Builder
        ↓
Ollama Local API
        ↓
llama3.2 Model
        ↓
Structured JSON Analysis
        ↓
Dashboard UI Rendering