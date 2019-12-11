// looks into local storage by key and try to parse it into json
export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('state');
    if (serializeState === null) {
      return undefined;
    }
    return JSON.parse(serializeState);
  } catch (err) { // in any errors return undefined for safety
    return undefined;
  }
};