/***
 * This script is purely for local demo purposes, passing basic emailSubject and voyages arguments into the `logic`
 * function and printing the response.
 */
import { logic } from "./logic.js"

const emailSubject = "23/03/2021: Ever Given stuck in Suez Canal"

const voyages = [
  {
    "name": "Ever Given-1",
    "attributes": {
      "vessel": "Ever Given",
      "voyageNumber": 1,
      "date": "2021-03-09"
    }
  },
  {
    "name": "Ever Given-2",
    "attributes": {
      "vessel": "Ever Given",
      "voyageNumber": 2,
      "date": "2021-03-22"
    }
  },
  {
    "name": "AS Alexandria-1",
    "attributes": {
      "vessel": "AS Alexandria",
      "voyageNumber": 1,
      "date": "2021-03-22"
    }
  }
]

console.log(logic(emailSubject, voyages))
