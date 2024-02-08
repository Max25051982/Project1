#Point(x=657, y=1158)
# Point(x=461, y=80)
# Point(x=1824, y=28)
# Point(x=866, y=1082)
# Point(x=54, y=894)
# Point(x=860, y=114)
# Point(x=182, y=68)
# Point(x=163, y=122)
# Point(x=652, y=1115)
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
