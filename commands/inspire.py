from discord.ext import commands
import aiohttp


class Inspire(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='test')
    async def test_cmd(self, ctx):
        await ctx.send("icles")

    @commands.command(name='inspire')
    async def inspire(self, ctx):
        async with aiohttp.ClientSession() as session:
            async with session\
                       .get("https://inspirobot.me/api?generate=true")\
                       as response:
                await ctx.send(await response.text())


def setup(bot):
    bot.add_cog(Inspire(bot))
