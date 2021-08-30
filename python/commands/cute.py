from discord.ext import commands
import aiohttp
import random


# Global so it can be loaded when starting the bot instead of on every call
# to the 'cute' command
cute_subreddits = []


def load_cute_urls(filename):
    # Load a file that contains all the cute image sources; hardcoded for now
    try:
        cute_file = open(filename, 'r')
        for source in cute_file.read().split('\n'):
            cute_subreddits.append(source)
        return cute_subreddits
    except Exception as e:
        print("Could not load cute file '{}'".format(filename))
        print(e)
        exit(1)


# Get a reddit random.json file; process to make sure that it's points to a URI
# from an approriate website (i.e. one that embeds properly in discord).
# Chooses one of the source subreddits at random
# Approriate Sources: imgur, i.reddit, gfycat, streamable(?)
async def get_cute_image():
    valid_url = False
    url = ""
    headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'}
    while not valid_url:
        async with aiohttp.ClientSession() as session:
            async with session\
                       .get(random.choice(cute_subreddits)
                            + "/random.json", headers=headers)\
                       as response:
                content = await response.json()
                url = content[0]['data']['children'][0]['data']['url']
                if 'i.reddit.com' in url or 'gfycat.com' in url or 'imgur.com' in url:
                    valid_url = True
    return url


class Cute(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='cute')
    async def cute(self, ctx):
        image = await get_cute_image()

        await ctx.send(image)


def setup(bot):
    # Load cutedataset into memory here
    load_cute_urls('resources/cute_subs')
    bot.add_cog(Cute(bot))


if __name__ == "__main__":
    load_cute_urls('resources/cute_subs')
    for i in cute_subreddits:
        print(i)
