---
outline: deep
---

# HoloDelta JSON

### Overall structure

This JSON file contains the information of a Hololive OCG deck in the following format:

```json
{
  "deckName": "Test Deck",
  "oshi": ["hBD24-005", 0],
  "deck": [
    ["hBP01-009", 2, 0],
    ["hBP01-011", 2, 0],
    ["hBP01-017", 3, 0],
    ["hBP01-015", 3, 0]
  ],
  "cheerDeck": [
    ["hY01-003", 3, 0],
    ["hY01-004", 3, 0],
    ["hY01-005", 3, 0]
  ]
}
```

In this format:

- **`deckName`**  
  Name of the deck to be saved.

- **`oshi`**  
  Array of oshi cards, usually it contains only a single oshi card per Hololive OCG Rules.

- **`deck`**  
  Array of main deck cards, maximum cards allowed is 50 per game rules.

- **`cheerDeck`**  
  Array of cheer deck cards, maximum cards allowed is 20 per game rules.

### Card structure

```json
{
  "deckName": "Test Deck",
  "oshi": ["hBD24-005", 0], // [!code focus]
  "deck": [
    ["hBP01-009", 2, 0], // [!code focus]
    . . .
  ],
  "cheerDeck": [
    ["hY01-003", 3, 0], // [!code focus]
    . . .
  ]
}
```

A single card is an array of values. How many elements inside the array depends on the
type of card:

**Oshi**

```js
["hBD24-005", 0];
```

- `"hBD24-005"`: The card number to be included.
- `0`: The variant index of the card.

**Main deck/Cheer deck**

```js
["hBP01-009", 2, 0];
```

- `"hBP01-009"`: The card number to be included.
- `2`: The amount of cards to be included.
- `0`: The variant index of the card.
