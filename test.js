import { logic } from "./logic.js"
import { test } from "node:test"
import assert from "assert"

test("Example test", (t) => {
  const voyages = [
    {
      "name": "Ever Given-1",
      "attributes": {
        "vessel": "Ever Given",
        "voyageNumber": 1,
        "date": "2021-03-09"
      }
    }
  ]
  assert.strictEqual("Ever Given-1", logic("Ever Given is in port", voyages))
})
