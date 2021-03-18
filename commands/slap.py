from discord.ext import commands
import aiohttp
import random
import os


# @return a random file from the given directory
def rand_image(image_dir):
    return random.choice(os.listdir(image_dir))


class Slap(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='slap')
    async def trout_slap(self, ctx):
        weapons = ['trout', 'seabass', 'wet trout', 'soggy octopus', 'sunfish',
                   'baby shark (doo doo doo)', 'dry trout', 'rubber chicken',
                   'comically oversized pencil', 'phallic object', 'clownfish',
                   'candlestick, in the study',
                   '- oh, just their hand... how boring', 'trout', 'trout',
                   'trout', 'trout', 'trout', 'trout', 'trout', 'trout', 'trout',
                   'trout, AND THERE\'S BERNIE SANDERS WITH A STEEL CHAIR!',
                   'trout', 'trout', 'trout', 'trout', 'trout', 'trout', 'trout']

        await ctx.send("\*{} slaps you with a {}\*"\
                       .format(ctx.message.author.name, random.choice(weapons)))


    @commands.command(name='bonk')
    async def bonk(self, ctx):
        await ctx.send("bonk, go to horny jail")


def setup(bot):
    bot.add_cog(Slap(bot))
