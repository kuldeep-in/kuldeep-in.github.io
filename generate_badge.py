#!/usr/bin/python3

import asyncio
import os
import re

#import aiohttp
import json
#from github_stats import Stats

################################################################################
# Helper Functions
################################################################################

def generate_output_folder() -> None:
    """
    Create the output folder if it does not already exist
    """
    if not os.path.isdir("svgBadges"):
        os.mkdir("svgBadges")

################################################################################
# Individual Image Generation Functions
################################################################################


def generate_overview(badgeItem) -> None:
    """
    Generate an SVG badge with summary statistics
    :param s: Represents badge statistics
    """
    with open("templates/badge.svg", "r") as f:
        output = f.read()

    output = re.sub("{{ title }}", badgeItem["title"], output)
    output = re.sub("{{ imageUrl }}", badgeItem["imageUrl"], output)
    #output = re.sub("{{ forks }}", f"{await s.forks:,}", output)
    #output = re.sub("{{ contributions }}", f"{await s.total_contributions:,}", output)
    #changed = (await s.lines_changed)[0] + (await s.lines_changed)[1]
    #output = re.sub("{{ lines_changed }}", f"{changed:,}", output)
    #output = re.sub("{{ views }}", f"{await s.views:,}", output)
    #output = re.sub("{{ repos }}", f"{len(await s.repos):,}", output)

    outputFilePath = "svgBadges/{0}.svg".format(badgeItem["title"])
    with open(outputFilePath, "w") as f:
        f.write(output)

##############################

def read_json_file(file_path):
  """Reads a JSON file and returns the data as a dictionary."""
  with open(file_path, "r") as f:
    data = json.load(f)
  return data

#def print_name_and_id(name, id):
#  """Prints the name and id of the person."""
#  print(f"Name: {name}")
#  print(f"ID: {id}")

################################################################################
# Main Function
################################################################################

def main():
  # Read the JSON file.
  data = read_json_file("badgeData.json")
  generate_output_folder()

  # Loop through the data and call the print_name_and_id function for each person.
  for badgeItem in data:
      generate_overview(badgeItem)
    #name = person["Name"]
    #id = person["id"]
    #print_name_and_id(name, id)

#async def main() -> None:
#    """
#    Generate all badges
#    """
#    access_token = os.getenv("ACCESS_TOKEN")
#    if not access_token:
#        # access_token = os.getenv("GITHUB_TOKEN")
#        raise Exception("A personal access token is required to proceed!")
#    user = os.getenv("GITHUB_ACTOR")
#    if user is None:
#        raise RuntimeError("Environment variable GITHUB_ACTOR must be set.")
#    exclude_repos = os.getenv("EXCLUDED")
#    excluded_repos = (
#        {x.strip() for x in exclude_repos.split(",")} if exclude_repos else None
#    )
#    exclude_langs = os.getenv("EXCLUDED_LANGS")
#    excluded_langs = (
#        {x.strip() for x in exclude_langs.split(",")} if exclude_langs else None
#    )

    
#    async with aiohttp.ClientSession() as session:
#        s = Stats(
#            user,
#            access_token,
#            session,
#            exclude_repos=excluded_repos,
#            exclude_langs=excluded_langs,
#            ignore_forked_repos=ignore_forked_repos,
#        )
#        await asyncio.gather(generate_languages(s), generate_overview(s))


if __name__ == "__main__":
    main()
    #json_file = "https://raw.githubusercontent.com/kuldeepsingh-in/kuldeepsingh-in.github.io/main/badgeData.json"
    #generate_svg(json_file)
    #asyncio.run(main())
