
import pyautogui as bot
import time

bot.moveTo(657,1158,1)    # зайти в координаты мышкой
bot.click()                # клик мышкой
time.sleep(1)
bot.typewrite('Firefox')
bot.press('enter')
bot.hotkey('win','up')
bot.moveTo(461,80,1)       # зайти в координаты мышкой
bot.click()
time.sleep(1)
bot.typewrite('https://web.telegram.org/')
bot.press('enter')        # нажать кнопку
time.sleep(1)
bot.moveTo(215,137,1)    # зайти в координаты мышкой
bot.click()                 # клик мышкой
time.sleep(1)
bot.typewrite('TOP_Python311')
time.sleep(1)
bot.moveTo(108,364,1)    # зайти в координаты мышкой
bot.click()
time.sleep(1)
bot.moveTo(866,1082,1)     # зайти в координаты мышкой
bot.typewrite('Privet! Kak uchoba?')
