import { Metadata } from 'next'
import Project from '@/components/pages/work/Project'

export const metadata: Metadata = {
  title: 'TipTapToe | Rohan Drummond',
  description: 'TipTapToe, built by Rohan Drummond.',
}

export default function TipTapToe() {
  return (
    <Project
      name="Tip Tap Toe"
      repo="https://github.com/rohandrummond/tiptaptoe"
      firstParagraph="Tip Tap Toe is a typing practice console app designed specifically for devs. It uses a custom API integration with Google's Gemini model to generate language specific code sequences, and analyses your keystroke patterns to create personalised practice exercises that target your weak points."
      secondParagraph="The project quickly became a great chance to learn more about C#, and a crash course in working with structured data. It let me explore making HTTP requests, real time keystroke capture and enforcing structured JSON output from LLMs."
      badges={['.NET', 'Gemini']}
      highlights={[
        'Structured AI output: Custom Gemini API integration with enforced structured outputs and deserialisation',
        'Real time keystroke analytics: Stopwatch instance captures keystroke timestamps and accuracy, enabling analysis of slow transitions and error patterns',
        'Personalised practice: Keystroke JSON data to Gemini, which analyses typing patterns and generates targeted practice sequences',
        'Modern C# Patterns: Leverages C# 12 features like primary constructors and collection expressions',
      ]}
      videoSrc="/videos/tip-tap-toe-demo.mp4"
    />
  )
}
