# React 18 Project

A really simple project involving react 18 so i can see an example of the new concurrency rendering techniques.

Set Okta settings in `default.env`, renaming the file to `.env`

# Details

`/root` -> Information on what it do. Login options.
`/decks` -> list of public decks to show
`/decks/{id}` -> breakdown of cards in deck
`/callback` -> Page for returning from authorization
`/dashboard` -> Page displaying personal stats (decks, usage, card breakdowns)
`/dashboard/decks` -> Show your currently created decks
`/dashboard/decks/new` -> Create a new deck
`/dashboard/decks/{id}` -> Manage existing deck
`/dashboard/`

each deck will generate a unique id that can be referenced via the api
api specific:

`/decks/{id}`
`/decks/{id}/black`
`/decks/{id}/white`
`/decks/{id}/stats`
`/cards/{id}/`
