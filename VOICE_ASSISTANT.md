# AI Voice Assistant Documentation

## Overview

The portfolio includes an interactive AI voice assistant that uses open-source Web Speech API for both Speech-to-Text (STT) and Text-to-Speech (TTS) capabilities.

## Features

### 1. Speech-to-Text (STT)
- Uses **Web Speech API** (`SpeechRecognition` or `webkitSpeechRecognition`)
- Browser-native, no external API keys required
- Real-time voice input processing
- Automatic language detection (English)

### 2. Text-to-Speech (TTS)
- Uses **Web Speech API** (`speechSynthesis`)
- Natural voice selection (prefers Google/Microsoft voices)
- Adjustable rate, pitch, and volume
- Cross-browser compatible

### 3. AI Context Awareness
- Portfolio-specific knowledge base
- Understands questions about:
  - Experience and work history
  - Skills and technologies
  - Projects and achievements
  - Contact information
  - Location and background
- Pattern matching for intelligent responses

## Modes

### Guide Mode
- Narrated tour of the portfolio
- One-way communication
- Pre-scripted content
- Best for first-time visitors

### Chat Mode
- Interactive conversation
- Two-way communication (STT + TTS)
- Context-aware responses
- Conversation history
- Best for detailed inquiries

## Usage

### Starting the Assistant

1. Click the floating microphone button (bottom-right)
2. Choose a mode:
   - **Guide**: Click "Guide" for narrated tour
   - **Chat**: Click "Chat" for interactive conversation

### Chat Mode Workflow

1. Click "Chat" button
2. Allow microphone access when prompted
3. Wait for the greeting
4. Speak your question naturally
5. AI processes and responds with voice
6. Continue the conversation

### Example Questions

- "What is your experience?"
- "Tell me about your skills"
- "What projects have you worked on?"
- "How can I contact you?"
- "Where are you located?"
- "What technologies do you use?"
- "Tell me about TechHalo.ai"
- "What is your current role?"

## Technical Implementation

### Speech Recognition Setup

```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = false
recognition.interimResults = false
recognition.lang = 'en-US'
```

### Speech Synthesis Setup

```javascript
const utterance = new SpeechSynthesisUtterance(text)
utterance.rate = 0.9
utterance.pitch = 1
utterance.volume = 0.8
speechSynthesis.speak(utterance)
```

### AI Response Generation

The assistant uses pattern matching and context awareness:

1. **Input Processing**: Normalizes user input (lowercase, trim)
2. **Pattern Matching**: Matches against predefined patterns
3. **Context Retrieval**: Pulls relevant information from portfolio data
4. **Response Generation**: Creates natural language responses
5. **Voice Output**: Speaks the response using TTS

## Browser Compatibility

### Speech Recognition (STT)
- ✅ Chrome/Edge: Full support
- ✅ Safari: Partial support (webkit prefix)
- ⚠️ Firefox: Not supported (requires polyfill)

### Speech Synthesis (TTS)
- ✅ Chrome/Edge: Full support
- ✅ Safari: Full support
- ✅ Firefox: Full support

### Security Requirements

- Speech Recognition requires **HTTPS** or **localhost**
- Microphone access requires user permission
- Some browsers may require explicit permission grants

## Customization

### Adding New Response Patterns

Edit `generateAIResponse()` function in `VoiceAssistant.js`:

```javascript
if (input.match(/\b(your pattern here)\b/)) {
  return 'Your response here'
}
```

### Modifying Portfolio Context

Update the `portfolioContext` object:

```javascript
const portfolioContext = {
  name: 'Your Name',
  role: 'Your Role',
  // ... add more fields
}
```

### Voice Settings

Adjust TTS parameters:

```javascript
utterance.rate = 0.9    // Speed (0.1 - 10)
utterance.pitch = 1     // Pitch (0 - 2)
utterance.volume = 0.8   // Volume (0 - 1)
```

## Future Enhancements

Potential improvements:

1. **External AI Integration**: Connect to OpenAI API or Hugging Face for more intelligent responses
2. **Multi-language Support**: Add support for multiple languages
3. **Voice Commands**: Add navigation commands (e.g., "go to skills section")
4. **Conversation Memory**: Persist conversation history
5. **Custom Wake Word**: Add wake word detection
6. **Offline Mode**: Use local AI models for offline functionality

## Troubleshooting

### Microphone Not Working
- Check browser permissions
- Ensure HTTPS or localhost
- Try a different browser (Chrome recommended)

### No Voice Output
- Check browser console for errors
- Verify speech synthesis is supported
- Try adjusting voice settings

### Recognition Errors
- Speak clearly and at moderate pace
- Reduce background noise
- Check microphone quality
- Ensure good internet connection (for some browsers)

## License

Uses Web Speech API - browser-native, no external dependencies or API keys required.

