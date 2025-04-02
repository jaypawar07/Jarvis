#This we will use for playing the sound when we open the app
from playsound import playsound

def playAssistantSound():
    music_dir = "www\\assets\\audio\\start_sound.mp3"
    playsound(music_dir)