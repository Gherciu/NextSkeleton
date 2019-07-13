### This directory should contain only section level components!

Like as:
Header
LastTransactionsSection
CommissionsSection
RegistrationForm
Footer
...

### The structure of a container foulder should be:

/Header

- /components
  - /tests - (HeaderItem and HeaderList)
  - HeaderList.js - (A non common component used in this container.)
  - HeaderItem.js - (A non common component used in this container.)
- /tests - (tests for actions, selectors, reducer, index.js etc.)
- actions.js - (Action creators used in this container)
- constants.js - (Magic strings and Action Types)
- epics.js - (Epics used in this container. Atention!!! do not forget to connect this epics in store/epic.js)
- reducer.js - (Reducer used in this container. Atention!!! do not forget to connect this reducer in store/reducer.js)
- selectors.js - (Redux selector used in this container)
- validation-schemes.js - (Validations schemes used in this container)
- index.js - (Header Container)
- etc...
