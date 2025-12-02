'use client'

import { useState, useEffect, useRef } from 'react'

export default function VoiceAssistant() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [assistantText, setAssistantText] = useState('Click to start the AI voice assistant')
  const [conversationHistory, setConversationHistory] = useState([])
  const [mode, setMode] = useState('guide') // 'guide' or 'chat'

  const speechSynthesisRef = useRef(null)
  const speechRecognitionRef = useRef(null)
  const currentUtteranceRef = useRef(null)
  const recognitionRef = useRef(null)

  // Portfolio context for AI responses
  const portfolioContext = {
    name: 'Isaac Gyasi Nimako',
    role: 'Senior Backend Engineer',
    experience: '9+ years',
    skills: ['C#', 'ASP.NET Core', 'Microservices', 'AWS', 'Azure', 'RabbitMQ', 'Redis', 'Docker'],
    projects: [
      {
        name: 'TechHalo.ai',
        description: 'AI-powered knowledge management platform with multi-tenant architecture'
      },
      {
        name: 'ECG Electricity Vending System',
        description: 'Mission-critical utility payment solution processing thousands of transactions daily'
      }
    ],
    companies: [
      'Pilgrim Consulting Group (TechHalo.ai)',
      'TGL Systems',
      'Axis Pension Group',
      'CediPay / Hisense Ghana'
    ],
    location: 'Accra, Ghana',
    email: 'gyasinimako.gh@gmail.com',
    phone: '+233 24 427 4699'
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesisRef.current = window.speechSynthesis

      // Initialize Speech Recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onstart = () => {
          setIsListening(true)
          setAssistantText('Listening...')
        }

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript
          handleUserInput(transcript)
        }

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
          setAssistantText('Sorry, I didn\'t catch that. Please try again.')
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }

        speechRecognitionRef.current = recognitionRef.current
      }

      // Auto-open panel on first visit
      setTimeout(() => {
        if (!localStorage.getItem('voiceAssistantSeen')) {
          setIsPanelOpen(true)
        }
      }, 2000)
    }
  }, [])

  const speak = (text) => {
    return new Promise((resolve) => {
      if (!speechSynthesisRef.current) {
        resolve()
        return
      }

      if (isSpeaking) {
        stopSpeaking()
      }

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8

      const voices = speechSynthesisRef.current.getVoices()
      const preferredVoice = voices.find(voice =>
        voice.name.includes('Google') ||
        voice.name.includes('Microsoft') ||
        voice.name.includes('Samantha') ||
        voice.lang.startsWith('en')
      )
      if (preferredVoice) {
        utterance.voice = preferredVoice
      }

      utterance.onstart = () => {
        setIsSpeaking(true)
        currentUtteranceRef.current = utterance
        setAssistantText(text)
      }

      utterance.onend = () => {
        setIsSpeaking(false)
        currentUtteranceRef.current = null
        resolve()
      }

      utterance.onerror = () => {
        setIsSpeaking(false)
        resolve()
      }

      speechSynthesisRef.current.speak(utterance)
    })
  }

  const stopSpeaking = () => {
    if (speechSynthesisRef.current && speechSynthesisRef.current.speaking) {
      speechSynthesisRef.current.cancel()
    }
    setIsSpeaking(false)
    currentUtteranceRef.current = null
  }

  const stopListening = () => {
    if (speechRecognitionRef.current && isListening) {
      speechRecognitionRef.current.stop()
      setIsListening(false)
    }
  }

  // AI Response Generator - Context-aware responses
  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase().trim()

    // Greetings
    if (input.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
      return `Hello! I'm ${portfolioContext.name}'s AI assistant. How can I help you learn about his portfolio today?`
    }

    // Name/Role questions
    if (input.match(/\b(who are you|what is your name|introduce yourself|tell me about yourself)\b/)) {
      return `I'm an AI assistant representing ${portfolioContext.name}, a ${portfolioContext.role} with ${portfolioContext.experience} of experience. I can help you learn about his skills, projects, and experience.`
    }

    // Experience questions
    if (input.match(/\b(experience|years|how long|work history|background)\b/)) {
      return `${portfolioContext.name} has ${portfolioContext.experience} of experience designing and delivering enterprise SaaS platforms, FinTech APIs, and AI-driven systems. He has worked at companies like ${portfolioContext.companies.slice(0, 2).join(' and ')}.`
    }

    // Skills questions
    if (input.match(/\b(skills|technologies|what can|expertise|proficient|know)\b/)) {
      return `His core skills include ${portfolioContext.skills.slice(0, 5).join(', ')}, and more. He specializes in microservices architecture, cloud platforms like AWS and Azure, and modern backend technologies.`
    }

    // Projects questions
    if (input.match(/\b(projects|work|built|developed|created|portfolio)\b/)) {
      const project = portfolioContext.projects[0]
      return `One of his notable projects is ${project.name}, ${project.description}. He also built the ${portfolioContext.projects[1].name}, which processes thousands of transactions daily.`
    }

    // Company/Work questions
    if (input.match(/\b(company|where|work|current|employer|job)\b/)) {
      return `He currently works as a Lead Backend Engineer at ${portfolioContext.companies[0]}, where he architects middleware engines and AI-driven systems. Previously, he worked at ${portfolioContext.companies.slice(1, 3).join(' and ')}.`
    }

    // Contact questions
    if (input.match(/\b(contact|email|phone|reach|get in touch|connect)\b/)) {
      return `You can reach ${portfolioContext.name} at ${portfolioContext.email} or call ${portfolioContext.phone}. He's located in ${portfolioContext.location} and is always open to discussing new opportunities.`
    }

    // Location questions
    if (input.match(/\b(where|location|city|country|based|live)\b/)) {
      return `${portfolioContext.name} is based in ${portfolioContext.location}.`
    }

    // Tech stack questions
    if (input.match(/\b(c#|asp.net|dotnet|python|node|react|aws|azure|docker|redis|rabbitmq)\b/)) {
      const tech = input.match(/\b(c#|asp.net|dotnet|python|node|react|aws|azure|docker|redis|rabbitmq)\b/)?.[0]
      return `${portfolioContext.name} has extensive experience with ${tech}. It's one of his core technologies used in building scalable enterprise applications.`
    }

    // General questions about capabilities
    if (input.match(/\b(what can you do|help|assist|capabilities|features)\b/)) {
      return `I can help you learn about ${portfolioContext.name}'s experience, skills, projects, and background. You can ask me about his work history, technologies he uses, or his projects. Feel free to ask anything!`
    }

    // Default response
    return `That's an interesting question! ${portfolioContext.name} is a ${portfolioContext.role} with expertise in ${portfolioContext.skills.slice(0, 3).join(', ')}. Would you like to know more about his experience, skills, or projects?`
  }

  const handleUserInput = async (userInput) => {
    setConversationHistory(prev => [...prev, { type: 'user', text: userInput }])
    setAssistantText(`You said: "${userInput}"`)

    // Generate AI response
    const aiResponse = generateAIResponse(userInput)

    setConversationHistory(prev => [...prev, { type: 'assistant', text: aiResponse }])

    // Speak the response
    await speak(aiResponse)

    // After speaking, ask if user wants to continue
    if (mode === 'chat') {
      await new Promise(resolve => setTimeout(resolve, 500))
      await speak('Would you like to ask anything else?')
      startListening()
    }
  }

  const startListening = () => {
    if (speechRecognitionRef.current && !isListening && !isSpeaking) {
      try {
        speechRecognitionRef.current.start()
      } catch (error) {
        console.error('Error starting speech recognition:', error)
        setAssistantText('Speech recognition not available. Please check your browser settings.')
      }
    }
  }

  const startChat = async () => {
    setMode('chat')
    localStorage.setItem('voiceAssistantSeen', 'true')

    const greeting = `Hello! I'm ${portfolioContext.name}'s AI assistant. I can answer questions about his experience, skills, projects, and background. What would you like to know?`

    await speak(greeting)
    setConversationHistory([{ type: 'assistant', text: greeting }])

    // Start listening after greeting
    await new Promise(resolve => setTimeout(resolve, 500))
    startListening()
  }

  const startGuide = async () => {
    setMode('guide')
    localStorage.setItem('voiceAssistantSeen', 'true')

    const welcomeScript = [
      `Hello! Welcome to ${portfolioContext.name}'s portfolio. I'm an AI assistant here to guide you.`,
      `${portfolioContext.name} is a ${portfolioContext.role} with ${portfolioContext.experience} of experience designing and delivering enterprise SaaS platforms, FinTech APIs, and AI-driven systems.`,
      "Let me guide you through the portfolio. You can explore the About section to learn more about his background.",
      "In the Experience section, you'll see his work at companies like TechHalo.ai, where he architected middleware engines using ASP.NET Zero.",
      "The Skills section showcases his expertise in technologies like C sharp, ASP.NET Core, microservices, and cloud platforms.",
      "Check out the Projects section to see his recent work, including TechHalo.ai and the ECG Electricity Vending System.",
      "Feel free to explore the site, or switch to chat mode to ask me questions directly!"
    ]

    for (let i = 0; i < welcomeScript.length; i++) {
      await speak(welcomeScript[i])

      if (!isSpeaking && i > 0) break

      if (i < welcomeScript.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }

    if (!isSpeaking) {
      setAssistantText('Voice guide completed. Switch to chat mode to ask questions!')
    }
  }

  const stopAll = () => {
    stopSpeaking()
    stopListening()
    setAssistantText('Stopped. Click to start again.')
  }

  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported(!!(window.SpeechRecognition || window.webkitSpeechRecognition))
  }, [])

  return (
    <div className="voice-assistant" id="voice-assistant">
      <div
        className={`assistant-avatar ${isSpeaking ? 'speaking' : isListening ? 'listening' : ''}`}
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        <i className={`fas ${isSpeaking ? 'fa-volume-up' :
          isListening ? 'fa-microphone-alt' :
            'fa-microphone'
          } assistant-icon`}></i>
        {(isSpeaking || isListening) && <div className="assistant-pulse"></div>}
      </div>
      <div className={`assistant-panel ${isPanelOpen ? 'active' : ''}`}>
        <div className="assistant-header">
          <h4>AI Voice Assistant</h4>
          <button
            className="assistant-close"
            onClick={() => {
              setIsPanelOpen(false)
              stopAll()
            }}
            aria-label="Close assistant"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="assistant-content">
          <p id="assistant-text">{assistantText}</p>
          {conversationHistory.length > 0 && (
            <div className="conversation-history" style={{
              marginTop: '1rem',
              maxHeight: '150px',
              overflowY: 'auto',
              fontSize: '0.75rem',
              color: 'var(--text-light)'
            }}>
              {conversationHistory.slice(-3).map((msg, idx) => (
                <div key={idx} style={{ marginBottom: '0.5rem' }}>
                  <strong>{msg.type === 'user' ? 'You: ' : 'AI: '}</strong>
                  {msg.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="assistant-controls" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              className="assistant-btn"
              onClick={startGuide}
              disabled={isSpeaking || isListening}
              style={{
                display: (isSpeaking || isListening) ? 'none' : 'flex',
                opacity: (isSpeaking || isListening) ? 0.5 : 1,
                cursor: (isSpeaking || isListening) ? 'not-allowed' : 'pointer'
              }}
              aria-label="Start voice guide"
            >
              <i className="fas fa-play"></i>
              <span>Guide</span>
            </button>
            {isSupported && (
              <button
                className="assistant-btn"
                onClick={startChat}
                disabled={isSpeaking || isListening}
                style={{
                  display: (isSpeaking || isListening) ? 'none' : 'flex',
                  opacity: (isSpeaking || isListening) ? 0.5 : 1,
                  cursor: (isSpeaking || isListening) ? 'not-allowed' : 'pointer'
                }}
                aria-label="Start chat mode"
              >
                <i className="fas fa-comments"></i>
                <span>Chat</span>
              </button>
            )}
          </div>
          <button
            className="assistant-btn assistant-btn-stop"
            onClick={stopAll}
            style={{ display: (isSpeaking || isListening) ? 'flex' : 'none' }}
            aria-label="Stop"
          >
            <i className="fas fa-stop"></i>
            <span>Stop</span>
          </button>
          {isListening && isSupported && (
            <button
              className="assistant-btn"
              onClick={stopListening}
              style={{ display: 'flex', background: '#f59e0b' }}
              aria-label="Stop listening"
            >
              <i className="fas fa-microphone-slash"></i>
              <span>Stop Listening</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
