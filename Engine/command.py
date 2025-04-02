import pyttsx3


def speak(text):
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[1].id)
    engine.setProperty('rate', 170)
    engine.say(text)
    engine.runAndWait()

speak("India is my country and all indians are my brothers and sisters")