/**
 * Basic function outline to help get you started.
 */
const logic = (emailSubject, voyages) => {
  for (const voyage of voyages) {
    if (emailSubject.includes(voyage.attributes.vessel)) {
      return voyage.name
    }
  }
}

export { logic }
