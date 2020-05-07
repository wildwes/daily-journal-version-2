const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
        <div class="journal_entry">
        <h2 class="concepts">Concept: ${journalEntry.concepts}</h2>
        <p class="date">
          <label class="date_class">Date:</label> ${journalEntry.date}</p>
        <p class="entry">
          <label class="entry_class">Entry:</label> ${journalEntry.entry}</p>
        <p class="mood">
          <label class="mood_class">Mood:</label> ${journalEntry.mood}</p></div>
      `;
};
// Reference this syntax for exports!!!
export default { makeJournalEntryComponent }