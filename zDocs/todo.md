# TO DO

Functionality - display information on pokemon by number / name. Appearance mimics the pokedex

Main views - background, two pages of pokedex with data - closed pokedex with page turn to open

closed pokedex open on yellow arrow as seen in image,

##Components:

### Seperate/not on the pokedex

Searchbar - autocomplete search bar for pokemon by name - at top or bottom but seperate to pokedex

Front cover - using css to flip open (closed?)
###Left pokedex page:
TOP / header - this could re-used on back page to show closed pokedex - has 3 lights, red could show off/closed/error, yellow waiting for update from api, green for ready
display - gameboy screen coloured background with sprite of the requested pokemon - display could have button to make pokemon cry, also do this on componentdidmount?
options - example has gender, shiny, front/back view

description - could be on either page, maybe have a speaker button linked with Watson text-to-speech?

###page divider

###Right pokedex page:
info - stats, types
evolution chain sprites - 3 components
blue buttons? not sure functionality
info - attacks? scroll between
buttons - previous / next pokemon, with num selector between

##Features / functions
Get a pokemon by number

Search pokemon, autocomplete? js30 has good example for autocomplete
pokeapi.co/api/v2/pokemon?limit=802 gets all unique pokemon names - missing 803->809
display name and #
Pokemon cry? http://git.veekun.com/pokedex-media.git/tree/HEAD:/pokemon/cries has all the cries

##Design
This is a template idea
![](https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex-300x229.png)
sprite on left, detail on right, stats etc.
header?
searchbar seperate?

##Decisions
Responsive - two pages when screen is big enough but phone display?
How much info?
Autocomplete search - above? won't fit on pokedex
Shiny? Could do as boolean with button to flip switch
Front/back view? All pokemon seem to have it in sprites, could be boolean as above
Maybe store searched pokemon in an array to limit api calls
