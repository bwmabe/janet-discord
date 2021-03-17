#!/usr/bin/env python3

import discord
from discord.ext import commands
import sys


def load_token(filename):
    file = open(filename, 'r')
    return file.read()


bot = commands.Bot("!")


cmdlets = ['commands.inspire']


@bot.event
async def on_ready():
    print("hewwo? logged in as {}".format(bot.user))
    await bot.change_presence(activity=discord.Streaming(name="bananas", url="https://buttsex.info"))

for cmdlet in cmdlets:
    print("loading '%s'..." % (cmdlet))
    bot.load_extension(cmdlet)

bot.run(load_token('bot_token'), bot=True, reconnect=True)
