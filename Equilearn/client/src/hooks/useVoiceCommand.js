// src/hooks/useVoiceCommand.js

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function useVoiceCommand() {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const startRecording = () => {
    // Check if browser supports speech recognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('❌ Voice recognition not supported in this browser.\n\nPlease use Chrome or Edge for voice commands.');
      showCommandMenu();
      return;
    }

    // Check if already recording
    if (isRecording) {
      stopRecording();
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      // Configure for better detection
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.maxAlternatives = 3;

      recognitionRef.current.onstart = () => {
        setIsRecording(true);
        console.log('🎤 Voice recognition started');
        alert('🎤 Listening... Speak now!\n\nSay: home, courses, quantum, web, help\n\nOr wait 5 seconds for typing menu...');
      };

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        console.log('Interim:', interimTranscript);
        console.log('Final:', finalTranscript);

        if (finalTranscript) {
          const command = finalTranscript.toLowerCase().trim();
          console.log('🎤 Processing command:', command);
          processCommand(command);
          // Stop after successful command
          stopRecording();
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Voice error:', event.error);
        setIsRecording(false);
        
        if (event.error === 'no-speech') {
          console.log('No speech detected, trying again...');
          // Restart after a short delay
          setTimeout(() => {
            if (!isRecording) {
              startRecording();
            }
          }, 1000);
        } else if (event.error === 'not-allowed') {
          alert('❌ Microphone access denied!\n\nPlease:\n1. Click the microphone icon in your browser address bar\n2. Allow microphone access\n3. Refresh the page\n\nOpening typing menu...');
          showCommandMenu();
        } else if (event.error === 'audio-capture') {
          alert('🎤 No microphone found!\n\nPlease check your microphone is connected.\n\nOpening typing menu...');
          showCommandMenu();
        } else {
          console.log('Other error:', event.error);
          showCommandMenu();
        }
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
        console.log('Voice recognition ended');
      };

      // Start recognition
      recognitionRef.current.start();
      
      // Fallback to typing after 5 seconds
      setTimeout(() => {
        if (isRecording) {
          console.log('Timeout, switching to typing menu...');
          recognitionRef.current.stop();
          showCommandMenu();
        }
      }, 5000);

    } catch (error) {
      console.error('Voice error:', error);
      alert('❌ Voice recognition failed!\n\nOpening typing menu...');
      showCommandMenu();
    }
  };

  const showCommandMenu = () => {
    const command = prompt('🎤 Voice Commands:\n\n1. home - Go to home\n2. courses - Show courses\n3. quantum - Quantum course\n4. web - Web course\n5. help - Show this menu\n\nType a number (1-5) or command:');
    
    if (command) {
      const cmd = command.toLowerCase().trim();
      processCommand(cmd);
    }
  };

  const processCommand = (cmd) => {
    console.log('Processing command:', cmd);
    
    // More flexible matching
    if (cmd === '1' || cmd.includes('home') || cmd === 'home') {
      navigate('/');
      alert('✅ Going to home');
    } else if (cmd === '2' || cmd.includes('courses') || cmd === 'courses') {
      navigate('/courses');
      alert('✅ Going to courses');
    } else if (cmd === '3' || cmd.includes('quantum') || cmd.includes('physics') || cmd === 'quantum' || cmd === 'physics') {
      navigate('/courses/1');
      alert('✅ Opening quantum course');
    } else if (cmd === '4' || cmd.includes('web') || cmd.includes('development') || cmd === 'web') {
      navigate('/courses/2');
      alert('✅ Opening web course');
    } else if (cmd === '5' || cmd.includes('help') || cmd === 'help') {
      alert('🎤 Voice Commands:\n\n• home - Go to home page\n• courses - Show all courses\n• quantum - Open quantum course\n• web - Open web course\n• help - Show this help');
    } else if (cmd.includes('stop') || cmd === 'stop') {
      stopRecording();
      alert('🛑 Stopped listening');
    } else {
      console.log('Command not recognized:', cmd);
      // Don't show alert for unrecognized commands to avoid spam
    }
  };


  

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  const testMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      alert('✅ Microphone working!');
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch (error) {
      alert('❌ Microphone error: ' + error.message);
      return false;
    }
  };

  return {
    isRecording,
    startRecording,
    stopRecording,
    testMicrophone,
  };
}
