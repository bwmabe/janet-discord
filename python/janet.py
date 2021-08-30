#!/usr/bin/env python3

import discord
from discord.ext import commands
import logging
import sys


def load_token(filename):
    file = open(filename, 'r')
    return file.read()


bot = commands.Bot("!")


cmdlets = ['commands.inspire', 'commands.slap', 'commands.cute']


@bot.event
async def on_ready():
    print("hewwo? logged in as {}".format(bot.user))
    await bot.change_presence(
        activity=discord.Streaming(name="jeremy bearimy",
                                   url="https://hamington.net"))

for cmdlet in cmdlets:
    bot.load_extension(cmdlet)


logger = logging.getLogger('discord')
logger.setLevel = (logging.DEBUG)
handler = logging.FileHandler(filename='janet-bot.log',
                              encoding='utf-8',
                              mode='w')
handler.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)
bot.run(load_token('bot_token'), bot=True, reconnect=True)
