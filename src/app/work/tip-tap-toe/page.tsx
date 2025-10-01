import Project from '@/components/Project'

export default function TattGPT() {
  return (
    <Project
      name="Tip Tap Toe"
      repo="https://github.com/rohandrummond/tiptaptoe"
      stack={{
        Framework: '.NET',
        LLM: 'Google Gemini',
      }}
      description="Tip Tap Toe is a console application built for software engineers and developers who want language-specific practice for improving their typing speed. It includes a custom API integration with Google Gemini, to analyse user keystrokes, and provide tailored code sequences for users to practice their typing."
      badges={['C#', 'Generative AI']}
      features={[
        'Multi-language support with 5 different languages available for practice.',
        'Dynamic AI-generated assessments from Google’s Gemini API',
        'Detailed keystroke logging capturing character, accuracy, and timestamps',
        'Gemini analysis of JSON keystroke logs for identify weaknesses and tailoring practice.',
        'Progress insights with WPM calculation and benchmarking',
      ]}
      videoSrc="/videos/tip-tap-toe-demo.mp4"
    />
  )
}
