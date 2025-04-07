import os
import eel
from Engine.features import *
eel.init("www")
from Engine.command import *  

#To Open in App mode
os.system('start msedge.exe --app="http:/localhost:8000/index.html"')
eel.start('index.html', mode=None, host='localhost', block=True)

#To play assistant sound
playAssistantSound()