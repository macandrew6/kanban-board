// looks into local storage by key and try to parse it into json
export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('allListItems');
    if (serializeState === null) {
      return undefined;
    }
    let json = JSON.parse(serializeState);
    const jsonObj = {};
    Object.values(json).forEach((el, i) => {
      jsonObj[i] = el;
    });
    return {'allListItems': jsonObj};
  } catch (err) { // in any errors return undefined for safety
    return undefined;
  }
};

// function to save the state into local storage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('allListItems', serializedState);
  } catch (err) {
    return undefined;
  }
};